import React, { useState } from 'react';
import { ArrowUp, Phone, Mail, MapPin, MessageSquare, Shield, FileText } from 'lucide-react';
import { BRAND_CONFIG, SERVICES_DATA, NCR_LOCATIONS } from '../data/eventData';

interface FooterProps {
  onServiceClick: (serviceTitle: string) => void;
  onCityClick: (city: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onServiceClick, onCityClick }) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#101114] border-t border-[#24262B] text-[#D8D1C5] text-xs pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-[#24262B]">
          {/* Brand & Narrative */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-editorial text-2xl tracking-[0.25em] text-[#F7F3EB]">
                {BRAND_CONFIG.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#C9A66B] font-medium mt-0.5">
                {BRAND_CONFIG.tagline}
              </span>
            </div>

            <p className="text-xs text-[#D8D1C5]/80 font-light leading-relaxed max-w-sm">
              A bespoke event planning and production house delivering architectural scenography, private celebrations, luxury weddings, and high-impact corporate assemblies throughout Delhi NCR.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Midnight Luxe, I am contacting you through your website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#16181d] border border-[#C9A66B]/30 hover:border-[#C9A66B] text-[11px] text-[#E0C38B] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>WhatsApp Concierge</span>
              </a>
              <span className="text-[11px] text-[#D8D1C5]/60">Delhi NCR Service</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F7F3EB]">
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      onServiceClick(service.title);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[#D8D1C5]/80 hover:text-[#E0C38B] transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Territory Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F7F3EB]">
              Regions Served
            </h4>
            <ul className="space-y-2">
              {NCR_LOCATIONS.map((loc) => (
                <li key={loc.city}>
                  <button
                    onClick={() => {
                      onCityClick(loc.city);
                      const el = document.getElementById('locations');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[#D8D1C5]/80 hover:text-[#E0C38B] transition-colors text-left cursor-pointer"
                  >
                    {loc.city}
                  </button>
                </li>
              ))}
              <li>
                <span className="text-[#D8D1C5]/50">Chattarpur & Farm Belts</span>
              </li>
              <li>
                <span className="text-[#D8D1C5]/50">Aerocity Hospitality Enclave</span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F7F3EB]">
              Concierge
            </h4>
            <div className="space-y-2.5 text-xs text-[#D8D1C5]/80">
              <a
                href={`tel:${BRAND_CONFIG.phoneClean}`}
                className="flex items-center gap-2 hover:text-[#E0C38B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
                <span>{BRAND_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-[#E0C38B] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
                <span>{BRAND_CONFIG.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-[11px] leading-relaxed text-[#D8D1C5]/70">
                <MapPin className="w-3.5 h-3.5 text-[#C9A66B] shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.address}</span>
              </div>

              <div className="text-[10px] text-[#D8D1C5]/50 pt-1">
                {BRAND_CONFIG.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#D8D1C5]/60">
          <div>
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved. Premium Event Planning & Production in Delhi NCR.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-[#E0C38B] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-[#E0C38B] transition-colors cursor-pointer"
            >
              Terms of Engagement
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#E0C38B] transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C9A66B]" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy / Terms Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#101114]/90 backdrop-blur-md"
            onClick={() => setActiveModal(null)}
          />
          <div className="relative z-10 w-full max-w-lg bg-[#16181d] border border-[#C9A66B]/30 rounded-2xl p-6 sm:p-8 text-xs text-[#D8D1C5] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#24262B]">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#F7F3EB]">
                {activeModal === 'privacy' ? <Shield className="w-4 h-4 text-[#C9A66B]" /> : <FileText className="w-4 h-4 text-[#C9A66B]" />}
                <span>{activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Engagement'}</span>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-[#D8D1C5] hover:text-[#F7F3EB] text-xs uppercase tracking-wider"
              >
                Close
              </button>
            </div>

            {activeModal === 'privacy' ? (
              <div className="space-y-3 font-light leading-relaxed">
                <p>
                  At Midnight Luxe, client discretion and data privacy are paramount. Any personal or corporate information submitted via our inquiry forms or direct communication is stored securely and used solely to prepare bespoke event proposals and venue consultations.
                </p>
                <p>
                  We never sell, rent, or lease client lists to third-party marketing brokers. All guest lists, security itineraries, and financial proposals for private weddings and corporate galas remain strictly confidential under NDA upon request.
                </p>
              </div>
            ) : (
              <div className="space-y-3 font-light leading-relaxed">
                <p>
                  Midnight Luxe provides turnkey event management, creative direction, scenography fabrication, and vendor coordination across Delhi NCR.
                </p>
                <p>
                  Dates and venue bookings are secured upon mutual execution of our formal production contract and retainer deposit. Production schedules and artist clearances comply with all local municipal guidelines and venue regulations.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
