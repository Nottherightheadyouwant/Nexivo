import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Estimator({ triggerToast }) {
  const [baseCost, setBaseCost] = useState(7000);
  const [baseDays, setBaseDays] = useState(30);
  const [toggles, setToggles] = useState({
    cms: false,
    speed: false,
    maintenance: false,
    catalog: false
  });

  const projects = [
    { label: 'Starter Website', cost: 7000, days: 30 },
    { label: 'Standard Website', cost: 12000, days: 30 },
    { label: 'Website Redesign', cost: 8000, days: 30 },
    { label: 'Local SEO Boost', cost: 6999, days: 30 },
    { label: 'Google & Meta Ads', cost: 9999, days: 30 },
    { label: 'Social Media Pack', cost: 7499, days: 30 }
  ];

  const addons = [
    { key: 'cms', label: 'CMS integration (edit content yourself)', cost: 2000 },
    { key: 'speed', label: 'Speed optimization pass (95+ score)', cost: 1500 },
    { key: 'maintenance', label: '1-Month extended maintenance pass', cost: 2500 },
    { key: 'catalog', label: 'E-commerce product catalog setup', cost: 3000 }
  ];

  const toggleAddon = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const addCost = addons.reduce((sum, item) => sum + (toggles[item.key] ? item.cost : 0), 0);
  const totalCost = baseCost + addCost;
  const pct = Math.min(100, (totalCost / 30000) * 100);

  const handleBook = () => {
    const text = encodeURIComponent(`Hi Nexivo! I calculated my project estimate on the website: ₹${totalCost.toLocaleString('en-IN')} (${baseDays} days turnaround). I would like to lock this package in.`);
    window.open(`https://wa.me/919724470737?text=${text}`, '_blank');
    if (triggerToast) triggerToast('WhatsApp chat opened with your calculated estimate!');
  };

  return (
    <div className="estimator-panel">
      <div>
        <div className="field-label">Select Project Package</div>
        <div className="chip-row">
          {projects.map((p, idx) => (
            <button
              key={idx}
              className={`chip ${baseCost === p.cost ? 'active' : ''}`}
              onClick={() => { setBaseCost(p.cost); setBaseDays(p.days); }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="field-label" style={{ marginTop: '1.5rem' }}>Optional Add-ons</div>
        {addons.map((a) => (
          <div key={a.key} className="toggle-row">
            <span>{a.label} (+₹{a.cost.toLocaleString('en-IN')})</span>
            <div
              className={`switch ${toggles[a.key] ? 'on' : ''}`}
              onClick={() => toggleAddon(a.key)}
            >
              <div className="knob"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="estimate-out">
        <div>
          <div className="field-label">Estimated Budget</div>
          <div className="estimate-big">
            ₹{totalCost.toLocaleString('en-IN')}
          </div>
          <div className="estimate-line">
            <span>Delivery Timeline</span>
            <span style={{ color: '#5DCAA5', fontWeight: '700' }}>~{baseDays} days</span>
          </div>
          <div className="gauge-track">
            <div className="gauge-fill" style={{ width: `${pct}%` }}></div>
          </div>
        </div>
        <button onClick={handleBook} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          Book Project on WhatsApp <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}