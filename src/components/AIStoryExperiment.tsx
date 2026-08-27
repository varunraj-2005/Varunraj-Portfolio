import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Sparkles, RefreshCw, Github, Zap } from 'lucide-react';

// ─── Writing styles ───────────────────────────────────────────────────────────
const STYLES = [
  { id: 'natural',   label: 'CONTINUE NATURALLY', color: '#65C7E8', desc: 'Smooth narrative flow' },
  { id: 'twist',     label: 'ADD A TWIST',         color: '#D6B94C', desc: 'Unexpected plot turn' },
  { id: 'dialogue',  label: 'ADD DIALOGUE',        color: '#8CA137', desc: 'Character conversation' },
  { id: 'tension',   label: 'BUILD TENSION',       color: '#C98A32', desc: 'Raise the stakes' },
] as const;

type StyleId = typeof STYLES[number]['id'];

// ─── Pre-written continuations (simulate streaming token by token) ────────────
const STORIES: Record<StyleId, { prompt: string; continuation: string }> = {
  natural: {
    prompt: 'The old chemist walked slowly through the misty lab, his eyes scanning each glowing flask...',
    continuation:
      'The soft hum of centrifuges filled the air as he paused at workstation seven. A pale blue luminescence pulsed from the beaker — the reaction was stable, almost perfect. He reached for his notebook, fingers trembling not from age, but anticipation. After thirty years, the formula was finally within reach.',
  },
  twist: {
    prompt: 'The old chemist walked slowly through the misty lab, his eyes scanning each glowing flask...',
    continuation:
      'Then he froze. The blue crystal in flask seven — it was already synthesized. Someone had been here. The door behind him clicked shut, and the overhead lights died one by one. A voice from the dark said quietly, "We\'ve been watching you cook for months, Mr. White."',
  },
  dialogue: {
    prompt: 'The old chemist walked slowly through the misty lab, his eyes scanning each glowing flask...',
    continuation:
      '"You\'re late," said the woman at the far bench without looking up.\n"The reaction needed more time," he replied, setting down his case.\nShe finally turned. "The reaction — or your nerve?"\nHe met her gaze. "Both. What\'s the purity reading?"\n"99.1%," she said softly. "Your best batch yet."',
  },
  tension: {
    prompt: 'The old chemist walked slowly through the misty lab, his eyes scanning each glowing flask...',
    continuation:
      'A bead of sweat traced down his neck. The compound in flask seven was six degrees above tolerance — any higher and the chain reaction would be uncontrollable. He had four minutes. Maybe three. His hands moved with a precision that contradicted the hammering in his chest. One wrong drop. That\'s all it would take.',
  },
};

// ─── SSE-style token streaming simulation ────────────────────────────────────
function tokenize(text: string): string[] {
  // Split into ~word-sized chunks to simulate token streaming
  const words = text.split(' ');
  const tokens: string[] = [];
  words.forEach((w, i) => {
    tokens.push(i === 0 ? w : ' ' + w);
  });
  return tokens;
}

const PIPELINE_STAGES = [
  { step: 1, label: 'STORY PARSING',     desc: 'Narrative context extraction' },
  { step: 2, label: 'STYLE INJECTION',   desc: 'Writing mode applied to prompt' },
  { step: 3, label: 'GEMINI STREAM',     desc: 'Token-by-token SSE delivery' },
  { step: 4, label: 'OUTPUT RENDERED',   desc: 'Real-time story continuation' },
];

