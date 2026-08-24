import React from 'react';
import { SectionLabel } from './SectionLabel';
import { Briefcase, CheckCircle2, FileCheck, Layers, Languages, ArrowRight, Shield } from 'lucide-react';

export const InternshipSection: React.FC = () => {
  return (
    <section id="internship" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionLabel
        id="internship-header"
        code="In / 005"
        title="THE CONNECTION"
        subtitle="CLASSIFIED FIELD OPERATION // ENTERPRISE ENGAGEMENT"
        classification="INFOSYS VIRTUAL INTERNSHIP DOSSIER"
        evidenceNo="INFY-FS-2025"
        accentColor="blue"
      />

      {/* Operation File Document Container */}
      <div className="bg-[#11120F] border-2 border-[#65C7E8]/40 p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(101,199,232,0.15)] relative">
        
        {/* Top Case Stamp */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#65C7E8]/10 border border-[#65C7E8] flex items-center justify-center text-[#65C7E8]">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block">
                ORGANIZATION / CLIENT
              </span>
              <h3 className="font-bebas text-3xl sm:text-4xl text-[#E8E5D8] tracking-wider uppercase">
                INFOSYS (VIRTUAL INTERNSHIP)
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="border border-[#68742C] bg-[#68742C]/20 text-[#8CA137] px-4 py-1.5 font-mono-tech text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>STATUS: COMPLETED</span>
            </div>
            <span className="font-mono-tech text-xs text-[#85857B] border border-white/10 px-3 py-1.5 bg-black/40">
              TIMELINE: 2024 — 2025
            </span>
          </div>
        </div>

        {/* Operational Specification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div className="bg-[#080907] border border-white/10 p-4">
            <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block">
              ROLE &amp; ASSIGNMENT
            </span>
            <span className="font-oswald text-lg font-bold text-[#E8E5D8] uppercase tracking-wide block mt-1">
              FULL STACK INTERN
            </span>
            <span className="font-mono-tech text-[10px] text-[#65C7E8]">ENTERPRISE ENGINEERING</span>
          </div>

          <div className="bg-[#080907] border border-white/10 p-4">
            <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block">
              SPECIALIZATION
            </span>
            <span className="font-oswald text-lg font-bold text-[#E8E5D8] uppercase tracking-wide block mt-1">
              JAVA FULL STACK WEB DEV
            </span>
            <span className="font-mono-tech text-[10px] text-[#85857B]">SPRINGBOOT / REACT / SQL</span>
          </div>

          <div className="bg-[#080907] border border-white/10 p-4">
            <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block">
              MISSION OBJECTIVE
            </span>
            <span className="font-oswald text-lg font-bold text-[#D6B94C] uppercase tracking-wide block mt-1">
              REAL-TIME TEXT ENGINE
            </span>
            <span className="font-mono-tech text-[10px] text-[#85857B]">STREAMED NLP TRANSLATION</span>
          </div>

          <div className="bg-[#080907] border border-white/10 p-4">
            <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block">
              VERIFICATION STATUS
            </span>
            <span className="font-oswald text-lg font-bold text-[#68742C] uppercase tracking-wide block mt-1">
              RECORD ACCREDITED
            </span>
            <span className="font-mono-tech text-[10px] text-[#85857B]">SPRINGBOARD ACCREDITED</span>
          </div>

        </div>

        {/* Core Deliverable Breakdown */}
        <div className="bg-[#080907] border-l-4 border-[#65C7E8] p-6 border-y border-r border-white/10">
          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#65C7E8] font-bold uppercase tracking-widest mb-3">
            <FileCheck className="w-4 h-4" />
            <span>PRIMARY DELIVERABLE ARCHITECTURE</span>
          </div>

          <h4 className="font-oswald text-xl sm:text-2xl text-[#E8E5D8] font-bold tracking-wide uppercase mb-4">
            LIVE COMMENTARY TO MULTI-LANGUAGE TEXT ENGINE
          </h4>

          {/* Flow Pipeline */}
          <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs mb-4">
            <span className="bg-[#11120F] border border-white/20 px-3 py-1.5 text-[#E8E5D8]">
              LIVE AUDIO / COMMENTARY STREAM
            </span>
            <ArrowRight className="w-4 h-4 text-[#65C7E8]" />
            <span className="bg-[#11120F] border border-[#65C7E8]/50 px-3 py-1.5 text-[#65C7E8]">
              SPEECH-TO-TEXT EXTRACTION
            </span>
            <ArrowRight className="w-4 h-4 text-[#65C7E8]" />
            <span className="bg-[#11120F] border border-[#D6B94C]/50 px-3 py-1.5 text-[#D6B94C]">
              MULTI-LANGUAGE TRANSLATION
            </span>
            <ArrowRight className="w-4 h-4 text-[#68742C]" />
            <span className="bg-[#68742C]/20 border border-[#68742C] px-3 py-1.5 text-[#8CA137] font-bold">
              REAL-TIME BROADCAST UI
            </span>
          </div>

          <p className="font-inter text-sm text-[#85857B] leading-relaxed">
            Constructed during the Infosys Virtual Internship under the Java Full Stack Web Development domain. Focused on streaming live sports/event commentaries and generating low-latency multilingual textual streams for broader accessibility.
          </p>
        </div>

      </div>
    </section>
  );
};
