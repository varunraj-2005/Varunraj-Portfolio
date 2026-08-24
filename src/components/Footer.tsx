import React from 'react';
import { ArrowUp, Terminal, Shield, Sparkles } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer id="lab-footer" className="border-t border-white/10 bg-[#080907] pt-12 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Brand & Lab Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#11120F] border-2 border-[#D6B94C] flex items-center justify-center font-bebas text-xl text-[#D6B94C]">
              V
            </div>
            <div>
              <span className="font-oswald text-base sm:text-lg font-bold tracking-widest text-[#E8E5D8] uppercase block">
                V.P. SOFTWARE LABORATORIES
              </span>
              <span className="font-mono-tech text-[10px] text-[#85857B] tracking-wider uppercase">
                EST. 2023 // PORTFOLIO / 2026 // VARUNRAJ P.
              </span>
            </div>
          </div>

          {/* Quick Return to Surface */}
          <button
            id="footer-back-to-top-btn"
            onClick={onScrollToTop}
            className="flex items-center gap-2 font-mono-tech text-xs text-[#85857B] hover:text-[#D6B94C] border border-white/10 hover:border-[#D6B94C]/40 px-4 py-2 bg-[#11120F] transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>RETURN TO SURFACE</span>
            <ArrowUp className="w-4 h-4 text-[#D6B94C]" />
          </button>
        </div>

        {/* Technical Specs & Hazard Strip */}
        <div className="hazard-stripe-subtle h-1.5 w-full my-1 opacity-70" />

        {/* Bottom Metadata & Blinking Terminal Cursor */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-tech text-xs text-[#85857B]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#68742C]" />
            <span>FACILITY STATUS: OPERATIONAL</span>
            <span className="text-white/20">|</span>
            <span>PURITY: 99.1%</span>
            <span className="text-white/20">|</span>
            <span>ALBUQUERQUE SPEC V-2026</span>
          </div>

          <div className="flex items-center gap-2">
            <span>TERMINAL RUNNING: READY_FOR_DISPATCH</span>
            {/* Blinking Cursor */}
            <span className="inline-block w-2 h-4 bg-[#D6B94C] animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
};
