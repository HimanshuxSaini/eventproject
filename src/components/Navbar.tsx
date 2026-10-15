import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/eventData';

interface NavbarProps {
  onPlanClick: () => void;
  onServiceSelect?: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPlanClick }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          {/* Right: Modern Contact Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPlanClick}
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full bg-[#e8faed] hover:bg-white text-[#0f172a] text-xs sm:text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle (on smaller screens) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-white/80 hover:text-white rounded-full bg-[#18191c] border border-white/10 cursor-pointer"
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
                  onPlanClick();
                }}
                className="w-full py-2.5 rounded-xl bg-[#e8faed] text-[#0f172a] text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-1.5 cursor-pointer hover:bg-white transition-colors"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
