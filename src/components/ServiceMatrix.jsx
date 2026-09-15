import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function ServiceMatrix() {
  const [tab, setTab] = useState(0);

  const webDevs = [
    { icon: '🏥', title: 'Clinic & Medical Sites', desc: 'Appointment info, doctor profiles, and a booking flow that ends in WhatsApp, not a dead contact form.' },
    { icon: '🛒', title: 'E-commerce Stores', desc: 'Full store builds — product catalog, cart, fast checkout, and Razorpay/Stripe payment integration.' },
    { icon: '⚡', title: 'Site Redesigns', desc: 'Outdated site made fast, mobile-first, and visually sharp — without losing your Google search ranking.' }
  ];

  const marketing = [
    { icon: '📈', title: 'Meta & Google Ads', desc: 'Campaigns built around one goal: qualified leads landing directly in your WhatsApp, not vanity clicks.' },
    { icon: '🔍', title: 'Local SEO & GBP', desc: 'Get found by people searching "near me" — Google Business Profile optimization, citations, and reviews.' },
    { icon: '📱', title: 'Social Management', desc: 'Instagram and Facebook content that actually looks like your brand, posted on a steady schedule.' }
  ];

  const currentList = tab === 0 ? webDevs : marketing;

  const handleEnquire = (serviceName) => {
    const text = encodeURIComponent(`Hi Nexivo! I would like to enquire about ${serviceName}.`);
    window.open(`https://wa.me/919724470737?text=${text}`, '_blank');
  };

  return (
    <div>
      <div className="matrix-tabs">
        <div className={`matrix-glider ${tab === 1 ? 'pos-1' : ''}`}></div>
        <button className={`matrix-tab ${tab === 0 ? 'active' : ''}`} onClick={() => setTab(0)}>
          Web Development
        </button>
        <button className={`matrix-tab ${tab === 1 ? 'active' : ''}`} onClick={() => setTab(1)}>
          Digital Marketing
        </button>
      </div>

      <div className="grid-3">
        {currentList.map((item, idx) => (
          <div key={idx} className="service-card">
            <div>
              <div className="icn">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
            <div className="service-wa" onClick={() => handleEnquire(item.title)}>
              <MessageSquare size={16} /> Enquire on WhatsApp
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}