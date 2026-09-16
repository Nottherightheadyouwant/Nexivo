import React from 'react';
import { Link } from 'react-router-dom';

export default function Cookies() {
  return (
    <div className="section" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
          Legal & Compliance
        </span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
          Cookie Policy
        </h1>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '2.5rem' }}>
          Last Updated: September 16, 2026
        </p>

        <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '0.95rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            This Cookie Policy explains how <strong>Nexivo</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website at <strong>www.studionexivo.com</strong>.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: '2rem', marginBottom: '0.75rem' }}>
            1. What Are Cookies?
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Cookies are small data files placed on your computer or mobile device when you visit a website. They are widely used to ensure websites function efficiently and to provide analytics data.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: '2rem', marginBottom: '0.75rem' }}>
            2. Types of Cookies We Use
          </h3>
          <ul style={{ paddingLeft: '1.5rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#ffffff' }}>Essential Cookies:</strong> Required for fundamental site security and form functionality.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#ffffff' }}>Analytics Cookies:</strong> Help us understand how visitors interact with our pages via aggregated Google Analytics data.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#ffffff' }}>Preference Cookies:</strong> Remember your choices to speed up future visits and performance.
            </li>
          </ul>

          <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: '2rem', marginBottom: '0.75rem' }}>
            3. Managing Your Cookie Preferences
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            You can control or disable cookies through your web browser settings. Disabling essential cookies may impact certain interactive features on our site.
          </p>

          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              For any questions regarding our use of cookies, please email us at{' '}
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
            <Link to="/terms" style={{ color: '#94a3b8', marginRight: '1rem', textDecoration: 'none' }}>Terms & Conditions</Link>
            <Link to="/privacy" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
