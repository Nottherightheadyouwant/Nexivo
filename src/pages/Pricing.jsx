import React, { useState } from 'react';
import { Check, MessageSquare, Zap } from 'lucide-react';
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
        desc: 'For brands that need dynamic product catalogs, e-commerce, or custom features.',
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
        desc: 'Get found by customers searching nearby for your service.',
        price: '₹6,999 / mo',
        note: '3-month min contract',
        popular: false,
        features: [
          'Google Business Profile setup & audit',
          'Top 5 local keywords target',
          'Directory citations & listings',
          'Monthly ranking report'
        ]
      },
      {
        name: 'Map Pack Domination',
        desc: 'Aim for top 3 in Google Maps for your primary service keywords.',
        price: '₹11,999 / mo',
        note: '3-month min contract',
        popular: true,
        ribbon: 'MOST POPULAR',
        features: [
          'Everything in Local Boost',
          'Top 3 Google Maps focus',
          '15 local keywords target',
          'Technical Schema & On-Page SEO',
          'Google review growth strategy',
          'Free SEO audit pass for 2 months'
        ]
      },
      {
        name: 'National Authority',
        desc: 'For brands scaling across multiple cities or nationwide in India.',
        price: '₹19,999 / mo',
        note: 'custom strategy',
        popular: false,
        features: [
          'Everything in Map Pack',
          '35 keywords targeted nationwide',
          'High-authority backlink outreach',
          'Weekly keyword rank updates',
          'Competitor link gap analysis'
        ]
      }
    ],
    'digital-marketing': [
      {
        name: 'Growth Funnel',
        desc: 'High-converting funnel setup for lead generation.',
        price: '₹8,999 / mo',
        note: '1-month setup + retainer',
        popular: false,
        features: [
          'Lead capture landing page',
          'WhatsApp instant response trigger',
          'Basic CRO audit & tracking',
          'Monthly lead performance report'
        ]
      },
      {
        name: 'Omnichannel Scale',
        desc: 'Scale inquiries across email, WhatsApp, and landing pages.',
        price: '₹16,999 / mo',
        note: 'recommended for active brands',
        popular: true,
        ribbon: 'MOST POPULAR',
        features: [
          'Everything in Growth Funnel',
          'A/B copy & headline testing',
          'Automated email & WhatsApp lead nurturing',
          'Weekly ROI & conversion dashboard',
          'Customer LTV optimization'
        ]
      },
      {
        name: 'Enterprise Growth',
        desc: 'Custom revenue strategy for established enterprises.',
        price: '₹28,999 / mo',
        note: 'custom contract',
        popular: false,
        features: [
          'Full digital strategy & funnel design',
          'Custom CRM & webhook integrations',
          'Advanced retargeting campaigns',
          'Dedicated account manager',
          'Priority 24/7 campaign support'
        ]
      }
    ],
    'social-media': [
      {
        name: 'Starter Grid',
        desc: 'Consistent, professional social media presence.',
        price: '₹7,499 / mo',
        note: 'monthly retainer',
        popular: false,
        features: [
          '12 custom feed posts / month',
          'Caption & hashtag strategy',
          'Profile bio optimization',
          'Monthly performance analytics'
        ]
      },
      {
        name: 'Reel Strategy Pro',
        desc: 'Leverage Instagram Reels & short video to drive viral growth.',
        price: '₹14,999 / mo',
        note: 'monthly retainer',
        popular: true,
        ribbon: 'MOST POPULAR',
        features: [
          '15 feed posts / month',
          '8 Reel scripts & editing templates',
          'Brand grid template design',
          'DM & comment community management',
          'Weekly performance report'
        ]
      },
      {
        name: 'Full Retainer',
        desc: 'Complete social media takeover & video production.',
        price: '₹24,999 / mo',
        note: 'full-service',
        popular: false,
        features: [
          '25 feed posts / month',
          '15 Reel scripts + full video edit',
          'Influencer collaboration management',
          'Weekly analytics & strategy call',
          'Dedicated video editor'
        ]
      }
    ],
    'content-creation': [
      {
        name: 'Ad Creative Pack',
        desc: 'High-performing visual banners & ad copy for ad campaigns.',
        price: '₹4,999',
        note: 'one-time pack',
        popular: false,
        features: [
          '6 Meta / Google ad banners',
          '2 video ad script concepts',
          'Ad copywriting variations',
          '2 rounds of revisions'
        ]
      },
      {
        name: 'Brand & Copy Pack',
        desc: 'Full website copywriting and brand guidelines asset pack.',
        price: '₹9,999',
        note: 'one-time pack',
        popular: true,
        ribbon: 'MOST POPULAR',
        features: [
          'Full website copywriting (up to 7 pages)',
          'Brand voice & tone guideline doc',
          '12 ad banners + 2 video scripts',
          'Digital brochure / PDF design'
        ]
      },
      {
        name: 'Full Media Suite',
        desc: 'Complete digital asset & video script production.',
        price: '₹18,999',
        note: 'one-time pack',
        popular: false,
        features: [
          'Full product & service copy suite',
          '25 ad banners (all formats)',
          '5 short video script & storyboard concepts',
          'Social media launch toolkit'
        ]
      }
    ],
    'ads-management': [
      {
        name: 'PPC Lead Launch',
        desc: 'Targeted Google Search or Meta ads for local service leads.',
        price: '₹9,999 / mo',
        note: '+ ad spend',
        popular: false,
        features: [
          'Google Search or Meta ads setup',
          'Conversion tracking & Pixel setup',
          'Ad creative & copy design',
          'Monthly ROAS & lead report'
        ]
      },
      {
        name: 'High ROAS Scaling',
        desc: 'Combined Google & Meta ads to maximize appointment bookings.',
        price: '₹18,999 / mo',
        note: '+ ad spend',
        popular: true,
        ribbon: 'MOST POPULAR',
        features: [
          'Google Search + Meta Retargeting',
          'Multi-ad set A/B testing',
          'Conversion API & custom event setup',
          'Negative keyword sculpting',
          'Bi-weekly strategy call'
        ]
      },
      {
        name: 'Enterprise Ad Spend',
        desc: 'For brands spending over ₹1 Lakh/mo on digital ads.',
        price: '₹34,999 / mo',
        note: '+ ad spend',
        popular: false,
        features: [
          'Omnichannel Google, Meta & LinkedIn ads',
          'Daily bid & budget management',
          'Real-time Looker Studio ROI dashboard',
          'Dedicated media buyer',
          '24/7 campaign monitoring'
        ]
      }
    ]
  };

  const handleEnquire = (planName, price) => {
    const text = encodeURIComponent(`Hi Nexivo! I would like to enquire about the ${planName} package (${price}).`);
    window.open(`https://wa.me/919724470737?text=${text}`, '_blank');
    if (triggerToast) triggerToast(`Opening WhatsApp for ${planName} enquiry...`);
  };

  return (
    <main>
      <section className="page-header">
        <div className="eyebrow"><Zap size={16} /> Transparent Pricing • Zero Hidden Costs</div>
        <h1 className="page-title">
          Simple packages for <span className="accent">predictable digital growth.</span>
        </h1>
        <p className="page-desc">
          Choose a fixed package or build a custom project. Clear deliverables, no surprise bills, and honest timelines.
        </p>
      </section>

      {/* CATEGORY SWITCHER */}
      <section style={{ paddingTop: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {pricingCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`chip ${activeCategory === cat.id ? 'active' : ''}`}
              style={{ fontSize: '0.88rem', padding: '0.6rem 1.2rem' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PRICING CARDS GRID */}
        <div className="pricing-grid">
          {pricingData[activeCategory]?.map((plan, idx) => (
            <div key={idx} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-ribbon">{plan.ribbon}</div>}
              
              <h3 className="pricing-title">{plan.name}</h3>
              <p className="pricing-desc">{plan.desc}</p>

              <div className="pricing-amount">
                {plan.price}
                <span className="pricing-note">{plan.note}</span>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={16} style={{ color: 'var(--teal-light)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleEnquire(plan.name, plan.price)}
                className={plan.popular ? 'btn-primary' : 'btn-outline'}
                style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
              >
                Enquire on WhatsApp <MessageSquare size={16} />
              </button>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.9rem', color: 'rgba(244,242,235,0.6)' }}>
          Need a custom enterprise scope? <strong>Website Redesign</strong> — from ₹8,000 | <strong>Monthly Maintenance</strong> — ₹2,500/mo | <strong>Custom SEO & Ads</strong> — finalized per scope
        </div>
      </section>

      {/* ESTIMATOR INTEGRATION */}
      <section>
        <div className="section-head">
          <div className="section-kicker">Interactive Estimator</div>
          <h2 className="section-title">Prefer to calculate your custom bundle?</h2>
        </div>
        <Estimator triggerToast={triggerToast} />
      </section>

      {/* FAQ */}
      <section>
        <div className="section-head">
          <div className="section-kicker">FAQ</div>
          <h2 className="section-title">Common questions about our pricing & process.</h2>
        </div>
        <FaqAccordion />
      </section>
    </main>
  );
}