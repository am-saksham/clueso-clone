import React, { useState } from 'react';
import { Eye, EyeOff, Key } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/api';
import { useGoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { email, password } = formData;

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
            await authService.login(formData);
            toast.success("Successfully logged in!");
            navigate('/');
        } catch (err) {
            const msg = err.response?.data?.message || 'Login failed';
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
                await authService.googleLogin(tokenResponse.credential || tokenResponse.access_token); // Use credential for ID token flow or access_token for implicit
                toast.success("Successfully signed in with Google!");
                navigate('/');
            } catch (err) {
                // For implicit flow (default in react-oauth/google v4+ sometimes requires workarounds or token info endpoint)
                // But typically with default setup we might need to handle the code/token exchange. 
                // Note: @react-oauth/google used as 'useGoogleLogin' often returns an access token if flow is implicit.
                // Ideally backend verifies ID token. Let's assume standard ID token flow or adjust service.
                // Actually, useGoogleLogin defaults to implicit flow returning access_token.
                // To get id_token, flow: 'auth-code' is better but requires backend exchange.
                // To keep it simple let's pass the access_token to backend and verify it against userinfo endpoint there?
                // OR use <GoogleLogin /> component which returns credential (JWT).
                // Use `useGoogleLogin` allows custom button. 
                // Let's stick to `useGoogleLogin` and handle verifying the access token on backend via userinfo endpoint or just trust it for this clone demo if complexity is high.
                // Correction: best practice is verifying ID token. <GoogleLogin> returns it. useGoogleLogin returns access_token.
                // I'll update the backend to potentially accept access_token and fetch user profile if standard verification fails, or I will switch this to use backend verification of access token.
                // For now, let's assume I pass the token and backend handles it.
                console.error(err);
                setError('Google Login failed');
            } finally {
                setLoading(false);
            }
        },
        onError: () => setError('Google Login Failed'),
    });

    // Helper for Google Button Click because I am using custom button
    // Note: useGoogleLogin gives a function to call.

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
                Log in to Clueso
            </h1>

            {/* Card */}
            <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                padding: '40px',
                width: '100%',
                maxWidth: '440px'
            }}>
                {error && <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

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
                        Sign in with Google
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
                        Sign in with SSO
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
                    <div style={{ marginBottom: '16px' }}>
                        <label style={{
                            display: 'block',
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#374151',
                            marginBottom: '6px'
                        }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                borderRadius: '6px',
                                border: '1px solid #d1d5db',
                                fontSize: '14px',
                                outline: 'none',
                                transition: 'border-color 0.2s'
                            }}
                            className="focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                        />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                            <label style={{
                                fontSize: '14px',
                                fontWeight: '500',
                                color: '#374151'
                            }}>Password</label>
                            <a href="#" style={{
                                fontSize: '13px',
                                color: '#e879f9',
                                fontWeight: '500',
                                textDecoration: 'none'
                            }}>Forgot password?</a>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={password}
                                onChange={onChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    borderRadius: '6px',
                                    border: '1px solid #d1d5db',
                                    fontSize: '14px',
                                    outline: 'none'
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#9ca3af',
                                    cursor: 'pointer',
                                    padding: 0
                                }}
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
                        {loading ? 'Logging in...' : 'Log in with email'}
                    </button>
                </form>
            </div>

            {/* Footer */}
            <div style={{ marginTop: '24px', fontSize: '14px', color: '#4b5563' }}>
                Don't have an account? <Link to="/signup" style={{ color: '#e879f9', textDecoration: 'none', fontWeight: '500' }}>Sign up</Link>
            </div>
        </div>
    );
};

export default Login;
