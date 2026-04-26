// src/pages/Treks.jsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { treks } from '../data/treks';
import React from 'react';
import {
  FaMapMarkerAlt, FaInfoCircle, FaClock, FaMountain,
  FaChevronLeft, FaChevronRight,
} from 'react-icons/fa';
import { GiHiking, GiMountainRoad } from 'react-icons/gi';
import { BsSearch, BsXCircle } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import '../assets/css/theme.css';
import TrekModal from '../components/TrekModal';

const DIFFICULTY = {
  moderate:    { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100', dot: 'bg-emerald-400', label: 'Moderate'    },
  challenging: { bg: 'bg-rose-50',    text: 'text-rose-700',    border: 'border-rose-100',    dot: 'bg-rose-400',    label: 'Challenging' },
};

export default function Treks() {
  const [filter,   setFilter]   = useState('all');
  const [sort,     setSort]     = useState('default');
  const [search,   setSearch]   = useState('');
  const [page,     setPage]     = useState(1);
  const [gridKey,  setGridKey]  = useState(0);
  const [selected, setSelected] = useState(null);
  const revealRefs = useRef([]);
  const PER_PAGE = 6;

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  useEffect(() => {
    revealRefs.current = [];
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.06 }
    );
    const tid = setTimeout(() => {
      revealRefs.current.forEach(el => el && observer.observe(el));
    }, 30);
    return () => { clearTimeout(tid); observer.disconnect(); };
  }, [gridKey, page]);

  const addRef = useCallback(el => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  }, []);

  useEffect(() => { setPage(1); setGridKey(k => k + 1); }, [filter, sort, search]);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

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
    if (sort === 'duration-asc')  list.sort((a, b) => a.duration - b.duration);
    if (sort === 'duration-desc') list.sort((a, b) => b.duration - a.duration);
    if (sort === 'altitude-desc') list.sort((a, b) => parseInt(b.maxAltitude) - parseInt(a.maxAltitude));
    return list;
  };

  const filtered   = getFiltered();
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const filterBtns = [
    { key: 'all',         label: 'All Treks',   icon: <GiMountainRoad size={14} /> },
    { key: 'moderate',    label: 'Moderate',    icon: <GiHiking size={14} /> },
    { key: 'challenging', label: 'Challenging', icon: <FaMountain size={13} /> },
  ];

  return (
    <div className="ts-body min-h-screen" style={{ background: '#f0f7ff' }}>

      {/* ── HERO ── */}
      <header
        className="relative flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          minHeight: '100vh',
          backgroundImage: `url('src/assets/img/image.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '68px',
        }}
      >
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg,rgba(0, 0, 0, 0.45) 0%,rgba(0, 0, 0, 0.3) 45%,rgba(0, 0, 0, 0.59) 100%)' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle,#60a5fa,transparent 70%)', filter: 'blur(72px)' }} />

        <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-blue-400/50" />
            <span className="text-blue-300 text-[11px] font-semibold tracking-[3.5px] uppercase">Himalayan Routes</span>
            <div className="h-px w-12 bg-blue-400/50" />
          </div>

          <h1 className="ts-display ts-hero-text leading-tight mb-4"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Explore Our <em>Treks</em>
          </h1>

          <p className="text-slate-300 leading-relaxed mb-8 mx-auto"
            style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', maxWidth: '430px' }}>
            From gentle valley walks to legendary high-altitude expeditions — every trail tells a story.
          </p>

          {/* quick stat pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { label: `${treks.length} Trails`,  icon: <GiMountainRoad size={13} /> },
              { label: 'Expert Guides',            icon: <GiHiking size={13} /> },
              { label: 'All Seasons',              icon: <FaClock size={12} /> },
            ].map(({ label, icon }) => (
              <span key={label}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}>
                {icon} {label}
              </span>
            ))}
          </div>

          <a href="#treks"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg">
            <GiHiking size={16} /> Browse All Treks <BsArrowRight size={13} />
          </a>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
          <div className="w-1 h-1 rounded-full bg-white" />
        </div>
      </header>

      {/* ── TREKS SECTION ── */}
      <section id="treks" className="py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">
            <p className="text-blue-600 text-[11px] font-semibold tracking-[3px] uppercase mb-2">All Routes</p>
            <h2 className="ts-display text-slate-900 mb-2"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 700 }}>
              Choose Your <em>Adventure</em>
            </h2>
            <p className="text-slate-500 text-sm max-w-sm mx-auto">
              Click <strong className="text-slate-700">View Details</strong> on any trek for full route information.
            </p>
          </div>

          {/* Controls */}
          <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-4 mb-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="relative flex-1">
              <BsSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input
                type="text"
                placeholder="Search by name, location or duration…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="ts-search w-full pl-9 pr-9 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 bg-slate-50 transition-all"
              />
              {search && (
                <button onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <BsXCircle size={14} />
                </button>
              )}
            </div>
            <select value={sort} onChange={e => setSort(e.target.value)}
              className="py-2.5 px-4 rounded-xl border border-slate-200 text-sm text-slate-700 bg-white outline-none cursor-pointer font-medium min-w-[210px]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <option value="default">Sort: Default</option>
              <option value="duration-asc">Duration: Short → Long</option>
              <option value="duration-desc">Duration: Long → Short</option>
              <option value="altitude-desc">Altitude: Highest first</option>
            </select>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {filterBtns.map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)}
                className={`ts-filter inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                  filter === f.key
                    ? 'ts-filter-active bg-blue-600 text-white border-transparent shadow-md'
                    : 'bg-white text-slate-600 border-slate-200'
                }`}>
                {f.icon} {f.label}
              </button>
            ))}
            <span className="ml-auto text-slate-500 text-sm">
              <span className="font-bold text-blue-600">{filtered.length}</span> trek{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Cards */}
          {paginated.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <GiMountainRoad size={28} className="text-blue-200" />
              </div>
              <h3 className="ts-display text-xl font-bold text-slate-500 mb-2">No treks found</h3>
              <p className="text-slate-400 text-sm mb-4">Try adjusting your search or filter.</p>
              {(search || filter !== 'all') && (
                <button onClick={() => { setSearch(''); setFilter('all'); }}
                  className="text-blue-600 font-semibold text-sm underline underline-offset-2">
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div key={gridKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((trek, idx) => {
                const diff = DIFFICULTY[trek.category] || {
                  bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-100',
                  dot: 'bg-slate-400', label: trek.category,
                };

                return (
                  <article
                    key={`${trek.name}-${gridKey}`}
                    ref={addRef}
                    className="ts-reveal ts-card ts-card-enter bg-white rounded-2xl overflow-hidden border border-blue-50/80 shadow-sm flex flex-col group"
                    style={{ animationDelay: `${idx * 55}ms`, transitionDelay: `${idx * 55}ms` }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ height: '200px' }}>
                      <img src={trek.image} alt={trek.name}
                        className="ts-card-img w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0"
                        style={{ background: 'linear-gradient(180deg,rgba(0,0,0,0.06) 0%,rgba(15,23,42,0.58) 100%)' }} />

                      {/* Featured ribbon */}
                      {trek.featured && (
                        <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl">
                          ★ Featured
                        </span>
                      )}

                      {/* Duration chip */}
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-black/45 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                        <FaClock size={9} /> {trek.duration} days
                      </span>

                      {/* Bottom bar on image */}
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-end justify-between">
                        <span className="text-white/80 text-xs flex items-center gap-1">
                          <FaMapMarkerAlt size={10} className="text-blue-300" /> {trek.location}
                        </span>
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border ${diff.bg} ${diff.text} ${diff.border}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${diff.dot}`} />
                          {diff.label}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="ts-display font-bold text-slate-900 text-[1.15rem] leading-snug mb-2 group-hover:text-blue-700 transition-colors duration-200">
                        {trek.name}
                      </h3>

                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                        {trek.description}
                      </p>

                      {/* Info strip */}
                      <div className="grid grid-cols-3 gap-1 text-center mb-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-0.5">Duration</p>
                          <p className="text-slate-700 text-xs font-semibold">{trek.duration}d</p>
                        </div>
                        <div className="border-x border-slate-200">
                          <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-0.5">Altitude</p>
                          <p className="text-slate-700 text-xs font-semibold">{trek.maxAltitude}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-0.5">Group</p>
                          <p className="text-slate-700 text-xs font-semibold">{trek.groupSize?.split('–')[1] || '16'} max</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={() => setSelected(trek)}
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors ts-btn-p"
                      >
                        <FaInfoCircle size={13} /> View Details
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
              <button onClick={() => setPage(p => p - 1)} disabled={page === 1}
                className="ts-page-btn w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed">
                <FaChevronLeft size={11} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button key={p} onClick={() => setPage(p)}
                  className={`ts-page-btn w-9 h-9 flex items-center justify-center rounded-xl border text-sm font-medium ${
                    p === page ? 'ts-page-active bg-blue-600 text-white border-transparent shadow' : 'bg-white text-slate-600 border-slate-200'
                  }`}>
                  {p}
                </button>
              ))}
              <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages}
                className="ts-page-btn w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed">
                <FaChevronRight size={11} />
              </button>
            </div>
          )}
        </div>
      </section>

      {selected && (
        <TrekModal trek={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}