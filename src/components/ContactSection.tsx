import React, { useState } from 'react';
import { SectionLabel } from './SectionLabel';
import { Mail, Github, Linkedin, Code2, Send, Copy, Check, Terminal, ShieldAlert, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  const emailAddress = 'rajapandian1412@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message) return;
    setFormSent(true);
    setTimeout(() => {
      window.location.href = `mailto:${emailAddress}?subject=Engineering Experiment Inquiry from ${senderName || 'Software Lab Visitor'}&body=${encodeURIComponent(message)}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionLabel
        id="contact-header"
        code="Co / 008"
        title="THE DEAL"
        subtitle="COMMENCE LABORATORY COLLABORATION &amp; TRANSMISSION"
        classification="FINAL NEGOTIATION &amp; COMM-CHANNEL"
        evidenceNo="DEAL-COMM-08"
        accentColor="yellow"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Action & Headline */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          <div>
            <span className="font-mono-tech text-xs text-[#D6B94C] font-bold uppercase tracking-widest block mb-2">
              DISPATCH FREQUENCY OPEN
            </span>
            
            <h3 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#E8E5D8] tracking-tight uppercase leading-none">
              READY TO BUILD SOMETHING?
            </h3>
            
            <p className="font-oswald text-xl sm:text-2xl text-[#D6B94C] tracking-wider uppercase font-semibold mt-2">
              LET'S MAKE THE NEXT EXPERIMENT.
            </p>

            <p className="font-inter text-sm sm:text-base text-[#85857B] mt-4 leading-relaxed">
              Whether you need full-stack architecture, algorithmic problem solving, or intelligent NLP pipelines, the recipe is ready. Connect directly through official transmission lines.
            </p>
          </div>

          {/* Social Channels / Profile Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Email Direct Node */}
            <div className="bg-[#11120F] border border-white/10 p-4 flex flex-col justify-between gap-3 hover:border-[#D6B94C]/50 transition-colors">
              <div className="flex justify-between items-center text-xs font-mono-tech text-[#85857B]">
                <span>COMMUNICATION FREQ</span>
                <Mail className="w-4 h-4 text-[#D6B94C]" />
              </div>
              <span className="font-mono-tech text-xs text-[#E8E5D8] font-bold truncate">
                {emailAddress}
              </span>
              <button
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className="font-mono-tech text-[10px] text-[#D6B94C] hover:text-[#E8E5D8] flex items-center gap-1.5 cursor-pointer uppercase font-bold"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'FREQUENCY COPIED ✓' : 'COPY EMAIL ADDRESS'}</span>
              </button>
            </div>

            {/* GitHub Profile Node */}
            <a
              id="github-profile-link"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#11120F] border border-white/10 p-4 flex flex-col justify-between gap-3 hover:border-[#65C7E8]/50 hover:bg-[#151713] transition-all group"
            >
              <div className="flex justify-between items-center text-xs font-mono-tech text-[#85857B]">
                <span>REPOSITORY VAULT</span>
                <Github className="w-4 h-4 text-[#65C7E8] group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-oswald text-base font-bold text-[#E8E5D8] group-hover:text-[#65C7E8] uppercase tracking-wider">
                GITHUB REPOSITORIES
              </span>
              <span className="font-mono-tech text-[10px] text-[#85857B] group-hover:text-[#65C7E8]">
                INSPECT SOURCE CODE →
              </span>
            </a>

            {/* LinkedIn Profile Node */}
            <a
              id="linkedin-profile-link"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#11120F] border border-white/10 p-4 flex flex-col justify-between gap-3 hover:border-[#68742C]/80 hover:bg-[#151713] transition-all group"
            >
              <div className="flex justify-between items-center text-xs font-mono-tech text-[#85857B]">
                <span>PROFESSIONAL DOSSIER</span>
                <Linkedin className="w-4 h-4 text-[#8CA137] group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-oswald text-base font-bold text-[#E8E5D8] group-hover:text-[#8CA137] uppercase tracking-wider">
                LINKEDIN NETWORK
              </span>
              <span className="font-mono-tech text-[10px] text-[#85857B] group-hover:text-[#8CA137]">
                VIEW NETWORK RECORD →
              </span>
            </a>

            {/* LeetCode Node */}
            <a
              id="leetcode-profile-link"
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#11120F] border border-white/10 p-4 flex flex-col justify-between gap-3 hover:border-[#D6B94C]/50 hover:bg-[#151713] transition-all group"
            >
              <div className="flex justify-between items-center text-xs font-mono-tech text-[#85857B]">
                <span>500+ PROBLEMS RECORD</span>
                <Code2 className="w-4 h-4 text-[#D6B94C] group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-oswald text-base font-bold text-[#E8E5D8] group-hover:text-[#D6B94C] uppercase tracking-wider">
                LEETCODE PROFILE
              </span>
              <span className="font-mono-tech text-[10px] text-[#85857B] group-hover:text-[#D6B94C]">
                500+ PROBLEMS VERIFIED →
              </span>
            </a>

          </div>

        </div>

        {/* Right Column: Classified Transmission Terminal (Form) */}
        <div className="lg:col-span-6 bg-[#11120F] border-2 border-[#D6B94C] p-6 sm:p-8 shadow-[0_0_35px_rgba(214,185,76,0.15)]">
          
          <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-6">
            <span className="font-mono-tech text-xs text-[#D6B94C] font-bold uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>TRANSMISSION DISPATCH TERMINAL</span>
            </span>
            <span className="font-mono-tech text-[10px] text-[#85857B]">FREQ: 144.200 MHz</span>
          </div>

          {formSent ? (
            <div className="bg-[#080907] border border-[#68742C] p-6 text-center flex flex-col items-center gap-3">
              <Check className="w-10 h-10 text-[#8CA137]" />
              <h4 className="font-oswald text-xl font-bold text-[#E8E5D8] uppercase tracking-wider">
                TRANSMISSION DISPATCHED TO LAB
              </h4>
              <p className="font-mono-tech text-xs text-[#85857B]">
                Opening mail client for direct encrypted handshake with Varunraj P.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSendMessage} className="space-y-4 font-mono-tech text-xs">
              
              <div>
                <label className="text-[#85857B] block uppercase tracking-wider mb-1">
                  OPERATIVE / SENDER NAME:
                </label>
                <input
                  id="contact-sender-name"
                  type="text"
                  required
                  placeholder="e.g. Lead Technical Recruiter / Engineering Manager"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full bg-[#080907] border border-white/20 px-3.5 py-2.5 text-[#E8E5D8] focus:border-[#D6B94C] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[#85857B] block uppercase tracking-wider mb-1">
                  RETURN FREQUENCY (EMAIL):
                </label>
                <input
                  id="contact-sender-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full bg-[#080907] border border-white/20 px-3.5 py-2.5 text-[#E8E5D8] focus:border-[#D6B94C] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[#85857B] block uppercase tracking-wider mb-1">
                  EXPERIMENT PARAMETERS / PROPOSAL:
                </label>
                <textarea
                  id="contact-sender-message"
                  required
                  rows={4}
                  placeholder="Detail your engineering project, hiring opportunity, or technical inquiry..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#080907] border border-white/20 px-3.5 py-2.5 text-[#E8E5D8] focus:border-[#D6B94C] focus:outline-none resize-none"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full bg-[#D6B94C] hover:bg-[#e4c965] text-[#080907] font-oswald text-base font-bold py-3 tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(214,185,76,0.3)] hover:shadow-[0_0_30px_rgba(214,185,76,0.5)] cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] text-[#85857B] text-center pt-1">
                CLASSIFICATION GUARANTEE: DIRECT INBOX DELIVERY WITH ZERO DATA LEAKAGE
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
