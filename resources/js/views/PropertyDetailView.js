import api from '../services/api.js';
import { authState } from '../state/auth.js';
import { openBookingModal } from '../components/BookingModal.js';
import { openAuthModal } from '../components/AuthModal.js';
import { showToast } from '../components/Toast.js';
import { navigateTo } from '../router.js';
import { Icons } from '../components/Icons.js';

export async function renderPropertyDetailView(container, propertyId) {
    container.innerHTML = `
        <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
            <div id="prop-detail-loading" style="padding: 100px; text-align: center; color: var(--text-muted);">
                Loading luxury property specifications...
            </div>
            <div id="prop-detail-content" style="display: none;"></div>
        </div>
    `;

    try {
        const response = await api.get(`/properties/${propertyId}`);
        const property = response.data.data || response.data;
        renderPropertyDetails(container, property);
    } catch (err) {
        container.querySelector('#prop-detail-loading').innerHTML = `
            <div style="color: var(--coral-500); text-align: center; padding: 40px;">
                <h3>Property Not Found</h3>
                <p class="mt-2">${err.friendlyMessage || 'The requested property could not be loaded or is no longer published.'}</p>
                <a href="/properties" class="btn btn-outline btn-sm mt-4" data-link>← Back to All Properties</a>
            </div>
        `;
    }
}

