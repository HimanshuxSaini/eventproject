import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ThreeHeroScene } from './ThreeHeroScene';

interface HeroSectionProps {
  onPlanClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlanClick, onExploreClick }) => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#101114]">
      {/* 3D WebGL Ballroom / Stage Canvas */}
      <div className="absolute inset-0 z-0">
        <ThreeHeroScene />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center pointer-events-none">
        {/* Subtle Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101114]/70 backdrop-blur-md border border-[#C9A66B]/30 mb-8 pointer-events-auto shadow-lg animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#F7F3EB]">
            EVENTS • EXPERIENCES • EXCELLENCE
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F7F3EB] leading-[1.08] tracking-tight max-w-4xl mx-auto drop-shadow-xl">
          We Create Experiences <br />
          <span className="italic font-light text-[#E0C38B]">That Stay With You.</span>
        </h1>

        {/* Supporting Editorial Subtitle */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#D8D1C5] max-w-2xl mx-auto font-light leading-relaxed">
          Exceptional weddings, corporate gatherings, and celebrations — thoughtfully planned and flawlessly executed across Delhi NCR.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pointer-events-auto">
          <button
            onClick={onPlanClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#101114] bg-[#C9A66B] hover:bg-[#E0C38B] transition-all duration-300 shadow-xl hover:shadow-[#C9A66B]/25 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Plan Your Event</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#F7F3EB] bg-[#24262B]/80 hover:bg-[#24262B] border border-[#C9A66B]/30 hover:border-[#C9A66B] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Our Work</span>
          </button>
        </div>
      </div>
    </section>
  );
};

