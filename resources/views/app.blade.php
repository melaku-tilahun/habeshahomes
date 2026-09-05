<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>HabeshaHomes — Premier Ethiopian Real Estate & Holiday Stays</title>
    <meta name="description" content="Discover luxury holiday stays, long-term rentals, and verified properties for sale across Addis Ababa and Ethiopia. Escrow-backed payments with Chapa and Telebirr.">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <!-- Main Sticky Navbar -->
    <nav id="main-navbar" class="navbar"></nav>

    <!-- SPA Root -->
    <div id="app-root"></div>

    <!-- Master Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div>
                    <div class="brand-logo mb-4">
                        <div class="brand-flag">
                            <span></span><span></span><span></span>
                        </div>
                        <span>Habesha<span style="color: var(--emerald-500);">Homes</span></span>
                    </div>
                    <p style="font-size: 0.85rem; max-width: 320px; line-height: 1.7;">
                        Ethiopia’s high-trust real estate and hospitality technology platform connecting the global diaspora and local residents with verified properties.
                    </p>
                </div>

                <div>
                    <h4 class="mb-4" style="color: #fff; font-size: 0.95rem;">Discovery</h4>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem;">
                        <li><a href="/properties?listing_type=holiday_let" data-link>Holiday Stays in Bole</a></li>
                        <li><a href="/properties?listing_type=rent" data-link>Long-Term Rentals</a></li>
                        <li><a href="/properties?listing_type=sale" data-link>Luxury Villas for Sale</a></li>
                        <li><a href="/properties?sub_city=Kirkos" data-link>Kazanchis Stays</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="mb-4" style="color: #fff; font-size: 0.95rem;">Hosts & Agents</h4>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem;">
                        <li><a href="/dashboard/listings" data-link>List Your Residence</a></li>
                        <li><a href="/dashboard" data-link>Host Portal</a></li>
                        <li><a href="#" onclick="alert('Host guarantee: 100% payout protection via Chapa escrow.'); return false;">Host Protection</a></li>
                        <li><a href="#" onclick="alert('Inspection guidelines: ISO certified electrical and plumbing standards.'); return false;">Verification Rules</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="mb-4" style="color: #fff; font-size: 0.95rem;">Supported Gateways</h4>
                    <p style="font-size: 0.85rem; line-height: 1.6; margin-bottom: 12px;">
                        Seamless local and diaspora transactions:
                    </p>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: var(--emerald-500);">TeleBirr</span>
                        <span class="badge" style="background: rgba(245, 158, 11, 0.15); color: var(--gold-500);">Chapa</span>
                        <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: #a5b4fc);">CBE Direct</span>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p style="font-size: 0.8rem;">&copy; {{ date('Y') }} HabeshaHomes Ltd. All rights reserved.</p>
                <div style="display: flex; gap: 20px; font-size: 0.8rem;">
                    <span>Addis Ababa, Ethiopia</span>
                    <span>•</span>
                    <span>support@habeshahomes.com</span>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
