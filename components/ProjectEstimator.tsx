"use client";

import React, { useState } from "react";
import { Sparkles, ArrowUpRight, Calculator, Check } from "lucide-react";
import { NEXIVO_DETAILS } from "@/lib/utils";

export default function ProjectEstimator() {
  const [selectedPackage, setSelectedPackage] = useState<string>("Starter Website");
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({
    cms: false,
    speed: true, // Default enabled
    maintenance: false,
    ecommerce: false,
  });

  const packages: { [key: string]: { price: number; days: number; desc: string } } = {
    "Starter Website": { price: 7000, days: 12, desc: "High-converting 1-3 page custom website with WhatsApp lead integration." },
    "Standard Website": { price: 15000, days: 18, desc: "Full custom 5-10 page Next.js platform with CMS content control." },
    "Website Redesign": { price: 12000, days: 14, desc: "Modernize existing site for sub-second speeds & modern dark UI." },
    "Local SEO Boost": { price: 8000, days: 14, desc: "Google Business Profile optimization & local search pack ranking." },
    "Google & Meta Ads": { price: 10000, days: 30, desc: "Targeted ad campaign setup with high-ROAS conversion funnel." },
  };

  const addonPrices: { [key: string]: { label: string; price: number } } = {
    cms: { label: "CMS integration (Self-edit content)", price: 2000 },
    speed: { label: "Speed optimization pass (95+ score)", price: 1500 },
    maintenance: { label: "1-Month extended support pass", price: 2500 },
    ecommerce: { label: "E-commerce product catalog setup", price: 3000 },
  };

  const currentPkg = packages[selectedPackage] || packages["Starter Website"];
  
  const totalAddonsPrice = Object.keys(addons).reduce((acc, key) => {
    return addons[key] ? acc + (addonPrices[key]?.price || 0) : acc;
  }, 0);

  const totalPrice = currentPkg.price + totalAddonsPrice;

  // Generate WhatsApp inquiry link with calculated quote details
  const waText = encodeURIComponent(
    `Hi Jay & Studio Nexivo! I calculated a project estimate on your website:\n\n• Package: ${selectedPackage} (₹${currentPkg.price.toLocaleString("en-IN")})\n• Addons: ${Object.keys(addons).filter(k => addons[k]).map(k => addonPrices[k].label).join(", ") || "None"}\n• Estimated Total: ₹${totalPrice.toLocaleString("en-IN")} (~${currentPkg.days} days delivery)\n\nI would like to discuss starting this project!`
  );

  const waUrl = `https://wa.me/919724470737?text=${waText}`;

  return (
    <section id="estimator" className="py-24 md:py-36 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-teal tracking-widest px-3 py-1 bg-surface border border-brand-teal/20 rounded-full">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Pricing Engine</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            PROJECT <span className="text-brand-teal glow-teal">ESTIMATOR.</span>
          </h2>
          <p className="text-muted text-base sm:text-lg font-light">
            Calculate a real budget and delivery timeline before talking to us. Zero hidden costs or surprises.
          </p>
        </div>

        {/* Interactive Estimator Panel */}
        <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-surface border border-brand-teal/40 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Package & Add-on Selection */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <label className="font-mono text-xs uppercase text-brand-teal font-bold block">
                01 // Select Project Package
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.keys(packages).map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`p-3 rounded-xl font-mono text-xs text-left transition-all ${
                      selectedPackage === pkg
                        ? "bg-brand-teal text-black font-bold border-brand-teal shadow-md"
                        : "bg-dark-900 border-surface-border text-slate-300 hover:border-brand-teal/40"
                    }`}
                  >
                    {pkg}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted pt-1 font-light">{currentPkg.desc}</p>
            </div>

            <div className="space-y-3">
              <label className="font-mono text-xs uppercase text-brand-teal font-bold block">
                02 // Optional Add-ons & Upgrades
              </label>
              <div className="space-y-3">
                {Object.keys(addonPrices).map((key) => {
                  const item = addonPrices[key];
                  const isChecked = !!addons[key];
                  return (
                    <div
                      key={key}
                      onClick={() => setAddons({ ...addons, [key]: !isChecked })}
                      className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? "bg-brand-teal/10 border-brand-teal text-white"
                          : "bg-dark-900/60 border-surface-border text-slate-300 hover:border-surface-border/80"
                      }`}
                    >
                      <div className="flex items-center gap-3 text-xs font-mono">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked ? "bg-brand-teal border-brand-teal text-black" : "border-muted"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{item.label}</span>
                      </div>
                      <span className="font-mono text-xs text-brand-teal font-bold">
                        +₹{item.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Instant Live Calculated Quote Box */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-dark-900 border border-brand-teal/50 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                <span className="font-mono text-xs text-muted uppercase">ESTIMATED INVESTMENT</span>
                <span className="font-mono text-xs text-brand-teal font-bold">STUDIO NEXIVO QUOTE</span>
              </div>

              <div>
                <div className="font-mono text-xs text-muted">Total Estimated Budget</div>
                <div className="text-4xl sm:text-5xl font-display font-extrabold text-brand-teal glow-teal">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </div>
                <div className="text-[11px] font-mono text-muted/80 mt-1">
                  ~ ${(totalPrice / 85).toFixed(0)} USD • 50% Advance / 50% On Go-Live
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-surface-border font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted">Estimated Delivery:</span>
                  <span className="text-emerald-400 font-bold">~{currentPkg.days} Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Guarantee:</span>
                  <span className="text-white font-bold">100% Satisfaction</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Direct Contact:</span>
                  <span className="text-brand-teal font-bold">Jay Parmar (+91 97244 70737)</span>
                </div>
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-brand-teal text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-cyan transition-colors box-glow-teal"
              data-cursor="BOOK"
            >
              <span>Book Project via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
