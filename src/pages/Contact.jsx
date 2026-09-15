import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import FaqAccordion from '../components/FaqAccordion';

export default function Contact({ triggerToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Business Website',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hi Nexivo! My name is ${formData.name} (${formData.phone}). Interested in ${formData.service}. Message: ${formData.message}`);
    window.open(`https://wa.me/919724470737?text=${text}`, '_blank');
    if (triggerToast) triggerToast('Thank you! Redirecting to WhatsApp chat...');
    setFormData({ name: '', phone: '', email: '', service: 'Business Website', message: '' });
  };

  return (
    <main>
      <section className="page-header">
        <div className="eyebrow"><MessageSquare size={16} /> Fast Response Guaranteed</div>
        <h1 className="page-title">
          Let's talk about your <span className="accent">next growth step.</span>
        </h1>
        <p className="page-desc">
          Have a question or ready to launch? Reach out via form or send a direct message on WhatsApp for instant reply.
        </p>
      </section>

      <section>
        <div className="contact-grid">
          <div>
            <div className="contact-info-item">
              <div className="contact-icon"><MapPin size={20} /></div>
              <div className="contact-details">
                <h5>Our Office</h5>
                <p>Ahmedabad, Gujarat, India</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon"><MessageSquare size={20} /></div>
              <div className="contact-details">
                <h5>Instant WhatsApp</h5>
                <p><a href="https://wa.me/919724470737?text=Hi%20Nexivo!%20I'd%20like%20to%20chat." target="_blank" rel="noopener noreferrer">+91 97244 70737</a></p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon"><Mail size={20} /></div>
              <div className="contact-details">
                <h5>Email Inquiry</h5>
                <p><a href="mailto:studio.nexivo@gmail.com">studio.nexivo@gmail.com</a></p>
              </div>
            </div>

            <div className="glass-card" style={{ marginTop: '2rem' }}>
              <h4 style={{ fontFamily: 'Syne', marginBottom: '0.5rem', color: '#5DCAA5' }}>Operating Hours</h4>
              <p style={{ fontSize: '0.88rem', color: 'rgba(244,242,235,0.65)' }}>
                Monday – Saturday: 9:30 AM – 7:30 PM IST<br />
                Sunday: Emergency WhatsApp Support Available
              </p>
            </div>
          </div>

          <div className="contact-card">
            <h3 style={{ fontFamily: 'Syne', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Full Name *</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="e.g. Shalvi Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  className="form-control"
                  placeholder="e.g. +91 97244 70737"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Service Needed</label>
                <select
                  className="form-control"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="Business Website">Business Website</option>
                  <option value="E-commerce Store">E-commerce Store</option>
                  <option value="Clinic Website">Clinic Website</option>
                  <option value="Meta & Google Ads">Meta & Google Ads</option>
                  <option value="Local SEO">Local SEO</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message / Project Details</label>
                <textarea
                  className="form-control"
                  placeholder="Tell us a bit about your business and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message via WhatsApp <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}