"use client";

import React from "react";
import { ArrowUp, MapPin, MessageSquare, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";
import { useToast } from "@/components/ui/Toast";
import { getPhoneHref, getWhatsAppHref, getGoogleMapsHref } from "@/lib/utils";
import { useSmoothScroll } from "@/components/motion/SmoothScroll";

export function Footer() {
  const { showContactFallback } = useToast();
  const { scrollTo } = useSmoothScroll();
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href, -60);
  };

  const scrollToTop = () => {
    scrollTo(0);
  };

  return (
    <footer className="relative bg-[#070707] text-[#F5F3EF] pt-20 pb-28 sm:pb-16 px-6 sm:px-8 md:px-12 lg:px-16 border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#1F1F1F]">
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#F5F3EF] uppercase block mb-1">
                CAPITAL
              </span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#9E9A92] uppercase block mb-6">
                CONSTRUCTION & INTERIOR
              </span>
              <p className="text-sm font-light text-[#888888] max-w-sm leading-relaxed">
                Architecture, interior design, and turnkey structural execution studio based in Lucknow, Uttar Pradesh.
              </p>
            </div>

            <div className="mt-8 text-xs font-mono text-[#666666] flex items-center gap-2">
              <MapPin size={13} className="text-[#C5A880]" />
              <span>Paradise Apartment, Sector 11 Main Rd, Indira Nagar</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase block mb-6">
              NAVIGATION
            </span>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs sm:text-sm font-light text-[#A8A49D] hover:text-[#F5F3EF] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Direct Actions Column */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase block mb-6">
              CONNECT
            </span>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-[#A8A49D]">
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#F5F3EF] transition-colors"
                >
                  <InstagramIcon size={14} className="text-[#C5A880]" />
                  <span>Instagram Feed</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref || "#"}
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 hover:text-[#F5F3EF] transition-colors"
                >
                  <MessageSquare size={14} className="text-[#25D366]" />
                  <span>WhatsApp Studio</span>
                </a>
              </li>
              <li>
                <a
                  href={phoneHref || "#"}
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 hover:text-[#F5F3EF] transition-colors"
                >
                  <Phone size={14} className="text-[#C5A880]" />
                  <span>Call Direct</span>
                </a>
              </li>
              <li>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#F5F3EF] transition-colors"
                >
                  <MapPin size={14} className="text-[#C5A880]" />
                  <span>Google Maps Coordinates</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <div>
            © 2026 {siteConfig.companyName}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#888888] hover:text-[#F5F3EF] transition-colors uppercase tracking-wider"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
