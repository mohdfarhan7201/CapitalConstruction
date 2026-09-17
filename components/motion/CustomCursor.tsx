"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check touch device or reduced motion
    const touchCheck =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (touchCheck || reducedMotion) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        if (type === "view") {
          setCursorText("VIEW");
          setIsHovered(true);
        } else if (type === "drag") {
          setCursorText("DRAG");
          setIsHovered(true);
        } else if (type === "explore") {
          setCursorText("EXPLORE");
          setIsHovered(true);
        } else {
          setCursorText("");
          setIsHovered(true);
        }
      } else {
        const isInteractive = target.closest("a, button, input, textarea, select");
        if (isInteractive) {
          setIsHovered(true);
          setCursorText("");
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouch || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        width: cursorText ? 80 : isHovered ? 44 : 14,
        height: cursorText ? 80 : isHovered ? 44 : 14,
        backgroundColor: cursorText ? "#FFFFFF" : isHovered ? "rgba(255,255,255,0.2)" : "#FFFFFF",
        border: isHovered && !cursorText ? "1px solid rgba(255,255,255,0.6)" : "none",
      }}
      transition={{ type: "spring", damping: 20, stiffness: 200 }}
    >
      {cursorText && (
        <span className="text-[11px] font-bold tracking-widest text-[#111111] uppercase select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