export const AIStoryExperiment: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<StyleId>('natural');
  const [generating, setGenerating] = useState(false);
  const [activeStage, setActiveStage] = useState(4);
  const [displayedText, setDisplayedText] = useState(STORIES.natural.continuation);
  const [hasGenerated, setHasGenerated] = useState(false);
  const streamTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const stageTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (streamTimer.current) clearInterval(streamTimer.current);
      stageTimers.current.forEach(clearTimeout);
    };
  }, []);

  const handleGenerate = (styleId: StyleId) => {
    if (generating) return;

    // Clear any running timers
    if (streamTimer.current) clearInterval(streamTimer.current);
    stageTimers.current.forEach(clearTimeout);
    stageTimers.current = [];

    setSelectedStyle(styleId);
    setGenerating(true);
    setActiveStage(0);
    setDisplayedText('');
    setHasGenerated(true);

    // Advance pipeline stages
    [1, 2, 3].forEach((s, i) => {
      const t = setTimeout(() => setActiveStage(s), (i + 1) * 280);
      stageTimers.current.push(t);
    });

    // Start streaming tokens after stage 3
    const tokens = tokenize(STORIES[styleId].continuation);
    let tokenIdx = 0;
    const streamStart = setTimeout(() => {
      setActiveStage(3);
      streamTimer.current = setInterval(() => {
        if (tokenIdx < tokens.length) {
          setDisplayedText((prev) => prev + tokens[tokenIdx]);
          tokenIdx++;
        } else {
          clearInterval(streamTimer.current!);
          setActiveStage(4);
          setGenerating(false);
        }
      }, 38); // ~38ms per token → smooth reading pace
    }, 900);

    stageTimers.current.push(streamStart);
  };

  const activeStyleDef = STYLES.find((s) => s.id === selectedStyle)!;

  return (
    <div
      className="bg-[#080907] border-2 p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(101,199,232,0.12)]"
      style={{ borderColor: `${activeStyleDef.color}40` }}
    >
      {/* Background glow */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: activeStyleDef.color }}
      />

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-4">

          {/* Element Tile: Ai */}
          <div
            className="w-16 h-20 bg-[#11120F] p-2 flex flex-col justify-between text-left border-2"
            style={{
              borderColor: activeStyleDef.color,
              boxShadow: `0 0 20px ${activeStyleDef.color}40`,
            }}
          >
            <div className="flex justify-between text-[9px] font-mono-tech" style={{ color: activeStyleDef.color }}>
              <span>04</span>
              <span>AI</span>
            </div>
            <span
              className="font-bebas text-3xl leading-none text-center my-auto block"
              style={{ color: activeStyleDef.color }}
            >
              Ai
            </span>
            <div className="font-mono-tech text-[7px] text-[#85857B] uppercase tracking-tighter truncate">
              STORY
            </div>
          </div>

          <div>
            <span
              className="font-mono-tech text-xs font-bold uppercase tracking-widest block"
              style={{ color: activeStyleDef.color }}
            >
              EXPERIMENT 04 // GENERATIVE AI &amp; STREAMING
            </span>
            <h3 className="font-bebas text-2xl sm:text-3xl md:text-4xl text-[#E8E5D8] tracking-wide uppercase">
              AI STORY WRITING — GEMINI-POWERED NARRATIVE ENGINE
            </h3>
            <span className="font-mono-tech text-[10px] text-[#85857B]">
              TECH STACK: NODE.JS, EXPRESS.JS, GOOGLE GEMINI 3.5 FLASH, SERVER-SENT EVENTS (SSE)
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/varunraj-2005/AI-Story-Writting"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 bg-white/5 hover:border-[#65C7E8]/60 hover:bg-[#65C7E8]/10 text-[#85857B] hover:text-[#65C7E8] px-4 py-2 font-mono-tech text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2"
          >
            <Github className="w-3.5 h-3.5" />
            <span>VIEW SOURCE</span>
          </a>
          <div
            className="border px-3 py-1 font-mono-tech text-xs font-semibold tracking-wider uppercase"
            style={{ borderColor: `${activeStyleDef.color}40`, color: activeStyleDef.color, background: `${activeStyleDef.color}12` }}
          >
            PURITY: 99.1% // STREAMING
          </div>
        </div>
      </div>

      {/* ── Pipeline stage bar ─────────────────────────────────────────────── */}
      <div className="mb-8">
        <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block mb-3">
          GENERATIVE SYNTHESIS PIPELINE
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono-tech text-xs">
          {PIPELINE_STAGES.map((s) => (
            <div
              key={s.step}
              className="p-3 border flex flex-col gap-1 transition-all duration-300"
              style={
                activeStage >= s.step
                  ? {
                      background: '#11120F',
                      borderColor: activeStyleDef.color,
                      color: activeStyleDef.color,
                      boxShadow: `0 0 10px ${activeStyleDef.color}22`,
                    }
                  : { background: '#080907', borderColor: 'rgba(255,255,255,0.1)', color: '#85857B' }
              }
            >
              <div className="flex justify-between items-center text-[9px] mb-1">
                <span>STAGE 0{s.step}</span>
                {activeStage >= s.step && (
                  <Sparkles className="w-3 h-3" style={{ color: activeStyleDef.color }} />
                )}
              </div>
              <span className="font-bold text-[11px] uppercase tracking-wider">{s.label}</span>
              <span className="text-[9px] text-[#85857B] mt-0.5">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main body ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left: Style selector */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="font-mono-tech text-xs text-[#E8E5D8] font-bold uppercase tracking-wider">
            SELECT WRITING STYLE:
          </span>

          <div className="flex flex-col gap-2">
            {STYLES.map((style) => (
              <button
                key={style.id}
                onClick={() => handleGenerate(style.id)}
                disabled={generating}
                className="p-4 text-left font-mono-tech text-xs border transition-all flex items-center justify-between gap-3 cursor-pointer disabled:opacity-60"
                style={
                  selectedStyle === style.id
                    ? {
                        background: '#11120F',
                        borderColor: style.color,
                        color: '#E8E5D8',
                        boxShadow: `0 0 12px ${style.color}22`,
                      }
                    : { background: '#080907', borderColor: 'rgba(255,255,255,0.1)', color: '#85857B' }
                }
              >
                <div>
                  <span className="font-bold block text-[11px] tracking-wider" style={{ color: style.color }}>
                    {style.label}
                  </span>
                  <span className="text-[10px] text-[#85857B] mt-0.5 block">{style.desc}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {generating && selectedStyle === style.id ? (
                    <Zap className="w-4 h-4 animate-spin" style={{ color: style.color }} />
                  ) : (
                    <BookOpen
                      className="w-4 h-4"
                      style={{ color: selectedStyle === style.id ? style.color : '#85857B' }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Story prompt display */}
          <div className="bg-[#11120F] border border-white/10 p-4 font-mono-tech text-xs">
            <div className="flex items-center gap-1.5 mb-2 text-[10px] text-[#85857B] uppercase tracking-widest">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: activeStyleDef.color }}
              />
              <span>STORY PROMPT BUFFER</span>
            </div>
            <p className="text-[#E8E5D8]/80 italic text-[11px] leading-relaxed bg-black/30 p-3 border border-white/5">
              "{STORIES[selectedStyle].prompt}"
            </p>
          </div>
        </div>

        {/* Right: Streaming output */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="font-mono-tech text-xs text-[#E8E5D8] font-bold uppercase tracking-wider">
              GEMINI OUTPUT STREAM:
            </span>
            {generating && (
              <span className="font-mono-tech text-[10px] animate-pulse flex items-center gap-1" style={{ color: activeStyleDef.color }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block animate-ping" style={{ background: activeStyleDef.color }} />
                STREAMING TOKENS...
              </span>
            )}
            {!generating && hasGenerated && (
              <span className="font-mono-tech text-[10px] text-[#85857B] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#8CA137]" />
                STREAM COMPLETE
              </span>
            )}
          </div>

          {/* Terminal output window */}
          <div className="bg-[#0a0b08] border border-white/10 min-h-[220px] flex flex-col overflow-hidden">
            {/* Chrome bar */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-[#11120F]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#D6B94C]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#68742C]/60" />
              <span className="ml-2 text-[#85857B] text-[10px] tracking-wider">
                POST /api/continue-story → SSE stream
              </span>
            </div>

            {/* SSE token feed */}
            <div className="p-4 font-mono-tech text-[10px] text-[#85857B] space-y-1 border-b border-white/5">
              <div>
                <span className="text-[#8CA137]">POST</span>{' '}
                <span className="text-[#65C7E8]">/api/continue-story</span>
              </div>
              <div>
                <span className="text-white/30">{'{'}</span>
                <span className="text-[#D6B94C]"> "styleChoice"</span>
                <span className="text-white/30">:</span>
                <span className="text-[#E8E5D8]"> "{activeStyleDef.label.toLowerCase()}"</span>
                <span className="text-white/30"> {'}'}</span>
              </div>
              {(generating || hasGenerated) && (
                <div className="text-[#85857B]">
                  <span className="text-white/30">event: </span>
                  <span style={{ color: activeStyleDef.color }}>token</span>
                  <span className="text-white/30"> // streaming...</span>
                </div>
              )}
            </div>

            {/* Story continuation output */}
            <div className="p-5 flex-1">
              {!hasGenerated && !generating ? (
                <p className="text-[#85857B] font-mono-tech text-xs text-center pt-6">
                  SELECT A WRITING STYLE TO BEGIN GENERATION
                </p>
              ) : (
                <p
                  className="font-inter text-sm text-[#E8E5D8] leading-relaxed whitespace-pre-line"
                  style={{ minHeight: '80px' }}
                >
                  {displayedText}
                  {generating && (
                    <span
                      className="inline-block w-0.5 h-4 ml-0.5 align-middle animate-pulse"
                      style={{ background: activeStyleDef.color }}
                    />
                  )}
                </p>
              )}
            </div>
          </div>

          {/* Lab summary */}
          <div className="bg-[#11120F] border border-white/10 p-4 font-mono-tech text-xs text-[#85857B]">
            <span
              className="font-semibold uppercase tracking-wider block mb-1"
              style={{ color: activeStyleDef.color }}
            >
              LABORATORY EXPERIMENT SUMMARY
            </span>
            <p className="leading-relaxed">
              A real-time story continuation platform using Google Gemini 3.5 Flash with Server-Sent Events for token-by-token streaming. Four writing modes (Natural, Twist, Dialogue, Tension) give writers full narrative control. Built on an Express.js backend with secure API key management and CORS-hardened endpoints.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
