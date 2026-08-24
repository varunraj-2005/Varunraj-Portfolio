import React from 'react';

export const FilmGrain: React.FC = () => {
  return (
    <div 
      id="film-grain-overlay"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.035] mix-blend-screen select-none"
      aria-hidden="true"
    >
      <svg className="h-full w-full">
        <filter id="film-grain-noise">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.80" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#film-grain-noise)" />
      </svg>
      
      {/* Subtle CRT scanline overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(8,9,7,0.7)_100%)] pointer-events-none" />
    </div>
  );
};
