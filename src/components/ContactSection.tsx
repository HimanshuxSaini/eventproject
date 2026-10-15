import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG, SERVICES_DATA, NCR_LOCATIONS } from '../data/eventData';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
  initialCity?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Weddings',
  initialCity = 'Delhi',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventType: initialService,
    eventDate: '',
    eventCity: initialCity,
    guestCount: '200 - 500 Guests',
    requirements: '',
    consent: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);

  // Sync if prop changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, eventType: initialService }));
    }
  }, [initialService]);

  React.useEffect(() => {
    if (initialCity) {
      setFormData((prev) => ({ ...prev, eventCity: initialCity }));
    }
  }, [initialCity]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    // Phone validation (Indian 10-digit format or international)
    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number.';
    }

    // Email validation
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select a tentative event date.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please agree to contact terms to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppForward = () => {
    if (!submittedData) return;
    const text = `*NEW EVENT INQUIRY - MIDNIGHT LUXE*
• *Name:* ${submittedData.fullName}
• *Phone:* ${submittedData.phone}
• *Email:* ${submittedData.email}
• *Event Type:* ${submittedData.eventType}
• *Target Date:* ${submittedData.eventDate}
• *Location:* ${submittedData.eventCity}
• *Guest Scale:* ${submittedData.guestCount}
• *Requirements:* ${submittedData.requirements || 'Standard luxury production consultation requested.'}`;

    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const generalWhatsAppText = encodeURIComponent(
    'Hi Midnight Luxe, I am planning an upcoming event in Delhi NCR and would like to schedule a private consultation.'
  );

  return (
    <section id="contact" className="relative py-28 bg-[#101114] border-t border-[#24262B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A66B] block mb-3">
            START THE CONVERSATION
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#F7F3EB] font-normal leading-tight">
            Let's Create <br />
            <span className="italic font-light text-[#E0C38B]">Something Extraordinary.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D8D1C5] font-light leading-relaxed max-w-2xl mx-auto">
            Tell us about your upcoming event. Our senior creative directors and production managers will connect with you to review feasibility, venue availability, and aesthetic concepts.
          </p>
        </div>

        {/* 3 Quick Direct Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${generalWhatsAppText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#16181d] border border-[#C9A66B]/30 hover:border-[#C9A66B] transition-all flex items-center gap-3.5 group shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-[#C9A66B]/15 text-[#E0C38B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5 text-[#C9A66B]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#C9A66B] font-semibold block">
                Instant Chat
              </span>
              <span className="text-xs font-medium text-[#F7F3EB] group-hover:text-[#E0C38B] transition-colors">
                Chat on WhatsApp
              </span>
            </div>
          </a>

          {/* Email Concierge */}
          <a
            href={`mailto:${BRAND_CONFIG.email}?subject=Event%20Inquiry%20-%20Midnight%20Luxe%20Delhi%20NCR`}
            className="p-5 rounded-2xl bg-[#16181d] border border-[#24262B] hover:border-[#C9A66B]/60 transition-all flex items-center gap-3.5 group shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-[#24262B] text-[#D8D1C5] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5 text-[#C9A66B]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#D8D1C5]/70 font-semibold block">
                Email Desk
              </span>
              <span className="text-xs font-medium text-[#F7F3EB] group-hover:text-[#E0C38B] transition-colors">
                Send an Email
              </span>
            </div>
          </a>

          {/* Direct Phone */}
          <a
            href={`tel:${BRAND_CONFIG.phoneClean}`}
            className="p-5 rounded-2xl bg-[#16181d] border border-[#24262B] hover:border-[#C9A66B]/60 transition-all flex items-center gap-3.5 group shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-[#24262B] text-[#D8D1C5] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 text-[#C9A66B]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#D8D1C5]/70 font-semibold block">
                Direct Line
              </span>
              <span className="text-xs font-medium text-[#F7F3EB] group-hover:text-[#E0C38B] transition-colors">
                Call Our Team
              </span>
            </div>
          </a>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-[#16181d] border border-[#C9A66B]/25 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="border-b border-[#24262B] pb-4">
                <h3 className="font-editorial text-2xl text-[#F7F3EB]">
                  Event Inquiry & Feasibility Form
                </h3>
                <p className="text-xs text-[#D8D1C5] font-light mt-1">
                  Share preliminary event parameters. We respond within 4 business hours with availability and initial creative recommendations.
                </p>
              </div>

              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#D8D1C5] mb-2">
                    Full Name <span className="text-[#C9A66B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Vikramaditya Oberoi"
                    className={`w-full px-4 py-3 rounded-xl bg-[#101114] border text-xs sm:text-sm text-[#F7F3EB] focus:outline-hidden focus:border-[#C9A66B] transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-[#24262B]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#D8D1C5] mb-2">
                    Phone Number <span className="text-[#C9A66B]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98111 22334"
                    className={`w-full px-4 py-3 rounded-xl bg-[#101114] border text-xs sm:text-sm text-[#F7F3EB] focus:outline-hidden focus:border-[#C9A66B] transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-[#24262B]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email and Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#D8D1C5] mb-2">
                    Email Address <span className="text-[#C9A66B]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#101114] border text-xs sm:text-sm text-[#F7F3EB] focus:outline-hidden focus:border-[#C9A66B] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-[#24262B]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#D8D1C5] mb-2">
                    Event Type <span className="text-[#C9A66B]">*</span>
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#101114] border border-[#24262B] text-xs sm:text-sm text-[#F7F3EB] focus:outline-hidden focus:border-[#C9A66B] transition-colors"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Event Date, City, Guest Scale */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#D8D1C5] mb-2">
                    Tentative Date <span className="text-[#C9A66B]">*</span>
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#101114] border text-xs sm:text-sm text-[#F7F3EB] focus:outline-hidden focus:border-[#C9A66B] transition-colors ${
                      errors.eventDate ? 'border-red-500' : 'border-[#24262B]'
                    }`}
                  />
                  {errors.eventDate && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.eventDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#D8D1C5] mb-2">
                    Event City / Region
                  </label>
                  <select
                    value={formData.eventCity}
                    onChange={(e) => setFormData({ ...formData, eventCity: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#101114] border border-[#24262B] text-xs sm:text-sm text-[#F7F3EB] focus:outline-hidden focus:border-[#C9A66B] transition-colors"
                  >
                    {NCR_LOCATIONS.map((loc) => (
                      <option key={loc.city} value={loc.city}>
                        {loc.city}
                      </option>
                    ))}
                    <option value="Destination / Other NCR">Destination / Other NCR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#D8D1C5] mb-2">
                    Estimated Guests
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#101114] border border-[#24262B] text-xs sm:text-sm text-[#F7F3EB] focus:outline-hidden focus:border-[#C9A66B] transition-colors"
                  >
                    <option value="Under 100 Guests (Intimate)">Under 100 Guests (Intimate)</option>
                    <option value="100 - 300 Guests">100 - 300 Guests</option>
                    <option value="300 - 800 Guests">300 - 800 Guests</option>
                    <option value="800 - 2,000+ Guests">800 - 2,000+ Guests</option>
                    <option value="2,000+ Delegates / Public Expo">2,000+ Delegates / Public Expo</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Requirements text */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#D8D1C5] mb-2">
                  Brief Event Requirements & Specific Visions
                </label>
                <textarea
                  rows={3}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Tell us about preferred venues, musical preferences, theme inspirations, or any special production elements..."
                  className="w-full px-4 py-3 rounded-xl bg-[#101114] border border-[#24262B] text-xs sm:text-sm text-[#F7F3EB] focus:outline-hidden focus:border-[#C9A66B] transition-colors resize-none"
                />
              </div>

              {/* Consent Statement */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 accent-[#C9A66B] cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-[#D8D1C5]/70 cursor-pointer">
                  I consent to Midnight Luxe securely processing my contact information solely for discussing this event inquiry. We never share client contact details with unauthorized third parties.
                </label>
              </div>
              {errors.consent && (
                <p className="text-[11px] text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.consent}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#101114] bg-[#C9A66B] hover:bg-[#E0C38B] transition-all duration-300 shadow-xl hover:shadow-[#C9A66B]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          ) : (
            /* Honest Prototype Submission State with Instant WhatsApp Bridge */
            <div className="py-8 text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#C9A66B]/20 border border-[#C9A66B] text-[#E0C38B] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-editorial text-3xl text-[#F7F3EB]">
                  Inquiry Form Validated & Ready
                </h3>
                <p className="text-xs sm:text-sm text-[#D8D1C5] font-light max-w-lg mx-auto mt-2">
                  Thank you, <span className="text-[#F7F3EB] font-medium">{submittedData?.fullName}</span>. Your event details have been organized.
                </p>
              </div>

              {/* Form Summary Card */}
              <div className="text-left bg-[#101114] border border-[#24262B] rounded-xl p-5 max-w-lg mx-auto text-xs space-y-2 text-[#D8D1C5]">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#D8D1C5]/70">Event:</span>
                  <span className="text-[#F7F3EB] font-medium">{submittedData?.eventType}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#D8D1C5]/70">Location:</span>
                  <span className="text-[#F7F3EB] font-medium">{submittedData?.eventCity}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#D8D1C5]/70">Target Date:</span>
                  <span className="text-[#F7F3EB] font-medium">{submittedData?.eventDate}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#D8D1C5]/70">Scale:</span>
                  <span className="text-[#F7F3EB] font-medium">{submittedData?.guestCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D8D1C5]/70">Contact:</span>
                  <span className="text-[#C9A66B] font-mono">{submittedData?.phone}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleWhatsAppForward}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#101114] bg-[#C9A66B] hover:bg-[#E0C38B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Forward Details to WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-medium tracking-wider uppercase text-[#D8D1C5] hover:text-[#F7F3EB] bg-[#24262B] transition-colors cursor-pointer"
                >
                  Edit Inquiry
                </button>
              </div>

              <p className="text-[11px] text-[#D8D1C5]/60 pt-2">
                *Prototype Notice: Frontend validation completed. Connect directly via WhatsApp or email to book dates on the live production calendar.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
