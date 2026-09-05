import { authState } from '../state/auth.js';
import { showToast } from './Toast.js';

let modalEl = null;

export function initAuthModal() {
    if (document.getElementById('auth-modal')) return;

    modalEl = document.createElement('div');
    modalEl.id = 'auth-modal';
    modalEl.className = 'modal-overlay';
    modalEl.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="auth-modal-title">Sign In to HabeshaHomes</h3>
                <button class="modal-close" id="auth-close-btn">&times;</button>
            </div>

            <div class="auth-tabs">
                <div class="auth-tab active" data-tab="login">Sign In</div>
                <div class="auth-tab" data-tab="register">Create Account</div>
            </div>

            <div id="auth-error-box" style="display: none; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; padding: 10px 14px; border-radius: var(--radius-md); font-size: 0.85rem; margin-bottom: 16px;"></div>

            <!-- Login Form -->
            <form id="form-login" class="flex flex-col gap-4">
                <div class="form-group">
                    <label class="form-label">Email Address</label>
                    <input type="email" id="login-email" class="form-control" required placeholder="name@example.com">
                </div>
                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input type="password" id="login-password" class="form-control" required placeholder="••••••••">
                </div>
                <button type="submit" class="btn btn-primary w-full mt-4" id="login-submit-btn">
                    Sign In
                </button>
            </form>

            <!-- Register Form -->
            <form id="form-register" class="flex flex-col gap-4" style="display: none;">
                <div class="form-group">
                    <label class="form-label">Full Name</label>
                    <input type="text" id="reg-name" class="form-control" required placeholder="Abebe Kebede">
                </div>
                <div class="form-group">
                    <label class="form-label">Email Address</label>
                    <input type="email" id="reg-email" class="form-control" required placeholder="name@example.com">
                </div>
                <div class="form-group">
                    <label class="form-label">Phone Number (Ethiopia / Intl)</label>
                    <input type="tel" id="reg-phone" class="form-control" placeholder="+251911234567">
                </div>
                <div class="form-group">
                    <label class="form-label">I want to</label>
                    <select id="reg-type" class="form-control">
                        <option value="renter">Rent or Book Stays</option>
                        <option value="buyer">Buy Properties</option>
                        <option value="landlord">List My Properties (Landlord)</option>
                        <option value="agent">Work as Verified Agent</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input type="password" id="reg-password" class="form-control" required minlength="8" placeholder="At least 8 characters">
                </div>
                <div class="form-group">
                    <label class="form-label">Confirm Password</label>
                    <input type="password" id="reg-password-confirm" class="form-control" required minlength="8" placeholder="Repeat password">
                </div>
                <button type="submit" class="btn btn-primary w-full mt-4" id="reg-submit-btn">
                    Create Account
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(modalEl);

    // Event handlers
    modalEl.querySelector('#auth-close-btn').addEventListener('click', closeAuthModal);
    modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) closeAuthModal();
    });

    const tabs = modalEl.querySelectorAll('.auth-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            switchAuthTab(target);
        });
    });

    // Login submit
    modalEl.querySelector('#form-login').addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = modalEl.querySelector('#login-submit-btn');
        const email = modalEl.querySelector('#login-email').value.trim();
        const password = modalEl.querySelector('#login-password').value;

        showAuthError(null);
        btn.disabled = true;
        btn.textContent = 'Signing in...';

        try {
            await authState.login(email, password);
            showToast('Signed in successfully!', 'success');
            closeAuthModal();
        } catch (err) {
            showAuthError(err.friendlyMessage || 'Failed to sign in. Please verify your credentials.');
        } finally {
            btn.disabled = false;
            btn.textContent = 'Sign In';
        }
    });

    // Register submit
    modalEl.querySelector('#form-register').addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = modalEl.querySelector('#reg-submit-btn');
        const name = modalEl.querySelector('#reg-name').value.trim();
        const email = modalEl.querySelector('#reg-email').value.trim();
        const phone = modalEl.querySelector('#reg-phone').value.trim();
        const user_type = modalEl.querySelector('#reg-type').value;
        const password = modalEl.querySelector('#reg-password').value;
        const password_confirmation = modalEl.querySelector('#reg-password-confirm').value;

        if (password !== password_confirmation) {
            showAuthError('Passwords do not match.');
            return;
        }

        showAuthError(null);
        btn.disabled = true;
        btn.textContent = 'Creating account...';

        try {
            await authState.register({
                name,
                email,
                phone,
                user_type,
                password,
                password_confirmation,
            });
            showToast('Account created successfully! Welcome to HabeshaHomes.', 'success');
            closeAuthModal();
        } catch (err) {
            showAuthError(err.friendlyMessage || 'Registration failed. Please check your details.');
        } finally {
            btn.disabled = false;
            btn.textContent = 'Create Account';
        }
    });
}

function showAuthError(msg) {
    const box = modalEl.querySelector('#auth-error-box');
    if (!msg) {
        box.style.display = 'none';
        box.textContent = '';
    } else {
        box.style.display = 'block';
        box.textContent = msg;
    }
}

export function openAuthModal(tab = 'login', defaultType = null) {
    initAuthModal();
    switchAuthTab(tab);
    if (defaultType && modalEl.querySelector('#reg-type')) {
        modalEl.querySelector('#reg-type').value = defaultType;
    }
    modalEl.classList.add('open');
}

export function closeAuthModal() {
    if (modalEl) {
        modalEl.classList.remove('open');
        showAuthError(null);
    }
}

function switchAuthTab(tab) {
    if (!modalEl) return;
    const tabs = modalEl.querySelectorAll('.auth-tab');
    const loginForm = modalEl.querySelector('#form-login');
    const regForm = modalEl.querySelector('#form-register');
    const title = modalEl.querySelector('#auth-modal-title');

    tabs.forEach(t => t.classList.remove('active'));
    modalEl.querySelector(`[data-tab="${tab}"]`).classList.add('active');

    if (tab === 'login') {
        loginForm.style.display = 'flex';
        regForm.style.display = 'none';
        title.textContent = 'Sign In to HabeshaHomes';
    } else {
        loginForm.style.display = 'none';
        regForm.style.display = 'flex';
        title.textContent = 'Create HabeshaHomes Account';
    }
    showAuthError(null);
}
