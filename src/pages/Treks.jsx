// src/pages/Treks.jsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { treks } from '../data/treks';
import React from 'react';
import {
  FaMapMarkerAlt, FaInfoCircle, FaClock, FaMountain,
  FaChevronLeft, FaChevronRight, FaTimes, FaRupeeSign,
  FaCheckCircle, FaUsers, FaStar,
} from 'react-icons/fa';
import { GiHiking, GiMountainRoad, GiCampingTent, GiPathDistance } from 'react-icons/gi';
import { BsSearch, BsXCircle } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import '../assets/css/theme.css';
import TrekModal from '../components/TrekModal';

const DIFFICULTY = {
  moderate:    { bg: 'bg-blue-50',  text: 'text-blue-700',  border: 'border-blue-100', label: 'Moderate'    },
  challenging: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100', label: 'Challenging' },
};

// Extra details per trek (extend as needed)
const TREK_DETAILS = {
  "Everest Base Camp": {
    highlights: ['Namche Bazaar cultural hub', 'Tengboche Monastery visit', 'Khumbu Icefall views', 'Gorak Shep & Kala Patthar summit'],
    includes:   ['Airport transfers', 'Teahouse accommodation', 'All meals on trail', 'Experienced guide & porters', 'TIMS & permits'],
    difficulty: 'Challenging — requires good physical fitness and acclimatization days.',
    bestSeason: 'March–May & Sep–Nov',
    maxAltitude: '5,364 m (Everest Base Camp)',
    groupSize: '2–16 people',
  },
  "Annapurna Circuit": {
    highlights: ['Thorong La Pass (5,416 m)', 'Muktinath temple', 'Poon Hill sunrise', 'Manang valley'],
    includes:   ['Airport transfers', 'Tea house & lodge stay', 'Breakfast & dinner', 'Guide & porter', 'Annapurna permits'],
    difficulty: 'Moderate — suitable for fit trekkers with some altitude experience.',
    bestSeason: 'Oct–Nov & Mar–Apr',
    maxAltitude: '5,416 m (Thorong La Pass)',
    groupSize: '2–14 people',
  },
  "Langtang Valley": {
    highlights: ['Langtang National Park', 'Kyanjin Gompa monastery', 'Tserko Ri peak (4,984 m)', 'Tamang village homestays'],
    includes:   ['Airport transfers', 'Teahouse accommodation', 'Meals on trail', 'Guide & porter', 'Langtang permits'],
    difficulty: 'Moderate — accessible for beginners with basic fitness.',
    bestSeason: 'Mar–May & Sep–Dec',
    maxAltitude: '4,984 m (Tserko Ri)',
    groupSize: '2–12 people',
  },
  "Gokyo Lakes Trek": {
    highlights: ['Five glacial Gokyo Lakes', 'Gokyo Ri (5,357 m) panorama', 'Ngozumpa Glacier', '4 peaks over 8,000 m visible'],
    includes:   ['Airport transfers', 'Teahouse stay', 'All meals', 'Guide & porter', 'National park permits'],
    difficulty: 'Challenging — high altitude with demanding terrain.',
    bestSeason: 'Mar–May & Sep–Nov',
    maxAltitude: '5,357 m (Gokyo Ri)',
    groupSize: '2–14 people',
  },
  "Manaslu Circuit": {
    highlights: ['Larkya La Pass (5,160 m)', 'Restricted Area permit zone', 'Remote Nubri valley culture', 'Pristine wilderness'],
    includes:   ['Airport transfers', 'Teahouse & camping', 'All meals', 'Guide & porter', 'Restricted Area permit'],
    difficulty: 'Challenging — remote, high-altitude, requires strong fitness.',
    bestSeason: 'Sep–Nov & Mar–May',
    maxAltitude: '5,160 m (Larkya La Pass)',
    groupSize: '2–10 people',
  },
  "Poon Hill Trek": {
    highlights: ['Poon Hill sunrise (3,210 m)', 'Annapurna & Dhaulagiri panorama', 'Ghorepani village', 'Rhododendron forests'],
    includes:   ['Airport transfers', 'Teahouse accommodation', 'Breakfast & dinner', 'Guide', 'ACAP permit'],
    difficulty: 'Moderate — great for beginners and families.',
    bestSeason: 'Year-round (best Oct–Apr)',
    maxAltitude: '3,210 m (Poon Hill)',
    groupSize: '2–16 people',
  },
};

