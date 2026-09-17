"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section
      id="transformation"
      className="relative bg-[#F5F3EF] text-[#111111] py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-[#E3DDD1] select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-[#D9D3C5]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#8A6D47] tracking-[0.25em]">
                07 // SPATIAL EVOLUTION
              </span>
              <div className="w-8 h-[1px] bg-[#8A6D47]" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#111111]">
              TRANSFORMATION <br />
              <span className="font-serif italic font-normal text-[#8A6D47]">IN DETAIL.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <span className="text-xs font-mono text-[#77736C] tracking-[0.2em] uppercase block">
              DRAG SLIDER TO COMPARE
            </span>
            <span className="text-xs text-[#8A8680]">
              Structural framing to white-glove handover
            </span>
          </div>
        </div>

        {/* Before / After Interactive Slider Frame */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          data-cursor="drag"
          className="relative aspect-[16/10] sm:aspect-[16/9] w-full max-w-6xl mx-auto rounded-2xl overflow-hidden bg-[#E2DCD1] border border-[#DDD7CC] shadow-2xl cursor-ew-resize"
        >
          {/* AFTER Image (Full background layer) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/before-after/after.jpg"
              alt="Completed luxury interior space after turnkey transformation"
              fill
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="object-cover object-center"
              priority
            />
            {/* Tag Right */}
            <div className="absolute bottom-6 right-6 z-10">
              <span className="px-4 py-2 rounded-full bg-[#111111]/85 backdrop-blur-md text-[#F5F3EF] text-xs font-mono tracking-widest uppercase border border-white/10 shadow-lg">
                COMPLETED HANDOVER
              </span>
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay layer) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden will-change-transform"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/images/before-after/before.jpg"
              alt="Raw structural concrete and site execution prior to finishes"
              fill
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="object-cover object-center filter grayscale-[30%]"
              priority
            />
            {/* Tag Left */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="px-4 py-2 rounded-full bg-[#111111]/85 backdrop-blur-md text-[#C5A880] text-xs font-mono tracking-widest uppercase border border-white/10 shadow-lg">
                RAW SITE EXECUTION
              </span>
            </div>
          </div>

          {/* Draggable Divider Line & Knob */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[#F5F3EF] shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] border-2 border-[#F5F3EF] text-[#F5F3EF] flex items-center justify-center shadow-2xl">
              <MoveHorizontal size={18} className="text-[#C5A880]" />
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm font-light text-[#77736C]">
            Representative architectural phase study showing site structural masonry transitioning into bespoke oak joinery and ambient lighting.
          </p>
        </div>
      </div>
    </section>
  );
}
