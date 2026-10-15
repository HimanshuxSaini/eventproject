import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onPlanClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlanClick, onExploreClick }) => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden bg-transparent">
      {/* Hero Content Container - Balanced for Center 3D Chandelier Presence */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-20 pointer-events-none grid grid-cols-1 lg:grid-cols-12 items-center gap-8 min-h-screen">
        {/* Left Column: Headline, Copy & CTAs */}
        <div className="lg:col-span-6 xl:col-span-6 text-left pointer-events-auto max-w-xl">
          {/* Soft Localized Backdrop for text readability without dimming the 3D ballroom */}
          <div className="absolute -inset-x-8 -inset-y-12 max-w-xl bg-radial from-[#101114]/85 via-[#101114]/30 to-transparent blur-3xl -z-10 pointer-events-none" />

          {/* Subtle Brand Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101114]/80 backdrop-blur-md border border-[#C9A66B]/30 mb-6 sm:mb-8 shadow-lg animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#F7F3EB]">
              EVENTS • EXPERIENCES • EXCELLENCE
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal text-[#F7F3EB] leading-[1.06] tracking-tight drop-shadow-2xl">
            We Create Experiences <br />
            <span className="italic font-light text-[#E0C38B]">That Stay With You.</span>
          </h1>

          {/* Supporting Editorial Subtitle */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#D8D1C5] max-w-lg font-light leading-relaxed">
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

        {/* Right Column: Open Ballroom Stage framing the centered 3D chandelier */}
        <div className="hidden lg:block lg:col-span-6 xl:col-span-6 pointer-events-none min-h-[460px]" />
      </div>

      {/* Gentle bottom gradient transition into subsequent sections */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#101114]/85" />
    </section>
  );
};

