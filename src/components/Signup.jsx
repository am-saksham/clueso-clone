import React, { useState } from 'react';
import { Eye, EyeOff, Key } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/api';
import { useGoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';

const Signup = () => {
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { firstName, lastName, email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await authService.register(formData);
            toast.success("Verification code sent to your email!");
            setStep(2);
        } catch (err) {
            const msg = err.response?.data?.message || 'Signup failed';

            if (msg === 'User already exists') {
                setError('Account already exists. Please log in.');
                toast.error(
                    <div>
                        Account exists.
                        <span
                            onClick={() => navigate('/login')}
                            style={{ textDecoration: 'underline', cursor: 'pointer', marginLeft: '5px', fontWeight: 'bold' }}
                        >
                            Log in?
                        </span>
                    </div>,
                    { duration: 5000 }
                );
            } else {
                setError(msg);
                toast.error(msg);
            }
        } finally {
            setLoading(false);
        }
    };

    const onVerify = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await authService.verifyEmail({ email, code: otp });
            toast.success("Email verified! Logging you in...");
            navigate('/');
        } catch (err) {
            const msg = err.response?.data?.message || 'Verification failed';
            setError(msg);
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    };

    const loginGoogle = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                setLoading(true);
                await authService.googleLogin(tokenResponse.credential || tokenResponse.access_token);
                toast.success("Successfully signed up with Google!");
                navigate('/');
            } catch (err) {
                console.error(err);
                setError('Google Signup Failed');
                toast.error("Google Signup Failed");
            } finally {
                setLoading(false);
            }
        },
        onError: () => {
            setError('Google Signup Failed');
            toast.error("Google Signup Failed");
        },
    });

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f3f4f6', // Light gray background
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Inter', sans-serif",
            padding: '20px'
        }}>
            {/* Logo */}
            <div style={{ marginBottom: '24px' }}>
                <img
                    src="https://img.propelauth.com/e44306f6-f323-4d22-a673-2f0d54e096ec_c89b257e-e14d-465c-becc-35d8483114e5.png"
                    alt="Logo"
                    style={{ width: '64px', height: '64px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
            </div>

            {/* Heading */}
            <h1 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '32px'
            }}>
                {step === 1 ? 'Create an account' : 'Verify your email'}
            </h1>

            {/* Card */}
            <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                padding: '40px',
                width: '100%',
                maxWidth: '480px' // Slightly wider to accommodate two columns
            }}>
                {error && <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

                {step === 1 ? (
                    <>
                        {/* Social Buttons */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                            <button
                                onClick={() => loginGoogle()}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    width: '100%',
                                    padding: '10px 16px',
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#374151',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s'
                                }} className="hover:bg-gray-50">
                                {/* Google Icon (SVG) */}
                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Sign up with Google
                            </button>

                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                width: '100%',
                                padding: '10px 16px',
                                backgroundColor: 'white',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: '500',
                                color: '#374151',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s'
                            }} className="hover:bg-gray-50">
                                <Key size={18} color="#4b5563" />
                                Sign up with SSO
                            </button>
                        </div>

                        {/* Divider */}
                        <div style={{ position: 'relative', margin: '24px 0', textAlign: 'center' }}>
                            <div style={{
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                width: '100%',
                                height: '1px',
                                backgroundColor: '#e5e7eb'
                            }}></div>
                            <span style={{
                                position: 'relative',
                                backgroundColor: 'white',
                                padding: '0 12px',
                                color: '#9ca3af',
                                fontSize: '12px',
                                fontWeight: '500'
                            }}>OR</span>
                        </div>

                        {/* Form */}
                        <form onSubmit={onSubmit}>
                            {/* Name Fields */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                                        First name <span style={{ color: '#ef4444' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={firstName}
                                        onChange={onChange}
                                        required
                                        style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                                        Last name <span style={{ color: '#ef4444' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={lastName}
                                        onChange={onChange}
                                        required
                                        style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                                    Email <span style={{ color: '#ef4444' }}>*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    required
                                    style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                                />
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                                    Password <span style={{ color: '#ef4444' }}>*</span>
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                        required
                                        style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    backgroundColor: loading ? '#f9a8d4' : '#e879f9',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    transition: 'background-color 0.2s'
                                }}
                            >
                                {loading ? 'Sending code...' : 'Sign up with email'}
                            </button>
                        </form>
                    </>
                ) : (
                    <form onSubmit={onVerify}>
                        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
                            <p style={{ color: '#6b7280', marginBottom: '16px' }}>
                                We've sent a 6-digit verification code to <strong>{email}</strong>
                            </p>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px', textAlign: 'left' }}>
                                Verification Code
                            </label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="123456"
                                maxLength="6"
                                required
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    borderRadius: '6px',
                                    border: '1px solid #d1d5db',
                                    fontSize: '1.2rem',
                                    outline: 'none',
                                    letterSpacing: '4px',
                                    textAlign: 'center'
                                }}
                            />
                        </div>
                        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', backgroundColor: loading ? '#f9a8d4' : '#e879f9', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
                            {loading ? 'Verifying...' : 'Verify Email'}
                        </button>
                        <div style={{ marginTop: '16px', textAlign: 'center' }}>
                            <button type="button" onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#6b7280', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.9rem' }}>
                                Back to signup
                            </button>
                        </div>
                    </form>
                )}
            </div>

            {/* Footer */}
            <div style={{ marginTop: '24px', fontSize: '14px', color: '#4b5563' }}>
                Already have an account? <Link to="/login" style={{ color: '#e879f9', textDecoration: 'none', fontWeight: '500' }}>Log in</Link>
            </div>
        </div>
    );
};

export default Signup;
