import React, { useState } from 'react';

export const GoogleReviews: React.FC = () => {
  const reviews = [
    {
      author: 'ΔΗΜΗΤΡΗΣ Κ.',
      text: 'Το καλύτερο barber shop στα Ιωάννινα με διαφορά! Άψογη εξυπηρέτηση, καθαριότητα και τρομερή προσοχή στη λεπτομέρεια στο κούρεμα και το μούσι.',
    },
    {
      author: 'ΓΙΩΡΓΟΣ ΠΑΠΑΔΟΠΟΥΛΟΣ',
      text: 'Παραδοσιακό ξύρισμα με ζεστές πετσέτες όπως παλιά. Απίστευτη εμπειρία χαλάρωσης, επαγγελματισμός σε άλλο επίπεδο. Το συστήνω ανεπιφύλακτα.',
    },
    {
      author: 'ΑΛΕΞΑΝΔΡΟΣ Μ.',
      text: 'Πολύ καλό κούρεμα, ακριβώς όπως το ζήτησα. Φιλικό περιβάλλον, συνέπεια στα ραντεβού και πολύ καλές τιμές στην οδό Αβέρωφ.',
    },
    {
      author: 'ΚΩΝΣΤΑΝΤΙΝΟΣ Σ.',
      text: 'Εξαιρετικός επαγγελματίας! Καθαρός χώρος, ζεστή ατμόσφαιρα στην οδό Αβέρωφ και σταθερή ποιότητα σε κάθε επίσκεψη.',
    },
    {
      author: 'ΝΙΚΟΣ Β.',
      text: 'Από τα λίγα μέρη που ξέρουν πραγματικά να δουλεύουν με φαλτσέτα και παραδοσιακό αφρό. 5 αστέρια χωρίς δεύτερη σκέψη.',
    },
    {
      author: 'ΧΡΗΣΤΟΣ Τ.',
      text: 'Μοναδική εμπειρία κλασικού κουρείου. Σεβασμός στον πελάτη και άψογο αποτέλεσμα. Ο καλύτερος προορισμός στα Γιάννενα.',
    },
  ];

  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);

  const prev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  const currentSlice = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="reviews">
      <div className="reviews-portrait" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80"
          alt="Εσωτερικό Gentlemen's Barber Ιωάννινα"
          loading="lazy"
        />
      </div>

      <div className="reviews-content">
        <div className="section-head">
          <div className="section-num">✂</div>
          <h2 className="section-title" id="sec-title-reviews">
            Στα λόγια των <em>πελατών</em>
          </h2>
        </div>

        <div className="reviews-pager">
          <button
            className="rev-arrow"
            id="rev-prev"
            onClick={prev}
            aria-label="Previous"
            type="button"
          >
            &#8592;
          </button>

          <div className="reviews-grid" id="reviews-grid">
            {currentSlice.map((rev, idx) => (
              <div className="review" key={idx}>
                <span className="quote">“</span>
                <div className="stars">★★★★★</div>
                <p>{rev.text}</p>
                <div className="author">{rev.author}</div>
              </div>
            ))}
          </div>

          <button
            className="rev-arrow"
            id="rev-next"
            onClick={next}
            aria-label="Next"
            type="button"
          >
            &#8594;
          </button>
        </div>

        <div className="rev-counter" id="rev-counter">
          0{page + 1} / 0{totalPages}
        </div>

        <div className="reviews-meta" id="reviews-meta">
          Βαθμολογία <strong>5.0 ★</strong> σε <strong>88</strong> Google reviews.
        </div>
      </div>
    </section>
  );
};
