import React from 'react';

export const BookSection: React.FC = () => {
  return (
    <section id="book" className="book-section">
      <div className="section-head">
        <div className="section-num">✂</div>
        <h2 className="section-title" id="book-title">
          Είμαστε έτοιμοι όταν <em>είστε κι εσείς.</em>
        </h2>
      </div>

      <div className="book-layout">
        <div className="book-img-col">
          <img
            src="https://images.unsplash.com/photo-1593702288056-7927b442d0fa?auto=format&fit=crop&w=800&q=80"
            alt="Gentlemen's Barber Ιωάννινα"
            loading="lazy"
          />
        </div>

        <div className="book-right">
          <p className="book-intro" id="book-intro">
            Χωρίς περιττές διαδικασίες. Τηλεφωνήστε, στείλτε μήνυμα ή περάστε απευθείας.
          </p>

          <div className="book-buttons">
            <a href="tel:+302651313326" className="book-btn book-btn-call">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 8.81 19.79 19.79 0 0 1 .07 2 2 2 0 0 1 2 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16v.92z" />
              </svg>
              <span className="book-btn-label" id="book-lbl-call">
                Κλήση
              </span>
            </a>

            <a
              href="https://www.instagram.com/gentlemens_barber25/"
              target="_blank"
              rel="noopener noreferrer"
              className="book-btn book-btn-ig"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span className="book-btn-label" id="book-lbl-ig">
                Instagram
              </span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Gentlemen's+Barber+Averof+38+Ioannina"
              target="_blank"
              rel="noopener noreferrer"
              className="book-btn book-btn-msg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7"
              >
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="book-btn-label" id="book-lbl-msg">
                Maps
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
