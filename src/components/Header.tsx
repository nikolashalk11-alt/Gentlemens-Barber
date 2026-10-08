import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="topbar">
      <a href="#" aria-label="Gentlemen's Barber Home">
        <img
          src="/logo.png"
          alt="Gentlemen's Barber λογότυπο Ιωάννινα"
          className="topbar-logo"
        />
      </a>
      
      <nav className={`topbar-links ${menuOpen ? 'open' : ''}`} id="topbar-links">
        <a href="#book" className="nav-book-mobile" onClick={closeMenu}>
          Κλείστε Ραντεβού
        </a>
        <a href="#services" onClick={closeMenu}>
          Υπηρεσίες
        </a>
        <a href="#about" onClick={closeMenu}>
          Ο Χώρος
        </a>
        <a href="#reviews" onClick={closeMenu}>
          Κριτικές
        </a>
        <a href="#visit" onClick={closeMenu}>
          Επίσκεψη
        </a>
        <a href="#gallery" onClick={closeMenu}>
          Συλλογή
        </a>
        <a href="#book" className="nav-book" onClick={closeMenu}>
          Ραντεβού
        </a>
      </nav>

      <div className="topbar-actions">
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          id="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};
