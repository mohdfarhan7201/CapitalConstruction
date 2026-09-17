"use client";

import React from "react";
import { Phone, MapPin } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";
import { useToast } from "@/components/ui/Toast";
import { getPhoneHref, getWhatsAppHref, getGoogleMapsHref } from "@/lib/utils";

export function MobileStickyBar() {
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
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-[9800] bg-[#111111]/95 backdrop-blur-lg border-t border-[#262626] py-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]"
    >
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* WhatsApp */}
        <a
          href={whatsappHref || "#"}
          onClick={handleWhatsAppClick}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#1C1C1C] text-[#F5F3EF] active:bg-[#282828] transition-colors"
        >
          <WhatsAppIcon size={16} className="text-[#25D366] mb-1" />
          <span className="text-[10px] font-mono tracking-wider uppercase">
            WHATSAPP
          </span>
        </a>

        {/* Call */}
        <a
          href={phoneHref || "#"}
          onClick={handlePhoneClick}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#1C1C1C] text-[#F5F3EF] active:bg-[#282828] transition-colors"
        >
          <Phone size={16} className="text-[#C5A880] mb-1" />
          <span className="text-[10px] font-mono tracking-wider uppercase">
            CALL
          </span>
        </a>

        {/* Directions */}
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#1C1C1C] text-[#F5F3EF] active:bg-[#282828] transition-colors"
        >
          <MapPin size={16} className="text-[#A8A49D] mb-1" />
          <span className="text-[10px] font-mono tracking-wider uppercase">
            STUDIO
          </span>
        </a>

        {/* Instagram */}
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#1C1C1C] text-[#F5F3EF] active:bg-[#282828] transition-colors"
        >
          <InstagramIcon size={16} className="text-[#F5F3EF] mb-1" />
          <span className="text-[10px] font-mono tracking-wider uppercase">
            INSTA
          </span>
        </a>
      </div>
    </aside>
  );
}
