import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, Key, LogOut, Plus, Edit3, Trash2, Eye, Check, X, 
  Search, ArrowLeft, Image as ImageIcon, Heading, Type, Quote, 
  List as ListIcon, Code, Sparkles, LayoutDashboard, Globe, Save
} from 'lucide-react';
import { 
  getStoredPosts, savePost, deletePost, checkAdminAuth, setAdminAuth, 
  getAdminPassword, setAdminPassword, formatDate, slugify 
} from '../utils/blogStorage';

export default function Admin() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [passSuccess, setPassSuccess] = useState('');

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
  const [authorRole, setAuthorRole] = useState('Founder & Tech Lead');
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
  }, []);

  const showToast = (type, text) => {
    setNotification({ type, text });
    setTimeout(() => setNotification(null), 3500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPassword = getAdminPassword();
    if (passwordInput === correctPassword) {
      setAdminAuth(true);
      setIsAuthenticated(true);
      setLoginError('');
      showToast('success', 'Logged in successfully to Nexivo Admin Dashboard!');
    } else {
      setLoginError('Incorrect admin password. Please try again.');
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

          {loginError && (
            <div style={{ padding: '0.8rem 1rem', borderRadius: '10px', background: 'rgba(220,53,69,0.15)', border: '1px solid rgba(220,53,69,0.3)', color: '#ff6b6b', fontSize: '0.82rem', marginBottom: '1.2rem', textAlign: 'center' }}>
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.4rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(244,242,235,0.8)', fontWeight: '600', marginBottom: '0.5rem' }}>Admin Password</label>
              <input
                type="password"
                placeholder="Enter password..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line-strong)', color: 'var(--offwhite)', fontSize: '0.95rem', outline: 'none' }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Authenticate & Access Portal <Key size={16} />
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
      <section style={{ paddingTop: '8.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', padding: '0.2rem 0.65rem', borderRadius: '999px', background: 'rgba(93,202,165,0.15)', color: 'var(--teal-light)' }}>
                Nexivo Content CMS
              </span>
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--offwhite)' }}>Blog Admin Dashboard</h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
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
            <button onClick={() => setShowPasswordChange(!showPasswordChange)} style={{ padding: '0.65rem 0.9rem', borderRadius: '999px', background: 'var(--glass)', border: '1px solid var(--line)', color: 'var(--offwhite)', cursor: 'pointer' }}>
              <Key size={16} />
            </button>
            <button onClick={handleLogout} style={{ padding: '0.65rem 0.9rem', borderRadius: '999px', background: 'rgba(220,53,69,0.15)', border: '1px solid rgba(220,53,69,0.3)', color: '#ff6b6b', cursor: 'pointer' }}>
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* CHANGE PASSWORD PANEL */}
        {showPasswordChange && (
          <div className="glass-card" style={{ marginTop: '1.5rem', padding: '1.5rem', border: '1px solid var(--line-strong)' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--offwhite)', marginBottom: '0.8rem' }}>Change Admin Password</h4>
            {passSuccess && <p style={{ fontSize: '0.82rem', color: 'var(--teal-light)', marginBottom: '0.6rem' }}>{passSuccess}</p>}
            <form onSubmit={handleChangePassword} style={{ display: 'flex', gap: '0.8rem', maxWidth: '420px' }}>
              <input
                type="password"
                placeholder="Enter new password..."
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{ flexGrow: 1, padding: '0.6rem 1rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.88rem' }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '0.6rem 1.2rem' }}>Save Password</button>
            </form>
          </div>
        )}
      </section>

      {/* VIEW 1: DASHBOARD POSTS LIST */}
      {viewMode === 'list' && (
        <section style={{ paddingTop: '2.5rem' }}>
          {/* STATS OVERVIEW CARDS */}
          <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
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
              <div style={{ fontSize: '0.78rem', color: 'var(--sky)', textTransform: 'uppercase', fontWeight: '700' }}>Featured</div>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--sky)', marginTop: '0.4rem' }}>{posts.filter(p => p.featured).length}</div>
            </div>
          </div>

          {/* SEARCH & FILTERS BAR */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.8rem' }}>
            <div style={{ position: 'relative', width: '320px' }}>
              <Search size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(244,242,235,0.4)' }} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', padding: '0.65rem 1rem 0.65rem 2.6rem', borderRadius: '999px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.86rem', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['all', 'published', 'draft'].map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  style={{ padding: '0.45rem 0.9rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer', border: '1px solid', borderColor: filterStatus === st ? 'var(--teal-light)' : 'var(--line)', background: filterStatus === st ? 'rgba(29,158,117,0.15)' : 'var(--glass)', color: filterStatus === st ? 'var(--teal-light)' : 'rgba(244,242,235,0.6)', textTransform: 'capitalize' }}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* POSTS TABLE LIST */}
          <div className="glass-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--line)' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 2.2fr) minmax(280px, 1fr)', gap: '2rem' }}>
              
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
                  <div style={{ marginTop: '1.8rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
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
                    <input
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      style={{ width: '100%', padding: '0.6rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.85rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(244,242,235,0.7)', fontWeight: '600', marginBottom: '0.4rem' }}>Author Title / Role</label>
                    <input
                      type="text"
                      value={authorRole}
                      onChange={(e) => setAuthorRole(e.target.value)}
                      style={{ width: '100%', padding: '0.6rem 0.9rem', borderRadius: '8px', background: 'rgba(244,242,235,0.05)', border: '1px solid var(--line)', color: 'var(--offwhite)', fontSize: '0.85rem' }}
                    />
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
