import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowLeft, ShieldCheck } from 'lucide-react';

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
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: 'var(--charcoal-card)',
            border: '1px solid var(--line-strong)',
            borderRadius: '24px',
            padding: '3.5rem 2.5rem',
            boxShadow: 'var(--shadow)',
            backdropFilter: 'blur(16px)'
          }}>
            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(244,242,235,0.85)',
              lineHeight: '1.8',
              marginBottom: '2.5rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--line)'
            }}>
              At <strong>Nexivo</strong> (accessible from <strong>www.studionexivo.com</strong>), protecting the privacy and personal data of our website visitors and clients is a fundamental priority. This Privacy Policy details the types of information we collect and how we utilize it.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              {/* SECTION 1 */}
              <div style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--glow-teal)', color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>01</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>Information We Collect</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(244,242,235,0.75)', lineHeight: '1.8', marginBottom: '0.8rem' }}>
                  When you submit lead forms, request a project quote, or contact us, we may collect:
                </p>
                <ul style={{ paddingLeft: '1.25rem', color: 'rgba(244,242,235,0.7)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li>Name, business email address, and contact phone number</li>
                  <li>Company name, domain URL, and project requirements</li>
                  <li>Technical analytics data (IP address, browser type, device details)</li>
                </ul>
              </div>

              {/* SECTION 2 */}
              <div style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--glow-teal)', color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>02</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>How We Use Your Information</h3>
                </div>
                <ul style={{ paddingLeft: '1.25rem', color: 'rgba(244,242,235,0.75)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>To operate, maintain, and deliver our custom web and agency services</li>
                  <li>To communicate regarding service inquiries, milestone estimates, and client support</li>
                  <li>To analyze site traffic via Google Analytics 4 to optimize site usability</li>
                  <li>To enforce website security protocols and prevent fraudulent activities</li>
                </ul>
              </div>

              {/* SECTION 3 */}
              <div style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--glow-teal)', color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>03</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>Data Security & GDPR Compliance</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(244,242,235,0.75)', lineHeight: '1.8' }}>
                  We do not sell, trade, or rent your personal information to third parties. We enforce strict data encryption standards to shield your personal details against unauthorized access.
                </p>
              </div>

              {/* SECTION 4 */}
              <div style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--glow-teal)', color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>04</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>Third-Party Analytics Services</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(244,242,235,0.75)', lineHeight: '1.8' }}>
                  We utilize privacy-respecting analytics tools (such as Google Analytics 4) to monitor aggregate usage patterns and improve overall website speed and experience.
                </p>
              </div>

            </div>

            {/* CONTACT FOOTER IN CARD */}
            <div style={{ marginTop: '3rem', pt: '2rem', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(29, 158, 117, 0.08)', border: '1px solid rgba(29, 158, 117, 0.2)', borderRadius: '14px', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h5 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>Want to exercise your privacy rights?</h5>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.6)' }}>Request data correction or removal at any time.</p>
                </div>
                <a href="mailto:contact@studionexivo.com" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                  Email Privacy Officer
                </a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'rgba(244,242,235,0.5)' }}>
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