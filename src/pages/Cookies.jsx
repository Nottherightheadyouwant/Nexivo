import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, ArrowLeft } from 'lucide-react';

export default function Cookies() {
  return (
    <main>
      <section className="page-header">
        <div className="eyebrow">
          <Cookie size={16} /> Cookie Management
        </div>
        <h1 className="page-title">
          Cookie <span className="accent">Policy</span>
        </h1>
        <p className="page-desc">
          Last Updated: September 16, 2026 • Overview of how cookies are used on studionexivo.com to enhance performance.
        </p>
      </section>

      <section style={{ paddingBottom: '6rem' }}>
        <div className="legal-container">
          <div className="legal-card">
            
            <p className="legal-intro-text">
              This Cookie Policy details how <strong>Nexivo</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) utilizes cookies and similar tracking technologies when you visit <strong>www.studionexivo.com</strong>.
            </p>

            <div className="legal-section-list">
              
              {/* SECTION 1 */}
              <div className="legal-section-item">
                <div className="legal-section-header">
                  <span className="legal-num-badge">01</span>
                  <h3 className="legal-section-heading">What Are Cookies?</h3>
                </div>
                <div className="legal-section-body">
                  Cookies are small data text files placed on your computer or mobile device when you visit a website. They are widely used to ensure websites function smoothly and to supply analytics data to site owners.
                </div>
              </div>

              {/* SECTION 2 */}
              <div className="legal-section-item">
                <div className="legal-section-header">
                  <span className="legal-num-badge">02</span>
                  <h3 className="legal-section-heading">Categories of Cookies We Use</h3>
                </div>
                <div className="legal-section-body">
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <li>
                      <strong style={{ color: '#ffffff' }}>Essential Cookies:</strong> Required for fundamental site security, routing, and contact form operations.
                    </li>
                    <li>
                      <strong style={{ color: '#ffffff' }}>Analytics Cookies:</strong> Help us measure visitor interaction trends via aggregated Google Analytics 4 reporting.
                    </li>
                    <li>
                      <strong style={{ color: '#ffffff' }}>Preference Cookies:</strong> Store user choices to accelerate page loading speeds on subsequent visits.
                    </li>
                  </ul>
                </div>
              </div>

              {/* SECTION 3 */}
              <div className="legal-section-item">
                <div className="legal-section-header">
                  <span className="legal-num-badge">03</span>
                  <h3 className="legal-section-heading">Managing Cookie Preferences</h3>
                </div>
                <div className="legal-section-body">
                  You retain the right to accept or refuse cookies. You can set or amend your web browser controls to accept or remove cookies at any time.
                </div>
              </div>

            </div>

            {/* CONTACT FOOTER IN CARD */}
            <div style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="legal-banner-box">
                <div>
                  <h5 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>Questions about our cookie usage?</h5>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.6)' }}>We are happy to answer any technical tracking questions.</p>
                </div>
                <a href="mailto:contact@studionexivo.com" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                  Contact Us
                </a>
              </div>

              <div className="legal-footer-nav">
                <Link to="/" style={{ color: 'var(--teal-light)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                  <ArrowLeft size={16} /> Back to Home
                </Link>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <Link to="/terms" style={{ color: 'rgba(244,242,235,0.6)', textDecoration: 'none' }}>Terms & Conditions</Link>
                  <Link to="/privacy" style={{ color: 'rgba(244,242,235,0.6)', textDecoration: 'none' }}>Privacy Policy</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}