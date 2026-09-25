// Site-wide SEO & Dynamic Sitemap utilities for Nexivo

const SEO_KEY = 'nexivo_site_seo';

export const DEFAULT_SITE_SEO = {
  siteTitle: 'Nexivo — Modern Websites & Global Digital Growth Agency',
  siteDescription: 'Nexivo is a premier global web agency designing fast, sub-second conversion-focused websites and high-ROI digital growth campaigns for ambitious businesses across the UK, USA, UAE, and India.',
  keywords: 'web development agency, React Vite websites, local SEO Google Maps ranking, Meta ads, digital marketing agency India UK',
  googleVerification: 'hlSMwYjssYtebRyNofidgcSSmDvGKe9-UN9i2HJmigk',
  gtmId: 'GTM-N64DNR9D',
  ogImage: 'https://www.studionexivo.com/favicon.svg'
};

export function getSiteSeo() {
  try {
    const raw = localStorage.getItem(SEO_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_SITE_SEO;
  } catch (e) {
    return DEFAULT_SITE_SEO;
  }
}

export function saveSiteSeo(seoData) {
  try {
    localStorage.setItem(SEO_KEY, JSON.stringify(seoData));
    applyGlobalSeo(seoData);
  } catch (e) {
    console.error('Failed to save SEO settings:', e);
  }
}

export function applyGlobalSeo(seoData) {
  const config = seoData || getSiteSeo();
  if (typeof document !== 'undefined') {
    if (config.siteTitle) {
      document.title = config.siteTitle;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && config.siteDescription) {
      metaDesc.setAttribute('content', config.siteDescription);
    }
  }
}

export function generateSitemapXml(posts = []) {
  const domain = 'https://www.studionexivo.com';
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/website-development', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/digital-marketing', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/seo', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/social-media', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/content-creation', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/ads-management', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.9', changefreq: 'daily' },
    { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/admin', priority: '0.4', changefreq: 'monthly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  ];

  const publishedBlogPosts = posts.filter((p) => p.status === 'published');

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static core pages
  staticPages.forEach((page) => {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}${page.url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Dynamic blog post pages
  publishedBlogPosts.forEach((post) => {
    const postDate = post.updatedAt ? post.updatedAt.split('T')[0] : today;
    xml += `  <!-- Blog Article: ${escapeXml(post.title)} -->\n`;
    xml += `  <url>\n`;
    xml += `    <loc>${domain}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${postDate}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;
  return xml;
}

function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
