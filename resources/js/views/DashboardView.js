import api from '../services/api.js';
import { authState } from '../state/auth.js';
import { showToast } from '../components/Toast.js';
import { openAuthModal } from '../components/AuthModal.js';
import { navigateTo } from '../router.js';
import { Icons } from '../components/Icons.js';

export async function renderDashboardView(container, subpath = '') {
    if (!authState.isLoggedIn()) {
        openAuthModal('login');
        container.innerHTML = `
            <div class="container" style="padding: 100px 0; text-align: center;">
                <h3>Please sign in to access your portal</h3>
                <p class="mt-2">Access your reservations, invoices, and listed properties.</p>
            </div>
        `;
        return;
    }

    const user = authState.user;
    const isAgent = authState.isAgent();
    let currentTab = subpath === 'listings' && isAgent ? 'listings' : 'bookings';

    const initials = user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'U';

    container.innerHTML = `
        <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
            <div class="dashboard-header">
                <div class="flex items-center gap-4">
                    <div style="width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, var(--emerald-500), var(--indigo-500)); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 700; border: 2px solid rgba(255, 255, 255, 0.15); box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);">
                        ${initials}
                    </div>
                    <div>
                        <h2>${user.name}</h2>
                        <p style="font-size: 0.85rem;">
                            ${user.email} • 
                            <span class="badge ${isAgent ? 'badge-holiday' : 'badge-rent'}">
                                ${user.user_type ? user.user_type.toUpperCase() : 'USER'}
                            </span>
                        </p>
                    </div>
                </div>

                <div class="dashboard-tabs">
                    <button class="dashboard-tab ${currentTab === 'bookings' ? 'active' : ''}" data-tab="bookings" style="display: inline-flex; align-items: center; gap: 6px;">
                        ${Icons.suitcase}
                        <span>My Bookings</span>
                    </button>
                    ${isAgent ? `
                        <button class="dashboard-tab ${currentTab === 'listings' ? 'active' : ''}" data-tab="listings" style="display: inline-flex; align-items: center; gap: 6px;">
                            ${Icons.building}
                            <span>My Properties</span>
                        </button>
                    ` : ''}
                    <a href="/profile" class="dashboard-tab" data-link style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none;">
                        ${Icons.user}
                        <span>Profile Settings</span>
                    </a>
                </div>
            </div>

            <div id="dashboard-tab-content">
                <!-- Injected based on active tab -->
            </div>
        </div>

        <!-- Add Property Modal (For Hosts & Agents) -->
        <div id="modal-add-property" class="modal-overlay">
            <div class="modal-content" style="max-width: 680px;">
                <div class="modal-header">
                    <h3>List a New Property</h3>
                    <button class="modal-close" id="close-add-modal">&times;</button>
                </div>

                <form id="form-create-property" class="flex flex-col gap-4">
                    <div class="form-group">
                        <label class="form-label">Property Title</label>
                        <input type="text" id="new-prop-title" class="form-control" required placeholder="e.g. Luxurious Penthouse with Balcony in Bole Atlas">
                    </div>

                    <div class="grid grid-2" style="gap: 14px;">
                        <div class="form-group">
                            <label class="form-label">Listing Type</label>
                            <select id="new-prop-listing-type" class="form-control" required>
                                <option value="holiday_let">Holiday Stay (Nightly)</option>
                                <option value="rent">Long-term Rent (Monthly)</option>
                                <option value="sale">For Sale</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Property Type</label>
                            <select id="new-prop-type" class="form-control" required>
                                <option value="apartment">Apartment</option>
                                <option value="villa">Villa / Independent House</option>
                                <option value="condo">Condominium</option>
                                <option value="commercial">Commercial Space</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-2" style="gap: 14px;">
                        <div class="form-group">
                            <label class="form-label">Price</label>
                            <input type="number" id="new-prop-price" class="form-control" required min="1" placeholder="e.g. 5000">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Currency</label>
                            <select id="new-prop-currency" class="form-control">
                                <option value="ETB">ETB (Ethiopian Birr)</option>
                                <option value="USD">USD ($)</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-2" style="gap: 14px;">
                        <div class="form-group">
                            <label class="form-label">City</label>
                            <input type="text" id="new-prop-city" class="form-control" value="Addis Ababa" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Sub-City</label>
                            <select id="new-prop-subcity" class="form-control" required>
                                <option value="Bole">Bole</option>
                                <option value="Kirkos">Kirkos (Kazanchis)</option>
                                <option value="Yeka">Yeka (CMC)</option>
                                <option value="Arada">Arada</option>
                                <option value="Lideta">Lideta</option>
                                <option value="Nifas Silk-Lafto">Nifas Silk-Lafto</option>
                                <option value="Gulele">Gulele</option>
                                <option value="Kolfe Keranio">Kolfe Keranio</option>
                                <option value="Akaky Kaliti">Akaky Kaliti</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Specific Street Address / Landmark</label>
                        <input type="text" id="new-prop-address" class="form-control" required placeholder="Near Edna Mall, Gabon St.">
                    </div>

                    <div class="grid grid-3" style="gap: 14px;">
                        <div class="form-group">
                            <label class="form-label">Bedrooms</label>
                            <input type="number" id="new-prop-beds" class="form-control" min="0" value="2">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Bathrooms</label>
                            <input type="number" id="new-prop-baths" class="form-control" min="0" step="0.5" value="2">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Square Meters (m²)</label>
                            <input type="number" id="new-prop-sqm" class="form-control" min="1" value="120">
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        <input type="checkbox" id="new-prop-furnished" checked style="width: 16px; height: 16px; accent-color: var(--emerald-500); cursor: pointer;">
                        <label for="new-prop-furnished" style="font-size: 0.85rem; cursor: pointer;">Furnished with Appliances & Furniture</label>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Description & Highlights</label>
                        <textarea id="new-prop-desc" class="form-control" rows="3" placeholder="Describe the interior, neighborhood, security, and views..."></textarea>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Property Photos (Upload Multiple)</label>
                        <input type="file" id="new-prop-images" class="form-control" multiple accept="image/*">
                        <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Upload high quality JPEG or PNG images (Max 10MB each).</p>
                    </div>

                    <div id="new-prop-error" style="display: none; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; padding: 10px; border-radius: var(--radius-md); font-size: 0.85rem;"></div>

                    <button type="submit" class="btn btn-primary btn-lg w-full mt-2" id="btn-submit-listing">
                        Publish Listing
                    </button>
                </form>
            </div>
        </div>
    `;

    // Tab switching
    container.querySelectorAll('.dashboard-tab').forEach(tabBtn => {
        tabBtn.addEventListener('click', () => {
            container.querySelectorAll('.dashboard-tab').forEach(b => b.classList.remove('active'));
            tabBtn.classList.add('active');
            const target = tabBtn.getAttribute('data-tab');
            currentTab = target;
            if (target === 'bookings') {
                loadUserBookings(container.querySelector('#dashboard-tab-content'));
            } else {
                loadUserListings(container.querySelector('#dashboard-tab-content'));
            }
        });
    });

    // Modal wiring
    const addModal = container.querySelector('#modal-add-property');
    const closeBtn = container.querySelector('#close-add-modal');
    closeBtn.addEventListener('click', () => addModal.classList.remove('open'));
    addModal.addEventListener('click', (e) => {
        if (e.target === addModal) addModal.classList.remove('open');
    });

    // Form submit wiring for new property
    const propForm = container.querySelector('#form-create-property');
    propForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = container.querySelector('#btn-submit-listing');
        const errBox = container.querySelector('#new-prop-error');
        errBox.style.display = 'none';

        submitBtn.disabled = true;
        submitBtn.textContent = 'Publishing listing...';

        try {
            const payload = {
                title: container.querySelector('#new-prop-title').value.trim(),
                listing_type: container.querySelector('#new-prop-listing-type').value,
                property_type: container.querySelector('#new-prop-type').value,
                price: parseFloat(container.querySelector('#new-prop-price').value),
                currency: container.querySelector('#new-prop-currency').value,
                city: container.querySelector('#new-prop-city').value.trim(),
                sub_city: container.querySelector('#new-prop-subcity').value,
                address: container.querySelector('#new-prop-address').value.trim(),
                bedrooms: parseInt(container.querySelector('#new-prop-beds').value, 10),
                bathrooms: parseFloat(container.querySelector('#new-prop-baths').value),
                square_meters: parseFloat(container.querySelector('#new-prop-sqm').value),
                is_furnished: container.querySelector('#new-prop-furnished').checked,
                description: container.querySelector('#new-prop-desc').value.trim(),
            };

            const response = await api.post('/properties', payload);
            const createdProp = response.data.data || response.data;

            // Upload images if any selected
            const fileInput = container.querySelector('#new-prop-images');
            if (fileInput.files.length > 0) {
                submitBtn.textContent = 'Uploading property photos...';
                const formData = new FormData();
                for (let i = 0; i < fileInput.files.length; i++) {
                    formData.append('images[]', fileInput.files[i]);
                }
                await api.post(`/properties/${createdProp.id}/images`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }

            showToast('Property published successfully!', 'success');
            addModal.classList.remove('open');
            propForm.reset();
            loadUserListings(container.querySelector('#dashboard-tab-content'));
        } catch (err) {
            errBox.style.display = 'block';
            errBox.textContent = err.friendlyMessage || 'Failed to create listing. Please check required fields.';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Publish Listing';
        }
    });

    // Initial tab content
    if (currentTab === 'listings') {
        loadUserListings(container.querySelector('#dashboard-tab-content'));
    } else {
        loadUserBookings(container.querySelector('#dashboard-tab-content'));
    }
}

