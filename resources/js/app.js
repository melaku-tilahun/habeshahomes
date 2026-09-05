import './bootstrap.js';
import { authState } from './state/auth.js';
import { initAuthModal } from './components/AuthModal.js';
import { initBookingModal } from './components/BookingModal.js';
import { initRouter } from './router.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Check session in background
    if (authState.token) {
        await authState.fetchMe();
    }

    // Initialize modals and routing
    initAuthModal();
    initBookingModal();
    initRouter();
});
