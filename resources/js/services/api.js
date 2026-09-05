import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
});

// Request interceptor: attach token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('habeshahomes_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));

// Response interceptor: handle 401 and errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('habeshahomes_token');
            localStorage.removeItem('habeshahomes_user');
            window.dispatchEvent(new CustomEvent('auth:updated', { detail: { user: null } }));
        }

        // Extract friendly message
        let message = 'An unexpected error occurred.';
        if (error.response && error.response.data) {
            if (error.response.data.message) {
                message = error.response.data.message;
            } else if (error.response.data.errors) {
                const firstKey = Object.keys(error.response.data.errors)[0];
                message = error.response.data.errors[firstKey][0];
            }
        }
        error.friendlyMessage = message;
        return Promise.reject(error);
    }
);

export default api;
