import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Download } from 'lucide-react';
import ServiceMatrix from '../components/ServiceMatrix';
import Estimator from '../components/Estimator';
import WebsiteHealthCheck from '../components/WebsiteHealthCheck';

export default function Home({ triggerToast, openBrochure }) {
  return (
    <main>
      {/* HERO */}
      <section className="hero-section">
        <div className="eyebrow"><span className="pulse-dot"></span> Now accepting new clients</div>
        <h1 className="hero-title kinetic">
          <span>Websites that</span>
          <span>do the selling <span className="accent">before you say a word.</span></span>
        </h1>
        <p className="hero-desc">
          We design and build fast, conversion-focused websites and high-ROI digital marketing campaigns for ambitious businesses, growing brands, and modern enterprises — from initial strategy to measurable revenue.
        </p>
        <div className="hero-actions">
          <Link to="/pricing" className="btn-primary">
            Get a free project estimate <ArrowRight size={18} />
          </Link>
          <Link to="/services" className="btn-outline">See our work & services</Link>
        </div>
        <div className="stat-row">
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-label">Client satisfaction guarantee</div>
          </div>
          <div>
            <div className="stat-num">30 Days</div>
            <div className="stat-label">Average delivery time</div>
          </div>
          <div>
            <div className="stat-num">24/7</div>
            <div className="stat-label">Dedicated technical support</div>
          </div>
        </div>
      </section>

      {/* SERVICE MATRIX */}
      <section>
        <div className="section-head">
          <div className="section-kicker">What We Do</div>
          <h2 className="section-title">One team for the build and the growth after it.</h2>
        </div>
        <ServiceMatrix />
      </section>

      {/* ESTIMATOR */}
      <section>
        <div className="section-head">
          <div className="section-kicker">Plan Your Project</div>
          <h2 className="section-title">See a real budget and timeline before you talk to us.</h2>
        </div>
        <Estimator triggerToast={triggerToast} />
      </section>

      {/* WEBSITE HEALTH CHECK */}
      <section>
        <div className="section-head">
          <div className="section-kicker">Website Audit Tool</div>
          <h2 className="section-title">Instant Website Health Check</h2>
        </div>
        <WebsiteHealthCheck triggerToast={triggerToast} />
      </section>

            {/* BROCHURE DOWNLOAD LEAD MAGNET BANNER */}
      {openBrochure && (
        <section>
          <div className="glass-card" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, rgba(29,158,117,0.14), rgba(55,138,221,0.08))', border: '1.5px solid var(--teal-light)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <span className="eyebrow" style={{ marginBottom: '0.8rem', padding: '0.35rem 0.9rem', fontSize: '0.78rem' }}>
                📄 Official Services Guide 2026
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--offwhite)', margin: '0.3rem 0 0.6rem' }}>
                Want to view our complete service packages & pricing offline?
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(244,242,235,0.7)', margin: 0, maxWidth: '600px', lineHeight: '1.6' }}>
                Download our official 5-page PDF brochure detailing all Web Development, Local SEO Maps Domination, and Lead Funnel packages.
              </p>
            </div>

            <button onClick={openBrochure} className="btn-primary" style={{ padding: '0.9rem 1.8rem', fontSize: '0.95rem', gap: '8px' }}>
              Download PDF Brochure <Download size={18} />
            </button>
          </div>
        </section>
      )}

      {/* PORTFOLIO & TESTIMONIALS */}
      <section>
        <div className="section-head">
          <div className="section-kicker">Client Success Stories</div>
          <h2 className="section-title">Proof of performance for real growing brands.</h2>
        </div>
        <div className="portfolio-grid-3">
          <div className="portfolio-card">
            <div className="portfolio-thumb">
              <img
                src="/portfolio/reelcrafterr-cover.jpg"
                alt="Reel Crafterr Website Showcase"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="portfolio-info">
              <h4>Reel Crafterr</h4>
              <span>Cinematic Videography Platform • <a href="https://www.reelcrafterr.in/" target="_blank" rel="noopener noreferrer">www.reelcrafterr.in</a></span>
              <p>
                "Nexivo built a lightning-fast, cinematic portfolio for our video studio. Our client shoot inquiries jumped 4x in 30 days!"
              </p>
            </div>
          </div>

          <div className="portfolio-card">
            <div className="portfolio-thumb">
              <img
                src="/portfolio/shri-radhey-cover.jpg"
                alt="Shri Radhey Book Depot E-Commerce Showcase"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="portfolio-info">
              <h4>Shri Radhey Book Depot</h4>
              <span>E-Commerce Store & Stock Ledger</span>
              <p>
                "Sub-second load times and smooth online catalog. Best decision for our retail store."
              </p>
            </div>
          </div>

          <div className="portfolio-card">
            <div className="portfolio-thumb">
              <img
                src="/portfolio/nails-by-shalvi-cover.jpg"
                alt="Nails By Shalvi Studio Showcase"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="portfolio-info">
              <h4>Nails By Shalvi</h4>
              <span>Studio Booking Platform • <a href="https://nailsbyshalvi.netlify.app/" target="_blank" rel="noopener noreferrer">nailsbyshalvi.netlify.app</a></span>
              <p>
                "The direct WhatsApp booking button changed our studio business completely."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}