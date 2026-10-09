"use client";

import React, { useState } from "react";
import { Cpu, CheckCircle } from "lucide-react";

export default function Technology() {
  const [hoveredTech, setHoveredTech] = useState<string | null>("Next.js 15");

  const techList = [
    { name: "Next.js 15", category: "Core Framework", desc: "React Server Components, App Router, SSG & SSR for sub-second load times.", badge: "Primary" },
    { name: "React 19", category: "UI Architecture", desc: "Declarative component system, concurrent rendering, and hooks architecture.", badge: "Core" },
    { name: "TypeScript", category: "Type Safety", desc: "Strict type definitions preventing runtime bugs and NPE crash errors.", badge: "Standard" },
    { name: "GSAP Motion", category: "Animation Engine", desc: "High-performance GPU-accelerated scroll animations and kinetic typography.", badge: "Core" },
    { name: "Tailwind CSS", category: "Design System", desc: "Utility-first CSS tokens with zero unused stylesheet overhead.", badge: "Styling" },
    { name: "WordPress ACF", category: "Headless CMS", desc: "Custom theme code with ACF Pro fields. Zero heavy plugins or page builders.", badge: "CMS" },
    { name: "Headless Shopify", category: "E-Commerce", desc: "Storefront API with custom Next.js checkout flows and sub-second catalog filter.", badge: "Commerce" },
    { name: "Node.js & APIs", category: "Backend / Cloud", desc: "RESTful endpoints, webhooks, and automated WhatsApp lead integration.", badge: "Backend" },
    { name: "Figma", category: "Design Prototyping", desc: "High-fidelity wireframes, interactive design tokens, and visual identity.", badge: "Design" },
    { name: "Technical SEO", category: "Search Ranking", desc: "Schema.org structured graphs, Core Web Vitals 100/100, Google Maps pack.", badge: "Growth" },
  ];

  return (
    <section id="technology" className="py-24 md:py-36 bg-surface/40 border-y border-surface-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-teal tracking-widest px-3 py-1 bg-surface border border-brand-teal/20 rounded-md">
            <Cpu className="w-3.5 h-3.5" />
            <span>08 // Technology Infrastructure</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            THE TECH <span className="text-brand-teal glow-teal">STACK.</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl font-light">
            We use modern, battle-tested technologies engineered for maximum performance, security, and developer maintainability.
          </p>
        </div>

        {/* Grid of Technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {techList.map((item) => {
            const isSelected = hoveredTech === item.name;
            return (
              <div
                key={item.name}
                onMouseEnter={() => setHoveredTech(item.name)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer space-y-3 ${
                  isSelected
                    ? "bg-surface border-brand-teal/60 shadow-xl box-glow-teal scale-105"
                    : "bg-surface/50 border-surface-border hover:border-surface-border/80"
                }`}
                data-cursor="TECH"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-brand-teal font-bold uppercase px-2 py-0.5 rounded bg-brand-teal/10 border border-brand-teal/20">
                    {item.badge}
                  </span>
                  <CheckCircle className={`w-4 h-4 ${isSelected ? "text-brand-teal" : "text-muted/40"}`} />
                </div>
                <h3 className="font-display font-bold text-lg text-white">{item.name}</h3>
                <p className="font-mono text-[11px] text-muted">{item.category}</p>
              </div>
            );
          })}
        </div>

        {/* Selected Technology Inspection Panel */}
        {hoveredTech && (
          <div className="mt-8 p-6 rounded-2xl bg-surface border border-brand-teal/30 font-mono text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in">
            <div>
              <span className="text-brand-teal font-bold block mb-1">SELECTED TECH SPECIFICATION: {hoveredTech.toUpperCase()}</span>
              <p className="text-slate-300 font-sans text-sm font-light">
                {techList.find((t) => t.name === hoveredTech)?.desc}
              </p>
            </div>
            <span className="px-4 py-2 rounded bg-dark-900 border border-surface-border text-brand-teal text-xs shrink-0 font-bold">
              VERIFIED IN PRODUCTION
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
