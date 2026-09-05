import api from '../services/api.js';
import { authState } from '../state/auth.js';
import { showToast } from './Toast.js';
import { openAuthModal } from './AuthModal.js';
import { navigateTo } from '../router.js';

let bookingModalEl = null;

export function initBookingModal() {
    if (document.getElementById('booking-modal')) return;

    bookingModalEl = document.createElement('div');
    bookingModalEl.id = 'booking-modal';
    bookingModalEl.className = 'modal-overlay';
    bookingModalEl.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Complete Reservation</h3>
                <button class="modal-close" id="booking-modal-close">&times;</button>
            </div>

            <div id="booking-modal-body">
                <!-- Injected dynamically -->
            </div>
        </div>
    `;

    document.body.appendChild(bookingModalEl);

    bookingModalEl.querySelector('#booking-modal-close').addEventListener('click', closeBookingModal);
    bookingModalEl.addEventListener('click', (e) => {
        if (e.target === bookingModalEl) closeBookingModal();
    });
}

export function openBookingModal(property, checkIn, checkOut, estimatedPrice) {
    if (!authState.isLoggedIn()) {
        openAuthModal('login');
        showToast('Please sign in to proceed with booking.', 'info');
        return;
    }

    initBookingModal();

    const body = bookingModalEl.querySelector('#booking-modal-body');
    const currency = property.currency || 'ETB';
    const nights = Math.max(1, Math.round((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)));
    const platformFee = Math.round(estimatedPrice * 0.05);
    const total = estimatedPrice + platformFee;

    body.innerHTML = `
        <div class="flex flex-col gap-4">
            <div style="background: var(--bg-surface); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; gap: 14px; align-items: center;">
                <div style="width: 70px; height: 55px; border-radius: var(--radius-sm); overflow: hidden; background: var(--bg-card);">
                    <img src="${property.featured_image || (property.images && property.images[0] ? property.images[0].image_url : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80')}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div>
                    <h4 style="font-size: 1rem; margin-bottom: 2px;">${property.title}</h4>
                    <p style="font-size: 0.8rem; color: var(--text-muted);">${property.sub_city ? property.sub_city + ', ' : ''}${property.city}</p>
                </div>
            </div>

            <div style="background: var(--bg-input); padding: 14px; border-radius: var(--radius-md);">
                <div class="flex justify-between mb-2" style="font-size: 0.85rem;">
                    <span style="color: var(--text-secondary);">Reservation Dates:</span>
                    <strong>${checkIn} → ${checkOut} (${nights} ${nights === 1 ? 'night' : 'nights'})</strong>
                </div>
                <div class="flex justify-between mb-2" style="font-size: 0.85rem;">
                    <span style="color: var(--text-secondary);">Subtotal:</span>
                    <span>${authState.formatPrice(estimatedPrice, currency)}</span>
                </div>
                <div class="flex justify-between mb-2" style="font-size: 0.85rem;">
                    <span style="color: var(--text-secondary);">Platform & Service Fee (5%):</span>
                    <span>${authState.formatPrice(platformFee, currency)}</span>
                </div>
                <div class="flex justify-between" style="font-size: 1.05rem; font-weight: 700; border-top: 1px solid var(--border-subtle); padding-top: 8px; color: var(--emerald-500);">
                    <span>Total Due:</span>
                    <span>${authState.formatPrice(total, currency)}</span>
                </div>
            </div>

            <form id="booking-submit-form" class="flex flex-col gap-3">
                <div class="form-group">
                    <label class="form-label">Number of Guests</label>
                    <input type="number" id="booking-guests" class="form-control" min="1" max="15" value="1" required>
                </div>

                <div class="form-group">
                    <label class="form-label">Select Payment Method</label>
                    <select id="booking-gateway" class="form-control">
                        <option value="chapa">Chapa Payment (Telebirr, Cards, CBEBirr)</option>
                        <option value="telebirr">TeleBirr Direct</option>
                        <option value="cbe">CBE Direct Transfer</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">Special Requests (Optional)</label>
                    <textarea id="booking-requests" class="form-control" rows="2" placeholder="Airport pickup, early check-in, etc."></textarea>
                </div>

                <div id="booking-error" style="display: none; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; padding: 10px; border-radius: var(--radius-md); font-size: 0.85rem;"></div>

                <button type="submit" class="btn btn-gold btn-lg w-full mt-2" id="booking-submit-btn">
                    Confirm & Reserve Stay
                </button>
            </form>
        </div>
    `;

    const form = body.querySelector('#booking-submit-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = body.querySelector('#booking-submit-btn');
        const errBox = body.querySelector('#booking-error');
        const guests = body.querySelector('#booking-guests').value;
        const gateway = body.querySelector('#booking-gateway').value;
        const specialRequests = body.querySelector('#booking-requests').value;

        errBox.style.display = 'none';
        submitBtn.disabled = true;
        submitBtn.textContent = 'Locking reservation dates...';

        try {
            const response = await api.post(`/properties/${property.id}/book`, {
                check_in: checkIn,
                check_out: checkOut,
                guests_count: parseInt(guests, 10),
                payment_gateway: gateway,
                special_requests: specialRequests,
            });

            closeBookingModal();
            showToast('Booking initiated successfully!', 'success');

            const paymentUrl = response.data.payment_url;
            if (paymentUrl) {
                window.location.href = paymentUrl;
            } else {
                navigateTo('/dashboard');
            }
        } catch (err) {
            errBox.style.display = 'block';
            errBox.textContent = err.friendlyMessage || 'Unable to reserve property. Dates may have just been locked by another guest.';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Confirm & Reserve Stay';
        }
    });

    bookingModalEl.classList.add('open');
}

export function closeBookingModal() {
    if (bookingModalEl) {
        bookingModalEl.classList.remove('open');
    }
}
