import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight, Lock, Check, Calendar, Phone, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/eventData';

interface NavbarProps {
  onPlanClick: () => void;
  onServiceSelect?: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPlanClick }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);

  // Login modal form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  // Dynamic scroll-spy to highlight current active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      setIsLoginOpen(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Pill Header Container */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div className="w-full max-w-6xl bg-black/95 backdrop-blur-xl border border-white/15 rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-2xl shadow-black/80 flex items-center justify-between gap-2 sm:gap-4 pointer-events-auto transition-all duration-300">
          
          {/* Left: Concentric Spiral Icon + Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero', 'home')}
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-hidden select-none cursor-pointer"
            aria-label={`${BRAND_CONFIG.name} - Home`}
          >
            {/* Spiral Logo Icon reproducing reference design */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/30 flex items-center justify-center p-1 bg-white/5 group-hover:border-white transition-colors duration-300">
              <svg
                viewBox="0 0 32 32"
                className="w-full h-full text-white fill-none stroke-current"
                strokeWidth="1.75"
                strokeLinecap="round"
              >
                <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
                <path d="M16 4.5C9.65 4.5 4.5 9.65 4.5 16C4.5 22.35 9.65 27.5 16 27.5C22.35 27.5 27.5 22.35 27.5 16C27.5 10.75 23.25 6.5 18 6.5C12.75 6.5 8.5 10.75 8.5 16C8.5 20.15 11.85 23.5 16 23.5C20.15 23.5 23.5 20.15 23.5 16C23.5 12.95 21.05 10.5 18 10.5C14.95 10.5 12.5 12.95 12.5 16C12.5 17.95 14.05 19.5 16 19.5C17.95 19.5 19.5 17.95 19.5 16" />
              </svg>
            </div>

            {/* Brand Wordmark in modern bold geometry */}
            <span className="font-sans text-sm sm:text-base md:text-lg font-bold tracking-tight text-white group-hover:text-white/90 transition-colors whitespace-nowrap">
              {BRAND_CONFIG.name}
            </span>
          </a>

          {/* Center: Encapsulated Dark Pill Nav Capsule */}
          <nav className="hidden lg:flex items-center bg-[#18191c] border border-white/10 rounded-full p-1 gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#dad2f9] text-[#121316] font-semibold shadow-xs'
                      : 'text-[#9da3af] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Icon Pill Button | Divider | Login Pill | Divider | Sign up Pill */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {/* Circular Bag / Brief Button */}
            <button
              onClick={() => setIsBagOpen(true)}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#18191c] hover:bg-[#232429] text-white/90 hover:text-white border border-white/10 flex items-center justify-center transition-all cursor-pointer relative"
              title="Event Inquiry Shortlist"
              aria-label="Open Event Shortlist"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#C9A66B] rounded-full" />
            </button>

            {/* Divider */}
            <div className="hidden sm:block h-3.5 w-[1px] bg-white/15 mx-0.5" />

            {/* Login Pill Button */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-3.5 sm:px-4 py-1.5 rounded-full bg-[#18191c] hover:bg-[#232429] text-white/90 hover:text-white text-xs sm:text-sm font-medium border border-white/10 transition-all cursor-pointer whitespace-nowrap"
            >
              Login
            </button>

            {/* Divider */}
            <div className="hidden sm:block h-3.5 w-[1px] bg-white/15 mx-0.5" />

            {/* Sign up / Primary Pill Button */}
            <button
              onClick={onPlanClick}
              className="inline-flex items-center justify-center px-3.5 sm:px-5 py-1.5 rounded-full bg-[#e8faed] hover:bg-white text-[#0f172a] text-xs sm:text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap"
            >
              Sign up
            </button>

            {/* Mobile Menu Toggle (on smaller screens) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-white/80 hover:text-white rounded-full bg-[#18191c] border border-white/10 ml-0.5 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Dropdown Card */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden pointer-events-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Floating Mobile Pill Menu */}
          <div className="fixed top-18 left-4 right-4 bg-[#141518] border border-white/15 rounded-3xl p-5 shadow-2xl flex flex-col gap-3 max-w-sm mx-auto animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest text-[#C9A66B] font-semibold">
                Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-1 py-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#dad2f9] text-[#121316] font-semibold'
                        : 'text-[#D8D1C5] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsLoginOpen(true);
                }}
                className="w-full py-2.5 rounded-xl bg-[#1c1d22] border border-white/10 text-white text-xs font-semibold tracking-wider uppercase text-center"
              >
                Client Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPlanClick();
                }}
                className="w-full py-2.5 rounded-xl bg-[#e8faed] text-[#0f172a] text-xs font-semibold tracking-wider uppercase text-center"
              >
                Plan Your Event
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive VIP / Client Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setIsLoginOpen(false)}
          />

          <div className="relative w-full max-w-md bg-[#121316] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 animate-fade-in text-white">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">
                  <Lock className="w-3 h-3 text-[#dad2f9]" />
                </div>
                <h3 className="text-base font-semibold text-white">Client Portal Login</h3>
              </div>
              <button
                onClick={() => setIsLoginOpen(false)}
                className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {loginSuccess ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#e8faed] text-[#0f172a] flex items-center justify-center mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-semibold text-white">Access Verified</h4>
                <p className="text-xs text-[#9da3af] mt-1">Connecting to your event concierge dashboard...</p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#9da3af] mb-1.5 uppercase tracking-wider">
                    Client Email / Phone
                  </label>
                  <input
                    type="text"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="vip@midnightluxe.events"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#18191c] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-hidden focus:border-[#dad2f9] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#9da3af] mb-1.5 uppercase tracking-wider">
                    Password / RSVP Code
                  </label>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#18191c] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-hidden focus:border-[#dad2f9] transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-[#dad2f9] hover:bg-white text-[#121316] font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md cursor-pointer"
                  >
                    Enter Portal
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsLoginOpen(false);
                      onPlanClick();
                    }}
                    className="text-center text-xs text-[#9da3af] hover:text-white transition-colors"
                  >
                    Don't have an account? <span className="text-[#dad2f9] underline">Request Event Consultation</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Interactive Event Shortlist / Bag Drawer */}
      {isBagOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setIsBagOpen(false)}
          />

          <div className="relative w-full max-w-md bg-[#121316] border border-white/15 rounded-3xl p-6 shadow-2xl z-10 animate-fade-in text-white">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#18191c] border border-white/15 flex items-center justify-center">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#C9A66B]" />
                </div>
                <h3 className="text-base font-semibold text-white">Event Brief & Shortlist</h3>
              </div>
              <button
                onClick={() => setIsBagOpen(false)}
                className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 space-y-3">
              <p className="text-xs text-[#9da3af]">
                Selected luxury planning services for Delhi NCR:
              </p>

              <div className="p-3 rounded-2xl bg-[#18191c] border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-white">Bespoke Wedding & Gala Production</h4>
                  <p className="text-[11px] text-[#9da3af]">Turnkey Scenography, Artists & Concierge</p>
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#C9A66B]/20 text-[#E0C38B]">
                  Active
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-[#18191c] border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-white">Delhi NCR Venue Matchmaking</h4>
                  <p className="text-[11px] text-[#9da3af]">Palaces, Farmsteads & Heritage Hotels</p>
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#dad2f9]/20 text-[#dad2f9]">
                  Curated
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsBagOpen(false);
                  onPlanClick();
                }}
                className="w-full py-2.5 rounded-full bg-[#e8faed] hover:bg-white text-[#0f172a] font-semibold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Proceed to Consultation Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${BRAND_CONFIG.phoneClean}`}
                className="text-center text-xs text-[#9da3af] hover:text-[#E0C38B] transition-colors py-1 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3 h-3 text-[#C9A66B]" />
                <span>Call VIP Concierge ({BRAND_CONFIG.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
