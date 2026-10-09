"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Plus, Menu, X, ArrowUpRight, Sparkles, Globe } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { NEXIVO_DETAILS } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("story");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const workEl = document.getElementById("work");
      const devEl = document.getElementById("web-dev");
      const estimatorEl = document.getElementById("estimator");

      if (estimatorEl && scrollY >= estimatorEl.offsetTop - 300) {
        setActiveSection("contact");
      } else if (devEl && scrollY >= devEl.offsetTop - 300) {
        setActiveSection("capabilities");
      } else if (workEl && scrollY >= workEl.offsetTop - 300) {
        setActiveSection("work");
      } else {
        setActiveSection("story");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.4,
        ease: "power3.out",
      });
      if (menuItemsRef.current?.children) {
        gsap.fromTo(
          Array.from(menuItemsRef.current.children),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out", delay: 0.1 }
        );
      }
    } else {
      document.body.style.overflow = "";
      gsap.to(menuRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.visibility = "hidden";
        },
      });
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Main Fixed Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-[100] py-5 px-6 md:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Logo: Jextures-style Trademark Logo */}
          <Link
            href="/"
            className="group flex items-center gap-1 font-display font-extrabold text-2xl tracking-tight text-white bg-dark-900/80 backdrop-blur-xl px-4 py-2 rounded-full border border-surface-border shadow-xl hover:border-brand-orange/50 transition-colors"
            data-cursor="NEXIVO"
          >
            <span className="text-white">Studio</span>
            <span className="text-brand-orange group-hover:text-amber-400 transition-colors">Nexivo</span>
            <span className="text-[10px] font-mono text-brand-orange font-bold -mt-2">™</span>
          </Link>

          {/* Desktop Right CTA Pill (Jextures + Get In Touch Button) */}
          <div className="flex items-center gap-3">
            <a
              href={NEXIVO_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-white bg-brand-orange whitespace-nowrap flex-shrink-0 hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 box-glow-orange shadow-2xl"
              data-cursor="START"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Get In Touch</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full text-white bg-surface/90 border border-surface-border shadow-xl"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Left Side Navigator (Appears on scroll past hero, matching Jextures) */}
      <div
        className={`fixed left-6 bottom-10 z-[90] hidden lg:flex flex-col gap-3 p-3 rounded-2xl bg-dark-900/90 border border-surface-border backdrop-blur-xl shadow-2xl transition-all duration-500 font-mono text-xs ${
          isScrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12 pointer-events-none"
        }`}
      >
        <a
          href="#story"
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors ${
            activeSection === "story"
              ? "bg-brand-orange/20 text-brand-orange font-bold border border-brand-orange/40"
              : "text-muted hover:text-white"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${activeSection === "story" ? "bg-brand-orange animate-ping" : "bg-muted"}`} />
          <span>Our Story</span>
        </a>

        <a
          href="#web-dev"
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors ${
            activeSection === "capabilities"
              ? "bg-brand-orange/20 text-brand-orange font-bold border border-brand-orange/40"
              : "text-muted hover:text-white"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${activeSection === "capabilities" ? "bg-brand-orange animate-ping" : "bg-muted"}`} />
          <span>What We Craft</span>
        </a>

        <a
          href="#work"
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors ${
            activeSection === "work"
              ? "bg-brand-orange/20 text-brand-orange font-bold border border-brand-orange/40"
              : "text-muted hover:text-white"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${activeSection === "work" ? "bg-brand-orange animate-ping" : "bg-muted"}`} />
          <span>Impact We&apos;ve Made</span>
        </a>

        <a
          href="#contact"
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors ${
            activeSection === "contact"
              ? "bg-brand-orange/20 text-brand-orange font-bold border border-brand-orange/40"
              : "text-muted hover:text-white"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${activeSection === "contact" ? "bg-brand-orange animate-ping" : "bg-muted"}`} />
          <span>Get In Touch</span>
        </a>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[150] bg-dark-900/98 backdrop-blur-2xl opacity-0 invisible flex flex-col justify-between p-8 md:hidden"
      >
        <div className="pt-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-brand-orange mb-6 tracking-widest font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Studio Nexivo Navigation</span>
          </div>

          <ul ref={menuItemsRef} className="space-y-6 font-display font-extrabold text-3xl tracking-tight text-white">
            <li>
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-brand-orange transition-colors"
              >
                01. Our Story
              </a>
            </li>
            <li>
              <a
                href="#web-dev"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-brand-orange transition-colors"
              >
                02. What We Craft
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-brand-orange transition-colors"
              >
                03. Impact We&apos;ve Made
              </a>
            </li>
            <li>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-brand-orange hover:text-white transition-colors"
              >
                04. Project Estimator
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-brand-orange transition-colors"
              >
                05. Get In Touch
              </a>
            </li>
          </ul>
        </div>

        <div className="border-t border-surface-border pt-6 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between text-muted">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-brand-orange" />
              <span>Ahmedabad & London</span>
            </span>
            <span className="text-white font-semibold">Jay Parmar</span>
          </div>

          <a
            href={NEXIVO_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 bg-brand-orange text-white font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-xl box-glow-orange"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Get In Touch via WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
