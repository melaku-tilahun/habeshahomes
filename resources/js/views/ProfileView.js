import api from '../services/api.js';
import { authState } from '../state/auth.js';
import { showToast } from '../components/Toast.js';
import { openAuthModal } from '../components/AuthModal.js';
import { navigateTo } from '../router.js';
import { Icons } from '../components/Icons.js';

export async function renderProfileView(container) {
    if (!authState.isLoggedIn()) {
        openAuthModal('login');
        container.innerHTML = `
            <div class="container" style="padding: 100px 0; text-align: center;">
                <h3>Please sign in to view your profile</h3>
                <p class="mt-2 text-muted">Manage your personal details, credentials, and verification status.</p>
            </div>
        `;
        return;
    }

    const user = authState.user;
    const isAgent = authState.isAgent();
    const initials = user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'U';

    container.innerHTML = `
        <div class="container" style="padding-top: 40px; padding-bottom: 80px; max-width: 900px;">
            <!-- Profile Header Card -->
            <div class="detail-card mb-6" style="padding: 32px; background: linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(15, 23, 42, 0.95)); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl);">
                <div class="flex items-center justify-between flex-wrap gap-4">
                    <div class="flex items-center gap-5">
                        <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--emerald-500), var(--indigo-500)); color: #fff; font-size: 2rem; font-weight: 700; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.25); border: 2px solid rgba(255, 255, 255, 0.15);">
                            ${initials}
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <h2 style="font-size: 1.6rem; font-weight: 700; margin: 0;">${user.name}</h2>
                                ${user.is_verified ? `<span title="Verified Account" style="display: flex; align-items: center;">${Icons.badgeVerified}</span>` : ''}
                            </div>
                            <div class="flex items-center gap-3 mt-1" style="font-size: 0.85rem; color: var(--text-secondary);">
                                <span class="flex items-center gap-1">${Icons.mail} ${user.email}</span>
                                ${user.phone ? `<span class="flex items-center gap-1">• ${Icons.phone} ${user.phone}</span>` : ''}
                            </div>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="badge ${isAgent ? 'badge-holiday' : 'badge-rent'}" style="text-transform: uppercase; font-weight: 600; font-size: 0.75rem;">
                                    ${user.user_type || 'MEMBER'}
                                </span>
                                <span class="badge" style="background: rgba(255, 255, 255, 0.06); color: var(--text-muted); font-size: 0.75rem;">
                                    ID: #${user.id}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center gap-3">
                        <a href="/dashboard" class="btn btn-outline btn-sm" data-link style="display: flex; align-items: center; gap: 6px;">
                            ${Icons.suitcase}
                            <span>My Bookings</span>
                        </a>
                        ${isAgent ? `
                            <a href="/dashboard/listings" class="btn btn-primary btn-sm" data-link style="display: flex; align-items: center; gap: 6px;">
                                ${Icons.building}
                                <span>My Listings</span>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>

            <div class="grid grid-2" style="gap: 24px; align-items: start;">
                <!-- Personal Information Form -->
                <div class="detail-card" style="padding: 28px;">
                    <h3 class="mb-4" style="display: flex; align-items: center; gap: 8px; font-size: 1.15rem;">
                        ${Icons.user}
                        <span>Personal Information</span>
                    </h3>

                    <form id="form-update-profile" class="flex flex-col gap-4">
                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" id="prof-name" class="form-control" value="${user.name || ''}" required>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Email Address (Read-only)</label>
                            <input type="email" class="form-control" value="${user.email || ''}" disabled style="opacity: 0.7; cursor: not-allowed;">
                            <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Email is linked to account authentication.</span>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Phone Number (Ethiopian / International)</label>
                            <input type="tel" id="prof-phone" class="form-control" value="${user.phone || ''}" placeholder="+251 91 123 4567">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Account Role</label>
                            <input type="text" class="form-control" value="${(user.user_type || 'Member').toUpperCase()}" disabled style="opacity: 0.7; cursor: not-allowed;">
                        </div>

                        <div class="form-group">
                            <label class="form-label">About / Bio</label>
                            <textarea id="prof-bio" class="form-control" rows="3" placeholder="Tell hosts and agents about yourself...">${user.bio || ''}</textarea>
                        </div>

                        <div id="prof-info-msg" style="display: none; padding: 10px 14px; border-radius: var(--radius-md); font-size: 0.85rem;"></div>

                        <button type="submit" class="btn btn-primary mt-2" id="btn-save-profile" style="display: flex; align-items: center; justify-content: center; gap: 6px;">
                            ${Icons.check}
                            <span>Save Profile Changes</span>
                        </button>
                    </form>
                </div>

                <!-- Security & Verification -->
                <div class="flex flex-col gap-6">
                    <!-- Change Password Card -->
                    <div class="detail-card" style="padding: 28px;">
                        <h3 class="mb-4" style="display: flex; align-items: center; gap: 8px; font-size: 1.15rem;">
                            ${Icons.lock}
                            <span>Security & Password</span>
                        </h3>

                        <form id="form-update-password" class="flex flex-col gap-4">
                            <div class="form-group">
                                <label class="form-label">New Password</label>
                                <input type="password" id="prof-new-pass" class="form-control" minlength="8" placeholder="Minimum 8 characters" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Confirm New Password</label>
                                <input type="password" id="prof-confirm-pass" class="form-control" minlength="8" placeholder="Repeat new password" required>
                            </div>

                            <div id="prof-pass-msg" style="display: none; padding: 10px 14px; border-radius: var(--radius-md); font-size: 0.85rem;"></div>

                            <button type="submit" class="btn btn-outline mt-2" id="btn-save-pass" style="display: flex; align-items: center; justify-content: center; gap: 6px;">
                                ${Icons.lock}
                                <span>Update Password</span>
                            </button>
                        </form>
                    </div>

                    <!-- Trust & Badges Card -->
                    <div class="detail-card" style="padding: 24px;">
                        <h4 class="mb-3" style="font-size: 0.95rem; color: var(--text-primary);">Trust & Verification</h4>
                        <div class="flex flex-col gap-3">
                            <div class="flex items-center justify-between p-2" style="background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); padding: 12px 14px;">
                                <div class="flex items-center gap-3">
                                    ${Icons.shield}
                                    <div>
                                        <div style="font-size: 0.85rem; font-weight: 600;">Identity & Phone Verification</div>
                                        <div style="font-size: 0.75rem; color: var(--text-muted);">Verified for secure reservation & messaging</div>
                                    </div>
                                </div>
                                <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: var(--emerald-500); font-size: 0.7rem;">Active</span>
                            </div>

                            <div class="flex items-center justify-between p-2" style="background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); padding: 12px 14px;">
                                <div class="flex items-center gap-3">
                                    ${Icons.document}
                                    <div>
                                        <div style="font-size: 0.85rem; font-weight: 600;">Escrow & Payment Ready</div>
                                        <div style="font-size: 0.75rem; color: var(--text-muted);">Integrated with Chapa & TeleBirr Gateways</div>
                                    </div>
                                </div>
                                <span class="badge" style="background: rgba(245, 158, 11, 0.15); color: var(--gold-500); font-size: 0.7rem;">Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Wire Update Profile Form
    const profileForm = container.querySelector('#form-update-profile');
    profileForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = container.querySelector('#btn-save-profile');
        const msgBox = container.querySelector('#prof-info-msg');
        msgBox.style.display = 'none';

        const name = container.querySelector('#prof-name').value.trim();
        const phone = container.querySelector('#prof-phone').value.trim();
        const bio = container.querySelector('#prof-bio').value.trim();

        btn.disabled = true;
        btn.textContent = 'Saving...';

        try {
            const response = await api.put('/auth/profile', { name, phone, bio });
            const updatedUser = response.data.user || response.data;
            authState.setUser(updatedUser);
            showToast('Profile updated successfully!', 'success');
            renderProfileView(container);
        } catch (err) {
            msgBox.style.display = 'block';
            msgBox.style.background = 'rgba(239, 68, 68, 0.15)';
            msgBox.style.border = '1px solid rgba(239, 68, 68, 0.3)';
            msgBox.style.color = '#fca5a5';
            msgBox.textContent = err.friendlyMessage || 'Failed to update profile.';
        } finally {
            btn.disabled = false;
        }
    });

    // Wire Update Password Form
    const passForm = container.querySelector('#form-update-password');
    passForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = container.querySelector('#btn-save-pass');
        const msgBox = container.querySelector('#prof-pass-msg');
        msgBox.style.display = 'none';

        const newPass = container.querySelector('#prof-new-pass').value;
        const confirmPass = container.querySelector('#prof-confirm-pass').value;

        if (newPass !== confirmPass) {
            msgBox.style.display = 'block';
            msgBox.style.background = 'rgba(239, 68, 68, 0.15)';
            msgBox.style.border = '1px solid rgba(239, 68, 68, 0.3)';
            msgBox.style.color = '#fca5a5';
            msgBox.textContent = 'Passwords do not match.';
            return;
        }

        btn.disabled = true;
        btn.textContent = 'Updating...';

        try {
            await api.put('/auth/profile', { password: newPass, password_confirmation: confirmPass });
            showToast('Password changed successfully!', 'success');
            passForm.reset();
            msgBox.style.display = 'block';
            msgBox.style.background = 'rgba(16, 185, 129, 0.15)';
            msgBox.style.border = '1px solid rgba(16, 185, 129, 0.3)';
            msgBox.style.color = '#6ee7b7';
            msgBox.textContent = 'Password updated successfully.';
        } catch (err) {
            msgBox.style.display = 'block';
            msgBox.style.background = 'rgba(239, 68, 68, 0.15)';
            msgBox.style.border = '1px solid rgba(239, 68, 68, 0.3)';
            msgBox.style.color = '#fca5a5';
            msgBox.textContent = err.friendlyMessage || 'Failed to change password.';
        } finally {
            btn.disabled = false;
        }
    });
}
