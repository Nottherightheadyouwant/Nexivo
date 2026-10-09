"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Sparkles, X, Layers, CheckCircle2 } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { NEXIVO_DETAILS } from "@/lib/utils";

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<typeof NEXIVO_DETAILS.projects[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(".work-scene");
      if (cards && cards.length > 0) {
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 70, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const industries = [
    { title: "Retail, Direct-to-Consumer & E-Commerce", count: "01" },
    { title: "Custom SaaS & Next.js Platforms", count: "02" },
    { title: "Studio Booking, Beauty & Skincare", count: "03" },
    { title: "Cinematic Media & Video Processing", count: "04" },
  ];

  return (
    <section id="work" ref={containerRef} className="py-28 md:py-40 bg-background text-white relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[350px] bg-brand-orange/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        {/* Jextures Bracketed Header */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-orange tracking-widest px-3.5 py-1 bg-surface border border-brand-orange/30 rounded-full font-bold">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>03 // Impact We&apos;ve Made</span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-surface/60 border border-surface-border backdrop-blur-xl relative">
            <span className="font-mono text-brand-orange font-bold text-lg absolute top-3 left-4">┌</span>
            <span className="font-mono text-brand-orange font-bold text-lg absolute bottom-3 right-4">┘</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              Powering up ambitious brands to own their{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-300 to-brand-cyan glow-orange">
                digital edge.
              </span>
            </h2>
          </div>
        </div>

        {/* Major Visual Case Study Scenes */}
        <div className="space-y-24">
          {NEXIVO_DETAILS.projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className="work-scene group relative rounded-3xl bg-surface/50 border border-surface-border p-6 sm:p-10 lg:p-12 transition-all duration-700 hover:border-brand-orange/40 hover:bg-surface/80 shadow-2xl"
                data-cursor="VIEW"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  {/* Visual Info */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="flex items-center justify-between border-b border-surface-border/60 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-extrabold text-brand-orange px-3 py-1 rounded bg-brand-orange/15 border border-brand-orange/30">
                          0{index + 1} / 0{NEXIVO_DETAILS.projects.length}
                        </span>
                        <span className="font-mono text-xs text-muted uppercase tracking-wider">{project.category}</span>
                      </div>
                      <span className="font-mono text-xs text-muted/60 font-semibold">{project.year}</span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight group-hover:text-brand-orange transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Impact Metric Pill */}
                    <div className="p-4 rounded-xl bg-dark-900 border border-brand-orange/30 text-xs font-mono text-brand-orange font-semibold flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                      <span>{project.metrics}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded text-[11px] font-mono text-muted bg-dark-900 border border-surface-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Triggers */}
                    <div className="flex items-center gap-4 pt-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-6 py-3 rounded-full bg-brand-orange text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-amber-500 transition-all box-glow-orange"
                        data-cursor="INSPECT"
                      >
                        <span>Inspect Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-surface border border-surface-border text-white hover:text-brand-orange hover:border-brand-orange transition-colors"
                          title="Visit Live Site"
                          data-cursor="LIVE"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Major Visual Canvas */}
                  <div className={`lg:col-span-7 overflow-hidden rounded-2xl border border-surface-border group-hover:border-brand-orange/40 transition-all duration-700 relative aspect-[16/10] bg-dark-900 shadow-2xl ${isEven ? "" : "lg:order-1"}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                    <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px] text-brand-orange uppercase font-semibold">
                      <span>LIVE CASE BUILD</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Jextures Target Industries Grid */}
        <div className="pt-16 border-t border-surface-border/60 space-y-8">
          <div className="flex items-center justify-between">
            <h4 className="font-mono text-xs text-brand-orange uppercase font-bold tracking-widest">// Industries We Power</h4>
            <span className="font-mono text-xs text-muted">GLOBAL CAPABILITY</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {industries.map((ind) => (
              <div
                key={ind.count}
                className="p-5 rounded-2xl bg-surface/60 border border-surface-border hover:border-brand-orange/40 transition-all flex items-center justify-between"
              >
                <span className="text-white font-bold">{ind.title}</span>
                <span className="text-brand-orange font-bold">{ind.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] bg-dark-900/90 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-3xl bg-surface border border-brand-orange/40 p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-dark-900 border border-surface-border text-muted hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="font-mono text-xs text-brand-orange uppercase font-bold">{selectedProject.category}</span>
              <h3 className="font-display text-3xl font-extrabold text-white">{selectedProject.title}</h3>
            </div>

            <div className="aspect-[16/9] relative rounded-2xl overflow-hidden border border-surface-border">
              <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
            </div>

            <p className="text-slate-300 text-sm font-light leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="p-4 rounded-xl bg-dark-900 border border-brand-orange/30 font-mono text-xs text-brand-orange">
              <strong>Key Impact & Speed Metric:</strong> {selectedProject.metrics}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-surface-border">
              <span className="font-mono text-xs text-muted">ENGINEERED BY STUDIO NEXIVO</span>
              {selectedProject.liveUrl !== "#" ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-brand-orange text-white font-mono font-bold text-xs uppercase flex items-center gap-2"
                >
                  <span>Visit Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-xs font-mono text-muted">Internal Client Platform</span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
