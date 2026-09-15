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

      {/* PORTFOLIO */}
      <section>
        <div className="section-head">
          <div className="section-kicker">Selected Work</div>
          <h2 className="section-title">A few places we've shipped this kind of thinking.</h2>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <div className="portfolio-thumb">
              Nails By Shalvi
              <span className="metric-badge">+300% inquiries</span>
            </div>
            <div className="portfolio-info">
              <h4>Nails By Shalvi</h4>
              <span>Studio booking site · Chandkheda</span>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}