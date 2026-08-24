import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, ArrowRight, Zap, FastForward } from 'lucide-react';

interface LabIntroProps {
  onComplete: () => void;
}

export const LabIntro: React.FC<LabIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<1 | 2 | 3 | 4>(1);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  useEffect(() => {
    // Phase 1: Property Stamp (0s - 1.8s)
    const t1 = setTimeout(() => setPhase(2), 1600);
    // Phase 2: Element 23 V Glow (1.8s - 3.4s)
    const t2 = setTimeout(() => setPhase(3), 3200);
    // Phase 3: Full Revelation & CTA
    const t3 = setTimeout(() => setPhase(4), 4600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleEnterLab = () => {
    setIsSynthesizing(true);
    try {
      localStorage.setItem('vp_lab_visited', 'true');
    } catch {
      // ignore
    }
    setTimeout(() => {
      onComplete();
    }, 850);
  };

  const handleSkip = () => {
    try {
      localStorage.setItem('vp_lab_visited', 'true');
    } catch {
      // ignore
    }
    onComplete();
  };

  return (
    <motion.div
      id="lab-intro-curtain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(12px)', scale: 1.04 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080907] text-[#E8E5D8] px-4 overflow-hidden select-none"
    >
      {/* Background technical grid and subtle vignette */}
      <div className="absolute inset-0 lab-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,185,76,0.06)_0%,rgba(8,9,7,0.95)_70%)] pointer-events-none" />

      {/* Top right skip button */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
        <button
          id="skip-intro-btn"
          onClick={handleSkip}
          className="flex items-center gap-1.5 text-xs font-mono-tech tracking-widest text-[#85857B] hover:text-[#D6B94C] transition-colors border border-white/10 hover:border-[#D6B94C]/40 px-3 py-1.5 bg-black/40 backdrop-blur-sm"
        >
          <FastForward className="w-3.5 h-3.5" />
          <span>SKIP SEQUENCE [ESC]</span>
        </button>
      </div>

      {/* Top Left Classified Label */}
      <div className="absolute top-6 left-6 z-20 hidden sm:flex items-center gap-2 text-xs font-mono-tech text-[#85857B]">
        <ShieldAlert className="w-4 h-4 text-[#D6B94C]" />
        <span>DOSSIER: CLASSIFIED // LEVEL 5 ACCESS</span>
      </div>

      {/* Center Cinematic Stage */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-2xl w-full text-center">
        
        {/* Step 1: Initial Property Notice */}
        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-1 mb-8"
            >
              <span className="font-mono-tech text-[11px] md:text-xs text-[#85857B] tracking-[0.3em] uppercase">
                PROPERTY OF
              </span>
              <span className="font-oswald text-sm md:text-base font-semibold tracking-[0.25em] text-[#D6B94C] uppercase">
                V.P. SOFTWARE LABORATORIES
              </span>
              <span className="font-mono-tech text-[10px] text-white/30 tracking-[0.2em]">
                CLASSIFIED PORTFOLIO // REF: 2026-IT-ENG
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: Fictional Periodic Element 23 V */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative my-4"
            >
              {/* Outer Chemical Glow */}
              <div className="absolute -inset-4 rounded-lg bg-[#D6B94C]/10 blur-xl animate-pulse pointer-events-none" />

              {/* Element Container */}
              <div className="relative w-44 h-48 sm:w-52 sm:h-56 bg-[#11120F] border-2 border-[#D6B94C] p-4 flex flex-col justify-between text-left shadow-[0_0_40px_rgba(214,185,76,0.2)]">
                {/* Atomic Number & Mass */}
                <div className="flex justify-between items-start font-mono-tech text-xs text-[#D6B94C]">
                  <span className="text-base font-bold">23</span>
                  <span className="text-[10px] text-[#85857B]">50.9415</span>
                </div>

                {/* Main Symbol */}
                <div className="text-center my-auto">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-bebas text-7xl sm:text-8xl leading-none text-[#E8E5D8] tracking-tight block"
                  >
                    V
                  </motion.span>
                </div>

                {/* Element Name & Subtitle */}
                <div className="border-t border-[#D6B94C]/30 pt-2 flex flex-col">
                  <span className="font-oswald text-xs tracking-widest text-[#D6B94C] font-semibold uppercase">
                    VARUNRAJ
                  </span>
                  <span className="font-mono-tech text-[9px] text-[#85857B] tracking-wider uppercase">
                    SOFTWARE ENGINEER
                  </span>
                </div>

                {/* Corner registration marks */}
                <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#D6B94C]" />
                <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#D6B94C]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: Expanded Name & Axiom */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 flex flex-col items-center gap-2"
            >
              <h1 className="font-bebas text-4xl sm:text-6xl tracking-wider text-[#E8E5D8] uppercase">
                VARUNRAJ P.
              </h1>
              <div className="inline-block bg-[#68742C]/20 border border-[#68742C]/40 px-3 py-1 font-mono-tech text-xs text-[#D6B94C] tracking-widest uppercase">
                SOFTWARE DEVELOPER
              </div>
              <p className="font-mono-tech text-xs sm:text-sm text-[#85857B] tracking-[0.25em] mt-2 uppercase font-medium">
                EVERY PROBLEM HAS A RECIPE.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 4: CTA Button */}
        <AnimatePresence>
          {phase >= 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8"
            >
              <button
                id="enter-lab-cta-btn"
                onClick={handleEnterLab}
                disabled={isSynthesizing}
                className="group relative inline-flex items-center gap-3 bg-[#D6B94C] hover:bg-[#e4c965] text-[#080907] font-oswald text-base sm:text-lg font-bold px-8 py-3.5 tracking-widest uppercase transition-all duration-200 shadow-[0_0_25px_rgba(214,185,76,0.35)] hover:shadow-[0_0_35px_rgba(214,185,76,0.6)] cursor-pointer active:scale-95"
              >
                {isSynthesizing ? (
                  <>
                    <Zap className="w-5 h-5 animate-spin text-[#080907]" />
                    <span>SYNTHESIZING LAB ACCESS...</span>
                  </>
                ) : (
                  <>
                    <span>ENTER THE LAB</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}

                {/* Sub-label */}
                <div className="absolute -bottom-6 left-0 right-0 text-center font-mono-tech text-[10px] text-[#85857B] tracking-wider">
                  PRESS TO COMMENCE DOSSIER INSPECTION
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom status line */}
      <div className="absolute bottom-6 flex items-center justify-between w-full max-w-4xl px-6 text-[10px] font-mono-tech text-white/30">
        <span>SECURITY PROTOCOL: ACTIVE</span>
        <span className="hidden sm:inline">ALBUQUERQUE SPEC: 99.1% CODE PURITY</span>
        <span>LAT: 35.0844° N // LON: 106.6504° W</span>
      </div>
    </motion.div>
  );
};
