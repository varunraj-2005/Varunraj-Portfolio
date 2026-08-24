import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Diamond, Zap, ShieldCheck } from 'lucide-react';

export const CrystalTransition: React.FC = () => {
  const [isSynthesized, setIsSynthesized] = useState(false);

  return (
    <div className="my-16 sm:my-20 relative flex flex-col items-center justify-center py-10 overflow-hidden">
      
      {/* Background connecting laser line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#65C7E8]/40 to-transparent pointer-events-none" />

      {/* Center Crystal Reactor Node */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsSynthesized(!isSynthesized)}
        className="relative z-10 bg-[#11120F] border-2 border-[#65C7E8] p-6 text-center cursor-pointer shadow-[0_0_30px_rgba(101,199,232,0.25)] select-none max-w-md w-full"
      >
        {/* Glow backdrop */}
        <div className="absolute -inset-2 bg-[#65C7E8]/10 blur-lg rounded-full pointer-events-none" />

        {/* Crystal Icon & Geometry */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <Diamond className="w-6 h-6 text-[#65C7E8] animate-pulse" />
          <span className="font-oswald text-lg font-bold tracking-widest text-[#E8E5D8] uppercase">
            99.1% CHEMICAL CRYSTAL SYNTHESIS
          </span>
        </div>

        <p className="font-mono-tech text-xs text-[#85857B] mb-3">
          TRANSITIONING EXPERIMENT 01 (NLP) ➔ EXPERIMENT 02 (CAMPUS RADAR)
        </p>

        {/* Crystal Facet Matrix Visual */}
        <div className="grid grid-cols-5 gap-1.5 py-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((c) => (
            <div
              key={c}
              className="h-2 bg-[#65C7E8]/30 border border-[#65C7E8]/60 transition-all duration-300 hover:bg-[#65C7E8]"
              style={{ opacity: 0.3 + (c * 0.07) }}
            />
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between text-[10px] font-mono-tech text-[#65C7E8]">
          <span>CRYSTALLIZATION: OPTIMAL</span>
          <span className="text-[#85857B]">CLICK TO RE-REFRACT</span>
        </div>

        {/* Corner marks */}
        <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#65C7E8]" />
        <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#65C7E8]" />
        <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#65C7E8]" />
        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#65C7E8]" />
      </motion.div>

    </div>
  );
};
