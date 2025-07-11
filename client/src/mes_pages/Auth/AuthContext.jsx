
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //const [token, setToken] = useState(localStorage.getItem('shea_token'));
    const navigate = useNavigate();

    // Configuration d'axios pour inclure le token
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            localStorage.setItem('shea_token', token);
            fetchUser();
        } else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('shea_token');
        }
    }, [token]);

    const fetchUser = async () => {
        try {
            const response = await axios.get('/api/auth/profile');
            setUser(response.data.user);
        } catch (error) {
            logout();
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post('/api/auth/register', userData);
            setToken(response.data.token);
            setUser(response.data.user);
            navigate('/');
            return { success: true };
        } catch (error) {
            return {
                success: false,
                errors: error.response?.data?.errors || {}
            };
        }
    };

    const login = async (credentials) => {
        try {
            const response = await axios.post('/api/auth/login', credentials);
            setToken(response.data.token);
            setUser(response.data.user);
            navigate('/');
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Erreur de connexion'
            };
        }
    };

    const logout = async () => {
        try {
            await axios.post('/api/auth/logout');
            setToken(null);
            setUser(null);
            navigate('/connexion');
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
        }
    };


    const [token, setToken] = useState(localStorage.getItem('shea_token'));

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            localStorage.setItem('shea_token', token);
            fetchUser();
        } else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('shea_token');
        }
    }, [token]);
    return (
        <AuthContext.Provider value={{ user, token, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);