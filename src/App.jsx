import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Toast from './components/Toast';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3500);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <div className="field"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home triggerToast={triggerToast} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
        <Route path="/pricing" element={<Pricing triggerToast={triggerToast} />} />
        <Route path="/contact" element={<Contact triggerToast={triggerToast} />} />
      </Routes>
      <Footer />
      <Toast message={toastMessage} visible={toastVisible} />
    </BrowserRouter>
  );
}