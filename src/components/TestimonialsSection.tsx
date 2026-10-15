import React from 'react';
import { Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/eventData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#16181d] border-t border-[#24262B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B] block mb-3">
            CLIENT PERSPECTIVES
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#F7F3EB] font-normal leading-tight">
            Experiences That <br />
            <span className="italic font-light text-[#E0C38B]">Speak for Themselves.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D8D1C5] font-light leading-relaxed max-w-2xl mx-auto">
            Reflections from patrons, corporate leaders, and families whose milestone moments we have had the honor to orchestrate.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-[#101114] border border-[#24262B] hover:border-[#C9A66B]/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <Quote className="w-8 h-8 text-[#C9A66B]/50 mb-4" />
                <p className="text-xs sm:text-sm text-[#D8D1C5] font-light leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#24262B]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-[#F7F3EB]">
                      {t.clientName}
                    </h4>
                    <p className="text-xs text-[#C9A66B] font-medium mt-0.5">
                      {t.companyOrRole}
                    </p>
                  </div>
                  {t.isVerified && (
                    <span
                      className="flex items-center gap-1 text-[10px] text-[#C9A66B] bg-[#C9A66B]/10 px-2 py-0.5 rounded-full border border-[#C9A66B]/20"
                      title="Verified Client Feedback"
                    >
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-[#D8D1C5]/60 font-light">
                  <span>{t.eventType}</span>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prototype Honesty Notice */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-[#D8D1C5]/50 max-w-xl mx-auto">
            *Representative feedback format configured for client review. All verified customer testimonials, signed press quotes, and official video walkthroughs are archived in our concierge presentation portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};
