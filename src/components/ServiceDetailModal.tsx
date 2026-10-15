import React, { useEffect } from 'react';
import { X, CheckCircle2, MapPin, Users, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';
import { BRAND_CONFIG } from '../data/eventData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  useEffect(() => {
    if (!service) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in your "${service.title}" services for an upcoming event in Delhi NCR. Could you please share more information and availability?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden">
      {/* Dark backdrop with blur */}
      <div
        className="fixed inset-0 bg-[#101114]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card - Fully responsive split-view that always fits comfortably in viewport */}
      <div className="relative w-full max-w-4xl lg:max-w-5xl max-h-[88vh] bg-[#141519] border border-[#C9A66B]/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row transition-all animate-fade-in">
        
        {/* Left Side: Visual Showcase (Full height on desktop, compact banner on mobile) */}
        <div className="relative w-full md:w-[42%] lg:w-[45%] h-44 sm:h-56 md:h-auto shrink-0 bg-[#101114] overflow-hidden">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141519] via-[#141519]/40 to-transparent" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#141519]/70" />

          {/* Service Title & Badge Overlay */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#101114]/80 backdrop-blur-md border border-[#C9A66B]/30 mb-2">
              <Sparkles className="w-3 h-3 text-[#C9A66B]" />
              <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-[#F7F3EB]">
                SERVICE PORTFOLIO
              </span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#F7F3EB] leading-tight drop-shadow-md">
              {service.title}
            </h3>
          </div>

          {/* Close button on mobile */}
          <button
            onClick={onClose}
            className="md:hidden absolute top-3 right-3 p-1.5 rounded-full bg-[#101114]/80 text-[#D8D1C5] hover:text-[#F7F3EB] hover:bg-[#101114] transition-colors border border-white/10"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side: Editorial Information + Pinned Action Footer */}
        <div className="flex-1 flex flex-col justify-between bg-[#141519] border-t md:border-t-0 md:border-l border-[#24262B] overflow-hidden">
          
          {/* Desktop Top Bar with Close Button */}
          <div className="hidden md:flex items-center justify-between px-6 py-4 border-b border-[#24262B]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A66B] font-semibold">
              Bespoke Production Details
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#101114]/80 text-[#D8D1C5] hover:text-[#F7F3EB] hover:bg-[#101114] transition-colors border border-white/10 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-4 sm:py-5 space-y-5">
            {/* Overview Paragraph */}
            <p className="text-[#D8D1C5] text-xs sm:text-sm leading-relaxed font-light">
              {service.fullDescription}
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3 sm:p-3.5 rounded-xl bg-[#1c1e24]/70 border border-[#24262B]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#C9A66B]/10 border border-[#C9A66B]/20 flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5 text-[#C9A66B]" />
                </div>
                <div className="text-xs">
                  <span className="text-[#D8D1C5]/60 text-[10px] uppercase tracking-wider block">Capacity Scope</span>
                  <span className="text-[#F7F3EB] font-medium">{service.typicalScale}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#C9A66B]/10 border border-[#C9A66B]/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A66B]" />
                </div>
                <div className="text-xs">
                  <span className="text-[#D8D1C5]/60 text-[10px] uppercase tracking-wider block">Service Territory</span>
                  <span className="text-[#F7F3EB] font-medium">Delhi, Gurugram, Noida & NCR</span>
                </div>
              </div>
            </div>

            {/* Included Production Elements */}
            <div>
              <h4 className="text-[11px] uppercase tracking-widest text-[#C9A66B] font-semibold mb-2.5">
                Included Production Elements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#D8D1C5] bg-[#1a1b20]/50 p-2 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premier Delhi NCR Venues */}
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-[#D8D1C5]/60 font-medium mb-1.5">
                Frequent Delhi NCR Venues
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {service.recommendedVenues.map((venue, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#1f2127] text-[11px] text-[#D8D1C5] border border-white/5"
                  >
                    {venue}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pinned Action Footer - Always visible on screen, never cut off */}
          <div className="p-3.5 sm:p-4 bg-[#101114]/95 border-t border-[#24262B] backdrop-blur-md flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full sm:flex-1 py-2.5 sm:py-3 px-5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#101114] bg-[#C9A66B] hover:bg-[#E0C38B] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.01]"
            >
              <span>Submit In-Depth Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-2.5 sm:py-3 px-5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F7F3EB] bg-[#1e2026] hover:bg-[#282a32] border border-[#C9A66B]/30 hover:border-[#C9A66B] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C9A66B]" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
