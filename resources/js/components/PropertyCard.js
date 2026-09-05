import { authState } from '../state/auth.js';

export function renderPropertyCard(property) {
    const imageUrl = property.featured_image || 
        (property.images && property.images.length > 0 ? property.images[0].image_url : null) ||
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80';

    let badgeClass = 'badge-rent';
    let badgeLabel = 'For Rent';
    if (property.listing_type === 'holiday_let') {
        badgeClass = 'badge-holiday';
        badgeLabel = 'Holiday Stay';
    } else if (property.listing_type === 'sale') {
        badgeClass = 'badge-sale';
        badgeLabel = 'For Sale';
    }

    const priceFormatted = authState.formatPrice(property.price, property.currency || 'ETB');
    const priceSuffix = property.listing_type === 'holiday_let' ? '/ night' : property.listing_type === 'rent' ? '/ month' : '';

    return `
        <div class="card-property" data-id="${property.id}">
            <div class="card-media">
                <img src="${imageUrl}" alt="${property.title}" loading="lazy">
                <div class="card-badge-top">
                    <span class="badge ${badgeClass}">${badgeLabel}</span>
                    ${property.is_featured ? `<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: var(--gold-500); border: 1px solid var(--border-gold); margin-left: 4px;">Featured</span>` : ''}
                </div>
                <div class="card-price-overlay">
                    <span class="card-price">${priceFormatted}</span>
                    <span style="font-size: 0.75rem; color: var(--text-secondary);">${priceSuffix}</span>
                </div>
            </div>
            <div class="card-body">
                <h3 class="card-title" title="${property.title}">${property.title}</h3>
                <div class="card-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--emerald-500);">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${property.sub_city ? property.sub_city + ', ' : ''}${property.city}</span>
                </div>
                <div class="card-specs">
                    ${property.bedrooms ? `
                        <div class="spec-item">
                            <span>🛏️</span>
                            <span>${property.bedrooms} Beds</span>
                        </div>
                    ` : ''}
                    ${property.bathrooms ? `
                        <div class="spec-item">
                            <span>🚿</span>
                            <span>${property.bathrooms} Baths</span>
                        </div>
                    ` : ''}
                    ${property.square_meters ? `
                        <div class="spec-item">
                            <span>📐</span>
                            <span>${property.square_meters} m²</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}
