import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import ServiceMatrix from '../components/ServiceMatrix';
import Estimator from '../components/Estimator';
import WebsiteHealthCheck from '../components/WebsiteHealthCheck';
import reelcrafterrCover from '../assets/reelcrafterr-cover.jpg';
import shriRadheyCover from '../assets/shri-radhey-cover.jpg';
import nailsByShalviCover from '../assets/nails-by-shalvi-cover.jpg';

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
        <div className="portfolio-grid-3">
          <div className="portfolio-card">
            <div className="portfolio-thumb">
              <img src={reelcrafterrCover} alt="Reel Crafterr Website Showcase" />
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
              <img src={shriRadheyCover} alt="Shri Radhey Book Depot E-Commerce Showcase" />
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
              <img src={nailsByShalviCover} alt="Nails By Shalvi Studio Showcase" />
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