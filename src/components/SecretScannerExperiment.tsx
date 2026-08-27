import React, { useState } from 'react';
import { CheckCircle, ShieldAlert, XCircle, Search, AlertTriangle, Github } from 'lucide-react';

// ─── Sample code snippets to scan ────────────────────────────────────────────
const CODE_SAMPLES = [
  {
    label: 'config.py — AWS credentials',
    language: 'python',
    code: [
      { line: 1,  text: 'import boto3',                                                      secret: false },
      { line: 2,  text: '',                                                                   secret: false },
      { line: 3,  text: 'AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE"',                           secret: true,  finding: { type: 'AWS Access Key', confidence: 'CONFIRMED', signal: 'STRUCTURAL', entropy: '3.92' } },
      { line: 4,  text: 'AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"',     secret: true,  finding: { type: 'AWS Secret Key', confidence: 'CONFIRMED', signal: 'STRUCTURAL + ENTROPY', entropy: '4.71' } },
      { line: 5,  text: '',                                                                   secret: false },
      { line: 6,  text: 'def connect():',                                                    secret: false },
      { line: 7,  text: '    return boto3.client("s3")',                                     secret: false },
    ],
  },
  {
    label: 'server.js — GitHub PAT & DB URL',
    language: 'javascript',
    code: [
      { line: 1,  text: 'const express = require("express");',                               secret: false },
      { line: 2,  text: '// GitHub token for CI webhook',                                   secret: false },
      { line: 3,  text: 'const GH_TOKEN = "ghp_16C7e42F292c6912E7710c838347Ae5b5B";',       secret: true,  finding: { type: 'GitHub PAT', confidence: 'CONFIRMED', signal: 'STRUCTURAL', entropy: '4.88' } },
      { line: 4,  text: '',                                                                   secret: false },
      { line: 5,  text: 'const DB_URL = "postgres://admin:p@ssw0rd!@prod-db:5432/main";',   secret: true,  finding: { type: 'DB Connection String', confidence: 'LIKELY', signal: 'STRUCTURAL + CONTEXT', entropy: '4.12' } },
      { line: 6,  text: '',                                                                   secret: false },
      { line: 7,  text: 'app.listen(3000);',                                                 secret: false },
    ],
  },
  {
    label: 'utils.py — Stripe key (test folder)',
    language: 'python',
    code: [
      { line: 1,  text: '# tests/fixtures/utils.py',                                        secret: false },
      { line: 2,  text: 'STRIPE_KEY = "sk_[REDACTED]_51xxxxxxxxxxxxxxxxxxxxxxxxxxx"',       secret: true,  finding: { type: 'Stripe Live Key', confidence: 'LIKELY', signal: 'STRUCTURAL (test path ↓)', entropy: '4.60' } },
      { line: 3,  text: '# dummy placeholder key for unit tests',                           secret: false },
      { line: 4,  text: 'FAKE_KEY = "sk_[TEST]_your-api-key-here-xxxx"',                   secret: true,  finding: { type: 'Stripe Test Key', confidence: 'SUPPRESSED', signal: 'PLACEHOLDER DETECTED', entropy: '2.11' } },
      { line: 5,  text: '',                                                                   secret: false },
      { line: 6,  text: 'def load_stripe():',                                               secret: false },
      { line: 7,  text: '    pass',                                                          secret: false },
    ],
  },
];

const CONFIDENCE_STYLE: Record<string, string> = {
  CONFIRMED:   'text-red-400 border-red-500/40 bg-red-500/10',
  LIKELY:      'text-[#D6B94C] border-[#D6B94C]/40 bg-[#D6B94C]/10',
  SUPPRESSED:  'text-[#85857B] border-white/20 bg-white/5',
};

const SIGNAL_STAGES = [
  { step: 1, label: 'REGEX PATTERNS',   desc: 'Structural shape matching' },
  { step: 2, label: 'ENTROPY CHECK',    desc: 'Shannon entropy scoring' },
  { step: 3, label: 'CONTEXT HEURISTICS', desc: 'Path / comment / var analysis' },
  { step: 4, label: 'CONFIDENCE SCORE', desc: 'confirmed / likely / suppressed' },
];

