import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import qrcode from 'qrcode-terminal';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
try {
  customExecPath = puppeteer.executablePath();
  console.log('[Nexivo Bot] Chrome binary path resolved:', customExecPath);
} catch (e) {
  console.log('[Nexivo Bot] Using default system browser launcher.');
}

console.log('🤖 Starting Nexivo Native WhatsApp Bot (0 Third-Party Cost)...');

const client = new Client({
  authStrategy: new LocalAuth({ dataPath: '.wwebjs_auth' }),
  puppeteer: {
    headless: true,
    ...(customExecPath ? { executablePath: customExecPath } : {}),
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  }
});

// Display QR Code for 1-time WhatsApp pairing
client.on('qr', (qr) => {
  console.log('\n====================================================');
  console.log('📱 SCAN THIS QR CODE WITH WHATSAPP BUSINESS APP:');
  console.log('====================================================\n');
  qrcode.generate(qr, { small: true });
  console.log('\nOpen WhatsApp -> Linked Devices -> Link a Device -> Scan QR Code above.\n');
});

client.on('ready', () => {
  console.log('\n✅ NEXIVO WHATSAPP BOT IS LIVE & READY 24/7!');
  console.log('Connected to WhatsApp. Listening for incoming customer messages...\n');
});

client.on('authenticated', () => {
  console.log('🔑 Session authenticated successfully. No QR scan needed on restart!');
});

client.on('auth_failure', (msg) => {
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
  const menuText = `👋 Hello! Welcome to *Nexivo* (https://www.studionexivo.com/). How can we help scale your business today?

Please reply with a number:
1️⃣ *Web Development*
2️⃣ *Local SEO & Google Maps*
3️⃣ *Digital Marketing & Ads*
4️⃣ *Get 2026 Services Brochure (PDF)*
5️⃣ *Speak with Founder Jay Parmar*`;

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
  if (lower === '1' || lower === '1️⃣' || lower.includes('web dev') || lower.includes('website')) {
    const reply = `🌐 *Nexivo Web Development*
We build fast, phone-optimized custom websites engineered for sub-second speed.

• *Starter Plan*: 4 static pages, mobile responsive, 1-tap WhatsApp trigger. Live in 10-14 days.
• *Standard Plan*: Dynamic pages, services showcase, SEO-friendly architecture, 1 month support.
• *E-commerce / Custom*: Full cart & payment gateway setup.

💡 *Turnaround*: 21 days typical site turnaround (50% advance to start).
Would you like to discuss scope for your business? Reply *5* to speak directly with founder Jay Parmar.`;
    await msg.reply(reply);
    return;
  }

  // 3. Option 2: Local SEO & Google Maps
  if (lower === '2' || lower === '2️⃣' || lower.includes('seo') || lower.includes('google map')) {
    const reply = `🚀 *Nexivo Local SEO & Google Maps Domination*
Get found when nearby customers search for your services.

• *Local Boost*: Google Business Profile setup, top 5 local keywords, directory citations.
• *Map Pack Domination*: Aim for top 3 Google Maps results, 15 local keywords, schema SEO.
• *National Authority*: 35 nationwide keywords, high-authority backlink outreach.

Reply *4* to download our complete Services Brochure PDF or *5* to talk to Jay Parmar!`;
    await msg.reply(reply);
    return;
  }

  // 4. Option 3: Digital Marketing & Ads
  if (lower === '3' || lower === '3️⃣' || lower.includes('marketing') || lower.includes('ads')) {
    const reply = `📈 *Nexivo Digital Marketing & Paid Ads*
Turn website traffic into high-converting inquiries.

• *Growth Funnel*: Lead capture landing pages & WhatsApp conversion triggers.
• *PPC Lead Launch*: Targeted Google Search & Meta Instagram/Facebook campaigns.
• *High ROAS Scaling*: Multi-ad set A/B testing & Conversion API tracking.

Reply *5* to discuss custom campaign strategy with founder Jay Parmar!`;
    await msg.reply(reply);
    return;
  }

  // 5. Option 4: Brochure PDF Download
  if (lower === '4' || lower === '4️⃣' || lower.includes('brochure') || lower.includes('pdf')) {
    const reply = `📄 *Nexivo Official 2026 Services & Pricing Brochure (PDF)*

You can view and download our complete 5-page official brochure directly here:
👉 https://www.studionexivo.com/Nexivo-Services-Brochure-2026.pdf

Includes deliverables scope for Web Development, Local SEO, Social Media, and Paid Ads packages!`;
    await msg.reply(reply);
    return;
  }

  // 6. Option 5: Human Founder Contact
  if (lower === '5' || lower === '5️⃣' || lower.includes('jay') || lower.includes('founder') || lower.includes('talk')) {
    const reply = `👤 *Connect with Founder Jay Parmar*

Thank you! Founder **Jay Parmar** will assist you directly with custom project scope, fixed pricing, and timelines.

📞 *WhatsApp / Phone*: +91 97244 70737
✉️ *Email*: studio.nexivo@gmail.com
🌐 *Website*: https://www.studionexivo.com/

Please tell us a bit about your business name and goals, and Jay will reply shortly!`;
    await msg.reply(reply);
    return;
  }

  // 7. General Knowledge Answers (Turnaround, Location, Payment)
  if (lower.includes('turnaround') || lower.includes('time') || lower.includes('days')) {
    await msg.reply('⏳ *Nexivo Turnaround Time*: Starter sites take 10-14 days. Standard and custom web builds take 14-21 days typical turnaround.');
    return;
  }

  if (lower.includes('location') || lower.includes('office') || lower.includes('where')) {
    await msg.reply('📍 *Nexivo Hubs*: We operate dual hubs in London, UK and Ahmedabad, India.');
    return;
  }

  if (lower.includes('payment') || lower.includes('advance') || lower.includes('terms')) {
    await msg.reply('💳 *Payment Terms*: 50% advance payment to commence project work, and the remaining 50% balance upon final review & go-live.');
    return;
  }

  // Fallback: If message wasn't recognized, present menu
  await msg.reply(`Thank you for messaging Nexivo! \n\n${menuText}`);
});

// Launch Client
client.initialize();
