import React, { useState } from 'react';
import { Check, ArrowRight, MessageSquare, Zap, Clock, ShieldCheck } from 'lucide-react';
import Estimator from '../components/Estimator';
import FaqAccordion from '../components/FaqAccordion';

export default function Pricing({ triggerToast }) {
  const [activeCategory, setActiveCategory] = useState('web-dev');

  const pricingCategories = [
    { id: 'web-dev', label: 'Web Development' },
    { id: 'seo', label: 'SEO' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'content-creation', label: 'Content Creation' },
    { id: 'ads-management', label: 'Google & Meta Ads' }
  ];

  const pricingData = {
    'web-dev': [
      {
        name: 'Starter',
        desc: 'For a single business or shop that just needs a clean, professional presence online.',
        price: '₹7,000',
        note: '~10 day delivery',
        popular: false,
        features: [
          '4 static pages only',
          'Mobile-responsive design',
          'WhatsApp click-to-chat button',
          'Google Maps + contact info',
          '1 round of revisions'
        ]
      },
      {
        name: 'Standard',
        desc: 'Built for clinics, pharmacies, and growing businesses who want to look established.',
        price: '₹12,000',
        note: '~14 day delivery',
        popular: true,
        ribbon: 'MOST POPULAR',
        features: [
          'Everything in Starter',
          '1–2 dynamic pages',
          'Services & pricing showcase',
          'SEO-friendly structure',
          '2 rounds of revisions',
          '1 month free support after launch'
        ]
      },
      {
        name: 'Complete',
        desc: 'For businesses ready to sell online, not just be found online.',
        price: 'Scoped per catalog',
        note: 'custom timeline based on catalog',
        popular: false,
        features: [
          'Everything in Standard',
          'Full dynamic website',
          'Full e-commerce: cart + payment gateway',
          'Product catalog setup',
          'Priority technical support',
          '3 months free maintenance included'
        ]
      }
    ],

    'seo': [
      {
        name: 'Local Boost',
        desc: 'Essential SEO for local stores and clinics wanting to appear in local search.',
        price: '₹6,999',
        note: 'per month',
        popular: false,
        features: [
          'Google Business Profile (GBP) setup',
          'Top 5 local keyword optimization',
          'Basic citation & directory listings',
          'Monthly ranking report'
        ]
      },
      {
        name: 'Map Pack Domination',
        desc: 'Our flagship local SEO package designed to rank your business top 3 in Google Maps.',
        price: '₹11,999',
        note: 'per month',
        popular: true,
        ribbon: 'MOST POPULAR',
        features: [
          'Everything in Local Boost',
          'GBP Top 3 Google Maps focus',
          '15 high-intent local keywords',
          'Technical Schema & On-Page SEO',
          'Review generation engine setup',
          '2 months free audit pass'
        ]
      },
      {
        name: 'National Authority',
        desc: 'For multi-location brands and nationwide e-commerce stores.',
        price: '₹19,999',
        note: 'per month',
        popular: false,
        features: [
          'Everything in Map Pack Domination',
          '35 nationwide keywords',
          'High-authority backlink outreach',
          'Weekly rank updates & technical audits',
          'Competitor link gap analysis'
        ]
      }
    ],

    'digital-marketing': [
      {
        name: 'Growth Funnel',
        desc: 'Lead generation funnel setup for small businesses seeking steady inquiries.',
        price: '₹8,999',
        note: 'per month',
        popular: false,
        features: [
          'Lead capture landing page build',
          'WhatsApp conversion triggers',
          'Basic CRO audit',
          'Monthly lead performance report'
        ]
      },
      {
        name: 'Omnichannel Scale',
        desc: 'Full digital marketing system for businesses ready to scale sales predictable.',
        price: '₹16,999',
        note: 'per month',
        popular: true,
        ribbon: 'MOST POPULAR',
        features: [
          'Everything in Growth Funnel',
          'A/B landing page copy testing',
          'Automated email & WhatsApp lead nurturing',
          'Weekly ROI & conversion dashboard',
          'Customer Lifetime Value optimization'
        ]
      },
      {
        name: 'Enterprise Growth',
        desc: 'Full marketing team dedicated to your brand expansion.',
        price: '₹28,999',
        note: 'per month',
        popular: false,
        features: [
          'Everything in Omnichannel Scale',
          'Custom CRM integration',
          'Advanced retargeting funnels',
          'Dedicated account manager',
          'Priority 24/7 campaign support'
        ]
      }
    ],

    'social-media': [
      {
        name: 'Starter Grid',
        desc: 'Clean, active social media presence for small businesses.',
        price: '₹7,499',
        note: 'per month',
        popular: false,
        features: [
          '12 custom feed posts / month',
          'Caption & hashtag strategy',
          'Profile bio optimization',
          'Monthly growth report'
        ]
      },
      {
        name: 'Reel Strategy Pro',
        desc: 'High-engagement Reels and branded visual grid management.',
        price: '₹14,999',
        note: 'per month',
        popular: true,
        ribbon: 'MOST POPULAR',
        features: [
          '15 custom feed posts / month',
          '8 high-engagement Reel scripts',
          'Brand grid aesthetic templates',
          'DM & comment community management',
          'Interactive story polls'
        ]
      },
      {
        name: 'Full Retainer',
        desc: 'Complete social media takeover and influencer management.',
        price: '₹24,999',
        note: 'per month',
        popular: false,
        features: [
          'Everything in Reel Strategy Pro',
          '25 posts + 15 Reel scripts / month',
          'Influencer collaboration management',
          'Weekly analytics & trend tracking',
          'Dedicated video editor'
        ]
      }
    ],

    'content-creation': [
      {
        name: 'Ad Creative Pack',
        desc: 'High-converting ad banners and video scripts.',
        price: '₹4,999',
        note: 'one-time pack',
        popular: false,
        features: [
          '6 Meta/Google ad banners',
          '2 video ad scripts',
          '1 round of revisions',
          'High-res PNG & Figma exports'
        ]
      },
      {
        name: 'Brand & Copy Pack',
        desc: 'Complete website copy and brand content suite.',
        price: '₹9,999',
        note: 'one-time pack',
        popular: true,
        ribbon: 'MOST POPULAR',
        features: [
          'Everything in Ad Creative Pack',
          'Full website copywriting',
          'Brand tone of voice guide',
          '12 social media ad banners',
          'Digital PDF brochure'
        ]
      },
      {
        name: 'Full Media Suite',
        desc: 'Complete creative assets bundle for major brand launches.',
        price: '₹18,999',
        note: 'one-time pack',
        popular: false,
        features: [
          'Everything in Brand & Copy Pack',
          'Product catalog copy & templates',
          '25 ad banner variations',
          '5 short-form video ad scripts',
          'Priority 3-day turnaround'
        ]
      }
    ],

    'ads-management': [
      {
        name: 'PPC Lead Launch',
        desc: 'Targeted single-channel PPC campaign for immediate lead generation.',
        price: '₹9,999',
        note: 'per month + ad spend',
        popular: false,
        features: [
          '1 ad campaign (Google Search or Meta)',
          'Conversion tracking & Pixel setup',
          'Ad creative & sales copy design',
          'Monthly performance report'
        ]
      },
      {
        name: 'High ROAS Scaling',
        desc: 'Multi-channel Meta & Google search ad management built for high ROAS.',
        price: '₹18,999',
        note: 'per month + ad spend',
        popular: true,
        ribbon: 'MOST POPULAR',
        features: [
          'Google Search + Meta Retargeting',
          'Multi-ad set A/B testing',
          'Custom conversion API tracking',
          'Negative keyword exclusions (Zero wasted spend)',
          'Weekly campaign optimization'
        ]
      },
      {
        name: 'Enterprise Ad Spend',
        desc: 'Full paid advertising management for major ad budgets.',
        price: '₹34,999',
        note: 'per month + ad spend',
        popular: false,
        features: [
          'Everything in High ROAS Scaling',
          'Omnichannel Search, Display & Video Ads',
          'Dedicated PPC specialist',
          'Daily bid & budget management',
          'Real-time ROI dashboard'
        ]
      }
    ]
  };

  const currentTiers = pricingData[activeCategory] || pricingData['web-dev'];

  const handleEnquireTier = (tierName, price) => {
    const categoryObj = pricingCategories.find(c => c.id === activeCategory);
    const categoryName = categoryObj ? categoryObj.label : 'Project';
    const text = encodeURIComponent(`Hi Nexivo! I am interested in the ${tierName} package for ${categoryName} (${price}). Please provide details.`);
    window.open(`https://wa.me/919724470737?text=${text}`, '_blank');
    if (triggerToast) triggerToast(`Opening WhatsApp for ${tierName} package!`);
  };

  return (
    <main>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="eyebrow">Pricing Packages</div>
        <h1 className="page-title">
          Pick a starting point, <span className="accent">not a spreadsheet.</span>
        </h1>
        <p className="page-desc">
          Most clients don't know exactly what they need — select your service category below to view transparent pricing tiers from "I just need to exist online" to "I want full growth."
        </p>

        {/* DYNAMIC CATEGORY TABS */}
        <div className="chip-row" style={{ justifyContent: 'center', marginTop: '2.5rem', gap: '0.6rem' }}>
          {pricingCategories.map(cat => (
            <button
              key={cat.id}
              className={`chip ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* DYNAMIC TIERS GRID */}
      <section style={{ paddingTop: '1.5rem' }}>
        <div className="pricing-grid">
          {currentTiers.map((tier, idx) => (
            <div key={idx} className={`pricing-card ${tier.popular ? 'popular' : ''}`}>
              {tier.popular && <div className="popular-badge">{tier.ribbon || 'MOST POPULAR'}</div>}
              <div>
                <div className="plan-name">{tier.name}</div>
                <div className="plan-desc">{tier.desc}</div>
                <div className="plan-price">{tier.price}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(244,242,235,0.4)', marginBottom: '1.6rem' }}>
                  {tier.note}
                </div>

                <ul className="plan-features">
                  {tier.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleEnquireTier(tier.name, tier.price)}
                className={tier.popular ? 'btn-primary' : 'btn-outline'}
                style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
              >
                Enquire on WhatsApp <MessageSquare size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* ADDONS BAR */}
        <div className="glass-card" style={{ marginTop: '3.5rem', padding: '1.8rem', display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', fontSize: '0.88rem', color: 'rgba(244,242,235,0.6)' }}>
          <div><b style={{ color: 'var(--offwhite)' }}>Website Redesign</b> — from ₹8,000</div>
          <div><b style={{ color: 'var(--offwhite)' }}>Monthly Maintenance</b> — ₹2,500/mo (after included period)</div>
          <div><b style={{ color: 'var(--offwhite)' }}>Custom SEO & Ads</b> — finalized per scope</div>
        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR */}
      <section>
        <div className="section-head">
          <div className="section-kicker">Custom Estimator</div>
          <h2 className="section-title">Need a custom combination? Calculate your budget.</h2>
        </div>
        <Estimator triggerToast={triggerToast} />
      </section>

      {/* FAQ SECTION */}
      <section>
        <div className="section-head center">
          <div className="section-kicker">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <FaqAccordion />
      </section>
    </main>
  );
}