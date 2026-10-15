import React from 'react';
import { Sparkles, ShieldCheck, Sliders, Award } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/eventData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C9A66B]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C9A66B]" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-[#C9A66B]" />;
      case 'Award':
      default:
        return <Award className="w-6 h-6 text-[#C9A66B]" />;
    }
  };

  return (
    <section className="relative py-28 bg-[#16181d]/80 backdrop-blur-[2px] border-t border-[#24262B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B] block mb-3">
            THE MIDNIGHT LUXE STANDARD
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#F7F3EB] font-normal leading-tight">
            Every Detail. <br />
            <span className="italic font-light text-[#E0C38B]">Thoughtfully Delivered.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D8D1C5] font-light leading-relaxed max-w-2xl mx-auto">
            Crafting flawless events demands both creative audacity and operational rigor. Here is how we guarantee an unmatched experience for every client.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_DATA.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-[#101114] border border-[#24262B] hover:border-[#C9A66B]/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#C9A66B]/5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#24262B] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-[#C9A66B] bg-[#24262B]/80 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl text-[#F7F3EB] group-hover:text-[#E0C38B] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#D8D1C5] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Minimal Bottom Divider */}
              <div className="mt-8 pt-4 border-t border-[#24262B]/60 flex items-center justify-between text-[11px] text-[#D8D1C5]/50">
                <span>Standard 0{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-[#C9A66B]/50 group-hover:bg-[#C9A66B] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
