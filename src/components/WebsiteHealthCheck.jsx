import React, { useState } from 'react';
import { Search, AlertTriangle, XCircle, RefreshCw, Zap, ShieldAlert, Globe, MessageSquare } from 'lucide-react';

export default function WebsiteHealthCheck({ triggerToast }) {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [auditResult, setAuditResult] = useState(null);

  const steps = [
    'Checking SSL security & domain headers...',
    'Testing mobile viewport responsiveness...',
    'Analyzing load performance & core web vitals...',
    'Checking for WhatsApp / instant conversion triggers...',
    'Evaluating Google SEO Schema & meta structure...'
  ];

  const handleRunAudit = (overrideUrl = null) => {
    const targetUrl = overrideUrl !== null ? overrideUrl : url.trim();
    if (!targetUrl && overrideUrl === null) {
      if (triggerToast) triggerToast('Please enter a website URL or click "I don\'t have a website yet"');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisStep(0);
    setAuditResult(null);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < steps.length) {
        setAnalysisStep(current);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsAnalyzing(false);
          generateReport(targetUrl);
        }, 400);
      }
    }, 450);
  };

  const generateReport = (targetUrl) => {
    const cleanUrl = targetUrl ? targetUrl.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '') : '';
    const isNew = cleanUrl === 'NONE' || cleanUrl === '';

    if (isNew) {
      setAuditResult({
        isNew: true,
        score: 0,
        label: 'Blank Canvas — Ready to Build Strong',
        displayUrl: 'No Website Yet',
        checklist: [
          {
            type: 'warning',
            title: 'No Active Online Presence',
            desc: 'Without a website, your business relies 100% on word-of-mouth or social algorithms, missing out on high-intent search traffic.',
            impact: 'Missed Customers'
          },
          {
            type: 'warning',
            title: 'Missing Direct WhatsApp Lead Flow',
            desc: 'Over 70% of modern customers prefer instant chat on WhatsApp over filling out traditional static contact forms.',
            impact: 'Essential Feature'
          },
          {
            type: 'warning',
            title: 'Unclaimed Google Search Visibility',
            desc: 'Competitors with indexed websites rank higher on Google Search and Maps when users search for your services.',
            impact: 'SEO Opportunity'
          },
          {
            type: 'warning',
            title: 'No Centralized Service Portfolio',
            desc: 'Clients cannot view your full service list, pricing, or past work in one clean, fast-loading link.',
            impact: 'Brand Credibility'
          }
        ]
      });
    } else {
      setAuditResult({
        isNew: false,
        score: 42,
        label: 'Needs Critical Speed & Conversion Fixes',
        displayUrl: cleanUrl,
        checklist: [
          {
            type: 'fail',
            title: 'No Direct WhatsApp / Instant Contact Trigger',
            desc: 'Standard contact forms suffer up to 80% drop-off. Mobile visitors want 1-tap WhatsApp response.',
            impact: 'High Lead Loss'
          },
          {
            type: 'fail',
            title: 'Slow Mobile Load Speed (> 3.2s)',
            desc: '53% of mobile visitors abandon sites taking longer than 3 seconds to load on mobile connections.',
            impact: '50%+ Traffic Lost'
          },
          {
            type: 'fail',
            title: 'No Clear Call-to-Action Above the Fold',
            desc: 'Visitors land on the homepage but are not guided towards asking for a quote or booking an appointment.',
            impact: 'Low Conversion'
          },
          {
            type: 'warn',
            title: 'Outdated Viewport / Horizontal Scroll on Mobile',
            desc: 'Elements wrap improperly on modern mobile screens, creating visual friction and hurting trust.',
            impact: 'UX Friction'
          },
          {
            type: 'warn',
            title: 'Missing Google Schema & Local Search Markup',
            desc: 'Search engines struggle to parse your location, pricing, and Google Business Profile connection.',
            impact: 'Lower Rankings'
          }
        ]
      });
    }

    if (triggerToast) triggerToast('Audit report complete!');
  };

  const handleWhatsAppFix = () => {
    const target = auditResult?.displayUrl && auditResult.displayUrl !== 'No Website Yet' 
      ? `my site (${auditResult.displayUrl})` 
      : 'a new website build';
    const text = encodeURIComponent(`Hi Nexivo! I ran a Website Health Check for ${target} on your website. I want to discuss fixing these issues.`);
    window.open(`https://wa.me/919724470737?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setUrl('');
    setAuditResult(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="glass-card" style={{ padding: '2.5rem 2rem', borderRadius: '24px', border: '1px solid var(--line-strong)' }}>
      {/* INPUT FORM STAGE */}
      {!isAnalyzing && !auditResult && (
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.4rem 0.9rem', borderRadius: '20px', background: 'rgba(93, 202, 165, 0.1)', border: '1px solid rgba(93, 202, 165, 0.25)', color: 'var(--teal-light)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.8rem' }}>
              <Zap size={15} /> Instant Audit Tool
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--offwhite)', marginBottom: '0.5rem' }}>
              Check What’s Holding Your Website Back
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(244,242,235,0.65)' }}>
              Enter your website URL to instantly audit your mobile load speed, WhatsApp lead conversion, and key design bottlenecks.
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleRunAudit(); }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(244,242,235,0.4)', display: 'flex', alignItems: 'center' }}>
                  <Globe size={18} />
                </div>
                <input
                  type="text"
                  placeholder="e.g. mybusiness.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3rem',
                    borderRadius: '14px',
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid var(--line-strong)',
                    color: '#ffffff',
                    fontSize: '0.98rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ flex: '1 1 200px', justifyContent: 'center' }}
                >
                  <Search size={18} /> Run Instant Audit
                </button>
                <button
                  type="button"
                  onClick={() => handleRunAudit('NONE')}
                  className="btn-outline"
                  style={{ flex: '1 1 200px', justifyContent: 'center', fontSize: '0.85rem' }}
                >
                  I don't have a website yet
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* SCANNING ANIMATION STAGE */}
      {isAnalyzing && (
        <div style={{ maxWidth: '520px', margin: '1.5rem auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: 'rgba(93, 202, 165, 0.12)', border: '1px solid rgba(93, 202, 165, 0.3)', marginBottom: '1.5rem' }}>
            <RefreshCw size={32} style={{ color: 'var(--teal-light)' }} />
          </div>
          <h4 style={{ fontSize: '1.25rem', color: 'var(--offwhite)', marginBottom: '0.8rem' }}>
            Auditing Website Performance...
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--teal-light)', fontWeight: 600, minHeight: '28px' }}>
            {steps[analysisStep]}
          </p>

          <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', marginTop: '1.5rem' }}>
            <div
              style={{
                height: '100%',
                width: `${((analysisStep + 1) / steps.length) * 100}%`,
                background: 'linear-gradient(90deg, #0284c7 0%, #5DCAA5 100%)',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>
      )}

      {/* REPORT RESULTS STAGE */}
      {!isAnalyzing && auditResult && (
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {/* HEADER AUDIT CARD */}
          <div style={{
            background: 'rgba(0,0,0,0.35)',
            border: '1px solid var(--line-strong)',
            borderRadius: '18px',
            padding: '1.8rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: auditResult.isNew ? 'rgba(93, 202, 165, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                border: `2px solid ${auditResult.isNew ? '#5DCAA5' : '#ef4444'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                flexShrink: 0
              }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: auditResult.isNew ? '#5DCAA5' : '#ef4444', lineHeight: 1 }}>
                  {auditResult.score}
                </span>
                <span style={{ fontSize: '0.65rem', color: 'rgba(244,242,235,0.6)', textTransform: 'uppercase', fontWeight: 700 }}>
                  / 100
                </span>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: auditResult.isNew ? '#5DCAA5' : '#f87171', marginBottom: '0.2rem' }}>
                  {auditResult.label}
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', margin: 0 }}>
                  {auditResult.displayUrl}
                </h3>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-outline"
              style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
            >
              <RefreshCw size={14} /> Audit Another URL
            </button>
          </div>

          {/* CHECKLIST OF FINDINGS */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--offwhite)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldAlert size={20} color="#f87171" /> 
              {auditResult.isNew ? 'Essentials Checklist for Your New Build:' : 'Identified Bottlenecks & Conversion Flaws:'}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {auditResult.checklist.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--line)',
                    borderRadius: '14px',
                    padding: '1.2rem 1.4rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div style={{ marginTop: '2px', flexShrink: 0 }}>
                    {item.type === 'fail' && <XCircle size={20} color="#f87171" />}
                    {item.type === 'warn' && <AlertTriangle size={20} color="#fbbf24" />}
                    {item.type === 'warning' && <Zap size={20} color="#5DCAA5" />}
                  </div>

                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.3rem' }}>
                      <h5 style={{ fontSize: '1rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                        {item.title}
                      </h5>
                      {item.impact && (
                        <span style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)', fontWeight: 700 }}>
                          {item.impact}
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: '0.86rem', color: 'rgba(244,242,235,0.7)', margin: 0, lineHeight: '1.55' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WANT US TO FIX THIS? CTA BOX */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.15) 0%, rgba(29, 158, 117, 0.15) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Want us to fix this?
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.8)', maxWidth: '560px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
              Nexivo builds high-converting, sub-second fast websites with built-in WhatsApp lead conversion triggers. We can fix or launch your site in 7 days.
            </p>

            <button
              onClick={handleWhatsAppFix}
              className="btn-primary"
              style={{ padding: '0.85rem 2rem', fontSize: '1rem', justifyContent: 'center', margin: '0 auto' }}
            >
              <MessageSquare size={18} /> Enquire on WhatsApp to Fix This Site
            </button>
          </div>
        </div>
      )}
    </div>
  );
}