import React, { useState } from 'react';
import { TIMELINE_STEPS } from '../data/eventData';
import { Check, ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-[#101114] border-t border-[#24262B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B] block mb-3">
            METHODOLOGY
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#F7F3EB] font-normal leading-tight">
            From First Conversation <br />
            <span className="italic font-light text-[#E0C38B]">to Final Applause.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D8D1C5] font-light leading-relaxed max-w-2xl mx-auto">
            A disciplined four-phase production framework built to eliminate uncertainty and ensure absolute artistic and logistic cohesion.
          </p>
        </div>

        {/* 4-Step Interactive Timeline Tabs on Desktop / Cards on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative">
          {TIMELINE_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isActive
                    ? 'bg-[#1a1c22] border-[#C9A66B] shadow-xl shadow-[#C9A66B]/10 -translate-y-1'
                    : 'bg-[#16181d] border-[#24262B] hover:border-[#C9A66B]/40 hover:bg-[#181a20]'
                }`}
              >
                {/* Step Top Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-light text-[#C9A66B]">
                      {step.number}
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full ${
                        isActive
                          ? 'bg-[#C9A66B] text-[#101114]'
                          : 'bg-[#24262B] text-[#D8D1C5]'
                      }`}
                    >
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl text-[#F7F3EB] mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D8D1C5] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Deliverables */}
                <div className="mt-6 pt-4 border-t border-[#24262B]">
                  <span className="text-[10px] uppercase tracking-wider text-[#C9A66B] font-semibold block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#D8D1C5]">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Connecting Indicator */}
        <div className="mt-12 text-center text-xs text-[#D8D1C5]/70 flex items-center justify-center gap-2">
          <span>Click each phase to explore our planning cadence</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C9A66B]" />
        </div>
      </div>
    </section>
  );
};