export default function Treks() {
  const [filter,      setFilter]      = useState('all');
  const [sort,        setSort]        = useState('default');
  const [search,      setSearch]      = useState('');
  const [page,        setPage]        = useState(1);
  const [gridKey,     setGridKey]     = useState(0);
  const [selected,    setSelected]    = useState(null); // trek for modal
  const revealRefs = useRef([]);
  const PER_PAGE = 6;

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  // Observer reset on grid re-key
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

  // Lock body scroll when modal open
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
    if (sort === 'price-asc')     list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc')    list.sort((a, b) => b.price - a.price);
    if (sort === 'duration-asc')  list.sort((a, b) => a.duration - b.duration);
    if (sort === 'duration-desc') list.sort((a, b) => b.duration - a.duration);
    return list;
  };

  const filtered   = getFiltered();
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const filterBtns = [
    { key: 'all',         label: 'All Treks',  icon: <GiMountainRoad size={14} /> },
    { key: 'moderate',    label: 'Moderate',   icon: <GiHiking size={14} /> },
    { key: 'challenging', label: 'Challenging',icon: <FaMountain size={13} /> },
  ];

  const details = selected ? (TREK_DETAILS[selected.name] || {}) : {};

  return (
    <div className="ts-body min-h-screen" style={{ background: '#f0f7ff' }}>

      {/* ── HERO ── */}
      <header className="relative flex items-center justify-center text-center text-white overflow-hidden"
        style={{ minHeight: '100vh', backgroundImage: `url('src/assets/img/image.png')`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '68px' }}>
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg,rgba(0, 0, 0, 0.33) 0%,rgba(0, 0, 0, 0.32) 55%,rgba(0, 0, 0, 0.42) 100%)' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle,#3b82f6,transparent 70%)', filter: 'blur(56px)' }} />

        <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-blue-400/60" />
            <p className="text-blue-300 text-[11px] font-semibold tracking-[3px] uppercase">All Himalayan Routes</p>
            <div className="h-px w-10 bg-blue-400/60" />
          </div>
          <h1 className="ts-display ts-hero-text leading-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 700, letterSpacing: '-0.01em' }}>
            Explore Our <em>Treks</em>
          </h1>
          <p className="text-white/65 mb-7 leading-relaxed"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 0.98rem)', maxWidth: '440px', margin: '0 auto 28px' }}>
            From gentle valley walks to legendary high-altitude expeditions — find your perfect journey.
          </p>
          <a href="#treks"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg">
            <GiHiking size={16} /> Browse All Treks <BsArrowRight size={13} />
          </a>
        </div>
      </header>

      {/* ── TREKS SECTION ── */}
      <section id="treks" className="py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="ts-display text-slate-900 mb-2"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 700 }}>
              Choose Your <em>Adventure</em>
            </h2>
            <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
              Every trail has a story. Click <strong>Details</strong> to explore yours.
            </p>
          </div>

          {/* Search + Sort */}
          <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-4 mb-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="relative flex-1">
              <BsSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input
                type="text"
                placeholder="Search by name, location, or duration…"
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
              className="py-2.5 px-4 rounded-xl border border-slate-200 text-sm text-slate-700 bg-white outline-none cursor-pointer font-medium min-w-[190px]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
                    ? 'ts-filter-active bg-blue-600 text-white border-transparent shadow-md'
                    : 'bg-white text-slate-600 border-slate-200'
                }`}>
                {f.icon} {f.label}
              </button>
            ))}
            <span className="ml-auto text-slate-500 text-sm">
              <span className="font-bold text-blue-600">{filtered.length}</span> trek{filtered.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {/* Cards */}
          {paginated.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <GiMountainRoad size={28} className="text-blue-200" />
              </div>
              <h3 className="ts-display text-xl font-bold text-slate-500 mb-2">No treks found</h3>
              <p className="text-slate-400 text-sm">Try adjusting your search or filter.</p>
              {(search || filter !== 'all') && (
                <button onClick={() => { setSearch(''); setFilter('all'); }}
                  className="mt-4 text-blue-600 font-semibold text-sm underline underline-offset-2">
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div key={gridKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((trek, idx) => {
                const diff = DIFFICULTY[trek.category] || { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-200', label: trek.category };

                return (
                  <div key={`${trek.name}-${gridKey}`} ref={addRef}
                    className="ts-reveal ts-card ts-card-enter bg-white rounded-2xl overflow-hidden border border-blue-50 shadow-sm flex flex-col"
                    style={{ animationDelay: `${idx * 55}ms`, transitionDelay: `${idx * 55}ms` }}>

                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ height: '195px' }}>
                      <img src={trek.image} alt={trek.name} className="ts-card-img w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0"
                        style={{ background: 'linear-gradient(180deg,transparent 35%,rgba(15,23,42,.5) 100%)' }} />
                      {trek.featured && (
                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                          ★ Featured
                        </span>
                      )}
                      <span className="absolute top-3 right-3 bg-black/45 backdrop-blur text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1">
                        <FaClock size={9} /> {trek.duration}d
                      </span>
                      {/* Difficulty on image bottom */}
                      <span className={`absolute bottom-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full border ${diff.bg} ${diff.text} ${diff.border}`}>
                        {diff.label}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start gap-2 mb-1.5">
                        <h3 className="ts-display flex-1 font-bold text-slate-900 text-[1.1rem] leading-snug">{trek.name}</h3>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-3">
                        <FaMapMarkerAlt className="text-blue-500" size={10} />
                        {trek.location}, Nepal
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">{trek.description}</p>

                      {/* Price + CTA */}
                      <div className="border-t border-slate-100 pt-4 mt-auto">
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-[11px] text-slate-400 mb-0.5">Starting from</p>
                            <p className="ts-display text-blue-700 font-bold text-xl leading-none">
                              Rs. {trek.price.toLocaleString()}
                            </p>
                            <p className="text-[10px] text-slate-400 mt-0.5">per person</p>
                          </div>
                          <button
                            onClick={() => setSelected(trek)}
                            className="ts-btn-p flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl">
                            <FaInfoCircle size={11} /> Details
                          </button>
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

      {/* ══════════════════════════════════════════
          TREK DETAILS MODAL
      ══════════════════════════════════════════ */}
      {selected && (
       <TrekModal trek={selected} details={details} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}