import { authState } from '../state/auth.js';
import { openAuthModal } from './AuthModal.js';
import { navigateTo } from '../router.js';

export function renderNavbar() {
    const nav = document.getElementById('main-navbar');
    if (!nav) return;

    const isLoggedIn = authState.isLoggedIn();
    const user = authState.user;
    const currency = authState.currency;

    nav.innerHTML = `
        <div class="container navbar-inner">
            <a href="/" class="brand-logo" data-link>
                <div class="brand-flag">
                    <span></span><span></span><span></span>
                </div>
                <span>Habesha<span style="color: var(--emerald-500);">Homes</span></span>
            </a>

            <ul class="nav-links">
                <li><a href="/" class="nav-link" data-link>Home</a></li>
                <li><a href="/properties" class="nav-link" data-link>All Properties</a></li>
                <li><a href="/properties?listing_type=holiday_let" class="nav-link" data-link>Holiday Lets</a></li>
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
                    <div style="position: relative; display: flex; align-items: center; gap: 10px;">
                        <a href="/dashboard" class="btn btn-secondary btn-sm" data-link>
                            <span>Dashboard</span>
                            ${authState.isAgent() ? `<span class="badge badge-holiday" style="font-size: 0.65rem; padding: 2px 6px;">Host</span>` : ''}
                        </a>
                        <button id="btn-logout" class="btn btn-outline btn-sm" title="Sign Out">
                            <span>Sign Out</span>
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
