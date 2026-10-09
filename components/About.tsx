"use client";

import React, { useRef, useEffect } from "react";
import { Globe, ShieldCheck, MapPin, UserCheck, ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { NEXIVO_DETAILS } from "@/lib/utils";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-36 bg-background relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-teal tracking-widest px-3 py-1 bg-surface border border-brand-teal/20 rounded-md">
              <Globe className="w-3.5 h-3.5" />
              <span>09 // Studio Identity</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
              WE ARE A DIGITAL STUDIO BUILDING BETTER <span className="text-brand-teal glow-teal">EXPERIENCES FOR THE WEB.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Founded by <strong>Jay Parmar</strong>, Studio Nexivo bridges creative design and technical engineering. We reject sluggish page-builder templates in favor of bespoke React & Next.js architectures, sub-second speeds, and conversion-focused design.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs text-muted">
              <div className="p-4 rounded-xl bg-surface border border-surface-border space-y-1">
                <div className="flex items-center gap-2 text-white font-bold">
                  <MapPin className="w-4 h-4 text-brand-teal" />
                  <span>Ahmedabad, India</span>
                </div>
                <p>Primary Engineering Studio & Technical Ops</p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-surface-border space-y-1">
                <div className="flex items-center gap-2 text-white font-bold">
                  <MapPin className="w-4 h-4 text-brand-cyan" />
                  <span>London, United Kingdom</span>
                </div>
                <p>International Client Relations & Strategy</p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Principles Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-surface/90 border border-brand-teal/30 shadow-2xl space-y-6 backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-surface-border">
              <span className="font-mono text-xs text-brand-teal font-bold uppercase">STUDIO STANDARDS</span>
              <UserCheck className="w-5 h-5 text-brand-teal" />
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="font-display font-bold text-white text-base">Direct Founder Communication</h4>
                <p className="text-xs text-muted font-light">
                  You work directly with founder Jay Parmar and senior engineers. No account manager telephone games.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-display font-bold text-white text-base">Sub-Second Speed Guarantee</h4>
                <p className="text-xs text-muted font-light">
                  Every site is benchmarked against Google Lighthouse 95+ Core Web Vitals before official launch.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-display font-bold text-white text-base">Transparent Investment</h4>
                <p className="text-xs text-muted font-light">
                  Fixed pricing, 50% advance / 50% completion terms, and zero unexpected maintenance retainers.
                </p>
              </div>
            </div>

            <a
              href={NEXIVO_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-brand-teal text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-cyan transition-colors"
            >
              <span>Connect With Jay Parmar</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
