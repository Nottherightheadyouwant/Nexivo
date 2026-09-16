import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="section" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
          Legal & Compliance
        </span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
          Terms & Conditions
        </h1>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '2.5rem' }}>
          Last Updated: September 16, 2026
        </p>

        <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '0.95rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Welcome to <strong>Nexivo</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By accessing or using <strong>www.studionexivo.com</strong> and engaging our web engineering, SEO, digital marketing, or branding services, you agree to be bound by these Terms & Conditions.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: '2rem', marginBottom: '0.75rem' }}>
            1. Acceptance of Terms
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            By browsing our site or authorizing a project proposal, you confirm that you have read, understood, and agreed to these terms. If you disagree with any part of these terms, please refrain from using our services or site.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: '2rem', marginBottom: '0.75rem' }}>
            2. Scope of Services
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Nexivo provides custom web development, search engine optimization (SEO), performance ad management, social media strategy, and digital consulting. Specific scopes, deliverables, timelines, and costs are defined in official proposals or project specifications.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: '2rem', marginBottom: '0.75rem' }}>
            3. Intellectual Property Rights
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Upon full payment of project fees, all custom source code, graphic designs, and written content created specifically for the client belong to the client. Nexivo retains ownership of pre-existing core frameworks, general tools, and reusable components.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: '2rem', marginBottom: '0.75rem' }}>
            4. Payment Terms & Milestones
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Payments must be remitted per the agreed milestone schedule. Invoices are due within 7 days of issuance unless otherwise arranged in writing.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: '2rem', marginBottom: '0.75rem' }}>
            5. Limitation of Liability
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Nexivo is not liable for third-party hosting server downtime, search engine algorithm updates, or external API modifications beyond our direct control.
          </p>

          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              For any questions regarding these Terms & Conditions, please email us at{' '}
              <a href="mailto:contact@studionexivo.com" style={{ color: '#38bdf8', textDecoration: 'none' }}>
                contact@studionexivo.com
              </a>.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
          <Link to="/" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 600 }}>
            ? Back to Home
          </Link>
          <div>
            <Link to="/privacy" style={{ color: '#94a3b8', marginRight: '1rem', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/cookies" style={{ color: '#94a3b8', textDecoration: 'none' }}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
