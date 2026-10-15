import React from 'react';

export const SignatureVisual: React.FC = () => {
  return (
    <section className="relative w-full h-[65vh] min-h-[460px] max-h-[680px] flex items-center justify-center overflow-hidden bg-[#101114]">
      {/* Background Image with Fixed/Parallax Feel */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform will-change-transform"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85')`,
        }}
      />

      {/* Cinematic Dark Overlay with Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/50 to-[#101114]" />
      <div className="absolute inset-0 bg-[#101114]/40" />

      {/* Editorial Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Minimal Gold Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9A66B]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A66B]" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9A66B]" />
        </div>

        <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F7F3EB] font-normal leading-tight tracking-tight drop-shadow-xl">
          Every Occasion Deserves <br />
          <span className="italic font-light text-[#E0C38B]">Something Extraordinary.</span>
        </h2>

        <p className="mt-6 text-sm sm:text-base text-[#D8D1C5] font-light tracking-widest uppercase max-w-xl mx-auto">
          Signature Scenography • Bespoke Atmosphere • Delhi NCR
        </p>

        {/* Minimal Gold Divider Bottom */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="h-[1px] w-16 bg-[#C9A66B]/30" />
        </div>
      </div>
    </section>
  );
};
