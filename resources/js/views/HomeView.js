import api from '../services/api.js';
import { renderPropertyCard } from '../components/PropertyCard.js';
import { navigateTo } from '../router.js';
import { Icons } from '../components/Icons.js';

export async function renderHomeView(container) {
    container.innerHTML = `
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <div class="hero-tag">
                    <span style="display: inline-flex; align-items: center;">${Icons.badgeVerified}</span>
                    <span>Verified Real Estate Network of Ethiopia</span>
                </div>
                <h1 class="hero-title">
                    Discover Luxury Stays & Prime Real Estate in <span class="gradient-text">Addis Ababa & Beyond</span>
                </h1>
                <p class="hero-subtitle">
                    Book verified short-term holiday stays or secure long-term residences with escrow-backed local payments via TeleBirr, Chapa & CBE.
                </p>

                <!-- Search Widget -->
                <div class="search-widget">
                    <div class="search-tabs">
                        <button class="search-tab active" data-type="">All Properties</button>
                        <button class="search-tab" data-type="holiday_let">Holiday Stays</button>
                        <button class="search-tab" data-type="rent">Long-term Rent</button>
                        <button class="search-tab" data-type="sale">For Sale</button>
                    </div>

                    <form id="hero-search-form" class="search-fields">
                        <div class="form-group">
                            <label class="form-label">Sub-City / Area</label>
                            <select id="hero-subcity" class="form-control">
                                <option value="">All Addis Ababa</option>
                                <option value="Bole">Bole (Atlas, Rwanda, Medhanialem)</option>
                                <option value="Kirkos">Kirkos (Kazanchis, Meskel Sq)</option>
                                <option value="Yeka">Yeka (CMC, Meganagna)</option>
                                <option value="Arada">Arada (Piazza, 4 Kilo)</option>
                                <option value="Lideta">Lideta (Balcha, Mexico)</option>
                                <option value="Nifas Silk-Lafto">Nifas Silk-Lafto (Bisrate Gabriel, Jemo)</option>
                                <option value="Hawassa">Hawassa City</option>
                                <option value="Bahir Dar">Bahir Dar</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Property Type</label>
                            <select id="hero-proptype" class="form-control">
                                <option value="">Any Type</option>
                                <option value="apartment">Modern Apartment</option>
                                <option value="villa">Luxury Villa / House</option>
                                <option value="condo">Condominium</option>
                                <option value="commercial">Commercial Space</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Min Price</label>
                            <input type="number" id="hero-minprice" class="form-control" placeholder="Min">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Max Price</label>
                            <input type="number" id="hero-maxprice" class="form-control" placeholder="Max">
                        </div>

                        <button type="submit" class="btn btn-primary btn-lg" style="height: 44px; margin-top: 22px;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <span>Search</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <!-- Featured Section -->
        <section style="padding: 60px 0;">
            <div class="container">
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h2>Featured Verified Properties</h2>
                        <p>Curated luxury listings inspected by our local architectural specialists.</p>
                    </div>
                    <a href="/properties" class="btn btn-outline btn-sm" data-link>View All Properties →</a>
                </div>

                <div id="featured-listings-grid" class="grid grid-3">
                    <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted);">
                        Loading curated residences...
                    </div>
                </div>
            </div>
        </section>

        <!-- Neighborhood Showcase -->
        <section style="padding: 60px 0; background: var(--bg-surface); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
            <div class="container">
                <div class="text-center mb-6">
                    <h2>Explore Addis Ababa's Prime Neighborhoods</h2>
                    <p>Find the right community for lifestyle, business hubs, and international schools.</p>
                </div>

                <div class="grid grid-4 mt-6">
                    <div class="card-property" data-filter-subcity="Bole" style="height: 220px; position: relative; overflow: hidden; border-radius: var(--radius-lg);">
                        <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,14,23,0.95), transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;">
                            <h3 style="color: #fff; font-size: 1.2rem;">Bole District</h3>
                            <p style="font-size: 0.8rem; color: var(--emerald-500);">Restaurants, Malls & Airport</p>
                        </div>
                    </div>

                    <div class="card-property" data-filter-subcity="Kirkos" style="height: 220px; position: relative; overflow: hidden; border-radius: var(--radius-lg);">
                        <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,14,23,0.95), transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;">
                            <h3 style="color: #fff; font-size: 1.2rem;">Kazanchis</h3>
                            <p style="font-size: 0.8rem; color: var(--gold-500);">UN ECA, Hotels & Embassies</p>
                        </div>
                    </div>

                    <div class="card-property" data-filter-subcity="Old Airport" style="height: 220px; position: relative; overflow: hidden; border-radius: var(--radius-lg);">
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,14,23,0.95), transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;">
                            <h3 style="color: #fff; font-size: 1.2rem;">Old Airport & Sarbet</h3>
                            <p style="font-size: 0.8rem; color: var(--emerald-500);">Luxury Villas & ICS School</p>
                        </div>
                    </div>

                    <div class="card-property" data-filter-subcity="Yeka" style="height: 220px; position: relative; overflow: hidden; border-radius: var(--radius-lg);">
                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,14,23,0.95), transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;">
                            <h3 style="color: #fff; font-size: 1.2rem;">CMC & Yeka</h3>
                            <p style="font-size: 0.8rem; color: var(--indigo-500);">Quiet Gated Communities</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Value Proposition -->
        <section style="padding: 70px 0;">
            <div class="container">
                <div class="grid grid-3">
                    <div class="detail-card text-center" style="padding: 32px 24px;">
                        <div style="margin: 0 auto 16px; display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 50%; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25);">
                            ${Icons.shield}
                        </div>
                        <h3 class="mb-2">Escrow-Backed Payments</h3>
                        <p>Funds are secured safely until check-in or lease agreement verification via Chapa and TeleBirr.</p>
                    </div>
                    <div class="detail-card text-center" style="padding: 32px 24px;">
                        <div style="margin: 0 auto 16px; display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 50%; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.25);">
                            ${Icons.document}
                        </div>
                        <h3 class="mb-2">100% Verified Titles</h3>
                        <p>Every long-term listing and sale contract has verified ownership documents to protect buyers.</p>
                    </div>
                    <div class="detail-card text-center" style="padding: 32px 24px;">
                        <div style="margin: 0 auto 16px; display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 50%; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.25);">
                            ${Icons.zap}
                        </div>
                        <h3 class="mb-2">Instant Stays & Concierge</h3>
                        <p>Holiday lets come furnished with high-speed WiFi, backup power generator, and water reservoirs.</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Bind Search Tabs
    let activeListingType = '';
    const tabs = container.querySelectorAll('.search-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeListingType = tab.getAttribute('data-type');
        });
    });

    // Bind Search Form
    const form = container.querySelector('#hero-search-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const subcity = container.querySelector('#hero-subcity').value;
        const propType = container.querySelector('#hero-proptype').value;
        const minPrice = container.querySelector('#hero-minprice').value;
        const maxPrice = container.querySelector('#hero-maxprice').value;

        const params = new URLSearchParams();
        if (activeListingType) params.set('listing_type', activeListingType);
        if (subcity) params.set('sub_city', subcity);
        if (propType) params.set('property_type', propType);
        if (minPrice) params.set('min_price', minPrice);
        if (maxPrice) params.set('max_price', maxPrice);

        navigateTo(`/properties?${params.toString()}`);
    });

    // Bind Neighborhood clicks
    container.querySelectorAll('[data-filter-subcity]').forEach(card => {
        card.addEventListener('click', () => {
            const subcity = card.getAttribute('data-filter-subcity');
            navigateTo(`/properties?sub_city=${encodeURIComponent(subcity)}`);
        });
    });

    // Fetch and render Featured Listings
    const featuredGrid = container.querySelector('#featured-listings-grid');
    try {
        const response = await api.get('/properties?featured=1&per_page=6');
        const properties = response.data.data || [];

        if (properties.length === 0) {
            featuredGrid.innerHTML = `
                <div style="grid-column: 1 / -1; padding: 30px; text-align: center; color: var(--text-muted);">
                    No featured properties currently active. Explore all properties below.
                </div>
            `;
        } else {
            featuredGrid.innerHTML = properties.map(p => renderPropertyCard(p)).join('');
            
            featuredGrid.querySelectorAll('.card-property').forEach(card => {
                card.addEventListener('click', () => {
                    const id = card.getAttribute('data-id');
                    navigateTo(`/properties/${id}`);
                });
            });
        }
    } catch (err) {
        featuredGrid.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 20px; text-align: center; color: var(--coral-500);">
                Could not load featured properties. Please try again.
            </div>
        `;
    }
}
