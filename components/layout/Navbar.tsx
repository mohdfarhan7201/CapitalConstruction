"use client";

import React, { useState, useEffect } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MobileMenu } from "./MobileMenu";
import { useSmoothScroll } from "@/components/motion/SmoothScroll";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href, -60);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0E0E0E]/85 backdrop-blur-md border-b border-[#262626]/70 py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex flex-col tracking-tight text-left select-none"
          >
            <span className="text-base sm:text-lg md:text-xl font-bold tracking-[0.18em] text-[#F5F3EF] uppercase transition-colors group-hover:text-[#C5A880]">
              CAPITAL
            </span>
            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.28em] text-[#9E9A92] uppercase group-hover:text-[#D4BA94] transition-colors">
              CONSTRUCTION & INTERIOR
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium tracking-[0.2em] text-[#C2BEB6] hover:text-[#F5F3EF] transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#111111] bg-[#F5F3EF] hover:bg-[#C5A880] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-full bg-[#1A1A1A]/80 border border-[#2E2E2E] text-[#F5F3EF] hover:bg-[#252525] transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
