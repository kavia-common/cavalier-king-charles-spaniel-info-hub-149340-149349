import React from 'react';

// PUBLIC_INTERFACE
export default function Section({ title, description, children }) {
  /** A semantic section wrapper with heading and description. */
  const idSafe = String(title || 'section').toLowerCase().replace(/\s+/g, '-');
  return (
    <div aria-labelledby={`${idSafe}-title`}>
      <h2 id={`${idSafe}-title`} style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--fs-xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--track-tight)' }}>{title}</h2>
      {description && <p className="lead">{description}</p>}
      {children}
    </div>
  );
}
