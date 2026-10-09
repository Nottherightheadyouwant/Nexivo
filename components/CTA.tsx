"use client";

import React from "react";
import { ArrowUpRight, Mail, Phone, MessageSquare, Download, Sparkles, Plus } from "lucide-react";
import { NEXIVO_DETAILS } from "@/lib/utils";

export default function CTA() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-radial-gradient relative overflow-hidden border-t border-surface-border">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-brand-orange/15 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center space-y-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-orange tracking-widest px-4 py-1.5 bg-surface border border-brand-orange/30 rounded-full font-bold">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
          <span>04 // Get In Touch</span>
        </div>

        {/* Jextures "Jext say hi!" / "Nexivo say hi!" Style Card */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
            Nexivo say{" "}
            <span className="inline-flex items-center gap-1.5 px-6 py-2 rounded-2xl glass-badge border border-white/20 shadow-2xl">
              <span className="text-brand-orange font-mono">h</span>
              <span className="text-brand-cyan font-mono">i</span>
              <span className="text-purple-400 font-mono">!</span>
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Ready to engineer a sub-second, high-converting digital experience? Reach out directly to founder Jay Parmar via WhatsApp, phone, or email.
          </p>
        </div>

        {/* Jextures 3 Action Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4 font-mono text-xs">
          <a
            href={NEXIVO_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-surface border border-brand-orange/40 hover:border-brand-orange text-white transition-all transform hover:-translate-y-1 shadow-2xl space-y-3 group box-glow-orange"
            data-cursor="START"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 text-brand-orange flex items-center justify-center mx-auto border border-brand-orange/40 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="font-bold text-sm text-white">Let&apos;s Talk Ideas</div>
            <div className="text-muted text-[11px]">Direct WhatsApp Chat</div>
          </a>

          <a
            href={`mailto:${NEXIVO_DETAILS.email}`}
            className="p-6 rounded-3xl bg-surface border border-surface-border hover:border-brand-cyan text-white transition-all transform hover:-translate-y-1 shadow-2xl space-y-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 text-brand-cyan flex items-center justify-center mx-auto border border-brand-cyan/40 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="font-bold text-sm text-white">Drop Us A Line</div>
            <div className="text-muted text-[11px]">studio.nexivo@gmail.com</div>
          </a>

          <a
            href="#estimator"
            className="p-6 rounded-3xl bg-surface border border-surface-border hover:border-purple-500 text-white transition-all transform hover:-translate-y-1 shadow-2xl space-y-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto border border-purple-500/40 group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6 stroke-[3]" />
            </div>
            <div className="font-bold text-sm text-white">Tell Us More</div>
            <div className="text-muted text-[11px]">Calculate Cost Estimate</div>
          </a>
        </div>
      </div>
    </section>
  );
}
