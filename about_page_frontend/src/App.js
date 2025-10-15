import React, { useEffect, useState } from 'react';
import './index.css';

// Local components
import Hero from './components/Hero';
import Section from './components/Section';
import CharacteristicCard from './components/CharacteristicCard';
import Gallery from './components/Gallery';

// PUBLIC_INTERFACE
function App() {
  /** Root single-page app for the Cavalier King Charles Spaniel About page. */
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const characteristics = [
    { icon: '💙', title: 'Affectionate', text: 'Deeply people‑oriented and happiest by your side; renowned lapdogs with a loyal, gentle heart.' },
    { icon: '🎾', title: 'Playful', text: 'Enjoys light fetch, short adventures, and interactive toys—an easygoing playmate for most households.' },
    { icon: '🧠', title: 'Trainable', text: 'Responsive to positive reinforcement; short, fun sessions help them quickly learn manners and cues.' },
    { icon: '🧒', title: 'Family‑Friendly', text: 'Soft temperament and patience make them loving companions for respectful children.' },
    { icon: '🐾', title: 'Adaptable', text: 'Comfortable in city apartments or suburban homes as long as they get daily affection and moderate activity.' },
    { icon: '🏥', title: 'Health‑Aware', text: 'Routine vet care is important; reputable breeders screen for conditions like heart and eye issues.' },
  ];

  const summaryPoints = [
    'Small toy spaniel with a silky, feathered coat and large, expressive eyes.',
    'Affectionate, sociable, and gentle—gets along well with people, kids, and other pets.',
    'Moderate exercise needs and adaptable lifestyle make them wonderful companion dogs.',
    'Grooming is manageable: regular brushing helps keep their coat tidy and comfortable.',
  ];

  const historyItems = [
    { year: '1600s', title: 'Royal Companions', text: 'Favored in the courts of England and often depicted in paintings with aristocracy.' },
    { year: '1920s', title: 'Breed Revival', text: 'Enthusiasts revived the spaniel with longer muzzles and classic toy‑spaniel traits, shaping today’s standard.' },
    { year: '1945', title: 'Recognition', text: 'Gained formal recognition from kennel clubs, accelerating responsible breeding and popularity.' },
    { year: 'Today', title: 'Beloved Friends', text: 'A cherished companion worldwide, admired for their tenderness, beauty, and easy charm.' },
  ];

  return (
    <div>
      <header className="header" role="banner">
        <div className="container navbar" aria-label="Top navigation">
          <a href="#hero" className="brand" aria-label="Homepage link">
            <span className="brand-badge" aria-hidden="true">CK</span>
            Cavalier About
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#summary">Summary</a>
            <a href="#characteristics">Characteristics</a>
            <a href="#history">History</a>
            <a href="#gallery" className="cta">Photos</a>
          </nav>
        </div>
      </header>

      <main id="hero" role="main">
        <Hero
          title="Cavalier King Charles Spaniel"
          subtitle="Affectionate. Elegant. Endlessly loyal."
          ctaPrimary={{ href: '#summary', label: 'Explore the Breed' }}
          ctaSecondary={{ href: '#gallery', label: 'View Gallery' }}
        />

        <section className="section" aria-labelledby="summary-title">
          <div className="container">
            <Section
              id="summary"
              title="Breed Summary"
              description="Graceful, affectionate, and wonderfully adaptable—an ideal companion with an easy charm."
            >
              <div className="section-card">
                <ul>
                  {summaryPoints.map((p, i) => (
                    <li key={i} style={{ marginBottom: 'var(--space-2)', color: 'var(--muted-text)', lineHeight: 'var(--lh-normal)', fontSize: 'var(--fs-md)' }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Section>
          </div>
        </section>

        <section id="characteristics" className="section" aria-labelledby="characteristics-title">
          <div className="container">
            <Section
              id="characteristics"
              title="Key Characteristics"
              description="The temperament and traits that make Cavaliers such beloved companions."
            >
              <div className="grid grid-3">
                {characteristics.map((c) => (
                  <CharacteristicCard key={c.title} icon={c.icon} title={c.title} text={c.text} />
                ))}
              </div>
            </Section>
          </div>
        </section>

        <section id="history" className="section" aria-labelledby="history-title">
          <div className="container">
            <Section
              id="history"
              title="History"
              description="From royal parlors to modern homes—how the Cavalier captured hearts through the centuries."
            >
              <div className="section-card timeline" role="list">
                {historyItems.map((h) => (
                  <div className="timeline-item" role="listitem" key={h.title}>
                    <span className="timeline-dot" aria-hidden="true" />
                    <h3 style={{ margin: 'var(--space-1) 0', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--track-tight)', fontSize: 'var(--fs-lg)' }}>
                      <span style={{ color: 'var(--primary)', marginRight: 'var(--space-2)' }}>{h.year}</span>
                      {h.title}
                    </h3>
                    <p style={{ color: 'var(--muted-text)', margin: 0, fontSize: 'var(--fs-md)', lineHeight: 'var(--lh-normal)' }}>{h.text}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        <section id="gallery" className="section" aria-labelledby="gallery-title">
          <div className="container">
            <Section
              id="gallery"
              title="Photo Gallery"
              description="A glimpse of the Cavalier’s charm and elegance."
            >
              <Gallery />
            </Section>
          </div>
        </section>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <small>© {new Date().getFullYear()} Cavalier About. Ocean Professional theme.</small>
        </div>
      </footer>

      <a
        href="#hero"
        className={`back-to-top ${showTop ? 'show' : ''}`}
        aria-label="Back to top"
      >
        ↑ Top
      </a>
    </div>
  );
}

export default App;
