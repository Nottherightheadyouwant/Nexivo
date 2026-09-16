import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="section" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.5rem' }}>
          Legal & Compliance
        </span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '2.5rem' }}>
          Last Updated: September 16, 2026
        </p>

        <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '0.95rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            At <strong>Nexivo</strong> (accessible from <strong>www.studionexivo.com</strong>), protecting the privacy of our website visitors and clients is a priority. This Privacy Policy details the types of information we collect and how we utilize it.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: '2rem', marginBottom: '0.75rem' }}>
            1. Information We Collect
          </h3>
          <p style={{ marginBottom: '0.75rem' }}>When you fill out lead forms, request a quote, or contact us, we may collect:</p>
          <ul style={{ paddingLeft: '1.5rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
            <li>Name, email address, and contact phone number</li>
            <li>Company name and project details</li>
            <li>Technical analytics data (IP address, browser type, device information)</li>
          </ul>

          <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: '2rem', marginBottom: '0.75rem' }}>
            2. How We Use Your Information
          </h3>
          <ul style={{ paddingLeft: '1.5rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
            <li>To deliver, maintain, and enhance our agency services and website</li>
            <li>To communicate regarding service inquiries, quotes, and project updates</li>
            <li>To analyze web traffic via Google Analytics to optimize user experience</li>
            <li>To maintain website security and prevent fraudulent activity</li>
          </ul>

          <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: '2rem', marginBottom: '0.75rem' }}>
            3. Data Protection & GDPR Compliance
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            We do not sell, rent, or trade your personal information to third parties. We implement robust security protocols to protect your personal data from unauthorized access or disclosure.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: '#38bdf8', marginTop: '2rem', marginBottom: '0.75rem' }}>
            4. Third-Party Analytics
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            We utilize privacy-respecting analytics tools (such as Google Analytics 4) to monitor aggregate usage patterns and improve website performance.
          </p>

          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              For any privacy inquiries or data requests, please contact us at{' '}
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
            <Link to="/cookies" style={{ color: '#94a3b8', textDecoration: 'none' }}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
