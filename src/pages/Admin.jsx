import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, Key, LogOut, Plus, Edit3, Trash2, Eye, Check, X, 
  Search, ArrowLeft, Image as ImageIcon, Heading, Type, Quote, 
  List as ListIcon, Code, Sparkles, LayoutDashboard, Globe, Save,
  ShieldAlert, Clock, ShieldCheck, Mail
} from 'lucide-react';
import { 
  getStoredPosts, savePost, deletePost, checkAdminAuth, setAdminAuth, 
  getAdminPassword, setAdminPassword, formatDate, slugify 
} from '../utils/blogStorage';
import { getSiteSeo, saveSiteSeo, generateSitemapXml, applyGlobalSeo } from '../utils/seoStorage';
import { getEmailConfig, saveEmailConfig } from '../utils/emailService';

const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 60 * 1000; // 60s security lockout

export default function Admin() {
  // Authentication & Rate Limiter state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [passSuccess, setPassSuccess] = useState('');

  // Limiter state
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutRemainingSec, setLockoutRemainingSec] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  // Site-wide SEO Settings State
  const [siteSeo, setSiteSeo] = useState({
    siteTitle: '',
    siteDescription: '',
    keywords: '',
    googleVerification: ''
  });
  const [seoSavedMsg, setSeoSavedMsg] = useState('');
  const [showSitemapPreview, setShowSitemapPreview] = useState(false);
  const [sitemapCopied, setSitemapCopied] = useState(false);

  // EmailJS Zero-Backend Settings State
  const [emailConfig, setEmailConfigState] = useState({ serviceId: '', templateId: '', publicKey: '' });
  const [emailSavedMsg, setEmailSavedMsg] = useState('');

  // Posts state
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Editor mode: 'list' | 'editor' | 'preview'
  const [viewMode, setViewMode] = useState('list');
  const [notification, setNotification] = useState(null);

  // Form Editor State
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('Website Development');
  const [author, setAuthor] = useState('Saurav Vaghela');
  const [authorRole, setAuthorRole] = useState('Co-Founder & Technical Lead');
  const [featuredImage, setFeaturedImage] = useState('');
  const [status, setStatus] = useState('published');
  const [featured, setFeatured] = useState(false);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [focusKeyword, setFocusKeyword] = useState('');
  const [blocks, setBlocks] = useState([
    { id: 'b-1', type: 'text', text: '' }
  ]);

  useEffect(() => {
    setIsAuthenticated(checkAdminAuth());
    setPosts(getStoredPosts());
    const initialSeo = getSiteSeo();
    setSiteSeo(initialSeo);
    applyGlobalSeo(initialSeo);
    setEmailConfigState(getEmailConfig());
  }, []);

  const handleSaveEmailConfig = (e) => {
    e.preventDefault();
    saveEmailConfig(emailConfig);
    setEmailSavedMsg('✓ EmailJS Config Saved!');
    showToast('success', 'Zero-backend automated email credentials saved!');
    setTimeout(() => setEmailSavedMsg(''), 2000);
  };

  // Lockout countdown timer & session storage persistence
  useEffect(() => {
    const checkLockout = () => {
      try {
        if (typeof window === 'undefined') return;
        const storedAttempts = parseInt(sessionStorage.getItem('nexivo_admin_failed_attempts') || '0', 10);
        const lockoutUntil = parseInt(sessionStorage.getItem('nexivo_admin_lockout_until') || '0', 10);
        const now = Date.now();

        if (lockoutUntil > now) {
          setFailedAttempts(MAX_FAILED_ATTEMPTS);
          const remaining = Math.ceil((lockoutUntil - now) / 1000);
          setLockoutRemainingSec(remaining);
        } else {
          if (lockoutUntil !== 0 && lockoutUntil <= now) {
            sessionStorage.removeItem('nexivo_admin_lockout_until');
            sessionStorage.setItem('nexivo_admin_failed_attempts', '0');
            setFailedAttempts(0);
            setLockoutRemainingSec(0);
          } else {
            setFailedAttempts(storedAttempts);
            setLockoutRemainingSec(0);
          }
        }
      } catch (e) {}
    };

    checkLockout();
    const interval = setInterval(checkLockout, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSaveSiteSeo = (e) => {
    e.preventDefault();
    if (isSaving) return;
    setIsSaving(true);
    saveSiteSeo(siteSeo);
    showToast('success', 'Site-wide SEO Title, Meta Description & Keywords saved successfully!');
    setSeoSavedMsg('Global SEO Settings updated!');
    setTimeout(() => {
      setSeoSavedMsg('');
      setIsSaving(false);
    }, 1500);
  };

  const handleCopySitemap = () => {
    const xml = generateSitemapXml(posts);
    navigator.clipboard.writeText(xml);
    setSitemapCopied(true);
    showToast('success', 'Full sitemap.xml content copied to clipboard!');
    setTimeout(() => setSitemapCopied(false), 2500);
  };

  const handleDownloadSitemap = () => {
    const xml = generateSitemapXml(posts);
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('success', 'sitemap.xml downloaded successfully!');
  };

  const showToast = (type, text) => {
    setNotification({ type, text });
    setTimeout(() => setNotification(null), 3500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (lockoutRemainingSec > 0) return;

    const correctPassword = getAdminPassword();
    if (passwordInput === correctPassword) {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('nexivo_admin_failed_attempts', '0');
        sessionStorage.removeItem('nexivo_admin_lockout_until');
      }
      setFailedAttempts(0);
      setLockoutRemainingSec(0);
      setAdminAuth(true);
      setIsAuthenticated(true);
      setLoginError('');
      showToast('success', 'Logged in successfully to Nexivo Admin Dashboard!');
    } else {
      const newCount = failedAttempts + 1;
      setFailedAttempts(newCount);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('nexivo_admin_failed_attempts', newCount.toString());
      }

      if (newCount >= MAX_FAILED_ATTEMPTS) {
        const lockoutTime = Date.now() + LOCKOUT_DURATION_MS;
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('nexivo_admin_lockout_until', lockoutTime.toString());
        }
        setLockoutRemainingSec(60);
        setLoginError(`Security Lockout Triggered! Too many failed attempts. Access blocked for 60 seconds.`);
      } else {
        const remaining = MAX_FAILED_ATTEMPTS - newCount;
        setLoginError(`Incorrect password. Attempt ${newCount}/${MAX_FAILED_ATTEMPTS} (${remaining} remaining before lockout).`);
      }
    }
  };

  const handleLogout = () => {
    setAdminAuth(false);
    setIsAuthenticated(false);
    showToast('success', 'Logged out safely.');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 4) {
      setPassSuccess('Password must be at least 4 characters long.');
      return;
    }
    setAdminPassword(newPassword);
    setPassSuccess('Password changed successfully!');
    setNewPassword('');
    setTimeout(() => setShowPasswordChange(false), 2000);
  };

  // Preset stock images for easy one-click select
  const PRESET_IMAGES = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
  ];

  const handleNewPost = () => {
    setEditingId(null);
    setTitle('');
    setSlug('');
    setExcerpt('');
    setCategory('Website Development');
    setAuthor('Saurav Vaghela');
    setAuthorRole('Founder & Tech Lead');
    setFeaturedImage(PRESET_IMAGES[0]);
    setStatus('published');
    setFeatured(false);
    setMetaTitle('');
    setMetaDescription('');
    setFocusKeyword('');
    setBlocks([{ id: `b-${Date.now()}`, type: 'text', text: '' }]);
    setViewMode('editor');
  };

  const handleEditPost = (post) => {
    setEditingId(post.id);
    setTitle(post.title || '');
    setSlug(post.slug || '');
    setExcerpt(post.excerpt || '');
    setCategory(post.category || 'Website Development');
    setAuthor(post.author || 'Saurav Vaghela');
    setAuthorRole(post.authorRole || 'Founder & Tech Lead');
    setFeaturedImage(post.featuredImage || PRESET_IMAGES[0]);
    setStatus(post.status || 'published');
    setFeatured(Boolean(post.featured));
    setMetaTitle(post.metaTitle || '');
    setMetaDescription(post.metaDescription || '');
    setFocusKeyword(post.focusKeyword || '');
    setBlocks(post.blocks && post.blocks.length > 0 ? post.blocks : [{ id: `b-${Date.now()}`, type: 'text', text: post.excerpt || '' }]);
    setViewMode('editor');
  };

  const handleDeletePost = (id, postTitle) => {
    if (window.confirm(`Are you sure you want to delete "${postTitle}"?`)) {
      const updated = deletePost(id);
      setPosts(updated);
      showToast('success', 'Article deleted successfully.');
    }
  };

  const handleTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    if (!editingId) {
      setSlug(slugify(val));
    }
  };

  // Block management
  const addBlock = (type) => {
    const newId = `b-${Date.now()}`;
    let newBlock = { id: newId, type, text: '' };
    if (type === 'heading') newBlock.level = 2;
    if (type === 'list') newBlock.items = ['Item 1', 'Item 2'];
    if (type === 'image') { newBlock.src = PRESET_IMAGES[0]; newBlock.alt = ''; }

    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (index, updatedFields) => {
    const copy = [...blocks];
    copy[index] = { ...copy[index], ...updatedFields };
    setBlocks(copy);
  };

  const removeBlock = (index) => {
    if (blocks.length <= 1) {
      showToast('error', 'Blog post must have at least one content block.');
      return;
    }
    setBlocks(blocks.filter((_, i) => i !== index));
  };

  const moveBlock = (index, direction) => {
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= blocks.length) return;
    const copy = [...blocks];
    const temp = copy[index];
    copy[index] = copy[targetIdx];
    copy[targetIdx] = temp;
    setBlocks(copy);
  };

  const handleSavePost = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      showToast('error', 'Please enter a post title.');
      return;
    }

    const postData = {
      id: editingId || `post-${Date.now()}`,
      title,
      slug: slug || slugify(title),
      excerpt,
      category,
      author,
      authorRole,
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      featuredImage: featuredImage || PRESET_IMAGES[0],
      status,
      featured,
      metaTitle: metaTitle || title,
      metaDescription: metaDescription || excerpt,
      focusKeyword,
      blocks
    };

    savePost(postData);
    setPosts(getStoredPosts());
    showToast('success', editingId ? 'Article updated successfully!' : 'New article published!');
    setViewMode('list');
  };

  const filteredPosts = posts.filter((p) => {
    const matchesFilter = filterStatus === 'all' || p.status === filterStatus;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
        <div className="glass-card" style={{ maxWidth: '420px', width: '100%', padding: '2.5rem', border: '1px solid var(--line-strong)', background: 'rgba(26,26,24,0.9)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(29,158,117,0.15)', border: '1px solid rgba(29,158,117,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem', color: 'var(--teal-light)' }}>
              <Lock size={26} />
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--offwhite)', marginBottom: '0.4rem' }}>Nexivo Admin Portal</h2>
            <p style={{ fontSize: '0.86rem', color: 'rgba(244,242,235,0.6)' }}>Enter password to manage blog articles and content.</p>
          </div>

          {lockoutRemainingSec > 0 ? (
            <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(220,53,69,0.18)', border: '1px solid rgba(220,53,69,0.4)', color: '#ff6b6b', fontSize: '0.86rem', marginBottom: '1.4rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '800', marginBottom: '0.4rem' }}>
                <ShieldAlert size={20} /> Security Rate Limit Active
              </div>
              <p style={{ margin: 0, fontSize: '0.82rem', opacity: 0.9 }}>
                Too many failed password attempts. Access temporarily locked.
              </p>
              <div style={{ marginTop: '0.6rem', fontWeight: '700', fontSize: '0.95rem', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <Clock size={16} /> Try again in {lockoutRemainingSec}s
              </div>
            </div>
          ) : loginError ? (
            <div style={{ padding: '0.8rem 1rem', borderRadius: '10px', background: 'rgba(220,53,69,0.15)', border: '1px solid rgba(220,53,69,0.3)', color: '#ff6b6b', fontSize: '0.82rem', marginBottom: '1.2rem', textAlign: 'center' }}>
              {loginError}
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.76rem', color: 'var(--teal-light)', background: 'rgba(29,158,117,0.1)', border: '1px solid rgba(29,158,117,0.2)', padding: '0.4rem 0.8rem', borderRadius: '8px', marginBottom: '1.4rem' }}>
              <ShieldCheck size={14} /> Rate Limiter Enabled (5 attempts max / 60s lockout)
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.4rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(244,242,235,0.8)', fontWeight: '600', marginBottom: '0.5rem' }}>Admin Password</label>
              <input
                type="password"
                placeholder="Enter password..."
                value={passwordInput}
                disabled={lockoutRemainingSec > 0}
                onChange={(e) => setPasswordInput(e.target.value)}
                style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', background: lockoutRemainingSec > 0 ? 'rgba(255,255,255,0.02)' : 'rgba(244,242,235,0.05)', border: '1px solid var(--line-strong)', color: lockoutRemainingSec > 0 ? 'rgba(255,255,255,0.3)' : 'var(--offwhite)', fontSize: '0.95rem', outline: 'none', cursor: lockoutRemainingSec > 0 ? 'not-allowed' : 'text' }}
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
              disabled={lockoutRemainingSec > 0}
              style={{ width: '100%', justifyContent: 'center', opacity: lockoutRemainingSec > 0 ? 0.5 : 1, cursor: lockoutRemainingSec > 0 ? 'not-allowed' : 'pointer' }}
            >
              {lockoutRemainingSec > 0 ? `Locked Out (${lockoutRemainingSec}s)` : 'Authenticate & Access Portal'} <Key size={16} />
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* TOAST NOTIFICATION */}
      {notification && (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000, padding: '0.9rem 1.4rem', borderRadius: '12px', background: notification.type === 'success' ? '#121615' : '#2c1517', border: `1px solid ${notification.type === 'success' ? 'var(--teal-light)' : '#ff6b6b'}`, color: notification.type === 'success' ? 'var(--teal-light)' : '#ff6b6b', boxShadow: 'var(--shadow)', fontSize: '0.88rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
          {notification.type === 'success' ? <Check size={16} /> : <X size={16} />} {notification.text}
        </div>
      )}

      {/* ADMIN HEADER NAV */}
      <section className="admin-top-section">
        <div className="admin-header-container">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem', marginTop: '0.4rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', padding: '0.2rem 0.65rem', borderRadius: '999px', background: 'rgba(93,202,165,0.15)', color: 'var(--teal-light)' }}>
                Nexivo Content CMS
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '800', color: 'var(--offwhite)', margin: 0 }}>Blog Admin Dashboard</h1>
          </div>

          <div className="admin-header-actions">
            <Link to="/blog" style={{ textDecoration: 'none' }} className="btn-outline">
              <Globe size={16} /> View Live Blog
            </Link>
            {viewMode === 'list' ? (
              <button onClick={handleNewPost} className="btn-primary">
                <Plus size={16} /> Create New Article
              </button>
            ) : (
              <button onClick={() => setViewMode('list')} className="btn-outline">
                <ArrowLeft size={16} /> Back to Dashboard
              </button>
            )}
            <button onClick={() => setShowPasswordChange(!showPasswordChange)} style={{ padding: '0.65rem 0.9rem', borderRadius: '999px', background: 'var(--glass)', border: '1px solid var(--line)', color: 'var(--offwhite)', cursor: 'pointer' }} title="Security Settings">
              <Key size={16} />
            </button>
            <button onClick={handleLogout} style={{ padding: '0.65rem 0.9rem', borderRadius: '999px', background: 'rgba(220,53,69,0.15)', border: '1px solid rgba(220,53,69,0.3)', color: '#ff6b6b', cursor: 'pointer' }} title="Logout">
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* CHANGE PASSWORD & SECURITY PANEL */}
        {showPasswordChange && (
          <div className="glass-card" style={{ marginTop: '1.5rem', padding: '1.5rem', border: '1px solid var(--line-strong)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--offwhite)', marginBottom: '0.8rem' }}>Change Admin Password</h4>
                {passSuccess && <p style={{ fontSize: '0.82rem', color: 'var(--teal-light)', marginBottom: '0.6rem' }}>{passSuccess}</p>}
                <form onSubmit={handleChangePassword} style={{ display: 'flex', gap: '0.8rem', maxWidth: '420px' }}>
                  <input
                    type="password"
                    placeholder="Enter new password..."
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{ flex: 1, padding: '0.65rem 0.9rem', borderRadius: '10px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.9rem', outline: 'none' }}
                  />
                  <button type="submit" className="btn-primary" style={{ padding: '0.65rem 1.2rem' }}>
                    Update
                  </button>
                </form>
              </div>

              <div style={{ padding: '1rem 1.2rem', borderRadius: '12px', background: 'rgba(29,158,117,0.08)', border: '1px solid rgba(29,158,117,0.25)', maxWidth: '360px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: '700', color: 'var(--teal-light)', marginBottom: '0.4rem' }}>
                  <ShieldCheck size={18} /> Rate Limiter & Brute-Force Protection
                </div>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(244,242,235,0.7)', lineHeight: 1.5 }}>
                  Status: <strong style={{ color: '#5DCAA5' }}>Active</strong> (5 Max Failed Attempts, 60s Lockout Timer, Auto Session Sync).
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* VIEW 1: DASHBOARD POSTS LIST */}
      {viewMode === 'list' && (
        <section style={{ paddingTop: '2.5rem' }}>
          {/* STATS OVERVIEW CARDS */}
          <div className="admin-stats-grid">
            <div className="glass-card" style={{ padding: '1.4rem' }}>
              <div style={{ fontSize: '0.78rem', color: 'rgba(244,242,235,0.5)', textTransform: 'uppercase', fontWeight: '700' }}>Total Articles</div>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--offwhite)', marginTop: '0.4rem' }}>{posts.length}</div>
            </div>
            <div className="glass-card" style={{ padding: '1.4rem' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--teal-light)', textTransform: 'uppercase', fontWeight: '700' }}>Published</div>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--teal-light)', marginTop: '0.4rem' }}>{posts.filter(p => p.status === 'published').length}</div>
            </div>
            <div className="glass-card" style={{ padding: '1.4rem' }}>
              <div style={{ fontSize: '0.78rem', color: '#ffd166', textTransform: 'uppercase', fontWeight: '700' }}>Drafts</div>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#ffd166', marginTop: '0.4rem' }}>{posts.filter(p => p.status === 'draft').length}</div>
            </div>
            <div className="glass-card" style={{ padding: '1.4rem' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--sky)', textTransform: 'uppercase', fontWeight: '700' }}>Sitemap Index</div>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--sky)', marginTop: '0.4rem' }}>{16 + posts.filter(p => p.status === 'published').length} URLs</div>
            </div>
          </div>

          {/* SITE-WIDE SEO & AUTOMATIC SITEMAP CONTROL BOX */}
          <div className="admin-seo-grid">
            
            {/* BOX 1: WHOLE SITE GLOBAL SEO TITLE & META DESCRIPTION */}
            <div className="glass-card" style={{ padding: '1.8rem', border: '1px solid var(--teal-light)', background: 'linear-gradient(135deg, rgba(29,158,117,0.08), rgba(26,26,24,0.6))' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={18} color="#5DCAA5" />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--offwhite)' }}>Site-Wide Global SEO Settings</h3>
                </div>
                {seoSavedMsg && <span style={{ fontSize: '0.78rem', color: 'var(--teal-light)', fontWeight: '700' }}>✓ Saved</span>}
              </div>

              <form onSubmit={handleSaveSiteSeo}>
                <div style={{ marginBottom: '1.1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(244,242,235,0.8)', fontWeight: '600', marginBottom: '0.4rem' }}>
                    Global Website Title (Browser & Search Snippet)
                  </label>
                  <input
                    type="text"
                    placeholder="Nexivo — Modern Websites & Global Digital Growth Agency"
                    value={siteSeo.siteTitle}
                    onChange={(e) => setSiteSeo({ ...siteSeo, siteTitle: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line-strong)', color: 'var(--offwhite)', fontSize: '0.88rem' }}
                  />
                </div>

                <div style={{ marginBottom: '1.1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(244,242,235,0.8)', fontWeight: '600', marginBottom: '0.4rem' }}>
                    Global Meta Description (Search Engines)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Nexivo is a premier global web agency designing fast..."
                    value={siteSeo.siteDescription}
                    onChange={(e) => setSiteSeo({ ...siteSeo, siteDescription: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line-strong)', color: 'var(--offwhite)', fontSize: '0.86rem', outline: 'none', resize: 'vertical' }}
                  />
                </div>

                <div style={{ marginBottom: '1.4rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(244,242,235,0.8)', fontWeight: '600', marginBottom: '0.4rem' }}>
                    Global Target Keywords (Comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="web development agency, React Vite websites, local SEO Google Maps ranking"
                    value={siteSeo.keywords}
                    onChange={(e) => setSiteSeo({ ...siteSeo, keywords: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.84rem' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '0.65rem 1.3rem', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}>
                  <Save size={15} /> Save Whole Site SEO Settings
                </button>
              </form>
            </div>

            {/* BOX 2: DYNAMIC AUTOMATIC SITEMAP SYNC BOX */}
            <div className="glass-card" style={{ padding: '1.8rem', border: '1px solid var(--line-strong)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Globe size={18} color="#378ADD" />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--offwhite)' }}>Automatic XML Sitemap Sync</h3>
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: '700', padding: '0.2rem 0.6rem', borderRadius: '999px', background: 'rgba(37,211,102,0.15)', color: '#25D366', border: '1px solid rgba(37,211,102,0.3)' }}>
                  🟢 Auto-Sync Active
                </span>
              </div>

              <p style={{ fontSize: '0.86rem', color: 'rgba(244,242,235,0.7)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                Every time you publish or update a blog post, its URL is <strong>automatically formatted and included in your sitemap</strong> for immediate Google Search Console indexing.
              </p>

              <div style={{ padding: '0.9rem 1rem', borderRadius: '10px', background: 'rgba(244,242,235,0.04)', border: '1px solid var(--line)', marginBottom: '1.4rem' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--offwhite)', fontWeight: '700', marginBottom: '0.3rem' }}>
                  Total Indexed URLs: <span style={{ color: 'var(--teal-light)' }}>{16 + posts.filter(p => p.status === 'published').length}</span>
                </div>
                <div style={{ fontSize: '0.76rem', color: 'rgba(244,242,235,0.5)' }}>
                  • 16 Core Static Pages & Service Routes<br/>
                  • {posts.filter(p => p.status === 'published').length} Published Blog Post URLs
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <button type="button" onClick={handleCopySitemap} className="btn-outline" style={{ flexGrow: 1, padding: '0.65rem 1rem', fontSize: '0.82rem' }}>
                  Copy sitemap.xml
                </button>
                <button type="button" onClick={handleDownloadSitemap} className="btn-primary" style={{ flexGrow: 1, padding: '0.65rem 1rem', fontSize: '0.82rem' }}>
                  Download sitemap.xml
                </button>
              </div>
            </div>

            {/* BOX 3: ZERO-BACKEND AUTOMATED EMAIL DISPATCH (EMAILJS) */}
            <div className="glass-card" style={{ padding: '1.8rem', border: '1px solid var(--teal-light)', background: 'linear-gradient(135deg, rgba(29,158,117,0.06), rgba(26,26,24,0.7))' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={18} color="#5DCAA5" />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--offwhite)' }}>Automated Client Emailing (Zero Backend)</h3>
                </div>
                {emailSavedMsg && <span style={{ fontSize: '0.78rem', color: 'var(--teal-light)', fontWeight: '700' }}>{emailSavedMsg}</span>}
              </div>

              <p style={{ fontSize: '0.82rem', color: 'rgba(244,242,235,0.7)', lineHeight: '1.5', marginBottom: '1rem' }}>
                Connect your free <strong style={{ color: 'var(--teal-light)' }}>EmailJS</strong> account (200 free emails/mo) to automatically deliver brochure PDFs & lead alerts directly to client inboxes with <strong>₹0 server costs</strong>.
              </p>

              <form onSubmit={handleSaveEmailConfig}>
                <div style={{ marginBottom: '0.9rem' }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(244,242,235,0.85)', fontWeight: '600', marginBottom: '0.3rem' }}>
                    EmailJS Service ID
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. service_nexivo"
                    value={emailConfig.serviceId}
                    onChange={(e) => setEmailConfigState({ ...emailConfig, serviceId: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line-strong)', color: 'var(--offwhite)', fontSize: '0.84rem' }}
                  />
                </div>

                <div style={{ marginBottom: '0.9rem' }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(244,242,235,0.85)', fontWeight: '600', marginBottom: '0.3rem' }}>
                    EmailJS Template ID
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. template_brochure"
                    value={emailConfig.templateId}
                    onChange={(e) => setEmailConfigState({ ...emailConfig, templateId: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line-strong)', color: 'var(--offwhite)', fontSize: '0.84rem' }}
                  />
                </div>

                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(244,242,235,0.85)', fontWeight: '600', marginBottom: '0.3rem' }}>
                    EmailJS Public Key (User ID)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. user_9x8a7b6c5d4e..."
                    value={emailConfig.publicKey}
                    onChange={(e) => setEmailConfigState({ ...emailConfig, publicKey: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line-strong)', color: 'var(--offwhite)', fontSize: '0.84rem' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '0.65rem 1.3rem', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}>
                  <Save size={15} /> Save Email Credentials
                </button>
              </form>
            </div>

          </div>

          {/* SEARCH & FILTERS BAR */}
          <div className="admin-search-filter-bar">
            <div className="admin-search-input-wrap" style={{ position: 'relative', width: '320px' }}>
              <Search size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(244,242,235,0.4)' }} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', padding: '0.65rem 1rem 0.65rem 2.6rem', borderRadius: '999px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.86rem', outline: 'none' }}
              />
            </div>

            <div className="admin-filter-buttons">
              {['all', 'published', 'draft'].map((st) => {
                const isActive = filterStatus === st;
                let activeBorder = 'var(--teal-light)';
                let activeBg = 'rgba(29,158,117,0.2)';
                let activeColor = 'var(--teal-light)';

                if (st === 'published') {
                  activeBorder = '#25D366';
                  activeBg = 'rgba(37,211,102,0.2)';
                  activeColor = '#25D366';
                } else if (st === 'draft') {
                  activeBorder = '#ffd166';
                  activeBg = 'rgba(255,209,102,0.2)';
                  activeColor = '#ffd166';
                }

                return (
                  <button
                    key={st}
                    onClick={() => setFilterStatus(st)}
                    style={{
                      padding: '0.45rem 1rem',
                      borderRadius: '999px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      border: `1px solid ${isActive ? activeBorder : 'var(--line)'}`,
                      background: isActive ? activeBg : 'rgba(244,242,235,0.03)',
                      color: isActive ? activeColor : 'rgba(244,242,235,0.6)',
                      textTransform: 'capitalize',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {st}
                  </button>
                );
              })}
            </div>
          </div>

          {/* POSTS TABLE LIST */}
          <div className="glass-card admin-table-scroll" style={{ padding: '0', overflowX: 'auto', border: '1px solid var(--line)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: 'rgba(244,242,235,0.04)', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '1rem 1.2rem', color: 'rgba(244,242,235,0.6)', fontWeight: '700' }}>Article Title</th>
                  <th style={{ padding: '1rem 1.2rem', color: 'rgba(244,242,235,0.6)', fontWeight: '700' }}>Category</th>
                  <th style={{ padding: '1rem 1.2rem', color: 'rgba(244,242,235,0.6)', fontWeight: '700' }}>Status</th>
                  <th style={{ padding: '1rem 1.2rem', color: 'rgba(244,242,235,0.6)', fontWeight: '700' }}>Date</th>
                  <th style={{ padding: '1rem 1.2rem', color: 'rgba(244,242,235,0.6)', fontWeight: '700', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={{ padding: '3rem', textAlign: 'center', color: 'rgba(244,242,235,0.5)' }}>No articles found. Click "Create New Article" to start.</td>
                  </tr>
                ) : (
                  filteredPosts.map((p) => (
                    <tr key={p.id} style={{ borderBottom: '1px solid var(--line)' }}>
                      <td style={{ padding: '1rem 1.2rem', fontWeight: '600', color: 'var(--offwhite)' }}>
                        <div>{p.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(244,242,235,0.4)', fontFamily: 'monospace' }}>/blog/{p.slug}</div>
                      </td>
                      <td style={{ padding: '1rem 1.2rem', color: 'rgba(244,242,235,0.7)' }}>
                        <span style={{ fontSize: '0.78rem', padding: '0.2rem 0.6rem', borderRadius: '999px', background: 'rgba(244,242,235,0.06)', border: '1px solid var(--line)' }}>{p.category}</span>
                      </td>
                      <td style={{ padding: '1rem 1.2rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.65rem', borderRadius: '999px', background: p.status === 'published' ? 'rgba(37,211,102,0.15)' : 'rgba(255,209,102,0.15)', color: p.status === 'published' ? '#25D366' : '#ffd166', textTransform: 'capitalize' }}>
                          {p.status} {p.featured && '★'}
                        </span>
                      </td>
                      <td style={{ padding: '1rem 1.2rem', color: 'rgba(244,242,235,0.5)', fontSize: '0.8rem' }}>{formatDate(p.publishedAt)}</td>
                      <td style={{ padding: '1rem 1.2rem', textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '0.4rem' }}>
                          <Link to={`/blog/${p.slug}`} target="_blank" style={{ padding: '0.4rem 0.6rem', borderRadius: '6px', background: 'var(--glass)', border: '1px solid var(--line)', color: 'rgba(244,242,235,0.7)', textDecoration: 'none' }}>
                            <Eye size={14} />
                          </Link>
                          <button onClick={() => handleEditPost(p)} style={{ padding: '0.4rem 0.6rem', borderRadius: '6px', background: 'rgba(93,202,165,0.15)', border: '1px solid rgba(93,202,165,0.3)', color: 'var(--teal-light)', cursor: 'pointer' }}>
                            <Edit3 size={14} />
                          </button>
                          <button onClick={() => handleDeletePost(p.id, p.title)} style={{ padding: '0.4rem 0.6rem', borderRadius: '6px', background: 'rgba(220,53,69,0.15)', border: '1px solid rgba(220,53,69,0.3)', color: '#ff6b6b', cursor: 'pointer' }}>
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* VIEW 2: POST BLOCK EDITOR */}
      {viewMode === 'editor' && (
        <section style={{ paddingTop: '2.5rem' }}>
          <form onSubmit={handleSavePost}>
            <div className="admin-editor-layout">
              
              {/* LEFT COLUMN: MAIN EDITOR BLOCKS */}
              <div>
                <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem', border: '1px solid var(--line-strong)' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--offwhite)', marginBottom: '1.5rem' }}>Article Details</h3>

                  {/* TITLE */}
                  <div style={{ marginBottom: '1.4rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(244,242,235,0.8)', fontWeight: '600', marginBottom: '0.4rem' }}>Article Title *</label>
                    <input
                      type="text"
                      placeholder="e.g. Why Fast React Websites Outperform WordPress in 2026"
                      value={title}
                      onChange={handleTitleChange}
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line-strong)', color: 'var(--offwhite)', fontSize: '1.1rem', fontWeight: '700', outline: 'none' }}
                    />
                  </div>

                  {/* SLUG */}
                  <div style={{ marginBottom: '1.4rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(244,242,235,0.7)', fontWeight: '600', marginBottom: '0.4rem' }}>URL Slug</label>
                    <input
                      type="text"
                      placeholder="why-fast-react-websites-outperform-wordpress"
                      value={slug}
                      onChange={(e) => setSlug(slugify(e.target.value))}
                      style={{ width: '100%', padding: '0.65rem 1rem', borderRadius: '8px', background: 'rgba(244,242,235,0.04)', border: '1px solid var(--line)', color: 'var(--teal-light)', fontSize: '0.88rem', fontFamily: 'monospace' }}
                    />
                  </div>

                  {/* EXCERPT */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(244,242,235,0.8)', fontWeight: '600', marginBottom: '0.4rem' }}>Summary / Excerpt *</label>
                    <textarea
                      rows="3"
                      placeholder="Short engaging description for search engines and card preview..."
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.9rem', outline: 'none', resize: 'vertical' }}
                    />
                  </div>
                </div>

                {/* CONTENT BLOCK BUILDER */}
                <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--line-strong)', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--offwhite)' }}>Content Blocks</h3>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(244,242,235,0.5)' }}>{blocks.length} block(s)</span>
                  </div>

                  {/* BLOCKS LIST */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {blocks.map((block, idx) => (
                      <div key={block.id} style={{ padding: '1.2rem', borderRadius: '12px', background: 'rgba(244,242,235,0.03)', border: '1px solid var(--line)', position: 'relative' }}>
                        
                        {/* BLOCK HEADER CONTROLS */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--line)' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--teal-light)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            {block.type === 'heading' && <Heading size={13} />}
                            {block.type === 'text' && <Type size={13} />}
                            {block.type === 'quote' && <Quote size={13} />}
                            {block.type === 'list' && <ListIcon size={13} />}
                            {block.type === 'image' && <ImageIcon size={13} />}
                            {block.type === 'code' && <Code size={13} />}
                            Block {idx + 1}: {block.type}
                          </span>

                          <div style={{ display: 'flex', gap: '0.3rem' }}>
                            <button type="button" onClick={() => moveBlock(idx, -1)} disabled={idx === 0} style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'var(--glass)', border: '1px solid var(--line)', color: 'var(--offwhite)', cursor: 'pointer', opacity: idx === 0 ? 0.4 : 1 }}>↑</button>
                            <button type="button" onClick={() => moveBlock(idx, 1)} disabled={idx === blocks.length - 1} style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'var(--glass)', border: '1px solid var(--line)', color: 'var(--offwhite)', cursor: 'pointer', opacity: idx === blocks.length - 1 ? 0.4 : 1 }}>↓</button>
                            <button type="button" onClick={() => removeBlock(idx)} style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(220,53,69,0.15)', border: '1px solid rgba(220,53,69,0.3)', color: '#ff6b6b', cursor: 'pointer' }}><Trash2 size={13} /></button>
                          </div>
                        </div>

                        {/* BLOCK INPUT TYPES */}
                        {block.type === 'heading' && (
                          <div>
                            <select
                              value={block.level || 2}
                              onChange={(e) => updateBlock(idx, { level: Number(e.target.value) })}
                              style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', background: 'rgba(244,242,235,0.06)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.8rem', marginBottom: '0.6rem' }}
                            >
                              <option value={2} style={{ background: '#1a1a18' }}>H2 Heading</option>
                              <option value={3} style={{ background: '#1a1a18' }}>H3 Sub-heading</option>
                            </select>
                            <input
                              type="text"
                              placeholder="Enter section heading..."
                              value={block.text}
                              onChange={(e) => updateBlock(idx, { text: e.target.value })}
                              style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '1rem', fontWeight: '700' }}
                            />
                          </div>
                        )}

                        {block.type === 'text' && (
                          <textarea
                            rows="4"
                            placeholder="Write paragraph text..."
                            value={block.text}
                            onChange={(e) => updateBlock(idx, { text: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.92rem', lineHeight: '1.6', outline: 'none' }}
                          />
                        )}

                        {block.type === 'quote' && (
                          <textarea
                            rows="3"
                            placeholder="Enter callout quote text..."
                            value={block.text}
                            onChange={(e) => updateBlock(idx, { text: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem 0.9rem', borderRadius: '8px', background: 'rgba(29,158,117,0.08)', border: '1px solid var(--teal-light)', color: 'var(--offwhite)', fontSize: '0.95rem', fontStyle: 'italic' }}
                          />
                        )}

                        {block.type === 'list' && (
                          <div>
                            <p style={{ fontSize: '0.8rem', color: 'rgba(244,242,235,0.6)', marginBottom: '0.4rem' }}>Enter bullet points separated by new line:</p>
                            <textarea
                              rows="4"
                              placeholder="Point 1&#10;Point 2&#10;Point 3"
                              value={block.items ? block.items.join('\n') : ''}
                              onChange={(e) => updateBlock(idx, { items: e.target.value.split('\n').filter(Boolean) })}
                              style={{ width: '100%', padding: '0.75rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.9rem' }}
                            />
                          </div>
                        )}

                        {block.type === 'image' && (
                          <div>
                            <input
                              type="text"
                              placeholder="Image URL (e.g. https://images.unsplash.com/...)"
                              value={block.src || ''}
                              onChange={(e) => updateBlock(idx, { src: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.85rem', marginBottom: '0.6rem' }}
                            />
                            <input
                              type="text"
                              placeholder="Image Caption / Alt text..."
                              value={block.alt || ''}
                              onChange={(e) => updateBlock(idx, { alt: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'rgba(244,242,235,0.7)', fontSize: '0.82rem' }}
                            />
                          </div>
                        )}

                        {block.type === 'code' && (
                          <textarea
                            rows="4"
                            placeholder="Paste code snippet..."
                            value={block.text}
                            onChange={(e) => updateBlock(idx, { text: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem 0.9rem', borderRadius: '8px', background: '#121615', border: '1px solid var(--line)', color: '#5DCAA5', fontSize: '0.85rem', fontFamily: 'monospace' }}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* ADD BLOCK BUTTONS */}
                  <div className="admin-block-btn-group" style={{ marginTop: '1.8rem' }}>
                    <button type="button" onClick={() => addBlock('heading')} className="btn-outline" style={{ padding: '0.5rem 0.9rem', fontSize: '0.8rem' }}><Heading size={14} /> + Heading</button>
                    <button type="button" onClick={() => addBlock('text')} className="btn-outline" style={{ padding: '0.5rem 0.9rem', fontSize: '0.8rem' }}><Type size={14} /> + Text Paragraph</button>
                    <button type="button" onClick={() => addBlock('quote')} className="btn-outline" style={{ padding: '0.5rem 0.9rem', fontSize: '0.8rem' }}><Quote size={14} /> + Quote</button>
                    <button type="button" onClick={() => addBlock('list')} className="btn-outline" style={{ padding: '0.5rem 0.9rem', fontSize: '0.8rem' }}><ListIcon size={14} /> + Bullet List</button>
                    <button type="button" onClick={() => addBlock('image')} className="btn-outline" style={{ padding: '0.5rem 0.9rem', fontSize: '0.8rem' }}><ImageIcon size={14} /> + Image</button>
                    <button type="button" onClick={() => addBlock('code')} className="btn-outline" style={{ padding: '0.5rem 0.9rem', fontSize: '0.8rem' }}><Code size={14} /> + Code</button>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: PUBLISHING & METADATA SIDEBAR */}
              <div>
                {/* ACTION BUTTONS */}
                <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.8rem', border: '1px solid var(--teal-light)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--offwhite)', marginBottom: '1rem' }}>Publish Settings</h4>
                  
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(244,242,235,0.7)', fontWeight: '600', marginBottom: '0.4rem' }}>Post Status</label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      style={{ width: '100%', padding: '0.65rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.06)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.88rem' }}
                    >
                      <option value="published" style={{ background: '#1a1a18' }}>Published (Live on site)</option>
                      <option value="draft" style={{ background: '#1a1a18' }}>Draft (Hidden)</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <input
                      type="checkbox"
                      id="featuredCheck"
                      checked={featured}
                      onChange={(e) => setFeatured(e.target.checked)}
                      style={{ width: '16px', height: '16px', accentColor: 'var(--teal-light)' }}
                    />
                    <label htmlFor="featuredCheck" style={{ fontSize: '0.85rem', color: 'var(--offwhite)', cursor: 'pointer' }}>Pin to Featured Hero Banner</label>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Save size={16} /> {editingId ? 'Update & Save Article' : 'Publish Article Now'}
                  </button>
                </div>

                {/* CATEGORY & AUTHOR */}
                <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.8rem', border: '1px solid var(--line)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--offwhite)', marginBottom: '1rem' }}>Categorization & Author</h4>
                  
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(244,242,235,0.7)', fontWeight: '600', marginBottom: '0.4rem' }}>Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      style={{ width: '100%', padding: '0.65rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.06)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.88rem' }}
                    >
                      <option value="Website Development" style={{ background: '#1a1a18' }}>Website Development</option>
                      <option value="Digital Marketing" style={{ background: '#1a1a18' }}>Digital Marketing</option>
                      <option value="SEO" style={{ background: '#1a1a18' }}>SEO</option>
                      <option value="Google & Meta Ads" style={{ background: '#1a1a18' }}>Google & Meta Ads</option>
                      <option value="Growth Strategy" style={{ background: '#1a1a18' }}>Growth Strategy</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(244,242,235,0.7)', fontWeight: '600', marginBottom: '0.4rem' }}>Author Name</label>
                    <select
                      value={author}
                      onChange={(e) => {
                        const nameVal = e.target.value;
                        setAuthor(nameVal);
                        if (nameVal === 'Jay Parmar') {
                          setAuthorRole('Founder & Creative Director');
                        } else {
                          setAuthorRole('Co-Founder & Technical Lead');
                        }
                      }}
                      style={{ width: '100%', padding: '0.65rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.06)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.88rem' }}
                    >
                      <option value="Saurav Vaghela" style={{ background: '#1a1a18' }}>Saurav Vaghela</option>
                      <option value="Jay Parmar" style={{ background: '#1a1a18' }}>Jay Parmar</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(244,242,235,0.7)', fontWeight: '600', marginBottom: '0.4rem' }}>Author Title / Role</label>
                    <select
                      value={authorRole}
                      onChange={(e) => setAuthorRole(e.target.value)}
                      style={{ width: '100%', padding: '0.65rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.06)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.88rem' }}
                    >
                      <option value="Co-Founder & Technical Lead" style={{ background: '#1a1a18' }}>Co-Founder & Technical Lead</option>
                      <option value="Founder & Creative Director" style={{ background: '#1a1a18' }}>Founder & Creative Director</option>
                      <option value="Growth & SEO Strategist" style={{ background: '#1a1a18' }}>Growth & SEO Strategist</option>
                    </select>
                  </div>
                </div>

                {/* FEATURED IMAGE */}
                <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.8rem', border: '1px solid var(--line)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--offwhite)', marginBottom: '1rem' }}>Featured Cover Image</h4>
                  <input
                    type="text"
                    placeholder="Image URL..."
                    value={featuredImage}
                    onChange={(e) => setFeaturedImage(e.target.value)}
                    style={{ width: '100%', padding: '0.6rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.82rem', marginBottom: '0.8rem' }}
                  />

                  {featuredImage && (
                    <div style={{ height: '130px', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--line)' }}>
                      <img src={featuredImage} alt="Cover preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                </div>

                {/* SEO OPTIMIZATION FIELDS */}
                <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--line)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--offwhite)', marginBottom: '1rem' }}>SEO Settings</h4>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(244,242,235,0.7)', fontWeight: '600', marginBottom: '0.3rem' }}>Meta Title</label>
                    <input
                      type="text"
                      placeholder="SEO Page Title"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      style={{ width: '100%', padding: '0.55rem 0.8rem', borderRadius: '6px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.82rem' }}
                    />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(244,242,235,0.7)', fontWeight: '600', marginBottom: '0.3rem' }}>Focus Keyword</label>
                    <input
                      type="text"
                      placeholder="e.g. react website speed"
                      value={focusKeyword}
                      onChange={(e) => setFocusKeyword(e.target.value)}
                      style={{ width: '100%', padding: '0.55rem 0.8rem', borderRadius: '6px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.82rem' }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </form>
        </section>
      )}
    </main>
  );
}
