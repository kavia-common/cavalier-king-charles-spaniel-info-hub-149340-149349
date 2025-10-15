import React from 'react';

/**
 * Smoothly scroll to the target element by id.
 * Keeps native anchor fallback via href while enhancing UX with smooth behavior and focus management.
 */
function handleSmoothScroll(event, targetId) {
  // If no target id or modifier keys used, let default occur.
  if (!targetId || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const target = document.getElementById(targetId);
  if (!target) return; // No target; allow default jump

  // Prevent default only if we can enhance
  event.preventDefault();

  // Prefer focusing the section's heading if available
  // Look for aria-labelledby reference first for better semantics
  const labelledById = target.getAttribute('aria-labelledby');
  const heading = labelledById ? document.getElementById(labelledById) : target.querySelector('h2, h1, [role="heading"]');

  // Ensure an element can receive programmatic focus
  const focusable = heading || target;
  const previousTabIndex = focusable.getAttribute && focusable.getAttribute('tabIndex');
  if (focusable && focusable.tabIndex === undefined) {
    // no-op; React sets undefined if not present
  }
  if (focusable && (previousTabIndex === null || previousTabIndex === undefined)) {
    focusable.setAttribute && focusable.setAttribute('tabIndex', '-1');
  }

  // Smooth scroll using native API if available
  if (typeof target.scrollIntoView === 'function') {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (typeof window.scrollTo === 'function') {
    const rect = target.getBoundingClientRect();
    const top = rect.top + window.pageYOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  // Shift focus after a tick to ensure element is in view for screen readers
  window.requestAnimationFrame(() => {
    focusable && typeof focusable.focus === 'function' && focusable.focus({ preventScroll: true });
  });
}

// PUBLIC_INTERFACE
export default function Hero({ title, subtitle, ctaPrimary, ctaSecondary }) {
  /** Hero section with large visual, gradient, and call-to-action buttons. */
  const heroImg =
    'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1600&auto=format&fit=crop';

  // Derive IDs from href hash if provided
  const primaryHref = ctaPrimary?.href || '#';
  const primaryHash = primaryHref.startsWith('#') ? primaryHref.slice(1) : null;

  const secondaryHref = ctaSecondary?.href || '#';
  const secondaryHash = secondaryHref.startsWith('#') ? secondaryHref.slice(1) : null;

  return (
    <section className="hero" aria-label="Hero: Cavalier King Charles Spaniel">
      <div className="container hero-inner">
        <div>
          <span className="kicker" aria-hidden="true">Ocean Professional</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="hero-actions" role="group" aria-label="Hero actions">
            <a
              className="cta"
              href={primaryHref}
              aria-label={ctaPrimary?.label || 'Primary action'}
              onClick={(e) => primaryHash && handleSmoothScroll(e, primaryHash)}
            >
              {ctaPrimary?.label || 'Learn More'}
            </a>
            <a
              className="button-secondary"
              href={secondaryHref}
              aria-label={ctaSecondary?.label || 'Secondary action'}
              onClick={(e) => secondaryHash && handleSmoothScroll(e, secondaryHash)}
            >
              {ctaSecondary?.label || 'Gallery'}
            </a>
          </div>
        </div>
        <div className="hero-card" role="img" aria-label="Cavalier King Charles Spaniel sitting on grass">
          <img
            src={heroImg}
            alt="Cavalier King Charles Spaniel on grass looking toward camera"
            style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
          />
        </div>
      </div>
    </section>
  );
}
