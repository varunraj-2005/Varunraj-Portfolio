import React, { useState } from 'react';
import { SectionLabel } from './SectionLabel';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Award, CheckCircle, FileText, ExternalLink, ShieldAlert, Sparkles } from 'lucide-react';

export const CertificationVault: React.FC = () => {
  const [selectedRecordId, setSelectedRecordId] = useState<string>(CERTIFICATIONS_DATA[0].id);

  const activeRecord =
    CERTIFICATIONS_DATA.find((r) => r.id === selectedRecordId) || CERTIFICATIONS_DATA[0];

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionLabel
        id="certifications-header"
        code="Ce / 006"
        title="LAB RECORDS"
        subtitle="ACADEMIC &amp; INDUSTRY CERTIFICATION REPOSITORY"
        classification="OFFICIAL LABORATORY ARCHIVES"
        evidenceNo="REC-VAULT-06"
        accentColor="green"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Vertically Scrolling Laboratory Record Dossier */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="flex justify-between items-center font-mono-tech text-xs text-[#85857B] border-b border-white/10 pb-2">
            <span>INDEX OF ACCREDITED SPECIMENS</span>
            <span>TOTAL RECORDS: 06</span>
          </div>

          <div className="space-y-3">
            {CERTIFICATIONS_DATA.map((record) => {
              const isSelected = selectedRecordId === record.id;

              return (
                <div
                  key={record.id}
                  onClick={() => setSelectedRecordId(record.id)}
                  className={`p-4 sm:p-5 border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#11120F] border-[#D6B94C] shadow-[0_0_20px_rgba(214,185,76,0.2)]'
                      : 'bg-[#080907] border-white/10 hover:border-white/30 text-[#85857B]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 border ${isSelected ? 'border-[#D6B94C] text-[#D6B94C] bg-[#D6B94C]/10' : 'border-white/10 text-[#85857B]'}`}>
                      <Award className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono-tech text-[10px] text-[#D6B94C] font-bold">
                          {record.recordNo}
                        </span>
                        <span className="text-[10px] text-white/20">|</span>
                        <span className="font-mono-tech text-[10px] text-[#85857B]">
                          {record.issuer}
                        </span>
                      </div>

                      <h4 className="font-oswald text-base sm:text-lg font-bold text-[#E8E5D8] tracking-wider uppercase mt-0.5">
                        {record.title}
                      </h4>
                    </div>
                  </div>

                  {/* Right Score & Badge */}
                  <div className="flex sm:flex-col sm:items-end justify-between items-center gap-1 shrink-0 font-mono-tech">
                    <span className="text-xs font-bold text-[#D6B94C] bg-black/40 border border-[#D6B94C]/30 px-2 py-0.5">
                      {record.badge}
                    </span>
                    {record.score && (
                      <span className="text-[11px] text-[#E8E5D8]">
                        SCORE: <strong className="text-[#65C7E8]">{record.score}</strong>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Record Verification Terminal Inspection */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="bg-[#11120F] border-2 border-[#68742C] p-6 sm:p-8 flex flex-col gap-5 shadow-[0_0_30px_rgba(104,116,44,0.2)]">
            
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="font-mono-tech text-xs text-[#8CA137] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>INSPECTION TERMINAL</span>
              </span>
              <span className="font-mono-tech text-[10px] text-[#85857B]">
                {activeRecord.recordNo}
              </span>
            </div>

            <div>
              <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block">
                RECORD CERTIFICATION TITLE
              </span>
              <h3 className="font-bebas text-3xl text-[#E8E5D8] tracking-wide uppercase mt-1">
                {activeRecord.title}
              </h3>
              <span className="font-mono-tech text-xs text-[#D6B94C] font-semibold">
                ISSUED BY: {activeRecord.issuer}
              </span>
            </div>

            {/* Spec Sheet Table */}
            <div className="bg-[#080907] border border-white/10 p-4 font-mono-tech text-xs space-y-2.5">
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-[#85857B]">CATEGORY:</span>
                <span className="text-[#E8E5D8] font-bold">{activeRecord.category}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-[#85857B]">HONOR / MEDAL:</span>
                <span className="text-[#D6B94C] font-bold">{activeRecord.badge}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-[#85857B]">TEST RESULT:</span>
                <span className="text-[#65C7E8] font-bold">{activeRecord.score || 'PASS'}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#85857B]">SECURITY STATUS:</span>
                <span className="text-[#8CA137] font-bold flex items-center gap-1">
                  <span>DESIGN LABELED // {activeRecord.status}</span>
                </span>
              </div>
            </div>

            {/* Record Verification Stamp */}
            <div className="border border-[#68742C]/40 bg-[#68742C]/10 p-3 text-center font-mono-tech text-xs text-[#8CA137]">
              <span className="font-bold uppercase tracking-wider block">
                AUTHENTICATED COURSE RECORD
              </span>
              <span className="text-[10px] text-[#85857B] block mt-0.5">
                RECORD REF ID: {activeRecord.verificationId}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
