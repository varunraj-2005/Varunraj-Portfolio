import React from 'react';
import { SectionLabel } from './SectionLabel';
import { ShieldCheck, FileText, Fingerprint, Award, CheckCircle, Database, Cpu } from 'lucide-react';

export const SubjectFile: React.FC = () => {
  return (
    <section id="subject-profile" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionLabel
        id="subject-file-header"
        code="V / 001"
        title="SUBJECT PROFILE"
        subtitle="CLASSIFIED DEA/LAB ENGINEERING CASE FILE"
        classification="CONFIDENTIAL OPERATIVE DOSSIER"
        evidenceNo="VP-2026-IT"
        accentColor="yellow"
      />

      {/* Case File Layout */}
      <div className="relative bg-[#11120F] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl">
        
        {/* Top Case Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D6B94C]/10 border border-[#D6B94C] flex items-center justify-center text-[#D6B94C]">
              <Fingerprint className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block">
                DOSSIER RECORD ID
              </span>
              <span className="font-oswald text-base sm:text-lg font-bold text-[#E8E5D8] tracking-wider uppercase">
                CASE #VP-023-IT-ENG
              </span>
            </div>
          </div>

          {/* Evidence Stamp */}
          <div className="flex items-center gap-3">
            <div className="border-2 border-[#68742C] text-[#8CA137] bg-[#68742C]/10 px-3 py-1 font-mono-tech text-xs font-bold tracking-widest uppercase rotate-1 select-none">
              STATUS: ACTIVE &amp; VERIFIED
            </div>
            <div className="hidden sm:block font-mono-tech text-[10px] text-[#85857B] text-right">
              DEPT: INFORMATION TECH<br />SECURITY CLEARANCE: LVL 5
            </div>
          </div>
        </div>

        {/* Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Metadata Parameters (DEA style form fields) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Primary Fields Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#080907] border border-white/10 p-4">
                <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block">
                  NAME
                </span>
                <span className="font-oswald text-xl font-bold text-[#E8E5D8] uppercase tracking-wider block mt-1">
                  VARUNRAJ P.
                </span>
                <span className="font-mono-tech text-[10px] text-[#D6B94C]">SUBJECT ALIAS: THE ARCHITECT</span>
              </div>

              <div className="bg-[#080907] border border-white/10 p-4">
                <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block">
                  FIELD &amp; DOMAIN
                </span>
                <span className="font-oswald text-xl font-bold text-[#65C7E8] uppercase tracking-wider block mt-1">
                  SOFTWARE DEVELOPMENT
                </span>
                <span className="font-mono-tech text-[10px] text-[#85857B]">FULL STACK &amp; PROBLEM SOLVING</span>
              </div>

              <div className="bg-[#080907] border border-white/10 p-4">
                <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block">
                  EDUCATION
                </span>
                <span className="font-oswald text-lg font-bold text-[#E8E5D8] uppercase tracking-wide block mt-1">
                  B.TECH INFORMATION TECHNOLOGY
                </span>
                <span className="font-mono-tech text-[10px] text-[#D6B94C]">V.S.B. ENGINEERING COLLEGE</span>
              </div>

              <div className="bg-[#080907] border border-white/10 p-4">
                <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block">
                  TIMELINE &amp; METRICS
                </span>
                <span className="font-oswald text-lg font-bold text-[#E8E5D8] uppercase tracking-wide block mt-1">
                  2023 — 2027 (8.2 CGPA)
                </span>
                <span className="font-mono-tech text-[10px] text-[#68742C] font-semibold">6TH SEMESTER RECORD</span>
              </div>

            </div>

            {/* Official Briefing / Profile Excerpt */}
            <div className="bg-[#080907] border-l-2 border-[#D6B94C] p-5 border-y border-r border-white/5">
              <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D6B94C] font-bold uppercase tracking-widest mb-2">
                <FileText className="w-4 h-4" />
                <span>OFFICIAL SUBJECT BRIEFING</span>
              </div>
              <p className="font-inter text-sm md:text-base text-[#E8E5D8] leading-relaxed font-normal">
                "Dynamic B.Tech Information Technology student with a solid foundation in programming, web development, and emerging AI technologies, deeply interested in solving real-world problems through software engineering and algorithmic precision."
              </p>
            </div>

          </div>

          {/* Right Column: Evidence Card & Spec Sheet */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Laboratory Credentials Box */}
            <div className="bg-[#080907] border border-white/10 p-6 flex flex-col gap-4">
              <span className="font-mono-tech text-xs text-[#D6B94C] font-semibold uppercase tracking-widest border-b border-white/10 pb-2">
                LABORATORY SPECIFICATIONS
              </span>

              <div className="flex flex-col gap-3 font-mono-tech text-xs">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#85857B]">CORE LANGUAGE:</span>
                  <span className="text-[#E8E5D8] font-bold">JAVA (HACKERRANK 5★)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#85857B]">SECONDARY CATALYST:</span>
                  <span className="text-[#E8E5D8] font-bold">PYTHON &amp; C#</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#85857B]">STACK FRAMEWORKS:</span>
                  <span className="text-[#65C7E8] font-bold">MERN &amp; MEAN</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#85857B]">PERSISTENCE ENGINES:</span>
                  <span className="text-[#E8E5D8] font-bold">MYSQL &amp; MONGODB</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#85857B]">ALGORITHMIC SCORE:</span>
                  <span className="text-[#D6B94C] font-bold">500+ PROBLEMS SOLVED</span>
                </div>
              </div>

              {/* Fictional Barcode visual */}
              <div className="mt-2 pt-4 border-t border-white/10 flex flex-col items-center gap-1">
                <div className="flex gap-1 items-end h-8 w-full justify-center opacity-70">
                  {[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5].map((h, i) => (
                    <div
                      key={i}
                      className="bg-[#E8E5D8]"
                      style={{
                        width: i % 3 === 0 ? '3px' : '1.5px',
                        height: `${h * 10}%`,
                      }}
                    />
                  ))}
                </div>
                <span className="font-mono-tech text-[9px] text-[#85857B] tracking-widest">
                  * VP-7749-INFO-TECH-2026 *
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
