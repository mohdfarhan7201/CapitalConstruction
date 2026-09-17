"use client";

import React, { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { useToast } from "@/components/ui/Toast";
import { getWhatsAppHref } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const { showContactFallback } = useToast();
  const whatsappHref = getWhatsAppHref();

  const handleClick = (e: React.MouseEvent) => {
    if (!whatsappHref) {
      e.preventDefault();
      showContactFallback("whatsapp");
    }
  };

  return (
    <aside
      aria-label="Contact actions"
      className="hidden md:block fixed bottom-8 right-8 z-[9900]"
    >
      <a
        href={whatsappHref || "#"}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center bg-[#181818]/90 hover:bg-[#202020] text-[#F5F3EF] border border-[#333333] hover:border-[#25D366]/50 shadow-2xl rounded-full p-3.5 backdrop-blur-md transition-all duration-300"
        aria-label="Chat with Capital Construction & Interior on WhatsApp"
      >
        <div className="w-6 h-6 flex items-center justify-center text-[#25D366]">
          <WhatsAppIcon size={22} className="fill-current" />
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 whitespace-nowrap ${
            isHovered ? "max-w-xs pl-3 pr-2 opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          <span className="text-xs font-semibold tracking-wider text-[#F5F3EF] uppercase">
            CHAT ON WHATSAPP
          </span>
        </div>

        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]" />
        </span>
      </a>
    </aside>
  );
}
