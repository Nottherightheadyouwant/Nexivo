import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import qrcode from 'qrcode-terminal';
import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

import os from 'os';
import { execSync } from 'child_process';

// Force PUPPETEER_CACHE_DIR to project root workspace folder so Render container retains browser binary
process.env.PUPPETEER_CACHE_DIR = path.join(process.cwd(), '.cache/puppeteer');

let latestQrData = null;
let botStatus = 'INITIALIZING'; // 'INITIALIZING' | 'QR_READY' | 'CONNECTED' | 'AUTH_FAILURE'

// Lightweight HTTP Health Check Server & Visual QR Web Page (enables Render.com 100% Free Web Service Tier)
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  if (botStatus === 'QR_READY' && latestQrData) {
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Scan WhatsApp QR Code | Studio Nexivo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { background: #121210; color: #F4F2EB; font-family: system-ui, sans-serif; text-align: center; padding: 2rem 1rem; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
            .card { background: rgba(244, 242, 235, 0.05); border: 1px solid rgba(244, 242, 235, 0.15); border-radius: 20px; padding: 2.5rem 2rem; max-width: 440px; width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
            h2 { color: #5DCAA5; font-size: 1.6rem; margin-top: 0; }
            p { color: rgba(244, 242, 235, 0.7); font-size: 0.95rem; line-height: 1.5; }
            .qr-box { background: #ffffff; padding: 1rem; border-radius: 12px; display: inline-block; margin: 1.5rem 0; }
            .qr-box img { display: block; width: 260px; height: 260px; }
            .sub { font-size: 0.78rem; color: rgba(244, 242, 235, 0.4); }
          </style>
          <script>setTimeout(() => location.reload(), 10000);</script>
        </head>
        <body>
          <div class="card">
            <h2>Scan WhatsApp QR Code</h2>
            <p>Open WhatsApp on your phone -> <b>Linked Devices</b> -> <b>Link a Device</b> and point camera at the QR code below:</p>
            <div class="qr-box">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(latestQrData)}" alt="WhatsApp QR Code" />
            </div>
            <p class="sub">Page auto-refreshes every 10 seconds until paired.</p>
          </div>
        </body>
      </html>
    `);
  } else if (botStatus === 'CONNECTED') {
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Nexivo WhatsApp AI Bot</title>
          <style>
            body { background: #121210; color: #F4F2EB; font-family: system-ui, sans-serif; text-align: center; padding: 3rem 1rem; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
            .card { background: rgba(244, 242, 235, 0.05); border: 1px solid rgba(244, 242, 235, 0.15); border-radius: 20px; padding: 2.5rem; max-width: 460px; }
            h2 { color: #5DCAA5; margin-top: 0; }
            p { color: rgba(244, 242, 235, 0.75); }
          </style>
        </head>
        <body>
          <div class="card">
            <h2>Nexivo WhatsApp AI Bot is Connected & Live 24/7!</h2>
            <p>Successfully paired with WhatsApp. Listening for incoming customer inquiries.</p>
          </div>
        </body>
      </html>
    `);
  } else if (botStatus === 'ERROR' || initError) {
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>WhatsApp Bot Error | Studio Nexivo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { background: #121210; color: #F4F2EB; font-family: system-ui, sans-serif; text-align: center; padding: 3rem 1rem; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
            .card { background: rgba(244, 242, 235, 0.05); border: 1px solid rgba(244, 67, 54, 0.4); border-radius: 20px; padding: 2.5rem; max-width: 460px; width: 100%; }
            h2 { color: #F44336; margin-top: 0; }
            p { color: rgba(244, 242, 235, 0.75); line-height: 1.5; font-size: 0.9rem; }
            pre { background: rgba(0,0,0,0.4); padding: 0.8rem; border-radius: 8px; font-size: 0.75rem; text-align: left; overflow-x: auto; color: #FF8A80; }
            .sub { font-size: 0.8rem; color: rgba(244,242,235,0.4); margin-top: 1rem; }
          </style>
          <script>setTimeout(() => location.reload(), 8000);</script>
        </head>
        <body>
          <div class="card">
            <h2>Initialization Notice</h2>
            <p>The bot engine encountered a startup condition:</p>
            <pre>${initError || 'Unknown initialization issue'}</pre>
            <p class="sub">Auto-retrying in 8 seconds...</p>
          </div>
        </body>
      </html>
    `);
  } else {
    // INITIALIZING
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Initializing WhatsApp Bot | Studio Nexivo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { background: #121210; color: #F4F2EB; font-family: system-ui, sans-serif; text-align: center; padding: 3rem 1rem; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
            .card { background: rgba(244, 242, 235, 0.05); border: 1px solid rgba(244, 242, 235, 0.15); border-radius: 20px; padding: 2.5rem; max-width: 460px; width: 100%; }
            h2 { color: #5DCAA5; margin-top: 0; }
            p { color: rgba(244, 242, 235, 0.75); line-height: 1.5; }
            .spinner { border: 3px solid rgba(244,242,235,0.1); border-top: 3px solid #5DCAA5; border-radius: 50%; width: 36px; height: 36px; animation: spin 1s linear infinite; margin: 1.5rem auto 0.5rem; }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            .sub { font-size: 0.8rem; color: rgba(244,242,235,0.4); margin-top: 1rem; }
          </style>
          <script>setTimeout(() => location.reload(), 4000);</script>
        </head>
        <body>
          <div class="card">
            <h2>Launching WhatsApp Engine...</h2>
            <div class="spinner"></div>
            <p>Starting Chrome container & generating QR code.<br/>Please wait a few seconds...</p>
            <p class="sub">This page auto-refreshes automatically.</p>
          </div>
        </body>
      </html>
    `);
  }
}).listen(PORT, () => {
  console.log(`[Nexivo Bot] Free Web Service health check listening on port ${PORT}`);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load Nexivo AI Knowledge Base
const knowledgePath = path.join(__dirname, '../public/nexivo-ai-knowledge.json');
let knowledge = {};
try {
  if (fs.existsSync(knowledgePath)) {
    knowledge = JSON.parse(fs.readFileSync(knowledgePath, 'utf8'));
  }
} catch (err) {
  console.error('[Nexivo Bot] Warning: Could not load knowledge JSON:', err.message);
}

import puppeteer from 'puppeteer';

let customExecPath = null;

const searchDirs = [
  '/opt/render/project/src/.cache/puppeteer',
  path.join(process.cwd(), '.cache/puppeteer'),
  path.join(os.homedir(), '.cache/puppeteer'),
  '/opt/render/.cache/puppeteer',
  '/root/.cache/puppeteer'
];

const findBinary = (dir) => {
  try {
    if (!fs.existsSync(dir)) return null;
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const full = path.join(dir, f);
      try {
        const stat = fs.statSync(full);
        if (!stat.isDirectory() && (f === 'chrome' || f === 'chrome.exe' || f === 'chromium')) {
          return full;
        }
        if (stat.isDirectory()) {
          const res = findBinary(full);
          if (res) return res;
        }
      } catch (e) {}
    }
  } catch (err) {}
  return null;
};

for (const dir of searchDirs) {
  const found = findBinary(dir);
  if (found) {
    customExecPath = found;
    break;
  }
}

if (!customExecPath) {
  try {
    const rawPath = typeof puppeteer.executablePath === 'function' ? puppeteer.executablePath() : null;
    if (typeof rawPath === 'string' && rawPath.length > 0 && fs.existsSync(rawPath)) {
      customExecPath = rawPath;
    }
  } catch (e) {}
}

if (!customExecPath) {
  const possiblePaths = [
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium'
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      customExecPath = p;
      break;
    }
  }
}

if (customExecPath) {
  console.log('[Nexivo Bot] Chrome binary path resolved:', customExecPath);
} else {
  console.log('[Nexivo Bot] Defaulting to standard Puppeteer executable resolution.');
}

console.log('Starting Nexivo Native WhatsApp Bot (0 Third-Party Cost)...');

let initError = null;

const puppeteerOptions = {
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--no-first-run',
    '--no-zygote',
    '--disable-gpu',
    '--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
  ]
};

if (customExecPath) {
  puppeteerOptions.executablePath = customExecPath;
}

const client = new Client({
  authStrategy: new LocalAuth({ dataPath: '.wwebjs_auth' }),
  puppeteer: puppeteerOptions,
  webVersionCache: {
    type: 'remote',
    remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html'
  }
});

// Display QR Code for 1-time WhatsApp pairing
client.on('qr', (qr) => {
  latestQrData = qr;
  botStatus = 'QR_READY';
  initError = null;
  console.log('\n====================================================');
  console.log('SCAN THIS QR CODE WITH WHATSAPP BUSINESS APP:');
  console.log('====================================================\n');
  qrcode.generate(qr, { small: true });
  console.log('\nOpen WhatsApp -> Linked Devices -> Link a Device -> Scan QR Code above.\n');
});

client.on('ready', () => {
  botStatus = 'CONNECTED';
  latestQrData = null;
  initError = null;
  console.log('\n✅ NEXIVO WHATSAPP BOT IS LIVE & READY 24/7!');
  console.log('Connected to WhatsApp. Listening for incoming customer messages...\n');
});

client.on('authenticated', () => {
  botStatus = 'CONNECTED';
  latestQrData = null;
  initError = null;
  console.log('🔑 Session authenticated successfully. No QR scan needed on restart!');
});

client.on('auth_failure', (msg) => {
  botStatus = 'AUTH_FAILURE';
  initError = typeof msg === 'string' ? msg : JSON.stringify(msg);
  latestQrData = null;
  console.error('❌ Authentication failed:', msg);
});

// Main Interactive Response Handler
client.on('message', async (msg) => {
  // Ignore messages sent by the bot itself or status broadcasts
  if (msg.fromMe || msg.from === 'status@broadcast') return;

  const body = (msg.body || '').trim();
  const lower = body.toLowerCase();

  console.log(`[Incoming Message] From: ${msg.from} | Text: "${body}"`);

  // MENU RESPONSE
  const menuText = `Hello! Welcome to *Nexivo* (https://www.studionexivo.com/). How can we help scale your business today?

Please reply with a number:
[1] *Web Development*
[2] *Local SEO & Google Maps*
[3] *Digital Marketing & Ads*
[4] *Get 2026 Services Brochure (PDF)*
[5] *Speak with Founder Jay Parmar*`;

  // 1. Greetings & Menu Triggers
  if (
    lower === 'hi' ||
    lower === 'hii' ||
    lower === 'hiii' ||
    lower === 'hello' ||
    lower === 'hey' ||
    lower === 'start' ||
    lower === 'menu' ||
    lower === 'info' ||
    lower === 'help'
  ) {
    await msg.reply(menuText);
    return;
  }

  // 2. Option 1: Web Development
  if (lower === '1' || lower.includes('web dev') || lower.includes('website')) {
    const reply = `*Nexivo Web Development*
We build fast, phone-optimized custom websites engineered for sub-second speed.

• *Starter Plan*: 4 static pages, mobile responsive, 1-tap WhatsApp trigger. Live in 10-14 days.
• *Standard Plan*: Dynamic pages, services showcase, SEO-friendly architecture, 1 month support.
• *E-commerce / Custom*: Full cart & payment gateway setup.

*Turnaround*: 21 days typical site turnaround (50% advance to start).
Would you like to discuss scope for your business? Reply *5* to speak directly with founder Jay Parmar.`;
    await msg.reply(reply);
    return;
  }

  // 3. Option 2: Local SEO & Google Maps
  if (lower === '2' || lower.includes('seo') || lower.includes('google map')) {
    const reply = `*Nexivo Local SEO & Google Maps Domination*
Get found when nearby customers search for your services.

• *Local Boost*: Google Business Profile setup, top 5 local keywords, directory citations.
• *Map Pack Domination*: Aim for top 3 Google Maps results, 15 local keywords, schema SEO.
• *National Authority*: 35 nationwide keywords, high-authority backlink outreach.

Reply *4* to download our complete Services Brochure PDF or *5* to talk to Jay Parmar!`;
    await msg.reply(reply);
    return;
  }

  // 4. Option 3: Digital Marketing & Ads
  if (lower === '3' || lower.includes('marketing') || lower.includes('ads')) {
    const reply = `*Nexivo Digital Marketing & Paid Ads*
Turn website traffic into high-converting inquiries.

• *Growth Funnel*: Lead capture landing pages & WhatsApp conversion triggers.
• *PPC Lead Launch*: Targeted Google Search & Meta Instagram/Facebook campaigns.
• *High ROAS Scaling*: Multi-ad set A/B testing & Conversion API tracking.

Reply *5* to discuss custom campaign strategy with founder Jay Parmar!`;
    await msg.reply(reply);
    return;
  }

  // 5. Option 4: Brochure PDF Download
  if (lower === '4' || lower.includes('brochure') || lower.includes('pdf')) {
    const reply = `*Nexivo Official 2026 Services & Pricing Brochure (PDF)*

You can view and download our complete 5-page official brochure directly here:
https://www.studionexivo.com/Nexivo-Services-Brochure-2026.pdf

Includes deliverables scope for Web Development, Local SEO, Social Media, and Paid Ads packages!`;
    await msg.reply(reply);
    return;
  }

  // 6. Option 5: Human Founder Contact
  if (lower === '5' || lower.includes('jay') || lower.includes('founder') || lower.includes('talk')) {
    const reply = `*Connect with Founder Jay Parmar*

Thank you! Founder **Jay Parmar** will assist you directly with custom project scope, fixed pricing, and timelines.

• *WhatsApp / Phone*: +91 97244 70737
• *Email*: studio.nexivo@gmail.com
• *Website*: https://www.studionexivo.com/

Please tell us a bit about your business name and goals, and Jay will reply shortly!`;
    await msg.reply(reply);
    return;
  }

  // 7. General Knowledge Answers (Turnaround, Location, Payment)
  if (lower.includes('turnaround') || lower.includes('time') || lower.includes('days')) {
    await msg.reply('*Nexivo Turnaround Time*: Starter sites take 10-14 days. Standard and custom web builds take 14-21 days typical turnaround.');
    return;
  }

  if (lower.includes('location') || lower.includes('office') || lower.includes('where')) {
    await msg.reply('*Nexivo Hubs*: We operate dual hubs in London, UK and Ahmedabad, India.');
    return;
  }

  if (lower.includes('payment') || lower.includes('advance') || lower.includes('terms')) {
    await msg.reply('*Payment Terms*: 50% advance payment to commence project work, and the remaining 50% balance upon final review & go-live.');
    return;
  }

  // Fallback: If message wasn't recognized, present menu
  await msg.reply(`Thank you for messaging Nexivo!\n\n${menuText}`);
});

// Launch Client
client.initialize().catch((err) => {
  botStatus = 'ERROR';
  initError = err.message || String(err);
  console.error('[Nexivo Bot] Client Initialization Error:', err.message || err);
});
