import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Κλασικό κούρεμα',
    'Παραδοσιακό ξύρισμα',
    'Περιποίηση γενειάδας',
    'The Gentlemen’s Ritual',
    'Αβέρωφ 38, Ιωάννινα',
    'Κούρεμα παιδικό',
  ];

  return (
    <div className="marquee">
      <div className="marquee-track" id="marquee-track">
        {items.map((item, idx) => (
          <React.Fragment key={`a-${idx}`}>
            <span>{item}</span>
            <span className="dot">✦</span>
          </React.Fragment>
        ))}
        {items.map((item, idx) => (
          <React.Fragment key={`b-${idx}`}>
            <span>{item}</span>
            <span className="dot">✦</span>
          </React.Fragment>
        ))}
        {items.map((item, idx) => (
          <React.Fragment key={`c-${idx}`}>
            <span>{item}</span>
            <span className="dot">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
