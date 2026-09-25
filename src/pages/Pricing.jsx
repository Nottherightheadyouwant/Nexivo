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
        price: 'Custom Quote',
        note: '~10-14 day delivery',
        popular: false,
        features: [
          '4 static pages included',
          'Mobile-responsive design',
          'WhatsApp click-to-chat button',
          'Google Maps + contact info',
          '1 round of revisions'
        ]
      },
      {
        name: 'Standard',
        desc: 'Built for clinics, pharmacies, and growing businesses who want to look established.',
        price: 'Custom Quote',
        note: '~14-21 day delivery',
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
        price: 'Custom Scope',
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
        price: 'Tailored Plan',
        note: 'monthly strategy',
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
        price: 'Tailored Plan',
        note: 'monthly strategy',
        popular: true,
        ribbon: 'MOST POPULAR',
        features: [
          'Everything in Local Boost',
          'Top 3 Google Maps focus',
          '15 local keywords target',
          'Technical Schema & On-Page SEO',
          'Google review growth strategy',
          'Free SEO audit passes included'
        ]
      },
      {
        name: 'National Authority',
        desc: 'For brands scaling across multiple cities or nationwide.',
        price: 'Tailored Plan',
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
        price: 'Custom Scope',
        note: 'monthly campaign',
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
        price: 'Custom Scope',
        note: 'monthly campaign',
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
        price: 'Custom Scope',
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
        price: 'Tailored Retainer',
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
        price: 'Tailored Retainer',
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
        price: 'Tailored Retainer',
        note: 'full-service monthly',
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
        price: 'Project Scoped',
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
        price: 'Project Scoped',
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
        price: 'Project Scoped',
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
        price: 'Custom ROAS Plan',
        note: 'monthly campaign',
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
        price: 'Custom ROAS Plan',
        note: 'monthly campaign',
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
        desc: 'For brands scaling digital ad campaigns across multiple channels.',
        price: 'Enterprise Scope',
        note: 'custom strategy',
        popular: false,
        features: [
          'Omnichannel Google, Meta & LinkedIn ads',
          'Daily bid & budget management',
          'Real-time Looker Studio ROI dashboard',
          'Dedicated media buyer',
          'Weekly strategy calls'
        ]
      }
    ]
  };

  const handleEnquireTier = (tierName) => {
    const text = encodeURIComponent(`Hi Nexivo! I'm interested in the ${tierName} package for my business. Please share project scope details.`);
    window.open(`https://wa.me/919724470737?text=${text}`, '_blank');
    if (triggerToast) triggerToast(`Connecting with Nexivo team for ${tierName} scope...`);
  };

  return (
    <main>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="eyebrow"><Zap size={14} /> Clear Deliverables & Scope</div>
        <h1 className="page-title">
          Custom Scope <span className="accent">For Every Business Goal.</span>
        </h1>
        <p className="page-desc">
          No hidden fees or unexpected costs. Select your service line below to explore complete package deliverables and get a custom proposal tailored to your business.
        </p>
      </section>

      {/* CATEGORY SELECTOR TABS */}
      <section style={{ paddingTop: 0 }}>
        <div className="pricing-tabs">
          {pricingCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pricing-tab ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PRICING GRID CARDS */}
        <div className="pricing-grid">
          {pricingData[activeCategory]?.map((tier, idx) => (
            <div
              key={idx}
              className={`glass-card pricing-card ${tier.popular ? 'popular' : ''}`}
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              {tier.popular && (
                <div className="popular-ribbon">{tier.ribbon}</div>
              )}

              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--offwhite)', marginBottom: '0.4rem' }}>
                  {tier.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.65)', marginBottom: '1.4rem', minHeight: '40px' }}>
                  {tier.desc}
                </p>

                <div style={{ marginBottom: '1.5rem', paddingBottom: '1.2rem', borderBottom: '1px solid var(--line)' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--offwhite)', lineHeight: 1 }}>
                    {tier.price}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--teal-light)', marginTop: '0.4rem', fontWeight: '600' }}>
                    {tier.note}
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ fontSize: '0.86rem', color: 'rgba(244,242,235,0.85)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: 'var(--teal-light)', marginTop: '2px' }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleEnquireTier(tier.name)}
                className="btn-outline"
                style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
              >
                Get Proposal on WhatsApp <MessageSquare size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* ADDONS BAR */}
        <div className="glass-card" style={{ marginTop: '3.5rem', padding: '1.8rem', display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', fontSize: '0.88rem', color: 'rgba(244,242,235,0.6)' }}>
          <div><b style={{ color: 'var(--offwhite)' }}>Website Redesign</b> — Custom Proposal</div>
          <div><b style={{ color: 'var(--offwhite)' }}>Monthly Maintenance</b> — Fixed SLA</div>
          <div><b style={{ color: 'var(--offwhite)' }}>Custom SEO & Ads</b> — Finalized per scope</div>
        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR */}
      <section>
        <div className="section-head">
          <div className="section-kicker">Custom Estimator</div>
          <h2 className="section-title">Need a custom combination? Calculate your scope & timeline.</h2>
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