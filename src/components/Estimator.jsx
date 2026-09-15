import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Estimator({ triggerToast }) {
  const [baseCost, setBaseCost] = useState(6000);
  const [baseDays, setBaseDays] = useState(5);
  const [toggles, setToggles] = useState({
    cms: false,
    analytics: false,
    speed: false,
    ads: false
  });

  const projects = [
    { label: 'Business Website', cost: 6000, days: 5 },
    { label: 'E-commerce Store', cost: 15000, days: 10 },
    { label: 'SEO & Growth', cost: 9000, days: 7 },
    { label: 'Full Digital Launch', cost: 22000, days: 14 }
  ];

  const addons = [
    { key: 'cms', label: 'CMS integration (edit content yourself)', cost: 2000 },
    { key: 'analytics', label: 'Analytics dashboard & tracking', cost: 1500 },
    { key: 'speed', label: 'Speed optimization pass (95+ score)', cost: 1000 },
    { key: 'ads', label: 'Meta & Google Ads setup', cost: 3000 }
  ];

  const toggleAddon = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const addCost = addons.reduce((sum, item) => sum + (toggles[item.key] ? item.cost : 0), 0);
  const totalCost = baseCost + addCost;
  const pct = Math.min(100, (totalCost / 30000) * 100);

  const handleBook = () => {
    const text = encodeURIComponent(`Hi Nexivo! I calculated my project estimate: ₹${totalCost.toLocaleString('en-IN')} (${baseDays} days delivery). I would like to lock this in.`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
    if (triggerToast) triggerToast('WhatsApp chat opened with project estimate!');
  };

  return (
    <div className="estimator-panel">
      <div>
        <div className="field-label">Select Project Type</div>
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

        <div className="field-label">Optional Add-ons</div>
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
          <div className="estimate-big">₹{totalCost.toLocaleString('en-IN')}</div>
          <div className="estimate-line">
            <span>Delivery Timeline</span>
            <span style={{ color: '#5DCAA5', fontWeight: '700' }}>{baseDays} days</span>
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