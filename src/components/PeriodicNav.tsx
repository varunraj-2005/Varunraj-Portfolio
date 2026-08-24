import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ELEMENTS } from '../data/portfolioData';
import { NavElement } from '../types';
import { ArrowUpRight, Beaker, Terminal } from 'lucide-react';

interface PeriodicNavProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onReopenIntro?: () => void;
}

export const PeriodicNav: React.FC<PeriodicNavProps> = ({
  activeSection,
  onSelectSection,
  onReopenIntro,
}) => {
  const [hoveredElement, setHoveredElement] = useState<NavElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getElementTheme = (category: NavElement['category']) => {
    switch (category) {
      case 'core':
        return {
          border: 'border-[#D6B94C]',
          activeBg: 'bg-[#D6B94C] text-[#080907]',
          hoverBorder: 'hover:border-[#D6B94C]',
          text: 'text-[#D6B94C]',
          glow: 'shadow-[0_0_15px_rgba(214,185,76,0.4)]',
        };
      case 'experiments':
      case 'connection':
        return {
          border: 'border-[#65C7E8]/70',
          activeBg: 'bg-[#65C7E8] text-[#080907]',
          hoverBorder: 'hover:border-[#65C7E8]',
          text: 'text-[#65C7E8]',
          glow: 'shadow-[0_0_15px_rgba(101,199,232,0.4)]',
        };
      case 'elements':
      case 'records':
        return {
          border: 'border-[#68742C]/80',
          activeBg: 'bg-[#68742C] text-[#E8E5D8]',
          hoverBorder: 'hover:border-[#8CA137]',
          text: 'text-[#8CA137]',
          glow: 'shadow-[0_0_15px_rgba(104,116,44,0.4)]',
        };
      case 'numbers':
      case 'results':
      case 'deal':
      case 'dossier':
      default:
        return {
          border: 'border-[#C98A32]/70',
          activeBg: 'bg-[#C98A32] text-[#080907]',
          hoverBorder: 'hover:border-[#D6B94C]',
          text: 'text-[#D6B94C]',
          glow: 'shadow-[0_0_15px_rgba(201,138,50,0.4)]',
        };
    }
  };

  return (
    <header
      id="periodic-navigation-dock"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080907]/90 backdrop-blur-md border-b border-white/10 py-2.5 shadow-2xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Left Branding / Classified Header */}
        <div className="flex items-center gap-3">
          <button
            id="nav-logo-btn"
            onClick={() => onSelectSection('hero')}
            className="flex items-center gap-2 text-left group cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#11120F] border border-[#D6B94C] flex items-center justify-center font-bebas text-lg text-[#D6B94C] transition-all group-hover:scale-105 group-hover:bg-[#D6B94C] group-hover:text-[#080907]">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-oswald text-xs sm:text-sm font-bold tracking-widest text-[#E8E5D8] uppercase group-hover:text-[#D6B94C] transition-colors leading-none">
                VARUNRAJ P.
              </span>
              <span className="font-mono-tech text-[9px] text-[#85857B] tracking-wider uppercase mt-0.5">
                SOFTWARE LAB // 2026
              </span>
            </div>
          </button>

          {onReopenIntro && (
            <button
              id="reopen-intro-btn"
              onClick={onReopenIntro}
              title="Re-open Classified Opening Sequence"
              className="hidden lg:flex items-center gap-1 font-mono-tech text-[10px] text-[#85857B] hover:text-[#D6B94C] border border-white/10 hover:border-[#D6B94C]/40 px-2 py-1 bg-black/40 transition-colors ml-2"
            >
              <Terminal className="w-3 h-3 text-[#D6B94C]" />
              <span>REPLAY INTRO</span>
            </button>
          )}
        </div>

        {/* Center / Right: Periodic Table Navigation Elements */}
        <div className="relative">
          {/* Periodic Elements Bar */}
          <nav
            aria-label="Periodic Navigation"
            className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-1 px-1 border border-white/10 bg-[#11120F]/90 backdrop-blur-sm max-w-[85vw] sm:max-w-none rounded-none"
          >
            {NAV_ELEMENTS.map((el) => {
              const isActive = activeSection === el.sectionId;
              const theme = getElementTheme(el.category);

              return (
                <button
                  key={el.symbol}
                  id={`nav-tile-${el.symbol.toLowerCase()}`}
                  onClick={() => onSelectSection(el.sectionId)}
                  onMouseEnter={() => setHoveredElement(el)}
                  onMouseLeave={() => setHoveredElement(null)}
                  onFocus={() => setHoveredElement(el)}
                  onBlur={() => setHoveredElement(null)}
                  className={`relative flex flex-col items-center justify-between w-9 h-11 sm:w-11 sm:h-13 p-1 border transition-all duration-200 cursor-pointer select-none shrink-0 ${
                    isActive
                      ? `${theme.activeBg} font-bold ${theme.glow} scale-105 border-transparent`
                      : `bg-[#080907]/80 text-[#E8E5D8] border-white/10 ${theme.hoverBorder} hover:bg-[#1a1c17] hover:scale-105`
                  }`}
                  aria-label={`Navigate to ${el.name} section`}
                >
                  {/* Top Atomic Number */}
                  <span
                    className={`font-mono-tech text-[8px] sm:text-[9px] leading-none self-start ${
                      isActive ? 'text-black/80' : 'text-[#85857B]'
                    }`}
                  >
                    {el.number}
                  </span>

                  {/* Periodic Element Symbol */}
                  <span
                    className={`font-bebas text-sm sm:text-base leading-none tracking-tight my-auto ${
                      isActive ? 'text-[#080907]' : theme.text
                    }`}
                  >
                    {el.symbol}
                  </span>

                  {/* Micro label */}
                  <span
                    className={`font-mono-tech text-[7px] leading-none tracking-tighter truncate w-full text-center ${
                      isActive ? 'text-black/90' : 'text-[#85857B]'
                    }`}
                  >
                    {el.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Floating Element Inspection Tooltip */}
          <AnimatePresence>
            {hoveredElement && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="hidden lg:flex absolute top-full right-0 mt-2 z-50 w-72 bg-[#11120F] border border-[#D6B94C] p-3 shadow-2xl flex-col gap-1.5 text-left pointer-events-none"
              >
                <div className="flex justify-between items-start font-mono-tech text-[10px] text-[#85857B] border-b border-white/10 pb-1">
                  <span>ELEMENT: {hoveredElement.symbol} ({hoveredElement.number})</span>
                  <span className="text-[#D6B94C]">MASS: {hoveredElement.atomicWeight}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bebas text-xl text-[#E8E5D8] tracking-wide block">
                      {hoveredElement.name}
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#D6B94C] uppercase">
                      SECTION // {hoveredElement.sectionId}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-mono-tech text-[10px] text-[#D6B94C] font-semibold">
                    <span>EXPLORE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                {hoveredElement.electronConfig && (
                  <div className="text-[9px] font-mono-tech text-[#85857B]">
                    ELECTRON CONFIG: {hoveredElement.electronConfig}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </header>
  );
};
