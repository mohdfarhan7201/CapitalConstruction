"use client";

import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Progress line fill based on scroll through the process section
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );

      // Trigger active step state as items scroll into view
      const stepElements = containerRef.current?.querySelectorAll(".process-step-card");
      stepElements?.forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 65%",
          end: "bottom 65%",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-[#111111] text-[#F5F3EF] py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-[#262626]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#C5A880] tracking-[0.25em]">
                06 // METHODOLOGY
              </span>
              <div className="w-8 h-[1px] bg-[#C5A880]" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F5F3EF]">
              FROM IDEA <br />
              <span className="font-serif italic text-[#C5A880]">TO SPACE.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-light text-[#949088] max-w-sm">
            A transparent, five-phase structural methodology turning abstract aspirations into tangible luxury.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Fixed summary / current active phase tracker */}
          <div className="lg:col-span-4 hidden lg:block sticky top-36 self-start">
            <span className="text-xs font-mono tracking-[0.25em] text-[#77736C] uppercase block mb-3">
              ACTIVE STAGE
            </span>
            <div className="text-5xl font-mono text-[#C5A880] mb-2">
              0{activeStep + 1}
            </div>
            <h3 className="text-2xl font-light tracking-tight text-[#F5F3EF] mb-4">
              {siteConfig.processSteps[activeStep]?.title}
            </h3>
            <span className="text-xs font-mono tracking-wider text-[#A39E93] uppercase block mb-6">
              {siteConfig.processSteps[activeStep]?.phase}
            </span>
            <p className="text-sm font-light text-[#A8A49C] leading-relaxed">
              {siteConfig.processSteps[activeStep]?.description}
            </p>
          </div>

          {/* Right Column: Timeline Steps with Vertical Line */}
          <div className="lg:col-span-8 relative pl-6 sm:pl-10">
            {/* Background Base Line */}
            <div className="absolute left-0 top-3 bottom-3 w-[1px] bg-[#2A2A2A]" />
            {/* Active Progress Line */}
            <div
              ref={lineRef}
              className="absolute left-0 top-3 bottom-3 w-[2px] bg-[#C5A880] origin-top scale-y-0 will-change-transform"
            />

            <div className="flex flex-col gap-12 sm:gap-16">
              {siteConfig.processSteps.map((step, idx) => {
                const isCurrent = activeStep === idx;

                return (
                  <div
                    key={step.number}
                    className={`process-step-card relative transition-opacity duration-300 ${
                      isCurrent ? "opacity-100" : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    {/* Node Dot on Timeline */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        isCurrent
                          ? "bg-[#C5A880] border-[#F5F3EF] ring-4 ring-[#C5A880]/20 scale-125"
                          : "bg-[#111111] border-[#444444]"
                      }`}
                    />

                    <div className="p-6 sm:p-8 rounded-xl bg-[#171717] border border-[#262626] shadow-sm">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                        <span className="text-xs font-mono text-[#C5A880] tracking-widest uppercase">
                          PHASE {step.number} // {step.phase}
                        </span>
                        <span className="text-xs font-mono text-[#77736C]">
                          STEP 0{idx + 1} OF 05
                        </span>
                      </div>

                      <h4 className="text-2xl sm:text-3xl font-light tracking-tight text-[#F5F3EF] mb-3">
                        {step.title}
                      </h4>

                      <p className="text-sm sm:text-base font-light text-[#BEB9AE] leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="pt-4 border-t border-[#262626]">
                        <span className="text-[11px] font-mono tracking-wider text-[#77736C] uppercase block mb-3">
                          KEY DELIVERABLES & MILESTONES
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.deliverables.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs sm:text-sm text-[#CDC8BD]"
                            >
                              <CheckCircle2 size={13} className="text-[#C5A880] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
