import React from 'react';
import { motion } from 'motion/react';
import { Diamond, Sparkles, Zap, Flame, Shield } from 'lucide-react';

export const FinalProduct: React.FC = () => {
  const convergingElements = [
    { label: 'JAVA (5★)', color: 'text-[#D6B94C] border-[#D6B94C]/50' },
    { label: 'AI / NLP', color: 'text-[#65C7E8] border-[#65C7E8]/50' },
    { label: 'FULL STACK', color: 'text-[#65C7E8] border-[#65C7E8]/50' },
    { label: '500+ PROBLEMS', color: 'text-[#D6B94C] border-[#D6B94C]/50' },
    { label: 'EXPERIMENTS', color: 'text-[#68742C] border-[#68742C]/50' },
    { label: 'INFOSYS EXP', color: 'text-[#65C7E8] border-[#65C7E8]/50' },
    { label: 'LAB RECORDS', color: 'text-[#68742C] border-[#68742C]/50' },
  ];

  return (
    <section id="final-product" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
      
      {/* Background Laboratory Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#65C7E8]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Section Tag */}
      <div className="flex flex-col items-center gap-1 mb-8">
        <span className="font-mono-tech text-xs text-[#65C7E8] uppercase tracking-[0.3em]">
          FINAL SYNTHESIS CHAMBER
        </span>
        <span className="font-mono-tech text-[10px] text-[#85857B]">
          REACTING ALL INGREDIENTS AT 99.1% CODE PURITY
        </span>
      </div>

      {/* Laboratory Table Container */}
      <div className="relative bg-[#11120F] border-2 border-[#65C7E8]/40 p-8 sm:p-12 md:p-16 max-w-4xl mx-auto shadow-[0_0_50px_rgba(101,199,232,0.2)]">
        
        {/* Converging Elements Array (Orbiting/Converging chips) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {convergingElements.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`font-mono-tech text-xs uppercase px-3 py-1 bg-[#080907] border ${item.color} tracking-wider font-semibold`}
            >
              {item.label}
            </motion.span>
          ))}
        </div>

        {/* Center Illuminated 99.1% Blue Crystal Object */}
        <div className="relative my-8 flex justify-center items-center">
          {/* Pulsing Aura */}
          <div className="absolute w-36 h-36 bg-[#65C7E8]/20 rounded-full blur-2xl animate-pulse pointer-events-none" />

          <motion.div
            animate={{
              y: [-4, 4, -4],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-tr from-[#080907] via-[#162730] to-[#65C7E8]/30 border-2 border-[#65C7E8] p-4 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(101,199,232,0.4)] rotate-45"
          >
            <div className="-rotate-45 flex flex-col items-center">
              <Diamond className="w-8 h-8 sm:w-10 sm:h-10 text-[#65C7E8] mb-1" />
              <span className="font-mono-tech text-[9px] font-bold text-[#65C7E8] tracking-widest uppercase">
                99.1% PURE
              </span>
            </div>
          </motion.div>
        </div>

        {/* Climax Revelation Title */}
        <div className="mt-8">
          <span className="font-mono-tech text-xs sm:text-sm text-[#D6B94C] font-bold tracking-[0.25em] uppercase block mb-2">
            THE FINAL PRODUCT
          </span>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E8E5D8] tracking-tight uppercase leading-none">
            VARUNRAJ P.
          </h2>

          <p className="font-oswald text-xl sm:text-2xl text-[#65C7E8] tracking-widest font-semibold uppercase mt-2">
            SOFTWARE DEVELOPER // ALGORITHMIC ARCHITECT
          </p>

          <p className="font-mono-tech text-xs sm:text-sm text-[#85857B] tracking-widest uppercase mt-4 max-w-xl mx-auto">
            "EVERY PROBLEM HAS A RECIPE. WHEN THE FORMULA IS PURE, THE CODE NEVER FAILS."
          </p>
        </div>

        {/* Corner Laboratory Registration Brackets */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#65C7E8]" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#65C7E8]" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#65C7E8]" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#65C7E8]" />
      </div>

    </section>
  );
};
