import React from 'react';

interface SectionLabelProps {
  id?: string;
  code: string; // e.g. "V / 001", "CHEMISTRY / 002"
  title: string;
  subtitle?: string;
  classification?: string;
  evidenceNo?: string;
  accentColor?: 'yellow' | 'blue' | 'green' | 'amber';
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  id,
  code,
  title,
  subtitle,
  classification = 'CLASSIFIED DOSSIER // DEPT-ENG',
  evidenceNo,
  accentColor = 'yellow',
}) => {
  const accentClasses = {
    yellow: 'text-[#D6B94C] border-[#D6B94C]/40 bg-[#D6B94C]/10',
    blue: 'text-[#65C7E8] border-[#65C7E8]/40 bg-[#65C7E8]/10',
    green: 'text-[#68742C] border-[#68742C]/40 bg-[#68742C]/10',
    amber: 'text-[#C98A32] border-[#C98A32]/40 bg-[#C98A32]/10',
  }[accentColor];

  const dotClasses = {
    yellow: 'bg-[#D6B94C]',
    blue: 'bg-[#65C7E8]',
    green: 'bg-[#68742C]',
    amber: 'bg-[#C98A32]',
  }[accentColor];

  return (
    <div id={id} className="mb-8 md:mb-12 flex flex-col gap-2 border-b border-white/10 pb-4">
      {/* Top classification row */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] md:text-xs font-mono-tech tracking-widest text-[#85857B]">
        <div className="flex items-center gap-2">
          <span className={`inline-block h-2 w-2 animate-pulse ${dotClasses}`} />
          <span className="font-semibold uppercase tracking-wider text-[#E8E5D8]">{classification}</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline">COORD: 35°08'44.2"N 106°39'40.8"W</span>
        </div>
        <div className="flex items-center gap-3">
          {evidenceNo && (
            <span className="border border-white/10 px-2 py-0.5 bg-black/40 text-[#D6B94C]">
              EV-REF: {evidenceNo}
            </span>
          )}
          <span className="text-white/40">TIMESTAMP: 2026.SEC-V</span>
        </div>
      </div>

      {/* Main Title Row */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div className="flex items-center gap-3 md:gap-4">
          <span className={`font-mono-tech text-xs md:text-sm font-bold border px-2.5 py-1 ${accentClasses}`}>
            {code}
          </span>
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider text-[#E8E5D8] uppercase">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="font-mono-tech text-xs md:text-sm text-[#85857B] tracking-wide">
            // {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
