/**
 * Google Sheets Lead Sync Service (0 Backend Cost)
 * Synchronizes website lead entries directly into Google Sheets via Google Apps Script Web App Endpoint.
 */

const DEFAULT_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzZe-yxYcEQs7yfglDP50Xt39cOEsidILQQXJhwzr_vy4SgNJvBbR76_QAUQPFG7EOOlA/exec';

export const getSheetUrl = () => {
  if (typeof window === 'undefined') return DEFAULT_SHEET_URL;
  return import.meta.env.VITE_GOOGLE_SHEET_URL || localStorage.getItem('nexivo_google_sheet_url') || DEFAULT_SHEET_URL;
};

export const saveSheetUrl = (url) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('nexivo_google_sheet_url', url.trim());
  }
};

/**
 * Sends lead data directly to Google Sheet via Apps Script Webhook
 * @param {Object} leadData - { name, email, phone, service, source, message }
 */
export const submitToGoogleSheet = async (leadData) => {
  const sheetUrl = getSheetUrl();
  
  const payload = {
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    name: leadData.name || leadData.nameInput || 'N/A',
    email: leadData.email || 'N/A',
    phone: leadData.phone || 'N/A',
    service: leadData.service || leadData.serviceInterest || 'General Inquiry',
    source: leadData.source || 'Nexivo Website Form',
    message: leadData.message || leadData.websiteUrl || ''
  };

  console.log('[Google Sheet Sync] Lead entry prepared:', payload);

  if (!sheetUrl) {
    console.warn('[Google Sheet Sync] Webhook URL not set yet. Save your Google Apps Script Web App URL in Admin settings or .env to sync live data.');
    return { success: true, simulated: true, payload };
  }

  try {
    // Send as JSON with no-cors mode (required for Google Apps Script 302 redirects)
    await fetch(sheetUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Also send beacon fallback for mobile browser reliability
    try {
      const blob = new Blob([JSON.stringify(payload)], { type: 'text/plain' });
      if (navigator && navigator.sendBeacon) {
        navigator.sendBeacon(sheetUrl, blob);
      }
    } catch (e) {}

    console.log('[Google Sheet Sync] Lead dispatched to Google Sheet successfully!');
    return { success: true, simulated: false };
  } catch (error) {
    console.error('[Google Sheet Sync] Error submitting to Google Sheet:', error);
    return { success: false, error };
  }
};

/**
 * Standard 1-click Google Apps Script code snippet for the user's spreadsheet
 */
export const GOOGLE_APPS_SCRIPT_CODE = `/** @OnlyCurrentDoc */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = {};
    
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch(err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }
    
    var timestamp = data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var name = data.name || "";
    var email = data.email || "";
    var phone = data.phone || "";
    var service = data.service || "";
    var source = data.source || "Website Form";
    var message = data.message || "";
    
    sheet.appendRow([timestamp, name, email, phone, service, source, message]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;
