"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Sparkles, Terminal, Zap, ShieldCheck } from "lucide-react";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const morphBadgeRef = useRef<HTMLSpanElement>(null);
  const morphTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && (window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches);
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // 1. Theme Color Flip (Dark -> Light Off-White -> Dark)
      if (!isMobile && !prefersReducedMotion && containerRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => {
            document.body.classList.add("light-mode-section");
          },
          onLeave: () => {
            document.body.classList.remove("light-mode-section");
          },
          onEnterBack: () => {
            document.body.classList.add("light-mode-section");
          },
          onLeaveBack: () => {
            document.body.classList.remove("light-mode-section");
          },
        });

        // 2. Pinned Text Morph Scrub (No templates. -> No copy-paste.)
        const morphTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            end: "bottom 60%",
            scrub: 0.8,
          },
        });

        morphTl
          .to(morphTextRef.current, {
            opacity: 0,
            y: -10,
            scale: 0.9,
            duration: 0.2,
            onComplete: () => {
              if (morphTextRef.current) morphTextRef.current.innerText = "No copy-paste.";
            },
          })
          .to(morphTextRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.2,
          });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      if (typeof document !== "undefined") {
        document.body.classList.remove("light-mode-section");
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32 md:py-44 relative transition-colors duration-700 bg-[#F4F5F7] text-[#060B19] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header eyebrow */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase text-brand-orange tracking-widest mb-12 font-bold">
          <Terminal className="w-4 h-4" />
          <span>01 // Our Story & Philosophy</span>
        </div>

        {/* Jextures Pinned Text Morphing Statement */}
        <div ref={textRef} className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.15] max-w-6xl">
          We don&apos;t mass-produce. We handcraft.{" "}
          <span
            ref={morphBadgeRef}
            className="inline-flex items-center px-5 py-1.5 sm:px-7 sm:py-2 rounded-2xl bg-black/10 border border-black/15 text-brand-orange shadow-lg mx-2"
          >
            <span ref={morphTextRef} className="inline-block transition-transform">
              No templates.
            </span>
          </span>{" "}
          Just original thinking and sub-second execution.
        </div>

        {/* 3 Pillar Cards on Light Background */}
        <div className="mt-24 pt-12 border-t border-black/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 p-8 rounded-3xl bg-white/80 border border-black/10 shadow-xl backdrop-blur-md hover:border-brand-orange/40 transition-colors">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-orange uppercase tracking-wider font-bold">
              <Zap className="w-4 h-4 text-brand-orange" />
              <span>01. Sub-Second Speed</span>
            </div>
            <h4 className="font-display text-2xl font-bold text-[#060B19]">0.3s Page Load</h4>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Engineered with React 19, Next.js Server Components, and zero template bloat for 100/100 Lighthouse speed scores.
            </p>
          </div>

          <div className="space-y-3 p-8 rounded-3xl bg-white/80 border border-black/10 shadow-xl backdrop-blur-md hover:border-brand-orange/40 transition-colors">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-orange uppercase tracking-wider font-bold">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span>02. Fluid UX & Motion</span>
            </div>
            <h4 className="font-display text-2xl font-bold text-[#060B19]">GSAP Interactive</h4>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Physics-based micro-interactions, custom cursor states, and editorial scroll scrubbing that captivates audiences.
            </p>
          </div>

          <div className="space-y-3 p-8 rounded-3xl bg-white/80 border border-black/10 shadow-xl backdrop-blur-md hover:border-brand-orange/40 transition-colors">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-orange uppercase tracking-wider font-bold">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>03. Revenue Strategy</span>
            </div>
            <h4 className="font-display text-2xl font-bold text-[#060B19]">High CRO Pathways</h4>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Strategic conversion pathways, instant lead capture, direct WhatsApp routing, and Schema.org local SEO graph setup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
