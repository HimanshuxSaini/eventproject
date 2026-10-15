/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { AboutSection } from './components/AboutSection';
import { ProcessTimeline } from './components/ProcessTimeline';
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

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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
    <div className="min-h-screen bg-[#101114] text-[#F7F3EB] font-sans selection:bg-[#C9A66B]/30 selection:text-[#E0C38B]">
      {/* Navigation Bar */}
      <Navbar onPlanClick={scrollToContact} />

      <main>
        {/* Hero Section with Interactive 3D Three.js Ballroom Canvas */}
        <HeroSection
          onPlanClick={scrollToContact}
          onExploreClick={scrollToPortfolio}
        />

        {/* 6 Premium Service Cards */}
        <ServicesSection
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* Cinematic Editorial Portfolio Gallery & Lightbox */}
        <PortfolioGallery
          onInquireItem={handleSelectServiceForInquiry}
          onPlanClick={scrollToContact}
        />

        {/* About Us & Experience with Count-Up Statistics */}
        <AboutSection />

        {/* Event Planning Process (4-Step Timeline) */}
        <ProcessTimeline />

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
