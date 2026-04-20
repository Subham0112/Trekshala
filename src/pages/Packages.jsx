// src/pages/Packages.jsx
import { useState, useEffect, useRef } from 'react';
import { treks } from '../data/treks';
import React from 'react';
import {
  FaMapMarkerAlt, FaCartPlus, FaInfoCircle,
  FaChevronLeft, FaChevronRight, FaShieldAlt, FaAward, FaHeart, FaCheck,
} from 'react-icons/fa';
import { GiHiking, GiMountainRoad } from 'react-icons/gi';
import { BsCart, BsCartCheck, BsSearch } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { FaMountain } from 'react-icons/fa';

const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
`;

const STYLES = `
  * { box-sizing: border-box; }
  .nt-font-display { font-family: 'Playfair Display', Georgia, serif; }
  .nt-font-body { font-family: 'DM Sans', system-ui, sans-serif; }

  .nt-hero-text {
    background: linear-gradient(135deg, #bbf7d0 0%, #86efac 40%, #4ade80 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .nt-pkg-card {
    transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.35s ease;
    border: 1px solid #f1f5f9;
  }
  .nt-pkg-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px rgba(0,0,0,0.12);
    border-color: #bbf7d0;
  }
  .nt-pkg-card:hover .nt-pkg-img { transform: scale(1.06); }
  .nt-pkg-img { transition: transform 0.6s ease; }

  .nt-filter-btn {
    transition: all 0.22s ease;
    font-family: 'DM Sans', system-ui, sans-serif;
    cursor: pointer;
    border: 2px solid #e2e8f0;
    background: white;
    color: #475569;
    padding: 9px 20px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }
  .nt-filter-btn.active {
    background: linear-gradient(135deg, #15803d, #166534);
    color: white;
    border-color: transparent;
    box-shadow: 0 4px 16px rgba(21,128,61,0.35);
  }
  .nt-filter-btn:not(.active):hover {
    border-color: #15803d;
    color: #15803d;
    background: #f0fdf4;
  }

  .nt-scroll-reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .nt-scroll-reveal.visible { opacity: 1; transform: translateY(0); }

  .nt-add-btn {
    background: linear-gradient(135deg, #15803d, #166534);
    transition: all 0.25s ease;
    color: white;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', system-ui, sans-serif;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }
  .nt-add-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(21,128,61,0.35); }
  .nt-add-btn.in-cart { background: linear-gradient(135deg, #166534, #052e16); }

  .nt-details-btn {
    transition: all 0.25s ease;
    border: 1.5px solid #15803d;
    color: #15803d;
    background: transparent;
    cursor: pointer;
    font-family: 'DM Sans', system-ui, sans-serif;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    text-decoration: none;
  }
  .nt-details-btn:hover { background: #15803d; color: white; }

  .nt-page-btn {
    transition: all 0.2s ease;
    font-family: 'DM Sans', system-ui, sans-serif;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border: 1.5px solid #e2e8f0;
    background: white;
    color: #475569;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
  }
  .nt-page-btn.active {
    background: linear-gradient(135deg, #15803d, #166534);
    color: white;
    border-color: transparent;
    box-shadow: 0 4px 12px rgba(21,128,61,0.3);
  }
  .nt-page-btn:not(.active):hover { background: #f0fdf4; border-color: #15803d; color: #15803d; }

  .nt-cart-fab {
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: linear-gradient(135deg, #15803d, #166534);
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 28px rgba(21,128,61,0.45);
    transition: all 0.3s ease;
    z-index: 40;
  }
  .nt-cart-fab:hover { transform: scale(1.1); box-shadow: 0 12px 36px rgba(21,128,61,0.55); }

  .nt-search-input {
    width: 100%;
    padding: 12px 16px 12px 44px;
    border-radius: 12px;
    border: 1.5px solid #e2e8f0;
    font-size: 14px;
    color: #374151;
    background: #f8fafc;
    transition: all 0.2s ease;
    font-family: 'DM Sans', system-ui, sans-serif;
    outline: none;
  }
  .nt-search-input:focus { border-color: #15803d; box-shadow: 0 0 0 3px rgba(21,128,61,0.1); background: white; }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to { opacity: 1; transform: scale(1); }
  }
  .nt-scale-in { animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

  @media (max-width: 768px) {
    .nt-pkg-grid { grid-template-columns: 1fr !important; }
    .nt-why-grid { grid-template-columns: 1fr !important; }
    .nt-controls-row { flex-direction: column !important; }
  }
  @media (min-width: 640px) and (max-width: 1023px) {
    .nt-pkg-grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
`;

const DIFFICULTY = {
  moderate: { bg: '#dbeafe', text: '#1d4ed8' },
  challenging: { bg: '#fef3c7', text: '#92400e' },
};

export default function Packages() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [alert, setAlert] = useState({ show: false, title: '', message: '', type: 'success' });
  const revealRefs = useRef([]);
  const PER_PAGE = 6;

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = el => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  // Reset page when filter/sort/search changes
  useEffect(() => { setPage(1); }, [filter, sort, search]);

  const getFiltered = () => {
    let list = [...treks];
    if (search.trim()) {
      const t = search.toLowerCase();
      list = list.filter(x =>
        x.name.toLowerCase().includes(t) ||
        x.location.toLowerCase().includes(t) ||
        x.description.toLowerCase().includes(t) ||
        String(x.duration).includes(t)
      );
    }
    if (filter !== 'all') list = list.filter(x => x.category === filter);
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'duration-asc') list.sort((a, b) => a.duration - b.duration);
    if (sort === 'duration-desc') list.sort((a, b) => b.duration - a.duration);
    return list;
  };

  const filtered = getFiltered();
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const addToCart = trek => {
    if (cart && cart.name !== trek.name) {
      setAlert({ show: true, title: 'Cart Limit', message: 'You can only book one package at a time. Remove the current item first.', type: 'error' });
      return;
    }
    setCart({ name: trek.name, price: trek.price, duration: trek.duration, location: trek.location });
    setAlert({ show: true, title: 'Added to Cart!', message: `${trek.name} has been added to your cart.`, type: 'success' });
  };

  const whyUs = [
    { icon: <FaShieldAlt size={28} />, title: 'Safety First', desc: 'Certified guides, emergency protocols, and comprehensive travel insurance.' },
    { icon: <FaAward size={28} />, title: 'Expert Guides', desc: 'Local experts with 10+ years of Himalayan trekking experience.' },
    { icon: <FaHeart size={28} />, title: 'Sustainable Tourism', desc: 'Eco-friendly practices that support local communities and protect nature.' },
  ];

  return (
    <div className="nt-font-body" style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <style>{FONTS}{STYLES}</style>

      {/* ── HERO ── */}
      <header
        style={{
          position: 'relative',
          minHeight: '62vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          overflow: 'hidden',
          backgroundImage: `url('src/assets/img/image.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '68px',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.65) 60%, rgba(5,46,22,0.88) 100%)',
        }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '48px 24px', maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#4ade80', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
            ALL HIMALAYAN ROUTES
          </p>
          <h1
            className="nt-font-display nt-hero-text"
            style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5rem)', fontWeight: 900, lineHeight: 1.08, margin: '0 0 16px' }}
          >
            Our Trekking <em>Packages</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto 28px' }}>
            Find your perfect Himalayan journey — from gentle valley walks to legendary high-altitude expeditions.
          </p>
          <a
            href="#treks"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'linear-gradient(135deg, #15803d, #16a34a)',
              color: 'white', padding: '14px 28px', borderRadius: '100px',
              fontWeight: 600, fontSize: '15px', textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(21,128,61,0.4)',
            }}
          >
            <GiHiking size={18} />
            Explore Adventures
            <BsArrowRight />
          </a>
        </div>
      </header>

      {/* ── PACKAGES SECTION ── */}
      <section id="treks" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Heading */}
          <div ref={addRef} className="nt-scroll-reveal" style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 className="nt-font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>
              Choose Your <em>Adventure</em>
            </h2>
            <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.65 }}>
              Our most beloved trekking routes, curated for every explorer.
            </p>
          </div>

          {/* Search + Sort */}
          <div
            ref={addRef}
            className="nt-scroll-reveal nt-controls-row"
            style={{
              background: 'white',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '16px 20px',
              marginBottom: '16px',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ position: 'relative', flex: 1 }}>
              <BsSearch style={{
                position: 'absolute', left: '14px', top: '50%',
                transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '15px',
              }} />
              <input
                type="text"
                placeholder="Search by name, location, or duration..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="nt-search-input"
              />
            </div>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              style={{
                padding: '11px 16px', borderRadius: '12px', border: '1.5px solid #e2e8f0',
                color: '#374151', background: 'white', fontSize: '14px',
                fontFamily: 'DM Sans, system-ui, sans-serif', cursor: 'pointer',
                outline: 'none', minWidth: '180px',
              }}
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="duration-asc">Duration: Short → Long</option>
              <option value="duration-desc">Duration: Long → Short</option>
            </select>
          </div>

          {/* Filter Pills */}
          <div ref={addRef} className="nt-scroll-reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px', alignItems: 'center' }}>
            {[
              { key: 'all', label: 'All Treks', icon: <GiMountainRoad /> },
              { key: 'moderate', label: 'Moderate', icon: <GiHiking /> },
              { key: 'challenging', label: 'Challenging', icon: <FaMountain /> },
            ].map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`nt-filter-btn ${filter === f.key ? 'active' : ''}`}
              >
                {f.icon} {f.label}
              </button>
            ))}
            <span style={{ marginLeft: 'auto', color: '#64748b', fontSize: '14px', alignSelf: 'center' }}>
              <strong style={{ color: '#15803d' }}>{filtered.length}</strong> package{filtered.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {/* Cards Grid */}
          {paginated.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 24px' }}>
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                background: '#f1f5f9', display: 'flex', alignItems: 'center',
                justifyContent: 'center', margin: '0 auto 20px',
              }}>
                <BsCart size={32} color="#cbd5e1" />
              </div>
              <h3 className="nt-font-display" style={{ fontSize: '22px', fontWeight: 700, color: '#475569', margin: '0 0 8px' }}>No treks found</h3>
              <p style={{ color: '#94a3b8', margin: 0 }}>Try adjusting your search or filter.</p>
            </div>
          ) : (
            <div
              className="nt-pkg-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
            >
              {paginated.map((trek, idx) => {
                const inCart = cart?.name === trek.name;
                const diff = DIFFICULTY[trek.category] || { bg: '#f1f5f9', text: '#475569' };

                return (
                  <div
                    key={trek.name}
                    ref={addRef}
                    className="nt-scroll-reveal nt-pkg-card"
                    style={{
                      background: 'white',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      transitionDelay: `${idx * 60}ms`,
                    }}
                  >
                    {/* Image */}
                    <div style={{ position: 'relative', overflow: 'hidden', height: '210px' }}>
                      <img
                        src={trek.image}
                        alt={trek.name}
                        className="nt-pkg-img"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        loading="lazy"
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5) 100%)' }} />
                      {trek.featured && (
                        <span style={{
                          position: 'absolute', top: '12px', left: '12px',
                          background: 'linear-gradient(135deg, #d97706, #f59e0b)',
                          color: 'white', fontSize: '10px', fontWeight: 700,
                          padding: '4px 11px', borderRadius: '100px', letterSpacing: '0.5px',
                        }}>★ Featured</span>
                      )}
                      <span style={{
                        position: 'absolute', top: '12px', right: '12px',
                        background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
                        color: 'white', fontSize: '12px', padding: '4px 11px', borderRadius: '100px',
                      }}>{trek.duration} Days</span>
                    </div>

                    {/* Body */}
                    <div style={{ padding: '22px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                        <h3
                          className="nt-font-display"
                          style={{ flex: 1, fontSize: '18px', fontWeight: 700, color: '#0f172a', lineHeight: 1.3, margin: 0 }}
                        >
                          {trek.name}
                        </h3>
                        <span style={{
                          flexShrink: 0,
                          background: diff.bg, color: diff.text,
                          padding: '4px 10px', borderRadius: '100px',
                          fontSize: '11px', fontWeight: 600,
                        }}>
                          {trek.category.charAt(0).toUpperCase() + trek.category.slice(1)}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#64748b', fontSize: '13px', marginBottom: '10px' }}>
                        <FaMapMarkerAlt color="#15803d" size={12} />
                        {trek.location}, Nepal
                      </div>

                      <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.65, margin: '0 0 18px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {trek.description}
                      </p>

                      <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '14px' }}>
                          <div>
                            <p style={{ fontSize: '11px', color: '#94a3b8', margin: '0 0 2px' }}>From</p>
                            <p className="nt-font-display" style={{ fontSize: '22px', fontWeight: 700, color: '#15803d', margin: 0 }}>
                              Rs. {trek.price.toLocaleString()}
                            </p>
                            <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>per person</p>
                          </div>
                          {inCart && (
                            <span style={{
                              display: 'flex', alignItems: 'center', gap: '5px',
                              color: '#15803d', fontSize: '12px', fontWeight: 600,
                              background: '#f0fdf4', padding: '6px 12px', borderRadius: '100px',
                              border: '1px solid #bbf7d0',
                            }}>
                              <FaCheck size={10} /> In Cart
                            </span>
                          )}
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button
                            onClick={() => addToCart(trek)}
                            className={`nt-add-btn ${inCart ? 'in-cart' : ''}`}
                            style={{ flex: 1, padding: '10px', borderRadius: '12px', fontSize: '13px' }}
                          >
                            <FaCartPlus size={14} />
                            {inCart ? 'In Cart' : 'Add to Cart'}
                          </button>
                          <a
                            href={trek.link || '#'}
                            className="nt-details-btn"
                            style={{ flex: 1, padding: '10px', borderRadius: '12px', fontSize: '13px' }}
                          >
                            <FaInfoCircle size={14} />
                            Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div ref={addRef} className="nt-scroll-reveal" style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {page > 1 && (
                <button className="nt-page-btn" onClick={() => setPage(p => p - 1)}>
                  <FaChevronLeft size={12} />
                </button>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button key={p} className={`nt-page-btn ${p === page ? 'active' : ''}`} onClick={() => setPage(p)}>
                  {p}
                </button>
              ))}
              {page < totalPages && (
                <button className="nt-page-btn" onClick={() => setPage(p => p + 1)}>
                  <FaChevronRight size={12} />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: '64px 24px', background: 'linear-gradient(135deg, #f0fdf4, #ffffff)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div ref={addRef} className="nt-scroll-reveal" style={{ textAlign: 'center', marginBottom: '44px' }}>
            <p style={{ color: '#15803d', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
              OUR PROMISE
            </p>
            <h2 className="nt-font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#0f172a', margin: 0 }}>
              Why Choose <em>Nepal Treks?</em>
            </h2>
          </div>

          <div className="nt-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                ref={addRef}
                className="nt-scroll-reveal nt-pkg-card"
                style={{
                  padding: '32px',
                  borderRadius: '20px',
                  background: 'white',
                  textAlign: 'center',
                  transitionDelay: `${i * 100}ms`,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                }}
              >
                <div style={{
                  width: '72px', height: '72px',
                  borderRadius: '18px',
                  background: '#dcfce7',
                  color: '#15803d',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  transition: 'all 0.3s ease',
                }}>
                  {item.icon}
                </div>
                <h3 className="nt-font-display" style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOATING CART ── */}
      <button className="nt-cart-fab" onClick={() => setCartOpen(true)}>
        <BsCart size={22} />
        {cart && (
          <span style={{
            position: 'absolute', top: '-6px', right: '-6px',
            width: '22px', height: '22px', borderRadius: '50%',
            background: '#ef4444', color: 'white',
            fontSize: '11px', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}>1</span>
        )}
      </button>

      {/* ── CART MODAL ── */}
      {cartOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(4px)', zIndex: 50,
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
          }}
          onClick={() => setCartOpen(false)}
        >
          <div
            className="nt-scale-in"
            style={{
              background: 'white', borderRadius: '24px',
              padding: '32px', maxWidth: '420px', width: '100%',
              boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 className="nt-font-display" style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '12px',
                  background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <BsCartCheck size={18} color="#15803d" />
                </div>
                Your Cart
              </h3>
              <button
                onClick={() => setCartOpen(false)}
                style={{
                  width: '34px', height: '34px', borderRadius: '10px',
                  background: '#f1f5f9', border: 'none', cursor: 'pointer',
                  fontSize: '18px', color: '#64748b', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}
              >✕</button>
            </div>

            {cart ? (
              <div style={{ padding: '18px', borderRadius: '16px', background: '#f0fdf4', border: '1px solid #bbf7d0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <div>
                    <p style={{ fontWeight: 700, color: '#0f172a', fontSize: '16px', margin: '0 0 6px' }}>{cart.name}</p>
                    <p style={{ color: '#64748b', fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FaMapMarkerAlt color="#15803d" size={11} /> {cart.location}, Nepal · {cart.duration} Days
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p className="nt-font-display" style={{ fontSize: '20px', fontWeight: 700, color: '#15803d', margin: '0 0 6px' }}>
                      Rs. {cart.price.toLocaleString()}
                    </p>
                    <button onClick={() => setCart(null)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px' }}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: '#f1f5f9', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', margin: '0 auto 14px',
                }}>
                  <BsCart size={28} color="#cbd5e1" />
                </div>
                <p style={{ color: '#64748b', fontSize: '16px', margin: 0 }}>Your cart is empty</p>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginBottom: '18px' }}>
              <span style={{ color: '#475569', fontWeight: 600 }}>Total</span>
              <span className="nt-font-display" style={{ fontSize: '22px', fontWeight: 700, color: '#15803d' }}>
                Rs. {cart ? cart.price.toLocaleString() : '0'}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {cart && (
                <button
                  onClick={() => { setCart(null); setCartOpen(false); }}
                  style={{
                    flex: 1, padding: '12px', borderRadius: '14px',
                    background: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca',
                    cursor: 'pointer', fontWeight: 600, fontSize: '14px',
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                  }}
                >
                  Clear Cart
                </button>
              )}
              <button
                onClick={() => setCartOpen(false)}
                style={{
                  flex: 1, padding: '12px', borderRadius: '14px',
                  background: 'linear-gradient(135deg, #15803d, #166534)',
                  color: 'white', border: 'none', cursor: 'pointer',
                  fontWeight: 600, fontSize: '14px',
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                }}
              >
                {cart ? 'Checkout' : 'Continue Exploring'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── ALERT MODAL ── */}
      {alert.show && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(4px)', zIndex: 50,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
        }}>
          <div
            className="nt-scale-in"
            style={{
              background: 'white', borderRadius: '24px',
              padding: '36px 28px', maxWidth: '360px', width: '100%',
              textAlign: 'center', boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
            }}
          >
            <div style={{
              width: '72px', height: '72px', borderRadius: '18px',
              background: alert.type === 'error' ? '#fef2f2' : '#dcfce7',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              {alert.type === 'error'
                ? <FaMountain size={28} color="#ef4444" />
                : <FaCheck size={28} color="#15803d" />
              }
            </div>
            <h3 className="nt-font-display" style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>
              {alert.title}
            </h3>
            <p style={{ color: '#64748b', lineHeight: 1.6, margin: '0 0 24px' }}>{alert.message}</p>
            <button
              onClick={() => setAlert({ show: false })}
              style={{
                width: '100%', padding: '13px', borderRadius: '14px',
                background: alert.type === 'error'
                  ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                  : 'linear-gradient(135deg, #15803d, #166534)',
                color: 'white', border: 'none', cursor: 'pointer',
                fontWeight: 600, fontSize: '15px',
                fontFamily: 'DM Sans, system-ui, sans-serif',
              }}
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </div>
  );
}