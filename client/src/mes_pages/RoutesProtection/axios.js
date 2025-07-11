// resources/js/utils/axios.js
import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// Intercepteur pour gérer les erreurs
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Gérer la déconnexion si le token est invalide
            const { logout } = require('../AuthContext').useAuth();
            logout();
        }
        return Promise.reject(error);
    }
);

export default api;