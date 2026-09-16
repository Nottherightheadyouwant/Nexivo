import React, { useState } from 'react';
import { MessageSquare, Zap } from 'lucide-react';
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
        desc: 'Get found by customers searching nearby for your service.',
        price: '₹6,999',
        note: 'per month (3-month min)',
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
        price: '₹11,999',
        note: 'per month (3-month min)',
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
        price: '₹19,999',
        note: 'per month (custom strategy)',
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
        price: '₹8,999',
        note: 'per month + 1-month setup',
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
        price: '₹16,999',
        note: 'per month (recommended)',
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
        price: '₹28,999',
        note: 'per month (custom contract)',
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
        price: '₹7,499',
        note: 'per month retainer',
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
        price: '₹14,999',
        note: 'per month retainer',
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
        price: '₹24,999',
        note: 'per month (full-service)',
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
        price: '₹9,999',
        note: 'per month + ad spend',
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
        price: '₹18,999',
        note: 'per month + ad spend',
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
        price: '₹34,999',
        note: 'per month + ad spend',
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
        <div className="eyebrow"><Zap size={16} /> Transparent Pricing • Zero Hidden Costs</div>
        <h1 className="page-title">
          Pick a starting point, <span className="accent">not a spreadsheet.</span>
        </h1>
        <p className="page-desc">
          Most clients don't know exactly what they need — select your service category below to view transparent pricing tiers from &quot;I just need to exist online&quot; to &quot;I want full growth.&quot;
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