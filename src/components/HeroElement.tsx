import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Flame, Terminal, Shield, Award, CheckCircle2 } from 'lucide-react';

interface HeroElementProps {
  onExploreClick: () => void;
  onProjectsClick: () => void;
}

export const HeroElement: React.FC<HeroElementProps> = ({
  onExploreClick,
  onProjectsClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Background Subtle Lab Matrix */}
      <div className="absolute top-1/4 right-5 w-72 h-72 rounded-full bg-[#D6B94C]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#65C7E8]/5 blur-3xl pointer-events-none" />

      {/* Top Section Tag */}
      <div className="flex items-center gap-2 text-xs font-mono-tech text-[#85857B] mb-6">
        <span className="w-2 h-2 rounded-full bg-[#D6B94C] animate-ping" />
        <span className="text-[#D6B94C] font-semibold">LAB FACILITY ACTIVE</span>
        <span className="text-white/20">|</span>
        <span className="tracking-widest">FACILITY ID: V-LAB-2026</span>
        <span className="hidden sm:inline text-white/20">|</span>
        <span className="hidden sm:inline">PURITY INDEX: 99.1%</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Col: Giant Interactive Periodic Element Tile */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <motion.div
            id="hero-periodic-tile"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              y: isHovered ? -6 : 0,
              boxShadow: isHovered
                ? '0 0 45px rgba(214, 185, 76, 0.35)'
                : '0 0 20px rgba(214, 185, 76, 0.1)',
            }}
            transition={{ duration: 0.3 }}
            className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-92 bg-[#11120F] border-2 border-[#D6B94C] p-6 flex flex-col justify-between cursor-crosshair select-none group"
          >
            {/* Top row: Atomic Number, Config & Weight */}
            <div className="flex justify-between items-start font-mono-tech text-[#D6B94C]">
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-oswald leading-none block">23</span>
                <span className="text-[10px] text-[#85857B] tracking-wider">[Ar] 3d³ 4s²</span>
              </div>
              <div className="text-right">
                <span className="text-xs sm:text-sm font-semibold tracking-wider">50.9415</span>
                <span className="text-[10px] text-[#65C7E8] block uppercase">PURE SYNTHESIS</span>
              </div>
            </div>

            {/* Center Symbol with Atomic Orbit Visual */}
            <div className="relative text-center my-auto flex items-center justify-center">
              {/* Atomic Ring */}
              <div
                className={`absolute w-36 h-36 rounded-full border border-dashed border-[#D6B94C]/20 transition-all duration-700 ${
                  isHovered ? 'scale-110 rotate-45 border-[#D6B94C]/50' : 'animate-spin-slow'
                }`}
              />
              
              <span className="font-bebas text-8xl sm:text-9xl md:text-[10rem] leading-none text-[#E8E5D8] group-hover:text-[#D6B94C] transition-colors tracking-tight">
                V
              </span>
            </div>

            {/* Bottom: Name, Classification & Chemical Purity */}
            <div className="border-t border-[#D6B94C]/40 pt-3 flex flex-col gap-0.5">
              <div className="flex justify-between items-center">
                <span className="font-oswald text-sm sm:text-base font-bold tracking-widest text-[#D6B94C] uppercase">
                  VARUNRAJ P.
                </span>
                <span className="font-mono-tech text-[10px] text-[#85857B]">PERIOD 4</span>
              </div>
              <span className="font-mono-tech text-[11px] text-[#E8E5D8]/80 tracking-wider uppercase">
                SOFTWARE DEVELOPER // LAB SCIENTIST
              </span>
            </div>

            {/* Corner Industrial Marks */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#D6B94C]" />
            <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#D6B94C]" />
            <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#D6B94C]" />
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#D6B94C]" />
          </motion.div>
        </div>

        {/* Right Col: Hero Typography & Core Statistics */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Main Title & Subtitle */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#68742C]/20 border border-[#68742C]/40 px-3 py-1 font-mono-tech text-xs text-[#D6B94C] tracking-widest uppercase mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>CLASSIFIED DEVELOPER DOSSIER</span>
            </div>
            
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#E8E5D8] leading-none uppercase">
              VARUNRAJ P.
            </h1>
            
            <p className="font-oswald text-xl sm:text-2xl md:text-3xl text-[#D6B94C] tracking-widest font-semibold uppercase mt-2">
              SOFTWARE DEVELOPER
            </p>

            <p className="font-mono-tech text-xs sm:text-sm text-[#85857B] tracking-[0.25em] uppercase font-bold mt-2">
              EVERY PROBLEM HAS A RECIPE.
            </p>
          </div>

          {/* Secondary Descriptors Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['JAVA', 'PYTHON', 'FULL STACK', 'AI / NLP', 'PROBLEM SOLVING'].map((tag) => (
              <span
                key={tag}
                className="font-mono-tech text-xs font-semibold text-[#E8E5D8] bg-[#11120F] border border-white/10 px-3 py-1 hover:border-[#D6B94C]/60 hover:text-[#D6B94C] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Three Major Statistics from Resume */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            
            {/* Stat 1: 500+ Problems */}
            <div className="bg-[#11120F] border border-white/10 p-4 flex flex-col justify-between hover:border-[#D6B94C]/40 transition-colors">
              <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-wider">
                ALGORITHMIC YIELD
              </span>
              <div className="font-bebas text-4xl text-[#D6B94C] tracking-wide my-1">
                500+
              </div>
              <span className="font-mono-tech text-xs font-semibold text-[#E8E5D8] uppercase">
                PROBLEMS SOLVED
              </span>
            </div>

            {/* Stat 2: 5★ HackerRank */}
            <div className="bg-[#11120F] border border-white/10 p-4 flex flex-col justify-between hover:border-[#D6B94C]/40 transition-colors">
              <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-wider">
                MASTERY RATING
              </span>
              <div className="font-bebas text-4xl text-[#65C7E8] tracking-wide my-1">
                5★
              </div>
              <span className="font-mono-tech text-xs font-semibold text-[#E8E5D8] uppercase">
                HACKERRANK JAVA
              </span>
            </div>

            {/* Stat 3: 2023-2027 B.Tech */}
            <div className="bg-[#11120F] border border-white/10 p-4 flex flex-col justify-between hover:border-[#D6B94C]/40 transition-colors">
              <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-wider">
                EDUCATION PERIOD
              </span>
              <div className="font-bebas text-3xl sm:text-4xl text-[#E8E5D8] tracking-wide my-1">
                2023—2027
              </div>
              <span className="font-mono-tech text-xs font-semibold text-[#E8E5D8] uppercase">
                B.TECH IT (8.2 CGPA)
              </span>
            </div>

          </div>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              id="hero-explore-experiments-btn"
              onClick={onProjectsClick}
              className="bg-[#D6B94C] hover:bg-[#e2c765] text-[#080907] font-oswald text-base font-bold px-6 py-3 tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(214,185,76,0.3)] hover:shadow-[0_0_30px_rgba(214,185,76,0.5)] cursor-pointer flex items-center gap-2 active:scale-95"
            >
              <span>INSPECT EXPERIMENTS</span>
              <Flame className="w-4 h-4 text-[#080907]" />
            </button>

            <button
              id="hero-view-profile-btn"
              onClick={onExploreClick}
              className="bg-[#11120F] hover:bg-[#1a1c17] text-[#E8E5D8] hover:text-[#D6B94C] border border-white/20 hover:border-[#D6B94C]/50 font-mono-tech text-xs sm:text-sm font-semibold px-5 py-3 tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>OPEN SUBJECT FILE</span>
              <ArrowDown className="w-4 h-4 text-[#D6B94C]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
