const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const User = require('../models/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

const sendEmail = require('../utils/sendEmail');

// @route   POST /api/auth/signup
// @desc    Register new user & Send OTP
// @access  Public
router.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: 'Please add all fields' });
        }

        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Generate 6-digit verification code
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        const verificationCodeExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

        // Create user (Unverified)
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            verificationCode,
            verificationCodeExpires,
            isVerified: false
        });

        if (user) {
            const message = `Your verification code is: ${verificationCode}`;
            try {
                await sendEmail({
                    email: user.email,
                    subject: 'Clueso Account Verification',
                    message
                });

                res.status(201).json({
                    message: 'Registered! Please check your email for verification code.',
                    email: user.email
                });
            } catch (emailError) {
                console.error("Email send error:", emailError);
                // Still return success but maybe warn? Or just let them know to check logs if in dev.
                res.status(201).json({
                    message: 'Registered! Verification email failed to send (check console if in dev).',
                    email: user.email
                });
            }

        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   POST /api/auth/verify
// @desc    Verify OTP
// @access  Public
router.post('/verify', async (req, res) => {
    try {
        const { email, code } = req.body;

        const cleanEmail = email.trim();
        const cleanCode = code.trim();

        const user = await User.findOne({
            email: cleanEmail,
            verificationCode: cleanCode,
            verificationCodeExpires: { $gt: new Date() }
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired code' });
        }

        user.isVerified = true;
        user.verificationCode = undefined;
        user.verificationCodeExpires = undefined;
        await user.save();

        res.json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            profilePicture: user.profilePicture,
            token: generateToken(user._id)
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   POST /api/auth/login
// @desc    Authenticate a user
// @access  Public
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check for user email
        const user = await User.findOne({ email });

        // Check if user has a password (email/password account)
        if (user && user.password) {
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                // Check if verified
                if (!user.isVerified) {
                    // Optionally resend code here if needed, but for now just error
                    return res.status(400).json({ message: 'Please verify your email address first.' });
                }

                return res.json({
                    _id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    profilePicture: user.profilePicture, // Ensure profilePicture is returned
                    token: generateToken(user._id)
                });
            }
        }

        // If we reach here, either user doesn't exist, password didn't match, or user has no password (Google Auth)
        if (user && !user.password) {
            return res.status(400).json({ message: 'Please sign in with Google' });
        }

        res.status(400).json({ message: 'Invalid credentials' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   POST /api/auth/google
// @desc    Google Login
// @access  Public
router.post('/google', async (req, res) => {
    try {
        const { token } = req.body;

        let googleId, email, name, picture;

        // Try validating as ID Token first (JWT)
        try {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID
            });
            const payload = ticket.getPayload();
            googleId = payload.sub;
            email = payload.email;
            name = payload.name;
            picture = payload.picture;
        } catch (idTokenError) {
            // If ID Token validation fails, assume it's an Access Token and fetch user profile
            try {
                const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const profile = response.data;
                googleId = profile.sub;
                email = profile.email;
                name = profile.name;
                picture = profile.picture;
            } catch (accessTokenError) {
                console.error('Access Token Error:', accessTokenError.message);
                return res.status(400).json({ message: 'Invalid Token' });
            }
        }

        let user = await User.findOne({ email });

        if (user) {
            // User exists, update googleId or return token
            if (!user.googleId) {
                user.googleId = googleId;
                if (!user.profilePicture) user.profilePicture = picture;
                await user.save();
            }

            res.json({
                _id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                profilePicture: user.profilePicture,
                token: generateToken(user._id)
            });
        } else {
            // Create new user
            const nameParts = name.split(' ');
            const firstName = nameParts[0];
            const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

            // Generate a random password for google users (they won't use it but it satisfies schema if required, though we made it optional if googleId is present)

            user = await User.create({
                firstName,
                lastName,
                email,
                googleId,
                profilePicture: picture
            });

            res.status(201).json({
                _id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                profilePicture: user.profilePicture,
                token: generateToken(user._id)
            });
        }
    } catch (error) {
        console.error('Google Auth Error:', error);
        res.status(400).json({ message: 'Google Auth Failed' });
    }
});

module.exports = router;
