// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import {
  FaStar, FaRoute, FaUsers, FaSnowflake, FaSun,
  FaLeaf, FaCloudRain, FaQuoteLeft, FaChevronDown, FaChevronUp,
  FaMapMarkerAlt, FaClock, FaMountain, FaHiking,
  FaThermometerHalf, FaExclamationTriangle, FaCheckCircle, FaCamera,
} from 'react-icons/fa';
import { GiMountainRoad, GiHiking, GiBackpack, GiCompass, GiSnowflake2 } from 'react-icons/gi';
import { BsArrowRight, BsArrowUpRight, BsInfoCircle } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdDirectionsWalk, MdNaturePeople } from 'react-icons/md';
import '../assets/css/theme.css';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ts-faq-item border rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-sky-300 shadow-md' : 'border-sky-100'}`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
        style={{ background: open ? 'linear-gradient(135deg,#f0f9ff,#e0f2fe)' : 'white' }}
      >
        <span className="ts-display font-bold text-slate-800 text-base leading-snug">{q}</span>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-sky-500 text-white' : 'bg-sky-50 text-sky-500'}`}>
          {open ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
        </div>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-loose border-t border-sky-100">{a}</div>
      )}
    </div>
  );
}

export default function Home() {
  const revealRefs = useRef([]);

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

  // Trek cards — NO highlights, just image + name + quick stats + description + link
  const treks = [
    {
      img: 'src/assets/img/everest.jpg',
      region: 'Khumbu Region',
      badge: 'Iconic', badgeCls: 'bg-amber-400 text-slate-900',
      title: 'Everest Base Camp',
      duration: '12–14 Days', altitude: '5,364m',
      difficulty: 'Challenging', diffCls: 'bg-orange-50 text-orange-700 border-orange-200',
      desc: "One of the world's most famous treks — Sherpa villages, high-altitude glaciers, and views of the world's highest peaks.",
    },
    {
      img: 'src/assets/img/annapurna.jpg',
      region: 'Annapurna Region',
      badge: 'Most Diverse', badgeCls: 'bg-sky-500 text-white',
      title: 'Annapurna Circuit',
      duration: '12–21 Days', altitude: '5,416m',
      difficulty: 'Moderate–Hard', diffCls: 'bg-sky-50 text-sky-700 border-sky-200',
      desc: 'A classic circumnavigation of the Annapurna massif through subtropical forests, arid Tibetan terrain, and spectacular vistas.',
    },
    {
      img: 'src/assets/img/langtang.webp',
      region: 'Langtang Region',
      badge: 'Hidden Gem', badgeCls: 'bg-cyan-500 text-white',
      title: 'Langtang Valley',
      duration: '7–10 Days', altitude: '4,984m',
      difficulty: 'Moderate', diffCls: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      desc: 'Less-travelled but equally breathtaking — glacial valleys, traditional Tamang culture, and stunning ridge-top views.',
    },
  ];

  const seasons = [
    { name: 'Spring', months: 'Mar – May', icon: <FaLeaf size={18} />, color: '#10b981', colorLight: '#d1fae5', status: 'Peak Season', statusCls: 'bg-emerald-100 text-emerald-700', temp: '10–20°C', sky: 'Clear & warm', pros: ['Rhododendrons bloom', 'Stable weather', 'Long daylight'], cons: ['Busiest crowds', 'Higher costs'] },
    { name: 'Summer', months: 'Jun – Aug', icon: <FaCloudRain size={18} />, color: '#6366f1', colorLight: '#e0e7ff', status: 'Monsoon Season', statusCls: 'bg-indigo-100 text-indigo-700', temp: '15–25°C', sky: 'Wet & cloudy', pros: ['Lush landscapes', 'Very few trekkers', 'Lower prices'], cons: ['Heavy rainfall', 'Leeches on trail'] },
    { name: 'Autumn', months: 'Sep – Nov', icon: <FaSun size={18} />, color: '#f59e0b', colorLight: '#fef3c7', status: 'Best Season ✦', statusCls: 'bg-amber-100 text-amber-700', temp: '5–20°C', sky: 'Crystal clear', pros: ['Clearest views', 'Perfect temperature', 'Festive atmosphere'], cons: ['Most popular', 'Book well ahead'] },
    { name: 'Winter', months: 'Dec – Feb', icon: <FaSnowflake size={18} />, color: '#0ea5e9', colorLight: '#e0f2fe', status: 'Off Season', statusCls: 'bg-sky-100 text-sky-700', temp: '-10 to 10°C', sky: 'Cold & clear', pros: ['Quiet trails', 'Snow scenery', 'Budget-friendly'], cons: ['Very cold nights', 'Some passes closed'] },
  ];

  const difficulties = [
    { level: 'Easy', color: '#10b981', bg: '#d1fae5', icon: <MdDirectionsWalk size={20} />, example: 'Poon Hill', days: '3–5 days', altitude: 'Up to 3,200m', fitness: 'Basic fitness', desc: 'Well-defined paths, gentle gain. Suitable for beginners — no technical sections required.' },
    { level: 'Moderate', color: '#0ea5e9', bg: '#e0f2fe', icon: <GiHiking size={20} />, example: 'Langtang Valley', days: '7–14 days', altitude: 'Up to 5,000m', fitness: 'Regular exercise', desc: 'Longer daily walks, some steep climbs. Prior hiking experience and solid stamina required.' },
    { level: 'Challenging', color: '#f59e0b', bg: '#fef3c7', icon: <FaMountain size={20} />, example: 'Everest Base Camp', days: '12–21 days', altitude: 'Up to 5,500m', fitness: 'Endurance training', desc: 'High altitude, long days, cold weather. For experienced, well-prepared trekkers only.' },
    { level: 'Extreme', color: '#ef4444', bg: '#fee2e2', icon: <GiSnowflake2 size={20} />, example: 'Three Passes Trek', days: '18–24 days', altitude: 'Above 5,500m', fitness: 'Elite condition', desc: 'Multiple high passes, glacier crossings. Expert mountaineers with serious preparation only.' },
  ];

  const tips = [
    { icon: <FaThermometerHalf size={16} />, title: 'Acclimatise Properly', desc: 'Follow "climb high, sleep low." Never ascend more than 500m per day above 3,000m. Take rest days and listen to your body.', color: '#0ea5e9' },
    { icon: <GiBackpack size={16} />, title: 'Pack Smart & Light', desc: 'Aim for 8–10 kg base weight. Layers are essential — temperatures swing 20°C between day and night at altitude.', color: '#06b6d4' },
    { icon: <FaCamera size={16} />, title: 'Photography Tips', desc: 'Golden hour (6–8am) gives the best light on peaks. Carry extra batteries — cold drains them 3× faster than usual.', color: '#0284c7' },
    { icon: <MdNaturePeople size={16} />, title: 'Respect Local Culture', desc: 'Walk clockwise around mani stones and stupas. Always ask permission before photographing people. Remove shoes at monasteries.', color: '#0369a1' },
    { icon: <HiOutlineLightBulb size={16} />, title: 'Permits Required', desc: 'Most treks need a TIMS card (~$20) and a national park permit ($30–35). Restricted areas can cost $500+ extra.', color: '#0ea5e9' },
    { icon: <GiCompass size={16} />, title: 'Hire a Local Guide', desc: 'A licensed guide dramatically improves safety, cultural experience, and route-finding — especially in remote sections.', color: '#06b6d4' },
  ];

  const faqs = [
    { q: 'Do I need prior experience for Everest Base Camp?', a: 'No technical climbing skills are required, but prior hiking experience is strongly recommended. The EBC trek involves 12–14 days at altitudes up to 5,364m. Regular cardio training for 2–3 months before departure significantly improves your experience and reduces altitude sickness risk.' },
    { q: 'What permits do I need to trek in Nepal?', a: 'Most trekkers need two permits: a TIMS card (~$20) and a National Park/Conservation Area permit ($30–35). Restricted areas like Upper Mustang, Manaslu, and Dolpo require additional special permits. Always verify with the Nepal Tourism Board before your trip.' },
    { q: 'When is the absolute best time to trek?', a: 'Autumn (October–November) offers the clearest skies, stable temperatures, and post-monsoon freshness — widely considered the prime window. Spring (March–May) is equally popular with rhododendrons in bloom. Both seasons see the highest trail traffic, so book teahouses well in advance.' },
    { q: 'How physically fit do I need to be?', a: 'For moderate treks like Langtang Valley, regular walking and some cardio is sufficient. For EBC or Annapurna Circuit, you should comfortably walk 6–8 hours with a pack. Start training 3–4 months before with hiking, stair climbing, and cardio sessions.' },
    { q: 'What is altitude sickness and how do I prevent it?', a: 'Acute Mountain Sickness (AMS) occurs when you ascend too quickly. Symptoms include headache, nausea, and dizziness. Prevention: ascend slowly (max 500m/day above 3,000m), stay hydrated, avoid alcohol, and take rest days. Diamox can help — discuss with a doctor first.' },
    { q: 'Can I trek solo or do I need a guide?', a: 'Solo trekking is legal on most major routes. However, restricted areas now require a licensed guide by law. Even on open trails, a local guide significantly improves safety, cultural experience, and route-finding — especially in poor weather.' },
  ];

  const whyNepal = [
    { icon: <FaMountain size={20} />, stat: '8 of 14', label: "World's Highest Peaks", desc: "Nepal hosts 8 of the 14 eight-thousanders — including Everest, Kangchenjunga, and Annapurna." },
    { icon: <GiMountainRoad size={20} />, stat: '1,000+ km', label: 'Diverse Trails', desc: 'From jungle lowlands to arctic highlands — an unparalleled diversity of terrain in one compact country.' },
    { icon: <GiBackpack size={20} />, stat: '100+', label: 'Ethnic Communities', desc: 'Meet Sherpas, Tamangs, Gurungs and dozens more — each with unique traditions and living heritage.' },
    { icon: <FaCheckCircle size={20} />, stat: '75+ Years', label: 'Open to Trekkers', desc: "Nepal has welcomed adventurers since 1949, building one of the world's most trusted trekking networks." },
  ];

  return (
    <div className="ts-page overflow-x-hidden">

      {/* ══ HERO ══ */}
      <header
        className="relative flex flex-col items-center justify-center text-white overflow-hidden"
        style={{ minHeight: '100vh', backgroundImage: `url('src/assets/img/home.avif')`, backgroundSize: 'cover', backgroundPosition: 'center 30%', paddingTop: '68px' }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0.1) 30%,rgba(0, 0, 0, 0.49) 72%,rgba(0, 0, 0, 0.82) 100%)' }} />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none" style={{ background: 'radial-gradient(ellipse,rgba(56,189,248,0.10),transparent 65%)', filter: 'blur(55px)' }} />
        <div className="ts-noise absolute inset-0 pointer-events-none" />

        <div className="relative z-10 flex-1 flex items-center justify-center w-full px-6">
          <div className="w-full max-w-2xl mx-auto text-center">
            <div className="ts-anim-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(14,165,233,0.20)', border: '1px solid rgba(147,219,250,0.28)', backdropFilter: 'blur(10px)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse flex-shrink-0" />
              <span className="ts-hero-eyebrow">Your Complete Nepal Trekking Guide</span>
            </div>

            <h1 className="ts-display ts-hero-text ts-anim-2"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.6rem)', fontWeight: 700, lineHeight: 1.14, letterSpacing: '-0.02em' }}>
              Discover Nepal's Greatest<br /><em>Himalayan Trails</em>
            </h1>

            <p className="ts-anim-3 mt-5 text-slate-300/82 leading-relaxed mx-auto"
              style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.98rem)', maxWidth: '460px' }}>
              Trails, seasons, difficulty ratings, permits, and cultural tips — everything you need to plan an unforgettable trek in Nepal.
            </p>

            <div className="ts-anim-4 flex flex-wrap gap-3 justify-center mt-7">
              <a href="#treks" className="ts-btn-p inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-full text-sm shadow-xl">
                <GiCompass size={15} /> Explore Trails
              </a>
              <a href="#seasons" className="ts-btn-ghost inline-flex items-center gap-2 text-white font-medium px-7 py-3 rounded-full text-sm">
                Best Seasons <BsArrowRight size={12} />
              </a>
            </div>

            <div className="ts-anim-4 mt-8 flex flex-wrap justify-center gap-2.5">
              {[
                { icon: <FaMountain size={11} />, value: '8,849m', label: 'Mt. Everest' },
                { icon: <FaRoute    size={11} />, value: '15+',    label: 'Major Routes' },
                { icon: <FaUsers   size={11} />, value: '50K+',   label: 'Trekkers/Year' },
                { icon: <FaStar    size={11} />, value: '4.9★',   label: 'Avg Rating' },
              ].map(({ icon, value, label }) => (
                <div key={label} className="ts-stat-pill inline-flex items-center gap-2 px-4 py-2.5 rounded-xl">
                  <span className="text-cyan-300">{icon}</span>
                  <div className="text-left">
                    <p className="ts-display text-white font-bold leading-none" style={{ fontSize: '0.95rem' }}>{value}</p>
                    <p className="text-white/42 text-[10px] mt-0.5 leading-none">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full pb-7 px-6 ts-anim-4">
          <div className="flex flex-wrap justify-center gap-2">
            {['Trail Guides','Best Seasons','Difficulty Levels','Trekking Tips','Permits & Rules','FAQ'].map(chip => (
              <span key={chip} className="text-[10px] px-3 py-1 rounded-full text-sky-200 font-medium"
                style={{ background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(56,189,248,0.16)' }}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ══ WHY NEPAL ══ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center max-w-2xl mx-auto mb-14">
            <p className="ts-eyebrow mb-3">Why Nepal?</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, lineHeight: 1.2 }}>
              The World's Greatest <em className="ts-accent-text">Trekking Destination</em>
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">No country on earth compresses so much altitude, culture, and natural drama into such a small area.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyNepal.map((item, i) => (
              <div key={item.label} ref={addRef} className="ts-reveal ts-feat-card p-7 rounded-2xl cursor-default" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="ts-feat-icon w-12 h-12 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
                <p className="ts-display text-sky-700 font-bold mb-0.5" style={{ fontSize: '1.4rem' }}>{item.stat}</p>
                <p className="text-slate-800 font-semibold text-sm mb-2">{item.label}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TRAIL PROFILES — NO HIGHLIGHTS ══ */}
      <section id="treks" className="py-20" style={{ background: 'linear-gradient(180deg,#f0f9ff 0%,#e0f2fe 55%,#f0f9ff 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <p className="ts-eyebrow mb-2">Trail Guides</p>
              <div className="ts-divider mb-4" />
              <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700 }}>
                Iconic <em>Trek Profiles</em>
              </h2>
              <p className="text-slate-500 mt-1.5 text-sm">In-depth guides to Nepal's most celebrated routes.</p>
            </div>
            <a href="/treks" className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm hover:gap-4 transition-all duration-300">
              All trek profiles <BsArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {treks.map((t, i) => (
              <div key={t.title} ref={addRef}
                className="ts-reveal ts-card bg-white rounded-2xl overflow-hidden flex flex-col"
                style={{ transitionDelay: `${i * 90}ms` }}>

                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '220px' }}>
                  <img src={t.img} alt={t.title} className="ts-card-img w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,transparent 30%,rgba(12,26,58,0.65) 100%)' }} />
                  <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${t.badgeCls}`}>{t.badge}</span>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-white text-xs font-medium flex items-center gap-1"><FaMountain size={9} className="text-cyan-300" /> {t.altitude}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${t.diffCls}`}>{t.difficulty}</span>
                  </div>
                </div>

                {/* Card body — clean, no highlights */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    <FaMapMarkerAlt size={8} className="inline mr-1" />{t.region}
                  </p>
                  <h3 className="ts-display font-bold text-slate-900 text-[1.2rem] leading-snug mb-2">{t.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{t.desc}</p>

                  {/* Quick info row */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 py-3 border-t border-sky-50 mb-4">
                    <span className="flex items-center gap-1.5"><FaClock size={9} className="text-sky-500" />{t.duration}</span>
                    <span className="flex items-center gap-1.5"><FaMountain size={9} className="text-sky-500" />{t.altitude}</span>
                  </div>

                  <a href="/treks" className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm hover:gap-4 transition-all duration-300 mt-auto">
                    Read full guide <BsArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SEASONS ══ */}
      <section id="seasons" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center max-w-2xl mx-auto mb-14">
            <p className="ts-eyebrow mb-3">When to Go</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700 }}>
              Trekking by <em className="ts-accent-text">Season</em>
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">Nepal's trekking calendar is shaped by the monsoon — understanding the seasons is the single most important planning decision you'll make.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {seasons.map((s, i) => (
              <div key={s.name} ref={addRef} className="ts-reveal ts-season-card rounded-2xl overflow-hidden border border-slate-100 shadow-sm" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="px-5 py-4 flex items-center gap-3" style={{ background: `linear-gradient(135deg,${s.colorLight},white)`, borderBottom: `2px solid ${s.color}22` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: s.colorLight, color: s.color }}>{s.icon}</div>
                  <div>
                    <p className="ts-display font-bold text-slate-900 text-lg leading-none">{s.name}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{s.months}</p>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 ${s.statusCls}`}>{s.status}</span>
                  <div className="space-y-0.5 mb-4 text-xs text-slate-500">
                    <p><span className="font-semibold text-slate-700">Temp:</span> {s.temp}</p>
                    <p><span className="font-semibold text-slate-700">Sky:</span> {s.sky}</p>
                  </div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pros</p>
                  {s.pros.map(p => <p key={p} className="text-xs text-slate-600 flex items-start gap-1.5 mb-1"><FaCheckCircle size={8} style={{ color: s.color }} className="flex-shrink-0 mt-0.5" />{p}</p>)}
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 mt-3">Watch Out</p>
                  {s.cons.map(c => <p key={c} className="text-xs text-slate-600 flex items-start gap-1.5 mb-1"><FaExclamationTriangle size={8} className="text-amber-400 flex-shrink-0 mt-0.5" />{c}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DIFFICULTY ══ */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg,#f0f9ff,#e0f2fe)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center max-w-2xl mx-auto mb-14">
            <p className="ts-eyebrow mb-3">Difficulty Levels</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700 }}>
              Which Trek <em className="ts-accent-text">Suits You?</em>
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">Nepal's trails range from gentle valley walks to multi-pass expeditions. Here's how to assess your level honestly.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {difficulties.map((d, i) => (
              <div key={d.level} ref={addRef}
                className="ts-reveal bg-white rounded-2xl border overflow-hidden shadow-sm hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms`, borderColor: `${d.color}30` }}>
                <div className="h-1" style={{ background: `linear-gradient(90deg,${d.color},${d.color}50)` }} />
                <div className="p-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: d.bg, color: d.color }}>{d.icon}</div>
                  <p className="ts-display font-bold text-slate-900 text-xl mb-0.5">{d.level}</p>
                  <p className="text-xs font-semibold mb-3" style={{ color: d.color }}>e.g. {d.example}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{d.desc}</p>
                  <div className="space-y-1.5 text-xs border-t pt-4" style={{ borderColor: `${d.color}20` }}>
                    <p className="flex items-center gap-2 text-slate-600"><FaClock size={9} style={{ color: d.color }} /> {d.days}</p>
                    <p className="flex items-center gap-2 text-slate-600"><FaMountain size={9} style={{ color: d.color }} /> {d.altitude}</p>
                    <p className="flex items-center gap-2 text-slate-600"><FaHiking size={9} style={{ color: d.color }} /> {d.fitness}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TIPS ══ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center max-w-2xl mx-auto mb-14">
            <p className="ts-eyebrow mb-3">Insider Knowledge</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700 }}>
              Essential <em className="ts-accent-text">Trekking Tips</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tips.map((tip, i) => (
              <div key={tip.title} ref={addRef}
                className="ts-reveal ts-tip-card bg-white rounded-2xl p-6 border border-sky-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background: `linear-gradient(135deg,${tip.color},${tip.color}99)` }}>{tip.icon}</div>
                <h3 className="ts-display font-bold text-slate-900 text-lg mb-2">{tip.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
          <div ref={addRef} className="ts-reveal mt-7 p-5 rounded-2xl flex items-start gap-4"
            style={{ background: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)', border: '1px solid #bae6fd' }}>
            <BsInfoCircle size={18} className="text-sky-500 flex-shrink-0 mt-0.5" />
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong className="text-sky-700">Altitude Sickness Warning:</strong> AMS can affect anyone regardless of fitness. Never ignore severe headache, vomiting, or confusion at altitude — descend immediately. Carry a pulse oximeter on higher treks (normal SpO₂ at altitude: 85–95%).
            </p>
          </div>
        </div>
      </section>

      {/* ══ QUOTE BREAK ══ */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg,#0c1a3a 0%,#0c4a6e 55%,#0c1a3a 100%)' }}>
        <div className="absolute inset-0 ts-noise pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10" style={{ background: 'radial-gradient(circle,#38bdf8,transparent 65%)', transform: 'translate(30%,-30%)', filter: 'blur(30px)' }} />
        <div className="absolute left-6 top-4 text-white/4 ts-display pointer-events-none select-none" style={{ fontSize: '12rem', lineHeight: 0.8, fontWeight: 700 }}>"</div>
        <div ref={addRef} className="ts-reveal relative z-10 max-w-2xl mx-auto px-8 text-center">
          <FaQuoteLeft className="text-cyan-700 text-2xl mb-5 mx-auto" />
          <blockquote className="ts-display text-white italic leading-relaxed" style={{ fontSize: 'clamp(1.2rem,2.2vw,1.9rem)', fontWeight: 500 }}>
            "It is not the mountain we conquer, but ourselves."
          </blockquote>
          <p className="text-sky-300 font-semibold text-xs mt-4 tracking-widest uppercase">— Sir Edmund Hillary</p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[["70%","Nepal's terrain\nabove 3,000m"],["10","UNESCO World\nHeritage Sites"],["340+","Bird species\nalong the trails"]].map(([val,lbl]) => (
              <div key={val} className="text-center">
                <p className="ts-display text-sky-300 font-bold" style={{ fontSize: '1.5rem' }}>{val}</p>
                <p className="text-sky-100/50 text-xs mt-1 leading-snug whitespace-pre-line">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center mb-14">
            <p className="ts-eyebrow mb-3">Common Questions</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700 }}>
              Frequently Asked <em className="ts-accent-text">Questions</em>
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">Real answers to the questions every first-time Nepal trekker asks.</p>
          </div>
          <div ref={addRef} className="ts-reveal space-y-3">
            {faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg,#0ea5e9 0%,#0284c7 40%,#0c4a6e 100%)' }}>
        <div className="ts-noise absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%,rgba(255,255,255,0.07) 0%,transparent 55%),radial-gradient(ellipse at 20% 50%,rgba(6,182,212,0.13) 0%,transparent 55%)' }} />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 text-white/4 pointer-events-none select-none hidden lg:block ts-display" style={{ fontSize: '13rem', fontWeight: 700, lineHeight: 1 }}>✦</div>
        <div ref={addRef} className="ts-reveal relative z-10 max-w-2xl mx-auto text-center px-6">
          <p className="ts-eyebrow text-sky-100 mb-4">Plan Your Trek</p>
          <h2 className="ts-display text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 700 }}>
            Ready to start your<br /><em>Himalayan journey?</em>
          </h2>
          <p className="text-sky-100/75 text-sm leading-loose mb-9 max-w-md mx-auto">Browse detailed trek profiles, get personalised route recommendations, or reach out to our local experts for advice tailored to your experience level.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/treks" className="inline-flex items-center gap-2 bg-white text-sky-800 font-bold px-8 py-3.5 rounded-full text-sm shadow-2xl hover:bg-sky-50 transition-all hover:scale-105 duration-300">
              <GiHiking size={17} /> View Trek Guides
            </a>
            <a href="/contact" className="ts-btn-ghost inline-flex items-center gap-2 text-white font-medium px-8 py-3.5 rounded-full text-sm">
              Ask Our Experts <BsArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}