import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const text = encodeURIComponent("Hi Nexivo! I would like to enquire about a project for my business.");
    window.open(`https://wa.me/919724470737?text=${text}`, '_blank');
  };

  return (
    <div className="floating-wa-wrap">
      <button 
        onClick={handleClick}
        className="floating-wa-btn"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          style={{ color: '#FFFFFF' }}
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" fill="none"/>
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" fill="#FFFFFF"/>
        </svg>
      </button>
      <span className="wa-tooltip">Chat with us</span>
    </div>
  );
}