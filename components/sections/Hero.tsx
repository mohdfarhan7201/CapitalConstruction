"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import { useSmoothScroll } from "@/components/motion/SmoothScroll";

export function Hero() {
  const { scrollTo } = useSmoothScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingLinesRef = useRef<HTMLSpanElement[]>([]);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Timeline for initial hero entrance
      const tl = gsap.timeline({ delay: 0.05 });

      // Image scale in
      tl.fromTo(
        imageRef.current,
        { scale: 1.12, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 2.2, ease: "power2.out" },
        0
      );

      // Line by line heading reveal
      headingLinesRef.current.forEach((line, index) => {
        tl.fromTo(
          line,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
          0.3 + index * 0.15
        );
      });

      // Supporting elements fade up
      tl.fromTo(
        subTextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        0.8
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        1.0
      )
      .fromTo(
        metaRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0.6
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        1.2
      );

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addHeadingRef = (el: HTMLSpanElement | null) => {
    if (el && !headingLinesRef.current.includes(el)) {
      headingLinesRef.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#0A0A0A] text-[#F5F3EF] pt-28 pb-10 px-6 sm:px-8 md:px-12 lg:px-16"
    >
      {/* Background Architectural Image with Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0 origin-center will-change-transform"
      >
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Capital Construction and Interior Architectural Living Space"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.72] contrast-[1.08]"
        />
        {/* Editorial Gradients & Vignette for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-[#0E0E0E]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/85 via-[#0E0E0E]/40 to-transparent sm:max-w-2xl" />
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Top Location & Studio Coordinates Tag */}
      <div
        ref={metaRef}
        className="relative z-10 flex items-center justify-between text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
          <span>LUCKNOW · UTTAR PRADESH</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[#A8A49D]">
          <span>SECTOR 11 · INDIRA NAGAR</span>
          <span className="text-[#555]">/</span>
          <span>EST. STUDIO</span>
        </div>
      </div>

      {/* Main Monumental Editorial Typography */}
      <div className="relative z-10 my-auto max-w-4xl pt-8 pb-12">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-medium tracking-[-0.03em] leading-[0.96] text-[#F5F3EF] mb-6">
          <span className="block overflow-hidden">
            <span ref={addHeadingRef} className="inline-block">
              SPACES
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              ref={addHeadingRef}
              className="inline-block font-serif italic font-normal text-[#D8D2C5]"
            >
              THAT DEFINE
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={addHeadingRef} className="inline-block">
              YOU.
            </span>
          </span>
        </h1>

        <p
          ref={subTextRef}
          className="text-base sm:text-lg md:text-xl text-[#C7C2B6] font-light max-w-xl leading-relaxed mb-8"
        >
          {siteConfig.subheadline}
        </p>

        {/* Action Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#work", -60);
            }}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F5F3EF] text-[#111111] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#C5A880] hover:text-[#111111] transition-all duration-300 shadow-xl cursor-pointer"
            data-cursor="explore"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact", -60);
            }}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A1A1A]/90 hover:bg-[#262626] text-[#F5F3EF] border border-[#3A3A3A] text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-sm transition-all duration-300 cursor-pointer"
          >
            <span>START A PROJECT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          </a>
        </div>
      </div>

      {/* Bottom Scroll Discovery Bar */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-10 flex items-center justify-between text-xs font-mono tracking-[0.2em] text-[#999] border-t border-[#333333]/40 pt-4"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#about", -60);
          }}
          className="flex items-center gap-2 hover:text-[#F5F3EF] transition-colors cursor-pointer"
        >
          <span>SCROLL</span>
          <ArrowDown size={14} className="animate-bounce" />
          <span>DISCOVER</span>
        </a>

        <div className="hidden sm:block text-[#77736C]">
          ARCHITECTURE · INTERIOR · EXECUTION
        </div>
      </div>
    </section>
  );
}
