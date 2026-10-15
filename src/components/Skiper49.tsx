"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

export interface CarouselImage {
  src: string;
  alt: string;
}

const Skiper49 = () => {
  const images: CarouselImage[] = [
    {
      src: "/images/x.com/13.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/32.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/20.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/21.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/19.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/1.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/2.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/3.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/4.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/5.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/6.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-transparent py-10 sm:py-14">
      <Carousel_003 className="" images={images} showPagination loop autoplay={true} />
    </div>
  );
};

export { Skiper49 };

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = true,
  spaceBetween = 0,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 380px;
    padding-bottom: 50px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 320px;
    border-radius: 20px;
    border: 1px solid rgba(201, 166, 107, 0.35);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.75), 0 0 25px rgba(201, 166, 107, 0.12);
    transition: transform 0.4s ease, border-color 0.4s ease;
  }

  .Carousal_003 .swiper-slide-active {
    border-color: rgba(224, 195, 139, 0.65);
    box-shadow: 0 25px 50px -10px rgba(0, 0, 0, 0.85), 0 0 35px rgba(201, 166, 107, 0.25);
  }

  .Carousal_003 .swiper-pagination {
    bottom: 4px !important;
  }

  .Carousal_003 .swiper-pagination-bullet {
    background-color: #D8D1C5 !important;
    width: 7px;
    height: 7px;
    margin: 0 5px !important;
    opacity: 0.35;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .Carousal_003 .swiper-pagination-bullet-active {
    opacity: 1 !important;
    background-color: #C9A66B !important;
    width: 24px;
    border-radius: 9999px;
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(201, 166, 107, 0.6);
  }
`;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-4xl px-5", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 2800,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          speed={750}
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => {
            // Check for specific slides to render exact graphic styling from reference image 2
            const isSlide13 = image.src.includes("13.jpeg");
            const isSlide32 = image.src.includes("32.jpeg");
            const isSlide20 = image.src.includes("20.jpeg");

            return (
              <SwiperSlide key={index} className="overflow-hidden bg-[#16181d]">
                <div className="relative h-full w-full select-none">
                  <img
                    className="h-full w-full object-cover"
                    src={image.src}
                    alt={image.alt}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80";
                    }}
                  />

                  {/* Reference Image 2 - Slide 1: "the Nightingale wind" with framed landscape */}
                  {isSlide13 && (
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 bg-gradient-to-t from-black/80 via-transparent to-black/20">
                      {/* Outlined square frame */}
                      <div className="mx-auto mt-4 w-28 h-24 border-2 border-white/80 backdrop-blur-[1px]" />
                      {/* Nightingale typography */}
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-white/70 block">
                          bold
                        </span>
                        <h4 className="font-sans text-3xl font-bold tracking-tight text-white leading-none">
                          the
                        </h4>
                        <h3 className="font-sans text-3xl font-black tracking-tight text-white leading-none">
                          Nightingale
                        </h3>
                        <h3 className="font-sans text-3xl font-bold tracking-tight text-white leading-none">
                          wind
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* Reference Image 2 - Slide 2: Cillian Murphy editorial typography overlay */}
                  {isSlide32 && (
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-around p-3 overflow-hidden text-[7px] uppercase font-mono tracking-widest text-white/90 leading-tight">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        <div>
                          <p className="font-bold">ABOUT HIM</p>
                          <p>ANTONIO IS A LONDON BASED</p>
                          <p>PHOTOGRAPHER</p>
                          <p>AND ART DIRECTOR</p>
                          <p>WORKING GLOBALLY</p>
                          <p className="text-[6px] text-white/60">75A</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">ABOUT HIM</p>
                          <p>ANTONIO IS A LONDON BASED</p>
                          <p>PHOTOGRAPHER</p>
                          <p>AND ART DIRECTOR</p>
                          <p>WORKING GLOBALLY</p>
                          <p className="text-[6px] text-white/60">75A</p>
                        </div>
                        <div>
                          <p className="font-bold">ABOUT HIM</p>
                          <p>ANTONIO IS A LONDON BASED</p>
                          <p>PHOTOGRAPHER</p>
                          <p>AND ART DIRECTOR</p>
                          <p>WORKING GLOBALLY</p>
                          <p className="text-[6px] text-white/60">75A</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">ABOUT HIM</p>
                          <p>ANTONIO IS A LONDON BASED</p>
                          <p>PHOTOGRAPHER</p>
                          <p>AND ART DIRECTOR</p>
                          <p>WORKING GLOBALLY</p>
                          <p className="text-[6px] text-white/60">75A</p>
                        </div>
                        <div>
                          <p className="font-bold">ABOUT HIM</p>
                          <p>ANTONIO IS A LONDON BASED</p>
                          <p>PHOTOGRAPHER</p>
                          <p>AND ART DIRECTOR</p>
                          <p>WORKING GLOBALLY</p>
                          <p className="text-[6px] text-white/60">75A</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">ABOUT HIM</p>
                          <p>ANTONIO IS A LONDON BASED</p>
                          <p>PHOTOGRAPHER</p>
                          <p>AND ART DIRECTOR</p>
                          <p>WORKING GLOBALLY</p>
                          <p className="text-[6px] text-white/60">75A</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Reference Image 2 - Slide 3: "SOPHISTICATED ALIGNMENT" */}
                  {isSlide20 && (
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between items-center p-4 bg-black/90 text-center text-white">
                      <div className="space-y-0.5">
                        <p className="font-serif text-[10px] tracking-widest text-[#E0C38B]">
                          (102.4)
                        </p>
                        <p className="font-serif text-xs uppercase tracking-[0.2em] font-medium text-white">
                          SOPHISTICATED ALIGNMENT
                        </p>
                        <p className="font-serif italic text-[9px] text-[#D8D1C5]">
                          By Henric Templeman
                        </p>
                        <p className="text-[8px] uppercase tracking-wider text-white/70">
                          A Thesis on the modern ART of MUSIC
                        </p>
                        <p className="text-[8px] tracking-widest text-white/50">
                          1985–98
                        </p>
                        <p className="text-[8px] tracking-wider text-white/70">
                          For the part a simple
                        </p>
                        <p className="text-[8px] uppercase tracking-widest font-semibold text-[#E0C38B]">
                          IN DEPTH LECTURE SERIES
                        </p>
                        <p className="text-[7px] text-white/50">
                          Version—14/526
                        </p>
                      </div>

                      {/* Small center sculpture thumbnail */}
                      <div className="w-14 h-16 bg-white/10 border border-white/20 p-1 flex items-center justify-center">
                        <div className="w-6 h-12 bg-neutral-200 clip-polygon shadow-md" />
                      </div>

                      <div className="space-y-0.5">
                        <p className="font-serif text-[9px] tracking-widest text-[#E0C38B]">
                          (102.4)
                        </p>
                        <p className="font-serif text-[11px] uppercase tracking-[0.18em] font-medium text-white">
                          SOPHISTICATED ALIGNMENT
                        </p>
                        <p className="font-serif italic text-[8px] text-[#D8D1C5]">
                          By Henric Templeman
                        </p>
                        <p className="text-[7px] uppercase tracking-wider text-white/70">
                          A Thesis on the modern ART of MUSIC
                        </p>
                        <p className="text-[7px] tracking-widest text-white/50">
                          1985–98
                        </p>
                        <p className="text-[7px] tracking-wider text-white/70">
                          For the part a simple
                        </p>
                        <p className="text-[7px] uppercase tracking-widest font-semibold text-[#E0C38B]">
                          IN DEPTH LECTURE SERIES
                        </p>
                        <p className="text-[6px] text-white/50">
                          Version—14/526
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}

          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden cursor-pointer">
                <ChevronRightIcon className="h-6 w-6 text-black drop-shadow" />
              </div>
              <div className="swiper-button-prev after:hidden cursor-pointer">
                <ChevronLeftIcon className="h-6 w-6 text-black drop-shadow" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };

/**
 * Skiper 49 Carousel_003 — React + Swiper
 * Built with Swiper.js - Read docs to learn more https://swiperjs.com/
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */
