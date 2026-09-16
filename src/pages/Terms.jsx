import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, FileText } from 'lucide-react';

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
              Welcome to <strong>Nexivo</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By accessing or using our website at <strong>www.studionexivo.com</strong> and engaging our web development, SEO, digital marketing, or brand consulting services, you agree to be bound by these Terms & Conditions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              {/* SECTION 1 */}
              <div style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--glow-teal)', color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>01</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>Acceptance of Terms</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(244,242,235,0.75)', lineHeight: '1.8' }}>
                  By accessing our website or approving a project estimate/proposal, you confirm that you have read, understood, and agreed to these terms. If you do not agree, please refrain from using our services or website.
                </p>
              </div>

              {/* SECTION 2 */}
              <div style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--glow-teal)', color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>02</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>Scope of Services & Deliverables</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(244,242,235,0.75)', lineHeight: '1.8', marginBottom: '0.8rem' }}>
                  Nexivo provides custom web engineering, Search Engine Optimization (SEO), performance marketing campaigns, and brand strategy consulting.
                </p>
                <ul style={{ paddingLeft: '1.25rem', color: 'rgba(244,242,235,0.7)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li>All project scopes, deliverables, timelines, and costs are formalized in official proposals.</li>
                  <li>Any additional feature requests outside the agreed scope will be quoted separately.</li>
                </ul>
              </div>

              {/* SECTION 3 */}
              <div style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--glow-teal)', color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>03</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>Intellectual Property Rights</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(244,242,235,0.75)', lineHeight: '1.8' }}>
                  Upon full settlement of project fees, all custom source code, website layouts, and creative assets produced specifically for the client belong to the client. Nexivo retains rights to underlying general frameworks, pre-existing utility tools, and core developer libraries.
                </p>
              </div>

              {/* SECTION 4 */}
              <div style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--glow-teal)', color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>04</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>Payment Terms & Milestones</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(244,242,235,0.75)', lineHeight: '1.8' }}>
                  Payments must be remitted in accordance with the agreed milestone schedule. Invoices are payable within 7 calendar days of issuance unless otherwise stipulated in writing.
                </p>
              </div>

              {/* SECTION 5 */}
              <div style={{ background: 'var(--glass)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'var(--glow-teal)', color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '6px' }}>05</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>Limitation of Liability</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(244,242,235,0.75)', lineHeight: '1.8' }}>
                  Nexivo shall not be held liable for third-party hosting server outages, search engine core algorithm updates, or external API modifications beyond our direct operational control.
                </p>
              </div>

            </div>

            {/* CONTACT FOOTER IN CARD */}
            <div style={{ marginTop: '3rem', pt: '2rem', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(29, 158, 117, 0.08)', border: '1px solid rgba(29, 158, 117, 0.2)', borderRadius: '14px', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h5 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>Have questions regarding our Terms?</h5>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.6)' }}>Our legal team is available for any clarifications.</p>
                </div>
                <a href="mailto:contact@studionexivo.com" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                  Contact Legal Team
                </a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'rgba(244,242,235,0.5)' }}>
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