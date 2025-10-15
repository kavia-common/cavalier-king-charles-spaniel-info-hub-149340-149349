import React from 'react';

// PUBLIC_INTERFACE
export default function Gallery() {
  /** Responsive photo gallery grid with hover effects and accessible captions. */
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1593134257782-e89567b7718f?q=80&w=1600&auto=format&fit=crop',
      alt: 'Cavalier King Charles Spaniel close-up portrait',
      caption: 'Classic Cavalier portrait',
    },
    {
      src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop',
      alt: 'Cavalier King Charles Spaniel outdoors on a walk',
      caption: 'Enjoying a sunny stroll',
    },
    {
      src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop',
      alt: 'Cavalier puppy lying on a blanket',
      caption: 'Gentle puppy calm',
    },
  ];

  return (
    <div className="gallery" role="list">
      {images.map((img, idx) => (
        <figure key={idx} role="listitem">
          <img src={img.src} alt={img.alt} />
          <figcaption>{img.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
