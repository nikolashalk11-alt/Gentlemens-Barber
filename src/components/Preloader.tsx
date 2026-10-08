import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Show logo, then smooth fade out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1200);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-label="Loading"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#1B120C] transition-opacity duration-700 ease-in-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background warm luxury brown vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,27,18,0.95)_0%,rgba(27,18,12,1)_100%)] pointer-events-none" />

      {/* Subtle luxury gold frame accent with 2px radius */}
      <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-[2px] border border-[#C8953E]/50 animate-pulse pointer-events-none shadow-[0_0_25px_rgba(200,149,62,0.22)]" />

      {/* STRICTLY ONLY THE LOGO - NO TEXTS, NO BARS */}
      <div className="relative flex items-center justify-center p-4">
        <img
          src="/logo.png"
          alt="Gentlemen's Barber"
          className="w-36 sm:w-48 md:w-56 h-auto max-h-48 object-contain drop-shadow-md select-none"
        />
      </div>
    </div>
  );
};
