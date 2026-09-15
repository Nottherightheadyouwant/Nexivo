import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Code, TrendingUp, Search, Share2, PenTool, Target, 
  CheckCircle2, ArrowRight, MessageSquare, Clock, ArrowLeft, ShieldCheck, Check
} from 'lucide-react';
import FaqAccordion from '../components/FaqAccordion';

export const servicesMap = {
  'website-development': {
    id: 'web-dev',
    slug: 'website-development',
    icon: <Code size={36} color="#5DCAA5" />,
    tag: 'Development',
    title: 'Website Development',
    subtitle: 'High-performance React & Vite websites engineered for sub-second load times and maximum WhatsApp lead conversion.',
    fullDesc: 'We build custom, mobile-first websites for local Indian businesses, clinics, pharmacies, and e-commerce brands. By using modern React architecture instead of bloated WordPress templates, your website loads under 1 second on mobile 4G networks across India, delivering an ultra-smooth experience that turns visitors into active inquiries.',
    deliverables: [
      'Custom React + Vite Architecture (Sub-Second 4G Load Speed)',
      '95+ Google Lighthouse Performance Score Guarantee',
      'Direct WhatsApp Instant Enquiry Flow & Floating Button',
      'Mobile Responsive & Touch-Optimized Layouts',
      'Free SSL Security, Domain Setup & High-Speed CDN Hosting',
      'Headless CMS Integration for effortless self-editing',
      'Google Analytics & Search Console Setup',
      'On-Page Basic SEO & Meta Tag Optimization'
    ],
    process: [
      { step: 'Phase 01', title: 'Discovery & Wireframing', desc: 'Understanding your business goals, target customer profiles, and defining optimal user flows.' },
      { step: 'Phase 02', title: 'UI/UX Design Mockups', desc: 'Crafting dark-mode, high-converting interfaces with clear calls-to-action.' },
      { step: 'Phase 03', title: 'React Coding & Speed Optimization', desc: 'Developing clean, lightweight React code with zero bloat.' },
      { step: 'Phase 04', title: 'Testing, Launch & Handoff', desc: 'Domain pointing, SSL activation, speed audit, and owner training.' }
    ],
    budget: 'Starts at ₹7,000',
    timeline: '~10 Days Delivery',
    faqs: [
      { q: 'Will my website work well on slow mobile internet?', a: 'Yes! Our React & Vite architecture compiles into ultra-lightweight static assets that load in under 1 second even on 3G/4G networks.' },
      { q: 'Can I edit photos and prices myself?', a: 'Absolutely. We include a simple CMS dashboard so you can update text, upload images, or edit pricing without writing code.' }
    ]
  },

  'digital-marketing': {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    icon: <TrendingUp size={36} color="#378ADD" />,
    tag: 'Growth Strategy',
    title: 'Digital Marketing',
    subtitle: 'Comprehensive customer acquisition funnels and conversion rate optimization designed to increase monthly revenue.',
    fullDesc: 'Our digital marketing services focus on one clear metric: revenue growth. We build end-to-end sales funnels, optimize your website conversion flow, and deploy automated lead capture systems that drive qualified customer inquiries directly into your business WhatsApp.',
    deliverables: [
      'Full Customer Acquisition Funnel Strategy',
      'Conversion Rate Optimization (CRO)',
      'Automated Lead Nurturing & WhatsApp Triggers',
      'Landing Page Copywriting & Visual Assets',
      'Weekly Performance & ROI Reporting',
      'Competitor & Local Market Analysis',
      'Customer Lifetime Value (LTV) Optimization',
      'A/B Testing of Offers & Lead Hooks'
    ],
    process: [
      { step: 'Phase 01', title: 'Traffic & Funnel Audit', desc: 'Analyzing existing visitor drop-offs and defining lead generation bottlenecks.' },
      { step: 'Phase 02', title: 'Funnel & Lead Trigger Build', desc: 'Designing high-converting landing pages with direct WhatsApp triggers.' },
      { step: 'Phase 03', title: 'Campaign Execution', desc: 'Driving targeted local traffic to optimized conversion flows.' },
      { step: 'Phase 04', title: 'Optimization & Scaling', desc: 'A/B testing copy, offers, and creative assets for maximum ROI.' }
    ],
    budget: 'Starts at ₹8,999 / mo',
    timeline: 'Ongoing Growth Campaign',
    faqs: [
      { q: 'How do you track sales leads?', a: 'Every click on your website triggers custom conversion tracking and sends instant lead notifications to your team WhatsApp.' }
    ]
  },

  'seo': {
    id: 'seo',
    slug: 'seo',
    icon: <Search size={36} color="#5DCAA5" />,
    tag: 'Visibility',
    title: 'SEO (Search Engine Optimization)',
    subtitle: 'Dominate Google search results and rank top 3 in Google Maps "near me" local business searches in Ahmedabad.',
    fullDesc: 'Get found by customers actively searching for your services in your city. We optimize your website code, Google Business Profile (GBP), and local citations to place your business at the top of Google search and the Google Maps local pack.',
    deliverables: [
      'Google Business Profile (GBP) Verification & Full Optimization',
      'Local "Near Me" Keyword Domination (Ahmedabad & Gujarat)',
      'Technical On-Page & Schema Markup SEO',
      'High-Authority Local Citations & Backlink Building',
      'Google Maps Pack Top 3 Ranking Strategy',
      'Monthly Keyword Rank Tracking Reports',
      'Review Generation & Reputation Management',
      'Site Speed & Mobile Usability Optimization'
    ],
    process: [
      { step: 'Phase 01', title: 'Keyword Research', desc: 'Identifying high-volume local buyer search terms in your city.' },
      { step: 'Phase 02', title: 'On-Page & Technical SEO', desc: 'Optimizing titles, meta tags, schema markup, and speed.' },
      { step: 'Phase 03', title: 'Google Maps Optimization', desc: 'Optimizing GBP category setup, photos, geo-tagging, and reviews.' },
      { step: 'Phase 04', title: 'Citation & Link Building', desc: 'Building local directory links and maintaining top positions.' }
    ],
    budget: 'Starts at ₹6,999 / mo',
    timeline: '30-Day Initial Ranking Lift',
    faqs: [
      { q: 'How long until I see SEO results?', a: 'Local Google Maps pack optimization usually shows rank improvements within 2 to 4 weeks, with full search authority building over 60-90 days.' }
    ]
  },

  'social-media': {
    id: 'social-media',
    slug: 'social-media',
    icon: <Share2 size={36} color="#378ADD" />,
    tag: 'Branding',
    title: 'Social Media Marketing',
    subtitle: 'Consistent Instagram & Facebook brand management, reel strategies, and community engagement for modern brands.',
    fullDesc: 'Stand out on social media with premium graphics, engaging Reels, and a strategic content calendar that reflects your brand prestige. We manage your Instagram and Facebook presence so you do not have to spend hours creating content.',
    deliverables: [
      'Monthly Content Calendar (Graphics + Reels)',
      'High-Converting Caption Writing & Hashtag Strategy',
      'Brand Grid Aesthetic Design & Custom Templates',
      'Direct Message (DM) & Comment Engagement Strategy',
      'Influencer Collaboration & Campaign Outreach',
      'Monthly Analytics & Audience Growth Reports',
      'Story Designs & Interactive Polls',
      'Profile Bio & Link-in-Bio Optimization'
    ],
    process: [
      { step: 'Phase 01', title: 'Brand Audit & Strategy', desc: 'Defining your visual tone, content pillars, and buyer demographics.' },
      { step: 'Phase 02', title: 'Content Production', desc: 'Designing branded graphics, carousels, and high-impact reel scripts.' },
      { step: 'Phase 03', title: 'Scheduled Publishing', desc: 'Publishing at peak engagement hours automatically.' },
      { step: 'Phase 04', title: 'Engagement & Reporting', desc: 'Interacting with potential clients and tracking follower growth.' }
    ],
    budget: 'Starts at ₹7,499 / mo',
    timeline: 'Monthly Rolling Package',
    faqs: [
      { q: 'Do you create video reels?', a: 'Yes! We write reel scripts, design animated reel templates, and provide direction for high-engagement video reels.' }
    ]
  },

  'content-creation': {
    id: 'content-creation',
    slug: 'content-creation',
    icon: <PenTool size={36} color="#5DCAA5" />,
    tag: 'Creative Assets',
    title: 'Content Creation',
    subtitle: 'High-converting website copywriting, Meta & Google ad graphic banners, promotional video scripts, and visual brand assets.',
    fullDesc: 'Great design needs persuasive content to convert. We craft persuasive website copy, ad creative graphics, promotional video scripts, and brand brochures designed to compel prospects to choose your business over competitors.',
    deliverables: [
      'Persuasive Website & Landing Page Copywriting',
      'Ad Creative Banners (Meta & Google Display Ads)',
      'Short-Form Video Scripts for Reels & Shorts',
      'Digital PDF Brochures & Product Catalogs',
      'Brand Voice & Style Guidelines',
      'High-Resolution Graphic Assets',
      'Email Newsletter Copywriting',
      'Social Media Ad Templates'
    ],
    process: [
      { step: 'Phase 01', title: 'Creative Brief', desc: 'Understanding your product features, customer psychology, and offer hook.' },
      { step: 'Phase 02', title: 'Copy & Visual Drafting', desc: 'Writing compelling headlines and designing banner concepts.' },
      { step: 'Phase 03', title: 'Review & Polishing', desc: 'Refining copy and visual assets based on your feedback.' },
      { step: 'Phase 04', title: 'Final Asset Delivery', desc: 'Delivering export-ready digital files for web and marketing campaigns.' }
    ],
    budget: 'Starts at ₹4,999',
    timeline: '3 - 5 Days Turnaround',
    faqs: [
      { q: 'What formats do you deliver content in?', a: 'We deliver copy in editable Google Docs/Word format and graphic assets in high-res PNG, JPG, and Figma/Canva source formats.' }
    ]
  },

  'ads-management': {
    id: 'ads-management',
    slug: 'ads-management',
    icon: <Target size={36} color="#378ADD" />,
    tag: 'Paid Ads',
    title: 'Google Ads & Meta Ads',
    subtitle: 'Laser-targeted Facebook, Instagram, and Google PPC ad campaigns built for high ROAS and instant lead generation.',
    fullDesc: 'Get immediate phone calls and leads using paid advertising. We design, launch, and manage targeted Meta (Instagram & Facebook) ads and Google Search campaigns that put your business directly in front of active buyers in your target area.',
    deliverables: [
      'Google Search PPC Campaign Setup & Management',
      'Meta Ads (Instagram & Facebook Lead Ads & Retargeting)',
      'High-Converting Ad Creatives & Video Copywriting',
      'Custom Conversion Tracking & Meta Pixel Setup',
      'Negative Keyword Exclusions (Prevents Wasted Spend)',
      'Dedicated Campaign ROI & Cost-Per-Lead Dashboard',
      'A/B Testing of Audiences & Demographics',
      'Weekly Budget Optimization Pass'
    ],
    process: [
      { step: 'Phase 01', title: 'Account & Pixel Setup', desc: 'Setting up Google Ads, Meta Pixel, and conversion API tracking.' },
      { step: 'Phase 02', title: 'Creatives & Copy', desc: 'Designing high-CTR ad banners and writing persuasive sales copy.' },
      { step: 'Phase 03', title: 'Campaign Launch', desc: 'Testing multiple audience sets to identify lowest cost-per-lead.' },
      { step: 'Phase 04', title: 'Optimization & Scaling', desc: 'Scaling winning campaigns while turning off underperforming ads.' }
    ],
    budget: 'Starts at ₹9,999 / mo',
    timeline: 'Instant Leads in 24 Hours',
    faqs: [
      { q: 'How much ad budget do I need?', a: 'We recommend starting with a daily ad budget of ₹300 - ₹500 for local campaigns to test and generate leads quickly.' }
    ]
  }
};

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const service = servicesMap[serviceSlug] || servicesMap['website-development'];

  const handleEnquire = () => {
    const text = encodeURIComponent(`Hi Nexivo! I would like to enquire about your ${service.title} service.`);
    window.open(`https://wa.me/919724470737?text=${text}`, '_blank');
  };

  return (
    <main>
      {/* HEADER BREADCRUMB & HERO */}
      <section className="page-header" style={{ textAlign: 'left', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', fontSize: '0.88rem', color: 'rgba(244,242,235,0.5)' }}>
          <Link to="/services" style={{ color: 'var(--teal-light)', textDecoration: 'none' }}>Our Services</Link>
          <span>/</span>
          <span>{service.title}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(29, 158, 117, 0.15)', border: '1.5px solid var(--teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {service.icon}
          </div>
          <div>
            <span className="metric-badge" style={{ position: 'static' }}>{service.tag} Overview</span>
            <h1 className="page-title" style={{ margin: '0.3rem 0 0', textAlign: 'left' }}>
              {service.title}
            </h1>
          </div>
        </div>

        <p className="page-desc" style={{ textAlign: 'left', margin: '0 0 2rem 0', maxWidth: '780px' }}>
          {service.subtitle}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={handleEnquire} className="btn-primary">
            Book {service.title} Project <MessageSquare size={18} />
          </button>
          <Link to="/services" className="btn-outline">
            <ArrowLeft size={16} /> All Services
          </Link>
        </div>
      </section>

      {/* OVERVIEW & INVESTMENT SUMMARY CARD */}
      <section style={{ paddingTop: '1rem' }}>
        <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'start' }}>
          <div>
            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
              Overview
            </h2>
            <p style={{ fontSize: '1.02rem', color: 'rgba(244,242,235,0.75)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              {service.fullDesc}
            </p>

            <div className="glass-card" style={{ padding: '1.8rem', marginTop: '2rem' }}>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--teal-light)', fontWeight: '700', marginBottom: '0.6rem' }}>
                Service Investment & Turnaround
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--offwhite)', marginBottom: '0.3rem' }}>
                {service.budget}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(244,242,235,0.6)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={16} color="#5DCAA5" /> Timeline: {service.timeline}
              </div>
            </div>
          </div>

          {/* DELIVERABLES CHECKLIST */}
          <div className="glass-card" style={{ padding: '2.2rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--teal-light)' }}>
              Complete Deliverables Checklist
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {service.deliverables.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'rgba(244,242,235,0.85)' }}>
                  <CheckCircle2 size={18} color="#5DCAA5" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP EXECUTION PROCESS */}
      <section>
        <div className="section-head">
          <div className="section-kicker">Execution Roadmap</div>
          <h2 className="section-title">How We Deliver Your {service.title}</h2>
        </div>
        <div className="grid-2" style={{ gap: '1.5rem' }}>
          {service.process.map((p, idx) => (
            <div key={idx} className="glass-card">
              <div style={{ fontSize: '0.8rem', color: 'var(--sky)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                {p.step}
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--offwhite)', marginBottom: '0.5rem' }}>
                {p.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'rgba(244,242,235,0.6)', lineHeight: '1.6' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OTHER SERVICES QUICK NAV */}
      <section>
        <div className="section-head">
          <div className="section-kicker">Explore Other Services</div>
          <h2 className="section-title">Explore Our Full Range of Capabilities</h2>
        </div>
        <div className="grid-3" style={{ gap: '1.2rem' }}>
          {Object.values(servicesMap).filter(s => s.slug !== service.slug).slice(0, 3).map((other) => (
            <Link key={other.slug} to={`/services/${other.slug}`} className="service-card" style={{ textDecoration: 'none' }}>
              <div>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(29, 158, 117, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  {other.icon}
                </div>
                <h4>{other.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.6)' }}>{other.shortDesc}</p>
              </div>
              <div className="service-wa" style={{ color: 'var(--teal-light)', fontSize: '0.82rem', fontWeight: '700', marginTop: '1rem' }}>
                View Overview →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section style={{ textAlign: 'center', paddingBottom: '6rem' }}>
        <div className="glass-card" style={{ padding: '3.5rem 2rem', background: 'linear-gradient(135deg, rgba(29,158,117,0.12), rgba(55,138,221,0.08))', border: '1px solid var(--teal-light)' }}>
          <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>
            Ready to launch your {service.title}?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(244,242,235,0.7)', maxWidth: '560px', margin: '0 auto 2rem' }}>
            Lock in your project timeline today. Direct WhatsApp response within 15 minutes.
          </p>
          <button onClick={handleEnquire} className="btn-primary">
            Start {service.title} Project on WhatsApp <MessageSquare size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}