function renderPropertyDetails(container, property) {
    container.querySelector('#prop-detail-loading').style.display = 'none';
    const content = container.querySelector('#prop-detail-content');
    content.style.display = 'block';

    const images = property.images && property.images.length > 0 ? property.images : [
        { image_url: property.featured_image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80' },
        { image_url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
        { image_url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80' }
    ];

    const mainImg = images[0]?.large_path || images[0]?.image_url;
    const thumb1 = images[1]?.medium_path || images[1]?.image_url || mainImg;
    const thumb2 = images[2]?.medium_path || images[2]?.image_url || mainImg;

    const isHoliday = property.listing_type === 'holiday_let';
    const isRent = property.listing_type === 'rent';
    const isSale = property.listing_type === 'sale';

    const priceFormatted = authState.formatPrice(property.price, property.currency || 'ETB');
    const priceSuffix = isHoliday ? '/ night' : isRent ? '/ month' : '';

    const amenities = property.amenities || ['High-Speed WiFi', 'Backup Diesel Generator', '2,000L Water Reservoir', '24/7 Gated Security', 'Dedicated Parking', 'Elevator Access'];

    content.innerHTML = `
        <!-- Breadcrumb & Back -->
        <div class="mb-4">
            <a href="/properties" class="btn btn-outline btn-sm" data-link style="padding: 4px 12px; font-size: 0.8rem;">← Back to Listings</a>
        </div>

        <!-- Property Title & Badges -->
        <div class="flex justify-between items-center mb-4 flex-wrap gap-3">
            <div>
                <h1 style="font-size: clamp(1.8rem, 3vw, 2.5rem);">${property.title}</h1>
                <div class="card-location mt-2" style="font-size: 0.95rem;">
                    <span style="color: var(--emerald-500); display: inline-flex;">${Icons.pin}</span>
                    <span>${property.address ? property.address + ', ' : ''}${property.sub_city ? property.sub_city + ', ' : ''}${property.city}, Ethiopia</span>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <span class="badge ${isHoliday ? 'badge-holiday' : isRent ? 'badge-rent' : 'badge-sale'}" style="font-size: 0.85rem; padding: 6px 14px;">
                    ${isHoliday ? 'Holiday Stay' : isRent ? 'For Rent' : 'For Sale'}
                </span>
                <span class="badge badge-verified" style="font-size: 0.85rem; padding: 6px 14px;">
                    <span style="display: inline-flex;">${Icons.check}</span> Verified Title
                </span>
            </div>
        </div>

        <!-- Gallery Showcase -->
        <div class="property-gallery">
            <div class="gallery-main">
                <img id="active-gallery-img" src="${mainImg}" alt="${property.title}">
            </div>
            <div class="gallery-thumbs">
                <img class="thumb-img" src="${thumb1}" alt="Photo 2" style="cursor: pointer;">
                <img class="thumb-img" src="${thumb2}" alt="Photo 3" style="cursor: pointer;">
            </div>
        </div>

        <!-- Main Content & Sidebar Layout -->
        <div class="detail-layout">
            <!-- Left Overview -->
            <div>
                <!-- Specs Bar -->
                <div class="detail-card mb-6 flex justify-between items-center flex-wrap gap-4" style="padding: 20px 28px;">
                    <div class="text-center">
                        <div style="font-size: 1.2rem; font-weight: 700;">${property.bedrooms || '—'}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 4px;">
                            ${Icons.bed} Bedrooms
                        </div>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 1.2rem; font-weight: 700;">${property.bathrooms || '—'}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 4px;">
                            ${Icons.bath} Bathrooms
                        </div>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 1.2rem; font-weight: 700;">${property.square_meters ? property.square_meters + ' m²' : '—'}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 4px;">
                            ${Icons.area} Living Area
                        </div>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 1.2rem; font-weight: 700;">${property.is_furnished ? 'Furnished' : 'Unfurnished'}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 4px;">
                            ${Icons.building} Furnishing
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <div class="detail-card mb-6">
                    <h3 class="mb-4">About This Residence</h3>
                    <div style="color: var(--text-secondary); line-height: 1.8; white-space: pre-line;">
                        ${property.description || 'Experience luxurious living in one of Addis Ababa’s most secure and sought-after neighborhoods. High-end finishes, scenic balcony views, and seamless utilities.'}
                    </div>
                </div>

                <!-- Amenities -->
                <div class="detail-card mb-6">
                    <h3>Features & Infrastructure</h3>
                    <p class="mt-1" style="font-size: 0.85rem;">Equipped with essential utilities for continuous comfort in Addis Ababa.</p>
                    <div class="amenities-grid">
                        ${amenities.map(a => `
                            <div class="amenity-chip">
                                <span style="display: inline-flex;">${Icons.check}</span>
                                <span>${a}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Host & Agent Card -->
                <div class="detail-card mb-6">
                    <h3>Listed by Verified Agent</h3>
                    <div class="flex items-center gap-4 mt-4">
                        <div style="width: 54px; height: 54px; border-radius: 50%; background: var(--bg-surface); display: flex; align-items: center; justify-content: center; border: 2px solid var(--emerald-500); color: var(--emerald-500);">
                            ${Icons.user}
                        </div>
                        <div>
                            <h4 style="margin-bottom: 2px;">${property.user ? property.user.name : 'HabeshaHomes Concierge'}</h4>
                            <p style="font-size: 0.85rem; color: var(--emerald-500); display: flex; align-items: center; gap: 4px;">
                                ${Icons.check} Verified Real Estate Partner
                            </p>
                            ${property.user && property.user.phone ? `
                                <p style="font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; gap: 4px; margin-top: 2px;">
                                    ${Icons.phone} ${property.user.phone}
                                </p>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Sticky Booking / Contact Card -->
            <div>
                <div class="booking-box">
                    <div class="booking-price-header">
                        <div>
                            <span style="font-size: 1.8rem; font-weight: 800; color: #fff;">${priceFormatted}</span>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">${priceSuffix}</span>
                        </div>
                        <span class="badge ${isHoliday ? 'badge-holiday' : 'badge-verified'}">
                            ${isHoliday ? 'Instant Booking' : 'Active Listing'}
                        </span>
                    </div>

                    ${isHoliday ? `
                        <!-- Holiday Let Calendar & Booking Widget -->
                        <div class="booking-date-inputs">
                            <div class="booking-date-row">
                                <div class="booking-date-cell">
                                    <label class="form-label" style="font-size: 0.7rem;">Check-in</label>
                                    <input type="date" id="date-checkin" class="form-control" style="padding: 4px 6px; font-size: 0.85rem; background: transparent; border: none;">
                                </div>
                                <div class="booking-date-cell">
                                    <label class="form-label" style="font-size: 0.7rem;">Check-out</label>
                                    <input type="date" id="date-checkout" class="form-control" style="padding: 4px 6px; font-size: 0.85rem; background: transparent; border: none;">
                                </div>
                            </div>
                        </div>

                        <div id="availability-status" style="display: none; padding: 8px 12px; border-radius: var(--radius-sm); font-size: 0.85rem; margin-bottom: 12px;"></div>

                        <div id="pricing-calculator" class="price-breakdown" style="display: none;">
                            <div class="price-breakdown-row">
                                <span id="calc-nights-text">Price × nights</span>
                                <span id="calc-subtotal">0 ETB</span>
                            </div>
                            <div class="price-breakdown-row">
                                <span>Platform & Service Fee (5%)</span>
                                <span id="calc-fee">0 ETB</span>
                            </div>
                            <div class="price-breakdown-row total">
                                <span>Total Due</span>
                                <span id="calc-total">0 ETB</span>
                            </div>
                        </div>

                        <button id="btn-reserve-stay" class="btn btn-gold btn-lg w-full mt-4" disabled>
                            Select Dates to Reserve
                        </button>
                    ` : `
                        <!-- Rent or Sale Contact Widget -->
                        <div class="flex flex-col gap-3 mt-4">
                            <p style="font-size: 0.9rem; color: var(--text-secondary);">
                                Interested in viewing or leasing this property? Inquire directly with the verified host or schedule an accompanied architectural inspection.
                            </p>
                            <button id="btn-contact-agent" class="btn btn-primary btn-lg w-full mt-2">
                                Contact Host / Agent
                            </button>
                            <button id="btn-schedule-tour" class="btn btn-outline w-full">
                                Request Private Viewing
                            </button>
                        </div>
                    `}
                </div>
            </div>
        </div>
    `;

    // Gallery thumbnail click
    const activeMain = content.querySelector('#active-gallery-img');
    content.querySelectorAll('.thumb-img').forEach(thumb => {
        thumb.addEventListener('click', () => {
            const currentMain = activeMain.src;
            activeMain.src = thumb.src;
            thumb.src = currentMain;
        });
    });

    // If Holiday Let, wire date availability checks
    if (isHoliday) {
        const checkInInput = content.querySelector('#date-checkin');
        const checkOutInput = content.querySelector('#date-checkout');
        const reserveBtn = content.querySelector('#btn-reserve-stay');
        const availStatus = content.querySelector('#availability-status');
        const pricingCalc = content.querySelector('#pricing-calculator');

        const today = new Date().toISOString().split('T')[0];
        checkInInput.min = today;

        let estimatedSubtotal = 0;

        async function checkAvailability() {
            const checkIn = checkInInput.value;
            const checkOut = checkOutInput.value;

            if (!checkIn || !checkOut) return;

            if (new Date(checkOut) <= new Date(checkIn)) {
                availStatus.style.display = 'block';
                availStatus.style.background = 'rgba(239, 68, 68, 0.15)';
                availStatus.style.color = '#fca5a5';
                availStatus.textContent = 'Check-out date must be after check-in date.';
                reserveBtn.disabled = true;
                pricingCalc.style.display = 'none';
                return;
            }

            availStatus.style.display = 'block';
            availStatus.style.background = 'var(--bg-input)';
            availStatus.style.color = 'var(--text-secondary)';
            availStatus.textContent = 'Checking calendar availability...';

            try {
                const res = await api.get(`/properties/${property.id}/availability`, {
                    params: { check_in: checkIn, check_out: checkOut }
                });

                if (res.data.available) {
                    availStatus.style.background = 'rgba(16, 185, 129, 0.15)';
                    availStatus.style.color = 'var(--emerald-500)';
                    availStatus.innerHTML = `<span style="display: inline-flex; vertical-align: middle; margin-right: 4px;">${Icons.check}</span> Dates are available for booking!`;

                    estimatedSubtotal = res.data.estimated_price;
                    const platformFee = Math.round(estimatedSubtotal * 0.05);
                    const total = estimatedSubtotal + platformFee;

                    const nights = Math.max(1, Math.round((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)));
                    content.querySelector('#calc-nights-text').textContent = `${authState.formatPrice(property.price, property.currency)} × ${nights} ${nights === 1 ? 'night' : 'nights'}`;
                    content.querySelector('#calc-subtotal').textContent = authState.formatPrice(estimatedSubtotal, property.currency);
                    content.querySelector('#calc-fee').textContent = authState.formatPrice(platformFee, property.currency);
                    content.querySelector('#calc-total').textContent = authState.formatPrice(total, property.currency);

                    pricingCalc.style.display = 'flex';
                    reserveBtn.disabled = false;
                    reserveBtn.textContent = 'Reserve Now (Instant Lock)';
                } else {
                    availStatus.style.background = 'rgba(239, 68, 68, 0.15)';
                    availStatus.style.color = '#fca5a5';
                    availStatus.textContent = 'Dates are booked or locked. Please select alternative dates.';
                    pricingCalc.style.display = 'none';
                    reserveBtn.disabled = true;
                    reserveBtn.textContent = 'Dates Unavailable';
                }
            } catch (err) {
                availStatus.style.background = 'rgba(239, 68, 68, 0.15)';
                availStatus.style.color = '#fca5a5';
                availStatus.textContent = 'Unable to verify availability.';
                pricingCalc.style.display = 'none';
                reserveBtn.disabled = true;
            }
        }

        checkInInput.addEventListener('change', () => {
            const nextDay = new Date(checkInInput.value);
            nextDay.setDate(nextDay.getDate() + 1);
            checkOutInput.min = nextDay.toISOString().split('T')[0];
            checkAvailability();
        });

        checkOutInput.addEventListener('change', checkAvailability);

        reserveBtn.addEventListener('click', () => {
            openBookingModal(property, checkInInput.value, checkOutInput.value, estimatedSubtotal);
        });
    } else {
        const contactBtn = content.querySelector('#btn-contact-agent');
        if (contactBtn) {
            contactBtn.addEventListener('click', () => {
                if (property.user?.phone) {
                    window.location.href = `tel:${property.user.phone}`;
                } else {
                    showToast('Direct contact: support@habeshahomes.com / +251 911 000 000', 'info', 6000);
                }
            });
        }

        const tourBtn = content.querySelector('#btn-schedule-tour');
        if (tourBtn) {
            tourBtn.addEventListener('click', () => {
                showToast('Viewing request submitted to host! An agent will call to coordinate access.', 'success');
            });
        }
    }
}
