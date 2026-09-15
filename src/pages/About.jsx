import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Zap, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import jayParmarImg from '../assets/jay-parmar.jpg';

export default function About() {
  const handleWhatsAppContact = () => {
    const text = encodeURIComponent("Hi Jay! I would like to chat about a website / digital marketing project for my business.");
    window.open(`https://wa.me/919724470737?text=${text}`, '_blank');
  };

  return (
    <main>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="eyebrow"><MapPin size={16} /> Based in Ahmedabad, Gujarat</div>
        <h1 className="page-title">
          We don't build digital brochures. <br /><span className="accent">We build client engines.</span>
        </h1>
        <p className="page-desc">
          Nexivo was created with a clear mission: eliminate generic, slow templates and give Indian business owners websites that generate real phone calls, store visits, and WhatsApp inquiries daily.
        </p>
      </section>

      {/* MEET THE FOUNDER SECTION */}
      <section style={{ paddingTop: '1rem' }}>
        <div className="glass-card" style={{ padding: '2.8rem', border: '1px solid var(--teal-light)' }}>
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px', overflow: 'hidden', border: '2px solid rgba(29, 158, 117, 0.4)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)', maxMaxHeight: '480px'
              }}>
                <img 
                  src={jayParmarImg} 
                  alt="Jay Parmar - Founder & Creative Director at Nexivo" 
                  style={{ width: '100%', height: '440px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                background: 'rgba(15, 23, 20, 0.92)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(93, 202, 165, 0.4)',
                color: '#5DCAA5',
                fontSize: '0.8rem',
                fontWeight: '600',
                padding: '0.45rem 0.85rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                whiteSpace: 'nowrap',
                zIndex: 2
              }}>
                <MapPin size={14} /> Ahmedabad, India
              </div>
            </div>

            <div>
              <div className="section-kicker">Meet The Founder</div>
              <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>
                Jay Parmar
              </h2>
              <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--teal-light)', marginBottom: '1.2rem' }}>
                Founder & Creative Director @ Nexivo
              </div>

              <p style={{ fontSize: '1rem', color: 'rgba(244,242,235,0.78)', lineHeight: '1.7', marginBottom: '1.2rem' }}>
                "I founded Nexivo in Ahmedabad to bridge the gap between traditional, slow web agencies and ambitious Indian brands needing real digital growth. Every site we craft is engineered to load in sub-seconds and convert visitors into active WhatsApp leads."
              </p>

              <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.6)', lineHeight: '1.65', marginBottom: '2rem' }}>
                Under Jay's lead, Nexivo has shipped high-converting platforms for clinics, videography studios, local retail brands, and e-commerce stores across Gujarat and India.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={handleWhatsAppContact} className="btn-primary">
                  Connect with Jay on WhatsApp <MessageSquare size={18} />
                </button>
                <Link to="/contact" className="btn-outline">
                  Book Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
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

      {/* WHY CHOOSE NEXIVO */}
      <section>
        <div className="section-head center">
          <div className="section-kicker">Why Choose Nexivo</div>
          <h2 className="section-title">Built for local market dominance.</h2>
        </div>
        <div className="grid-2">
          <div className="glass-card">
            <h4 style={{ fontFamily: 'Syne', color: '#5DCAA5', marginBottom: '0.5rem' }}>Local Ahmedabad Presence</h4>
            <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.65)' }}>
              We understand Gujarati business culture, consumer habits, and local search patterns. You deal directly with our founder Jay Parmar, not an outsourced agency rep.
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