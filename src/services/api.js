import axios from 'axios';

const API_URL = '/api/auth/';

// Create axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const register = async (userData) => {
    const response = await api.post('signup', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
};

const verifyEmail = async (data) => {
    const response = await api.post('verify', data);
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const login = async (userData) => {
    const response = await api.post('login', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
};

const googleLogin = async (token) => {
    const response = await api.post('google', { token });

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    register,
    verifyEmail,
    login,
    logout,
    googleLogin
};

export default authService;
