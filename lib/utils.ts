import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/config/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPhoneHref(phone = siteConfig.phone): string | null {
  if (!phone || phone.trim() === "") return null;
  const clean = phone.replace(/[^0-9+]/g, "");
  return `tel:${clean}`;
}

export function getWhatsAppHref(
  whatsapp = siteConfig.whatsapp,
  message = siteConfig.defaultWhatsAppMessage
): string | null {
  if (!whatsapp || whatsapp.trim() === "") return null;
  const clean = whatsapp.replace(/[^0-9]/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${clean}?text=${encoded}`;
}

export function getGoogleMapsHref(
  address = siteConfig.address,
  customUrl = siteConfig.googleMapsUrl
): string {
  if (customUrl && customUrl.trim() !== "") {
    return customUrl;
  }
  const encoded = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
}
