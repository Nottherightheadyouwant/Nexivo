"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

const products = [
  {
    title: "Reel Crafterr",
    link: "https://www.reelcrafterr.in/",
    thumbnail: "/portfolio/reelcrafterr-cover.jpg",
    category: "Custom Web Application",
    metrics: "0.4s LCP � +300% Inquiries",
  },
  {
    title: "Shri Radhey Book Depot",
    link: "#",
    thumbnail: "/portfolio/shri-radhey-cover.jpg",
    category: "E-Commerce Architecture",
    metrics: "+140% Conversions � 98/100 Speed",
  },
  {
    title: "Nails By Shalvi",
    link: "https://nailsbyshalvi.netlify.app/",
    thumbnail: "/portfolio/nails-by-shalvi-cover.jpg",
    category: "Studio Booking Platform",
    metrics: "3.2x Booking Velocity � 100% Mobile",
  },
  {
    title: "Apex Velocity Dashboard",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    category: "High-Frequency Analytics",
    metrics: "0.1s Latency � WebGL Engine",
  },
  {
    title: "Aura Skincare Flagship",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    category: "Luxury Headless E-Commerce",
    metrics: "+210% Revenue � Shopify Headless",
  },
  {
    title: "Zenith AI Intelligence",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
    category: "SaaS Data Platform",
    metrics: "Sub-Second Edge Rendering",
  },
  {
    title: "Kuro Spatial Studio",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    category: "3D WebGL Portfolio",
    metrics: "Three.js � 100/100 Core Vitals",
  },
  {
    title: "Pulse Health Portal",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    category: "Telemed Platform",
    metrics: "HIPAA Compliant � Next.js App Router",
  },
  {
    title: "Nova Creator Suite",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    category: "Digital Media Engine",
    metrics: "4K Stream Ready � Fast SSR",
  },
  {
    title: "Vanguard CRO Engine",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    category: "Conversion Optimization",
    metrics: "+38% Checkout Conversion",
  },
  {
    title: "Elysian Resort Suite",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    category: "Luxury Booking Platform",
    metrics: "Global Multi-Currency � Stripe API",
  },
  {
    title: "Prism Design System",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
    category: "Enterprise UI Kit",
    metrics: "50+ Accessible Components",
  },
];

export default function Hero() {
  return <HeroParallax products={products} />;
}
