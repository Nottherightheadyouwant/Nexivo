import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import ServiceMatrix from '../components/ServiceMatrix';
import Estimator from '../components/Estimator';
import WebsiteHealthCheck from '../components/WebsiteHealthCheck';
import reelcrafterrCover from '../assets/reelcrafterr-cover.jpg';
import shriRadheyCover from '../assets/shri-radhey-cover.jpg';

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

      {/* PORTFOLIO & TESTIMONIALS */}
      <section>
        <div className="section-head">
          <div className="section-kicker">Client Success Stories</div>
          <h2 className="section-title">Proof of performance for real growing brands.</h2>
        </div>
        <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.8rem' }}>
          <div className="portfolio-card">
            <div className="portfolio-thumb" style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
              <img src={reelcrafterrCover} alt="Reel Crafterr Website Showcase" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              <span className="metric-badge" style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 2 }}>+400% Bookings</span>
            </div>
            <div className="portfolio-info" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.3rem' }}>Reel Crafterr</h4>
              <span style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.6)' }}>Cinematic Videography Platform • <a href="https://www.reelcrafterr.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal-light)', textDecoration: 'none' }}>www.reelcrafterr.in</a></span>
              <p style={{ fontSize: '0.88rem', color: 'rgba(244,242,235,0.75)', marginTop: '0.8rem', fontStyle: 'italic', lineHeight: '1.6' }}>
                "Nexivo built a lightning-fast, cinematic portfolio for our video studio. Our client shoot inquiries jumped 4x in 30 days!"
              </p>
            </div>
          </div>

          <div className="portfolio-card">
            <div className="portfolio-thumb" style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
              <img src={shriRadheyCover} alt="Shri Radhey Book Depot E-Commerce Showcase" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              <span className="metric-badge" style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 2 }}>99 Lighthouse</span>
            </div>
            <div className="portfolio-info" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.3rem' }}>Shri Radhey Book Depot</h4>
              <span style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.6)' }}>E-Commerce Store & Stock Ledger</span>
              <p style={{ fontSize: '0.88rem', color: 'rgba(244,242,235,0.75)', marginTop: '0.8rem', fontStyle: 'italic', lineHeight: '1.6' }}>
                "Sub-second load times and smooth online catalog. Best decision for our retail store."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}