/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ThreeHeroScene } from './components/ThreeHeroScene';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SignatureVisual } from './components/SignatureVisual';
import { LocationsSection } from './components/LocationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Weddings');
  const [selectedCity, setSelectedCity] = useState<string>('Delhi');
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis physics-based smooth scrolling across the entire site
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential luxury ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      delete (window as any).lenis;
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -40, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToProcess = () => {
    const el = document.getElementById('process');
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -40, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToContact();
  };

  const handleSelectCityForInquiry = (cityName: string) => {
    setSelectedCity(cityName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#101114] text-[#F7F3EB] font-sans selection:bg-[#C9A66B]/30 selection:text-[#E0C38B] relative">
      {/* Global Persistent 3D Three.js Ballroom Canvas (Site-wide 3D effect) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <ThreeHeroScene />
      </div>

      {/* Navigation Bar */}
      <Navbar onPlanClick={scrollToContact} />

      <main className="relative z-10">
        {/* Hero Section with Left Content & Centered 3D Chandelier Framing */}
        <HeroSection
          onPlanClick={scrollToContact}
          onExploreClick={scrollToProcess}
        />

        {/* 6 Premium Service Cards */}
        <ServicesSection
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* Comprehensive 5-Phase Methodology & 24-Hour Run of Show */}
        <ProcessSection onPlanClick={scrollToContact} />

        {/* About Us & Experience with Count-Up Statistics */}
        <AboutSection />

        {/* Why Choose Us Feature Cards */}
        <WhyChooseUs />

        {/* Signature Visual Section (Cinematic Visual Pause) */}
        <SignatureVisual />

        {/* Locations We Serve — Delhi NCR Local SEO Focus */}
        <LocationsSection
          onSelectCityInquiry={handleSelectCityForInquiry}
        />

        {/* Testimonials & Trust */}
        <TestimonialsSection />

        {/* Final CTA & Comprehensive Inquiry Form */}
        <ContactSection
          initialService={selectedService}
          initialCity={selectedCity}
        />
      </main>

      {/* Floating Reusable WhatsApp Button */}
      <WhatsAppButton />

      {/* Luxury Footer */}
      <Footer
        onServiceClick={handleSelectServiceForInquiry}
        onCityClick={handleSelectCityForInquiry}
      />
    </div>
  );
}