async function loadUserBookings(targetEl) {
    targetEl.innerHTML = `
        <div style="padding: 60px; text-align: center; color: var(--text-muted);">
            Loading your reservations and stays...
        </div>
    `;

    try {
        const response = await api.get('/bookings');
        const bookings = response.data.data || response.data || [];

        if (bookings.length === 0) {
            targetEl.innerHTML = `
                <div class="detail-card text-center" style="padding: 60px 20px;">
                    <div style="margin: 0 auto 16px; display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 50%; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25);">
                        ${Icons.suitcase}
                    </div>
                    <h3>No Active Reservations</h3>
                    <p class="mt-2">You haven't booked any holiday stays yet. Discover luxury options in Addis Ababa!</p>
                    <a href="/properties?listing_type=holiday_let" class="btn btn-primary mt-4" data-link>Explore Holiday Stays</a>
                </div>
            `;
            return;
        }

        targetEl.innerHTML = `
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Dates</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Invoice / Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${bookings.map(b => {
                            const statusClass = b.status === 'confirmed' ? 'badge-status-confirmed' : b.status === 'pending' ? 'badge-status-pending' : 'badge-status-cancelled';
                            return `
                                <tr>
                                    <td>
                                        <div style="font-weight: 600;">${b.property ? b.property.title : 'Holiday Residence'}</div>
                                        <div style="font-size: 0.8rem; color: var(--text-muted);">${b.property?.sub_city || ''} ${b.property?.city || ''}</div>
                                    </td>
                                    <td>
                                        <div>${b.check_in} → ${b.check_out}</div>
                                        <div style="font-size: 0.75rem; color: var(--text-muted);">${b.guests_count || 1} guest(s)</div>
                                    </td>
                                    <td style="font-weight: 700; color: #fff;">
                                        ${authState.formatPrice(b.total_amount, b.property?.currency || 'ETB')}
                                    </td>
                                    <td>
                                        <span class="badge ${statusClass}">${b.status.toUpperCase()}</span>
                                    </td>
                                    <td>
                                        <div class="flex items-center gap-2">
                                            ${b.status === 'confirmed' ? `
                                                <a href="/storage/invoices/invoice-${b.id}.pdf" target="_blank" class="btn btn-outline btn-sm" style="padding: 4px 10px; font-size: 0.75rem;">
                                                    PDF Invoice
                                                </a>
                                            ` : ''}
                                            ${b.status !== 'cancelled' ? `
                                                <button class="btn btn-danger btn-sm cancel-booking-btn" data-id="${b.id}" style="padding: 4px 10px; font-size: 0.75rem;">
                                                    Cancel
                                                </button>
                                            ` : '—'}
                                        </div>
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;

        // Wire cancel buttons
        targetEl.querySelectorAll('.cancel-booking-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.getAttribute('data-id');
                if (!confirm('Are you sure you want to cancel this booking?')) return;
                try {
                    await api.post(`/bookings/${id}/cancel`, { reason: 'Guest cancellation request' });
                    showToast('Booking cancelled.', 'info');
                    loadUserBookings(targetEl);
                } catch (err) {
                    showToast(err.friendlyMessage || 'Unable to cancel booking.', 'error');
                }
            });
        });

    } catch (err) {
        targetEl.innerHTML = `
            <div style="color: var(--coral-500); padding: 40px; text-align: center;">
                Failed to load bookings: ${err.friendlyMessage || 'Server error'}
            </div>
        `;
    }
}

