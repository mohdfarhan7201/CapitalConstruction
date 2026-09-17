"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";

export function InstagramSection() {
  return (
    <section className="relative bg-[#111111] text-[#F5F3EF] py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#262626]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#C5A880] tracking-[0.25em]">
                08 // STUDIO FEED
              </span>
              <div className="w-8 h-[1px] bg-[#C5A880]" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F5F3EF]">
              FOLLOW THE <br />
              <span className="font-serif italic text-[#C5A880]">JOURNEY.</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1F1F1F] hover:bg-[#C5A880] text-[#F5F3EF] hover:text-[#111111] border border-[#333333] hover:border-[#C5A880] transition-all duration-300 text-xs font-mono tracking-wider uppercase shadow-md group"
            >
              <InstagramIcon size={16} />
              <span>{siteConfig.instagramHandle}</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* 3x2 Editorial Instagram Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.instagramPosts.map((post) => (
            <a
              key={post.id}
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square w-full rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#2B2B2B] shadow-lg block"
              data-cursor="view"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center filter brightness-[0.92] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-100"
              />

              {/* Hover Dark Overlay with Details */}
              <div className="absolute inset-0 bg-[#0E0E0E]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#C5A880] bg-[#1E1E1E] px-2.5 py-1 rounded">
                    {post.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#2A2A2A] text-[#F5F3EF] flex items-center justify-center">
                    <InstagramIcon size={16} />
                  </div>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-[#DDD8CE] font-light line-clamp-3 mb-3">
                    {post.caption}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[#C5A880] tracking-wider uppercase underline underline-offset-4">
                    VIEW ON INSTAGRAM
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-10 text-center text-xs font-mono text-[#77736C]">
          <span>UPDATES FROM CURRENT SITES & STUDIO WORK IN PROGRESS</span>
        </div>
      </div>
    </section>
  );
}
