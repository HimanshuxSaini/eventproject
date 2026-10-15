import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  Layers, 
  ChevronRight, 
  ChevronLeft,
  Calendar,
  MessageCircle,
  FileCheck2,
  Workflow
} from 'lucide-react';
import { DETAILED_PROCESS_PHASES, RUN_OF_SHOW_TIMELINE, BRAND_CONFIG } from '../data/eventData';

interface ProcessSectionProps {
  onPlanClick: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onPlanClick }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [activeRunItemIndex, setActiveRunItemIndex] = useState(0);

  const activePhase = DETAILED_PROCESS_PHASES[activePhaseIndex];

  const handleNextPhase = () => {
    setActivePhaseIndex((prev) => (prev + 1) % DETAILED_PROCESS_PHASES.length);
  };

  const handlePrevPhase = () => {
    setActivePhaseIndex((prev) => (prev - 1 + DETAILED_PROCESS_PHASES.length) % DETAILED_PROCESS_PHASES.length);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello ${BRAND_CONFIG.name}, I reviewed your 5-phase production methodology and would like to schedule a consultation for an upcoming event.`
    );
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="process" className="relative py-28 bg-[#101114]/85 backdrop-blur-[2px] border-t border-[#24262B]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101114]/80 backdrop-blur-md border border-[#C9A66B]/30 mb-4 shadow-sm">
            <Workflow className="w-3.5 h-3.5 text-[#C9A66B]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#F7F3EB]">
              PRODUCTION METHODOLOGY
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#F7F3EB] font-normal leading-tight">
            The Art of Certainty. <br />
            <span className="italic font-light text-[#E0C38B]">From Inception to Ovation.</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#D8D1C5] font-light leading-relaxed max-w-2xl mx-auto">
            A disciplined five-phase framework engineered to eliminate operational friction and elevate every private or corporate gathering into a transcendent milestone.
          </p>
        </div>

        {/* Phase Navigator Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5 mb-12">
          {DETAILED_PROCESS_PHASES.map((phase, idx) => {
            const isActive = activePhaseIndex === idx;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 border cursor-pointer relative overflow-hidden group ${
                  isActive
                    ? 'bg-[#181a20] border-[#C9A66B] shadow-lg shadow-[#C9A66B]/10 -translate-y-0.5'
                    : 'bg-[#121317]/80 hover:bg-[#16181d] border-[#24262B] hover:border-[#C9A66B]/40'
                }`}
              >
                {/* Active Indicator Top Accent */}
                {isActive && (
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#C9A66B] via-[#E0C38B] to-[#C9A66B]" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-semibold ${isActive ? 'text-[#E0C38B]' : 'text-[#C9A66B]/70'}`}>
                    PHASE {phase.number}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-[#D8D1C5]/60 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5 text-[#C9A66B]/60" />
                    <span>{phase.duration}</span>
                  </span>
                </div>

                <h4 className={`text-xs sm:text-sm font-medium line-clamp-1 transition-colors ${isActive ? 'text-[#F7F3EB]' : 'text-[#D8D1C5] group-hover:text-[#F7F3EB]'}`}>
                  {phase.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Phase Detailed Showcase Panel */}
        <div className="bg-[#14151b]/90 border border-[#24262B] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Gold Glow in Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A66B]/5 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Phase Meta Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#C9A66B]/15 text-[#E0C38B] border border-[#C9A66B]/30">
                  {activePhase.phase}
                </span>
                <span className="text-xs text-[#D8D1C5]/70 flex items-center gap-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#C9A66B]" />
                  <span>Timeline: {activePhase.duration}</span>
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-editorial text-2xl sm:text-4xl text-[#F7F3EB] font-normal leading-snug">
                  {activePhase.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#E0C38B]/90 font-light italic">
                  "{activePhase.subtitle}"
                </p>
              </div>

              {/* In-Depth Description */}
              <p className="text-sm sm:text-base text-[#D8D1C5] font-light leading-relaxed">
                {activePhase.description}
              </p>

              {/* Key Workflow Pillars */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[#C9A66B] font-semibold block">
                  Workflow Pillars & Execution Focus:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activePhase.workflowItems.map((item, wIdx) => (
                    <div key={wIdx} className="p-3 rounded-xl bg-[#181a20] border border-white/5 space-y-1">
                      <div className="text-xs font-medium text-[#F7F3EB] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B]" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-[#D8D1C5]/80 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables Matrix */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[#C9A66B] font-semibold block mb-3">
                  Tangible Deliverables Handed to Client:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePhase.keyDeliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#D8D1C5] font-light">
                      <FileCheck2 className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Director's Principle Quote */}
              <div className="p-4 rounded-xl bg-[#101114]/80 border-l-2 border-[#C9A66B] text-xs sm:text-sm text-[#D8D1C5] italic font-light">
                "{activePhase.milestoneQuote}"
              </div>

            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
              
              {/* Production Photography Card with Metric Overlay */}
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-[#C9A66B]/30 shadow-2xl group">
                <img
                  src={activePhase.imageUrl}
                  alt={activePhase.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/20 to-transparent" />

                {/* Metric Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#101114]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#D8D1C5]/70 block font-semibold">
                      Production Benchmark
                    </span>
                    <span className="text-xs text-[#F7F3EB] font-light">
                      {activePhase.statBadge.label}
                    </span>
                  </div>
                  <span className="font-editorial text-2xl font-light text-[#E0C38B]">
                    {activePhase.statBadge.value}
                  </span>
                </div>
              </div>

              {/* Phase Switch Controls */}
              <div className="w-full flex items-center justify-between gap-4 pt-2">
                <button
                  onClick={handlePrevPhase}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#D8D1C5] bg-[#181a20] hover:bg-[#20222a] border border-[#24262B] hover:border-[#C9A66B]/40 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-[#C9A66B]" />
                  <span>Previous Phase</span>
                </button>

                <button
                  onClick={handleNextPhase}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#101114] bg-[#C9A66B] hover:bg-[#E0C38B] transition-all shadow-md cursor-pointer"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-4 h-4 text-[#101114]" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Event Day Run-of-Show Timeline Feature */}
        <div className="mt-20 pt-16 border-t border-[#24262B]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B] block mb-2">
              DAY-OF-EVENT EXECUTION
            </span>
            <h3 className="font-editorial text-2xl sm:text-4xl text-[#F7F3EB] font-normal">
              The 24-Hour Run of Show
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#D8D1C5] font-light leading-relaxed">
              Explore how our on-site Command Team directs every micro-second on event day to ensure zero visible friction.
            </p>
          </div>

          {/* Interactive Run-of-Show Horizontal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {RUN_OF_SHOW_TIMELINE.slice(0, 4).map((item, rIdx) => (
              <div
                key={rIdx}
                className="p-5 rounded-2xl bg-[#14151b] border border-[#24262B] hover:border-[#C9A66B]/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-baseline gap-1 font-mono text-[#E0C38B]">
                      <span className="text-2xl font-light">{item.time}</span>
                      <span className="text-xs font-medium text-[#C9A66B]">{item.period}</span>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-[#24262B] text-[#D8D1C5]">
                      {item.department}
                    </span>
                  </div>

                  <h5 className="font-editorial text-lg text-[#F7F3EB] group-hover:text-[#E0C38B] transition-colors mb-2">
                    {item.title}
                  </h5>

                  <p className="text-xs text-[#D8D1C5] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#D8D1C5]/60 font-mono">
                  <span>Protocol Step 0{rIdx + 1}</span>
                  <Check className="w-3.5 h-3.5 text-[#C9A66B]" />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row of 3 Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {RUN_OF_SHOW_TIMELINE.slice(4).map((item, rIdx) => (
              <div
                key={rIdx}
                className="p-5 rounded-2xl bg-[#14151b] border border-[#24262B] hover:border-[#C9A66B]/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-baseline gap-1 font-mono text-[#E0C38B]">
                      <span className="text-2xl font-light">{item.time}</span>
                      <span className="text-xs font-medium text-[#C9A66B]">{item.period}</span>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-[#24262B] text-[#D8D1C5]">
                      {item.department}
                    </span>
                  </div>

                  <h5 className="font-editorial text-lg text-[#F7F3EB] group-hover:text-[#E0C38B] transition-colors mb-2">
                    {item.title}
                  </h5>

                  <p className="text-xs text-[#D8D1C5] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#D8D1C5]/60 font-mono">
                  <span>Protocol Step 0{rIdx + 5}</span>
                  <Check className="w-3.5 h-3.5 text-[#C9A66B]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Direct Call to Action Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#181a20] via-[#14151b] to-[#181a20] border border-[#C9A66B]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-[#C9A66B] font-semibold block">
              SCHEDULE YOUR PRODUCTION INTAKE
            </span>
            <h4 className="font-editorial text-xl sm:text-3xl text-[#F7F3EB] font-normal">
              Ready to Initiate Phase 01 for Your Event?
            </h4>
            <p className="text-xs sm:text-sm text-[#D8D1C5] font-light max-w-xl">
              Our Senior Creative Directors conduct private timeline reviews and venue feasibility studies across Delhi NCR.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onPlanClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#101114] bg-[#C9A66B] hover:bg-[#E0C38B] transition-all shadow-lg hover:shadow-[#C9A66B]/20 cursor-pointer"
            >
              <span>Consult A Director</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppInquiry}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#F7F3EB] bg-[#24262B] hover:bg-[#2c2f36] border border-white/10 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Direct</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
