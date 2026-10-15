import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Users, MessageSquare } from 'lucide-react';
import { PortfolioItem } from '../types';
import { BRAND_CONFIG } from '../data/eventData';

interface GalleryLightboxProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onSelect: (item: PortfolioItem) => void;
  onInquire: (title: string) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onSelect,
  onInquire,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I came across "${item.title}" (${item.venueName}, ${item.location}) in your portfolio and would like to discuss a similar production in Delhi NCR.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Dark backdrop with blur */}
      <div
        className="fixed inset-0 bg-[#101114]/95 backdrop-blur-lg transition-opacity"
        onClick={onClose}
      />

      {/* Lightbox Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#16181d] border border-[#C9A66B]/30 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#101114]/80 text-[#D8D1C5] hover:text-[#F7F3EB] hover:bg-[#101114] border border-white/10 transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Preview Area */}
        <div className="relative md:flex-1 h-72 md:h-auto bg-[#101114] flex items-center justify-center overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain md:object-cover"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#101114]/80 text-[#F7F3EB] hover:text-[#E0C38B] hover:bg-[#101114] border border-white/10 transition-all cursor-pointer shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#101114]/80 text-[#F7F3EB] hover:text-[#E0C38B] hover:bg-[#101114] border border-white/10 transition-all cursor-pointer shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Index Counter */}
          <div className="absolute bottom-3 left-4 text-[11px] font-mono tracking-wider text-[#D8D1C5]/80 bg-[#101114]/70 px-2.5 py-1 rounded-md">
            {currentIndex + 1} / {items.length}
          </div>
        </div>

        {/* Sidebar Info Area */}
        <div className="w-full md:w-80 lg:w-96 p-6 sm:p-7 flex flex-col justify-between bg-[#16181d] border-t md:border-t-0 md:border-l border-[#24262B] overflow-y-auto max-h-[45vh] md:max-h-none">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C9A66B]">
                {item.category.toUpperCase()}
              </span>
              <span className="text-[11px] text-[#D8D1C5]/60 font-light">
                {item.attendees}
              </span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F3EB] leading-tight">
              {item.title}
            </h3>

            <div className="mt-3 flex items-center gap-1.5 text-xs text-[#D8D1C5]">
              <MapPin className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
              <span>{item.venueName}, {item.location}</span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#D8D1C5] font-light leading-relaxed">
              {item.caption}
            </p>

            {/* Highlights */}
            <div className="mt-5">
              <h4 className="text-[10px] uppercase tracking-widest text-[#C9A66B] font-semibold mb-2">
                Production Highlights:
              </h4>
              <ul className="space-y-1.5 text-xs text-[#D8D1C5]">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 pt-5 border-t border-[#24262B] space-y-2.5">
            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-full text-xs font-semibold tracking-wider uppercase text-[#101114] bg-[#C9A66B] hover:bg-[#E0C38B] transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Similar Production</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onInquire(item.title);
              }}
              className="w-full py-2 px-4 rounded-full text-xs font-medium tracking-wider uppercase text-[#D8D1C5] hover:text-[#F7F3EB] bg-[#24262B] hover:bg-[#2d3036] transition-colors"
            >
              Request Custom Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
