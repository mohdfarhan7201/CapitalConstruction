"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

export function BrandStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ruleRef = useRef<HTMLHRElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Split text animation or word spans
      const words = headlineRef.current?.querySelectorAll(".statement-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.15, y: 15 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 80%",
              end: "bottom 55%",
              scrub: 0.8,
            },
          }
        );
      }

      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ruleRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ruleRef.current,
            start: "top 90%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const statement = "WE DON'T JUST BUILD SPACES. WE SHAPE HOW THEY FEEL.";
  const words = statement.split(" ");

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-[#F5F3EF] text-[#111111] py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 lg:px-16 overflow-hidden border-b border-[#E3DDD1]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Architectural Section Index */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#B39268] tracking-[0.25em]">
              01 // PHILOSOPHY
            </span>
            <div className="w-8 h-[1px] bg-[#B39268]" />
          </div>
          <span className="text-xs font-mono text-[#77736C] tracking-[0.2em] uppercase">
            LUCKNOW ARCHITECTURAL PRACTICE
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-5xl">
          <h2
            ref={headlineRef}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-light tracking-[-0.03em] leading-[1.08] text-[#111111] mb-12 sm:mb-16"
          >
            {words.map((word, index) => {
              const isAccent = word === "SHAPE" || word === "FEEL.";
              return (
                <span
                  key={index}
                  className={`statement-word inline-block mr-[0.28em] will-change-transform ${
                    isAccent ? "font-serif italic font-normal text-[#8A6D47]" : ""
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </h2>
        </div>

        {/* Animated Architectural Separator */}
        <hr
          ref={ruleRef}
          className="border-t border-[#D9D3C5] mb-12 sm:mb-16 origin-left"
        />

        {/* Supporting Editorial Paragraph and Micro Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-4">
            <span className="block text-xs font-mono tracking-[0.25em] text-[#77736C] uppercase mb-2">
              DISCIPLINE & RIGOR
            </span>
            <p className="text-sm font-medium text-[#111111]">
              Every square foot is resolved with spatial clarity, structural honesty, and functional balance.
            </p>
          </div>

          <div className="md:col-span-8">
            <p
              ref={paragraphRef}
              className="text-base sm:text-lg md:text-xl text-[#4A4742] font-light leading-relaxed max-w-2xl"
            >
              {siteConfig.editorialParagraph}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-mono text-[#77736C] tracking-wider uppercase">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                Thoughtful Space Planning
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                Precision Construction
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                Bespoke Interior Craft
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
