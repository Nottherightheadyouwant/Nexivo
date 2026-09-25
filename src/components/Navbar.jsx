import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown, Code, TrendingUp, Search, Share2, PenTool, Target } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogoClick = (e) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav>
        <Link to="/" onClick={handleLogoClick} className="nav-logo">
          <span className="logo-brand-wrap">
            <span className="logo-white">Nex</span>
            <span className="logo-teal">ivo</span>
          </span>
          <span className="pulse-dot"></span>
        </Link>
        <ul className="nav-links">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          
          {/* OUR SERVICES WITH MEGA MENU DROPDOWN */}
          <li 
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
              Our Services <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </NavLink>

            {/* MEGA MENU PANEL */}
            <div className={`mega-menu ${dropdownOpen ? 'show' : ''}`}>
              <div className="mega-col">
                <div className="mega-category-title">Development</div>
                <Link to="/services/website-development" className="mega-link" onClick={() => setDropdownOpen(false)}>
                  <div className="mega-icon"><Code size={18} color="#5DCAA5" /></div>
                  <div>
                    <div className="mega-link-title">Website Development</div>
                    <div className="mega-link-desc">React & Vite sub-second speed builds</div>
                  </div>
                </Link>
              </div>

              <div className="mega-col">
                <div className="mega-category-title">Marketing & Ads</div>
                <Link to="/services/digital-marketing" className="mega-link" onClick={() => setDropdownOpen(false)}>
                  <div className="mega-icon"><TrendingUp size={18} color="#378ADD" /></div>
                  <div>
                    <div className="mega-link-title">Digital Marketing</div>
                    <div className="mega-link-desc">Funnel strategy & revenue CRO</div>
                  </div>
                </Link>
                <Link to="/services/ads-management" className="mega-link" onClick={() => setDropdownOpen(false)}>
                  <div className="mega-icon"><Target size={18} color="#378ADD" /></div>
                  <div>
                    <div className="mega-link-title">Google & Meta Ads</div>
                    <div className="mega-link-desc">High-ROAS paid lead campaigns</div>
                  </div>
                </Link>
              </div>

              <div className="mega-col">
                <div className="mega-category-title">SEO & Branding</div>
                <Link to="/services/seo" className="mega-link" onClick={() => setDropdownOpen(false)}>
                  <div className="mega-icon"><Search size={18} color="#5DCAA5" /></div>
                  <div>
                    <div className="mega-link-title">SEO & Maps Ranking</div>
                    <div className="mega-link-desc">Global & local search domination</div>
                  </div>
                </Link>
                <Link to="/services/social-media" className="mega-link" onClick={() => setDropdownOpen(false)}>
                  <div className="mega-icon"><Share2 size={18} color="#378ADD" /></div>
                  <div>
                    <div className="mega-link-title">Social Media Marketing</div>
                    <div className="mega-link-desc">Instagram reels & grid management</div>
                  </div>
                </Link>
                <Link to="/services/content-creation" className="mega-link" onClick={() => setDropdownOpen(false)}>
                  <div className="mega-icon"><PenTool size={18} color="#5DCAA5" /></div>
                  <div>
                    <div className="mega-link-title">Content Creation</div>
                    <div className="mega-link-desc">High-converting copywriting & banners</div>
                  </div>
                </Link>
              </div>
            </div>
          </li>

          <li><NavLink to="/pricing" className={({ isActive }) => isActive ? 'active' : ''}>Pricing</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink></li>
        </ul>

        <Link to="/contact" className="nav-cta desktop-only-cta">
          Get Started <ArrowUpRight size={16} />
        </Link>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu open">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Our Services (All)</Link>
          <Link to="/services/website-development" onClick={() => setMenuOpen(false)}>— Website Development</Link>
          <Link to="/services/digital-marketing" onClick={() => setMenuOpen(false)}>— Digital Marketing</Link>
          <Link to="/services/seo" onClick={() => setMenuOpen(false)}>— SEO & Maps Ranking</Link>
          <Link to="/services/social-media" onClick={() => setMenuOpen(false)}>— Social Media Marketing</Link>
          <Link to="/services/content-creation" onClick={() => setMenuOpen(false)}>— Content Creation</Link>
          <Link to="/services/ads-management" onClick={() => setMenuOpen(false)}>— Google & Meta Ads</Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}