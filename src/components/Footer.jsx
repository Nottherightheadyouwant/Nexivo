import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <span className="logo-brand-wrap">
              <span className="logo-white">Nex</span>
              <span className="logo-teal">ivo</span>
            </span>
          </div>
          <div className="footer-loc"><MapPin size={16} /> Global Agency — India & UK</div>
          <p style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.5)', marginTop: '0.8rem', maxWidth: '280px' }}>
            High-converting digital builds and revenue marketing for growing brands in India & UK.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h5>Navigation</h5>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <a href="https://wa.me/919724470737?text=Hi%20Nexivo!%20I%20would%20like%20to%20enquire%20about%20a%20website%20project." target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <Link to="/contact">Book Consultation</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Nexivo Digital. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/terms" style={{ color: 'rgba(244,242,235,0.5)', textDecoration: 'none' }}>Terms</Link>
          <Link to="/privacy" style={{ color: 'rgba(244,242,235,0.5)', textDecoration: 'none' }}>Privacy</Link>
          <Link to="/cookies" style={{ color: 'rgba(244,242,235,0.5)', textDecoration: 'none' }}>Cookies</Link>
        </div>
      </div>
    </footer>
  );
}