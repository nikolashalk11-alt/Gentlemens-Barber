import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="foot-upper">
        <div className="foot-left">
          <div className="foot-bot">
            <div className="foot-copy-group">
              <img
                src="/logo.png"
                alt="Gentlemen's Barber"
                className="foot-logo"
                loading="lazy"
                decoding="async"
              />
              <div id="foot-copy">
                © {new Date().getFullYear()} Gentlemen's Barber · Αβέρωφ 38, Ιωάννινα
              </div>
            </div>
            <span className="foot-sep">·</span>
            <div id="foot-craft">
              Crafted in Ioannina · Averof 38
            </div>
          </div>

          <div className="foot-info">
            Gentlemen's Barber · Κουρείο-Κομμωτής · Δήμος Ιωαννιτών · Αβέρωφ 38 · Τηλ: <a href="tel:2651313326">2651 313326</a>
          </div>
        </div>

        <div className="foot-social">
          <a
            href="https://www.instagram.com/gentlemens_barber25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Gentlemen's+Barber+Averof+38+Ioannina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Maps"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="foot-rule"></div>

      <div className="foot-legal">
        <a href="#" id="foot-privacy">
          Gentlemen's Barber · Αβέρωφ 38, Ιωάννινα
        </a>
      </div>
    </footer>
  );
};
