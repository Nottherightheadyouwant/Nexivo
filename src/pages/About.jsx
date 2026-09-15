import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Zap, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
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
        <div className="eyebrow"><MapPin size={16} /> Based in Ahmedabad, Gujarat</div>
        <h1 className="page-title">
          We don't build digital brochures. <br /><span className="accent">We build client engines.</span>
        </h1>
        <p className="page-desc">
          Nexivo was created with a clear mission: eliminate generic, slow templates and give Indian business owners websites that generate real phone calls, store visits, and WhatsApp inquiries daily.
        </p>
      </section>

      {/* MEET THE FOUNDERS SECTION */}
      <section style={{ paddingTop: '1rem' }}>
        <div className="section-head center" style={{ marginBottom: '2.5rem' }}>
          <div className="section-kicker">Leadership & Founders</div>
          <h2 className="section-title">Driven by passion, engineered for performance.</h2>
          <p className="section-desc">Meet the visionaries behind Nexivo turning ambitious Indian brands into market leaders.</p>
        </div>

        <div className="grid-2" style={{ gap: '2rem' }}>
          {/* FOUNDER 1: JAY PARMAR */}
          <div className="glass-card" style={{ padding: '2.2rem', border: '1px solid var(--teal-light)' }}>
            <div style={{ position: 'relative', marginBottom: '1.8rem' }}>
              <div style={{
                borderRadius: '20px', overflow: 'hidden', border: '2px solid rgba(29, 158, 117, 0.4)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
              }}>
                <img 
                  src={jayParmarImg} 
                  alt="Jay Parmar - Founder & Creative Director at Nexivo" 
                  style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: '35% 55%', display: 'block' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '0.8rem',
                right: '0.8rem',
                background: 'rgba(15, 23, 20, 0.92)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(93, 202, 165, 0.4)',
                color: '#5DCAA5',
                fontSize: '0.78rem',
                fontWeight: '600',
                padding: '0.35rem 0.75rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                whiteSpace: 'nowrap',
                zIndex: 2
              }}>
                <MapPin size={13} /> Ahmedabad, India
              </div>
            </div>

            <div>
              <div className="section-kicker">Founder</div>
              <h3 style={{ fontFamily: 'Syne', fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.2rem', color: '#F4F2EB' }}>
                Jay Parmar
              </h3>
              <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--teal-light)', marginBottom: '1rem' }}>
                Founder & Creative Director @ Nexivo
              </div>

              <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.78)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                "I founded Nexivo in Ahmedabad to bridge the gap between traditional, slow web agencies and ambitious Indian brands needing real digital growth. Every site we craft is engineered to load in sub-seconds and convert visitors into active leads."
              </p>

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
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
          <div className="glass-card" style={{ padding: '2.2rem', border: '1px solid rgba(55, 138, 221, 0.4)' }}>
            <div style={{ position: 'relative', marginBottom: '1.8rem' }}>
              <div style={{
                borderRadius: '20px', overflow: 'hidden', border: '2px solid rgba(55, 138, 221, 0.4)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
              }}>
                <img 
                  src={sauravVaghelaImg} 
                  alt="Saurav Vaghela - Co-Founder & Growth / SEO Lead at Nexivo" 
                  style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '0.8rem',
                right: '0.8rem',
                background: 'rgba(15, 23, 20, 0.92)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(55, 138, 221, 0.4)',
                color: '#378ADD',
                fontSize: '0.78rem',
                fontWeight: '600',
                padding: '0.35rem 0.75rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                whiteSpace: 'nowrap',
                zIndex: 2
              }}>
                <MapPin size={13} /> Ahmedabad, India
              </div>
            </div>

            <div>
              <div className="section-kicker" style={{ color: '#378ADD' }}>Co-Founder</div>
              <h3 style={{ fontFamily: 'Syne', fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.2rem', color: '#F4F2EB' }}>
                Saurav Vaghela
              </h3>
              <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#378ADD', marginBottom: '1rem' }}>
                Co-Founder & Digital Growth / SEO Lead @ Nexivo
              </div>

              <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.78)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                "At Nexivo, we leverage data-driven SEO strategies, performance marketing, and seamless conversion funnels to ensure our clients dominate their local search markets and achieve maximum ROI."
              </p>

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://www.linkedin.com/in/sauravvaghela19/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary" 
                  style={{ fontSize: '0.85rem', padding: '0.65rem 1.1rem', background: '#0A66C2', borderColor: '#0A66C2' }}
                >
                  LinkedIn Profile <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <button onClick={() => handleWhatsAppContact('Saurav')} className="btn-outline" style={{ fontSize: '0.85rem', padding: '0.65rem 1.1rem' }}>
                  Chat with Saurav <MessageSquare size={15} />
                </button>
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
              Every pixel, button, and headline is engineered to guide your visitor to take action — whether booking an appointment or inquiring on WhatsApp.
            </p>
          </div>
          <div className="glass-card">
            <Zap size={32} color="#378ADD" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'Syne', marginBottom: '0.6rem' }}>Sub-Second Speed</h3>
            <p style={{ color: 'rgba(244,242,235,0.6)', fontSize: '0.9rem' }}>
              We build using modern JavaScript stack (Vite + React) that loads under 1 second on mobile networks across India.
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
              We understand Gujarati business culture, consumer habits, and local search patterns. You deal directly with founders Jay Parmar and Saurav Vaghela, not outsourced reps.
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
