import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, ArrowLeft, ShieldCheck } from 'lucide-react';

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
              This Cookie Policy details how <strong>Nexivo</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) utilizes cookies and similar tracking technologies when you visit <strong>www.studionexivo.com</strong>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              {/* SECTION 1 */}
              <div style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--glow-teal)', color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>01</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>What Are Cookies?</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(244,242,235,0.75)', lineHeight: '1.8' }}>
                  Cookies are small data text files placed on your computer or mobile device when you visit a website. They are widely used to ensure websites function smoothly and to supply analytics data to site owners.
                </p>
              </div>

              {/* SECTION 2 */}
              <div style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--glow-teal)', color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>02</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>Categories of Cookies We Use</h3>
                </div>
                <ul style={{ paddingLeft: '1.25rem', color: 'rgba(244,242,235,0.75)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
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

              {/* SECTION 3 */}
              <div style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--glow-teal)', color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>03</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>Managing Cookie Preferences</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(244,242,235,0.75)', lineHeight: '1.8' }}>
                  You retain the right to accept or refuse cookies. You can set or amend your web browser controls to accept or remove cookies at any time.
                </p>
              </div>

            </div>

            {/* CONTACT FOOTER IN CARD */}
            <div style={{ marginTop: '3rem', pt: '2rem', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(29, 158, 117, 0.08)', border: '1px solid rgba(29, 158, 117, 0.2)', borderRadius: '14px', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h5 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>Questions about our cookie usage?</h5>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.6)' }}>We are happy to answer any technical tracking questions.</p>
                </div>
                <a href="mailto:contact@studionexivo.com" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                  Contact Us
                </a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'rgba(244,242,235,0.5)' }}>
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