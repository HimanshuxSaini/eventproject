import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/eventData';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      label: 'General Inquiry',
      text: 'Hi, I am interested in planning an event. Please share more information about your services in Delhi NCR.',
    },
    {
      label: 'Wedding Planning',
      text: 'Hi, I am interested in your bespoke wedding planning and production services.',
    },
    {
      label: 'Corporate Event',
      text: 'Hi, I would like to discuss an upcoming corporate event / conference in Delhi NCR.',
    },
  ];

  const handleOpenWhatsApp = (msg: string) => {
    const url = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Quick Message Selector Popover */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-[#16181d] border border-[#C9A66B]/40 rounded-2xl p-4 shadow-2xl animate-fade-in text-xs">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#24262B]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-[#F7F3EB]">Concierge Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#D8D1C5] hover:text-[#F7F3EB] p-1"
              aria-label="Close options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-[#D8D1C5] mb-3">
            Select an inquiry context to chat directly with our event director:
          </p>

          <div className="space-y-2">
            {quickMessages.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleOpenWhatsApp(item.text)}
                className="w-full text-left p-2.5 rounded-xl bg-[#101114] hover:bg-[#24262B] border border-white/5 hover:border-[#C9A66B]/50 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <span className="font-medium text-[#F7F3EB] group-hover:text-[#E0C38B] block">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-[#D8D1C5]/60 truncate max-w-[200px] block">
                    {item.text}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A66B] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-[#24262B] text-center text-[10px] text-[#D8D1C5]/50">
            Delhi NCR • Dedicated Event Concierge
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#16181d] hover:bg-[#1f2229] border border-[#C9A66B] text-[#F7F3EB] shadow-2xl hover:shadow-[#C9A66B]/20 transition-all duration-300 cursor-pointer"
        aria-label="Contact Concierge on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-[#C9A66B]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#16181d]" />
        </div>
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wider uppercase text-[#E0C38B]">
          WhatsApp Concierge
        </span>
      </button>
    </div>
  );
};
