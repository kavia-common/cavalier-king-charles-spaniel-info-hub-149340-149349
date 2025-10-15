import React from 'react';

// PUBLIC_INTERFACE
export default function Section({ id, title, description, children }) {
  /** A semantic section wrapper with heading and description.
   * Accepts an optional `id` to link from in-page anchors.
   */
  const idSafe = id || String(title || 'section').toLowerCase().replace(/\s+/g, '-');

  return (
    <div id={idSafe} aria-labelledby={`${idSafe}-title`}>
      <h2
        id={`${idSafe}-title`}
        style={{
          marginBottom: 'var(--space-2)',
          fontSize: 'var(--fs-xl)',
          lineHeight: 'var(--lh-snug)',
          letterSpacing: 'var(--track-tight)'
        }}
      >
        {title}
      </h2>
      {description && <p className="lead">{description}</p>}
      {children}
    </div>
  );
}
