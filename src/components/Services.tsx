import React, { useState } from 'react';

export const Services: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85',
      alt: 'Κλασικό κούρεμα με ψαλίδι - Gentlemen\'s Barber',
    },
    {
      url: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&q=85',
      alt: 'Παραδοσιακό ξύρισμα με φαλτσέτα - Gentlemen\'s Barber',
    },
    {
      url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85',
      alt: 'Περιποίηση & σχηματισμός γενειάδας - Gentlemen\'s Barber',
    },
    {
      url: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=900&q=85',
      alt: 'Σύγχρονο styling & fade - Gentlemen\'s Barber',
    },
    {
      url: 'https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?auto=format&fit=crop&w=900&q=85',
      alt: 'Τέχνη & παραδοσιακή τεχνική κουρέματος - Gentlemen\'s Barber',
    },
  ];

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const items = [
    {
      name: 'Κλασικό κούρεμα & λούσιμο',
      price: '15€',
    },
    {
      name: 'Παραδοσιακό ξύρισμα με φαλτσέτα',
      price: '12€',
    },
    {
      name: 'Περιποίηση & σχηματισμός γενειάδας',
      price: '10€',
    },
    {
      name: 'The Gentlemen’s Full Ritual',
      price: '25€',
    },
    {
      name: 'Παιδικό & εφηβικό κούρεμα',
      price: '13€',
    },
    {
      name: 'Λούσιμο, θεραπεία & styling',
      price: '8€',
    },
  ];

  return (
    <section id="services">
      <div className="section-head">
        <div className="section-num">✂</div>
        <h2 className="section-title" id="sec-title-services">
          Οι <em>Υπηρεσίες</em>
        </h2>
      </div>

      <div className="services-split">
        {/* Catalog Card */}
        <div className="catalog-card">
          <div className="catalog-since">Αβέρωφ 38 · Ιωάννινα</div>
          <div className="catalog-title" id="catalog-title">
            Τιμοκατάλογος
          </div>

          {items.map((item, idx) => (
            <div key={idx} className="catalog-item">
              <span className="catalog-item-name">{item.name}</span>
              <span className="catalog-dots"></span>
              <span className="catalog-price">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Polaroid Gallery Slider */}
        <div className="services-gallery">
          <div className="polaroid-wrap">
            <div className="polaroid" id="polaroid">
              <div className="polaroid-img-wrap">
                {slides.map((slide, idx) => (
                  <img
                    key={idx}
                    className={`pol-photo ${idx === activeSlide ? 'active' : ''}`}
                    src={slide.url}
                    alt={slide.alt}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pol-controls">
            <button
              className="pol-arrow"
              id="pol-prev"
              onClick={prevSlide}
              aria-label="Previous photo"
              type="button"
            >
              &#8592;
            </button>
            <div className="pol-dots" id="pol-dots">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`pol-dot ${idx === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                />
              ))}
            </div>
            <button
              className="pol-arrow"
              id="pol-next"
              onClick={nextSlide}
              aria-label="Next photo"
              type="button"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
