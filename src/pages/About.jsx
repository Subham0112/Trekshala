// src/pages/About.jsx
import React, { useEffect, useRef } from 'react';
import { FaLeaf, FaFire, FaQuoteLeft, FaStar } from 'react-icons/fa';
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
    { year: '2010', title: 'Founded',         desc: "Dorje Sherpa's vision of authentic Himalayan adventures takes shape.",           img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' },
    { year: '2015', title: "Int'l Debut",     desc: 'Guided our first international group all the way to Everest Base Camp.',         img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80' },
    { year: '2018', title: 'Sustainability',  desc: 'Formalised our eco-pledge and launched a community reinvestment fund.',          img: 'https://images.unsplash.com/photo-1573153098012-67bdee4c62f1?auto=format&fit=crop&w=400&q=80' },
    { year: '2023', title: '1,000th Trekker', desc: 'Celebrated the milestone of 1,000 lives transformed by the mountains.',          img: 'src/assets/img/about1.avif' },
  ];

  const team = [
    { name: 'Dorje Sherpa',  role: 'Founder & Lead Guide',  desc: '20+ years of certified high-altitude expertise across all major Himalayan routes.', quote: 'The mountains teach us humility and strength.', img: null, initials: 'DS', icon: <GiHiking  size={28} />, color: '#0ea5e9' },
    { name: 'Pema Lama',     role: 'Operations Manager',    desc: 'Ensures every logistic detail is seamlessly planned before you leave home.',          quote: 'Planning your adventure is my adventure!',  img: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=500&q=80', initials: 'PL', icon: <GiCompass size={28} />, color: '#06b6d4' },
    { name: 'Rinzin Gurung', role: 'Cultural Guide',        desc: "Shares Nepal's living heritage — from ancient monasteries to traditional festivals.",  quote: "Every trail tells a story — I'm here to share it.", img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=500&q=80', initials: 'RG', icon: <GiBackpack size={28} />, color: '#0284c7' },
  ];

  const gallery = [
    { caption: 'Sunrise at Everest Base Camp', img: 'src/assets/img/everest.jpg'   },
    { caption: 'Annapurna Circuit',            img: 'src/assets/img/annapurna.jpg' },
    { caption: 'Langtang Valley Culture',      img: 'src/assets/img/langtang.webp' },
  ];

  const values = [
    { title: 'Authenticity',  desc: 'Real Nepal through local eyes — never packaged, always lived.',                  icon: <GiMountainRoad className="w-6 h-6" />, color: '#0ea5e9' },
    { title: 'Safety',        desc: 'Top-tier gear, certified guides, and emergency protocols at every step.',         icon: <HiOutlineShieldCheck className="w-6 h-6" />, color: '#0284c7' },
    { title: 'Sustainability', desc: 'Leave no trace, support local communities, and protect these sacred peaks.',      icon: <FaLeaf className="w-5 h-5" />, color: '#06b6d4' },
    { title: 'Passion',       desc: "We don't just guide treks — we live and breathe the mountains every single day.", icon: <FaFire className="w-5 h-5" />, color: '#0369a1' },
  ];

  return (
    <div className="ts-page overflow-x-hidden">

      {/* ══ HERO ══ */}
      <header className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
        style={{ backgroundImage: `url('src/assets/img/about.avif')`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '68px' }}>
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(12,26,58,0.30) 0%, rgba(14,165,233,0.20) 50%, rgba(12,26,58,0.90) 100%)' }} />
        {/* Cyan radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.16), transparent 60%)', filter: 'blur(50px)' }} />
        <div className="ts-noise absolute inset-0 pointer-events-none" />

        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-sky-400/60" />
            <p className="ts-eyebrow text-sky-300">About Nepal Treks</p>
            <div className="h-px w-10 bg-sky-400/60" />
          </div>

          <h1 className="ts-display ts-hero-text ts-anim-2"
            style={{ fontSize: 'clamp(3rem, 9vw, 6rem)', fontWeight: 700, lineHeight: 1.06 }}>
            Our <em>Story</em>
          </h1>

          <p className="ts-anim-3 text-slate-200/70 mt-4 text-base leading-relaxed max-w-md mx-auto">
            Our Journey · Our Passion · Our Promise
          </p>

          <div className="ts-anim-4 mt-8 flex flex-wrap gap-3 justify-center">
            <a href="#mission"
              className="ts-btn-p inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-xl">
              <GiMountainRoad size={17} /> Discover Our Mission
            </a>
          </div>
        </div>

        {/* Decorative floating card anchored to bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 hidden md:flex items-center gap-6 px-8 py-4 rounded-2xl ts-float-badge">
          {[['1,000+','Trekkers'],['15+','Routes'],['14','Years'],['4.9★','Rating']].map(([v,l]) => (
            <div key={l} className="text-center px-4 border-r border-sky-100 last:border-0">
              <p className="ts-display text-sky-700 font-bold text-xl leading-none">{v}</p>
              <p className="text-slate-500 text-xs mt-0.5">{l}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Extra spacer so the floating card doesn't overlap the next section on desktop */}
      <div className="hidden md:block h-14" />

      {/* ══ MISSION ── two-column, elegant ══ */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <div ref={addRef} className="ts-reveal-left order-2 lg:order-1">
            <p className="ts-eyebrow mb-3">Who We Are</p>
            <div className="ts-divider mb-5" />
            <h2 className="ts-display text-slate-900 mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, lineHeight: 1.18 }}>
              Our <em className="ts-accent-text">Mission</em>
            </h2>

            <p className="text-slate-600 text-base leading-loose mb-4">
              We believe trekking is more than just a walk — it's a journey into the heart of nature, culture, and oneself.
            </p>
            <p className="text-slate-600 text-base leading-loose mb-7">
              Our mission is to provide <strong className="text-sky-700 font-semibold">authentic, safe, and sustainable</strong> trekking experiences that forge a lasting bond between our guests and Nepal.
            </p>

            {/* Quote */}
            <div className="ts-quote-block flex items-start gap-4 p-5 rounded-2xl">
              <FaQuoteLeft className="text-sky-300 text-2xl flex-shrink-0 mt-1" />
              <p className="ts-display text-sky-900 italic text-[1rem] leading-relaxed">
                "We don't just show you Nepal — we help you feel it, breathe it, and carry it home in your heart."
              </p>
            </div>
          </div>

          <div ref={addRef} className="ts-reveal-right order-1 lg:order-2 relative">
            <img src="src/assets/img/about1.avif" alt="Trekking in Himalayas"
              className="rounded-3xl shadow-2xl w-full object-cover border border-sky-100"
              style={{ aspectRatio: '4/3' }} loading="lazy" />
            {/* Floating stat (mobile version) */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-sky-100 md:hidden">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-sky-600 text-xl"
                style={{ background: 'linear-gradient(135deg,#e0f2fe,#bae6fd)' }}><GiHiking /></div>
              <div><p className="ts-display font-bold text-slate-900 text-lg leading-none">1,000+</p><p className="text-slate-500 text-xs mt-0.5">Happy Trekkers</p></div>
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl pointer-events-none hidden lg:block"
              style={{ background: 'linear-gradient(135deg,#bae6fd,#e0f2fe)', opacity: 0.6 }} />
          </div>
        </div>
      </section>

      {/* ══ MILESTONES — horizontal timeline card row ══ */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg,#f0f9ff 0%,#e0f2fe 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center mb-14">
            <p className="ts-eyebrow mb-3">Our Journey</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700 }}>
              Key <em className="ts-accent-text">Milestones</em>
            </h2>
            <p className="mt-2 text-slate-500 text-sm">Moments that define who we are</p>
          </div>

          {/* Timeline connector line (desktop) */}
          <div className="relative">
            <div className="absolute top-10 left-0 right-0 h-px hidden lg:block pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, #38bdf8 20%, #06b6d4 80%, transparent)' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, i) => (
                <div key={m.year} ref={addRef}
                  className="ts-reveal ts-milestone-card rounded-2xl shadow-sm p-6 text-center"
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  {/* Year dot on timeline */}
                  <div className="relative w-20 h-20 mx-auto mb-5">
                    <img src={m.img} alt={m.year} className="w-full h-full object-cover rounded-full border-4 border-sky-100 shadow-md" loading="lazy" />
                    {/* Dot ring */}
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center shadow-md"
                      style={{ background: 'linear-gradient(135deg,#0ea5e9,#06b6d4)' }}>
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold text-sky-700 bg-sky-100 mb-2">{m.year}</span>
                  <h3 className="ts-display text-slate-800 font-bold text-lg mb-1">{m.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TEAM ── cards with top-image, quote footer ══ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center mb-14">
            <p className="ts-eyebrow mb-3">The People</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700 }}>
              Meet Our <em className="ts-accent-text">Team</em>
            </h2>
            <p className="mt-2 text-slate-500 text-sm">The heart and soul of every adventure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {team.map((member, i) => (
              <div key={member.name} ref={addRef}
                className="ts-reveal ts-team-card bg-white rounded-2xl overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}>

                {/* Top colour band — unique gradient per person */}
                <div className="relative h-52 overflow-hidden flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${member.color}cc 0%, #0c1a3a 100%)` }}>
                  {/* Wavy SVG decoration */}
                  <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 400 40" fill="none">
                    <path d="M0 40 Q100 0 200 20 Q300 40 400 10 L400 40 Z" fill="white" />
                  </svg>
                  <div className="ts-noise absolute inset-0 pointer-events-none" />

                  {member.img ? (
                    <img src={member.img} alt={member.name}
                      className="ts-team-img w-28 h-28 object-cover rounded-full border-4 border-white/25 shadow-2xl z-10" loading="lazy" />
                  ) : (
                    <div className="w-28 h-28 rounded-full border-4 border-white/25 flex items-center justify-center shadow-2xl z-10"
                      style={{ background: `${member.color}40` }}>
                      <span className="ts-display text-3xl font-bold text-white">{member.initials}</span>
                    </div>
                  )}
                </div>

                <div className="px-6 pb-6 pt-2 text-center">
                  <h3 className="ts-display text-slate-900 font-bold text-xl mb-0.5">{member.name}</h3>
                  <p className="text-sky-600 font-semibold text-xs tracking-wide uppercase mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{member.desc}</p>

                  {/* Icon badge */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                    style={{ background: `${member.color}18`, color: member.color }}>
                    {member.icon}
                  </div>

                  {/* Quote */}
                  <div className="p-4 rounded-xl text-sm italic text-white leading-relaxed"
                    style={{ background: `linear-gradient(135deg, ${member.color}, #0c1a3a)` }}>
                    <FaQuoteLeft className="inline mr-1.5 opacity-60 text-xs" />
                    {member.quote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GALLERY ── masonry-ish three columns ══ */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg,#f0f9ff,#e0f2fe)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center mb-12">
            <p className="ts-eyebrow mb-3">Visual Stories</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700 }}>
              Moments from the <em className="ts-accent-text">Trail</em>
            </h2>
            <p className="mt-2 text-slate-500 text-sm">A glimpse into shared adventures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {gallery.map((item, i) => (
              <div key={item.caption} ref={addRef}
                className="ts-reveal ts-gallery-item relative cursor-pointer group"
                style={{ aspectRatio: i === 1 ? '3/4' : '4/3', transitionDelay: `${i * 90}ms` }}>
                <img src={item.img} alt={item.caption} className="ts-gallery-img w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 flex items-end p-5"
                  style={{ background: 'linear-gradient(0deg, rgba(12,26,58,0.78) 0%, transparent 60%)' }}>
                  <div>
                    <p className="text-white font-semibold text-base leading-snug">{item.caption}</p>
                    <p className="text-sky-300 text-xs mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <BsArrowRight size={11} /> View Gallery
                    </p>
                  </div>
                </div>
                {/* Hover shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1) 0%, transparent 60%)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALUES ── icon grid ══ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center mb-12">
            <p className="ts-eyebrow mb-3">What We Stand For</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700 }}>
              Our Core <em className="ts-accent-text">Values</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={v.title} ref={addRef}
                className="ts-reveal ts-value-card p-7 rounded-2xl text-center cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="ts-value-icon inline-flex items-center justify-center h-14 w-14 rounded-2xl mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="ts-display text-slate-800 font-bold text-xl mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 40%, #0c4a6e 100%)' }}>
        <div className="ts-noise absolute inset-0 pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #bae6fd, transparent 65%)', transform: 'translate(25%,-25%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle, #38bdf8, transparent 65%)', transform: 'translate(-25%,25%)' }} />

        <div ref={addRef} className="ts-reveal relative z-10 max-w-xl mx-auto text-center px-6">
          <p className="ts-eyebrow text-sky-100 mb-4">Ready for Your Adventure?</p>
          <h2 className="ts-display text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700 }}>
            Ready for your <em>adventure?</em>
          </h2>
          <p className="text-sky-100/70 text-sm leading-loose mb-8 max-w-md mx-auto">
            Let's find the perfect trek. Expert planning, every step of the way.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/packages"
              className="flex items-center gap-2 bg-white text-sky-800 font-bold px-7 py-3.5 rounded-full text-sm shadow-xl hover:bg-sky-50 transition-all hover:scale-105 duration-300">
              <GiHiking size={17} /> View Trekking Packages
            </a>
            <a href="/contact"
              className="ts-btn-ghost flex items-center gap-2 text-white font-medium px-7 py-3.5 rounded-full text-sm">
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}