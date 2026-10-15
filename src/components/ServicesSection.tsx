import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/eventData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { Skiper49 } from './Skiper49';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-28 bg-[#101114]/85 backdrop-blur-[2px] border-t border-[#24262B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B] block mb-3">
            OUR EXPERTISE
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#F7F3EB] font-normal leading-tight">
            Exceptional Events. <br />
            <span className="italic font-light text-[#E0C38B]">Unforgettable Experiences.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-[#D8D1C5] font-light leading-relaxed max-w-2xl mx-auto">
            From intimate celebrations to extraordinary productions, we bring every occasion to life with thoughtful planning and seamless execution.
          </p>
        </div>

        {/* Swiper Coverflow Carousel aligned with dark luxury brand identity */}
        <div className="relative rounded-3xl overflow-hidden border border-[#C9A66B]/30 shadow-2xl bg-[#14151b]/85 backdrop-blur-md transition-all">
          {/* Subtle Ambient Golden Radial Glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#C9A66B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#E0C38B]/10 rounded-full blur-3xl pointer-events-none" />
          <Skiper49 />
        </div>

        {/* Quick Service Links below Carousel */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="px-4 py-2 rounded-full text-xs font-medium text-[#D8D1C5] hover:text-[#E0C38B] bg-[#16181d] hover:bg-[#24262B] border border-[#24262B] hover:border-[#C9A66B]/50 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>{service.title}</span>
              <ArrowUpRight className="w-3 h-3 text-[#C9A66B]" />
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceName) => {
          onSelectServiceForInquiry(serviceName);
        }}
      />
    </section>
  );
};
