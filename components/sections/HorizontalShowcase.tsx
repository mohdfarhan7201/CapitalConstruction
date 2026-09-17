"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

export function HorizontalShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isDesktop = window.innerWidth >= 1024;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isDesktop || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalScroll = track.scrollWidth - window.innerWidth + 80;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll * 1.1}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0D0D0D] text-[#F5F3EF] py-20 lg:py-0 overflow-hidden border-b border-[#222222]"
    >
      {/* Pinned Desktop Container */}
      <div className="lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-12 lg:px-16">
        {/* Section Index Header */}
        <div className="px-6 sm:px-8 md:px-12 lg:px-0 mb-10 lg:mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#C5A880] tracking-[0.25em]">
              04 // PANORAMA
            </span>
            <div className="w-8 h-[1px] bg-[#C5A880]" />
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[#888888] tracking-widest uppercase">
            <span className="hidden sm:inline">HORIZONTAL EXHIBITION</span>
            <span>01 — 05</span>
          </div>
        </div>

        {/* Horizontal Track for Desktop / Swipeable on Mobile */}
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-6 sm:px-8 md:px-12 lg:px-0 will-change-transform"
        >
          {siteConfig.projects.map((item, idx) => (
            <div
              key={item.id}
              className="w-full lg:w-[620px] xl:w-[720px] shrink-0 group flex flex-col justify-between"
              data-cursor="view"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#181818] border border-[#2E2E2E] shadow-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover object-center filter brightness-[0.88] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-transparent to-transparent" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#0D0D0D]/80 backdrop-blur-md text-[#C5A880] text-xs font-mono tracking-widest border border-white/10">
                    0{idx + 1} / 05
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-6 right-6 z-10 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] font-mono tracking-wider text-[#C5A880] uppercase block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-light text-[#F5F3EF]">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#3A3A3A] text-[#F5F3EF] flex items-center justify-center group-hover:bg-[#C5A880] group-hover:text-[#111111] transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Detail Caption */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#8A8680]">
                <span className="flex items-center gap-1.5 font-mono">
                  <MapPin size={12} className="text-[#C5A880]" />
                  {item.location}
                </span>
                <span className="font-light">{item.scope}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Bottom Scroll Hint */}
        <div className="hidden lg:flex items-center justify-between text-xs font-mono text-[#666666] tracking-widest pt-4 border-t border-[#1C1C1C]">
          <span>SCROLL DOWN TO ADVANCE HORIZONTALLY</span>
          <span>CAPITAL ARCHITECTURE ARCHIVE</span>
        </div>
      </div>
    </section>
  );
}
