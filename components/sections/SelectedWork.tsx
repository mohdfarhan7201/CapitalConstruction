"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, MapPin, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, ProjectItem } from "@/config/site";

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="work"
      className="relative bg-[#F5F3EF] text-[#111111] py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-[#E3DDD1]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-[#D9D3C5]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#8A6D47] tracking-[0.25em]">
                03 // PORTFOLIO
              </span>
              <div className="w-8 h-[1px] bg-[#8A6D47]" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
              SELECTED <span className="font-serif italic font-normal text-[#8A6D47]">WORK</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <span className="text-xs font-mono text-[#77736C] tracking-[0.2em] uppercase">
              RESIDENTIAL & COMMERCIAL COMMISSIONS
            </span>
          </div>
        </div>

        {/* Asymmetrical Project Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {siteConfig.projects.slice(0, 4).map((project, index) => {
            const isWide = index === 0 || index === 3;
            const colSpan = isWide ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <div
                key={project.id}
                className={`${colSpan} group cursor-pointer`}
                onClick={() => setSelectedProject(project)}
                data-cursor="view"
              >
                {/* Image Container with Hover Effects */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#E5E0D6] border border-[#DDD7CB] shadow-sm transition-all duration-500 group-hover:shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-center filter brightness-[0.94] transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-100"
                  />

                  {/* Dark Elegant Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0E0E0E]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#F5F3EF] text-[#111111] flex items-center justify-center shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight size={22} />
                    </div>
                  </div>

                  {/* Project Index Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-[#111111]/70 backdrop-blur-md text-[#F5F3EF] text-xs font-mono tracking-wider uppercase border border-white/10">
                      PROJECT {project.number}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-[#F5F3EF]/90 backdrop-blur-md text-[#111111] text-xs font-medium tracking-wider uppercase shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Metadata Row */}
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#111111] group-hover:text-[#8A6D47] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-xs text-[#77736C]">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-[#8A6D47]" />
                        {project.location}
                      </span>
                      <span>·</span>
                      <span>{project.scope}</span>
                    </div>
                  </div>

                  <div className="mt-1">
                    <span className="text-xs font-mono text-[#8A6D47] tracking-wider uppercase underline underline-offset-4 group-hover:text-[#111111] transition-colors">
                      EXPLORE
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#0A0A0A]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#141414] border border-[#2E2E2E] rounded-2xl overflow-hidden shadow-2xl text-[#F5F3EF] max-h-[90vh] flex flex-col"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#1E1E1E]/80 border border-[#333] text-[#F5F3EF] hover:bg-[#2A2A2A] transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="relative aspect-[16/9] w-full bg-[#111] shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 rounded-full bg-[#C5A880] text-[#111111] text-xs font-semibold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-light text-[#F5F3EF]">
                    {selectedProject.title}
                  </h3>
                  <span className="text-xs font-mono text-[#C5A880]">
                    {selectedProject.number}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#888888] mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#C5A880]" />
                    {selectedProject.location}
                  </span>
                  <span>/</span>
                  <span className="flex items-center gap-1.5">
                    <Layers size={13} className="text-[#C5A880]" />
                    {selectedProject.scope}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#D4CFC7] font-light leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
                  <span className="text-xs text-[#888]">
                    Capital Construction & Interior · Lucknow
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A880] text-[#111111] text-xs font-semibold tracking-wider uppercase hover:bg-[#E2C79E] transition-colors"
                  >
                    <span>Inquire About Similar Project</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
