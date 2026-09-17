"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

export function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0A0A0A] text-[#F5F3EF] py-28 sm:py-36 md:py-48 px-6 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Subtle Architectural Texture Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/images/hero/hero-secondary.jpg"
          alt="Architectural texture"
          fill
          sizes="100vw"
          className="object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <span className="text-xs font-mono tracking-[0.35em] text-[#C5A880] uppercase mb-6 block">
          INDIRA NAGAR · LUCKNOW · EST. STUDIO
        </span>

        <h2
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-[-0.03em] leading-[1.04] text-[#F5F3EF] mb-8"
        >
          YOUR SPACE. <br />
          <span className="font-serif italic font-normal text-[#C5A880]">
            YOUR STORY.
          </span>{" "}
          <br />
          LET’S BUILD IT.
        </h2>

        <p className="text-base sm:text-xl text-[#A39E93] font-light max-w-lg mb-12">
          Tell us what you&apos;re imagining. We engineer vision into tactile physical reality.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F5F3EF] hover:bg-[#C5A880] text-[#111111] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-2xl"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#181818] hover:bg-[#242424] text-[#F5F3EF] border border-[#333333] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300"
          >
            <InstagramIcon size={16} />
            <span>FOLLOW US ON INSTAGRAM</span>
          </a>
        </div>
      </div>
    </section>
  );
}
