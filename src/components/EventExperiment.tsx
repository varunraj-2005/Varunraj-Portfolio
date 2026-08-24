import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Camera, CheckCircle2, Navigation, Radio, Users, Award } from 'lucide-react';

export const EventExperiment: React.FC = () => {
  const [activeStep, setActiveStep] = useState(6);
  const [isVerifying, setIsVerifying] = useState(false);

  const verificationStages = [
    { step: 1, label: 'STUDENT REGISTRATION', desc: 'Secure student profile authentication' },
    { step: 2, label: 'TEAM FORMATION', desc: 'Cross-department squad composition' },
    { step: 3, label: 'FACULTY APPROVAL', desc: 'Encrypted dean & mentor authorization' },
    { step: 4, label: 'LIVE GEOTAG VERIFICATION', desc: 'HTML5 Geolocation campus boundary check' },
    { step: 5, label: 'DEVICE CAMERA CAPTURE', desc: 'Instant photo verification against spoofing' },
    { step: 6, label: 'TAMPER-PROOF VERIFIED', desc: 'Attendance and attendance certificate issued' },
  ];

  const handleSimulateVerification = () => {
    setIsVerifying(true);
    setActiveStep(1);
    const intervals = [300, 600, 900, 1200, 1500, 1800];

    intervals.forEach((t, index) => {
      setTimeout(() => {
        setActiveStep(index + 1);
        if (index === intervals.length - 1) {
          setIsVerifying(false);
        }
      }, t);
    });
  };

  return (
    <div className="bg-[#080907] border-2 border-[#D6B94C]/40 p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(214,185,76,0.15)] relative overflow-hidden">
      
      {/* Subtle background radar ring */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#D6B94C]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Element Tile */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        
        <div className="flex items-center gap-4">
          {/* Element Tile: Ev */}
          <div className="w-16 h-20 bg-[#11120F] border-2 border-[#D6B94C] p-2 flex flex-col justify-between text-left shadow-[0_0_20px_rgba(214,185,76,0.25)]">
            <div className="flex justify-between text-[9px] font-mono-tech text-[#D6B94C]">
              <span>02</span>
              <span>GEO</span>
            </div>
            <span className="font-bebas text-3xl leading-none text-[#D6B94C] text-center my-auto">
              Ev
            </span>
            <div className="font-mono-tech text-[7px] text-[#85857B] uppercase tracking-tighter truncate">
              EVENTS
            </div>
          </div>

          <div>
            <span className="font-mono-tech text-xs text-[#D6B94C] font-bold uppercase tracking-widest block">
              EXPERIMENT 02 // FULL STACK WEB &amp; SECURITY
            </span>
            <h3 className="font-bebas text-2xl sm:text-3xl md:text-4xl text-[#E8E5D8] tracking-wide uppercase">
              COLLEGE EVENT MANAGEMENT SYSTEM
            </h3>
            <span className="font-mono-tech text-[10px] text-[#85857B]">
              TECH STACK: JAVA / FULL STACK, GEOLOCATION API, DEVICE CAMERA VERIFICATION, ANTI-FRAUD
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          id="simulate-event-verification-btn"
          onClick={handleSimulateVerification}
          disabled={isVerifying}
          className="border border-[#D6B94C] bg-[#D6B94C]/10 hover:bg-[#D6B94C] text-[#D6B94C] hover:text-[#080907] px-4 py-2 font-mono-tech text-xs font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2"
        >
          <Radio className={`w-3.5 h-3.5 ${isVerifying ? 'animate-spin' : 'animate-pulse'}`} />
          <span>{isVerifying ? 'RUNNING GEOTAG VERIFICATION...' : 'RE-RUN VERIFICATION ENGINE'}</span>
        </button>
      </div>

      {/* Verification Pipeline Step Tracker */}
      <div className="mb-8">
        <span className="font-mono-tech text-[10px] text-[#85857B] uppercase tracking-widest block mb-3">
          SIX-POINT ANTI-FRAUD VERIFICATION PIPELINE
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 font-mono-tech text-xs">
          {verificationStages.map((stage) => (
            <div
              key={stage.step}
              className={`p-3 border flex flex-col justify-between transition-all ${
                activeStep >= stage.step
                  ? 'bg-[#11120F] border-[#D6B94C] text-[#D6B94C] shadow-[0_0_10px_rgba(214,185,76,0.15)]'
                  : 'bg-[#080907] border-white/10 text-[#85857B]'
              }`}
            >
              <div className="flex justify-between items-center text-[9px] mb-1.5">
                <span>0{stage.step}</span>
                {activeStep >= stage.step && <CheckCircle2 className="w-3 h-3 text-[#D6B94C]" />}
              </div>
              <span className="font-bold text-[10px] uppercase tracking-wider">{stage.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Showcase: Campus Radar Map + Evidence Snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Interactive Dark Campus Radar Simulation */}
        <div className="lg:col-span-7 bg-[#11120F] border border-white/10 p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3 font-mono-tech text-xs">
            <span className="text-[#D6B94C] font-bold flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5" />
              <span>LIVE CAMPUS RADAR // GEOFENCE ACTIVE</span>
            </span>
            <span className="text-[#85857B]">ZONE: VSB-AUDITORIUM-A</span>
          </div>

          {/* Radar Screen Area */}
          <div className="relative h-64 sm:h-72 bg-[#080907] border border-white/10 flex items-center justify-center overflow-hidden">
            {/* Grid concentric rings */}
            <div className="absolute w-56 h-56 rounded-full border border-white/5" />
            <div className="absolute w-40 h-40 rounded-full border border-white/10" />
            <div className="absolute w-24 h-24 rounded-full border border-[#D6B94C]/30" />
            
            {/* Crosshairs */}
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/10" />
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/10" />

            {/* Sweep radar beam */}
            <div className="absolute w-28 h-28 border-r border-[#D6B94C]/80 bg-gradient-to-tr from-transparent via-[#D6B94C]/10 to-[#D6B94C]/30 animate-spin origin-bottom-left" style={{ bottom: '50%', left: '50%' }} />

            {/* Geofence Checkpoints */}
            <div className="absolute top-16 left-24 flex items-center gap-1 font-mono-tech text-[9px] text-[#65C7E8]">
              <div className="w-2 h-2 rounded-full bg-[#65C7E8] animate-ping" />
              <span>CHECKPOINT-ALPHA</span>
            </div>

            <div className="absolute bottom-16 right-24 flex items-center gap-1 font-mono-tech text-[9px] text-[#D6B94C]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D6B94C]" />
              <span>VSB MAIN AUDITORIUM</span>
            </div>

            {/* Center Lock Target */}
            <div className="relative z-10 bg-[#11120F] border border-[#D6B94C] px-3 py-1.5 font-mono-tech text-xs text-[#E8E5D8] flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D6B94C]" />
              <span>GEO-LOCK: 10.9601° N, 78.0766° E</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono-tech text-[10px] text-[#85857B] pt-1">
            <div className="border border-white/5 p-2 bg-[#080907]">
              <span>RADIUS TOLERANCE:</span>
              <span className="block text-[#E8E5D8] font-bold">± 15 METERS</span>
            </div>
            <div className="border border-white/5 p-2 bg-[#080907]">
              <span>SPOOF RESISTANCE:</span>
              <span className="block text-[#68742C] font-bold">HARDENED</span>
            </div>
            <div className="border border-white/5 p-2 bg-[#080907]">
              <span>CAPTURE LATENCY:</span>
              <span className="block text-[#E8E5D8] font-bold">&lt; 240 MS</span>
            </div>
            <div className="border border-white/5 p-2 bg-[#080907]">
              <span>INTEGRITY STATUS:</span>
              <span className="block text-[#D6B94C] font-bold">VALIDATED</span>
            </div>
          </div>
        </div>

        {/* Right: Mock Evidence Photo & Status Overlays */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-[#11120F] border border-white/10 p-6 flex flex-col gap-4">
            
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-mono-tech text-xs text-[#D6B94C] font-bold uppercase tracking-wider">
                EVIDENCE RECORD // ATTENDANCE CERT
              </span>
              <span className="font-mono-tech text-[10px] text-[#85857B]">REF #EV-7729</span>
            </div>

            {/* Evidence Snapshot Card with Overlays */}
            <div className="relative bg-[#080907] border border-white/20 p-4 font-mono-tech text-xs flex flex-col gap-3">
              
              {/* Evidence Stamps */}
              <div className="space-y-2">
                <div className="flex items-center justify-between border border-[#68742C]/40 bg-[#68742C]/10 p-2 text-[#8CA137]">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>GPS VERIFIED</span>
                  </span>
                  <span className="font-bold">✓ MATCHED</span>
                </div>

                <div className="flex items-center justify-between border border-[#68742C]/40 bg-[#68742C]/10 p-2 text-[#8CA137]">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>TIMESTAMP VERIFIED</span>
                  </span>
                  <span className="font-bold">✓ 2026.08.23</span>
                </div>

                <div className="flex items-center justify-between border border-[#68742C]/40 bg-[#68742C]/10 p-2 text-[#8CA137]">
                  <span className="flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5" />
                    <span>DEVICE CAPTURE</span>
                  </span>
                  <span className="font-bold">✓ LIVE FRAME</span>
                </div>
              </div>

              {/* Status Banner */}
              <div className="border-2 border-[#D6B94C] bg-[#D6B94C]/10 p-3 text-center">
                <span className="font-oswald text-lg font-bold text-[#D6B94C] tracking-widest uppercase block">
                  STATUS: VERIFIED
                </span>
                <span className="font-mono-tech text-[9px] text-[#85857B]">
                  CRYPTOGRAPHIC TOKEN ISSUED // ZERO PROXY DETECTED
                </span>
              </div>
            </div>

            {/* Architectural Note */}
            <p className="font-mono-tech text-xs text-[#85857B] leading-relaxed">
              Designed to solve proxy attendance in collegiate symposiums by pairing browser Geolocation boundaries with real-time camera capture verification.
            </p>

          </div>
        </div>

      </div>

    </div>
  );
};
