import emailjs from '@emailjs/browser';

/**
 * Get EmailJS configuration from environment variables or localStorage
 */
export const getEmailConfig = () => {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || localStorage.getItem('nexivo_emailjs_service_id') || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || localStorage.getItem('nexivo_emailjs_template_id') || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || localStorage.getItem('nexivo_emailjs_public_key') || '',
  };
};

/**
 * Save EmailJS credentials into localStorage for zero-backend dynamic setup
 */
export const saveEmailConfig = ({ serviceId, templateId, publicKey }) => {
  if (serviceId !== undefined) localStorage.setItem('nexivo_emailjs_service_id', serviceId);
  if (templateId !== undefined) localStorage.setItem('nexivo_emailjs_template_id', templateId);
  if (publicKey !== undefined) localStorage.setItem('nexivo_emailjs_public_key', publicKey);
};

/**
 * Sends automated Brochure PDF email directly to client inbox via EmailJS (0 backend cost)
 */
export const sendBrochureEmail = async ({ name, email, phone, serviceInterest }) => {
  const config = getEmailConfig();
  const brochureUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/Nexivo-Services-Brochure-2026.pdf`
    : 'https://nexivo.in/Nexivo-Services-Brochure-2026.pdf';

  const templateParams = {
    to_name: name,
    to_email: email,
    reply_to: 'studio.nexivo@gmail.com',
    user_name: name,
    user_email: email,
    user_phone: phone || 'Not provided',
    service_interest: serviceInterest || 'General Services',
    brochure_url: brochureUrl,
    download_link: brochureUrl,
    agency_email: 'studio.nexivo@gmail.com',
    agency_phone: '+91 97244 70737',
    submission_date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  if (!config.serviceId || !config.publicKey) {
    console.log('[EmailJS Zero-Backend] Credentials pending configuration. Payload prepared:', templateParams);
    return {
      success: true,
      simulated: true,
      message: 'Lead recorded. EmailJS credentials can be added to .env or Admin settings to deliver live emails.',
    };
  }

  try {
    const response = await emailjs.send(
      config.serviceId,
      config.templateId || 'template_brochure',
      templateParams,
      config.publicKey
    );
    console.log('[EmailJS Zero-Backend] Email dispatched successfully:', response.status, response.text);
    return { success: true, simulated: false, response };
  } catch (error) {
    console.error('[EmailJS Zero-Backend] Error sending email:', error);
    return { success: false, error };
  }
};

/**
 * Sends automated Contact / Lead inquiry email directly to studio.nexivo@gmail.com and client
 */
export const sendContactEmail = async ({ name, email, phone, service, message }) => {
  const config = getEmailConfig();

  const templateParams = {
    to_name: name,
    to_email: email,
    reply_to: email,
    user_name: name,
    user_email: email,
    user_phone: phone,
    service_interest: service,
    user_message: message,
    agency_email: 'studio.nexivo@gmail.com',
    submission_date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  if (!config.serviceId || !config.publicKey) {
    console.log('[EmailJS Zero-Backend] Contact lead prepared:', templateParams);
    return { success: true, simulated: true };
  }

  try {
    const response = await emailjs.send(
      config.serviceId,
      config.templateId || 'template_contact',
      templateParams,
      config.publicKey
    );
    return { success: true, simulated: false, response };
  } catch (error) {
    console.error('[EmailJS Zero-Backend] Error sending contact email:', error);
    return { success: false, error };
  }
};
