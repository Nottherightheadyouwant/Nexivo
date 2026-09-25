import React, { useState } from 'react';
import { Download, Mail, CheckCircle2, FileText, X, Sparkles, Send, Phone, User } from 'lucide-react';
import { sendBrochureEmail } from '../utils/emailService';
import { submitToGoogleSheet } from '../utils/sheetService';

export default function BrochureModal({ isOpen, onClose, triggerToast }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceInterest, setServiceInterest] = useState('Website Development');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);

    // 1. Immediate local browser PDF download trigger
    const link = document.createElement('a');
    link.href = '/Nexivo-Services-Brochure-2026.pdf';
    link.download = 'Nexivo-Services-Brochure-2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Automated email dispatch directly to client inbox via EmailJS (zero backend server cost)
    try {
      await sendBrochureEmail({ name, email, phone, serviceInterest });
    } catch (err) {
      console.error('Email dispatch error:', err);
    }

    // 3. Automated Google Sheet Sync
    try {
      await submitToGoogleSheet({
        name,
        email,
        phone,
        service: serviceInterest,
        source: 'Brochure PDF Download Form',
        message: `Requested official brochure for ${serviceInterest}`
      });
    } catch (err) {
      console.error('Google Sheet submission error:', err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    if (triggerToast) {
      triggerToast('Brochure PDF downloaded & sent to your email inbox!');
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(10px)',
        overflowY: 'auto'
      }}
    >
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '520px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.2rem 2rem',
          border: '1.5px solid var(--teal-light)',
          background: 'linear-gradient(145deg, rgba(26,26,24,0.98), rgba(12,15,13,0.98))',
          position: 'relative',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.95)'
        }}
      >
        {/* PROMINENT VISIBLE CLOSE (CUT) BUTTON */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', borderBottom: '1px solid var(--line)', paddingBottom: '0.8rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="eyebrow" style={{ margin: 0, padding: '0.3rem 0.8rem', fontSize: '0.75rem' }}>
              <Sparkles size={12} /> Official Agency Brochure
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1.5px solid var(--teal-light)',
              color: '#ffffff',
              borderRadius: '999px',
              padding: '0.4rem 1rem',
              fontSize: '0.85rem',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(93,202,165,0.3)',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Close</span> <X size={16} color="#5DCAA5" />
          </button>
        </div>

        {!isSuccess ? (
          <>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--offwhite)', marginBottom: '0.5rem', lineHeight: '1.2' }}>
              Download Nexivo Services & Pricing Guide 2026 (PDF)
            </h2>
            <p style={{ fontSize: '0.86rem', color: 'rgba(244,242,235,0.65)', marginBottom: '1.4rem', lineHeight: '1.5' }}>
              Fill in your email below to instantly receive our complete 5-page pricing brochure including Web Development, Local SEO, and Meta Ads packages.
            </p>

            {/* PREVIEW CARD */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 1.1rem', borderRadius: '12px', background: 'rgba(29,158,117,0.08)', border: '1px solid rgba(29,158,117,0.25)', marginBottom: '1.5rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(29,158,117,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal-light)', flexShrink: 0 }}>
                <FileText size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--offwhite)' }}>Nexivo-Services-Brochure-2026.pdf</div>
                <div style={{ fontSize: '0.76rem', color: 'rgba(244,242,235,0.5)' }}>5 Pages • High-Res Pricing & Deliverables Scope (95 kB)</div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'rgba(244,242,235,0.85)', marginBottom: '0.4rem' }}>Your Full Name *</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(244,242,235,0.4)' }} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.6rem', borderRadius: '10px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line-strong)', color: 'var(--offwhite)', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'rgba(244,242,235,0.85)', marginBottom: '0.4rem' }}>Work Email Address *</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(244,242,235,0.4)' }} />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.6rem', borderRadius: '10px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line-strong)', color: 'var(--offwhite)', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'rgba(244,242,235,0.85)', marginBottom: '0.4rem' }}>Phone / WhatsApp Number (Optional)</label>
                <div style={{ position: 'relative' }}>
                  <Phone size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(244,242,235,0.4)' }} />
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.6rem', borderRadius: '10px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line-strong)', color: 'var(--offwhite)', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'rgba(244,242,235,0.85)', marginBottom: '0.4rem' }}>Primary Service Focus</label>
                <select
                  value={serviceInterest}
                  onChange={(e) => setServiceInterest(e.target.value)}
                  style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '10px', background: 'rgba(26,26,24,0.95)', border: '1px solid var(--line-strong)', color: 'var(--offwhite)', fontSize: '0.88rem', outline: 'none' }}
                >
                  <option value="Website Development" style={{ background: '#1a1a18' }}>Website Development</option>
                  <option value="Local SEO & Maps Domination" style={{ background: '#1a1a18' }}>Search Engine Optimization (Local SEO)</option>
                  <option value="Digital Marketing & Lead Funnels" style={{ background: '#1a1a18' }}>Digital Marketing & Lead Funnels</option>
                  <option value="Social Media Management" style={{ background: '#1a1a18' }}>Social Media Management</option>
                  <option value="Paid Google & Meta Ads" style={{ background: '#1a1a18' }}>Paid Ads & Content Packs</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '0.95rem', fontSize: '0.95rem' }}
              >
                {isSubmitting ? 'Sending Brochure PDF...' : 'Download & Email Brochure PDF'} <Download size={18} />
              </button>

              <div style={{ fontSize: '0.72rem', color: 'rgba(244,242,235,0.4)', textAlign: 'center', marginTop: '0.8rem' }}>
                🔒 Zero spam guarantee. Your details are strictly confidential.
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '999px', background: 'rgba(37,211,102,0.15)', border: '1.5px solid #25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem', color: '#25D366' }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--offwhite)', marginBottom: '0.6rem' }}>
              Brochure Downloaded & Sent!
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(244,242,235,0.7)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Thank you, <strong>{name}</strong>! We have initiated the PDF download in your browser and sent a copy to <strong style={{ color: 'var(--teal-light)' }}>{email}</strong>.
            </p>

            <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(29,158,117,0.1)', border: '1px solid rgba(29,158,117,0.3)', marginBottom: '1.8rem', fontSize: '0.85rem', color: 'var(--offwhite)' }}>
              💬 Want to discuss custom project scope immediately? Speak with founder <strong>Jay Parmar</strong> on WhatsApp.
            </div>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/919724470737?text=${encodeURIComponent(`Hi Nexivo! I just requested your Services Brochure PDF. My name is ${name} (${email}). Let's discuss ${serviceInterest}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center', textDecoration: 'none' }}
              >
                Chat on WhatsApp <Send size={16} />
              </a>
              <button onClick={handleReset} className="btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
