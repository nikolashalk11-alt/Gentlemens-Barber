import React from 'react';

export const WelcomeStory: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div className="about-img-col">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80"
            alt="Gentlemen's Barber Ιωάννινα"
            loading="lazy"
          />
        </div>

        <div className="about-text">
          <div className="pre-title" id="about-pretitle">
            ✂ · The Shop
          </div>

          <h2 id="about-h2">
            Η αυθεντική εμπειρία του <em>κλασικού κουρείου</em> στην καρδιά των Ιωαννίνων.
          </h2>

          <p id="about-p1">
            Στο Gentlemen's Barber στην οδό Αβέρωφ 38, πιστεύουμε ότι η ανδρική περιποίηση είναι μια προσωπική υπόθεση φροντίδας και χαλάρωσης — ένας ζεστός, καλαίσθητος χώρος όπου αφιερώνουμε χρόνο, δίνουμε προσοχή σε κάθε λεπτομέρεια και στέλνουμε κάθε πελάτη έξω με ένα κούρεμα που πραγματικά ξεχωρίζει.
          </p>

          <p id="about-p2" style={{ marginTop: '8px' }}>
            Συνδυάζουμε την παραδοσιακή τεχνική με ψαλίδι και φαλτσέτα, τις ζεστές αρωματικές πετσέτες και τα εξειδικευμένα προϊόντα με τις σύγχρονες τάσεις του styling. Φοιτητές, σταθεροί θαμώνες και επισκέπτες της πόλης κάθονται στην ίδια καρέκλα με άψογη φιλοξενία.
          </p>

          <div className="stats">
            <div className="stat">
              <div className="num">
                5.0<span style={{ color: 'var(--brass)', fontSize: '0.5em' }}>★</span>
              </div>
              <div className="label" id="stat1-label">
                Google Rating
              </div>
            </div>

            <div className="stat">
              <div className="num">88+</div>
              <div className="label" id="stat2-label">
                Κριτικές
              </div>
            </div>

            <div className="stat">
              <div className="num">100%</div>
              <div className="label" id="stat3-label">
                Αφοσίωση
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
