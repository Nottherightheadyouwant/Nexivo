import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <main>
      <section className="page-header">
        <div className="eyebrow">
          <Lock size={16} /> Data Privacy & Protection
        </div>
        <h1 className="page-title">
          Privacy <span className="accent">Policy</span>
        </h1>
        <p className="page-desc">
          Last Updated: September 16, 2026 • Transparency guidelines on how Nexivo collects, uses, and safeguards your data.
        </p>
      </section>

      <section style={{ paddingBottom: '6rem' }}>
        <div className="legal-container">
          <div className="legal-card">
            
            <p className="legal-intro-text">
              At <strong>Nexivo</strong> (accessible from <strong>www.studionexivo.com</strong>), protecting the privacy and personal data of our website visitors and clients is a fundamental priority. This Privacy Policy details the types of information we collect and how we utilize it.
            </p>

            <div className="legal-section-list">
              
              {/* SECTION 1 */}
              <div className="legal-section-item">
                <div className="legal-section-header">
                  <span className="legal-num-badge">01</span>
                  <h3 className="legal-section-heading">Information We Collect</h3>
                </div>
                <div className="legal-section-body">
                  <p style={{ marginBottom: '0.6rem' }}>
                    When you submit lead forms, request a project quote, or contact us, we may collect:
                  </p>
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <li>Name, business email address, and contact phone number</li>
                    <li>Company name, domain URL, and project requirements</li>
                    <li>Technical analytics data (IP address, browser type, device details)</li>
                  </ul>
                </div>
              </div>

              {/* SECTION 2 */}
              <div className="legal-section-item">
                <div className="legal-section-header">
                  <span className="legal-num-badge">02</span>
                  <h3 className="legal-section-heading">How We Use Your Information</h3>
                </div>
                <div className="legal-section-body">
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>To operate, maintain, and deliver our custom web and agency services</li>
                    <li>To communicate regarding service inquiries, milestone estimates, and client support</li>
                    <li>To analyze site traffic via Google Analytics 4 to optimize site usability</li>
                    <li>To enforce website security protocols and prevent fraudulent activities</li>
                  </ul>
                </div>
              </div>

              {/* SECTION 3 */}
              <div className="legal-section-item">
                <div className="legal-section-header">
                  <span className="legal-num-badge">03</span>
                  <h3 className="legal-section-heading">Data Security & GDPR Compliance</h3>
                </div>
                <div className="legal-section-body">
                  We do not sell, trade, or rent your personal information to third parties. We enforce strict data encryption standards to shield your personal details against unauthorized access.
                </div>
              </div>

              {/* SECTION 4 */}
              <div className="legal-section-item">
                <div className="legal-section-header">
                  <span className="legal-num-badge">04</span>
                  <h3 className="legal-section-heading">Third-Party Analytics Services</h3>
                </div>
                <div className="legal-section-body">
                  We utilize privacy-respecting analytics tools (such as Google Analytics 4) to monitor aggregate usage patterns and improve overall website speed and experience.
                </div>
              </div>

            </div>

            {/* CONTACT FOOTER IN CARD */}
            <div style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="legal-banner-box">
                <div>
                  <h5 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>Want to exercise your privacy rights?</h5>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.6)' }}>Request data correction or removal at any time.</p>
                </div>
                <a href="mailto:contact@studionexivo.com" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                  Email Privacy Officer
                </a>
              </div>

              <div className="legal-footer-nav">
                <Link to="/" style={{ color: 'var(--teal-light)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                  <ArrowLeft size={16} /> Back to Home
                </Link>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <Link to="/terms" style={{ color: 'rgba(244,242,235,0.6)', textDecoration: 'none' }}>Terms & Conditions</Link>
                  <Link to="/cookies" style={{ color: 'rgba(244,242,235,0.6)', textDecoration: 'none' }}>Cookie Policy</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}