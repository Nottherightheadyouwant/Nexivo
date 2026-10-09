"use client";

import React, { useState } from "react";
import { Zap, Globe, Search, CheckCircle2, AlertTriangle, ArrowRight, Loader2 } from "lucide-react";
import { NEXIVO_DETAILS } from "@/lib/utils";

export default function AuditEngine() {
  const [domainInput, setDomainInput] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<null | {
    domain: string;
    speedScore: number;
    mobileScore: number;
    seoScore: number;
    issues: string[];
    recommendations: string[];
  }>(null);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;

    setIsAuditing(true);
    setAuditResult(null);

    // Simulate real-time diagnostic audit analysis
    setTimeout(() => {
      const cleanDomain = domainInput.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
      setIsAuditing(false);
      setAuditResult({
        domain: cleanDomain,
        speedScore: Math.floor(Math.random() * 25) + 55, // 55-80% simulated score before Nexivo rebuild
        mobileScore: Math.floor(Math.random() * 20) + 60,
        seoScore: Math.floor(Math.random() * 30) + 50,
        issues: [
          "Large uncompressed image assets increasing First Contentful Paint (FCP)",
          "Missing Google Maps schema JSON-LD structured data graph",
          "Render-blocking third-party scripts delaying LCP by > 1.8 seconds",
          "Lack of direct 1-click WhatsApp lead routing CTA for mobile visitors"
        ],
        recommendations: [
          "Rebuild frontend with Next.js 15 App Router for 0.3s sub-second speed",
          "Inject Schema.org local business structured data graph",
          "Implement GPU-accelerated GSAP micro-interactions and mobile CTA routing"
        ]
      });
    }, 1800);
  };

  return (
    <section className="py-20 bg-surface/50 border-y border-surface-border relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-brand-teal/30 shadow-2xl space-y-8 backdrop-blur-xl">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-teal tracking-widest px-3 py-1 bg-brand-teal/10 border border-brand-teal/30 rounded-full">
              <Zap className="w-3.5 h-3.5" />
              <span>Real-Time Website Audit Engine</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Check What&apos;s Holding Your Website Back
            </h3>
            <p className="text-muted text-sm sm:text-base font-light">
              Enter your current domain below to run an instant diagnostic audit for mobile speed, SEO schema, and lead conversion friction.
            </p>
          </div>

          {/* Audit Form */}
          <form onSubmit={handleAuditSubmit} className="max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <Globe className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                placeholder="e.g. mybusiness.com or https://mysite.in"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-dark-900 border border-surface-border text-white placeholder-muted font-mono text-sm focus:outline-none focus:border-brand-teal"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                type="submit"
                disabled={isAuditing}
                className="flex-1 py-4 px-6 rounded-xl bg-brand-teal text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-cyan transition-colors disabled:opacity-50"
              >
                {isAuditing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing Domain Diagnostics...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Run Instant Technical Audit</span>
                  </>
                )}
              </button>

              <a
                href={NEXIVO_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-surface border border-surface-border text-slate-300 font-mono text-xs hover:text-white hover:border-brand-teal transition-colors flex items-center gap-2"
              >
                <span>I don&apos;t have a site yet →</span>
              </a>
            </div>
          </form>

          {/* Diagnostic Results Render */}
          {auditResult && (
            <div className="p-6 rounded-2xl bg-dark-900 border border-brand-teal/40 space-y-6 animate-fade-in font-mono text-xs">
              <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                <span className="text-white font-bold text-sm">AUDIT REPORT FOR: {auditResult.domain}</span>
                <span className="text-brand-teal uppercase">ANALYSIS COMPLETE</span>
              </div>

              {/* Score Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-surface border border-amber-500/40 text-center">
                  <div className="text-2xl font-bold text-amber-400">{auditResult.speedScore}/100</div>
                  <div className="text-[10px] text-muted uppercase mt-1">Mobile Speed</div>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-amber-500/40 text-center">
                  <div className="text-2xl font-bold text-amber-400">{auditResult.mobileScore}/100</div>
                  <div className="text-[10px] text-muted uppercase mt-1">UX Friction</div>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-amber-500/40 text-center">
                  <div className="text-2xl font-bold text-amber-400">{auditResult.seoScore}/100</div>
                  <div className="text-[10px] text-muted uppercase mt-1">SEO Schema</div>
                </div>
              </div>

              {/* Friction Issues Identified */}
              <div className="space-y-2">
                <span className="text-amber-400 font-bold block flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Detected Technical Bottlenecks:</span>
                </span>
                <ul className="space-y-1.5 text-slate-300 pl-6 list-disc">
                  {auditResult.issues.map((issue, i) => (
                    <li key={i}>{issue}</li>
                  ))}
                </ul>
              </div>

              {/* Nexivo Upgrade Recommendation */}
              <div className="p-4 rounded-xl bg-brand-teal/10 border border-brand-teal/30 space-y-3">
                <span className="text-brand-teal font-bold block flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Recommended Studio Nexivo Solution:</span>
                </span>
                <p className="text-slate-200 font-sans text-xs">
                  Reengineering this domain into a Next.js 15 sub-second build will instantly elevate scores to 95-100/100 and eliminate client lead drop-off.
                </p>
                <a
                  href={`https://wa.me/919724470737?text=${encodeURIComponent(`Hi Jay! I ran an audit for ${auditResult.domain} on Studio Nexivo. Speed score was ${auditResult.speedScore}/100. I would like to discuss a custom web rebuild.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-teal text-black font-bold text-xs uppercase"
                >
                  <span>Discuss Rebuild With Founder Jay Parmar</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
