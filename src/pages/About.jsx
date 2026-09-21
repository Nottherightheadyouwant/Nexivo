import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Zap, MapPin, MessageSquare, ArrowRight, Globe } from 'lucide-react';
import jayParmarImg from '../assets/jay-parmar.jpg';
import sauravVaghelaImg from '../assets/saurav-vaghela.jpg';

export default function About() {
  const handleWhatsAppContact = (name) => {
    const text = encodeURIComponent(`Hi ${name}! I would like to chat about a website / digital marketing project for my business.`);
    window.open(`https://wa.me/919724470737?text=${text}`, '_blank');
  };

  return (
    <main>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="eyebrow"><Globe size={16} /> Global Agency — London, UK & Ahmedabad, India</div>
        <h1 className="page-title">
          We don't build digital brochures. <br /><span className="accent">We build client engines worldwide.</span>
        </h1>
        <p className="page-desc">
          Nexivo was created with a clear mission: eliminate generic, slow templates and give ambitious global brands websites that generate real phone calls, qualified leads, and sales daily.
        </p>
      </section>

      {/* MEET THE FOUNDERS SECTION */}
      <section style={{ paddingTop: '1rem' }}>
        <div className="section-head center" style={{ marginBottom: '2.5rem' }}>
          <div className="section-kicker">Leadership & Founders</div>
          <h2 className="section-title">Driven by passion, engineered for global performance.</h2>
          <p className="section-desc">Meet the visionaries behind Nexivo turning ambitious brands into market leaders across India, the UK, USA, UAE, and worldwide.</p>
        </div>

        <div className="grid-2 founder-grid" style={{ gap: '2rem' }}>
          {/* FOUNDER 1: JAY PARMAR */}
          <div className="glass-card founder-card">
            <div className="founder-img-wrap" style={{ position: 'relative', marginBottom: '1.8rem' }}>
              <div className="founder-img-container">
                <img 
                  src={jayParmarImg} 
                  alt="Jay Parmar - Founder & Creative Director / Lead Developer at Nexivo" 
                  style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: '35% 55%', display: 'block' }}
                />
              </div>
              <div className="location-badge founder-badge">
                <MapPin size={13} /> Ahmedabad, India
              </div>
            </div>

            <div>
              <div className="section-kicker">Founder</div>
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.2rem', color: '#F4F2EB' }}>
                Jay Parmar
              </h3>
              <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--teal-light)', marginBottom: '1rem' }}>
                Founder & Creative Director / Lead Developer @ Nexivo
              </div>

              <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.78)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                "I co-founded Nexivo to bridge the gap between slow, traditional web agencies and ambitious global brands needing real digital growth. Every platform we craft is engineered to load in sub-seconds and convert visitors into active leads."
              </p>

              <div className="founder-actions">
                <button onClick={() => handleWhatsAppContact('Jay')} className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.65rem 1.1rem' }}>
                  Connect with Jay <MessageSquare size={16} />
                </button>
                <Link to="/contact" className="btn-outline" style={{ fontSize: '0.85rem', padding: '0.65rem 1.1rem' }}>
                  Book Project <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* FOUNDER 2: SAURAV VAGHELA */}
          <div className="glass-card founder-card" style={{ border: '1px solid rgba(55, 138, 221, 0.4)' }}>
            <div className="founder-img-wrap" style={{ position: 'relative', marginBottom: '1.8rem' }}>
              <div className="founder-img-container" style={{ border: '2px solid rgba(55, 138, 221, 0.4)' }}>
                <img 
                  src={sauravVaghelaImg} 
                  alt="Saurav Vaghela - Co-Founder & Technical Lead at Nexivo" 
                  style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'center 65%', display: 'block' }}
                />
              </div>
              <div className="location-badge founder-badge" style={{ border: '1px solid rgba(55, 138, 221, 0.4)', color: '#378ADD' }}>
                <MapPin size={13} /> London, UK
              </div>
            </div>

            <div>
              <div className="section-kicker" style={{ color: '#378ADD' }}>Co-Founder</div>
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.2rem', color: '#F4F2EB' }}>
                Saurav Vaghela
              </h3>
              <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#378ADD', marginBottom: '1rem' }}>
                Co-Founder & Technical Lead @ Nexivo
              </div>

              <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.78)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                "Operating from London, I lead digital strategy, SEO, and performance marketing to ensure our international clients dominate search engines and scale their revenue across global markets."
              </p>

              <div className="founder-actions">
                <button onClick={() => handleWhatsAppContact('Saurav')} className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.65rem 1.1rem', background: '#378ADD', borderColor: '#378ADD' }}>
                  Connect with Saurav <MessageSquare size={16} />
                </button>
                <Link to="/contact" className="btn-outline" style={{ fontSize: '0.85rem', padding: '0.65rem 1.1rem' }}>
                  Book Project <ArrowRight size={15} />
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
            <h3 style={{ fontFamily: 'Plus Jakarta Sans', marginBottom: '0.6rem' }}>Conversion First</h3>
            <p style={{ color: 'rgba(244,242,235,0.6)', fontSize: '0.9rem' }}>
              Every pixel, button, and headline is engineered to guide your visitor to take action — whether booking an appointment or placing an order.
            </p>
          </div>
          <div className="glass-card">
            <Zap size={32} color="#378ADD" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'Plus Jakarta Sans', marginBottom: '0.6rem' }}>Sub-Second Speed</h3>
            <p style={{ color: 'rgba(244,242,235,0.6)', fontSize: '0.9rem' }}>
              We build using modern JavaScript stack (Vite + React) that loads under 1 second on mobile networks worldwide.
            </p>
          </div>
          <div className="glass-card">
            <ShieldCheck size={32} color="#5DCAA5" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'Plus Jakarta Sans', marginBottom: '0.6rem' }}>Zero Hidden Fees</h3>
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
          <h2 className="section-title">Built for global market dominance.</h2>
        </div>
        <div className="grid-2">
          <div className="glass-card">
            <h4 style={{ fontFamily: 'Plus Jakarta Sans', color: '#5DCAA5', marginBottom: '0.5rem' }}>Global Standards & Dual-Hub Presence</h4>
            <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.65)' }}>
              With dual hubs in London, UK and Ahmedabad, India, we combine world-class design standards with round-the-clock development agility. You work directly with founders Jay Parmar and Saurav Vaghela.
            </p>
          </div>
          <div className="glass-card">
            <h4 style={{ fontFamily: 'Plus Jakarta Sans', color: '#378ADD', marginBottom: '0.5rem' }}>Direct Instant WhatsApp & Lead Triggers</h4>
            <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.65)' }}>
              Global buyers value speed and instant communication. We build custom WhatsApp & direct lead triggers into every project to double lead conversion rates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
