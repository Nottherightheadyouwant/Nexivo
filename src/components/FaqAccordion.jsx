import React, { useState } from 'react';

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How fast can my website be launched?',
      a: 'Most standard business websites are ready in 5 to 7 days. E-commerce platforms take approximately 10 to 14 days depending on catalog size.'
    },
    {
      q: 'Can I update content myself after launch?',
      a: 'Yes! We can integrate a seamless headless CMS or edit system so you can add blog posts, change pricing, or upload products without touching code.'
    },
    {
      q: 'Why do you prioritize WhatsApp over email forms?',
      a: 'In India, 90%+ of mobile conversions happen instantly on WhatsApp. Direct WhatsApp integration eliminates form drop-off and increases lead response times tenfold.'
    },
    {
      q: 'Do you manage website hosting and domain setup?',
      a: 'Absolutely. We handle your domain configuration, free SSL security setup, CDN deployment, and high-speed hosting configuration.'
    }
  ];

  return (
    <div className="faq-list">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => setOpenIdx(isOpen ? -1 : idx)}>
              <span>{faq.q}</span>
              <span className="icon">+</span>
            </button>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}