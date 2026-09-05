import { authState } from '../state/auth.js';
import { openAuthModal } from './AuthModal.js';
import { navigateTo } from '../router.js';
import { Icons } from './Icons.js';

export function renderNavbar() {
    const nav = document.getElementById('main-navbar');
    if (!nav) return;

    const isLoggedIn = authState.isLoggedIn();
    const user = authState.user;
    const currency = authState.currency;

    const initials = user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'U';

    nav.innerHTML = `
        <div class="container navbar-inner">
            <a href="/" class="brand-logo" data-link>
                ${Icons.logo}
                <span>Habesha<span style="color: var(--emerald-500);">Homes</span></span>
            </a>

            <ul class="nav-links">
                <li><a href="/" class="nav-link" data-link>Home</a></li>
                <li><a href="/properties" class="nav-link" data-link>All Properties</a></li>
                <li><a href="/properties?listing_type=holiday_let" class="nav-link" data-link>Holiday Stays</a></li>
                <li><a href="/properties?listing_type=rent" class="nav-link" data-link>Long-term Rent</a></li>
                <li><a href="/properties?listing_type=sale" class="nav-link" data-link>For Sale</a></li>
            </ul>

            <div class="nav-actions">
                <!-- Currency Switcher -->
                <div class="currency-pill">
                    <button class="currency-btn ${currency === 'ETB' ? 'active' : ''}" data-currency="ETB">ETB</button>
                    <button class="currency-btn ${currency === 'USD' ? 'active' : ''}" data-currency="USD">USD</button>
                </div>

                ${isLoggedIn ? `
                    <div class="user-menu-wrapper" style="position: relative; display: flex; align-items: center; gap: 8px;">
                        <a href="/profile" class="user-profile-badge" data-link title="View & Edit Profile" style="display: flex; align-items: center; gap: 8px; background: var(--bg-card); padding: 4px 12px 4px 4px; border-radius: var(--radius-full); border: 1px solid var(--border-subtle); cursor: pointer; transition: var(--transition-fast);">
                            <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, var(--emerald-500), var(--indigo-500)); color: #fff; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; justify-content: center;">
                                ${initials}
                            </div>
                            <div style="display: flex; flex-direction: column; text-align: left;">
                                <span style="font-size: 0.85rem; font-weight: 600; line-height: 1.1;">${user.name.split(' ')[0]}</span>
                                <span style="font-size: 0.65rem; color: var(--emerald-500); text-transform: uppercase;">${user.user_type || 'MEMBER'}</span>
                            </div>
                        </a>

                        <a href="/profile" class="btn btn-outline btn-sm" data-link title="Profile Page" style="padding: 6px 10px; display: flex; align-items: center; gap: 4px;">
                            ${Icons.user}
                            <span class="hide-mobile">Profile</span>
                        </a>

                        <a href="/dashboard" class="btn btn-outline btn-sm" data-link title="Bookings & Activity" style="padding: 6px 10px; display: flex; align-items: center; gap: 4px;">
                            ${Icons.suitcase}
                            <span class="hide-mobile">Bookings</span>
                        </a>

                        <button id="btn-logout" class="btn btn-outline btn-sm" title="Sign Out" style="padding: 6px 10px; display: flex; align-items: center; gap: 4px; color: var(--text-muted);">
                            ${Icons.logout}
                        </button>
                    </div>
                ` : `
                    <button id="btn-login" class="btn btn-outline btn-sm">Sign In</button>
                    <button id="btn-list-prop" class="btn btn-primary btn-sm">List Property</button>
                `}
            </div>
        </div>
    `;

    // Bind event listeners
    nav.querySelectorAll('[data-currency]').forEach(btn => {
        btn.addEventListener('click', () => {
            const curr = btn.getAttribute('data-currency');
            authState.setCurrency(curr);
        });
    });

    const loginBtn = nav.querySelector('#btn-login');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => openAuthModal('login'));
    }

    const listPropBtn = nav.querySelector('#btn-list-prop');
    if (listPropBtn) {
        listPropBtn.addEventListener('click', () => {
            if (!authState.isLoggedIn()) {
                openAuthModal('register', 'agent');
            } else {
                navigateTo('/dashboard/listings');
            }
        });
    }

    const logoutBtn = nav.querySelector('#btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            await authState.logout();
            navigateTo('/');
        });
    }
}
