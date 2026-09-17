"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, MapPin, Phone, MessageSquare } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";
import { useToast } from "@/components/ui/Toast";
import { getPhoneHref, getWhatsAppHref, getGoogleMapsHref } from "@/lib/utils";
import { useSmoothScroll } from "@/components/motion/SmoothScroll";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { showContactFallback } = useToast();
  const { scrollTo } = useSmoothScroll();
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsAppHref();
  const mapsHref = getGoogleMapsHref();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      scrollTo(href, -50);
    }, 250);
  };

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

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 30 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-[9990] bg-[#0E0E0E] text-[#F5F3EF] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#222222] pb-6">
            <div>
              <span className="block text-xs font-mono tracking-[0.25em] text-[#B39268]">
                LUCKNOW, UP
              </span>
              <span className="text-sm font-medium tracking-wider text-[#F5F3EF]">
                CAPITAL CONSTRUCTION & INTERIOR
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-[#1C1C1C] text-[#F5F3EF] hover:bg-[#282828] transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto py-8 flex flex-col gap-5">
            {siteConfig.navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                custom={i}
                variants={itemVariants}
                className="overflow-hidden"
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group flex items-center justify-between text-2xl sm:text-4xl font-light tracking-tight text-[#EAE6DE] hover:text-[#B39268] transition-colors py-2 border-b border-[#1C1C1C] cursor-pointer"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-[#888888] group-hover:text-[#B39268] transition-colors">
                      0{i + 1}
                    </span>
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-[#666666] group-hover:text-[#B39268] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Bottom Actions & Studio Details */}
          <motion.div
            custom={siteConfig.navLinks.length}
            variants={itemVariants}
            className="pt-6 border-t border-[#222222] flex flex-col gap-5"
          >
            <div className="grid grid-cols-2 gap-3">
              <a
                href={whatsappHref || "#"}
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-[#1C1C1C] hover:bg-[#282828] text-[#F5F3EF] rounded-lg text-xs font-medium tracking-wider uppercase transition-colors"
              >
                <MessageSquare size={15} className="text-[#25D366]" />
                WhatsApp
              </a>
              <a
                href={phoneHref || "#"}
                onClick={handlePhoneClick}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-[#1C1C1C] hover:bg-[#282828] text-[#F5F3EF] rounded-lg text-xs font-medium tracking-wider uppercase transition-colors"
              >
                <Phone size={15} className="text-[#B39268]" />
                Call Studio
              </a>
            </div>

            <div className="flex items-center justify-between text-xs text-[#888888]">
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F5F3EF] transition-colors"
              >
                <MapPin size={14} className="text-[#B39268]" />
                <span>Sector 11, Indira Nagar</span>
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F5F3EF] transition-colors"
              >
                <InstagramIcon size={14} />
                <span>@capitalconstruction.in</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
