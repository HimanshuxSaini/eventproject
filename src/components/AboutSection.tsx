import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Award, Clock, MapPin, Sparkles } from 'lucide-react';
import { STATS_DATA } from '../data/eventData';

export const AboutSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate statistics smoothly
          const duration = 1800;
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const newCounts = STATS_DATA.map((stat) => Math.floor(stat.value * easeOut));
            setCounts(newCounts);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCounts(STATS_DATA.map((s) => s.value));
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about" className="relative py-28 bg-[#101114]/85 backdrop-blur-[2px] border-t border-[#24262B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C9A66B]/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Event Production Venue"
                className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-transparent to-transparent opacity-60" />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#16181d]/90 backdrop-blur-md border border-[#C9A66B]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9A66B]/20 border border-[#C9A66B] flex items-center justify-center text-[#E0C38B] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-[#C9A66B] font-semibold block">
                      Delhi NCR Regional Heritage
                    </span>
                    <p className="text-xs text-[#F7F3EB] font-medium mt-0.5">
                      Conceiving & producing landmark celebrations across the capital.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold corner frame */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#C9A66B]/40 pointer-events-none rounded-tl-xl" />
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#C9A66B]/40 pointer-events-none rounded-br-xl" />
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B] block mb-3">
                OUR PHILOSOPHY & PRACTICE
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#F7F3EB] font-normal leading-[1.15]">
                Where Vision Meets <br />
                <span className="italic font-light text-[#E0C38B]">Flawless Execution.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#D8D1C5] font-light leading-relaxed">
              We operate at the intersection of architectural scenography, hospitality precision, and live entertainment engineering. Every grand celebration or high-stakes corporate assembly is a living, breathing production where timing, acoustics, lighting temperatures, and guest comfort harmonize in real time.
            </p>

            <p className="text-sm sm:text-base text-[#D8D1C5] font-light leading-relaxed">
              Our seasoned production unit navigates the unique operational landscape of Delhi NCR — from the protocol-driven security clearances of Chanakyapuri and Aerocity to the expansive, open-canvas farmhouse takeovers of Chattarpur and the Aravalli hills of Gurugram.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                { title: 'Attention to Detail', desc: 'Precision in florals, acoustics, and guest pathways.' },
                { title: 'Professional Planning', desc: 'Second-by-second run sheets and vendor oversight.' },
                { title: 'Creative Concepts', desc: 'Custom 3D spatial renders before fabrication begins.' },
                { title: 'Vendor Coordination', desc: 'Vetted network of premier caterers, artists & rigs.' },
              ].map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#16181d] border border-[#24262B]">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#F7F3EB]">{pillar.title}</h4>
                    <p className="text-[11px] text-[#D8D1C5]/70 mt-0.5">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Statistics Banner */}
        <div
          ref={statsRef}
          className="mt-20 pt-12 border-t border-[#24262B] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
        >
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#16181d]/50 border border-[#24262B]/80">
              <div className="font-editorial text-4xl sm:text-5xl text-[#E0C38B] font-light">
                {counts[idx]}
                <span className="text-2xl text-[#C9A66B]">{stat.suffix}</span>
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-[#F7F3EB] font-medium">
                {stat.label}
              </div>
              <div className="mt-1 text-[10px] text-[#D8D1C5]/50">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
