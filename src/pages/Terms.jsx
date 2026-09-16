import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <main>
      <section className="page-header">
        <div className="eyebrow">
          <ShieldCheck size={16} /> Legal & Governance
        </div>
        <h1 className="page-title">
          Terms & <span className="accent">Conditions</span>
        </h1>
        <p className="page-desc">
          Last Updated: September 16, 2026 • Official terms governing the use of Nexivo services and digital platforms.
        </p>
      </section>

      <section style={{ paddingBottom: '6rem' }}>
        <div className="legal-container">
          <div className="legal-card">
            
            <p className="legal-intro-text">
              Welcome to <strong>Nexivo</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By accessing or using our website at <strong>www.studionexivo.com</strong> and engaging our web development, SEO, digital marketing, or brand consulting services, you agree to be bound by these Terms & Conditions.
            </p>

            <div className="legal-section-list">
              
              {/* SECTION 1 */}
              <div className="legal-section-item">
                <div className="legal-section-header">
                  <span className="legal-num-badge">01</span>
                  <h3 className="legal-section-heading">Acceptance of Terms</h3>
                </div>
                <div className="legal-section-body">
                  By accessing our website or approving a project estimate/proposal, you confirm that you have read, understood, and agreed to these terms. If you do not agree, please refrain from using our services or website.
                </div>
              </div>

              {/* SECTION 2 */}
              <div className="legal-section-item">
                <div className="legal-section-header">
                  <span className="legal-num-badge">02</span>
                  <h3 className="legal-section-heading">Scope of Services & Deliverables</h3>
                </div>
                <div className="legal-section-body">
                  <p style={{ marginBottom: '0.6rem' }}>
                    Nexivo provides custom web engineering, Search Engine Optimization (SEO), performance marketing campaigns, and brand strategy consulting.
                  </p>
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <li>All project scopes, deliverables, timelines, and costs are formalized in official proposals.</li>
                    <li>Any additional feature requests outside the agreed scope will be quoted separately.</li>
                  </ul>
                </div>
              </div>

              {/* SECTION 3 */}
              <div className="legal-section-item">
                <div className="legal-section-header">
                  <span className="legal-num-badge">03</span>
                  <h3 className="legal-section-heading">Intellectual Property Rights</h3>
                </div>
                <div className="legal-section-body">
                  Upon full settlement of project fees, all custom source code, website layouts, and creative assets produced specifically for the client belong to the client. Nexivo retains rights to underlying general frameworks, pre-existing utility tools, and core developer libraries.
                </div>
              </div>

              {/* SECTION 4 */}
              <div className="legal-section-item">
                <div className="legal-section-header">
                  <span className="legal-num-badge">04</span>
                  <h3 className="legal-section-heading">Payment Terms & Milestones</h3>
                </div>
                <div className="legal-section-body">
                  Payments must be remitted in accordance with the agreed milestone schedule. Invoices are payable within 7 calendar days of issuance unless otherwise stipulated in writing.
                </div>
              </div>

              {/* SECTION 5 */}
              <div className="legal-section-item">
                <div className="legal-section-header">
                  <span className="legal-num-badge">05</span>
                  <h3 className="legal-section-heading">Limitation of Liability</h3>
                </div>
                <div className="legal-section-body">
                  Nexivo shall not be held liable for third-party hosting server outages, search engine core algorithm updates, or external API modifications beyond our direct operational control.
                </div>
              </div>

            </div>

            {/* CONTACT FOOTER IN CARD */}
            <div style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="legal-banner-box">
                <div>
                  <h5 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>Have questions regarding our Terms?</h5>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.6)' }}>Our legal team is available for any clarifications.</p>
                </div>
                <a href="mailto:contact@studionexivo.com" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                  Contact Legal Team
                </a>
              </div>

              <div className="legal-footer-nav">
                <Link to="/" style={{ color: 'var(--teal-light)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                  <ArrowLeft size={16} /> Back to Home
                </Link>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <Link to="/privacy" style={{ color: 'rgba(244,242,235,0.6)', textDecoration: 'none' }}>Privacy Policy</Link>
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