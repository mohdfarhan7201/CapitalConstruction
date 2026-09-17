"use client";

import React from "react";
import { MapPin, Phone, MessageSquare, ExternalLink, Navigation } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useToast } from "@/components/ui/Toast";
import { getPhoneHref, getWhatsAppHref, getGoogleMapsHref } from "@/lib/utils";

export function LocationSection() {
  const { showContactFallback } = useToast();
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsAppHref();
  const mapsHref = getGoogleMapsHref();

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (!phoneHref) {
      e.preventDefault();
      showContactFallback("phone");
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!whatsappHref) {
      e.preventDefault();
      showContactFallback("whatsapp");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#F5F3EF] text-[#111111] py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-[#E3DDD1]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-mono text-[#8A6D47] tracking-[0.25em]">
            09 // STUDIO & COORDINATES
          </span>
          <div className="w-8 h-[1px] bg-[#8A6D47]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Monumental Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.02] text-[#111111] mb-8">
              LET’S BUILD <br />
              <span className="font-serif italic font-normal text-[#8A6D47]">SOMETHING</span> <br />
              BEAUTIFUL.
            </h2>
            <p className="text-base sm:text-lg text-[#55514A] font-light leading-relaxed max-w-md mb-10">
              Whether you are acquiring a new residential property in Lucknow or orchestrating an architectural renovation, our studio is ready to consult.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={whatsappHref || "#"}
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111111] text-[#F5F3EF] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#8A6D47] transition-all duration-300 shadow-md"
              >
                <MessageSquare size={16} className="text-[#25D366]" />
                <span>WHATSAPP US</span>
              </a>

              <a
                href={phoneHref || "#"}
                onClick={handlePhoneClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#111111] border border-[#D5CFC3] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#EBE5DA] transition-all duration-300 shadow-sm"
              >
                <Phone size={16} className="text-[#8A6D47]" />
                <span>{phoneHref ? "CALL US" : "CALL US (INFO)"}</span>
              </a>
            </div>
          </div>

          {/* Location & Studio Details Card */}
          <div className="lg:col-span-6 bg-[#EBE6DC] border border-[#DDD7CB] rounded-2xl p-8 sm:p-12 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#D8D2C4] pb-4 mb-8">
                <span className="text-xs font-mono text-[#8A6D47] tracking-widest uppercase">
                  OFFICIAL STUDIO LOCATION
                </span>
                <span className="text-xs font-mono text-[#77736C]">LUCKNOW · 226016</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-[#111111] mb-4">
                {siteConfig.companyName}
              </h3>

              <div className="space-y-1.5 text-sm sm:text-base text-[#4E4A44] font-light mb-8">
                {siteConfig.addressLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              {/* Geographic Coordinates Display */}
              <div className="flex items-center gap-6 py-4 px-4 rounded-lg bg-[#DFD9CE] text-xs font-mono text-[#66625B] mb-8">
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-[#8A6D47]" />
                  <span>26.8833° N, 80.9939° E</span>
                </div>
                <span className="text-[#999]">•</span>
                <span>INDIRA NAGAR SECTOR 11</span>
              </div>
            </div>

            {/* Google Maps Directions Action */}
            <div className="pt-6 border-t border-[#D8D2C4]">
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-[#111111] hover:bg-[#8A6D47] text-[#F5F3EF] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md"
              >
                <Navigation size={16} />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                <ExternalLink
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
