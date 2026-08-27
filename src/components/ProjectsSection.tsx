import React, { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { FlaskConical, Github, ChevronRight, Shield, BookOpen, Brain, MapPin } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { ExperimentModal } from './ExperimentModal';
import { SentimentExperiment } from './SentimentExperiment';
import { EventExperiment } from './EventExperiment';
import { SecretScannerExperiment } from './SecretScannerExperiment';
import { AIStoryExperiment } from './AIStoryExperiment';

// ─── Experiment registry ──────────────────────────────────────────────────────
const EXPERIMENTS = [
  {
    id: 'sentiment',
    code: 'EXPERIMENT 01',
    number: '01',
    symbol: 'Sa',
    title: 'SMART SENTIMENT ANALYSIS OF PLAY STORE REVIEWS',
    shortTitle: 'Smart Sentiment Analysis',
    category: 'NLP & TEXT ANALYTICS',
    stack: ['Python', 'NLP', 'ABSA', 'Tokenization'],
    accentColor: '#65C7E8',
    status: 'STABLE',
    purity: '99.4%',
    githubUrl: 'https://github.com/varunraj-2005',
    icon: Brain,
    component: <SentimentExperiment />,
    desc: 'Decomposes app reviews into aspect-level sentiment vectors — performance, UI, and stability scored independently.',
  },
  {
    id: 'geotag',
    code: 'EXPERIMENT 02',
    number: '02',
    symbol: 'Ev',
    title: 'CAMPUS EVENT GEOTAG RADAR',
    shortTitle: 'Campus Event Geotag Radar',
    category: 'GEOSPATIAL & FULL STACK',
    stack: ['React', 'Node.js', 'MongoDB', 'Leaflet.js'],
    accentColor: '#D6B94C',
    status: 'DEPLOYED',
    purity: '98.7%',
    githubUrl: 'https://github.com/varunraj-2005',
    icon: MapPin,
    component: <EventExperiment />,
    desc: 'Live campus event discovery platform with geolocation tagging, real-time filtering and interactive map overlays.',
  },
  {
    id: 'secretscanner',
    code: 'EXPERIMENT 03',
    number: '03',
    symbol: 'Sc',
    title: 'SECRET SCANNER — CODEBASE LEAK DETECTOR',
    shortTitle: 'SecretScanner',
    category: 'SECURITY & DEVOPS TOOLING',
    stack: ['Python', 'CLI', 'Shannon Entropy', 'SARIF', 'CI/CD'],
    accentColor: '#8CA137',
    status: 'STABLE',
    purity: 'FP < 2%',
    githubUrl: 'https://github.com/varunraj-2005/SecretScanner-github',
    icon: Shield,
    component: <SecretScannerExperiment />,
    desc: 'Three-signal detection engine (regex + entropy + context) that scans codebases for leaked API keys and credentials with SARIF output for GitHub Security.',
  },
  {
    id: 'aistory',
    code: 'EXPERIMENT 04',
    number: '04',
    symbol: 'Ai',
    title: 'AI STORY WRITING — GEMINI-POWERED NARRATIVE ENGINE',
    shortTitle: 'AI Story Writing',
    category: 'GENERATIVE AI & STREAMING',
    stack: ['Node.js', 'Express.js', 'Gemini 3.5 Flash', 'SSE'],
    accentColor: '#65C7E8',
    status: 'STREAMING',
    purity: '99.1%',
    githubUrl: 'https://github.com/varunraj-2005/AI-Story-Writting',
    icon: BookOpen,
    component: <AIStoryExperiment />,
    desc: 'Real-time story continuation platform powered by Google Gemini 3.5 Flash with token-by-token SSE streaming and four writing style modes.',
  },
] as const;

type ExperimentId = typeof EXPERIMENTS[number]['id'];

// ─── Single project row ───────────────────────────────────────────────────────
interface RowProps {
  exp: typeof EXPERIMENTS[number];
  index: number;
  onOpen: (id: ExperimentId) => void;
}

const ExperimentRow: React.FC<RowProps> = ({ exp, index, onOpen }) => {
  const Icon = exp.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <div
        className="group flex flex-col sm:flex-row sm:items-center gap-4 bg-[#11120F] border border-white/10 hover:border-opacity-60 p-4 sm:p-5 transition-all duration-300 relative overflow-hidden"
        style={{ '--accent': exp.accentColor } as React.CSSProperties}
      >
        {/* Left accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: exp.accentColor }}
        />

        {/* Element tile */}
        <div
          className="w-14 h-16 shrink-0 bg-[#080907] border p-1.5 flex flex-col justify-between transition-all duration-300 group-hover:shadow-lg"
          style={{
            borderColor: `${exp.accentColor}50`,
            boxShadow: `0 0 0 rgba(0,0,0,0)`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 16px ${exp.accentColor}30`;
            (e.currentTarget as HTMLDivElement).style.borderColor = exp.accentColor;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 rgba(0,0,0,0)';
            (e.currentTarget as HTMLDivElement).style.borderColor = `${exp.accentColor}50`;
          }}
        >
          <div className="flex justify-between text-[8px] font-mono-tech" style={{ color: exp.accentColor }}>
            <span>{exp.number}</span>
            <span>EX</span>
          </div>
          <span className="font-bebas text-2xl leading-none text-center block" style={{ color: exp.accentColor }}>
            {exp.symbol}
          </span>
          <div className="font-mono-tech text-[6px] text-[#85857B] uppercase tracking-tighter truncate text-center">
            LAB
          </div>
        </div>

        {/* Main info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-mono-tech text-[10px] font-bold uppercase tracking-widest" style={{ color: exp.accentColor }}>
              {exp.code}
            </span>
            <span className="text-white/20 font-mono-tech text-[10px]">//</span>
            <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-wider">
              {exp.category}
            </span>
          </div>

          <h3 className="font-oswald text-base sm:text-lg font-bold text-[#E8E5D8] uppercase tracking-wide leading-tight truncate">
            {exp.shortTitle}
          </h3>

          <p className="font-mono-tech text-[10px] text-[#85857B] mt-1 leading-relaxed line-clamp-2 hidden sm:block">
            {exp.desc}
          </p>

          {/* Stack chips */}
          <div className="flex flex-wrap gap-1 mt-2">
            {exp.stack.map((t) => (
              <span
                key={t}
                className="font-mono-tech text-[9px] font-semibold px-1.5 py-0.5 border border-white/10 text-[#85857B] bg-[#080907]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: status + actions */}
        <div className="flex sm:flex-col items-center sm:items-end gap-3 shrink-0">
          {/* Status badge */}
          <div
            className="font-mono-tech text-[9px] font-bold px-2 py-1 border uppercase tracking-wider"
            style={{ color: exp.accentColor, borderColor: `${exp.accentColor}40`, background: `${exp.accentColor}10` }}
          >
            {exp.status} // {exp.purity}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <a
              href={exp.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="border border-white/15 bg-[#080907] hover:border-white/40 text-[#85857B] hover:text-[#E8E5D8] p-2 transition-colors"
              aria-label="View source on GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => onOpen(exp.id as ExperimentId)}
              className="flex items-center gap-1.5 font-mono-tech text-[10px] font-bold uppercase tracking-wider px-3 py-2 border transition-all"
              style={{
                borderColor: `${exp.accentColor}50`,
                color: exp.accentColor,
                background: `${exp.accentColor}10`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = `${exp.accentColor}22`;
                (e.currentTarget as HTMLButtonElement).style.borderColor = exp.accentColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = `${exp.accentColor}10`;
                (e.currentTarget as HTMLButtonElement).style.borderColor = `${exp.accentColor}50`;
              }}
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>OPEN LAB</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
export const ProjectsSection: React.FC = () => {
  const [openId, setOpenId] = useState<ExperimentId | null>(null);

  const handleOpen = useCallback((id: ExperimentId) => setOpenId(id), []);
  const handleClose = useCallback(() => setOpenId(null), []);

  const activeExp = EXPERIMENTS.find((e) => e.id === openId) ?? null;

  return (
    <section id="experiments" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionLabel
        id="projects-header"
        code="Pr / 003"
        title="THE EXPERIMENTS"
        subtitle="INTERACTIVE SOFTWARE LABORATORIES &amp; DEPLOYED SYSTEMS"
        classification="EXPERIMENTAL ARCHITECTURE PIPELINES"
        evidenceNo="PR-EXP-03"
        accentColor="blue"
      />

      {/* Instruction hint */}
      <div className="flex items-center gap-2 font-mono-tech text-[10px] text-[#85857B] mb-6 uppercase tracking-widest">
        <FlaskConical className="w-3.5 h-3.5 text-[#65C7E8]" />
        <span>CLICK</span>
        <span className="text-[#65C7E8] font-bold">OPEN LAB</span>
        <span>TO RUN THE INTERACTIVE EXPERIMENT</span>
      </div>

      {/* Project rows */}
      <div className="flex flex-col gap-3">
        {EXPERIMENTS.map((exp, i) => (
          <ExperimentRow key={exp.id} exp={exp} index={i} onOpen={handleOpen} />
        ))}
      </div>

      {/* Modal — renders the selected experiment */}
      {activeExp && (
        <ExperimentModal
          isOpen={openId !== null}
          onClose={handleClose}
          title={activeExp.title}
          code={activeExp.code}
          accentColor={activeExp.accentColor}
        >
          {activeExp.component}
        </ExperimentModal>
      )}
    </section>
  );
};