export const SecretScannerExperiment: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [scanning, setScanning] = useState(false);
  const [activeStage, setActiveStage] = useState(4);
  const [revealedLines, setRevealedLines] = useState<Set<number>>(new Set([3, 4, 5, 6, 7]));

  const sample = CODE_SAMPLES[selectedIdx];

  const handleScan = (idx: number) => {
    setSelectedIdx(idx);
    setScanning(true);
    setActiveStage(0);
    setRevealedLines(new Set());

    // Advance through signal stages
    [1, 2, 3, 4].forEach((s, i) => {
      setTimeout(() => setActiveStage(s), (i + 1) * 300);
    });

    // Reveal findings one by one after stages complete
    const secretLines = CODE_SAMPLES[idx].code
      .filter((l) => l.secret)
      .map((l) => l.line);

    secretLines.forEach((lineNo, i) => {
      setTimeout(() => {
        setRevealedLines((prev) => new Set([...prev, lineNo]));
      }, 1400 + i * 350);
    });

    setTimeout(() => setScanning(false), 1400 + secretLines.length * 350 + 200);
  };

  const findings = sample.code.filter((l) => l.secret && revealedLines.has(l.line));

  return (
    <div className="bg-[#080907] border-2 border-[#68742C]/60 p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(104,116,44,0.18)] relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#68742C]/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-4">

          {/* Element Tile: Sc */}
          <div className="w-16 h-20 bg-[#11120F] border-2 border-[#68742C] p-2 flex flex-col justify-between text-left shadow-[0_0_20px_rgba(104,116,44,0.3)]">
            <div className="flex justify-between text-[9px] font-mono-tech text-[#8CA137]">
              <span>03</span>
              <span>SEC</span>
            </div>
            <span className="font-bebas text-3xl leading-none text-[#8CA137] text-center my-auto">
              Sc
            </span>
            <div className="font-mono-tech text-[7px] text-[#85857B] uppercase tracking-tighter truncate">
              SCANNER
            </div>
          </div>

          <div>
            <span className="font-mono-tech text-xs text-[#8CA137] font-bold uppercase tracking-widest block">
              EXPERIMENT 03 // SECURITY &amp; DEVOPS TOOLING
            </span>
            <h3 className="font-bebas text-2xl sm:text-3xl md:text-4xl text-[#E8E5D8] tracking-wide uppercase">
              SECRET SCANNER — CODEBASE LEAK DETECTOR
            </h3>
            <span className="font-mono-tech text-[10px] text-[#85857B]">
              TECH STACK: PYTHON, CLI, SHANNON ENTROPY, REGEX, SARIF, CI/CD INTEGRATION
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/varunraj-2005/SecretScanner-github"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#68742C]/60 bg-[#68742C]/10 hover:bg-[#68742C]/30 text-[#8CA137] px-4 py-2 font-mono-tech text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2"
          >
            <Github className="w-3.5 h-3.5" />
            <span>VIEW SOURCE</span>
          </a>
          <div className="border border-[#68742C]/40 bg-[#68742C]/10 px-3 py-1 font-mono-tech text-xs text-[#8CA137] font-semibold tracking-wider uppercase">
            FP RATE: &lt;2% // STABLE
          </div>
        </div>
      </div>

      {/* ── Three-Signal Stage Bar ─────────────────────────────────────────── */}
      <div className="mb-8">
        <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block mb-3">
          THREE-SIGNAL DETECTION ENGINE
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono-tech text-xs">
          {SIGNAL_STAGES.map((s) => (
            <div
              key={s.step}
              className={`p-3 border flex flex-col gap-1 transition-all ${
                activeStage >= s.step
                  ? 'bg-[#11120F] border-[#68742C] text-[#8CA137] shadow-[0_0_10px_rgba(104,116,44,0.2)]'
                  : 'bg-[#080907] border-white/10 text-[#85857B]'
              }`}
            >
              <div className="flex justify-between items-center text-[9px] mb-1">
                <span>SIGNAL 0{s.step}</span>
                {activeStage >= s.step && <CheckCircle className="w-3 h-3 text-[#8CA137]" />}
              </div>
              <span className="font-bold text-[11px] uppercase tracking-wider">{s.label}</span>
              <span className="text-[9px] text-[#85857B] mt-0.5">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Body ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left: File selector + Code view */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="font-mono-tech text-xs text-[#E8E5D8] font-bold uppercase tracking-wider">
              FILE INPUT BUFFER:
            </span>
            <span className="font-mono-tech text-[10px] text-[#85857B]">SELECT TARGET FILE</span>
          </div>

          {/* File selectors */}
          <div className="flex flex-col gap-2">
            {CODE_SAMPLES.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleScan(idx)}
                className={`p-3 text-left font-mono-tech text-xs border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                  selectedIdx === idx
                    ? 'bg-[#11120F] border-[#68742C] text-[#E8E5D8]'
                    : 'bg-[#080907] border-white/10 text-[#85857B] hover:border-white/30'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[#8CA137] font-bold shrink-0">#{idx + 1}</span>
                  <span className="truncate">{s.label}</span>
                </div>
                <Search className={`w-3.5 h-3.5 shrink-0 ${selectedIdx === idx ? 'text-[#8CA137]' : 'text-[#85857B]'}`} />
              </button>
            ))}
          </div>

          {/* Code window */}
          <div className="bg-[#0a0b08] border border-white/10 font-mono-tech text-xs overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-[#11120F]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#D6B94C]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#68742C]/60" />
              <span className="ml-2 text-[#85857B] text-[10px] tracking-wider">{sample.label}</span>
              {scanning && (
                <span className="ml-auto text-[#8CA137] text-[10px] animate-pulse flex items-center gap-1">
                  <Search className="w-3 h-3" /> SCANNING...
                </span>
              )}
            </div>

            {/* Lines */}
            <div className="p-4 space-y-1">
              {sample.code.map((l) => {
                const isRevealed = l.secret && revealedLines.has(l.line);
                return (
                  <div
                    key={l.line}
                    className={`flex gap-3 items-start transition-all duration-300 rounded px-1 py-0.5 ${
                      isRevealed
                        ? l.finding?.confidence === 'SUPPRESSED'
                          ? 'bg-white/5 border-l-2 border-[#85857B]'
                          : l.finding?.confidence === 'LIKELY'
                          ? 'bg-[#D6B94C]/10 border-l-2 border-[#D6B94C]'
                          : 'bg-red-500/10 border-l-2 border-red-500'
                        : ''
                    }`}
                  >
                    <span className="text-white/20 w-4 shrink-0 text-right">{l.line}</span>
                    <span className={`flex-1 break-all ${isRevealed && l.finding?.confidence !== 'SUPPRESSED' ? 'text-[#E8E5D8]' : 'text-[#85857B]'}`}>
                      {l.text || '\u00A0'}
                    </span>
                    {isRevealed && (
                      <span className="shrink-0">
                        {l.finding?.confidence === 'CONFIRMED' && <AlertTriangle className="w-3.5 h-3.5 text-red-400" />}
                        {l.finding?.confidence === 'LIKELY'    && <ShieldAlert    className="w-3.5 h-3.5 text-[#D6B94C]" />}
                        {l.finding?.confidence === 'SUPPRESSED' && <XCircle        className="w-3.5 h-3.5 text-[#85857B]" />}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Findings panel */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="font-mono-tech text-xs text-[#E8E5D8] font-bold uppercase tracking-wider">
              FINDINGS REPORT:
            </span>
            <span className="font-mono-tech text-[10px] text-[#8CA137] font-semibold">
              {findings.length} LEAK{findings.length !== 1 ? 'S' : ''} DETECTED
            </span>
          </div>

          {/* Finding cards */}
          <div className="flex flex-col gap-3 min-h-[160px]">
            {findings.length === 0 ? (
              <div className="border border-white/10 bg-[#11120F] p-6 font-mono-tech text-xs text-[#85857B] text-center">
                {scanning ? (
                  <span className="animate-pulse text-[#8CA137]">RUNNING THREE-SIGNAL ANALYSIS...</span>
                ) : (
                  <span>SELECT A FILE TO RUN SCAN</span>
                )}
              </div>
            ) : (
              findings.map((l, i) => (
                <div
                  key={i}
                  className={`p-4 border font-mono-tech text-xs flex flex-col gap-2 transition-all ${CONFIDENCE_STYLE[l.finding!.confidence]}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-[#E8E5D8] uppercase tracking-wide">
                      {l.finding!.type}
                    </span>
                    <span className={`font-bold text-xs px-2 py-0.5 bg-black/40 border border-current ${CONFIDENCE_STYLE[l.finding!.confidence]}`}>
                      {l.finding!.confidence}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] mt-1">
                    <div>
                      <span className="text-[#85857B] block">SIGNAL METHOD</span>
                      <span className="text-[#E8E5D8] font-semibold">{l.finding!.signal}</span>
                    </div>
                    <div>
                      <span className="text-[#85857B] block">ENTROPY SCORE</span>
                      <span className="text-[#E8E5D8] font-semibold">{l.finding!.entropy} bits</span>
                    </div>
                    <div>
                      <span className="text-[#85857B] block">LINE NUMBER</span>
                      <span className="text-[#E8E5D8] font-semibold">LINE {l.line}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Lab summary */}
          <div className="bg-[#11120F] border border-white/10 p-4 font-mono-tech text-xs text-[#85857B]">
            <span className="text-[#8CA137] font-semibold uppercase tracking-wider block mb-1">
              LABORATORY EXPERIMENT SUMMARY
            </span>
            <p className="leading-relaxed">
              A Python CLI tool combining regex structural matching, Shannon entropy scoring, and context heuristics to detect leaked API keys, credentials, and tokens in codebases — with SARIF output for GitHub Security integration and a baseline allowlist for zero false-alarm CI pipelines.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
