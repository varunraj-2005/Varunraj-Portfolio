import React, { useState } from 'react';
import { SectionLabel } from './SectionLabel';
import { SkillElement } from './SkillElement';
import { SKILLS_DATA } from '../data/portfolioData';
import { Beaker, Layers, Sparkles } from 'lucide-react';

export const ChemistrySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Programming', 'Web Stack', 'Database', 'Intelligence & Core'];

  const filteredSkills =
    selectedCategory === 'ALL'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="chemistry" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionLabel
        id="chemistry-header"
        code="CHEMISTRY / 002"
        title="THE ELEMENTS"
        subtitle="PERIODIC TABLE OF TECHNICAL SKILLS &amp; CATALYSTS"
        classification="COMPOUND &amp; ELEMENTAL SYNTHESIS"
        evidenceNo="CH-SKILLS-02"
        accentColor="green"
      />

      {/* Intro Note & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-[#11120F] border border-white/10 p-4">
        <div className="flex items-center gap-2 font-mono-tech text-xs text-[#85857B]">
          <Beaker className="w-4 h-4 text-[#8CA137]" />
          <span>SELECT SYNTHESIS GROUP // HOVER TILE FOR PURITY SPECIFICATION</span>
        </div>

        {/* Categories / Filter pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono-tech text-xs px-3 py-1.5 border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#68742C] text-[#E8E5D8] border-[#8CA137] font-bold shadow-[0_0_12px_rgba(104,116,44,0.4)]'
                    : 'bg-[#080907] text-[#85857B] border-white/10 hover:border-[#8CA137]/50 hover:text-[#E8E5D8]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Periodic Table Grid of Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {filteredSkills.map((skill) => (
          <SkillElement key={skill.symbol} skill={skill} />
        ))}
      </div>

      {/* Bottom Technical Note */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs font-mono-tech text-[#85857B]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#D6B94C]" />
          <span>YELLOW = CORE LANGUAGES (JAVA 5★, PYTHON, C#)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#65C7E8]" />
          <span>CYAN = WEB STACKS (MERN &amp; MEAN)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#68742C]" />
          <span>GREEN = RELATIONAL &amp; DOC DATABASES</span>
        </div>
      </div>
    </section>
  );
};
