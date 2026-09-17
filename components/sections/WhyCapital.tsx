"use client";

import React from "react";
import { siteConfig } from "@/config/site";

export function WhyCapital() {
  return (
    <section className="relative bg-[#F5F3EF] text-[#111111] py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-[#E3DDD1]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#D9D3C5]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#8A6D47] tracking-[0.25em]">
                05 // FOUNDATIONS
              </span>
              <div className="w-8 h-[1px] bg-[#8A6D47]" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
              BUILT AROUND <br />
              <span className="font-serif italic font-normal text-[#8A6D47]">YOUR SPACE.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-light text-[#635F59] max-w-sm">
            Core execution tenets guiding every interior concept, civil calculation, and millimeter of joinery.
          </p>
        </div>

        {/* 4 Architectural Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#D9D3C5]">
          {siteConfig.principles.map((principle, index) => (
            <div
              key={principle.number}
              className={`flex flex-col justify-between p-2 lg:px-8 ${
                index === 0 ? "lg:pl-0" : ""
              } ${index === 3 ? "lg:pr-0" : ""}`}
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-mono text-[#8A6D47] mb-6 font-light">
                  {principle.number}
                </span>
                <span className="block text-[11px] font-mono tracking-widest text-[#77736C] uppercase mb-2">
                  {principle.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#111111] mb-4">
                  {principle.title}
                </h3>
              </div>

              <p className="text-sm font-light text-[#57534D] leading-relaxed pt-4 border-t border-[#E5E0D6]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
