import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import ServiceMatrix from '../components/ServiceMatrix';
import Estimator from '../components/Estimator';
import RoiCalculator from '../components/RoiCalculator';

export default function Home({ triggerToast }) {
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
          We design and build fast, conversion-focused websites and digital marketing for clinics, pharmacies, and local brands across Ahmedabad — from first sketch to a client asking "how did you get so many bookings?"
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
            <div className="stat-num">7 Days</div>
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

      {/* ROI CALCULATOR */}
      <section>
        <div className="section-head">
          <div className="section-kicker">Growth Calculator</div>
          <h2 className="section-title">What a faster, better-converting site is actually worth.</h2>
        </div>
        <RoiCalculator />
      </section>

            {/* PORTFOLIO & TESTIMONIALS */}
      <section>
        <div className="section-head">
          <div className="section-kicker">Client Success Stories</div>
          <h2 className="section-title">Proof of performance for real Indian brands.</h2>
        </div>
        <div className="portfolio-grid-3">
          <div className="portfolio-card">
            <div className="portfolio-thumb" style={{ background: 'linear-gradient(135deg, rgba(229,184,66,0.25), rgba(29,158,117,0.2))' }}>
              Reel Crafterr
              <span className="metric-badge">+400% Bookings</span>
            </div>
            <div className="portfolio-info">
              <h4>Reel Crafterr</h4>
              <span>Cinematic Videography Platform · <a href="https://www.reelcrafterr.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal-light)', textDecoration: 'none' }}>www.reelcrafterr.in ↗</a></span>
              <p style={{ fontSize: '0.82rem', color: 'rgba(244,242,235,0.7)', marginTop: '0.6rem', fontStyle: 'italic', lineHeight: '1.5' }}>
                "Nexivo built a lightning-fast, cinematic portfolio for our video studio. Our client shoot inquiries jumped 4x in 30 days!"
              </p>
            </div>
          </div>

          <div className="portfolio-card">
            <div className="portfolio-thumb">
              Nails By Shalvi
              <span className="metric-badge">+300% inquiries</span>
            </div>
            <div className="portfolio-info">
              <h4>Nails By Shalvi</h4>
              <span>Studio booking site · Chandkheda</span>
              <p style={{ fontSize: '0.82rem', color: 'rgba(244,242,235,0.7)', marginTop: '0.6rem', fontStyle: 'italic', lineHeight: '1.5' }}>
                "The direct WhatsApp booking button changed our salon business completely."
              </p>
            </div>
          </div>

          <div className="portfolio-card">
            <div className="portfolio-thumb">
              Shri Radhey Book Depot
              <span className="metric-badge">99 Lighthouse</span>
            </div>
            <div className="portfolio-info">
              <h4>Shri Radhey Book Depot</h4>
              <span>E-commerce + stock ledger · Thaltej</span>
              <p style={{ fontSize: '0.82rem', color: 'rgba(244,242,235,0.7)', marginTop: '0.6rem', fontStyle: 'italic', lineHeight: '1.5' }}>
                "Sub-second load times and smooth online catalog. Best decision for our retail store."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}