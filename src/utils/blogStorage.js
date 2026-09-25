// Local storage manager and default data for Nexivo Blog

const STORAGE_KEY = 'nexivo_blog_posts';
const AUTH_KEY = 'nexivo_admin_auth';
const PASSWORD_KEY = 'nexivo_admin_password';

export const DEFAULT_POSTS = [
  {
    id: 'post-1',
    title: 'Why Fast React Websites Outperform Traditional WordPress Sites in 2026',
    slug: 'why-fast-react-websites-outperform-wordpress',
    excerpt: 'Discover why modern businesses across India and global markets are switching from heavy WordPress themes to custom sub-second React & Vite web architectures for higher WhatsApp conversions.',
    category: 'Website Development',
    author: 'Saurav Vaghela',
    authorRole: 'Founder & Tech Lead',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    status: 'published',
    featured: true,
    publishedAt: '2026-09-20T10:00:00.000Z',
    updatedAt: '2026-09-20T10:00:00.000Z',
    metaTitle: 'Why React Outperforms WordPress in 2026 | Nexivo Insights',
    metaDescription: 'Compare sub-second React performance vs traditional WordPress templates. Learn how speed boosts Google Lighthouse scores and mobile conversions.',
    focusKeyword: 'React vs WordPress website speed',
    blocks: [
      {
        id: 'b-1',
        type: 'text',
        text: 'In 2026, mobile user patience is at an all-time low. Studies show that if a website takes longer than 2 seconds to load on mobile 4G networks, over 53% of visitors abandon the page before reading a single line. Traditional WordPress websites, burdened by heavy plugins, database queries, and bloated page builders, struggle to hit sub-second load times.'
      },
      {
        id: 'b-2',
        type: 'heading',
        level: 2,
        text: '1. The Speed Advantage of Static React Architecture'
      },
      {
        id: 'b-3',
        type: 'text',
        text: 'Unlike monolithic content management systems that generate HTML dynamically on every request, modern React + Vite applications compile into pre-rendered static assets served globally via CDN edge nodes. This delivers instant page transitions and Lighthouse performance scores consistently above 95.'
      },
      {
        id: 'b-4',
        type: 'quote',
        text: 'Speed is not just a technical metric; it is your strongest direct response sales hook. A site that loads instantly commands trust.'
      },
      {
        id: 'b-5',
        type: 'heading',
        level: 2,
        text: '2. Higher Lead Conversions via Direct WhatsApp Triggers'
      },
      {
        id: 'b-6',
        type: 'text',
        text: 'Custom React websites allow seamless, zero-friction lead capture integration. By replacing tedious 5-field contact forms with instant 1-tap WhatsApp consultation flows, local businesses report up to 3x higher visitor-to-inquiry conversion rates.'
      },
      {
        id: 'b-7',
        type: 'list',
        style: 'unordered',
        items: [
          'Sub-second mobile 4G page rendering',
          'Zero plugin security vulnerabilities or maintenance crashes',
          'Clean, modern glassmorphism design system',
          'Direct integration with WhatsApp business automation'
        ]
      }
    ]
  },
  {
    id: 'post-2',
    title: 'Top 5 Local SEO Tactics to Rank Top 3 in Google Maps in 2026',
    slug: 'top-local-seo-tactics-google-maps-ranking',
    excerpt: 'Learn the exact step-by-step strategy to dominate Google Business Profile rankings and capture local "near me" buyer traffic in your city.',
    category: 'SEO',
    author: 'Nexivo Growth Team',
    authorRole: 'SEO & Growth Strategy',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    featuredImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80',
    status: 'published',
    featured: false,
    publishedAt: '2026-09-15T14:30:00.000Z',
    updatedAt: '2026-09-15T14:30:00.000Z',
    metaTitle: 'Top 5 Local SEO Tactics to Rank Top 3 in Google Maps | Nexivo',
    metaDescription: 'Master local SEO in 2026. Optimize Google Business Profile, local citations, and geo-targeted schema markup for top 3 Google Maps rankings.',
    focusKeyword: 'rank top 3 google maps local seo',
    blocks: [
      {
        id: 'b-10',
        type: 'text',
        text: 'For local clinics, pharmacies, stores, and service agencies, ranking in the Google Maps "Local 3-Pack" is worth thousands of high-intent phone calls and store visits every month.'
      },
      {
        id: 'b-11',
        type: 'heading',
        level: 2,
        text: 'Key Ranking Signals for 2026 Local Search'
      },
      {
        id: 'b-12',
        type: 'list',
        style: 'ordered',
        items: [
          'Google Business Profile (GBP) category precision and weekly geo-tagged image uploads',
          'High-frequency customer reviews containing target service keywords',
          'NAP (Name, Address, Phone) consistency across authority local directories',
          'Technical local schema markup embedded on website landing pages'
        ]
      },
      {
        id: 'b-13',
        type: 'heading',
        level: 2,
        text: 'Consistent Review Acceleration'
      },
      {
        id: 'b-14',
        type: 'text',
        text: 'Encourage satisfied clients to mention specific service names (e.g. "website development in Rajkot" or "dental clinic in Ahmedabad") in their Google reviews. Google’s AI algorithm indexes review keywords to match local search intent.'
      }
    ]
  },
  {
    id: 'post-3',
    title: 'How Google & Meta Ads Drive Instant High-ROAS Client Acquisition',
    slug: 'how-google-meta-ads-drive-instant-high-roas-client-acquisition',
    excerpt: 'Stop burning budget on unoptimized Facebook boost posts. Here is how to structure targeted ad campaigns with direct WhatsApp lead conversion.',
    category: 'Google & Meta Ads',
    author: 'Nexivo Performance Unit',
    authorRole: 'PPC Strategy',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    featuredImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    status: 'published',
    featured: false,
    publishedAt: '2026-09-10T09:15:00.000Z',
    updatedAt: '2026-09-10T09:15:00.000Z',
    metaTitle: 'High-ROAS Meta & Google Ads Blueprint | Nexivo',
    metaDescription: 'Learn how to generate qualified buyer leads on WhatsApp using targeted Meta lead ads and negative keyword Google PPC strategies.',
    focusKeyword: 'meta ads google ppc high roas lead generation',
    blocks: [
      {
        id: 'b-20',
        type: 'text',
        text: 'Running paid ad campaigns without a clear conversion funnel is like pouring water into a leaky bucket. To maximize Return on Ad Spend (ROAS), every ad click must lead directly to a dedicated sales message.'
      },
      {
        id: 'b-21',
        type: 'heading',
        level: 2,
        text: 'Google Search PPC vs Meta Social Ads'
      },
      {
        id: 'b-22',
        type: 'text',
        text: 'Google Search captures active intent (customers searching for immediate solutions), while Meta Ads (Instagram & Facebook) build brand demand through visual storytelling and impulse conversion hooks.'
      }
    ]
  }
];

export function getStoredPosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
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
