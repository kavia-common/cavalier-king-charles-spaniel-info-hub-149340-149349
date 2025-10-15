import React from 'react';

// PUBLIC_INTERFACE
export default function Hero({ title, subtitle, ctaPrimary, ctaSecondary }) {
  /** Hero section with large visual, gradient, and call-to-action buttons. */
  const heroImg =
    'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1600&auto=format&fit=crop';

  return (
    <section className="hero" aria-label="Hero: Cavalier King Charles Spaniel">
      <div className="container hero-inner">
        <div>
          <span className="kicker" aria-hidden="true">Ocean Professional</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="hero-actions" role="group" aria-label="Hero actions">
            <a className="cta" href={ctaPrimary?.href || '#'} aria-label={ctaPrimary?.label || 'Primary action'}>
              {ctaPrimary?.label || 'Learn More'}
            </a>
            <a
              className="button-secondary"
              href={ctaSecondary?.href || '#'}
              aria-label={ctaSecondary?.label || 'Secondary action'}
            >
              {ctaSecondary?.label || 'Gallery'}
            </a>
          </div>
        </div>
        <div className="hero-card" role="img" aria-label="Cavalier King Charles Spaniel sitting on grass">
          <img
            src={heroImg}
            alt="Cavalier King Charles Spaniel on grass looking toward camera"
            style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 12 }}
          />
        </div>
      </div>
    </section>
  );
}
