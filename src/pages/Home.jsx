// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { FaLeaf, FaStar, FaRoute, FaUsers, FaMedal, FaShieldAlt, FaQuoteLeft } from 'react-icons/fa';
import { GiMountainRoad, GiHiking, GiBackpack } from 'react-icons/gi';
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';
import { HiOutlineSparkles } from 'react-icons/hi';
import '../assets/css/theme.css';

export default function Home() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = el => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const features = [
    { icon: <GiMountainRoad size={22} />, title: 'Expert Guides',   desc: 'Certified local masters with deep Himalayan knowledge and high-altitude safety training.' },
    { icon: <GiBackpack     size={22} />, title: 'Authentic Stays', desc: 'Curated teahouses and homestays for genuine cultural immersion you cannot find elsewhere.' },
    { icon: <FaShieldAlt   size={20} />, title: 'Safety First',    desc: 'Top-tier gear, certified guides, emergency protocols, and comprehensive travel insurance.' },
    { icon: <FaLeaf        size={20} />, title: 'Eco-Conscious',   desc: 'Leave-no-trace policies, carbon offsets, and community-first sustainable trekking practices.' },
  ];

  const stats = [
    { icon: <FaUsers size={14} />, value: '1,000+', label: 'Happy Trekkers' },
    { icon: <FaRoute size={14} />, value: '15+',    label: 'Trek Routes'    },
    { icon: <FaMedal size={14} />, value: '14 Yrs', label: 'Experience'     },
    { icon: <FaStar  size={14} />, value: '4.9★',   label: 'Avg Rating'     },
  ];

  const treks = [
    {
      img: 'src/assets/img/everest.jpg',
      badge: 'Most Popular', badgeCls: 'bg-amber-400 text-slate-900',
      title: 'Everest Base Camp',
      duration: '14 Days', level: 'Challenging', levelCls: 'bg-orange-50 text-orange-700 border-orange-200',
      desc: "Walk in the footsteps of legends to the base of the world's highest peak through timeless Sherpa villages.",
      price: 'Rs. 1,85,000',
    },
    {
      img: 'src/assets/img/annapurna.jpg',
      badge: 'Scenic Route', badgeCls: 'bg-sky-500 text-white',
      title: 'Annapurna Circuit',
      duration: '14 Days', level: 'Moderate', levelCls: 'bg-sky-50 text-sky-700 border-sky-200',
      desc: 'Diverse landscapes from lush subtropical forests to arid high-altitude deserts with spectacular mountain vistas.',
      price: 'Rs. 1,60,000',
    },
    {
      img: 'src/assets/img/langtang.webp',
      badge: 'Hidden Gem', badgeCls: 'bg-cyan-500 text-white',
      title: 'Langtang Valley',
      duration: '8 Days', level: 'Moderate', levelCls: 'bg-sky-50 text-sky-700 border-sky-200',
      desc: 'A peaceful, less-crowded trail with stunning glacial lake views and the rich heritage of Tamang culture.',
      price: 'Rs. 1,20,000',
    },
  ];

  const reviews = [
    { name: 'Sarah M.', country: 'United Kingdom', initial: 'S', text: 'Absolutely life-changing. The guides were knowledgeable, warm, and made every moment feel truly magical.', stars: 5 },
    { name: 'Kenji T.', country: 'Japan',           initial: 'K', text: 'Perfect organisation, jaw-dropping views, and memories I will carry for the rest of my life.', stars: 5 },
    { name: 'Ana R.',   country: 'Brazil',           initial: 'A', text: 'Nepal Treks made my dream a flawless reality. I have already recommended them to everyone I know.', stars: 5 },
  ];

  return (
    <div className="ts-page overflow-x-hidden">

      {/* ══ HERO ══ */}
      <header className="relative flex items-center justify-center text-center text-white overflow-hidden"
        style={{ minHeight: '100vh', backgroundImage: `url('src/assets/img/home.avif')`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '68px' }}>

        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(12,26,58,0.35) 0%, rgba(14,165,233,0.22) 50%, rgba(12,26,58,0.92) 100%)' }} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.18), transparent 65%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.14), transparent 65%)', filter: 'blur(40px)' }} />
        <div className="ts-noise absolute inset-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16">
          {/* Eyebrow pill */}
          <div className="ts-anim-1 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-6"
            style={{ background: 'rgba(29, 181, 252, 0.4)', border: '1px solid rgba(147,219,250,0.28)', backdropFilter: 'blur(10px)' }}>
            <HiOutlineSparkles className=" text-sm" />
            <span className="ts-hero-eyebrow">Premier Trek Operator · Est. 2010</span>
          </div>

          <h1 className="ts-display ts-hero-text ts-anim-2"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.015em' }}>
            Discover the <em>Soul</em><br />of the Himalayas
          </h1>

          <p className="ts-anim-3 text-slate-200/80 mt-5 mx-auto leading-loose"
            style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', maxWidth: '500px' }}>
            Embark on a transformative journey — where ancient peaks meet timeless culture and every trail tells a story.
          </p>

          <div className="ts-anim-4 flex flex-wrap gap-3 justify-center mt-8">
            <a href="#treks" className="ts-btn-p inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-xl">
              <GiHiking size={17} /> Explore Treks <BsArrowRight size={14} />
            </a>
            <a href="/about" className="ts-btn-ghost inline-flex items-center gap-2 text-white font-medium px-7 py-3.5 rounded-full text-sm">
              Our Story
            </a>
          </div>

          {/* Stats glass pills */}
          <div className="ts-anim-4 mt-14 flex flex-wrap justify-center gap-3">
            {stats.map(({ icon, value, label }) => (
              <div key={label} className="ts-stat-pill flex items-center gap-3 px-4 py-3 rounded-2xl">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-cyan-300"
                  style={{ background: 'rgba(14,165,233,0.2)' }}>
                  {icon}
                </div>
                <div className="text-left">
                  <p className="ts-display text-white font-bold leading-none" style={{ fontSize: '1.15rem' }}>{value}</p>
                  <p className="text-white/45 text-[11px] mt-0.5 leading-none">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35">
          <span className="text-[10px] text-white tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
        </div>
      </header>

      {/* ══ WHY US ══ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center max-w-xl mx-auto mb-14">
            <p className="ts-eyebrow mb-3">Why Choose Us</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, lineHeight: 1.2 }}>
              Crafted for the <em className="ts-accent-text">Discerning</em> Adventurer
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">Every detail of your journey, thoughtfully arranged by people who live for the mountains.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div key={f.title} ref={addRef} className="ts-reveal ts-feat-card p-7 rounded-2xl cursor-default"
                style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="ts-feat-icon w-12 h-12 rounded-xl flex items-center justify-center mb-5">{f.icon}</div>
                <h3 className="ts-display font-bold text-slate-900 text-[1.2rem] mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED TREKS ══ */}
      <section id="treks" className="py-20" style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 55%, #f0f9ff 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal flex flex-wrap items-end justify-between gap-5 mb-12">
            <div>
              <p className="ts-eyebrow mb-2">Handpicked Routes</p>
              <div className="ts-divider mb-4" />
              <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700 }}>
                Featured <em>Treks</em>
              </h2>
            </div>
            <a href="/packages" className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm hover:gap-4 transition-all duration-300">
              View all treks <BsArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treks.map((t, i) => (
              <div key={t.title} ref={addRef} className="ts-reveal ts-card bg-white rounded-2xl overflow-hidden"
                style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="relative overflow-hidden" style={{ height: '210px' }}>
                  <img src={t.img} alt={t.title} className="ts-card-img w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 35%, rgba(12,26,58,0.58) 100%)' }} />
                  <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${t.badgeCls}`}>{t.badge}</span>
                  <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-full font-medium">{t.duration}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <h3 className="ts-display flex-1 font-bold text-slate-900 text-[1.15rem] leading-snug">{t.title}</h3>
                    <span className={`flex-shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full border ${t.levelCls}`}>{t.level}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{t.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-sky-50">
                    <div>
                      <p className="text-[10px] text-slate-400 mb-0.5">From</p>
                      <p className="ts-display text-sky-700 font-bold text-[1.25rem] leading-none">{t.price}</p>
                    </div>
                    <a href="/packages" className="ts-btn-p inline-flex items-center gap-1.5 text-white text-xs font-semibold px-4 py-2.5 rounded-xl">
                      Book Now <BsArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 40%, #0c4a6e 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle, #38bdf8, transparent 65%)', transform: 'translate(30%,-30%)', filter: 'blur(30px)' }} />
        <div className="ts-noise absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center mb-12">
            <p className="ts-eyebrow text-cyan-400 mb-3">Trekker Stories</p>
            <div className="ts-divider mx-auto mb-5"
             style={{ background: 'linear-gradient(90deg,#38bdf8,#06b6d4)' }} />
            <h2 className="ts-display text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700 }}>
              Voices from the <em>Trail</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={r.name} ref={addRef} className="ts-reveal ts-review-card p-7 rounded-2xl"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => <FaStar key={j} size={12} className="text-amber-400" />)}
                </div>
                <FaQuoteLeft className="text-cyan-700 text-lg mb-3" />
                <p className="ts-display text-white/80 italic leading-relaxed mb-6" style={{ fontSize: '1rem' }}>"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-sky-800/30">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: 'rgba(14,165,233,0.2)', border: '1px solid rgba(56,189,248,0.3)', color: '#7dd3fc' }}>
                    {r.initial}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-none">{r.name}</p>
                    <p className="text-sky-400 text-xs mt-0.5">{r.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 40%, #0c4a6e 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 50%, rgba(6,182,212,0.15) 0%, transparent 60%)`
        }} />
        <div className="ts-noise absolute inset-0 pointer-events-none" />
        {/* Decorative glyph */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 text-white/5 pointer-events-none select-none hidden lg:block ts-display"
          style={{ fontSize: '16rem', fontWeight: 700, lineHeight: 1 }}>✦</div>

        <div ref={addRef} className="ts-reveal relative z-10 max-w-2xl mx-auto text-center px-6">
          <p className="ts-eyebrow text-sky-100 mb-4">Start Your Journey</p>
          <h2 className="ts-display text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700 }}>
            Your next great <em>adventure</em><br />begins here.
          </h2>
          <p className="text-sky-100/75 text-sm leading-loose mb-9 max-w-md mx-auto">
            Let's craft the perfect Himalayan experience together — expert planning, flawless logistics, unforgettable memories.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/packages"
              className="inline-flex items-center gap-2 bg-white text-sky-800 font-bold px-8 py-3.5 rounded-full text-sm shadow-2xl hover:bg-sky-50 transition-all hover:scale-105 duration-300">
              <GiHiking size={17} /> Browse Packages
            </a>
            <a href="/contact" className="ts-btn-ghost inline-flex items-center gap-2 text-white font-medium px-8 py-3.5 rounded-full text-sm">
              Contact Us <BsArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}