"use client";

import React from "react";
import { Code2, Palette, TrendingUp, Check, ArrowUpRight } from "lucide-react";
import { NEXIVO_DETAILS } from "@/lib/utils";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-surface/30 border-y border-surface-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-teal tracking-widest px-3 py-1 bg-surface border border-brand-teal/20 rounded-md">
            <Code2 className="w-3.5 h-3.5" />
            <span>05 // Full Service Spectrum</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            CAPABILITY <span className="text-brand-teal glow-teal">MATRIX.</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl font-light">
            Web engineering is at our core. Supported by brand identity, search engine domination, and revenue growth infrastructure.
          </p>
        </div>

        {/* 3 Column Category Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: WEB DEVELOPMENT (DOMINANT - 6 Cols) */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-surface border border-brand-teal/50 shadow-2xl space-y-6 relative overflow-hidden group hover:border-brand-teal">
            <div className="flex items-center justify-between pb-4 border-b border-surface-border">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-teal/15 text-brand-teal border border-brand-teal/30">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-brand-teal uppercase font-bold">PRIMARY CORE</span>
                  <h3 className="font-display text-2xl font-bold text-white">WEB ENGINEERING</h3>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded bg-brand-teal text-black font-bold uppercase">
                HERO SERVICE
              </span>
            </div>

            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Sub-second custom website builds engineered with React, Next.js, TypeScript, and modern headless architectures. Zero template bloat, maximum performance.
            </p>

            <ul className="space-y-3 font-mono text-xs text-slate-200">
              <li className="flex items-center gap-2 p-2.5 rounded bg-dark-900/80 border border-surface-border">
                <Check className="w-4 h-4 text-brand-teal" />
                <span>Custom Next.js & React Web Applications</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-dark-900/80 border border-surface-border">
                <Check className="w-4 h-4 text-brand-teal" />
                <span>High-Converting E-Commerce & Online Stores</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-dark-900/80 border border-surface-border">
                <Check className="w-4 h-4 text-brand-teal" />
                <span>Custom WordPress ACF & Headless Architectures</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-dark-900/80 border border-surface-border">
                <Check className="w-4 h-4 text-brand-teal" />
                <span>Sub-Second Performance & Speed Upgrades</span>
              </li>
            </ul>

            <a
              href={NEXIVO_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-brand-teal text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-cyan transition-colors"
            >
              <span>Build A Web Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Column 2: DESIGN (3 Cols) */}
          <div className="lg:col-span-3 p-8 rounded-3xl bg-surface/70 border border-surface-border space-y-6 flex flex-col justify-between hover:border-surface-border/80">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-surface-border">
                <div className="p-3 rounded-xl bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-muted uppercase">SUPPORTING</span>
                  <h3 className="font-display text-xl font-bold text-white">UI/UX & DESIGN</h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Cinematic visual identity, Figma design systems, micro-interactions, and conversion-engineered interfaces.
              </p>

              <ul className="space-y-2.5 font-mono text-xs text-slate-300">
                <li className="flex items-center gap-2">• Web Application UI/UX</li>
                <li className="flex items-center gap-2">• Brand Identity & Systems</li>
                <li className="flex items-center gap-2">• Interactive Motion Graphics</li>
                <li className="flex items-center gap-2">• High-Contrast Dark Themes</li>
              </ul>
            </div>
          </div>

          {/* Column 3: GROWTH & SEO (3 Cols) */}
          <div className="lg:col-span-3 p-8 rounded-3xl bg-surface/70 border border-surface-border space-y-6 flex flex-col justify-between hover:border-surface-border/80">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-surface-border">
                <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-muted uppercase">SUPPORTING</span>
                  <h3 className="font-display text-xl font-bold text-white">SEO & GROWTH</h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Local SEO maps pack domination, schema JSON-LD, Google/Meta paid lead campaigns, and conversion optimization.
              </p>

              <ul className="space-y-2.5 font-mono text-xs text-slate-300">
                <li className="flex items-center gap-2">• Google Maps Domination</li>
                <li className="flex items-center gap-2">• Technical SEO & Schema</li>
                <li className="flex items-center gap-2">• Paid Ads (Google & Meta)</li>
                <li className="flex items-center gap-2">• WhatsApp Lead Routing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
