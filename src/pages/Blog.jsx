import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, User, Tag, Sparkles, BookOpen, MessageSquare } from 'lucide-react';
import { getStoredPosts, formatDate, getReadTime } from '../utils/blogStorage';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load posts from localStorage (with defaults)
    const data = getStoredPosts();
    setPosts(data.filter((p) => p.status === 'published'));
  }, []);

  const categories = ['All', 'Website Development', 'Digital Marketing', 'SEO', 'Google & Meta Ads'];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((p) => p.featured) || posts[0];

  const handleWhatsAppConsult = () => {
    const msg = encodeURIComponent("Hello Nexivo team! I was reading your blog and would like to discuss growing my business with custom web development & digital marketing.");
    window.open(`https://wa.me/919313888364?text=${msg}`, '_blank');
  };

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* PAGE HEADER */}
      <section className="page-header" style={{ paddingBottom: '3rem' }}>
        <div className="eyebrow">
          <BookOpen size={14} color="#5DCAA5" /> Nexivo Insights & Growth Strategies
        </div>
        <h1 className="page-title">
          Scale Faster with <span className="accent">Modern Digital Intelligence</span>
        </h1>
        <p className="page-desc">
          Data-backed web development tutorials, technical SEO tactics, high-ROAS ad campaign strategies, and conversion rate optimization tips for growing businesses.
        </p>

        {/* SEARCH BAR */}
        <div style={{ maxWidth: '540px', margin: '2.5rem auto 0', position: 'relative' }}>
          <Search size={20} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(244,242,235,0.4)' }} />
          <input
            type="text"
            placeholder="Search articles, topics or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.9rem 1.2rem 0.9rem 3.2rem',
              borderRadius: '999px',
              background: 'rgba(244, 242, 235, 0.05)',
              border: '1px solid var(--line-strong)',
              color: 'var(--offwhite)',
              fontSize: '0.95rem',
              outline: 'none',
              transition: 'border-color 0.2s, background 0.2s'
            }}
          />
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section style={{ paddingTop: '0', paddingBottom: '2.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                border: '1px solid',
                borderColor: selectedCategory === cat ? 'var(--teal-light)' : 'var(--line)',
                background: selectedCategory === cat ? 'rgba(29, 158, 117, 0.16)' : 'var(--glass)',
                color: selectedCategory === cat ? 'var(--teal-light)' : 'rgba(244, 242, 235, 0.7)',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED POST HERO (If no search active & featured post exists) */}
      {!searchQuery && selectedCategory === 'All' && featuredPost && (
        <section style={{ paddingTop: '0', paddingBottom: '4rem' }}>
          <div
            className="glass-card"
            style={{
              padding: '0',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1.1fr)',
              gap: '0',
              border: '1px solid var(--line-strong)',
              background: 'linear-gradient(135deg, rgba(29,158,117,0.06), rgba(55,138,221,0.04))'
            }}
          >
            <div style={{ height: '100%', minHeight: '280px', overflow: 'hidden' }}>
              <img
                src={featuredPost.featuredImage}
                alt={featuredPost.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', padding: '0.25rem 0.75rem', borderRadius: '999px', background: 'rgba(93, 202, 165, 0.15)', color: 'var(--teal-light)' }}>
                  <Sparkles size={12} style={{ display: 'inline', marginRight: '4px' }} /> Featured Article
                </span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(244,242,235,0.5)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={13} /> {getReadTime(featuredPost.blocks)}
                </span>
              </div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800', lineHeight: '1.25', marginBottom: '1rem', color: 'var(--offwhite)' }}>
                <Link to={`/blog/${featuredPost.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {featuredPost.title}
                </Link>
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'rgba(244,242,235,0.7)', lineHeight: '1.6', marginBottom: '1.8rem' }}>
                {featuredPost.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <img src={featuredPost.authorAvatar} alt={featuredPost.author} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--offwhite)' }}>{featuredPost.author}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(244,242,235,0.5)' }}>{formatDate(featuredPost.publishedAt)}</div>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.slug}`} className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.82rem' }}>
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BLOG POSTS GRID */}
      <section style={{ paddingTop: '0' }}>
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--glass)', borderRadius: '16px', border: '1px solid var(--line)' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--offwhite)', marginBottom: '0.5rem' }}>No articles found</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(244,242,235,0.6)' }}>Try searching for a different keyword or category tab.</p>
          </div>
        ) : (
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {filteredPosts.map((post) => (
              <div key={post.id} className="service-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--line)' }}>
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                  />
                  <span style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '0.72rem', fontWeight: '700', padding: '0.25rem 0.65rem', borderRadius: '999px', background: 'rgba(26,26,24,0.85)', backdropFilter: 'blur(8px)', color: 'var(--teal-light)', border: '1px solid var(--line-strong)' }}>
                    {post.category}
                  </span>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(244,242,235,0.5)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {getReadTime(post.blocks)}</span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700', lineHeight: '1.35', marginBottom: '0.8rem', color: 'var(--offwhite)' }}>
                      <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {post.title}
                      </Link>
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'rgba(244,242,235,0.65)', lineHeight: '1.6', marginBottom: '1.4rem' }}>
                      {post.excerpt.length > 110 ? post.excerpt.substring(0, 110) + '...' : post.excerpt}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--line)' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--offwhite)', fontWeight: '600' }}>{post.author}</span>
                    <Link to={`/blog/${post.slug}`} style={{ color: 'var(--teal-light)', fontSize: '0.82rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                      Read Article →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* WHATSAPP CTA CALLOUT */}
      <section style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div className="glass-card" style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, rgba(29,158,117,0.12), rgba(55,138,221,0.08))', border: '1px solid var(--teal-light)' }}>
          <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>
            Want Customized Digital Growth Strategy for Your Business?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(244,242,235,0.7)', maxWidth: '580px', margin: '0 auto 1.8rem' }}>
            Talk directly to Nexivo engineers and growth strategists. Get actionable performance audit & project estimate in 15 minutes.
          </p>
          <button onClick={handleWhatsAppConsult} className="btn-primary">
            Discuss Your Project on WhatsApp <MessageSquare size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
