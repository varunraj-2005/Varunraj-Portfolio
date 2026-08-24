import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, AlertTriangle, CheckCircle, RefreshCw, Layers, ArrowRight } from 'lucide-react';

export const SentimentExperiment: React.FC = () => {
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeStep, setActiveStep] = useState(5); // fully completed initially

  const sampleReviews = [
    {
      text: "Great app, but it crashes every time I open the settings.",
      overall: "NEGATIVE",
      score: "0.28 / 1.00",
      aspects: [
        { name: "PERFORMANCE", status: "NEGATIVE", detail: "Crashes on settings launch", color: "text-red-400 border-red-500/30 bg-red-500/10" },
        { name: "USABILITY / UI", status: "POSITIVE", detail: "Complimented as 'Great app'", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
        { name: "BUGS & STABILITY", status: "NEGATIVE", detail: "Critical crash exception detected", color: "text-red-400 border-red-500/30 bg-red-500/10" },
      ],
      tokens: ["great", "app", "but", "it", "crashes", "every", "time", "i", "open", "the", "settings"],
    },
    {
      text: "Ultra fast synchronization and clean UI! Dark mode looks fantastic.",
      overall: "POSITIVE",
      score: "0.94 / 1.00",
      aspects: [
        { name: "PERFORMANCE", status: "POSITIVE", detail: "High speed synchronization", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
        { name: "USABILITY / UI", status: "POSITIVE", detail: "Clean UI & fantastic dark mode", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
        { name: "BUGS & STABILITY", status: "NEUTRAL", detail: "No anomalies reported", color: "text-[#D6B94C] border-[#D6B94C]/30 bg-[#D6B94C]/10" },
      ],
      tokens: ["ultra", "fast", "synchronization", "and", "clean", "ui", "dark", "mode", "looks", "fantastic"],
    },
    {
      text: "Decent functionality for daily tasks, but battery drain is slightly high.",
      overall: "NEUTRAL / MIXED",
      score: "0.52 / 1.00",
      aspects: [
        { name: "PERFORMANCE", status: "NEGATIVE", detail: "High background power consumption", color: "text-red-400 border-red-500/30 bg-red-500/10" },
        { name: "USABILITY / UI", status: "POSITIVE", detail: "Decent for daily task workflows", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
        { name: "BUGS & STABILITY", status: "NEUTRAL", detail: "Operational without fatal errors", color: "text-[#D6B94C] border-[#D6B94C]/30 bg-[#D6B94C]/10" },
      ],
      tokens: ["decent", "functionality", "for", "daily", "tasks", "battery", "drain", "slightly", "high"],
    },
  ];

  const current = sampleReviews[selectedReviewIndex];

  const handleRunPipeline = (index: number) => {
    setSelectedReviewIndex(index);
    setIsAnalyzing(true);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 250);
    setTimeout(() => setActiveStep(3), 500);
    setTimeout(() => setActiveStep(4), 750);
    setTimeout(() => {
      setActiveStep(5);
      setIsAnalyzing(false);
    }, 1000);
  };

  return (
    <div className="bg-[#080907] border-2 border-[#65C7E8]/40 p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(101,199,232,0.15)] relative overflow-hidden">
      
      {/* Subtle blue chemical glow in background */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#65C7E8]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Experiment Header & Element Tag */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        
        <div className="flex items-center gap-4">
          {/* Element Tile: Sa */}
          <div className="w-16 h-20 bg-[#11120F] border-2 border-[#65C7E8] p-2 flex flex-col justify-between text-left shadow-[0_0_20px_rgba(101,199,232,0.3)]">
            <div className="flex justify-between text-[9px] font-mono-tech text-[#65C7E8]">
              <span>01</span>
              <span>NLP</span>
            </div>
            <span className="font-bebas text-3xl leading-none text-[#65C7E8] text-center my-auto">
              Sa
            </span>
            <div className="font-mono-tech text-[7px] text-[#85857B] uppercase tracking-tighter truncate">
              SENTIMENT
            </div>
          </div>

          <div>
            <span className="font-mono-tech text-xs text-[#65C7E8] font-bold uppercase tracking-widest block">
              EXPERIMENT 01 // NLP &amp; TEXT ANALYTICS
            </span>
            <h3 className="font-bebas text-2xl sm:text-3xl md:text-4xl text-[#E8E5D8] tracking-wide uppercase">
              SMART SENTIMENT ANALYSIS OF PLAY STORE REVIEWS
            </h3>
            <span className="font-mono-tech text-[10px] text-[#85857B]">
              TECH STACK: PYTHON, NLP, TOKENIZATION, ASPECT-BASED SENTIMENT ANALYSIS (ABSA)
            </span>
          </div>
        </div>

        {/* Experiment status badge */}
        <div className="border border-[#65C7E8]/40 bg-[#65C7E8]/10 px-3 py-1 font-mono-tech text-xs text-[#65C7E8] font-semibold tracking-wider uppercase">
          PURITY: 99.4% // STABLE
        </div>
      </div>

      {/* Pipeline Stage Bar */}
      <div className="mb-8">
        <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block mb-3">
          ANALYTICAL SYNTHESIS PIPELINE
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono-tech text-xs">
          {[
            { step: 1, label: 'RAW REVIEW' },
            { step: 2, label: 'TOKENIZATION' },
            { step: 3, label: 'NLP EXTRACTION' },
            { step: 4, label: 'CLASSIFICATION' },
            { step: 5, label: 'ABSA INSIGHTS' },
          ].map((s) => (
            <div
              key={s.step}
              className={`p-2.5 border transition-all flex flex-col justify-between ${
                activeStep >= s.step
                  ? 'bg-[#11120F] border-[#65C7E8] text-[#65C7E8] shadow-[0_0_10px_rgba(101,199,232,0.2)]'
                  : 'bg-[#080907] border-white/10 text-[#85857B]'
              }`}
            >
              <div className="flex justify-between items-center text-[9px] mb-1">
                <span>STAGE 0{s.step}</span>
                {activeStep >= s.step && <CheckCircle className="w-3 h-3 text-[#65C7E8]" />}
              </div>
              <span className="font-semibold text-[11px] uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Review Selection & Testing Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Sample Review Input & Pipeline Execution */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="font-mono-tech text-xs text-[#E8E5D8] font-bold uppercase tracking-wider">
              INPUT REVIEW BUFFER:
            </span>
            <span className="font-mono-tech text-[10px] text-[#85857B]">
              SELECT FEEDBACK SPECIMEN
            </span>
          </div>

          {/* Sample Review Selector Buttons */}
          <div className="flex flex-col gap-2">
            {sampleReviews.map((rev, idx) => (
              <button
                key={idx}
                onClick={() => handleRunPipeline(idx)}
                className={`p-3 text-left font-mono-tech text-xs border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  selectedReviewIndex === idx
                    ? 'bg-[#11120F] border-[#65C7E8] text-[#E8E5D8]'
                    : 'bg-[#080907] border-white/10 text-[#85857B] hover:border-white/30'
                }`}
              >
                <div className="truncate">
                  <span className="text-[#65C7E8] font-bold mr-2">#{idx + 1}</span>
                  <span>"{rev.text}"</span>
                </div>
                <Play className={`w-3.5 h-3.5 shrink-0 ${selectedReviewIndex === idx ? 'text-[#65C7E8]' : 'text-[#85857B]'}`} />
              </button>
            ))}
          </div>

          {/* Active Review Terminal Box */}
          <div className="bg-[#11120F] border border-white/10 p-4 font-mono-tech text-xs">
            <div className="text-[10px] text-[#85857B] mb-2 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#65C7E8] animate-pulse" />
              <span>ACTIVE SPECIMEN UNDER INSPECTION</span>
            </div>
            <p className="text-[#E8E5D8] text-sm italic font-normal bg-black/40 p-3 border border-white/5">
              "{current.text}"
            </p>

            {/* Tokenized Stream */}
            <div className="mt-3">
              <span className="text-[9px] text-[#85857B] block mb-1 uppercase tracking-wider">
                TOKENIZED N-GRAM STREAM:
              </span>
              <div className="flex flex-wrap gap-1">
                {current.tokens.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-[#080907] border border-[#65C7E8]/30 text-[#65C7E8] px-1.5 py-0.5 text-[10px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: ABSA Output & Feature-Level Breakdown */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="font-mono-tech text-xs text-[#E8E5D8] font-bold uppercase tracking-wider">
              ASPECT-BASED SENTIMENT RESULTS (ABSA):
            </span>
            <span className="font-mono-tech text-[10px] text-[#65C7E8] font-semibold">
              POLARITY: {current.overall}
            </span>
          </div>

          {/* ABSA Aspect Cards */}
          <div className="flex flex-col gap-3">
            {current.aspects.map((aspect, i) => (
              <div
                key={i}
                className={`p-4 border font-mono-tech text-xs flex flex-col gap-1 transition-all ${aspect.color}`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold tracking-wider uppercase text-sm text-[#E8E5D8]">
                    {aspect.name}
                  </span>
                  <span className="font-bold text-xs px-2 py-0.5 bg-black/40 border border-current">
                    {aspect.status}
                  </span>
                </div>
                <p className="text-[11px] text-[#E8E5D8]/90 mt-1">
                  // {aspect.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Chemistry Lab Explanation */}
          <div className="bg-[#11120F] border border-white/10 p-4 font-mono-tech text-xs text-[#85857B]">
            <span className="text-[#65C7E8] font-semibold uppercase tracking-wider block mb-1">
              LABORATORY EXPERIMENT SUMMARY
            </span>
            <p className="leading-relaxed">
              Decomposes unorganized user app reviews into distinct semantic dimensions. Standard sentiment gives a single score, but ABSA pinpoints specific feature-level vulnerabilities (e.g. crashes in settings vs UI praise).
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
