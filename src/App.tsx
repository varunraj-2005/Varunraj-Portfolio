/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { FilmGrain } from './components/FilmGrain';
import { ParticleBackground } from './components/ParticleBackground';
import { PeriodicNav } from './components/PeriodicNav';
import { SayMyName } from './components/SayMyName';
import { LabIntro } from './components/LabIntro';
import { HeroElement } from './components/HeroElement';
import { SubjectFile } from './components/SubjectFile';
import { ChemistrySection } from './components/ChemistrySection';
import { ProjectsSection } from './components/ProjectsSection';
import { CodingSection } from './components/CodingSection';
import { InternshipSection } from './components/InternshipSection';
import { CertificationVault } from './components/CertificationVault';
import { AchievementsSection } from './components/AchievementsSection';
import { FinalProduct } from './components/FinalProduct';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const hasVisited = (() => {
    try {
      return localStorage.getItem('vp_lab_visited') === 'true';
    } catch {
      return false;
    }
  })();

  // "SAY MY NAME" splash — only on first visit
  const [showSayMyName, setShowSayMyName] = useState<boolean>(!hasVisited);

  const [showIntro, setShowIntro] = useState<boolean>(!hasVisited);

  const [activeSection, setActiveSection] = useState<string>('hero');

  // ScrollSpy for Active Section Navigation
  useEffect(() => {
    const sections = [
      'hero',
      'subject-profile',
      'chemistry',
      'experiments',
      'numbers',
      'internship',
      'certifications',
      'achievements',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  const handleReplayIntro = () => {
    setShowSayMyName(true);
    setShowIntro(true);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-[#080907] text-[#E8E5D8] relative selection:bg-[#D6B94C] selection:text-[#080907]">
      {/* Visual textures: film grain, scanlines & ambient dust particles */}
      <FilmGrain />
      <ParticleBackground />

      {/* "SAY MY NAME" — cinematic splash before intro sequence */}
      <AnimatePresence>
        {showSayMyName && (
          <SayMyName onComplete={() => setShowSayMyName(false)} />
        )}
      </AnimatePresence>

      {/* Cinematic Opening Sequence */}
      <AnimatePresence>
        {!showSayMyName && showIntro && (
          <LabIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Application */}
      <div className={`transition-opacity duration-700 ${(showSayMyName || showIntro) ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        {/* Periodic Navigation Bar */}
        <PeriodicNav
          activeSection={activeSection}
          onSelectSection={handleScrollToSection}
          onReopenIntro={handleReplayIntro}
        />

        <main id="main-content">
          {/* Hero Section with Giant Element 23 V */}
          <HeroElement
            onExploreClick={() => handleScrollToSection('subject-profile')}
            onProjectsClick={() => handleScrollToSection('experiments')}
          />

          {/* Section 001: Subject Profile (DEA case file + developer dossier) */}
          <SubjectFile />

          {/* Section 002: Chemistry / The Elements (Skills Grid) */}
          <ChemistrySection />

          {/* Section 003: The Experiments (Sentiment ABSA + Campus Geotag Radar) */}
          <ProjectsSection />

          {/* Section 004: The Numbers (500+ LeetCode & HackerRank 5★ Java) */}
          <CodingSection />

          {/* Section 005: The Connection (Infosys Virtual Internship) */}
          <InternshipSection />

          {/* Section 006: Lab Records (NPTEL, NASSCOM, Infosys Springboard) */}
          <CertificationVault />

          {/* Section 007: The Results (Sequential Scientific Measurements) */}
          <AchievementsSection />

          {/* Emotional Climax: The Final Product (Blue Crystal Synthesis) */}
          <FinalProduct />

          {/* Section 008: The Deal (Contact & Transmission Terminal) */}
          <ContactSection />
        </main>

        {/* Lab Footer */}
        <Footer onScrollToTop={handleScrollToTop} />
      </div>
    </div>
  );
}
