// Local storage manager and default data for Nexivo Blog

const STORAGE_KEY = 'nexivo_blog_posts_v2';
const OLD_STORAGE_KEY = 'nexivo_blog_posts';
const AUTH_KEY = 'nexivo_admin_auth';
const PASSWORD_KEY = 'nexivo_admin_password';

export const DEFAULT_POSTS = [
  {
    id: 'post-1',
    title: 'Why Fast React Websites Outperform Traditional WordPress Sites in 2026',
    slug: 'why-fast-react-websites-outperform-wordpress',
    excerpt: 'Discover why modern businesses across India and global markets are switching from heavy WordPress themes to custom sub-second React & Vite web architectures for higher Google rankings and WhatsApp lead conversions.',
    category: 'Website Development',
    author: 'Saurav Vaghela',
    authorRole: 'Co-Founder & Technical Lead',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    status: 'published',
    featured: true,
    publishedAt: '2026-09-22T10:00:00.000Z',
    updatedAt: '2026-09-22T10:00:00.000Z',
    metaTitle: 'Why Custom React Websites Outperform WordPress in 2026 | Nexivo Insights',
    metaDescription: 'Compare sub-second React & Vite web performance vs traditional WordPress templates. Learn how speed boosts Google Core Web Vitals, Lighthouse scores, and mobile conversions.',
    focusKeyword: 'React vs WordPress website speed performance',
    blocks: [
      {
        id: 'b-1',
        type: 'text',
        text: 'In 2026, mobile user patience is at an all-time low. Industry benchmark studies reveal that if a website takes longer than 2 seconds to render on mobile 4G networks, over 53% of potential clients bounce immediately before reading a single headline. Traditional monolithic WordPress websites, weighted down by dozens of third-party plugins, database queries, and heavy page builders, struggle to hit sub-second loading speeds.'
      },
      {
        id: 'b-2',
        type: 'heading',
        level: 2,
        text: '1. Core Web Vitals & Google 2026 Ranking Factor Standards'
      },
      {
        id: 'b-3',
        type: 'text',
        text: 'Google search algorithm heavily prioritizes Core Web Vitals—specifically Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). Websites built on clean static React and Vite architectures achieve LCP scores under 0.8 seconds, giving them a distinct competitive advantage in organic search result positions.'
      },
      {
        id: 'b-4',
        type: 'quote',
        text: 'Speed is not merely a technical metric; it is your single most powerful direct-response sales tool. A website that renders instantly commands immediate trust.'
      },
      {
        id: 'b-5',
        type: 'heading',
        level: 2,
        text: '2. Monolithic Database Queries vs Edge-Rendered React Build'
      },
      {
        id: 'b-6',
        type: 'text',
        text: 'Every time a visitor lands on a traditional WordPress page, the server executes dynamic PHP scripts and queries MySQL databases to compose the DOM. In contrast, custom React applications are compiled into optimized static production bundles distributed directly across global CDN edge nodes, delivering instantaneous page transitions.'
      },
      {
        id: 'b-7',
        type: 'list',
        style: 'unordered',
        items: [
          'Sub-second 4G mobile loading speed across global networks',
          'Consistently 95+ Google Lighthouse performance ratings',
          'Zero plugin security vulnerabilities, plugin update crashes, or database leaks',
          'Modern responsive glassmorphism UI/UX design tailored for brand authority'
        ]
      },
      {
        id: 'b-8',
        type: 'heading',
        level: 2,
        text: '3. Maximizing Lead Conversions via 1-Tap WhatsApp Funnels'
      },
      {
        id: 'b-9',
        type: 'text',
        text: 'Long contact forms create unnecessary user friction. By replacing complex 6-field inquiry forms with instant 1-tap WhatsApp consultation flows, local clinics, real estate firms, and service agencies experience up to 3x higher visitor-to-inquiry conversion rates.'
      }
    ]
  },
  {
    id: 'post-2',
    title: 'Top 5 Local SEO Tactics to Rank Top 3 in Google Maps in 2026',
    slug: 'top-local-seo-tactics-google-maps-ranking',
    excerpt: 'Learn the exact step-by-step local search playbook to dominate Google Business Profile rankings and capture high-intent "near me" buyer traffic in your city.',
    category: 'SEO',
    author: 'Saurav Vaghela',
    authorRole: 'Co-Founder & Technical Lead',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    featuredImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80',
    status: 'published',
    featured: false,
    publishedAt: '2026-09-18T14:30:00.000Z',
    updatedAt: '2026-09-18T14:30:00.000Z',
    metaTitle: 'Top 5 Local SEO Tactics to Rank Top 3 in Google Maps (2026 Guide)',
    metaDescription: 'Master local SEO in 2026. Learn how to optimize Google Business Profile, local citations, customer review velocity, and geo-targeted schema markup for top 3 Google Maps rankings.',
    focusKeyword: 'rank top 3 google maps local seo strategy',
    blocks: [
      {
        id: 'b-10',
        type: 'text',
        text: 'For local medical clinics, legal practices, retail stores, and service companies, securing a position in Google’s Local 3-Pack is equivalent to owning prime commercial real estate. Over 70% of high-intent "near me" local buyer searches result in direct phone calls or store visits within 24 hours.'
      },
      {
        id: 'b-11',
        type: 'heading',
        level: 2,
        text: '1. Google Business Profile (GBP) Primary Category & Geo-Tagging'
      },
      {
        id: 'b-12',
        type: 'text',
        text: 'Selecting the exact primary category in your Google Business Profile accounts for nearly 20% of your local pack ranking signals. Furthermore, uploading high-resolution, geo-tagged photos weekly communicates active business operations to Google’s localized AI indexing engine.'
      },
      {
        id: 'b-13',
        type: 'heading',
        level: 2,
        text: '2. Review Velocity & Strategic Keyword Insertion'
      },
      {
        id: 'b-14',
        type: 'text',
        text: 'Encourage satisfied clients to mention specific service titles and city locations (for example, "best dental clinic in Ahmedabad" or "web development agency in Rajkot") within their reviews. Google’s natural language processing indexes these keywords to match local search intent.'
      },
      {
        id: 'b-15',
        type: 'quote',
        text: 'Customer reviews containing specific service keywords and location anchors increase your local map pack prominence by over 300%.'
      },
      {
        id: 'b-16',
        type: 'heading',
        level: 2,
        text: '3. NAP Consistency Across Local Directories'
      },
      {
        id: 'b-17',
        type: 'list',
        style: 'ordered',
        items: [
          'Ensure exact Name, Address, and Phone (NAP) uniformity across Google, Justdial, Indiamart, and local business directories',
          'Embed LocalBusiness JSON-LD schema markup directly on your website landing page',
          'Publish city-specific service pages targeting localized long-tail search terms',
          'Build local backlinks from local news outlets, chambers of commerce, and partner business portals'
        ]
      }
    ]
  },
  {
    id: 'post-3',
    title: 'How Google & Meta Ads Drive Instant High-ROAS Client Acquisition',
    slug: 'how-google-meta-ads-drive-instant-high-roas-client-acquisition',
    excerpt: 'Stop burning budget on unoptimized Facebook boost posts. Discover how to structure Google PPC Search campaigns and Meta Lead Ads with direct WhatsApp conversion funnels.',
    category: 'Google & Meta Ads',
    author: 'Jay Parmar',
    authorRole: 'Founder & Creative Director',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    featuredImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    status: 'published',
    featured: false,
    publishedAt: '2026-09-14T09:15:00.000Z',
    updatedAt: '2026-09-14T09:15:00.000Z',
    metaTitle: 'High-ROAS Meta & Google Ads Blueprint for Growth | Nexivo',
    metaDescription: 'Learn how to generate qualified leads on WhatsApp using targeted Meta lead ads, negative keyword Google PPC strategies, and high-CTR visual reel creatives.',
    focusKeyword: 'meta ads google ppc high roas lead generation',
    blocks: [
      {
        id: 'b-20',
        type: 'text',
        text: 'Running paid ad campaigns without a dedicated conversion funnel is like pouring water into a leaking container. To maximize Return on Ad Spend (ROAS), every single paid ad click must lead directly to a persuasive sales message and zero-friction inquiry trigger.'
      },
      {
        id: 'b-21',
        type: 'heading',
        level: 2,
        text: '1. High-Intent Google Search PPC vs Social Demand Generation'
      },
      {
        id: 'b-22',
        type: 'text',
        text: 'Google Search PPC captures existing buyer intent—users actively searching for solutions right now. Meta Ads (Instagram & Facebook) build new buyer demand through visual reel hooks, carousels, and compelling video storytelling.'
      },
      {
        id: 'b-23',
        type: 'heading',
        level: 2,
        text: '2. Negative Keyword Lists to Stop Budget Waste'
      },
      {
        id: 'b-24',
        type: 'list',
        style: 'unordered',
        items: [
          'Add non-buyer search terms ("free", "pdf", "course", "jobs") to negative keyword lists on Google PPC',
          'Deploy Meta Pixel & Conversion API to optimize for high-value leads rather than cheap link clicks',
          'Test 3-5 visual creative variations weekly to combat ad fatigue and maintain low Cost Per Lead (CPL)',
          'Route all high-intent leads straight to 1-tap WhatsApp consultation for instant 15-minute response'
        ]
      },
      {
        id: 'b-25',
        type: 'quote',
        text: 'Your ad creative is your target audience filter. A strong visual hook pre-qualifies prospects before you pay for the click.'
      }
    ]
  }
];

