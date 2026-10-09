"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowUp, Globe, Sparkles } from "lucide-react";
import { NEXIVO_DETAILS } from "@/lib/utils";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
        <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-brand-orange/40 text-[11px] font-mono font-bold text-white shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-md">
          Chat with Founder Jay Parmar
        </span>
        <a
          href={NEXIVO_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-brand-orange hover:bg-amber-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 box-glow-orange"
          aria-label="Direct WhatsApp Chat"
          title="Direct WhatsApp Chat"
        >
          <MessageSquare className="w-7 h-7 fill-current stroke-none" />
        </a>
      </div>

      <footer className="bg-[#060B19] border-t border-surface-border text-slate-400 py-16 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand Column */}
            <div className="md:col-span-4 space-y-4">
              <Link href="/" className="font-display font-bold text-2xl text-white inline-flex items-center gap-0.5">
                <span>Studio</span>
                <span className="text-brand-orange">Nexivo</span>
                <span className="text-[10px] text-brand-orange -mt-2">™</span>
              </Link>
              <p className="text-muted font-sans text-xs leading-relaxed max-w-sm font-light">
                High-performance custom web applications, Next.js platforms, e-commerce architectures, and sub-second digital experiences for ambitious brands across India & United Kingdom.
              </p>
              <div className="flex items-center gap-2 text-white text-[11px]">
                <Globe className="w-3.5 h-3.5 text-brand-orange" />
                <span>Ahmedabad, India • London, UK</span>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-3 space-y-3">
              <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Studio Navigation</h5>
              <ul className="space-y-2 text-muted">
                <li><a href="#story" className="hover:text-brand-orange transition-colors">01. Our Story</a></li>
                <li><a href="#web-dev" className="hover:text-brand-orange transition-colors">02. What We Craft</a></li>
                <li><a href="#work" className="hover:text-brand-orange transition-colors">03. Impact We&apos;ve Made</a></li>
                <li><a href="#showcase" className="hover:text-brand-orange transition-colors">04. Interactive Canvas</a></li>
                <li><a href="#estimator" className="hover:text-brand-orange transition-colors text-brand-orange">05. Project Estimator</a></li>
                <li><a href="#contact" className="hover:text-brand-orange transition-colors">06. Get In Touch</a></li>
              </ul>
            </div>

            {/* Services Summary Column */}
            <div className="md:col-span-3 space-y-3">
              <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Core Capabilities</h5>
              <ul className="space-y-2 text-muted">
                <li>Next.js & React Web Apps</li>
                <li>High-Converting E-Commerce</li>
                <li>WordPress Custom Headless</li>
                <li>Sub-Second Speed Upgrades</li>
                <li>Local SEO Maps Domination</li>
                <li>Figma UI/UX & Brand Identity</li>
              </ul>
            </div>

            {/* Scroll to Top */}
            <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
              <button
                onClick={scrollToTop}
                className="p-3 rounded-full bg-surface border border-surface-border text-white hover:border-brand-orange hover:text-brand-orange transition-colors shadow-xl"
                title="Scroll To Top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Statement & Copyright */}
          <div className="pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted">
            <div>
              © {new Date().getFullYear()} Studio Nexivo. All rights reserved.
            </div>
            <div className="text-white font-display font-bold text-xs uppercase tracking-widest text-brand-orange">
              BUILT FOR THE WEB. DESIGNED TO MOVE.
            </div>
            <div className="flex items-center gap-1">
              <span>Crafted by</span>
              <span className="text-white font-semibold">Jay Parmar</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
