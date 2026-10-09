import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Studio Nexivo | Premium Web Development & Digital Experience Studio",
  description:
    "Studio Nexivo is a high-performance web development and digital experience studio. We engineer custom Next.js websites, React platforms, e-commerce architectures, and sub-second digital experiences for ambitious brands across India and UK.",
  keywords: [
    "Studio Nexivo",
    "Web Development Studio",
    "Custom Next.js Development",
    "React Web Applications",
    "Sub-Second Performance",
    "E-Commerce Web Design",
    "WordPress Headless ACF",
    "Local SEO Google Maps Rank",
    "Jay Parmar",
    "Ahmedabad UK Web Agency",
  ],
  authors: [{ name: "Jay Parmar", url: "https://www.studionexivo.com/" }],
  creator: "Studio Nexivo",
  publisher: "Studio Nexivo",
  metadataBase: new URL("https://www.studionexivo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.studionexivo.com/",
    siteName: "Studio Nexivo",
    title: "Studio Nexivo | Premium Web Development & Digital Experience Studio",
    description:
      "We build for the web. Studio Nexivo engineers sub-second custom web applications, React & Next.js platforms, and conversion-focused digital experiences.",
    images: [
      {
        url: "/logo-clean.png",
        width: 1200,
        height: 630,
        alt: "Studio Nexivo Web Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Nexivo | Premium Web Development Studio",
    description: "We build for the web. High-performance Next.js & React web development studio.",
    images: ["/logo-clean.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />

        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.studionexivo.com/#organization",
                  "name": "Studio Nexivo",
                  "legalName": "Studio Nexivo Digital Agency",
                  "url": "https://www.studionexivo.com/",
                  "logo": "https://www.studionexivo.com/logo-clean.png",
                  "founder": {
                    "@type": "Person",
                    "name": "Jay Parmar"
                  },
                  "sameAs": ["https://www.instagram.com/studio.nexivo/"],
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+919724470737",
                      "contactType": "customer service",
                      "email": "studio.nexivo@gmail.com",
                      "availableLanguage": ["English", "Gujarati", "Hindi"]
                    }
                  ]
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.studionexivo.com/#localbusiness",
                  "name": "Studio Nexivo",
                  "url": "https://www.studionexivo.com/",
                  "telephone": "+919724470737",
                  "email": "studio.nexivo@gmail.com",
                  "address": [
                    {
                      "@type": "PostalAddress",
                      "addressLocality": "Ahmedabad",
                      "addressRegion": "Gujarat",
                      "addressCountry": "IN"
                    },
                    {
                      "@type": "PostalAddress",
                      "addressLocality": "London",
                      "addressCountry": "UK"
                    }
                  ]
                }
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased selection:bg-brand-teal/30 selection:text-white">
        {/* Noise overlay texture */}
        <div className="noise-overlay" />
        
        <CustomCursor />

        <SmoothScroll>
          <Navigation />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
