import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SkillElement as SkillElementType } from '../types';
import { Sparkles, Activity } from 'lucide-react';

interface SkillElementProps {
  skill: SkillElementType;
}

export const SkillElement: React.FC<SkillElementProps> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <motion.div
        id={`skill-tile-${skill.symbol.toLowerCase()}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
        whileHover={{ y: -4 }}
        className="relative bg-[#11120F] border border-white/10 hover:border-[#D6B94C] p-4 sm:p-5 flex flex-col justify-between h-48 sm:h-52 cursor-pointer transition-colors duration-200 select-none group"
      >
        {/* Top: Atomic Number & Mass */}
        <div className="flex justify-between items-start font-mono-tech text-xs">
          <span className="font-bold text-sm text-[#D6B94C]">{skill.number}</span>
          <span className="text-[10px] text-[#85857B]">{skill.atomicMass}</span>
        </div>

        {/* Center: Element Symbol */}
        <div className="text-center my-auto">
          <span className="font-bebas text-4xl sm:text-5xl text-[#E8E5D8] group-hover:text-[#D6B94C] transition-colors leading-none tracking-tight block">
            {skill.symbol}
          </span>
          <span className="font-oswald text-xs sm:text-sm font-bold tracking-widest text-[#E8E5D8] uppercase block mt-1">
            {skill.name}
          </span>
        </div>

        {/* Bottom: Category tag */}
        <div className="border-t border-white/10 pt-2 flex items-center justify-between">
          <span className="font-mono-tech text-[9px] sm:text-[10px] text-[#85857B] uppercase tracking-wider">
            {skill.category}
          </span>
          <span className="font-mono-tech text-[9px] text-[#D6B94C] font-semibold">
            {skill.proficiencyLevel}
          </span>
        </div>

        {/* Corner register markers */}
        <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-[#D6B94C]" />
        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-[#D6B94C]" />
      </motion.div>

      {/* Hover Modal / Synthesis Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-3 left-0 right-0 z-30 bg-[#080907] border-2 border-[#D6B94C] p-4 shadow-2xl flex flex-col gap-3 min-w-[260px] pointer-events-none"
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-mono-tech text-xs text-[#D6B94C] font-bold uppercase">
                {skill.symbol} // {skill.name}
              </span>
              <span className="font-mono-tech text-[10px] text-[#85857B]">
                {skill.category}
              </span>
            </div>

            {/* Proficiency Meter */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center font-mono-tech text-[10px]">
                <span className="text-[#85857B]">PROFICIENCY:</span>
                <span className="text-[#D6B94C] font-bold uppercase">{skill.proficiencyLevel}</span>
              </div>
              
              {/* Retro ASCII/Block progress bar */}
              <div className="font-mono-tech text-xs tracking-tighter text-[#D6B94C]">
                {'█'.repeat(Math.floor(skill.qualitativeBar / 6))}
                <span className="text-white/20">{'░'.repeat(16 - Math.floor(skill.qualitativeBar / 6))}</span>
              </div>
            </div>

            {/* Used For Chips */}
            <div className="flex flex-col gap-1">
              <span className="font-mono-tech text-[9px] text-[#85857B] uppercase tracking-wider">
                USED FOR:
              </span>
              <div className="flex flex-wrap gap-1">
                {skill.usedFor.map((item) => (
                  <span
                    key={item}
                    className="font-mono-tech text-[9px] bg-[#11120F] text-[#E8E5D8] px-1.5 py-0.5 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Reactions note */}
            <p className="font-mono-tech text-[9px] text-[#85857B] border-t border-white/10 pt-2 italic leading-tight">
              // {skill.reactions}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
