import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Zap, Heart, MapPin, Users } from 'lucide-react';

export default function About() {
  return (
    <main>
      <section className="page-header">
        <div className="eyebrow"><MapPin size={16} /> Based in Ahmedabad, Gujarat</div>
        <h1 className="page-title">
          We don't build digital brochures. <br /><span className="accent">We build client engines.</span>
        </h1>
        <p className="page-desc">
          Nexivo was created with a clear mission: eliminate generic, slow templates and give Indian business owners websites that generate real phone calls, store visits, and WhatsApp inquiries daily.
        </p>
      </section>

      <section>
        <div className="grid-3">
          <div className="glass-card">
            <Target size={32} color="#5DCAA5" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'Syne', marginBottom: '0.6rem' }}>Conversion First</h3>
            <p style={{ color: 'rgba(244,242,235,0.6)', fontSize: '0.9rem' }}>
              Every pixel, button, and headline is engineered to guide your visitor to take action — whether booking a doctor appointment or placing an order.
            </p>
          </div>
          <div className="glass-card">
            <Zap size={32} color="#378ADD" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'Syne', marginBottom: '0.6rem' }}>Sub-Second Speed</h3>
            <p style={{ color: 'rgba(244,242,235,0.6)', fontSize: '0.9rem' }}>
              We build using modern JavaScript stack (Vite + React) that loads under 1 second on mobile 4G networks across India.
            </p>
          </div>
          <div className="glass-card">
            <ShieldCheck size={32} color="#5DCAA5" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'Syne', marginBottom: '0.6rem' }}>Zero Hidden Fees</h3>
            <p style={{ color: 'rgba(244,242,235,0.6)', fontSize: '0.9rem' }}>
              Transparent pricing, clear milestone deliverables, and full ownership of your domain, code, and accounts from day one.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="section-head center">
          <div className="section-kicker">Why Choose Nexivo</div>
          <h2 className="section-title">Built for local market dominance.</h2>
        </div>
        <div className="grid-2">
          <div className="glass-card">
            <h4 style={{ fontFamily: 'Syne', color: '#5DCAA5', marginBottom: '0.5rem' }}>Local Ahmedabad Presence</h4>
            <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.65)' }}>
              We understand Gujarati business culture, consumer habits, and local search patterns. You deal directly with our founders, not an outsourced agency rep.
            </p>
          </div>
          <div className="glass-card">
            <h4 style={{ fontFamily: 'Syne', color: '#378ADD', marginBottom: '0.5rem' }}>Direct WhatsApp Integration</h4>
            <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.65)' }}>
              Indian buyers love instant WhatsApp communication. We build custom WhatsApp triggers into every project to double lead conversion rates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}