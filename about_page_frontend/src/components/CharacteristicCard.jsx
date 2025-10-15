import React from 'react';

// PUBLIC_INTERFACE
export default function CharacteristicCard({ icon, title, text }) {
  /** A small feature card showing an icon, a title, and supporting text. */
  return (
    <article className="card" tabIndex="0" aria-label={`${title} characteristic`}>
      <div className="icon-badge" aria-hidden="true">{icon}</div>
      <h3 style={{ margin: '6px 0' }}>{title}</h3>
      <p style={{ color: 'var(--muted-text)', margin: 0 }}>{text}</p>
    </article>
  );
}
