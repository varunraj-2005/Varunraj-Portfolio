import React, { useState, useEffect } from 'react';
import { SectionLabel } from './SectionLabel';
import { motion } from 'motion/react';
import { Activity, CheckCircle, RefreshCw, BarChart2, ShieldCheck, Zap } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const [measuringStage, setMeasuringStage] = useState<'idle' | 'scanning' | 'calculating' | 'confirmed'>('confirmed');

  const runMeasurement = () => {
    setMeasuringStage('scanning');
    setTimeout(() => {
      setMeasuringStage('calculating');
    }, 600);
    setTimeout(() => {
      setMeasuringStage('confirmed');
    }, 1200);
  };

  const results = [
    {
      metric: '500+',
      unit: 'LEETCODE SOLVED',
      spec: 'ALGORITHMIC MASTERY',
      desc: 'Over 500 algorithmic challenges solved across Data Structures, Dynamic Programming, Graph Theory, and Search Algorithms.',
      purity: '99.8% SOLVE RATE',
      color: 'text-[#D6B94C] border-[#D6B94C]',
    },
    {
      metric: '5★',
      unit: 'HACKERRANK JAVA',
      spec: 'GOLD STAR RATING',
      desc: 'Earned 5-Star Gold Badge in Java, demonstrating deep command of Object-Oriented Architecture, Collections Framework, and Streams.',
      purity: 'MAXIMUM TIER',
      color: 'text-[#65C7E8] border-[#65C7E8]',
    },
    {
      metric: '8.2',
      unit: 'B.TECH IT CGPA',
      spec: 'ACADEMIC EXCELLENCE',
      desc: 'Consistent 8.2 CGPA maintained through the sixth semester in Information Technology at V.S.B. Engineering College.',
      purity: 'VERIFIED TRANSCRIPT',
      color: 'text-[#68742C] border-[#68742C]',
    },
  ];

  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionLabel
        id="achievements-header"
        code="Au / 007"
        title="THE RESULTS"
        subtitle="QUANTITATIVE LABORATORY MEASUREMENTS &amp; SCIENTIFIC FINDINGS"
        classification="CONFIRMED BENCHMARK READOUT"
        evidenceNo="RES-YIELD-07"
        accentColor="amber"
      />

      {/* Measurement Sequencer Status Banner */}
      <div className="bg-[#11120F] border border-white/10 p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#D6B94C] animate-ping" />
          <span className="font-mono-tech text-xs text-[#E8E5D8] font-bold uppercase tracking-wider">
            {measuringStage === 'scanning' && 'STATUS: SCANNING METRIC SPECTROMETRY...'}
            {measuringStage === 'calculating' && 'STATUS: CALCULATING PURITY & STATISTICAL MASS...'}
            {measuringStage === 'confirmed' && 'STATUS: ALL MEASUREMENTS CONFIRMED & STABILIZED'}
          </span>
        </div>

        <button
          id="re-scan-measurements-btn"
          onClick={runMeasurement}
          className="font-mono-tech text-xs text-[#D6B94C] border border-[#D6B94C]/40 hover:border-[#D6B94C] px-3 py-1.5 bg-black/40 hover:bg-[#D6B94C]/10 flex items-center gap-1.5 cursor-pointer transition-all"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${measuringStage !== 'confirmed' ? 'animate-spin' : ''}`} />
          <span>RE-CALIBRATE READOUT</span>
        </button>
      </div>

      {/* Giant Sequential Measurement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map((res, i) => (
          <div
            key={i}
            className={`bg-[#080907] border-2 ${res.color} p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl transition-all duration-300 hover:scale-[1.02]`}
          >
            {/* Top Indicator */}
            <div className="flex justify-between items-start font-mono-tech text-xs border-b border-white/10 pb-3">
              <span className="text-[#85857B]">SPECIMEN 0{i + 1}</span>
              <span className="text-[#D6B94C] font-bold">{res.purity}</span>
            </div>

            {/* Giant Number Readout */}
            <div className="my-6">
              {measuringStage === 'confirmed' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-bebas text-7xl sm:text-8xl md:text-9xl leading-none text-[#E8E5D8] tracking-tight"
                >
                  {res.metric}
                </motion.div>
              ) : (
                <div className="font-mono-tech text-3xl sm:text-4xl text-[#85857B] animate-pulse py-6">
                  {measuringStage === 'scanning' ? '[SCANNING...]' : '[CALC...]'}
                </div>
              )}

              <span className="font-oswald text-xl font-bold tracking-widest text-[#E8E5D8] uppercase block mt-2">
                {res.unit}
              </span>
              <span className="font-mono-tech text-xs text-[#D6B94C] uppercase tracking-wider block">
                {res.spec}
              </span>
            </div>

            {/* Description */}
            <p className="font-inter text-xs sm:text-sm text-[#85857B] leading-relaxed border-t border-white/10 pt-4">
              {res.desc}
            </p>

            {/* Bottom Verification Label */}
            <div className="mt-4 pt-2 flex items-center justify-between text-[10px] font-mono-tech text-[#8CA137]">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>DATA VERIFIED</span>
              </span>
              <span className="text-[#85857B]">TOLERANCE: 0.00%</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
