import React from 'react';

// PUBLIC_INTERFACE
export default function Gallery() {
  /** 
   * Responsive photo gallery grid with hover effects and accessible captions.
   * Image sources use royalty‑free Unsplash photos.
   * Credits: Unsplash contributors via https://unsplash.com (see image pages for authors).
   */
  const images = [
    // Credits: Unsplash
    {
      src: 'https://images.unsplash.com/photo-1593134257782-e89567b7718f?q=80&w=1600&auto=format&fit=crop',
      alt: 'Cavalier King Charles Spaniel close-up portrait with silky ears',
      caption: 'Classic Cavalier portrait',
    },
    {
      src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop',
      alt: 'Cavalier King Charles Spaniel walking outdoors on a lead',
      caption: 'Enjoying a sunny stroll',
    },
    {
      src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop',
      alt: 'Young Cavalier puppy resting on a soft blanket',
      caption: 'Gentle puppy calm',
    },
    {
      src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1600&auto=format&fit=crop',
      alt: 'Cavalier sitting on a couch with a relaxed expression',
      caption: 'Cozy afternoon at home',
    },
    {
      src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop',
      alt: 'Cavalier looking up with bright, expressive eyes',
      caption: 'Those soulful eyes',
    },
    {
      src: 'https://images.unsplash.com/photo-1543466836-00a7907e9de2?q=80&w=1600&auto=format&fit=crop',
      alt: 'Cavalier puppy exploring a grassy yard',
      caption: 'First backyard adventure',
    },
    {
      src: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1600&auto=format&fit=crop',
      alt: 'Small dog relaxing on a bed with soft light',
      caption: 'Lazy morning lounge',
    },
    {
      src: 'https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1600&auto=format&fit=crop',
      alt: 'Dog gazing out a window with warm light',
      caption: 'Watching the world go by',
    },
  ];

  return (
    <div className="gallery" role="list">
      {images.map((img, idx) => (
        <figure key={idx} role="listitem">
          <img src={img.src} alt={img.alt} />
          <figcaption aria-live="polite">{img.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
