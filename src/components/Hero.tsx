import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1 className="visually-hidden">Κουρείο Ιωάννινα — Gentlemen's Barber</h1>

      {/* Barber Pole vertical stripe on left */}
      <div className="pole"></div>

      {/* Hero stage with Gentlemen's Barber logo */}
      <div className="hero-stage" id="hero-stage">
        <img
          id="ef-logo"
          className="visible"
          src="/logo.png"
          alt="Gentlemen's Barber"
        />
      </div>

      {/* Hero text layer */}
      <div className="hero-text-layer visible" id="hero-text-layer">
        <div className="pre-title" id="hero-pretitle">
          A Barber's Trade · Gentlemen's Barber
        </div>

        <p className="lede" id="hero-lede">
          Gentlemen's Barber στα <em>Ιωάννινα</em> — όπου το κούρεμα είναι τέχνη, η περιποίηση παράδοση και κάθε άνδρας φεύγει ανανεωμένος.
        </p>

        <div className="hero-cta">
          <a href="#book" className="btn btn-primary" id="hero-btn-call">
            Κλείστε Ραντεβού
          </a>
          <a href="#visit" className="btn btn-ghost" id="hero-btn-map">
            Βρείτε το Κουρείο →
          </a>
        </div>
      </div>
    </section>
  );
};
