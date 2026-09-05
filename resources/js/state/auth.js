import api from '../services/api.js';

class AuthState {
    constructor() {
        this.token = localStorage.getItem('habeshahomes_token') || null;
        this.user = JSON.parse(localStorage.getItem('habeshahomes_user') || 'null');
        this.currency = localStorage.getItem('habeshahomes_currency') || 'ETB';
        this.listeners = [];
    }

    subscribe(callback) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(cb => cb !== callback);
        };
    }

    notify() {
        this.listeners.forEach(cb => cb(this));
    }

    isLoggedIn() {
        return !!this.token && !!this.user;
    }

    isAgent() {
        return this.user && (this.user.user_type === 'agent' || this.user.user_type === 'landlord' || this.user.user_type === 'admin');
    }

    isAdmin() {
        return this.user && this.user.user_type === 'admin';
    }

    async login(email, password) {
        const response = await api.post('/auth/login', {
            email,
            password,
            device_name: 'web_browser'
        });

        this.token = response.data.token;
        this.user = response.data.user;

        localStorage.setItem('habeshahomes_token', this.token);
        localStorage.setItem('habeshahomes_user', JSON.stringify(this.user));

        this.notify();
        return response.data;
    }

    async register(data) {
        const response = await api.post('/auth/register', {
            ...data,
            device_name: 'web_browser'
        });

        this.token = response.data.token;
        this.user = response.data.user;

        localStorage.setItem('habeshahomes_token', this.token);
        localStorage.setItem('habeshahomes_user', JSON.stringify(this.user));

        this.notify();
        return response.data;
    }

    async logout() {
        try {
            if (this.token) {
                await api.post('/auth/logout');
            }
        } catch (e) {
            console.warn('Logout API warning:', e);
        } finally {
            this.token = null;
            this.user = null;
            localStorage.removeItem('habeshahomes_token');
            localStorage.removeItem('habeshahomes_user');
            this.notify();
        }
    }

    async fetchMe() {
        if (!this.token) return null;
        try {
            const response = await api.get('/auth/me');
            this.user = response.data.user;
            localStorage.setItem('habeshahomes_user', JSON.stringify(this.user));
            this.notify();
            return this.user;
        } catch (e) {
            this.token = null;
            this.user = null;
            localStorage.removeItem('habeshahomes_token');
            localStorage.removeItem('habeshahomes_user');
            this.notify();
            return null;
        }
    }

    setCurrency(curr) {
        this.currency = curr;
        localStorage.setItem('habeshahomes_currency', curr);
        this.notify();
    }

    formatPrice(amount, originalCurrency = 'ETB') {
        const num = parseFloat(amount) || 0;
        // Simple approximate conversion if currencies differ: 1 USD ≈ 125 ETB
        const usdRate = 125;

        if (this.currency === 'USD') {
            const val = originalCurrency === 'USD' ? num : (num / usdRate);
            return `$${Math.round(val).toLocaleString()}`;
        } else {
            const val = originalCurrency === 'ETB' ? num : (num * usdRate);
            return `${Math.round(val).toLocaleString()} ETB`;
        }
    }
}

export const authState = new AuthState();
