import React, { useState } from 'react';
import { Maximize2, MapPin, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/eventData';
import { PortfolioItem } from '../types';
import { GalleryLightbox } from './GalleryLightbox';

interface PortfolioGalleryProps {
  onInquireItem: (itemTitle: string) => void;
  onPlanClick: () => void;
}

type FilterCategory = 'all' | 'weddings' | 'corporate' | 'celebrations' | 'brand';

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onInquireItem,
  onPlanClick,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  const filters = [
    { label: 'All Events', value: 'all' },
    { label: 'Weddings', value: 'weddings' },
    { label: 'Corporate', value: 'corporate' },
    { label: 'Celebrations', value: 'celebrations' },
    { label: 'Brand Experiences', value: 'brand' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.filterTag === activeFilter);

  return (
    <section id="portfolio" className="relative py-28 bg-[#101114] border-t border-[#24262B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B] block mb-3">
            CURATED PRODUCTIONS
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#F7F3EB] font-normal leading-tight">
            A Glimpse Into <span className="italic font-light text-[#E0C38B]">Our World.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D8D1C5] font-light leading-relaxed max-w-2xl mx-auto">
            Discover the atmosphere, details, and moments that make every event memorable.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as FilterCategory)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-[#C9A66B] text-[#101114] font-semibold shadow-md'
                  : 'bg-[#24262B]/80 text-[#D8D1C5] hover:text-[#F7F3EB] hover:bg-[#24262B]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => {
            // Apply varied card heights for editorial balance
            const isWide = item.aspectRatio === 'wide' || idx === 2;
            const isTall = item.aspectRatio === 'portrait';

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className={`group relative rounded-2xl overflow-hidden bg-[#16181d] border border-[#24262B] hover:border-[#C9A66B]/60 transition-all duration-300 cursor-pointer shadow-lg flex flex-col justify-end ${
                  isWide ? 'md:col-span-2' : ''
                } ${isTall ? 'row-span-2 min-h-[460px]' : 'min-h-[340px]'}`}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Shadows */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                {/* Top Quick Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#F7F3EB] bg-[#101114]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {item.filterTag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#101114]/80 backdrop-blur-md flex items-center justify-center text-[#D8D1C5] group-hover:text-[#E0C38B] border border-white/10 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Content Bar */}
                <div className="relative z-10 p-6 sm:p-7">
                  <div className="flex items-center gap-1.5 text-xs text-[#C9A66B] font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.venueName}, {item.location}</span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F3EB] group-hover:text-[#E0C38B] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#D8D1C5] line-clamp-2 font-light">
                    {item.caption}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#D8D1C5]/70">
                    <span>{item.attendees}</span>
                    <span className="text-[#C9A66B] flex items-center gap-1 font-medium group-hover:underline">
                      View Production Details
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note & Portfolio Inquire CTA */}
        <div className="mt-14 pt-8 border-t border-[#24262B] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-[#D8D1C5]/60 max-w-xl">
            *Demonstration showcase curated to reflect our production standards, staging architecture, and design execution for high-net-worth clients across Delhi NCR.
          </p>

          <button
            onClick={onPlanClick}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#101114] bg-[#C9A66B] hover:bg-[#E0C38B] transition-colors shrink-0 cursor-pointer shadow-md"
          >
            <span>Discuss Your Event Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(item) => setActiveLightboxItem(item)}
        onInquire={(title) => {
          onInquireItem(title);
        }}
      />
    </section>
  );
};
