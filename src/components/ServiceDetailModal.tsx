import React from 'react';
import { X, CheckCircle2, MapPin, Users, ArrowUpRight, MessageSquare } from 'lucide-react';
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
  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in your "${service.title}" services for an upcoming event in Delhi NCR. Could you please share more information and availability?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#101114]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#16181d] border border-[#C9A66B]/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 transition-all animate-fade-in">
        {/* Header Image with Gradient */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16181d] via-[#16181d]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#101114]/80 text-[#D8D1C5] hover:text-[#F7F3EB] hover:bg-[#101114] transition-colors border border-white/10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image base */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C9A66B]">
              SERVICE PORTFOLIO
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F3EB] mt-0.5">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-[#D8D1C5] text-sm sm:text-base leading-relaxed font-light">
            {service.fullDescription}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#24262B]/50 border border-[#24262B]">
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#C9A66B]" />
              <div className="text-xs">
                <span className="text-[#D8D1C5]/70 block">Capacity Scope:</span>
                <span className="text-[#F7F3EB] font-medium">{service.typicalScale}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#C9A66B]" />
              <div className="text-xs">
                <span className="text-[#D8D1C5]/70 block">Service Territory:</span>
                <span className="text-[#F7F3EB] font-medium">Delhi, Gurugram, Noida & NCR</span>
              </div>
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A66B] font-semibold mb-3">
              Included Production Elements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#D8D1C5]">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premier NCR Venues */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D8D1C5]/70 font-medium mb-2">
              Frequent Delhi NCR Venues:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {service.recommendedVenues.map((venue, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#24262B] text-[11px] text-[#D8D1C5] border border-white/5"
                >
                  {venue}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#24262B] flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full sm:flex-1 py-3 px-5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#101114] bg-[#C9A66B] hover:bg-[#E0C38B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Submit In-Depth Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F7F3EB] bg-[#24262B] hover:bg-[#2d3036] border border-[#C9A66B]/30 hover:border-[#C9A66B] transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#C9A66B]" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
