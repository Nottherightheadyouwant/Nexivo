import React, { useState } from 'react';
import { MessageSquare, Globe, ShoppingBag, RefreshCw, Target, TrendingUp, Share2 } from 'lucide-react';

export default function ServiceMatrix() {
  const [tab, setTab] = useState(0);

  const webDevs = [
    { 
      icon: <Globe size={24} color="#5DCAA5" />, 
      title: 'Business & Service Websites', 
      desc: 'High-converting corporate and service websites with clear messaging, interactive lead flows, and instant client inquiries.' 
    },
    { 
      icon: <ShoppingBag size={24} color="#5DCAA5" />, 
      title: 'E-commerce & Online Stores', 
      desc: 'Full store builds — product catalogs, shopping cart, fast checkout, and seamless payment gateway integrations.' 
    },
    { 
      icon: <RefreshCw size={24} color="#5DCAA5" />, 
      title: 'Website Redesigns & Upgrades', 
      desc: 'Modernize your existing site — faster load speed, mobile-first UX, and sleek visual design without losing your search rankings.' 
    }
  ];

  const marketing = [
    { 
      icon: <Target size={24} color="#5DCAA5" />, 
      title: 'Meta & Google Ads', 
      desc: 'High-ROI campaigns built around one goal: qualified leads landing directly in your inbox or WhatsApp, not vanity clicks.' 
    },
    { 
      icon: <TrendingUp size={24} color="#5DCAA5" />, 
      title: 'SEO & Search Rankings', 
      desc: 'Get found by customers searching for your products and services — technical Schema, on-page optimization, and top search positions.' 
    },
    { 
      icon: <Share2 size={24} color="#5DCAA5" />, 
      title: 'Social Media & Brand Strategy', 
      desc: 'Engaging content and multi-channel marketing strategy that builds brand authority and drives steady inbound growth.' 
    }
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
              <div className="icn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(93, 202, 165, 0.1)', border: '1px solid rgba(93, 202, 165, 0.25)', marginBottom: '1.2rem' }}>
                {item.icon}
              </div>
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