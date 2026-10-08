import React, { useState, useEffect } from 'react';
import regeneratedImage4 from '../assets/images/regenerated_image_1791461826172.png';

export const Gallery: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85',
    regeneratedImage4,
    'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85',
  ];

  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setActiveIdx(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveIdx(null);
    document.body.style.overflow = '';
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((prev) => (prev! + 1) % images.length);
    }
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((prev) => (prev! === 0 ? images.length - 1 : prev! - 1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setActiveIdx((prev) => (prev! + 1) % images.length);
      if (e.key === 'ArrowLeft') setActiveIdx((prev) => (prev! === 0 ? images.length - 1 : prev! - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx]);

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="section-head">
          <div className="section-num">✂</div>
          <h2 className="section-title" id="sec-title-gallery">
            Η <em>Συλλογή</em>
          </h2>
        </div>

        <div className="gallery-grid" id="gallery-grid">
          {images.map((url, idx) => (
            <div
              key={idx}
              className="gallery-item"
              onClick={() => openLightbox(idx)}
              data-idx={idx}
            >
              <picture>
                <img
                  src={url}
                  alt="Gentlemen's Barber Ιωάννινα"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal matching tolisbarbershop */}
      <div
        className={`lightbox ${activeIdx !== null ? 'open' : ''}`}
        id="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Φωτογραφία gallery"
        onClick={closeLightbox}
      >
        <button
          className="lb-close"
          id="lb-close"
          onClick={closeLightbox}
          aria-label="Close"
          type="button"
        >
          ✕
        </button>

        <button
          className="lb-arrow lb-prev"
          id="lb-prev"
          onClick={prevImg}
          aria-label="Previous"
          type="button"
        >
          &#8592;
        </button>

        {activeIdx !== null && (
          <img
            id="lb-img"
            src={images[activeIdx]}
            alt="Gentlemen's Barber"
            onClick={(e) => e.stopPropagation()}
          />
        )}

        <button
          className="lb-arrow lb-next"
          id="lb-next"
          onClick={nextImg}
          aria-label="Next"
          type="button"
        >
          &#8594;
        </button>

        {activeIdx !== null && (
          <div className="lb-counter" id="lb-counter">
            {activeIdx + 1} / {images.length}
          </div>
        )}
      </div>
    </>
  );
};
