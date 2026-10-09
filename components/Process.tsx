"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, CheckCircle2, ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function Process() {
  const [activeStep, setActiveStep] = useState(3); // Default to 04 DEVELOP
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      phase: "Architecture Strategy",
      description: "We audit your existing web footprint, align on business positioning, define technical requirements, and map out target client conversion funnels.",
      deliverable: "Technical Scope & Site Architecture Map"
    },
    {
      num: "02",
      title: "DEFINE",
      phase: "UX & System Blueprint",
      description: "We map out component hierarchies, database entity schemas, API contracts, and user journey flowcharts prior to writing frontend code.",
      deliverable: "Interactive Wireframes & Component Specs"
    },
    {
      num: "03",
      title: "DESIGN",
      phase: "Cinematic UI & Motion",
      description: "We craft custom visual identity, high-contrast dark themes, fluid typography systems, and GSAP micro-interaction prototypes in Figma.",
      deliverable: "Pixel-Perfect Figma Design System"
    },
    {
      num: "04",
      title: "DEVELOP",
      phase: "Sub-Second Code Engineering",
      description: "We write clean, modular Next.js 15, React 19, and TypeScript code. Zero template bloat, sub-second page load optimization, and full responsive polish.",
      deliverable: "Production Next.js Codebase"
    },
    {
      num: "05",
      title: "LAUNCH",
      phase: "Deployment & QA",
      description: "Rigorous cross-browser testing across 12+ viewports, Lighthouse 100/100 audits, schema markup verification, and Vercel/AWS go-live.",
      deliverable: "Live Website Go-Live & SSL Setup"
    },
    {
      num: "06",
      title: "OPTIMISE",
      phase: "Revenue & SEO Domination",
      description: "Continuous Core Web Vitals monitoring, local search Google Maps ranking, CRO heatmaps, and ongoing technical maintenance.",
      deliverable: "Monthly Performance & Ranking Report"
    }
  ];

  return (
    <section id="process" ref={containerRef} className="py-24 md:py-36 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-teal tracking-widest px-3 py-1 bg-surface border border-brand-teal/20 rounded-md">
            <Terminal className="w-3.5 h-3.5" />
            <span>07 // Engineering Workflow</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            THE DEVELOPMENT <span className="text-brand-teal glow-teal">PROCESS.</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl font-light">
            A structured, 6-phase engineering workflow designed to deliver high-performance custom websites on budget and on schedule.
          </p>
        </div>

        {/* Progress Bar & Stage Stepper */}
        <div className="space-y-8">
          {/* Step Pill Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 font-mono ${
                    isActive
                      ? "bg-brand-teal text-black border-brand-teal font-bold shadow-xl scale-105"
                      : "bg-surface border-surface-border text-slate-300 hover:border-brand-teal/40"
                  }`}
                >
                  <div className="text-xs opacity-75">{step.num}</div>
                  <div className="text-sm font-display font-extrabold uppercase mt-1">{step.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Panel */}
          <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-brand-teal/40 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-extrabold text-brand-teal">{steps[activeStep].num}</span>
                <span className="px-3 py-1 rounded bg-brand-teal/15 text-brand-teal font-mono text-xs uppercase font-bold border border-brand-teal/30">
                  {steps[activeStep].phase}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                {steps[activeStep].title} PHASE
              </h3>

              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="pt-4 flex items-center gap-3 text-xs font-mono text-muted">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                <span>Primary Deliverable: <strong className="text-white">{steps[activeStep].deliverable}</strong></span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-dark-900 border border-surface-border font-mono text-xs text-slate-300 space-y-3">
              <div className="text-brand-teal font-bold pb-2 border-b border-surface-border">
                STAGE SPECIFICATIONS:
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Estimated Duration:</span>
                <span className="text-white">2 - 4 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Team Involvement:</span>
                <span className="text-white">Jay Parmar & Engineers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Client Review:</span>
                <span className="text-brand-teal">Included (2 Iterations)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
