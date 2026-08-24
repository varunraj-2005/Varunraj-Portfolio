import React, { useState } from 'react';
import { SectionLabel } from './SectionLabel';
import { motion } from 'motion/react';
import { Star, CheckCircle, Code2, Terminal, Cpu, Zap, GitBranch } from 'lucide-react';

export const CodingSection: React.FC = () => {
  const [selectedAlgo, setSelectedAlgo] = useState<number>(0);

  const problemCategories = [
    { name: 'Data Structures & Arrays', solved: '160+', yield: '99.2%', focus: 'Sliding Window, Two Pointers, Prefix Sum' },
    { name: 'Trees & Graph Theory', solved: '120+', yield: '98.6%', focus: 'DFS, BFS, Topological Sort, Dijkstra' },
    { name: 'Dynamic Programming', solved: '95+', yield: '97.9%', focus: 'Memoization, Tabulation, Knapsack Patterns' },
    { name: 'Java Object-Oriented Logic', solved: '125+', yield: '99.5%', focus: 'HackerRank 5★, Design Patterns, Streams' },
  ];

  const pipelineStages = [
    { id: '01', name: 'PROBLEM', desc: 'Input constraint & boundary analysis' },
    { id: '02', name: 'UNDERSTAND', desc: 'Edge case identification' },
    { id: '03', name: 'BREAK DOWN', desc: 'Sub-problem decomposition' },
    { id: '04', name: 'ALGORITHM', desc: 'Time/space complexity modeling' },
    { id: '05', name: 'IMPLEMENT', desc: 'Type-safe Java / Python code' },
    { id: '06', name: 'OPTIMIZE', desc: 'O(N) / O(log N) reduction' },
    { id: '07', name: 'SOLVE', desc: '100% test case pass rate' },
  ];

  return (
    <section id="numbers" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionLabel
        id="numbers-header"
        code="Le / 004"
        title="THE NUMBERS"
        subtitle="ALGORITHMIC PROBLEM-SOLVING &amp; CODE ARCHITECTURE"
        classification="QUANTITATIVE MASTERY DOSSIER"
        evidenceNo="LEET-500-HR"
        accentColor="yellow"
      />

      {/* Hero Numbers Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Left Giant Stat: 500+ Problems */}
        <div className="lg:col-span-6 bg-[#11120F] border-2 border-[#D6B94C] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-[0_0_30px_rgba(214,185,76,0.15)]">
          {/* Subtle matrix background */}
          <div className="absolute top-2 right-2 text-[8px] font-mono-tech text-white/5 select-none text-right leading-3">
            LC#001 LC#004 LC#015 LC#021 LC#033<br />
            LC#042 LC#053 LC#070 LC#121 LC#146<br />
            LC#198 LC#200 LC#206 LC#238 LC#300<br />
            LC#322 LC#416 LC#543 LC#704 LC#994
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#85857B] mb-2 uppercase tracking-widest">
              <Code2 className="w-4 h-4 text-[#D6B94C]" />
              <span>TOTAL ALGORITHMIC PRODUCTION</span>
            </div>
            <div className="font-bebas text-7xl sm:text-8xl md:text-9xl text-[#D6B94C] leading-none tracking-tight">
              500+
            </div>
          </div>

          <div className="border-t border-[#D6B94C]/30 pt-4 mt-6 flex justify-between items-end">
            <div>
              <span className="font-oswald text-lg sm:text-xl font-bold text-[#E8E5D8] uppercase tracking-wider block">
                PROBLEMS SOLVED
              </span>
              <span className="font-mono-tech text-xs text-[#85857B]">
                LEETCODE &amp; COMPETITIVE PROGRAMMING
              </span>
            </div>
            <span className="font-mono-tech text-xs text-[#D6B94C] font-bold border border-[#D6B94C]/40 px-2.5 py-1 bg-black/40">
              PURITY: 99.8%
            </span>
          </div>
        </div>

        {/* Right Giant Stat: 5-Star HackerRank Java */}
        <div className="lg:col-span-6 bg-[#11120F] border-2 border-[#65C7E8] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-[0_0_30px_rgba(101,199,232,0.15)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#85857B] mb-2 uppercase tracking-widest">
              <Star className="w-4 h-4 text-[#65C7E8]" />
              <span>OFFICIAL COMPETENCY RATING</span>
            </div>
            
            {/* 5 Stars Visual */}
            <div className="flex items-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-7 h-7 sm:w-9 sm:h-9 fill-[#65C7E8] text-[#65C7E8] animate-pulse" />
              ))}
            </div>

            <div className="font-bebas text-5xl sm:text-6xl md:text-7xl text-[#E8E5D8] leading-none tracking-tight">
              5★ GOLD BADGE
            </div>
          </div>

          <div className="border-t border-[#65C7E8]/30 pt-4 mt-6 flex justify-between items-end">
            <div>
              <span className="font-oswald text-lg sm:text-xl font-bold text-[#65C7E8] uppercase tracking-wider block">
                HACKERRANK JAVA
              </span>
              <span className="font-mono-tech text-xs text-[#85857B]">
                OBJECT ORIENTATION, STREAMS &amp; CORE ARCHITECTURE
              </span>
            </div>
            <span className="font-mono-tech text-xs text-[#65C7E8] font-bold border border-[#65C7E8]/40 px-2.5 py-1 bg-black/40">
              GOLD CERTIFIED
            </span>
          </div>
        </div>

      </div>

      {/* 7-Stage Problem Solving Pipeline */}
      <div className="bg-[#11120F] border border-white/10 p-6 sm:p-8 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6">
          <span className="font-mono-tech text-xs text-[#D6B94C] font-bold uppercase tracking-widest flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>THE 7-STAGE ALGORITHMIC SYNTHESIS RECIPE</span>
          </span>
          <span className="font-mono-tech text-[10px] text-[#85857B]">
            SYSTEMATIC DECOMPOSITION METHODOLOGY
          </span>
        </div>

        {/* Pipeline Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {pipelineStages.map((stage, idx) => (
            <div
              key={stage.id}
              className="bg-[#080907] border border-white/10 hover:border-[#D6B94C] p-4 flex flex-col justify-between transition-all group"
            >
              <div className="flex justify-between items-center text-[10px] font-mono-tech text-[#85857B] mb-3">
                <span className="text-[#D6B94C] font-bold">{stage.id}</span>
                <span>STAGE</span>
              </div>

              <div>
                <span className="font-oswald text-base font-bold text-[#E8E5D8] group-hover:text-[#D6B94C] tracking-wider uppercase block">
                  {stage.name}
                </span>
                <p className="font-mono-tech text-[10px] text-[#85857B] mt-1 leading-snug">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-end text-[#D6B94C]">
                <CheckCircle className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Algorithmic Breakdown Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {problemCategories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-[#11120F] border border-white/10 p-5 flex flex-col justify-between hover:border-[#D6B94C]/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono-tech text-[10px] text-[#85857B] uppercase">DOMAIN {idx + 1}</span>
              <span className="font-mono-tech text-xs text-[#D6B94C] font-bold">{cat.solved}</span>
            </div>

            <span className="font-oswald text-base font-bold text-[#E8E5D8] tracking-wider uppercase mb-1">
              {cat.name}
            </span>

            <p className="font-mono-tech text-[11px] text-[#85857B] border-t border-white/5 pt-2 mt-2">
              FOCUS: {cat.focus}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};
