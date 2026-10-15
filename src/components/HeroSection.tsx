import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ThreeHeroScene } from './ThreeHeroScene';

interface HeroSectionProps {
  onPlanClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlanClick, onExploreClick }) => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#101114]">
      {/* 3D WebGL Ballroom / Stage Canvas */}
      <div className="absolute inset-0 z-0">
        <ThreeHeroScene />
      </div>

      {/* Hero Content Container - Aligned to Left Side */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-28 pb-20 pointer-events-none flex items-center">
        <div className="max-w-2xl text-left pointer-events-auto">
          {/* Soft Localized Backdrop for text readability without dimming the 3D ballroom */}
          <div className="absolute -inset-x-8 -inset-y-12 max-w-2xl bg-radial from-[#101114]/90 via-[#101114]/40 to-transparent blur-3xl -z-10 pointer-events-none" />

          {/* Subtle Brand Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101114]/80 backdrop-blur-md border border-[#C9A66B]/30 mb-6 sm:mb-8 shadow-lg animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#F7F3EB]">
              EVENTS • EXPERIENCES • EXCELLENCE
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F7F3EB] leading-[1.06] tracking-tight drop-shadow-2xl">
            We Create Experiences <br />
            <span className="italic font-light text-[#E0C38B]">That Stay With You.</span>
          </h1>

          {/* Supporting Editorial Subtitle */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#D8D1C5] max-w-xl font-light leading-relaxed">
            Exceptional weddings, corporate gatherings, and celebrations — thoughtfully planned and flawlessly executed across Delhi NCR.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4">
            <button
              onClick={onPlanClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#101114] bg-[#C9A66B] hover:bg-[#E0C38B] transition-all duration-300 shadow-xl hover:shadow-[#C9A66B]/25 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Plan Your Event</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#F7F3EB] bg-[#24262B]/80 hover:bg-[#24262B] border border-[#C9A66B]/30 hover:border-[#C9A66B] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Our Work</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

