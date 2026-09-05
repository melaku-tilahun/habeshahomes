import { renderHomeView } from './views/HomeView.js';
import { renderPropertiesView } from './views/PropertiesView.js';
import { renderPropertyDetailView } from './views/PropertyDetailView.js';
import { renderDashboardView } from './views/DashboardView.js';
import { renderProfileView } from './views/ProfileView.js';
import { renderNavbar } from './components/Navbar.js';
import { authState } from './state/auth.js';

let currentRouteHandler = null;

export function initRouter() {
    window.addEventListener('popstate', () => {
        handleRoute(window.location.pathname);
    });

    // Intercept clicks on internal data-link anchors
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[data-link]');
        if (link) {
            e.preventDefault();
            const href = link.getAttribute('href');
            navigateTo(href);
        }
    });

    // Re-render when auth or currency updates
    authState.subscribe(() => {
        renderNavbar();
        handleRoute(window.location.pathname, false);
    });

    // Initial route handling
    handleRoute(window.location.pathname);
}

export function navigateTo(url) {
    window.history.pushState(null, null, url);
    handleRoute(window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function handleRoute(path, shouldScroll = true) {
    const appRoot = document.getElementById('app-root');
    if (!appRoot) return;

    renderNavbar();

    // Match /properties/:id
    const propDetailMatch = path.match(/^\/properties\/(\d+)$/);
    if (propDetailMatch) {
        currentRouteHandler = () => renderPropertyDetailView(appRoot, propDetailMatch[1]);
        currentRouteHandler();
        return;
    }

    if (path === '/properties' || path.startsWith('/properties?')) {
        currentRouteHandler = () => renderPropertiesView(appRoot);
        currentRouteHandler();
        return;
    }

    if (path === '/profile' || path === '/dashboard/profile') {
        currentRouteHandler = () => renderProfileView(appRoot);
        currentRouteHandler();
        return;
    }

    if (path === '/dashboard/listings') {
        currentRouteHandler = () => renderDashboardView(appRoot, 'listings');
        currentRouteHandler();
        return;
    }

    if (path === '/dashboard') {
        currentRouteHandler = () => renderDashboardView(appRoot, 'bookings');
        currentRouteHandler();
        return;
    }

    // Default: Home
    currentRouteHandler = () => renderHomeView(appRoot);
    currentRouteHandler();
}
