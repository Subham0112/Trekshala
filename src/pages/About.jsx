// src/pages/About.jsx
import React, { useEffect, useRef } from 'react';
import { FaLeaf, FaFire, FaQuoteLeft } from 'react-icons/fa';
import { GiMountainRoad, GiHiking, GiBackpack, GiCompass } from 'react-icons/gi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import '../assets/css/theme.css';

export default function About() {
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

  const milestones = [
    { year: '2010', title: 'Founded',           desc: "Dorje Sherpa's vision of authentic Himalayan adventures begins.",             img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' },
    { year: '2015', title: "First Int'l Group", desc: 'Successfully guided our first international group to Everest Base Camp.',      img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80' },
    { year: '2018', title: 'Sustainability',    desc: 'Formalized our eco-friendly pledge and community reinvestment program.',       img: 'https://images.unsplash.com/photo-1573153098012-67bdee4c62f1?auto=format&fit=crop&w=400&q=80' },
    { year: '2023', title: '1000th Trekker',    desc: 'Celebrated a milestone — 1,000 lives transformed by the mountains.',          img: 'src/assets/img/about1.avif' },
  ];

  const team = [
    { name: 'Dorje Sherpa',  role: 'Founder & Lead Guide',  desc: '20+ years of high-altitude expertise and certified mountain guide.',                quote: 'The mountains teach us humility and strength.',      img: null,                                                                                                               initials: 'DS', icon: <GiHiking className="text-3xl text-blue-500" /> },
    { name: 'Pema Lama',     role: 'Operations Manager',    desc: 'Ensures every detail of your trek is perfectly planned and executed.',               quote: 'Planning your adventure is my adventure!',          img: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=500&q=80',                initials: 'PL', icon: <GiCompass className="text-3xl text-blue-500" /> },
    { name: 'Rinzin Gurung', role: 'Cultural Guide',        desc: "Shares Nepal's rich heritage — from ancient monasteries to living traditions.",       quote: "Every trail tells a story — I'm here to share it.", img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=500&q=80',                initials: 'RG', icon: <GiBackpack className="text-3xl text-blue-500" /> },
  ];

  const gallery = [
    { caption: 'Sunrise at Everest Base Camp', img: 'src/assets/img/everest.jpg' },
    { caption: 'Annapurna Circuit',            img: 'src/assets/img/annapurna.jpg' },
    { caption: 'Langtang Valley Culture',      img: 'src/assets/img/langtang.webp' },
  ];

  const values = [
    { title: 'Authenticity',  desc: 'Real Nepal through local eyes — not a packaged tourist experience.',          icon: <GiMountainRoad className="w-7 h-7" /> },
    { title: 'Safety',        desc: 'Top-tier gear, emergency protocols, and certified guides at every step.',     icon: <HiOutlineShieldCheck className="w-7 h-7" /> },
    { title: 'Sustainability',desc: 'Leave no trace, support local communities, protect the peaks.',               icon: <FaLeaf className="w-6 h-6" /> },
    { title: 'Passion',       desc: "We don't just guide treks — we live and breathe the mountains.",              icon: <FaFire className="w-6 h-6" /> },
  ];

  return (
    <div className="ts-body overflow-x-hidden">

      {/* ── HERO ── */}
      <header className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
        style={{ backgroundImage: `url('src/assets/img/about.avif')`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '68px' }}>
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.38) 0%, rgba(0, 0, 0, 0.42) 55%, rgba(0, 0, 0, 0.61) 100%)' }} />
        {/* Blue glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none opacity-18"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)', filter: 'blur(56px)' }} />

        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-blue-400/60" />
            <p className="text-blue-300 text-[11px] font-semibold tracking-[3px] uppercase">About Nepal Treks</p>
            <div className="h-px w-10 bg-blue-400/60" />
          </div>

          <h1 className="ts-display ts-hero-text"
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 700, lineHeight: 1.08 }}>
            Our <em>Story</em>
          </h1>

          <p className="text-slate-200/80 mt-4 text-base leading-relaxed max-w-md mx-auto">
            Our Journey · Our Passion · Our Promise
          </p>

          <a href="#mission"
            className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg">
            <GiMountainRoad size={18} /> Discover Our Mission
          </a>
        </div>
      </header>

      {/* ── MISSION ── */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <div ref={addRef} className="ts-reveal-left order-2 lg:order-1">
            <p className="text-blue-600 text-[11px] font-semibold tracking-[3px] uppercase mb-3">Who We Are</p>
            <h2 className="ts-display text-slate-900 mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, lineHeight: 1.2 }}>
              Our <em>Mission</em>
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-sky-300 mb-6 rounded-full" />

            <p className="text-slate-600 text-base leading-relaxed mb-4">
              We believe trekking is more than just a walk — it's a journey into the heart of nature, culture, and oneself.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Our mission is to provide <strong className="text-blue-700">authentic, safe, and sustainable</strong> trekking experiences that forge a lasting connection between our guests and Nepal.
            </p>

            {/* Quote block */}
            <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <FaQuoteLeft className="text-blue-300 text-2xl flex-shrink-0 mt-1" />
              <p className="text-blue-900 italic text-sm font-medium leading-relaxed">
                "We don't just show you Nepal — we help you feel it, breathe it, and carry it home in your heart."
              </p>
            </div>
          </div>

          {/* Image */}
          <div ref={addRef} className="ts-reveal-right order-1 lg:order-2 relative">
            <img src="src/assets/img/about1.avif" alt="Trekking in Himalayas"
              className="rounded-3xl shadow-2xl w-full object-cover"
              style={{ aspectRatio: '4/3' }} loading="lazy" />
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-blue-50">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                <GiHiking />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg leading-none">1,000+</p>
                <p className="text-slate-500 text-xs mt-0.5">Happy Trekkers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f0fe 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center mb-14">
            <p className="text-blue-600 text-[11px] font-semibold tracking-[3px] uppercase mb-3">Our Journey</p>
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700 }}>
              Key <em>Milestones</em>
            </h2>
            <p className="mt-2 text-slate-500 text-sm">Moments that define who we are</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={m.year} ref={addRef}
                className="ts-reveal ts-milestone-card bg-white rounded-2xl shadow-sm p-6 text-center border border-blue-50"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <img src={m.img} alt={m.year} className="w-full h-full object-cover rounded-full border-4 border-blue-100" loading="lazy" />
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold text-blue-700 bg-blue-100 mb-2">{m.year}</span>
                <h3 className="ts-display text-slate-800 font-bold text-lg mb-1">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center mb-14">
            <p className="text-blue-600 text-[11px] font-semibold tracking-[3px] uppercase mb-3">The People</p>
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700 }}>
              Meet Our <em>Team</em>
            </h2>
            <p className="mt-2 text-slate-500 text-sm">The heart and soul of every adventure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {team.map((member, i) => (
              <div key={member.name} ref={addRef}
                className="ts-reveal ts-team-card bg-white rounded-2xl overflow-hidden border border-blue-50 shadow-md"
                style={{ transitionDelay: `${i * 100}ms` }}>

                {/* Card top — blue gradient */}
                <div className="relative h-48 overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1d4ed8 100%)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {member.img ? (
                      <img src={member.img} alt={member.name}
                        className="ts-team-img w-32 h-32 object-cover rounded-full border-4 border-white/20 shadow-xl" loading="lazy" />
                    ) : (
                      <div className="w-32 h-32 rounded-full border-4 border-white/20 bg-blue-900 flex items-center justify-center shadow-xl">
                        <span className="text-3xl font-bold text-blue-200">{member.initials}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="ts-display text-slate-900 font-bold text-xl mb-0.5">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-xs tracking-wide mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{member.desc}</p>
                  <div className="flex justify-center mb-4">{member.icon}</div>
                  <div className="p-3.5 rounded-xl text-sm italic text-white leading-relaxed"
                    style={{ background: 'linear-gradient(135deg, #1d4ed8, #0f172a)' }}>
                    <FaQuoteLeft className="inline mr-1.5 text-blue-300 text-xs" />
                    {member.quote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-20" style={{ background: '#f0f7ff' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center mb-12">
            <p className="text-blue-600 text-[11px] font-semibold tracking-[3px] uppercase mb-3">Visual Stories</p>
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700 }}>
              Moments from the <em>Trail</em>
            </h2>
            <p className="mt-2 text-slate-500 text-sm">A glimpse into shared adventures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {gallery.map((item, i) => (
              <div key={item.caption} ref={addRef}
                className="ts-reveal ts-gallery-item relative cursor-pointer shadow-md border border-blue-50"
                style={{ aspectRatio: '4/3', transitionDelay: `${i * 90}ms` }}>
                <img src={item.img} alt={item.caption} className="ts-gallery-img w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 flex items-end p-5"
                  style={{ background: 'linear-gradient(0deg, rgba(15,23,42,0.78) 0%, transparent 60%)' }}>
                  <div>
                    <p className="text-white font-semibold text-base">{item.caption}</p>
                    <p className="text-blue-300 text-xs mt-1 flex items-center gap-1"><BsArrowRight /> View Gallery</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center mb-12">
            <p className="text-blue-600 text-[11px] font-semibold tracking-[3px] uppercase mb-3">What We Stand For</p>
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700 }}>
              Our Core <em>Values</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={v.title} ref={addRef}
                className="ts-reveal ts-value-card p-6 rounded-2xl border border-blue-50 text-center"
                style={{ transitionDelay: `${i * 80}ms`, background: 'linear-gradient(160deg, #eff6ff 0%, #ffffff 100%)' }}>
                <div className="ts-value-icon inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="ts-display text-slate-800 font-bold text-xl mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1db3d8 0%, #2aa8b1 45%, #0f282a 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent 70%)', transform: 'translate(25%,-25%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)', transform: 'translate(-25%,25%)' }} />

        <div ref={addRef} className="ts-reveal relative z-10 max-w-xl mx-auto text-center px-6">
          <p className="text-blue-300 text-[11px] font-semibold tracking-[3px] uppercase mb-4">Ready for Your Adventure?</p>
          <h2 className="ts-display text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700 }}>
            Ready for your <em>adventure?</em>
          </h2>
          <p className="text-blue-100/70 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Let's find the perfect trek. Expert planning, every step of the way.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/packages"
              className="flex items-center gap-2 bg-white text-blue-900 font-bold px-7 py-3 rounded-full text-sm shadow-xl hover:bg-blue-50 transition-all hover:scale-105 duration-300">
              <GiHiking size={16} /> View Trekking Packages
            </a>
            <a href="/contact"
              className="ts-btn-s flex items-center gap-2 text-white font-medium px-7 py-3 rounded-full text-sm"
              style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}