import type { Metadata, Viewport } from "next";
import { Manrope, Cormorant_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { ToastProvider } from "@/components/ui/Toast";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://capitalconstruction.in"),
  title: "Capital Construction & Interior | Interior Design & Construction in Lucknow",
  description:
    "Premium interior design, construction and space transformation services in Lucknow by Capital Construction & Interior.",
  keywords: [
    "Interior Design Lucknow",
    "Construction Company Lucknow",
    "Architectural Renovation Lucknow",
    "Indira Nagar Interior Designer",
    "Luxury Residential Interior",
    "Capital Construction & Interior",
  ],
  authors: [{ name: siteConfig.companyName }],
  openGraph: {
    title: "Capital Construction & Interior | Interior Design & Construction in Lucknow",
    description:
      "Premium interior design, construction and space transformation services in Lucknow by Capital Construction & Interior.",
    url: "https://capitalconstruction.in",
    siteName: siteConfig.companyName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1600,
        height: 1000,
        alt: "Capital Construction & Interior Design Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Construction & Interior | Interior Design & Construction in Lucknow",
    description:
      "Premium interior design, construction and space transformation services in Lucknow by Capital Construction & Interior.",
    images: ["/images/hero/hero-main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.companyName,
    description: siteConfig.description,
    url: "https://capitalconstruction.in",
    sameAs: [siteConfig.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Paradise Apartment, Sector 11 Main Rd, Narayan Nagar, Sector 11",
      addressLocality: "Indira Nagar, Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226016",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Lucknow",
    },
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5F3EF] text-[#111111] antialiased selection:bg-[#111111] selection:text-[#C5A880]">
        <ToastProvider>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <FloatingWhatsApp />
            <MobileStickyBar />
          </SmoothScroll>
        </ToastProvider>
      </body>
    </html>
  );
}
