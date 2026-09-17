"use client";

import React from "react";
import { Loader } from "@/components/sections/Loader";
import { Hero } from "@/components/sections/Hero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { Services } from "@/components/sections/Services";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { HorizontalShowcase } from "@/components/sections/HorizontalShowcase";
import { WhyCapital } from "@/components/sections/WhyCapital";
import { Process } from "@/components/sections/Process";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* Luxury Architectural Split-Shutter Loader */}
      <Loader />

      {/* Hero Section */}
      <Hero />

      {/* Brand Statement / Editorial Philosophy */}
      <BrandStatement />

      {/* Interactive Services Section */}
      <Services />

      {/* Selected Work / Featured Projects */}
      <SelectedWork />

      {/* Pinned Horizontal Project Showcase */}
      <HorizontalShowcase />

      {/* Architectural Principles / Why Capital */}
      <WhyCapital />

      {/* 5-Phase Process Timeline */}
      <Process />

      {/* Transformation Before / After Interactive Slider */}
      <BeforeAfter />

      {/* Instagram & Social Proof Grid */}
      <InstagramSection />

      {/* Location, Studio Coordinates & Contact */}
      <LocationSection />

      {/* Monumental Closing Call to Action */}
      <FinalCTA />
    </main>
  );
}
