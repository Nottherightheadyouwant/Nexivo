import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Clock, Calendar, User, Share2, MessageSquare, 
  CheckCircle2, Sparkles, Copy, Check, ChevronRight 
} from 'lucide-react';
import { getPostBySlug, getStoredPosts, formatDate, getReadTime } from '../utils/blogStorage';

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = getPostBySlug(slug);
    if (found) {
      setPost(found);
      const all = getStoredPosts().filter((p) => p.slug !== slug && p.status === 'published');
      setRelatedPosts(all.slice(0, 3));
    } else {
      // Fallback if slug not found
      const all = getStoredPosts();
      if (all.length > 0) {
        setPost(all[0]);
      }
    }
  }, [slug]);

  if (!post) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'rgba(244,242,235,0.6)' }}>Loading article...</p>
      </main>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`Check out this insightful article by Nexivo: ${post.title}\n${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleEnquire = () => {
    const text = encodeURIComponent(`Hello Nexivo team! I just read your article "${post.title}" and would like to consult on my project.`);
    window.open(`https://wa.me/919313888364?text=${text}`, '_blank');
  };

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* BREADCRUMB & BACK LINK */}
      <section style={{ paddingTop: '8.5rem', paddingBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'rgba(244,242,235,0.5)', marginBottom: '1.5rem' }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--teal-light)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '280px' }}>{post.title}</span>
        </div>

        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--teal-light)', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none', marginBottom: '1.5rem' }}>
          <ArrowLeft size={16} /> Back to All Articles
        </Link>
      </section>

      {/* ARTICLE HEADER */}
      <section style={{ paddingTop: '0', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', padding: '0.3rem 0.8rem', borderRadius: '999px', background: 'rgba(93,202,165,0.15)', color: 'var(--teal-light)', textTransform: 'uppercase' }}>
              {post.category}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.6)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={14} /> {formatDate(post.publishedAt)}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'rgba(244,242,235,0.6)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Clock size={14} /> {getReadTime(post.blocks)}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '800', lineHeight: '1.18', color: 'var(--offwhite)', marginBottom: '1.5rem' }}>
            {post.title}
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'rgba(244,242,235,0.75)', lineHeight: '1.65', marginBottom: '2rem' }}>
            {post.excerpt}
          </p>

          {/* AUTHOR INFO & SHARE BUTTONS */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.2rem 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <img src={post.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'} alt={post.author} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--line-strong)' }} />
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--offwhite)' }}>{post.author}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--teal-light)' }}>{post.authorRole || 'Author & Strategist'}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <button onClick={handleWhatsAppShare} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '0.5rem 1rem', borderRadius: '999px', background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', color: '#25D366', fontSize: '0.82rem', fontWeight: '600', cursor: 'pointer' }}>
                <MessageSquare size={14} /> Share on WhatsApp
              </button>
              <button onClick={handleCopyLink} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '0.5rem 1rem', borderRadius: '999px', background: 'var(--glass)', border: '1px solid var(--line-strong)', color: 'var(--offwhite)', fontSize: '0.82rem', fontWeight: '600', cursor: 'pointer' }}>
                {copied ? <Check size={14} color="#5DCAA5" /> : <Copy size={14} />} {copied ? 'Copied Link!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BANNER IMAGE */}
      {post.featuredImage && (
        <section style={{ paddingTop: '0', paddingBottom: '3rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--line)' }}>
            <img src={post.featuredImage} alt={post.title} style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', display: 'block' }} />
          </div>
        </section>
      )}

      {/* ARTICLE CONTENT BLOCKS */}
      <section style={{ paddingTop: '0', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {post.blocks && post.blocks.map((block, idx) => {
            if (block.type === 'heading') {
              return (
                <h2 key={idx} style={{ fontSize: block.level === 3 ? '1.35rem' : '1.75rem', fontWeight: '800', marginTop: '2.5rem', marginBottom: '1.2rem', color: 'var(--offwhite)', lineHeight: '1.28' }}>
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={idx} style={{ margin: '2rem 0', padding: '1.5rem 2rem', borderRadius: '16px', background: 'rgba(29, 158, 117, 0.08)', borderLeft: '4px solid var(--teal-light)', color: 'var(--offwhite)', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: '1.6' }}>
                  "{block.text}"
                </blockquote>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={idx} style={{ margin: '1.2rem 0 1.8rem 1.5rem', color: 'rgba(244,242,235,0.8)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                  {block.items && block.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === 'image') {
              return (
                <div key={idx} style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line)' }}>
                  <img src={block.src} alt={block.alt || 'Blog illustration'} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  {block.alt && <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'rgba(244,242,235,0.5)', padding: '0.5rem' }}>{block.alt}</p>}
                </div>
              );
            }
            if (block.type === 'code') {
              return (
                <pre key={idx} style={{ margin: '1.5rem 0', padding: '1.2rem', borderRadius: '12px', background: '#121615', border: '1px solid var(--line)', color: '#5DCAA5', fontSize: '0.88rem', overflowX: 'auto', fontFamily: 'monospace' }}>
                  <code>{block.text}</code>
                </pre>
              );
            }
            // Default text paragraph
            return (
              <p key={idx} style={{ fontSize: '1.05rem', color: 'rgba(244,242,235,0.8)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                {block.text}
              </p>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA BOX */}
      <section style={{ paddingTop: '0', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, rgba(29,158,117,0.14), rgba(55,138,221,0.08))', border: '1px solid var(--teal-light)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--offwhite)', marginBottom: '1rem' }}>
              Ready to execute this growth strategy for your business?
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'rgba(244,242,235,0.7)', maxWidth: '560px', margin: '0 auto 1.8rem' }}>
              Connect with Nexivo today. Get a customized website blueprint and SEO strategy with direct 15-minute response on WhatsApp.
            </p>
            <button onClick={handleEnquire} className="btn-primary">
              Start Project Inquiry on WhatsApp <MessageSquare size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {relatedPosts.length > 0 && (
        <section style={{ paddingTop: '0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--offwhite)', marginBottom: '1.8rem' }}>
              Related Insights
            </h3>
            <div className="grid-3" style={{ gap: '1.2rem' }}>
              {relatedPosts.map((rel) => (
                <div key={rel.id} className="service-card" style={{ padding: '0', overflow: 'hidden' }}>
                  <div style={{ height: '140px', overflow: 'hidden' }}>
                    <img src={rel.featuredImage} alt={rel.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.2rem' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--teal-light)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      {rel.category}
                    </div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: '700', lineHeight: '1.35', marginBottom: '0.8rem' }}>
                      <Link to={`/blog/${rel.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {rel.title}
                      </Link>
                    </h4>
                    <Link to={`/blog/${rel.slug}`} style={{ color: 'var(--teal-light)', fontSize: '0.8rem', fontWeight: '700', textDecoration: 'none' }}>
                      Read Article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
