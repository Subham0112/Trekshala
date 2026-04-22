// src/pages/Packages.jsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { treks } from '../data/treks';
import React from 'react';
import {
  FaMapMarkerAlt, FaCartPlus, FaInfoCircle,
  FaChevronLeft, FaChevronRight, FaShieldAlt, FaAward, FaHeart, FaCheck, FaClock, FaMountain,
} from 'react-icons/fa';
import { GiHiking, GiMountainRoad } from 'react-icons/gi';
import { BsCart, BsCartCheck, BsSearch, BsXCircle, BsArrowRight } from 'react-icons/bs';
import '../assets/css/theme.css';

const DIFFICULTY = {
  moderate:    { bg: 'bg-sky-50',    text: 'text-sky-700',    border: 'border-sky-200'    },
  challenging: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
};

export default function Packages() {
  const [page,     setPage]     = useState(1);
  const [filter,   setFilter]   = useState('all');
  const [sort,     setSort]     = useState('default');
  const [search,   setSearch]   = useState('');
  const [cart,     setCart]     = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [alert,    setAlert]    = useState({ show: false, title: '', message: '', type: 'success' });
  const [gridKey,  setGridKey]  = useState(0);

  const revealRefs = useRef([]);
  const PER_PAGE = 6;

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  useEffect(() => {
    revealRefs.current = [];
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.06 }
    );
    const tid = setTimeout(() => { revealRefs.current.forEach(el => el && observer.observe(el)); }, 30);
    return () => { clearTimeout(tid); observer.disconnect(); };
  }, [gridKey, page]);

  const addRef = useCallback(el => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  }, []);

  useEffect(() => { setPage(1); setGridKey(k => k + 1); }, [filter, sort, search]);

  const getFiltered = () => {
    let list = [...treks];
    if (search.trim()) {
      const t = search.toLowerCase();
      list = list.filter(x => x.name.toLowerCase().includes(t) || x.location.toLowerCase().includes(t) || x.description.toLowerCase().includes(t) || String(x.duration).includes(t));
    }
    if (filter !== 'all') list = list.filter(x => x.category === filter);
    if (sort === 'price-asc')     list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc')    list.sort((a, b) => b.price - a.price);
    if (sort === 'duration-asc')  list.sort((a, b) => a.duration - b.duration);
    if (sort === 'duration-desc') list.sort((a, b) => b.duration - a.duration);
    return list;
  };

  const filtered   = getFiltered();
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const addToCart = trek => {
    if (cart && cart.name !== trek.name) {
      setAlert({ show: true, title: 'Cart Limit', message: 'You can only book one package at a time. Remove the current item first.', type: 'error' });
      return;
    }
    setCart({ name: trek.name, price: trek.price, duration: trek.duration, location: trek.location, img: trek.image });
    setAlert({ show: true, title: 'Added to Cart!', message: `${trek.name} has been added to your cart.`, type: 'success' });
  };

  const whyUs = [
    { icon: <FaShieldAlt size={22} />, title: 'Safety First',       desc: 'Certified guides, emergency protocols, and comprehensive travel insurance on every trek.' },
    { icon: <FaAward     size={22} />, title: 'Expert Guides',      desc: 'Local experts with 10+ years of Himalayan experience and deep cultural knowledge.' },
    { icon: <FaHeart     size={22} />, title: 'Sustainable Tourism', desc: `Eco-friendly practices supporting local communities and protecting Nepal's nature.` },
  ];

  const filterBtns = [
    { key: 'all',         label: 'All Treks',  icon: <GiMountainRoad size={14} /> },
    { key: 'moderate',    label: 'Moderate',    icon: <GiHiking      size={14} /> },
    { key: 'challenging', label: 'Challenging', icon: <FaMountain    size={13} /> },
  ];

  return (
    <div className="ts-page min-h-screen" style={{ background: '#f0f9ff' }}>

      {/* ══ HERO ══ */}
      <header className="relative flex items-center justify-center text-center text-white overflow-hidden"
        style={{ minHeight: '58vh', backgroundImage: `url('src/assets/img/image.png')`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '68px' }}>
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(12,26,58,0.30) 0%, rgba(14,165,233,0.24) 50%, rgba(12,26,58,0.90) 100%)' }} />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #38bdf8, transparent 70%)', filter: 'blur(48px)' }} />
        <div className="ts-noise absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
          <p className="ts-eyebrow text-sky-300 mb-3">All Himalayan Routes</p>
          <h1 className="ts-display ts-hero-text leading-tight mb-4 ts-anim-2"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 700, letterSpacing: '-0.01em' }}>
            Our Trekking <em>Packages</em>
          </h1>
          <p className="text-white/65 mb-7 leading-loose text-sm max-w-md mx-auto ts-anim-3">
            Find your perfect Himalayan journey — from gentle valley walks to legendary high-altitude expeditions.
          </p>
          <a href="#treks"
            className="ts-btn-p ts-anim-4 inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-xl">
            <GiHiking size={17} /> Explore Adventures <BsArrowRight size={14} />
          </a>
        </div>
      </header>

      {/* ══ PACKAGES SECTION ══ */}
      <section id="treks" className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <p className="ts-eyebrow mb-2">Curated Expeditions</p>
            <div className="ts-divider mx-auto mb-4" />
            <h2 className="ts-display text-slate-900 mb-2" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700 }}>
              Choose Your <em className="ts-accent-text">Adventure</em>
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">Our most beloved trekking routes, curated for every explorer.</p>
          </div>

          {/* Search + Sort bar */}
          <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-4 mb-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
            style={{ boxShadow: '0 4px 20px rgba(14,165,233,0.08)' }}>
            <div className="relative flex-1">
              <BsSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input
                type="text"
                placeholder="Search treks by name, location, or duration…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="ts-search w-full pl-9 pr-9 py-2.5 rounded-xl border border-sky-100 text-sm text-slate-700 bg-sky-50 transition-all"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <BsXCircle size={14} />
                </button>
              )}
            </div>
            <select
              value={sort} onChange={e => setSort(e.target.value)}
              className="py-2.5 px-4 rounded-xl border border-sky-100 text-sm text-slate-700 bg-white outline-none cursor-pointer font-medium min-w-[195px] focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
              style={{ fontFamily: 'DM Sans, system-ui, sans-serif' }}>
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="duration-asc">Duration: Short → Long</option>
              <option value="duration-desc">Duration: Long → Short</option>
            </select>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {filterBtns.map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)}
                className={`ts-filter inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                  filter === f.key
                    ? 'ts-filter-active bg-sky-600 text-white border-transparent shadow-md'
                    : 'bg-white text-slate-600 border-sky-100'
                }`}>
                {f.icon} {f.label}
              </button>
            ))}
            <span className="ml-auto text-slate-500 text-sm">
              <span className="font-bold text-sky-600">{filtered.length}</span> package{filtered.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {/* Cards Grid */}
          {paginated.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto mb-4">
                <BsCart size={26} className="text-sky-300" />
              </div>
              <h3 className="ts-display text-xl font-bold text-slate-500 mb-2">No treks found</h3>
              <p className="text-slate-400 text-sm">Try adjusting your search or filter.</p>
              {(search || filter !== 'all') && (
                <button onClick={() => { setSearch(''); setFilter('all'); }}
                  className="mt-4 text-sky-600 font-semibold text-sm underline underline-offset-2">
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div key={gridKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((trek, idx) => {
                const inCart = cart?.name === trek.name;
                const diff   = DIFFICULTY[trek.category] || { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-200' };

                return (
                  <div key={`${trek.name}-${gridKey}`} ref={addRef}
                    className="ts-reveal ts-card ts-card-enter bg-white rounded-2xl overflow-hidden"
                    style={{ animationDelay: `${idx * 55}ms`, transitionDelay: `${idx * 55}ms` }}>

                    <div className="relative overflow-hidden" style={{ height: '210px' }}>
                      <img src={trek.image} alt={trek.name} className="ts-card-img w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 35%, rgba(12,26,58,0.55) 100%)' }} />
                      {trek.featured && (
                        <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-400 text-slate-900">★ Featured</span>
                      )}
                      <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
                        <FaClock size={9} /> {trek.duration}d
                      </span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start gap-2 mb-2">
                        <h3 className="ts-display flex-1 font-bold text-slate-900 text-[1.1rem] leading-snug">{trek.name}</h3>
                        <span className={`flex-shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full border ${diff.bg} ${diff.text} ${diff.border}`}>
                          {trek.category.charAt(0).toUpperCase() + trek.category.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-3">
                        <FaMapMarkerAlt className="text-sky-500" size={10} />
                        {trek.location}, Nepal
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{trek.description}</p>

                      <div className="border-t border-sky-50 pt-4">
                        <div className="flex items-end justify-between mb-3">
                          <div>
                            <p className="text-[11px] text-slate-400 mb-0.5">From</p>
                            <p className="ts-display text-sky-700 font-bold text-xl leading-none">Rs. {trek.price.toLocaleString()}</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">per person</p>
                          </div>
                          {inCart && (
                            <span className="flex items-center gap-1 text-sky-700 text-[11px] font-semibold bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full">
                              <FaCheck size={9} /> In Cart
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => addToCart(trek)}
                            className={`ts-cart-btn flex-1 flex items-center justify-center gap-1.5 text-white text-xs font-semibold py-2.5 rounded-xl ${inCart ? 'opacity-80' : ''}`}>
                            <FaCartPlus size={12} /> {inCart ? 'In Cart' : 'Add to Cart'}
                          </button>
                          <a href={trek.link || '#'}
                            className="ts-details-btn flex-1 flex items-center justify-center gap-1.5 text-xs font-medium py-2.5 rounded-xl">
                            <FaInfoCircle size={12} /> Details
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
            <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
              <button onClick={() => setPage(p => p - 1)} disabled={page === 1}
                className="ts-page-btn w-9 h-9 flex items-center justify-center rounded-xl border border-sky-100 bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed">
                <FaChevronLeft size={11} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button key={p} onClick={() => setPage(p)}
                  className={`ts-page-btn w-9 h-9 flex items-center justify-center rounded-xl border text-sm font-medium ${p === page ? 'ts-page-active bg-sky-600 text-white border-transparent shadow' : 'bg-white text-slate-600 border-sky-100'}`}>
                  {p}
                </button>
              ))}
              <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages}
                className="ts-page-btn w-9 h-9 flex items-center justify-center rounded-xl border border-sky-100 bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed">
                <FaChevronRight size={11} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section className="py-16 px-4 sm:px-6" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 60%, #e0f2fe 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="ts-eyebrow mb-2">Our Promise</p>
            <div className="ts-divider mx-auto mb-4" />
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700 }}>
              Why Choose <em className="ts-accent-text">Nepal Treks?</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whyUs.map((item, i) => (
              <div key={item.title} ref={addRef}
                className="ts-reveal ts-why-card bg-white p-7 rounded-2xl border border-sky-100 shadow-sm text-center"
                style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="ts-why-icon w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5">{item.icon}</div>
                <h3 className="ts-display font-bold text-slate-900 text-xl mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FLOATING CART ══ */}
      <button onClick={() => setCartOpen(true)}
        className="ts-fab fixed bottom-7 right-7 w-14 h-14 rounded-full text-white flex items-center justify-center z-40"
        style={{ boxShadow: '0 8px 28px rgba(14,165,233,0.42)' }}>
        <BsCart size={20} />
        {cart && (
          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow">1</span>
        )}
      </button>

      {/* ══ CART MODAL ══ */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setCartOpen(false)}>
          <div className="ts-modal bg-white rounded-2xl p-7 max-w-md w-full shadow-2xl border border-sky-100" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="ts-display font-bold text-slate-900 text-xl flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#e0f2fe,#bae6fd)' }}>
                  <BsCartCheck size={17} className="text-sky-600" />
                </div>
                Your Cart
              </h3>
              <button onClick={() => setCartOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center text-lg transition-colors">✕</button>
            </div>

            {cart ? (
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 mb-5">
                {cart.img && <img src={cart.img} alt={cart.name} className="w-full h-28 object-cover rounded-xl mb-3" />}
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-900 text-base mb-1">{cart.name}</p>
                    <p className="text-slate-500 text-xs flex items-center gap-1">
                      <FaMapMarkerAlt className="text-sky-500" size={10} /> {cart.location}, Nepal · {cart.duration} Days
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="ts-display text-sky-700 font-bold text-xl">Rs. {cart.price.toLocaleString()}</p>
                    <button onClick={() => setCart(null)} className="text-red-500 hover:text-red-700 text-xs mt-1 transition-colors">Remove</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto mb-3">
                  <BsCart size={26} className="text-sky-300" />
                </div>
                <p className="text-slate-500 text-sm">Your cart is empty</p>
              </div>
            )}

            <div className="flex justify-between items-center border-t border-sky-50 py-4 mb-4">
              <span className="text-slate-600 font-semibold text-sm">Total</span>
              <span className="ts-display text-sky-700 font-bold text-2xl">Rs. {cart ? cart.price.toLocaleString() : '0'}</span>
            </div>
            <div className="flex gap-2.5">
              {cart && (
                <button onClick={() => { setCart(null); setCartOpen(false); }}
                  className="flex-1 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 text-sm font-semibold transition-colors">
                  Clear Cart
                </button>
              )}
              <button onClick={() => setCartOpen(false)}
                className="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold transition-opacity"
                style={{ background: 'linear-gradient(135deg,#0ea5e9,#0284c7)' }}>
                {cart ? 'Checkout' : 'Continue Exploring'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ ALERT MODAL ══ */}
      {alert.show && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="ts-modal bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl border border-sky-100">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${alert.type === 'error' ? 'bg-red-50' : 'bg-sky-50 border border-sky-100'}`}>
              {alert.type === 'error'
                ? <FaMountain size={24} className="text-red-500" />
                : <FaCheck    size={24} className="text-sky-500"  />}
            </div>
            <h3 className="ts-display font-bold text-slate-900 text-xl mb-2">{alert.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{alert.message}</p>
            <button onClick={() => setAlert({ show: false })}
              className={`w-full py-3 rounded-xl text-white font-semibold text-sm transition-opacity ${alert.type === 'error' ? 'bg-red-500' : ''}`}
              style={alert.type !== 'error' ? { background: 'linear-gradient(135deg,#0ea5e9,#0284c7)' } : {}}>
              Got It
            </button>
          </div>
        </div>
      )}
    </div>
  );
}