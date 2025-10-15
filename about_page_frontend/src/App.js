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
    { icon: '💙', title: 'Affectionate', text: 'Exceptionally loving and people-oriented; thrives on companionship.' },
    { icon: '🎾', title: 'Playful', text: 'Enjoys fetch and gentle play; great for families and apartment living.' },
    { icon: '🧠', title: 'Intelligent', text: 'Eager to please and easy to train with positive reinforcement.' },
    { icon: '🧒', title: 'Family-Friendly', text: 'Gentle nature makes them ideal companions for children.' },
    { icon: '🐾', title: 'Adaptable', text: 'Comfortable with various lifestyles—from city apartments to suburban homes.' },
    { icon: '🏥', title: 'Health-Aware', text: 'Regular vet check-ups recommended for breed-specific health monitoring.' },
  ];

  const summaryPoints = [
    'Small toy breed with a sweet, expressive face and silky coat.',
    'Known for being affectionate, gentle, and friendly to people and pets.',
    'Ideal companion dog that adapts to many living environments.',
  ];

  const historyItems = [
    { year: '1600s', title: 'Royal Companions', text: 'Esteemed in royal courts of England, especially among the nobility.' },
    { year: '1920s', title: 'Breed Revival', text: 'Renewed interest led to the modern Cavalier standard.' },
    { year: '1945', title: 'Recognition', text: 'Official recognition helped establish global popularity.' },
    { year: 'Today', title: 'Beloved Companions', text: 'Known worldwide for their gentle demeanor and loving nature.' },
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

        <section id="summary" className="section" aria-labelledby="summary-title">
          <div className="container">
            <Section
              title="Breed Summary"
              description="A graceful, affectionate companion breed with a joyful spirit and adaptable nature."
            >
              <div className="section-card">
                <ul>
                  {summaryPoints.map((p, i) => (
                    <li key={i} style={{ marginBottom: 8, color: 'var(--muted-text)' }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Section>
          </div>
        </section>

        <section id="characteristics" className="section" aria-labelledby="char-title">
          <div className="container">
            <Section
              title="Key Characteristics"
              description="Core traits that make Cavaliers beloved companions."
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
              title="History"
              description="A brief timeline of this cherished toy spaniel."
            >
              <div className="section-card timeline" role="list">
                {historyItems.map((h) => (
                  <div className="timeline-item" role="listitem" key={h.title}>
                    <span className="timeline-dot" aria-hidden="true" />
                    <h3 style={{ margin: '4px 0' }}>
                      <span style={{ color: 'var(--primary)', marginRight: 8 }}>{h.year}</span>
                      {h.title}
                    </h3>
                    <p style={{ color: 'var(--muted-text)', margin: 0 }}>{h.text}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        <section id="gallery" className="section" aria-labelledby="gallery-title">
          <div className="container">
            <Section
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
