"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Code, Zap, CheckCircle2, Sparkles, Plus } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { NEXIVO_DETAILS } from "@/lib/utils";

export default function WebDevelopment() {
  const [activeService, setActiveService] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const kineticTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = kineticTextRef.current?.querySelectorAll(".craft-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.15, y: 15 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: kineticTextRef.current,
              start: "top 75%",
              end: "bottom 50%",
              scrub: 0.8,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = NEXIVO_DETAILS.services;

  return (
    <section id="web-dev" ref={containerRef} className="py-28 md:py-40 relative bg-[#060B19] text-white border-t border-surface-border overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-brand-orange/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Jextures Infinite Marquee Ticker */}
      <div className="w-full overflow-hidden border-y border-surface-border bg-dark-900/80 py-4 mb-20 font-mono text-xs uppercase tracking-widest text-slate-300 select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          <span className="flex items-center gap-3"><Sparkles className="w-4 h-4 text-brand-orange" /> STUDIO NEXIVO</span>
          <span>•</span>
          <span className="text-brand-orange font-bold">CUSTOM WEB DEVELOPMENT</span>
          <span>•</span>
          <span>NEXT.JS 15 HEADLESS</span>
          <span>•</span>
          <span className="text-brand-cyan font-bold">SUB-SECOND SPEED ENGINE</span>
          <span>•</span>
          <span>REVENUE ARCHITECTURE</span>
          <span>•</span>
          <span className="flex items-center gap-3"><Sparkles className="w-4 h-4 text-brand-orange" /> STUDIO NEXIVO</span>
          <span>•</span>
          <span className="text-brand-orange font-bold">CUSTOM WEB DEVELOPMENT</span>
          <span>•</span>
          <span>NEXT.JS 15 HEADLESS</span>
          <span>•</span>
          <span className="text-brand-cyan font-bold">SUB-SECOND SPEED ENGINE</span>
          <span>•</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-orange tracking-widest px-3 py-1 bg-surface border border-brand-orange/30 rounded-full font-bold">
            <Code className="w-3.5 h-3.5" />
            <span>02 // What We Craft</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight">
            WHAT WE <span className="text-brand-orange glow-orange">CRAFT.</span>
          </h2>
        </div>

        {/* Jextures Kinetic Word Reveal & Inline Glass Badges */}
        <div
          ref={kineticTextRef}
          className="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.25] max-w-5xl select-none space-y-6"
        >
          <p>
            {"We craft sleek, soulful digital journeys for ambitious brands with backbone.".split(" ").map((word, i) => (
              <span key={i} className="craft-word inline-block mr-2 sm:mr-3">
                {word === "soulful" || word === "digital" ? (
                  <span className="text-brand-orange glow-orange">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </p>

          <p className="text-slate-300 font-light text-xl sm:text-3xl">
            Every detail counts – from your{" "}
            <span className="inline-flex items-center px-3 py-1 rounded-xl glass-badge border border-brand-orange/40 text-brand-orange font-mono text-sm uppercase">
              button hover
            </span>{" "}
            to your brand&apos;s{" "}
            <span className="inline-flex items-center px-3 py-1 rounded-xl glass-badge border border-brand-cyan/40 text-brand-cyan font-mono text-sm uppercase">
              vibe.
            </span>
          </p>

          <p className="text-slate-400 font-light text-lg sm:text-2xl">
            We&apos;re obsessed with clarity, and allergic to the ordinary.
          </p>
        </div>

        {/* Capability Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-10">
          {/* Left Column: Interactive Selector */}
          <div className="lg:col-span-6 space-y-4">
            {services.map((item, index) => {
              const isActive = activeService === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setActiveService(index)}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-surface/90 border-brand-orange/60 shadow-2xl box-glow-orange scale-[1.02]"
                      : "bg-surface/40 border-surface-border hover:border-surface-border/80 hover:bg-surface/60"
                  }`}
                  data-cursor="SELECT"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm font-bold ${isActive ? "text-brand-orange" : "text-muted"}`}>
                        {item.num}
                      </span>
                      <h3 className={`font-display text-lg sm:text-xl font-bold transition-colors ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                        {item.title}
                      </h3>
                    </div>
                    {item.highlight && (
                      <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-brand-orange/20 text-brand-orange border border-brand-orange/40 uppercase">
                        {item.highlight}
                      </span>
                    )}
                  </div>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-surface-border/60 space-y-4 animate-fade-in">
                      <p className="text-sm text-slate-300 font-light leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded bg-dark-900 border border-surface-border text-[11px] font-mono text-brand-orange font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Inspector Panel */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="rounded-3xl bg-surface border border-brand-orange/40 p-8 sm:p-10 space-y-6 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-surface-border">
                <div>
                  <span className="font-mono text-xs text-brand-orange uppercase tracking-wider block font-bold">SPECIFICATION MATRIX</span>
                  <h4 className="font-display text-2xl font-bold text-white mt-1">{services[activeService].title}</h4>
                </div>
                <span className="font-mono text-3xl font-extrabold text-brand-orange">{services[activeService].num}</span>
              </div>

              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs uppercase text-muted block font-semibold tracking-wider">Core Deliverables & Standards:</span>
                {services[activeService].features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
                <a
                  href={NEXIVO_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-brand-orange text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-amber-500 transition-colors box-glow-orange"
                  data-cursor="INQUIRE"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Enquire For This Capability</span>
                </a>

                <a
                  href="#estimator"
                  className="font-mono text-xs text-muted hover:text-white underline underline-offset-4"
                >
                  Estimate Cost →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