async function loadUserListings(targetEl) {
    targetEl.innerHTML = `
        <div class="flex justify-between items-center mb-6">
            <h3>Your Listed Properties</h3>
            <button id="btn-open-add-property" class="btn btn-primary btn-sm">
                + Add New Listing
            </button>
        </div>
        <div id="user-properties-table" style="padding: 40px; text-align: center; color: var(--text-muted);">
            Loading your property portfolio...
        </div>
    `;

    targetEl.querySelector('#btn-open-add-property').addEventListener('click', () => {
        document.getElementById('modal-add-property').classList.add('open');
    });

    const tableArea = targetEl.querySelector('#user-properties-table');

    try {
        // Fetch properties owned by current user
        const response = await api.get('/properties');
        const allProps = response.data.data || [];
        // Filter to user's properties or show current properties
        const myProps = allProps.filter(p => p.user?.id === authState.user.id || authState.isAdmin());

        if (myProps.length === 0) {
            tableArea.innerHTML = `
                <div class="detail-card text-center" style="padding: 40px 20px;">
                    <div style="margin: 0 auto 16px; display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 50%; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.25);">
                        ${Icons.building}
                    </div>
                    <h4>No Properties Listed Yet</h4>
                    <p class="mt-2">Start monetizing your villa, apartment or condo with Ethiopian & diaspora guests.</p>
                </div>
            `;
            return;
        }

        tableArea.innerHTML = `
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${myProps.map(p => `
                            <tr>
                                <td>
                                    <div style="font-weight: 600;">${p.title}</div>
                                    <div style="font-size: 0.75rem; color: var(--text-muted);">${p.bedrooms || 0} Beds • ${p.bathrooms || 0} Baths • ${p.square_meters || 0} m²</div>
                                </td>
                                <td>
                                    <span class="badge ${p.listing_type === 'holiday_let' ? 'badge-holiday' : 'badge-rent'}">
                                        ${p.listing_type.replace('_', ' ').toUpperCase()}
                                    </span>
                                </td>
                                <td style="font-weight: 700; color: #fff;">
                                    ${authState.formatPrice(p.price, p.currency || 'ETB')}
                                </td>
                                <td>
                                    <div>${p.sub_city ? p.sub_city + ', ' : ''}${p.city}</div>
                                </td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <a href="/properties/${p.id}" class="btn btn-outline btn-sm" data-link style="padding: 4px 10px; font-size: 0.75rem;">
                                            View
                                        </a>
                                        <button class="btn btn-danger btn-sm delete-prop-btn" data-id="${p.id}" style="padding: 4px 10px; font-size: 0.75rem;">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        // Wire delete buttons
        tableArea.querySelectorAll('.delete-prop-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.getAttribute('data-id');
                if (!confirm('Are you sure you want to permanently delete this listing?')) return;
                try {
                    await api.delete(`/properties/${id}`);
                    showToast('Property deleted successfully.', 'info');
                    loadUserListings(targetEl);
                } catch (err) {
                    showToast(err.friendlyMessage || 'Unable to delete property.', 'error');
                }
            });
        });

    } catch (err) {
        tableArea.innerHTML = `
            <div style="color: var(--coral-500);">
                Could not retrieve properties: ${err.friendlyMessage || 'Server error'}
            </div>
        `;
    }
}