export function getStoredPosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Migrate or initialize
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_POSTS));
      return DEFAULT_POSTS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading blog posts from storage:', e);
    return DEFAULT_POSTS;
  }
}

export function saveStoredPosts(posts) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch (e) {
    console.error('Error saving blog posts to storage:', e);
  }
}

export function getPostBySlug(slug) {
  const posts = getStoredPosts();
  return posts.find((p) => p.slug === slug);
}

export function savePost(postData) {
  const posts = getStoredPosts();
  const existingIdx = posts.findIndex((p) => p.id === postData.id || p.slug === postData.slug);

  const now = new Date().toISOString();
  const formattedPost = {
    ...postData,
    id: postData.id || `post-${Date.now()}`,
    slug: postData.slug || slugify(postData.title),
    publishedAt: postData.publishedAt || now,
    updatedAt: now
  };

  if (existingIdx >= 0) {
    posts[existingIdx] = formattedPost;
  } else {
    posts.unshift(formattedPost);
  }

  saveStoredPosts(posts);
  return formattedPost;
}

export function deletePost(id) {
  const posts = getStoredPosts();
  const filtered = posts.filter((p) => p.id !== id && p.slug !== id);
  saveStoredPosts(filtered);
  return filtered;
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export function getReadTime(blocksOrText) {
  let text = '';
  if (Array.isArray(blocksOrText)) {
    text = blocksOrText.map((b) => b.text || '').join(' ');
  } else if (typeof blocksOrText === 'string') {
    text = blocksOrText;
  }
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (e) {
    return dateStr;
  }
}

// Authentication Helpers
export function checkAdminAuth() {
  return sessionStorage.getItem(AUTH_KEY) === 'true';
}

export function setAdminAuth(isAuth) {
  if (isAuth) {
    sessionStorage.setItem(AUTH_KEY, 'true');
  } else {
    sessionStorage.removeItem(AUTH_KEY);
  }
}

export function getAdminPassword() {
  return localStorage.getItem(PASSWORD_KEY) || 'nexivo2026';
}

export function setAdminPassword(newPassword) {
  localStorage.setItem(PASSWORD_KEY, newPassword);
}
