import React from 'react';

export const LocationMap: React.FC = () => {
  // Athens time today index (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const athensTimeStr = new Date().toLocaleString('en-US', { timeZone: 'Europe/Athens' });
  const currentDay = new Date(athensTimeStr).getDay();

  return (
    <section id="visit" className="visit">
      <div className="visit-grid">
        <div>
          <div className="pre-title" id="visit-pretitle">
            ✂ · Pay a Visit
          </div>

          <h2 id="visit-h2">
            Ελάτε από κοντά. <em>Καθίστε.</em>
          </h2>

          <p className="visit-sub" id="visit-sub">
            Walk-ins καλοδεχούμενα. Ένα τηλεφώνημα πριν δεν βλάπτει ποτέ.
          </p>

          <div className="info-block">
            <div className="info-label" id="label-address">
              Διεύθυνση
            </div>
            <div className="info-value" id="val-address">
              Αβέρωφ 38<br />
              452 21 Ιωάννινα, Greece
            </div>
          </div>

          <div className="info-block">
            <div className="info-label" id="label-phone">
              Τηλέφωνο
            </div>
            <div className="info-value">
              <a href="tel:+302651313326">+30 2651 313326</a>
            </div>
          </div>

          <div className="info-block">
            <div className="info-label" id="label-find">
              Βρείτε μας
            </div>
            <div className="info-value">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Gentlemen's+Barber+Averof+38+Ioannina"
                target="_blank"
                rel="noopener noreferrer"
                id="maps-link"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="pre-title" id="hours-pretitle">
            Ωράριο Λειτουργίας
          </div>

          <div className="hours" style={{ marginTop: '16px' }}>
            <div className={`hours-row ${currentDay === 1 ? 'today' : ''}`} data-day="1">
              <span className="day">Δευτέρα</span>
              <span className="time">10:00 — 21:00</span>
            </div>

            <div className={`hours-row ${currentDay === 2 ? 'today' : ''}`} data-day="2">
              <span className="day">Τρίτη</span>
              <span className="time">10:00 — 21:00</span>
            </div>

            <div className={`hours-row closed ${currentDay === 3 ? 'today' : ''}`} data-day="3">
              <span className="day">Τετάρτη</span>
              <span className="time">— Κλειστά —</span>
            </div>

            <div className={`hours-row ${currentDay === 4 ? 'today' : ''}`} data-day="4">
              <span className="day">Πέμπτη</span>
              <span className="time">10:00 — 21:00</span>
            </div>

            <div className={`hours-row ${currentDay === 5 ? 'today' : ''}`} data-day="5">
              <span className="day">Παρασκευή</span>
              <span className="time">10:00 — 21:00</span>
            </div>

            <div className={`hours-row ${currentDay === 6 ? 'today' : ''}`} data-day="6">
              <span className="day">Σάββατο</span>
              <span className="time">10:00 — 16:00</span>
            </div>

            <div className={`hours-row closed ${currentDay === 0 ? 'today' : ''}`} data-day="0">
              <span className="day">Κυριακή</span>
              <span className="time">— Κλειστά —</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
