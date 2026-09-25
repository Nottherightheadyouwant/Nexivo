import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const routes = [
  '/',
  '/about',
  '/services',
  '/services/website-development',
  '/services/digital-marketing',
  '/services/brand-identity',
  '/services/seo',
  '/services/social-media',
  '/services/content-creation',
  '/services/ads-management',
  '/pricing',
  '/contact',
  '/blog',
  '/blog/why-fast-react-websites-outperform-wordpress',
  '/blog/mastering-modern-web-design-2026',
  '/blog/seo-strategies-that-actually-work',
  '/terms',
  '/privacy',
  '/cookies'
];

async function prerender() {
  console.log('\n🚀 Starting Nexivo Static Pre-Rendering (SSG) Build...\n');

  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ dist/index.html not found! Run "vite build" first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  // Launch Vite server in SSR mode to load React components
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom'
  });

  let generatedCount = 0;

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

    for (const url of routes) {
      const { html } = render(url);
      const appHtml = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

      let filePath;
      if (url === '/') {
        filePath = path.resolve(distDir, 'index.html');
      } else {
        const routeDir = path.resolve(distDir, url.slice(1));
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        filePath = path.resolve(routeDir, 'index.html');
      }

      fs.writeFileSync(filePath, appHtml, 'utf-8');
      generatedCount++;
      console.log(`  [SSG] Generated static HTML: ${url} -> ${path.relative(rootDir, filePath)}`);
    }

    console.log(`\n✅ Successfully pre-rendered ${generatedCount} static pages for SEO!`);
  } catch (err) {
    console.error('❌ Error during pre-rendering:', err);
    process.exit(1);
  } finally {
    await vite.close();
  }
}

prerender();
