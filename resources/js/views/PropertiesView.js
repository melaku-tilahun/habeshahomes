import api from '../services/api.js';
import { renderPropertyCard } from '../components/PropertyCard.js';
import { navigateTo } from '../router.js';

export async function renderPropertiesView(container, queryParams = {}) {
    const currentParams = new URLSearchParams(window.location.search);

    container.innerHTML = `
        <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
            <div class="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div>
                    <h1>Explore Properties</h1>
                    <p id="results-count-text">Finding premier properties across Ethiopia...</p>
                </div>
                <div class="flex items-center gap-3">
                    <label class="form-label" style="margin: 0;">Sort By:</label>
                    <select id="sort-selector" class="form-control" style="width: auto; padding: 6px 32px 6px 12px;">
                        <option value="created_at:desc">Newest Added</option>
                        <option value="price:asc">Price: Low to High</option>
                        <option value="price:desc">Price: High to Low</option>
                        <option value="square_meters:desc">Largest Area</option>
                    </select>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 280px 1fr; gap: 32px;" class="properties-layout">
                <!-- Sidebar Filters -->
                <aside class="detail-card" style="height: fit-content; padding: 24px;">
                    <div class="flex justify-between items-center mb-4">
                        <h4 style="font-size: 1.1rem;">Filters</h4>
                        <button id="btn-reset-filters" class="btn btn-outline btn-sm" style="padding: 2px 8px; font-size: 0.75rem;">Reset</button>
                    </div>

                    <form id="filter-form" class="flex flex-col gap-4">
                        <div class="form-group">
                            <label class="form-label">Keyword / Title</label>
                            <input type="text" id="filter-q" class="form-control" placeholder="e.g. Bole Atlas penthouse" value="${currentParams.get('q') || ''}">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Listing Type</label>
                            <select id="filter-listing-type" class="form-control">
                                <option value="">All Categories</option>
                                <option value="holiday_let" ${currentParams.get('listing_type') === 'holiday_let' ? 'selected' : ''}>Holiday Stay (Nightly)</option>
                                <option value="rent" ${currentParams.get('listing_type') === 'rent' ? 'selected' : ''}>Long-term Rent</option>
                                <option value="sale" ${currentParams.get('listing_type') === 'sale' ? 'selected' : ''}>For Sale</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Sub-City</label>
                            <select id="filter-subcity" class="form-control">
                                <option value="">All Sub-Cities</option>
                                <option value="Bole" ${currentParams.get('sub_city') === 'Bole' ? 'selected' : ''}>Bole</option>
                                <option value="Kirkos" ${currentParams.get('sub_city') === 'Kirkos' ? 'selected' : ''}>Kirkos (Kazanchis)</option>
                                <option value="Yeka" ${currentParams.get('sub_city') === 'Yeka' ? 'selected' : ''}>Yeka (CMC)</option>
                                <option value="Arada" ${currentParams.get('sub_city') === 'Arada' ? 'selected' : ''}>Arada</option>
                                <option value="Lideta" ${currentParams.get('sub_city') === 'Lideta' ? 'selected' : ''}>Lideta</option>
                                <option value="Nifas Silk-Lafto" ${currentParams.get('sub_city') === 'Nifas Silk-Lafto' ? 'selected' : ''}>Nifas Silk-Lafto</option>
                                <option value="Gulele" ${currentParams.get('sub_city') === 'Gulele' ? 'selected' : ''}>Gulele</option>
                                <option value="Kolfe Keranio" ${currentParams.get('sub_city') === 'Kolfe Keranio' ? 'selected' : ''}>Kolfe Keranio</option>
                                <option value="Akaky Kaliti" ${currentParams.get('sub_city') === 'Akaky Kaliti' ? 'selected' : ''}>Akaky Kaliti</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Property Type</label>
                            <select id="filter-proptype" class="form-control">
                                <option value="">Any Architecture</option>
                                <option value="apartment" ${currentParams.get('property_type') === 'apartment' ? 'selected' : ''}>Apartment</option>
                                <option value="villa" ${currentParams.get('property_type') === 'villa' ? 'selected' : ''}>Villa</option>
                                <option value="condo" ${currentParams.get('property_type') === 'condo' ? 'selected' : ''}>Condominium</option>
                                <option value="house" ${currentParams.get('property_type') === 'house' ? 'selected' : ''}>Independent House</option>
                                <option value="commercial" ${currentParams.get('property_type') === 'commercial' ? 'selected' : ''}>Commercial Space</option>
                            </select>
                        </div>

                        <div class="grid grid-2" style="gap: 10px;">
                            <div class="form-group">
                                <label class="form-label">Min Price</label>
                                <input type="number" id="filter-minprice" class="form-control" placeholder="Min" value="${currentParams.get('min_price') || ''}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Max Price</label>
                                <input type="number" id="filter-maxprice" class="form-control" placeholder="Max" value="${currentParams.get('max_price') || ''}">
                            </div>
                        </div>

                        <div class="grid grid-2" style="gap: 10px;">
                            <div class="form-group">
                                <label class="form-label">Bedrooms</label>
                                <select id="filter-beds" class="form-control">
                                    <option value="">Any</option>
                                    <option value="1" ${currentParams.get('bedrooms') === '1' ? 'selected' : ''}>1+</option>
                                    <option value="2" ${currentParams.get('bedrooms') === '2' ? 'selected' : ''}>2+</option>
                                    <option value="3" ${currentParams.get('bedrooms') === '3' ? 'selected' : ''}>3+</option>
                                    <option value="4" ${currentParams.get('bedrooms') === '4' ? 'selected' : ''}>4+</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Bathrooms</label>
                                <select id="filter-baths" class="form-control">
                                    <option value="">Any</option>
                                    <option value="1" ${currentParams.get('bathrooms') === '1' ? 'selected' : ''}>1+</option>
                                    <option value="2" ${currentParams.get('bathrooms') === '2' ? 'selected' : ''}>2+</option>
                                    <option value="3" ${currentParams.get('bathrooms') === '3' ? 'selected' : ''}>3+</option>
                                </select>
                            </div>
                        </div>

                        <div class="flex items-center gap-2 mt-2">
                            <input type="checkbox" id="filter-furnished" ${currentParams.get('is_furnished') === '1' ? 'checked' : ''} style="width: 16px; height: 16px; accent-color: var(--emerald-500); cursor: pointer;">
                            <label for="filter-furnished" style="font-size: 0.85rem; color: var(--text-primary); cursor: pointer;">Furnished Only</label>
                        </div>

                        <button type="submit" class="btn btn-primary w-full mt-2">Apply Filters</button>
                    </form>
                </aside>

                <!-- Results Grid -->
                <main>
                    <div id="properties-grid" class="grid grid-3">
                        <div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--text-muted);">
                            Searching verified listings...
                        </div>
                    </div>

                    <div id="pagination-controls" class="flex justify-center items-center gap-3 mt-8"></div>
                </main>
            </div>
        </div>
    `;

    // Responsive css adjustment for properties layout
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        @media (max-width: 900px) {
            .properties-layout { grid-template-columns: 1fr !important; }
        }
    `;
    container.appendChild(styleEl);

    let currentPage = 1;

    async function loadProperties(page = 1) {
        currentPage = page;
        const grid = container.querySelector('#properties-grid');
        const countText = container.querySelector('#results-count-text');
        const pagination = container.querySelector('#pagination-controls');

        grid.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--text-muted);">
                Searching verified listings...
            </div>
        `;

        const params = new URLSearchParams();
        const q = container.querySelector('#filter-q').value.trim();
        const listingType = container.querySelector('#filter-listing-type').value;
        const subcity = container.querySelector('#filter-subcity').value;
        const propType = container.querySelector('#filter-proptype').value;
        const minPrice = container.querySelector('#filter-minprice').value;
        const maxPrice = container.querySelector('#filter-maxprice').value;
        const beds = container.querySelector('#filter-beds').value;
        const baths = container.querySelector('#filter-baths').value;
        const furnished = container.querySelector('#filter-furnished').checked;
        const sortVal = container.querySelector('#sort-selector').value;

        if (q) params.set('q', q);
        if (listingType) params.set('listing_type', listingType);
        if (subcity) params.set('sub_city', subcity);
        if (propType) params.set('property_type', propType);
        if (minPrice) params.set('min_price', minPrice);
        if (maxPrice) params.set('max_price', maxPrice);
        if (beds) params.set('bedrooms', beds);
        if (baths) params.set('bathrooms', baths);
        if (furnished) params.set('is_furnished', '1');

        if (sortVal) {
            const [sortBy, sortOrder] = sortVal.split(':');
            params.set('sort_by', sortBy);
            params.set('sort_order', sortOrder);
        }

        params.set('page', page);
        params.set('per_page', 12);

        // Update URL query string without reloading
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, '', newUrl);

        try {
            // If text query exists, use /api/search, else /api/properties
            const endpoint = q ? `/search?${params.toString()}` : `/properties?${params.toString()}`;
            const response = await api.get(endpoint);
            const data = response.data;
            const items = data.data || [];
            const meta = data.meta || { total: items.length, last_page: 1 };

            countText.textContent = `Showing ${items.length} of ${meta.total || items.length} luxury listings`;

            if (items.length === 0) {
                grid.innerHTML = `
                    <div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg);">
                        <div style="font-size: 2.5rem; margin-bottom: 12px;">🏡</div>
                        <h3>No Properties Found</h3>
                        <p class="mt-2">Try adjusting your filters, price range, or search keyword.</p>
                    </div>
                `;
                pagination.innerHTML = '';
                return;
            }

            grid.innerHTML = items.map(p => renderPropertyCard(p)).join('');

            grid.querySelectorAll('.card-property').forEach(card => {
                card.addEventListener('click', () => {
                    const id = card.getAttribute('data-id');
                    navigateTo(`/properties/${id}`);
                });
            });

            // Render pagination
            const totalPages = meta.last_page || 1;
            if (totalPages > 1) {
                let btns = '';
                if (page > 1) {
                    btns += `<button class="btn btn-secondary btn-sm" id="page-prev">← Prev</button>`;
                }
                btns += `<span style="font-size: 0.85rem; color: var(--text-secondary);">Page ${page} of ${totalPages}</span>`;
                if (page < totalPages) {
                    btns += `<button class="btn btn-secondary btn-sm" id="page-next">Next →</button>`;
                }
                pagination.innerHTML = btns;

                const prevBtn = pagination.querySelector('#page-prev');
                if (prevBtn) prevBtn.addEventListener('click', () => loadProperties(page - 1));

                const nextBtn = pagination.querySelector('#page-next');
                if (nextBtn) nextBtn.addEventListener('click', () => loadProperties(page + 1));
            } else {
                pagination.innerHTML = '';
            }
        } catch (err) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--coral-500);">
                    Error retrieving properties. Please try again.
                </div>
            `;
        }
    }

    // Filter Form submit
    container.querySelector('#filter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        loadProperties(1);
    });

    // Sort selector change
    container.querySelector('#sort-selector').addEventListener('change', () => {
        loadProperties(1);
    });

    // Reset button
    container.querySelector('#btn-reset-filters').addEventListener('click', (e) => {
        e.preventDefault();
        container.querySelector('#filter-form').reset();
        loadProperties(1);
    });

    // Initial load
    await loadProperties(1);
}
