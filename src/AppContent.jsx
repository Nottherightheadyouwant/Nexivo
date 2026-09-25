import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Toast from './components/Toast';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BrochureModal from './components/BrochureModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Admin from './pages/Admin';
import { applyGlobalSeo } from './utils/seoStorage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    applyGlobalSeo();
  }, [pathname]);
  return null;
}

export default function AppContent() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3500);
  };

  const openBrochure = () => setIsBrochureOpen(true);

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <div className="field"></div>
      <Navbar openBrochure={openBrochure} />
      <Routes>
        <Route path="/" element={<Home triggerToast={triggerToast} openBrochure={openBrochure} />} />
        <Route path="/about" element={<About openBrochure={openBrochure} />} />
        <Route path="/services" element={<Services openBrochure={openBrochure} />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetail openBrochure={openBrochure} />} />
        <Route path="/pricing" element={<Pricing triggerToast={triggerToast} openBrochure={openBrochure} />} />
        <Route path="/blog" element={<Blog openBrochure={openBrochure} />} />
        <Route path="/blog/:slug" element={<BlogDetail openBrochure={openBrochure} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact triggerToast={triggerToast} openBrochure={openBrochure} />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <FloatingWhatsApp />
      <Footer openBrochure={openBrochure} />
      <BrochureModal isOpen={isBrochureOpen} onClose={() => setIsBrochureOpen(false)} triggerToast={triggerToast} />
      <Toast message={toastMessage} visible={toastVisible} />
    </>
  );
}
