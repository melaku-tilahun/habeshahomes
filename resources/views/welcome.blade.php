<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HabeshaHomes — Premier Dual-Mode Real Estate Platform</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-primary: #090d16;
            --bg-card: rgba(22, 27, 46, 0.7);
            --border-card: rgba(255, 255, 255, 0.08);
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --accent-green: #10b981;
            --accent-gold: #f59e0b;
            --accent-red: #ef4444;
            --primary: #6366f1;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            overflow-x: hidden;
            background-image: 
                radial-gradient(circle at 15% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 85% 80%, rgba(16, 185, 129, 0.12) 0%, transparent 40%);
        }

        header {
            padding: 24px 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border-card);
            backdrop-filter: blur(12px);
        }

        .logo {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: -0.5px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .logo-flag {
            display: inline-flex;
            height: 14px;
            width: 22px;
            border-radius: 3px;
            overflow: hidden;
        }
        .logo-flag span:nth-child(1) { background: #009a44; width: 33.3%; }
        .logo-flag span:nth-child(2) { background: #fed100; width: 33.3%; }
        .logo-flag span:nth-child(3) { background: #ef4444; width: 33.3%; }

        .badge-live {
            background: rgba(16, 185, 129, 0.15);
            color: var(--accent-green);
            border: 1px solid rgba(16, 185, 129, 0.3);
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .badge-live::before {
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--accent-green);
            box-shadow: 0 0 8px var(--accent-green);
        }

        main {
            flex: 1;
            max-width: 1200px;
            margin: 0 auto;
            padding: 64px 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .hero-title {
            font-size: clamp(36px, 5vw, 56px);
            font-weight: 800;
            line-height: 1.15;
            letter-spacing: -1.5px;
            margin-bottom: 20px;
            max-width: 800px;
            background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-desc {
            font-size: 18px;
            color: var(--text-secondary);
            max-width: 620px;
            line-height: 1.6;
            margin-bottom: 48px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            width: 100%;
            margin-bottom: 48px;
            text-align: left;
        }

        .card {
            background: var(--bg-card);
            border: 1px solid var(--border-card);
            border-radius: 16px;
            padding: 24px;
            transition: transform 0.2s ease, border-color 0.2s ease;
            backdrop-filter: blur(10px);
        }
        .card:hover {
            transform: translateY(-4px);
            border-color: rgba(99, 102, 241, 0.4);
        }

        .card h3 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
            color: #ffffff;
        }

        .card p {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.5;
            margin-bottom: 16px;
        }

        .card .endpoint {
            background: rgba(0, 0, 0, 0.4);
            padding: 8px 12px;
            border-radius: 6px;
            font-family: monospace;
            font-size: 12px;
            color: #a5b4fc;
            display: inline-block;
        }

        .actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .btn {
            background: var(--primary);
            color: #ffffff;
            text-decoration: none;
            padding: 12px 28px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 15px;
            transition: opacity 0.2s ease;
        }
        .btn:hover { opacity: 0.9; }

        .btn-outline {
            background: transparent;
            border: 1px solid var(--border-card);
            color: var(--text-primary);
        }
        .btn-outline:hover { background: rgba(255, 255, 255, 0.05); }

        footer {
            border-top: 1px solid var(--border-card);
            padding: 24px;
            text-align: center;
            font-size: 13px;
            color: var(--text-secondary);
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">
            <div class="logo-flag">
                <span></span><span></span><span></span>
            </div>
            HabeshaHomes
        </div>
        <div class="badge-live">API Engine Ready</div>
    </header>

    <main>
        <h1 class="hero-title">Ethiopia's Premier Dual-Mode Real Estate Engine</h1>
        <p class="hero-desc">
            Seamlessly powering holiday let reservations, long-term rentals, and property acquisitions with dual-gateway checkout (Chapa & TeleBirr), atomic concurrency locks, and Elasticsearch.
        </p>

        <div class="grid">
            <div class="card">
                <h3>🔍 Search & Discovery</h3>
                <p>Full-text multilingual search index with Amharic stemming and automatic MySQL fallback.</p>
                <span class="endpoint">GET /api/search</span>
            </div>

            <div class="card">
                <h3>🏡 Property Inventory</h3>
                <p>Comprehensive CRUD endpoints with multi-image processing and role policies.</p>
                <span class="endpoint">GET /api/properties</span>
            </div>

            <div class="card">
                <h3>🔒 Concurrency & Booking</h3>
                <p>Atomic Redis Lua calendar reservation locks, preventing double booking down to the millisecond.</p>
                <span class="endpoint">POST /api/properties/{id}/book</span>
            </div>

            <div class="card">
                <h3>💳 Dual Payment Webhooks</h3>
                <p>Chapa HMAC-SHA256 and TeleBirr RSA-SHA256 signature verification with automated PDF invoices.</p>
                <span class="endpoint">POST /api/payments/callback/{gw}</span>
            </div>
        </div>

        <div class="actions">
            <a href="/health" class="btn btn-outline" target="_blank">System Health Check</a>
            <a href="/api/properties" class="btn">Explore API Endpoints</a>
        </div>
    </main>

    <footer>
        <p>&copy; {{ date('Y') }} HabeshaHomes Platform. Production-grade real estate technology for Ethiopia and the Diaspora.</p>
    </footer>
</body>
</html>
