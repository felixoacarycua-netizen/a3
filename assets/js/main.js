/* ==========================================================================
   BRODERIE FLAIR COUTURE ATELIER - CORE JAVASCRIPT
   Mobile Drawer Controller, Sticky Header Blur & Interaction Handlers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Drawer Navigation Toggle
    const drawerToggle = document.getElementById('drawer-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (drawerToggle && mobileDrawer) {
        drawerToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileDrawer.classList.toggle('open');
            const isOpen = mobileDrawer.classList.contains('open');
            drawerToggle.setAttribute('aria-expanded', isOpen);
            drawerToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && e.target !== drawerToggle) {
                mobileDrawer.classList.remove('open');
                drawerToggle.setAttribute('aria-expanded', 'false');
                drawerToggle.innerHTML = '&#9776;';
            }
        });

        // Close on ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
                mobileDrawer.classList.remove('open');
                drawerToggle.setAttribute('aria-expanded', 'false');
                drawerToggle.innerHTML = '&#9776;';
            }
        });
    }

    // Sticky Header Blur Elevation
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                siteHeader.style.background = 'rgba(15, 11, 20, 0.98)';
                siteHeader.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            } else {
                siteHeader.style.background = 'rgba(22, 16, 28, 0.94)';
                siteHeader.style.boxShadow = 'none';
            }
        }, { passive: true });
    }
});
