"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

interface ToastContextType {
  showToast: (message: string, actionLabel?: string, actionUrl?: string) => void;
  showContactFallback: (type: "phone" | "whatsapp") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{
    id: number;
    message: string;
    actionLabel?: string;
    actionUrl?: string;
  } | null>(null);

  const showToast = (message: string, actionLabel?: string, actionUrl?: string) => {
    setToast({
      id: Date.now(),
      message,
      actionLabel,
      actionUrl,
    });
    setTimeout(() => {
      setToast((prev) => (prev && prev.id === toast?.id ? null : prev));
    }, 6000);
  };

  const showContactFallback = (type: "phone" | "whatsapp") => {
    const label = type === "whatsapp" ? "WhatsApp" : "Phone";
    showToast(
      `${label} line will be updated soon. In the meantime, connect with us directly on Instagram or visit our Lucknow studio.`,
      "Instagram",
      siteConfig.instagram
    );
  };

  return (
    <ToastContext.Provider value={{ showToast, showContactFallback }}>
      {children}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none w-[90%] max-w-md">
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="pointer-events-auto bg-[#141414]/95 text-[#F5F3EF] border border-[#333333] shadow-2xl p-4 rounded-xl flex items-start gap-3 backdrop-blur-md"
            >
              <div className="p-1 rounded-full bg-[#252525] text-[#C5A880] mt-0.5 shrink-0">
                <Info size={16} />
              </div>
              <div className="flex-1 text-xs sm:text-sm leading-relaxed text-[#D6D2CA]">
                {toast.message}
                {toast.actionUrl && (
                  <div className="mt-2.5">
                    <a
                      href={toast.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#C5A880] hover:text-[#E2C79E] transition-colors"
                    >
                      {toast.actionLabel || "View Details"}
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
              <button
                onClick={() => setToast(null)}
                className="text-[#888] hover:text-[#F5F3EF] transition-colors p-1 shrink-0"
                aria-label="Close notification"
              >
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
