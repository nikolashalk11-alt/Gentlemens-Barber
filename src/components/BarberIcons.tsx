import React from 'react';

// Vintage Scissors Icon
export const ScissorsIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-[#B8893B]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

// Straight Razor Icon
export const RazorIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-[#B8893B]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 17l6-6 4 4-6 6a2.83 2.83 0 0 1-4-4z" />
    <path d="M9 11l8-8a2 2 0 0 1 2.83 2.83l-8 8" />
    <circle cx="9" cy="11" r="1" fill="currentColor" />
  </svg>
);

// Vintage Barber Comb Icon
export const CombIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-[#B8893B]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="5" width="20" height="6" rx="1.5" />
    <line x1="5" y1="11" x2="5" y2="18" />
    <line x1="8" y1="11" x2="8" y2="17" />
    <line x1="11" y1="11" x2="11" y2="18" />
    <line x1="14" y1="11" x2="14" y2="17" />
    <line x1="17" y1="11" x2="17" y2="18" />
    <line x1="20" y1="11" x2="20" y2="16" />
  </svg>
);

// Barber Pole Motif Icon
export const BarberPoleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-[#B8893B]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="8" y="5" width="8" height="14" rx="2" />
    <path d="M8 8l8 3" />
    <path d="M8 12l8 3" />
    <path d="M8 16l5 2" />
    <ellipse cx="12" cy="4" rx="3.5" ry="1.5" />
    <ellipse cx="12" cy="20" rx="3.5" ry="1.5" />
  </svg>
);

// Vintage Crown / Filigree Accent
export const CrownAccent: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#B8893B]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 18h18M4 18l2-10 5 5 5-5 2 10H4z" />
    <circle cx="6" cy="8" r="1" fill="currentColor" />
    <circle cx="12" cy="6" r="1" fill="currentColor" />
    <circle cx="18" cy="8" r="1" fill="currentColor" />
  </svg>
);

// Vintage Ornamental Divider with center motif
export const VintageDivider: React.FC<{ className?: string }> = ({ className = "my-6" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#B8893B]/60" />
    <div className="flex items-center gap-1.5 text-[#B8893B]">
      <span className="text-xs">✦</span>
      <div className="w-1.5 h-1.5 rounded-xs bg-[#B8893B]" />
      <ScissorsIcon className="w-4 h-4 text-[#B8893B]" />
      <div className="w-1.5 h-1.5 rounded-xs bg-[#B8893B]" />
      <span className="text-xs">✦</span>
    </div>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#B8893B]/60" />
  </div>
);

// Star Rating Component
export const StarRating: React.FC<{ rating?: number; count?: number; showDetails?: boolean }> = ({
  rating = 5.0,
  count = 88,
  showDetails = true,
}) => (
  <div className="inline-flex items-center gap-2">
    <div className="flex items-center gap-0.5 text-[#B8893B]">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-[#B8893B] text-[#B8893B]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    {showDetails && (
      <div className="flex items-center gap-1.5 text-xs tracking-wide">
        <span className="font-semibold text-[#2E1D12] tabular-nums">{rating.toFixed(1)}</span>
        <span className="text-[#B8893B]">·</span>
        <span className="text-[#2E1D12]/80 underline decoration-[#B8893B]/40 underline-offset-2 hover:text-[#2E1D12] transition-colors">
          {count} αξιολογήσεις στο Google
        </span>
      </div>
    )}
  </div>
);
