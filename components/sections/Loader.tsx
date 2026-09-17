"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoaderProps {
  onLoadingComplete?: () => void;
}

export function Loader({ onLoadingComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const logoBoxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      if (onLoadingComplete) onLoadingComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsDone(true);
          if (onLoadingComplete) onLoadingComplete();
        },
      });

      // 1. Logo box & line initial entrance
      tl.fromTo(
        logoBoxRef.current,
        { scale: 0.8, opacity: 0, rotate: -8 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.7, ease: "power2.inOut" },
        "-=0.3"
      )
      // 2. Subtle pulse & fade of center content
      .to(centerContentRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.35,
        ease: "power2.in",
        delay: 0.15,
      })
      // 3. Cinematic Split-Shutter Curtain Reveal (Top slides up, Bottom slides down)
      .to(
        topPanelRef.current,
        {
          yPercent: -100,
          duration: 0.85,
          ease: "power4.inOut",
        },
        "-=0.1"
      )
      .to(
        bottomPanelRef.current,
        {
          yPercent: 100,
          duration: 0.85,
          ease: "power4.inOut",
        },
        "<"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [onLoadingComplete]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] pointer-events-none select-none flex items-center justify-center overflow-hidden"
    >
      {/* Top Split Panel */}
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#0C0C0C] border-b border-[#222222] will-change-transform pointer-events-auto"
      />

      {/* Bottom Split Panel */}
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0C0C0C] border-t border-[#222222] will-change-transform pointer-events-auto"
      />

      {/* Center Architectural Crest & Monogram */}
      <div
        ref={centerContentRef}
        className="relative z-20 flex flex-col items-center justify-center text-center px-6"
      >
        {/* Geometric Architectural Monogram Box */}
        <div
          ref={logoBoxRef}
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-[#C5A880]/50 bg-[#141414]/90 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-black/80 mb-6"
        >
          {/* Subtle Corner Accents */}
          <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#C5A880]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#C5A880]" />
          <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#C5A880]" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#C5A880]" />

          {/* Lettermark 'C' */}
          <span className="text-2xl sm:text-3xl font-light tracking-tighter text-[#F5F3EF] font-serif italic">
            C
          </span>
        </div>

        {/* Brand Typography */}
        <div ref={textRef} className="flex flex-col items-center">
          <span className="text-sm sm:text-base font-bold tracking-[0.35em] text-[#F5F3EF] uppercase mb-1">
            CAPITAL
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] text-[#C5A880] uppercase mb-4">
            CONSTRUCTION & INTERIOR
          </span>
          <span className="text-[9px] font-mono tracking-[0.25em] text-[#666666] uppercase">
            LUCKNOW · EST. STUDIO
          </span>
        </div>

        {/* Minimal Kinetic Expansion Line */}
        <div className="w-32 sm:w-48 h-[1px] bg-[#222222] mt-6 overflow-hidden">
          <div
            ref={lineRef}
            className="w-full h-full bg-gradient-to-r from-transparent via-[#C5A880] to-transparent origin-center"
          />
        </div>
      </div>
    </div>
  );
}
