import React from 'react';
import { SectionLabel } from './SectionLabel';
import { SentimentExperiment } from './SentimentExperiment';
import { CrystalTransition } from './CrystalTransition';
import { EventExperiment } from './EventExperiment';

export const ProjectsSection: React.FC = () => {
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

      <div className="flex flex-col gap-8">
        {/* Experiment 01 */}
        <SentimentExperiment />

        {/* Transition: Blue Chemical Crystal Synthesis */}
        <CrystalTransition />

        {/* Experiment 02 */}
        <EventExperiment />
      </div>
    </section>
  );
};
