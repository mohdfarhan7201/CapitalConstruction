"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig, ServiceItem } from "@/config/site";

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="relative bg-[#111111] text-[#F5F3EF] py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#262626]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#C5A880] tracking-[0.25em]">
                02 // CAPABILITIES
              </span>
              <div className="w-8 h-[1px] bg-[#C5A880]" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F5F3EF]">
              WHAT WE <span className="font-serif italic text-[#C5A880]">CREATE</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-light text-[#949088] max-w-sm">
            End-to-end spatial realization from bare concrete to refined interior finishes across Lucknow.
          </p>
        </div>

        {/* Large Interactive Horizontal List */}
        <div className="flex flex-col divide-y divide-[#222222]">
          {siteConfig.services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <div
                key={service.slug}
                onMouseEnter={() => setActiveService(index)}
                className="group relative transition-colors duration-300 py-6 sm:py-8 lg:py-10 cursor-pointer"
              >
                {/* Header Row */}
                <div
                  onClick={() => setActiveService(isActive ? null : index)}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-baseline gap-6 sm:gap-12 md:gap-16">
                    <span className="text-xs sm:text-sm font-mono tracking-widest text-[#77736C] group-hover:text-[#C5A880] transition-colors">
                      {service.number}
                    </span>
                    <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#EBE7DF] group-hover:text-[#F5F3EF] group-hover:translate-x-2 transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden md:inline-block text-xs font-mono tracking-wider text-[#888] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      {service.subtitle}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? "bg-[#C5A880] border-[#C5A880] text-[#111111] rotate-45"
                          : "border-[#333333] text-[#77736C] group-hover:border-[#C5A880] group-hover:text-[#F5F3EF]"
                      }`}
                    >
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

                {/* Expanded Content Area (Framer Motion) */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 sm:pt-10 pb-4 items-center">
                        {/* Image Preview */}
                        <div className="lg:col-span-5 relative h-56 sm:h-72 w-full rounded-lg overflow-hidden border border-[#2A2A2A] shadow-2xl">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover object-center filter brightness-[0.9] contrast-[1.05]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                          <span className="absolute bottom-3 left-4 text-[11px] font-mono text-[#C5A880] tracking-wider uppercase">
                            SERVICE SPECIFICATION
                          </span>
                        </div>

                        {/* Description & Deliverables */}
                        <div className="lg:col-span-7 flex flex-col justify-between h-full pl-0 lg:pl-6">
                          <div>
                            <span className="text-xs font-mono text-[#C5A880] tracking-widest uppercase block mb-2">
                              {service.subtitle}
                            </span>
                            <p className="text-sm sm:text-base text-[#BFBAB0] font-light leading-relaxed mb-6">
                              {service.description}
                            </p>
                          </div>

                          <div>
                            <span className="text-xs font-mono tracking-widest uppercase text-[#77736C] block mb-3">
                              SCOPE OF DELIVERY
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {service.features.map((feat, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2.5 text-xs sm:text-sm text-[#D1CCC2]"
                                >
                                  <Check size={14} className="text-[#C5A880] shrink-0" />
                                  <span>{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-6">
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C5A880] hover:text-[#F5F3EF] uppercase transition-colors"
                            >
                              <span>CONSULT REGARDING {service.title}</span>
                              <ArrowUpRight size={14} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
