// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { FaMountain, FaLeaf, FaStar, FaRoute, FaUsers, FaMedal } from 'react-icons/fa';
import { GiMountainRoad, GiHiking, GiBackpack } from 'react-icons/gi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import '../assets/css/home.css';

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
    { icon: <GiMountainRoad size={22} />, title: 'Expert Guides', desc: 'Certified local masters with deep Himalayan knowledge and high-altitude safety training.' },
    { icon: <GiBackpack size={22} />, title: 'Authentic Stays', desc: 'Curated homestays and teahouses for genuine cultural immersion.' },
    { icon: <HiOutlineShieldCheck size={22} />, title: 'Safety First', desc: 'Top-tier gear, emergency protocols, and comprehensive insurance.' },
    { icon: <FaLeaf size={20} />, title: 'Eco-Conscious', desc: 'Leave-no-trace policies and community-first sustainable practices.' },
  ];

  const stats = [
    { icon: <FaUsers size={15} />, value: '1,000+', label: 'Happy Trekkers' },
    { icon: <FaRoute size={15} />, value: '15+',    label: 'Trek Routes' },
    { icon: <FaMedal size={15} />, value: '14 Yrs', label: 'Experience' },
    { icon: <FaStar size={15} />,  value: '4.9 ★',  label: 'Avg Rating' },
  ];

  const treks = [
    {
      img: 'src/assets/img/everest.jpg',
      badge: 'Most Popular',
      title: 'Everest Base Camp',
      duration: '14 Days',
      level: 'Challenging',
      levelCls: 'bg-amber-100 text-amber-700',
      desc: "Follow the footsteps of legends to the base of the world's highest peak through Sherpa villages.",
      price: 'Rs. 1,85,000',
    },
    {
      img: 'src/assets/img/annapurna.jpg',
      badge: 'Scenic Route',
      title: 'Annapurna Circuit',
      duration: '14 Days',
      level: 'Moderate',
      levelCls: 'bg-green-100 text-green-700',
      desc: 'Diverse landscapes from lush subtropical forests to arid high-altitude deserts with stunning views.',
      price: 'Rs. 1,60,000',
    },
    {
      img: 'src/assets/img/langtang.webp',
      badge: 'Hidden Gem',
      title: 'Langtang Valley',
      duration: '8 Days',
      level: 'Moderate',
      levelCls: 'bg-green-100 text-green-700',
      desc: 'A peaceful, less-crowded trail with stunning glacial views and rich Tamang cultural heritage.',
      price: 'Rs. 1,20,000',
    },
  ];

  const reviews = [
    { name: 'Sarah M.', country: 'United Kingdom', initial: 'S', text: 'Absolutely life-changing. The guides were exceptional and made every moment special.', stars: 5 },
    { name: 'Kenji T.', country: 'Japan', initial: 'K', text: 'Perfect organization, breathtaking views, and memories that will last a lifetime.', stars: 5 },
    { name: 'Ana R.', country: 'Brazil', initial: 'A', text: 'Nepal Treks made my dream trek a reality. Every detail was handled flawlessly.', stars: 5 },
  ];

  return (
    <div className="nt-body overflow-x-hidden">

      {/* ── HERO ── */}
      <header
        className="relative flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          minHeight: '100vh',
          backgroundImage: `url('src/assets/img/home.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '68px',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.52) 50%, rgba(5,46,22,0.88) 100%)' }}
        />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-14">

          {/* Eyebrow line */}
          <div className="nt-anim-1 flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-green-400/60" />
            <span className="text-green-400 text-[11px] font-semibold tracking-[3px] uppercase">
              Premier Trek Operator Since 2010
            </span>
            <div className="h-px w-10 bg-green-400/60" />
          </div>

          {/* Headline — smaller, cleaner */}
          <h1
            className="nt-display nt-hero-text nt-anim-2"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.01em' }}
          >
            Discover the <em>Heart</em>
            <br />of the Himalayas
          </h1>

          <p
            className="nt-anim-3 text-white/70 mt-4 mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(0.88rem, 1.6vw, 1rem)', maxWidth: '480px' }}
          >
            Embark on a transformative journey — where ancient peaks meet timeless culture.
          </p>

          {/* CTA buttons */}
          <div className="nt-anim-4 flex flex-wrap gap-3 justify-center mt-7">
            <a
              href="#treks"
              className="nt-btn-p flex items-center gap-2 bg-green-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm"
            >
              <GiHiking size={16} />
              Explore Treks
              <BsArrowRight size={13} />
            </a>
            <a
              href="/about"
              className="nt-btn-s flex items-center gap-2 text-white font-medium px-6 py-2.5 rounded-full text-sm"
              style={{ border: '1.5px solid rgba(255,255,255,0.28)' }}
            >
              Our Story
            </a>
          </div>

          {/* Stats row — glass cards */}
          <div className="nt-anim-4 mt-12 flex flex-wrap justify-center gap-3">
            {stats.map(({ icon, value, label }) => (
              <div
                key={label}
                className="nt-stat-card flex items-center gap-3 px-4 py-3 rounded-2xl"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/20 text-green-300 flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div className="text-left">
                  <div className="nt-display text-white font-bold leading-none" style={{ fontSize: '1.1rem' }}>
                    {value}
                  </div>
                  <div className="text-white/45 leading-none mt-0.5" style={{ fontSize: '11px' }}>
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle scroll line — no text */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-35">
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent mx-auto" />
          <div className="w-1 h-1 rounded-full bg-white mx-auto mt-1" />
        </div>
      </header>

      {/* ── WHY US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="nt-reveal nt-gold-bar text-center max-w-md mx-auto mb-12">
            <p className="text-green-700 text-[11px] font-semibold tracking-[3px] uppercase mb-2">Why Us</p>
            <h2
              className="nt-display text-slate-900"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 700, lineHeight: 1.25 }}
            >
              Crafted for the <em className="text-green-700">Discerning</em> Adventurer
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              Every detail of your journey, thoughtfully arranged.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                ref={addRef}
                className="nt-reveal nt-feat-card p-6 rounded-2xl border border-slate-100"
                style={{
                  transitionDelay: `${i * 70}ms`,
                  background: 'linear-gradient(160deg, #f0fdf4 0%, #fff 100%)',
                }}
              >
                <div className="nt-feat-icon w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-green-700 bg-green-100">
                  {f.icon}
                </div>
                <h3 className="nt-display font-bold text-slate-800 text-lg mb-1.5">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED TREKS ── */}
      <section id="treks" className="py-20" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0fdf4 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="nt-reveal flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-green-700 text-[11px] font-semibold tracking-[3px] uppercase mb-1.5">Handpicked Routes</p>
              <h2
                className="nt-display text-slate-900"
                style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 700 }}
              >
                Featured <em>Treks</em>
              </h2>
            </div>
            <a href="/packages" className="flex items-center gap-1.5 text-green-700 font-semibold text-sm hover:gap-3 transition-all duration-300">
              View all treks <BsArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treks.map((t, i) => (
              <div
                key={t.title}
                ref={addRef}
                className="nt-reveal nt-trek-card bg-white rounded-2xl overflow-hidden shadow border border-slate-100"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  <img src={t.img} alt={t.title} className="nt-trek-img w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)' }} />
                  <span className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {t.badge}
                  </span>
                  <span className="absolute top-3 right-3 bg-black/50 backdrop-blur text-white text-[11px] px-2.5 py-1 rounded-full">
                    {t.duration}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="nt-display flex-1 font-bold text-slate-900 text-[1.2rem] leading-snug">{t.title}</h3>
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${t.levelCls}`}>
                      {t.level}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{t.desc}</p>
                  <div className="flex items-center justify-between pt-3.5 border-t border-slate-100">
                    <div>
                      <p className="text-[11px] text-slate-400">From</p>
                      <p className="nt-display text-green-700 font-bold text-lg">{t.price}</p>
                    </div>
                    <a
                      href="/packages"
                      className="nt-btn-p flex items-center gap-1.5 bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-xl"
                    >
                      Book Now <BsArrowRight size={11} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ background: '#052e16' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="nt-reveal text-center mb-12">
            <p className="text-green-400 text-[11px] font-semibold tracking-[3px] uppercase mb-3">Trekker Stories</p>
            <h2
              className="nt-display text-white"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 700 }}
            >
              Voices from the <em>Trail</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                ref={addRef}
                className="nt-reveal nt-review-card p-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.05)', transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <FaStar key={j} size={12} className="text-amber-400" />
                  ))}
                </div>
                <p className="nt-display text-white/85 text-[0.95rem] italic leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-green-900 text-green-300 flex items-center justify-center font-semibold text-sm">
                    {r.initial}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{r.name}</p>
                    <p className="text-green-400 text-xs">{r.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #14532d 0%, #052e16 60%, #0f3d22 100%)' }}
      >
        <div
          className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle, #4ade80, transparent 70%)', transform: 'translate(25%,-25%)' }}
        />
        <div ref={addRef} className="nt-reveal relative z-10 max-w-xl mx-auto text-center px-6">
          <p className="text-green-400 text-[11px] font-semibold tracking-[3px] uppercase mb-4">Start Your Journey</p>
          <h2
            className="nt-display text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 700 }}
          >
            Your next great <em>adventure</em> begins here.
          </h2>
          <p className="text-green-200/75 text-sm leading-relaxed mb-8">
            Let's craft the perfect Himalayan experience together. Expert planning, every step of the way.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="/packages"
              className="flex items-center gap-2 bg-white text-green-900 font-bold px-6 py-2.5 rounded-full text-sm shadow-xl hover:bg-green-50 transition-all hover:scale-105 duration-300"
            >
              <GiHiking size={16} /> Browse Packages
            </a>
            <a
              href="/contact"
              className="nt-btn-s flex items-center gap-2 text-white font-medium px-6 py-2.5 rounded-full text-sm"
              style={{ border: '1.5px solid rgba(255,255,255,0.28)' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}