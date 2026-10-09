"use client";

import React, { useState, useRef, useEffect } from "react";
import { Monitor, Smartphone, Tablet, Zap, RefreshCw, Shield, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function InteractiveShowcase() {
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeView, setActiveView] = useState<"live" | "specs">("live");
  const containerRef = useRef<HTMLDivElement>(null);
  const showcaseFrameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && (window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches);
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!isMobile && !prefersReducedMotion && containerRef.current && showcaseFrameRef.current) {
        gsap.fromTo(
          showcaseFrameRef.current,
          { scale: 0.85, y: 60 },
          {
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 30%",
              scrub: 0.8,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="showcase" ref={containerRef} className="py-28 md:py-40 bg-surface/40 border-y border-surface-border relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-teal/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-teal tracking-widest px-3 py-1 bg-surface border border-brand-teal/20 rounded-full">
            <Zap className="w-3.5 h-3.5" />
            <span>05 // Interactive Web Canvas</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight">
            WHAT WE <span className="text-brand-teal glow-teal">ENGINEER.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Test live viewport responsive scaling, sub-second rendering performance, and modern web application architecture in real time.
          </p>
        </div>

        {/* Browser Showcase Wrapper */}
        <div ref={showcaseFrameRef} className="max-w-5xl mx-auto space-y-6">
          {/* Top Control Header Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-surface border border-surface-border backdrop-blur-xl">
            {/* Viewport Selectors */}
            <div className="flex items-center gap-2 bg-dark-900/80 p-1.5 rounded-xl border border-surface-border">
              <button
                onClick={() => setViewportMode("desktop")}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 font-mono text-xs transition-colors ${
                  viewportMode === "desktop" ? "bg-brand-teal text-black font-bold" : "text-muted hover:text-white"
                }`}
                data-cursor="DESKTOP"
              >
                <Monitor className="w-4 h-4" />
                <span className="hidden sm:inline">Desktop 1920px</span>
              </button>
              <button
                onClick={() => setViewportMode("tablet")}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 font-mono text-xs transition-colors ${
                  viewportMode === "tablet" ? "bg-brand-teal text-black font-bold" : "text-muted hover:text-white"
                }`}
                data-cursor="TABLET"
              >
                <Tablet className="w-4 h-4" />
                <span className="hidden sm:inline">Tablet 768px</span>
              </button>
              <button
                onClick={() => setViewportMode("mobile")}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 font-mono text-xs transition-colors ${
                  viewportMode === "mobile" ? "bg-brand-teal text-black font-bold" : "text-muted hover:text-white"
                }`}
                data-cursor="MOBILE"
              >
                <Smartphone className="w-4 h-4" />
                <span className="hidden sm:inline">Mobile 390px</span>
              </button>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveView("live")}
                className={`px-3.5 py-1.5 rounded-lg transition-colors ${
                  activeView === "live" ? "bg-brand-teal/20 text-brand-teal font-semibold border border-brand-teal/40" : "text-muted hover:text-white"
                }`}
              >
                Live Canvas
              </button>
              <button
                onClick={() => setActiveView("specs")}
                className={`px-3.5 py-1.5 rounded-lg transition-colors ${
                  activeView === "specs" ? "bg-brand-teal/20 text-brand-teal font-semibold border border-brand-teal/40" : "text-muted hover:text-white"
                }`}
              >
                Core Specifications
              </button>
            </div>
          </div>

          {/* Interactive Simulated Window Frame */}
          <div
            className={`mx-auto transition-all duration-500 ease-out rounded-2xl bg-dark-900 border border-surface-border shadow-2xl overflow-hidden ${
              viewportMode === "desktop"
                ? "w-full min-h-[520px]"
                : viewportMode === "tablet"
                ? "max-w-[768px] min-h-[480px]"
                : "max-w-[390px] min-h-[580px]"
            }`}
          >
            {/* Simulated Window Title Bar */}
            <div className="bg-surface p-3.5 border-b border-surface-border flex items-center justify-between font-mono text-xs text-muted">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="px-4 py-1 rounded-md bg-dark-900 border border-surface-border text-slate-300 flex items-center gap-2 text-[11px] truncate max-w-[340px]">
                <Shield className="w-3.5 h-3.5 text-brand-teal" />
                <span>https://studio-nexivo.com/experience</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 hover:text-brand-teal cursor-pointer" />
              </div>
            </div>

            {/* Simulated Canvas Body */}
            <div className="p-8 sm:p-10 relative min-h-[420px] flex flex-col justify-between">
              {activeView === "live" && (
                <div className="space-y-8 animate-fade-in">
                  <div className="flex items-center justify-between border-b border-surface-border/80 pb-4">
                    <span className="font-display font-extrabold text-xl sm:text-2xl text-white">STUDIO NEXIVO PLATFORM</span>
                    <span className="px-3 py-1 bg-brand-teal/15 text-brand-teal text-xs font-mono rounded-full font-bold border border-brand-teal/30">
                      SUB-SECOND RENDER PASS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4">
                      <span className="text-xs font-mono text-brand-teal uppercase tracking-wider font-semibold">NEXT.JS 15 + REACT 19 ARCHITECTURE</span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                        Built for instant response and sub-second load times.
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        Every site engineered by Studio Nexivo utilizes modern React Server Components, pre-rendered route bundles, and zero excess script bloat.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-surface border border-brand-teal/30 space-y-3 font-mono text-xs shadow-xl">
                      <div className="flex justify-between">
                        <span className="text-muted">LCP Performance:</span>
                        <span className="text-brand-teal font-bold">0.28 seconds</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Core Web Vitals:</span>
                        <span className="text-emerald-400 font-bold">Passed (100/100)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">SEO Infrastructure:</span>
                        <span className="text-cyan-400 font-bold">Schema JSON-LD Ready</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Motion Engine:</span>
                        <span className="text-white font-bold">GSAP + Lenis Smooth</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeView === "specs" && (
                <div className="space-y-6 animate-fade-in font-mono">
                  <div className="text-xs text-brand-teal font-bold uppercase tracking-wider">ENGINEERING STANDARDS & AUDIT CHECKS</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-surface border border-surface-border space-y-1">
                      <span className="text-xs font-bold text-white block">01. Sub-Second LCP Guarantee</span>
                      <span className="text-[11px] text-muted block">Pre-rendered route bundles and optimized image pipelines ensuring sub-0.5s LCP loading worldwide.</span>
                    </div>
                    <div className="p-4 rounded-xl bg-surface border border-surface-border space-y-1">
                      <span className="text-xs font-bold text-white block">02. 100/100 Lighthouse Benchmark</span>
                      <span className="text-[11px] text-muted block">Clean HTML5 semantics, accessible ARIA attributes, and optimal color contrast scores.</span>
                    </div>
                    <div className="p-4 rounded-xl bg-surface border border-surface-border space-y-1">
                      <span className="text-xs font-bold text-white block">03. Responsive Fluid Motion</span>
                      <span className="text-[11px] text-muted block">Hardware-accelerated GSAP transforms (`translate3d`, `scale`) for silky smooth 60 FPS transitions.</span>
                    </div>
                    <div className="p-4 rounded-xl bg-surface border border-surface-border space-y-1">
                      <span className="text-xs font-bold text-white block">04. Local & Global SEO Domination</span>
                      <span className="text-[11px] text-muted block">Schema.org graph graph, structured metadata, and Google Maps local pack optimization.</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-muted">
                <span>VIEWPORT MODE: {viewportMode.toUpperCase()}</span>
                <span className="text-brand-teal font-semibold">POWERED BY STUDIO NEXIVO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
