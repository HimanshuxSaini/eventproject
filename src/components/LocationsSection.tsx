import React, { useState } from 'react';
import { MapPin, Building2, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { NCR_LOCATIONS } from '../data/eventData';
import { NCRLocation } from '../types';

interface LocationsSectionProps {
  onSelectCityInquiry: (city: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectCityInquiry }) => {
  const [selectedLocation, setSelectedLocation] = useState<NCRLocation>(NCR_LOCATIONS[0]);

  return (
    <section id="locations" className="relative py-28 bg-[#101114] border-t border-[#24262B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B] block mb-3">
            TERRITORY EXPERTISE
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#F7F3EB] font-normal leading-tight">
            Creating Experiences <br />
            <span className="italic font-light text-[#E0C38B]">Across Delhi NCR.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D8D1C5] font-light leading-relaxed max-w-2xl mx-auto">
            Deep-rooted local logistics, municipal clearances, and trusted relationships across the National Capital Region’s most prestigious venues.
          </p>
        </div>

        {/* Location Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {NCR_LOCATIONS.map((loc) => {
            const isSelected = selectedLocation.city === loc.city;
            return (
              <button
                key={loc.city}
                onClick={() => setSelectedLocation(loc)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#C9A66B] text-[#101114] font-semibold shadow-md'
                    : 'bg-[#16181d] text-[#D8D1C5] hover:text-[#F7F3EB] border border-[#24262B]'
                }`}
              >
                {loc.city}
              </button>
            );
          })}
        </div>

        {/* Featured Location Deep-Dive Card */}
        <div className="bg-[#16181d] border border-[#C9A66B]/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C9A66B] uppercase tracking-widest">
                <MapPin className="w-4 h-4" />
                <span>{selectedLocation.city} Production Hub</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-4xl text-[#F7F3EB]">
                {selectedLocation.headline}
              </h3>

              <p className="text-sm text-[#D8D1C5] font-light leading-relaxed">
                {selectedLocation.description}
              </p>

              {/* Core Service Focus for this Region */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-widest text-[#C9A66B] font-semibold mb-2.5">
                  Frequent Productions in {selectedLocation.city}:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedLocation.serviceFocus.map((focus, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#D8D1C5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onSelectCityInquiry(selectedLocation.city)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#101114] bg-[#C9A66B] hover:bg-[#E0C38B] transition-colors cursor-pointer shadow-md"
                >
                  <span>Plan Event in {selectedLocation.city}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Venue Showcase Column */}
            <div className="lg:col-span-5 bg-[#101114] border border-[#24262B] rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#E0C38B] font-semibold uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#C9A66B]" />
                <span>Premier Partner Venues</span>
              </div>

              <p className="text-xs text-[#D8D1C5]/70">
                Venues with established production protocols, rigging clearances, and acoustic mapping:
              </p>

              <div className="space-y-2.5 pt-1">
                {selectedLocation.popularVenues.map((venue, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#16181d] border border-white/5 text-xs text-[#F7F3EB] flex items-center justify-between"
                  >
                    <span>{venue}</span>
                    <span className="text-[10px] text-[#C9A66B] font-mono tracking-wider">READY</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Localized Search Intent Badges */}
        <div className="mt-12 text-center">
          <p className="text-[11px] uppercase tracking-widest text-[#D8D1C5]/50">
            Wedding Planner in Gurugram • Corporate Event Management in Delhi • Event Planner in Noida • Farmhouse Galas in Faridabad
          </p>
        </div>
      </div>
    </section>
  );
};
