import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Estimator({ triggerToast }) {
  const [selectedProject, setSelectedProject] = useState('Starter Website');
  const [selectedDays, setSelectedDays] = useState(14);
  const [toggles, setToggles] = useState({
    cms: false,
    speed: false,
    maintenance: false,
    catalog: false
  });

  const projects = [
    { label: 'Starter Website', days: 14 },
    { label: 'Standard Website', days: 21 },
    { label: 'Website Redesign', days: 14 },
    { label: 'Local SEO Boost', days: 30 },
    { label: 'Google & Meta Ads', days: 14 },
    { label: 'Social Media Pack', days: 30 }
  ];

  const addons = [
    { key: 'cms', label: 'CMS integration (edit content yourself)' },
    { key: 'speed', label: 'Speed optimization pass (95+ score)' },
    { key: 'maintenance', label: '1-Month extended maintenance pass' },
    { key: 'catalog', label: 'E-commerce product catalog setup' }
  ];

  const toggleAddon = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const activeAddonCount = Object.values(toggles).filter(Boolean).length;

  const handleBook = () => {
    const activeAddonLabels = addons.filter(a => toggles[a.key]).map(a => a.label).join(', ');
    const text = encodeURIComponent(`Hi Nexivo! I configured my project scope on the website: Package: ${selectedProject} (${selectedDays} days turnaround) with addons: ${activeAddonLabels || 'None'}. Please send a custom proposal.`);
    window.open(`https://wa.me/919724470737?text=${text}`, '_blank');
    if (triggerToast) triggerToast('WhatsApp chat opened with your custom scope details!');
  };

  return (
    <div className="estimator-panel">
      <div>
        <div className="field-label">Select Project Package</div>
        <div className="chip-row">
          {projects.map((p, idx) => (
            <button
              key={idx}
              className={`chip ${selectedProject === p.label ? 'active' : ''}`}
              onClick={() => { setSelectedProject(p.label); setSelectedDays(p.days); }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="field-label" style={{ marginTop: '1.5rem' }}>Optional Scope Add-ons</div>
        {addons.map((a) => (
          <div key={a.key} className="toggle-row">
            <span>{a.label}</span>
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
          <div className="field-label">Selected Scope Summary</div>
          <div className="estimate-big" style={{ fontSize: '1.4rem' }}>
            {selectedProject}
          </div>
          <div className="estimate-line" style={{ marginTop: '0.8rem' }}>
            <span>Turnaround Timeline</span>
            <span style={{ color: '#5DCAA5', fontWeight: '700' }}>~{selectedDays} Days Delivery</span>
          </div>
          <div className="estimate-line">
            <span>Selected Add-ons</span>
            <span style={{ color: 'var(--offwhite)', fontWeight: '600' }}>{activeAddonCount} Selected</span>
          </div>
        </div>
        <button onClick={handleBook} className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1.2rem' }}>
          Get Proposal on WhatsApp <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}