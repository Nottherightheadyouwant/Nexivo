import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, TrendingUp, Search, Share2, PenTool, Target, 
  ArrowRight, CheckCircle2, MessageSquare, Clock
} from 'lucide-react';

export default function Services() {
    const servicesList = [
    {
      slug: 'website-development',
      icon: <Code size={30} color="#5DCAA5" />,
      tag: 'Development',
      title: 'Website Development',
      shortDesc: 'Custom fast React & Vite websites, clinic portals, e-commerce stores, and high-converting redesigns built for sub-second speed.',
      budget: 'Custom Scope',
      timeline: '~10 Days Delivery',
      highlights: ['React + Vite Sub-Second Load', '95+ Google Lighthouse Score', 'WhatsApp Direct Inquiry Flow']
    },
    {
      slug: 'digital-marketing',
      icon: <TrendingUp size={30} color="#378ADD" />,
      tag: 'Growth Strategy',
      title: 'Digital Marketing',
      shortDesc: 'End-to-end sales funnel strategies, lead capture automation, and conversion rate optimization to turn traffic into revenue.',
      budget: 'Tailored Campaign',
      timeline: 'Ongoing Growth Campaign',
      highlights: ['Customer Acquisition Funnel', 'Conversion Rate Optimization', 'Automated Lead Triggers']
    },
    {
      slug: 'seo',
      icon: <Search size={30} color="#5DCAA5" />,
      tag: 'Visibility',
      title: 'SEO (Search Engine Optimization)',
      shortDesc: 'Dominate Google search results and rank top 3 in local and international target markets.',
      budget: 'Custom Strategy',
      timeline: '~14 Days Setup',
      highlights: ['Google Business Profile Ranking', 'Local "Near Me" Domination', 'Maps Pack Top Position']
    },
    {
      slug: 'social-media',
      icon: <Share2 size={30} color="#378ADD" />,
      tag: 'Branding',
      title: 'Social Media Marketing',
      shortDesc: 'Consistent Instagram & Facebook brand management, reel strategies, and community engagement built for modern brands.',
      budget: 'Tailored Retainer',
      timeline: '~7 Days Setup',
      highlights: ['Monthly Content Calendar', 'Reel Scripts & Visual Grid', 'DM & Comment Engagement']
    },
    {
      slug: 'content-creation',
      icon: <PenTool size={30} color="#5DCAA5" />,
      tag: 'Creative Assets',
      title: 'Content Creation',
      shortDesc: 'High-converting copywriting, ad creative graphics, promotional video scripts, and visual brand assets.',
      budget: 'Project Scoped',
      timeline: '3 - 5 Days Turnaround',
      highlights: ['Persuasive Web Copywriting', 'Meta & Google Ad Banners', 'Short-Form Video Scripts']
    },
    {
      slug: 'ads-management',
      icon: <Target size={30} color="#378ADD" />,
      tag: 'Paid Ads',
      title: 'Google Ads & Meta Ads',
      shortDesc: 'Laser-targeted Facebook, Instagram, and Google PPC ad campaigns built for high ROAS and instant lead generation.',
      budget: 'Custom ROAS Plan',
      timeline: '~5 Days Setup',
      highlights: ['Google Search PPC Setup', 'Meta Instagram & Facebook Lead Ads', 'High ROAS Campaign Tracking']
    }
  ];

  return (
    <main>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="eyebrow">Our Specialized Capabilities</div>
        <h1 className="page-title">
          Complete Digital Services <br /><span className="accent">Engineered for Revenue.</span>
        </h1>
        <p className="page-desc">
          We offer 6 dedicated digital service tracks. Click any service below to visit its separate dedicated page with complete deliverables, workflows, and pricing.
        </p>
      </section>

      {/* SEPARATE SERVICE PAGES GRID */}
      <section style={{ paddingTop: '1rem' }}>
        <div className="grid-2" style={{ gap: '2rem' }}>
          {servicesList.map((service) => (
            <div key={service.slug} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(29, 158, 117, 0.12)', border: '1px solid rgba(29, 158, 117, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {service.icon}
                  </div>
                  <span className="metric-badge" style={{ position: 'static' }}>{service.tag}</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.6rem', color: 'var(--offwhite)' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.65)', lineHeight: '1.6', marginBottom: '1.4rem' }}>
                  {service.shortDesc}
                </p>

                <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1.1rem', borderRadius: '14px', marginBottom: '1.5rem', border: '1px solid var(--line)' }}>
                  {service.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'rgba(244,242,235,0.8)', marginBottom: '0.35rem' }}>
                      <CheckCircle2 size={16} color="#5DCAA5" style={{ flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'rgba(244,242,235,0.6)', marginBottom: '1.2rem', paddingTop: '0.8rem', borderTop: '1px solid var(--line)', gap: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={15} color="#5DCAA5" /> {service.timeline}</span>
                  <span style={{ fontWeight: '700', color: 'var(--teal-light)' }}>{service.budget}</span>
                </div>

                <Link 
                  to={`/services/${service.slug}`}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Explore {service.title} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}