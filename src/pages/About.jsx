// src/pages/About.jsx
import React, { useEffect, useRef } from 'react';
import { FaLeaf, FaFire, FaQuoteLeft } from 'react-icons/fa';
import { GiMountainRoad, GiHiking, GiBackpack, GiCompass } from 'react-icons/gi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
`;

const STYLES = `
  .nt-font-display { font-family: 'Playfair Display', Georgia, serif; }
  .nt-font-body { font-family: 'DM Sans', system-ui, sans-serif; }

  .nt-hero-text {
    background: linear-gradient(135deg, #d4f5a0 0%, #a7f3d0 40%, #6ee7b7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .nt-scroll-reveal {
    opacity: 0;
    transform: translateY(36px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .nt-scroll-reveal.visible { opacity: 1; transform: translateY(0); }

  .nt-slide-left {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .nt-slide-left.visible { opacity: 1; transform: translateX(0); }

  .nt-slide-right {
    opacity: 0;
    transform: translateX(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .nt-slide-right.visible { opacity: 1; transform: translateX(0); }

  .nt-milestone-card {
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    position: relative;
    overflow: hidden;
  }
  .nt-milestone-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #15803d, #4ade80);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }
  .nt-milestone-card:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(0,0,0,0.12); }
  .nt-milestone-card:hover::after { transform: scaleX(1); }

  .nt-team-card {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  .nt-team-card:hover { transform: translateY(-10px); box-shadow: 0 32px 56px rgba(0,0,0,0.15); }
  .nt-team-card:hover .nt-team-img { transform: scale(1.05); }
  .nt-team-img { transition: transform 0.5s ease; }

  .nt-gallery-item {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    overflow: hidden;
    border-radius: 20px;
  }
  .nt-gallery-item:hover { transform: scale(1.02); box-shadow: 0 24px 48px rgba(0,0,0,0.2); }
  .nt-gallery-item:hover img { transform: scale(1.08); }
  .nt-gallery-item img { transition: transform 0.6s ease; }

  .nt-value-card {
    transition: all 0.35s ease;
    position: relative;
    overflow: hidden;
  }
  .nt-value-card:hover { transform: translateY(-6px); }
  .nt-value-card:hover .nt-value-icon { background: linear-gradient(135deg, #15803d, #166534); color: white; }
  .nt-value-icon { transition: all 0.35s ease; }

  .nt-btn-primary {
    background: linear-gradient(135deg, #15803d, #166534);
    transition: all 0.3s ease;
  }
  .nt-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(21,128,61,0.45); }

  .nt-noise-overlay {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    background-size: 200px 200px;
  }
`;

export default function About() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const milestones = [
    { year: '2010', title: 'Founded', desc: "Dorje Sherpa's vision of authentic Himalayan adventures begins.", img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' },
    { year: '2015', title: "First Int'l Group", desc: 'Successfully guided our first international group to Everest Base Camp.', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80' },
    { year: '2018', title: 'Sustainability', desc: 'Formalized our eco-friendly pledge and community reinvestment program.', img: 'https://images.unsplash.com/photo-1573153098012-67bdee4c62f1?auto=format&fit=crop&w=400&q=80' },
    { year: '2023', title: '1000th Trekker', desc: 'Celebrated a milestone — 1,000 lives transformed by the mountains.', img: 'src/assets/img/about1.avif' },
  ];

  const team = [
    { name: 'Dorje Sherpa', role: 'Founder & Lead Guide', desc: '20+ years of high-altitude expertise and certified mountain guide.', quote: 'The mountains teach us humility and strength.', img: null, icon: <GiHiking className="text-4xl text-green-600" />, initials: 'DS' },
    { name: 'Pema Lama', role: 'Operations Manager', desc: 'Ensures every detail of your trek is perfectly planned and executed.', quote: 'Planning your adventure is my adventure!', img: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=500&q=80', icon: <GiCompass className="text-4xl text-green-600" />, initials: 'PL' },
    { name: 'Rinzin Gurung', role: 'Cultural Guide', desc: "Shares Nepal's rich heritage — from ancient monasteries to living traditions.", quote: "Every trail tells a story — I'm here to share it.", img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=500&q=80', icon: <GiBackpack className="text-4xl text-green-600" />, initials: 'RG' },
  ];

  const gallery = [
    { caption: 'Sunrise at Everest Base Camp', img: 'src/assets/img/everest.jpg' },
    { caption: 'Annapurna Circuit', img: 'src/assets/img/annapurna.jpg' },
    { caption: 'Langtang Valley Culture', img: 'src/assets/img/langtang.webp' },
  ];

  const values = [
    { title: 'Authenticity', desc: 'Real Nepal through local eyes — not a packaged tourist experience.', icon: <GiMountainRoad className="h-7 w-7" /> },
    { title: 'Safety', desc: 'Top-tier gear, emergency protocols, and certified guides at every step.', icon: <HiOutlineShieldCheck className="h-7 w-7" /> },
    { title: 'Sustainability', desc: 'Leave no trace, support local communities, protect the peaks.', icon: <FaLeaf className="h-7 w-7" /> },
    { title: 'Passion', desc: 'We don\'t just guide treks — we live and breathe the mountains.', icon: <FaFire className="h-7 w-7" /> },
  ];

  return (
    <>
      <style>{FONTS}{STYLES}</style>

      {/* ── HERO ── */}
      <header
        className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden nt-font-body"
        style={{ backgroundImage: `url('src/assets/img/about.avif')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 60%, rgba(5,46,22,0.88) 100%)' }} />
        <div className="nt-noise-overlay absolute inset-0 pointer-events-none" />

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-4">About Nepal Treks</p>
          <h1 className="nt-font-display nt-hero-text" style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', fontWeight: 900, lineHeight: 1.05 }}>
            Our <em>Story</em>
          </h1>
          <div className="flex items-center gap-4 justify-center my-6">
            <div className="flex-1 max-w-24 h-px bg-green-500/40" />
            <p className="text-slate-200 text-lg font-light">Our Journey · Our Passion · Our Promise</p>
            <div className="flex-1 max-w-24 h-px bg-green-500/40" />
          </div>
          <a
            href="#mission"
            className="mt-6 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <GiMountainRoad className="text-xl" />
            Discover Our Mission
          </a>
        </div>
      </header>

      {/* ── MISSION ── */}
      <section id="mission" className="py-24 lg:py-32 bg-white nt-font-body">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={addRef} className="nt-slide-left order-2 lg:order-1">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-4">Who We Are</p>
            <h2 className="nt-font-display text-slate-900 mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}>
              Our <em>Mission</em>
            </h2>
            <div className="w-14 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 mb-8 rounded-full" />
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              We believe trekking is more than just a walk — it's a journey into the heart of nature, culture, and oneself.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our mission is to provide <strong className="text-green-800">authentic, safe, and sustainable</strong> trekking experiences that forge a lasting connection between our guests and Nepal.
            </p>
            <div className="flex items-start gap-4 p-5 bg-green-50 rounded-2xl border border-green-100">
              <FaQuoteLeft className="text-green-300 text-3xl flex-shrink-0 mt-1" />
              <p className="text-green-900 italic font-medium leading-relaxed">
                "We don't just show you Nepal — we help you feel it, breathe it, and carry it home in your heart."
              </p>
            </div>
          </div>

          <div ref={addRef} className="nt-slide-right order-1 lg:order-2 relative">
            <img
              src="src/assets/img/about1.avif"
              alt="Trekking in Himalayas"
              className="rounded-3xl shadow-2xl w-full object-cover"
              style={{ aspectRatio: '4/3' }}
              loading="lazy"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-700 text-2xl">
                <GiHiking />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-xl">1,000+</p>
                <p className="text-slate-500 text-sm">Happy Trekkers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="py-24 lg:py-32 nt-font-body" style={{ background: 'linear-gradient(180deg, #f8fafc, #f0fdf4)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addRef} className="nt-scroll-reveal text-center mb-16">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Our Journey</p>
            <h2 className="nt-font-display text-slate-900" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
              Key <em>Milestones</em>
            </h2>
            <p className="mt-3 text-slate-500 text-lg">Moments that define who we are</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                ref={addRef}
                className="nt-scroll-reveal nt-milestone-card bg-white rounded-2xl shadow-md p-6 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative w-24 h-24 mx-auto mb-5">
                  <img src={m.img} alt={m.year} className="w-full h-full object-cover rounded-full border-4 border-green-100" loading="lazy" />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-green-700 bg-green-100 mb-3">{m.year}</div>
                <h3 className="nt-font-display text-slate-800 font-bold text-lg mb-2">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 lg:py-32 bg-white nt-font-body">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addRef} className="nt-scroll-reveal text-center mb-16">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">The People</p>
            <h2 className="nt-font-display text-slate-900" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
              Meet Our <em>Team</em>
            </h2>
            <p className="mt-3 text-slate-500 text-lg">The heart and soul of every adventure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={member.name}
                ref={addRef}
                className="nt-scroll-reveal nt-team-card bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Card top */}
                <div className="relative h-52 overflow-hidden" style={{ background: 'linear-gradient(135deg, #052e16, #14532d)' }}>
                  <div className="nt-noise-overlay absolute inset-0" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {member.img ? (
                      <img src={member.img} alt={member.name} className="nt-team-img w-36 h-36 object-cover rounded-full border-4 border-white/20 shadow-xl" loading="lazy" />
                    ) : (
                      <div className="w-36 h-36 rounded-full border-4 border-white/20 bg-green-900 flex items-center justify-center shadow-xl">
                        <span className="text-4xl font-bold text-green-300">{member.initials}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-7 text-center">
                  <h3 className="nt-font-display text-slate-900 font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-green-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{member.desc}</p>

                  <div className="flex justify-center mb-5 text-green-600">
                    {member.icon}
                  </div>

                  <div className="p-4 rounded-2xl text-sm italic leading-relaxed text-white"
                    style={{ background: 'linear-gradient(135deg, #15803d, #052e16)' }}>
                    <FaQuoteLeft className="inline mr-2 text-green-400 text-xs" />
                    {member.quote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-24 lg:py-32 nt-font-body" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addRef} className="nt-scroll-reveal text-center mb-16">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Visual Stories</p>
            <h2 className="nt-font-display text-slate-900" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
              Moments from the <em>Trail</em>
            </h2>
            <p className="mt-3 text-slate-500 text-lg">A glimpse into shared adventures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <div
                key={item.caption}
                ref={addRef}
                className="nt-scroll-reveal nt-gallery-item relative shadow-lg cursor-pointer"
                style={{ transitionDelay: `${i * 100}ms`, aspectRatio: '4/3' }}
              >
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 flex items-end p-6"
                  style={{ background: 'linear-gradient(0deg, rgba(5,46,22,0.8) 0%, transparent 60%)' }}>
                  <div>
                    <p className="text-white font-semibold text-lg">{item.caption}</p>
                    <p className="text-green-300 text-sm mt-1 flex items-center gap-1.5"><BsArrowRight /> View Gallery</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 lg:py-32 bg-white nt-font-body">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addRef} className="nt-scroll-reveal text-center mb-16">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">What We Stand For</p>
            <h2 className="nt-font-display text-slate-900" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
              Our Core <em>Values</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                ref={addRef}
                className="nt-scroll-reveal nt-value-card p-8 rounded-2xl border border-slate-100 text-center"
                style={{ transitionDelay: `${i * 80}ms`, background: 'linear-gradient(160deg, #f0fdf4, #ffffff)' }}
              >
                <div className="nt-value-icon inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-green-100 text-green-700 mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="nt-font-display text-slate-800 font-bold text-xl mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-32 overflow-hidden nt-font-body"
        style={{ background: 'linear-gradient(135deg, #14532d 0%, #052e16 50%, #0f3d22 100%)' }}>
        <div className="nt-noise-overlay absolute inset-0 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #4ade80, transparent 70%)' }} />

        <div ref={addRef} className="nt-scroll-reveal relative z-10 max-w-3xl mx-auto text-center px-6">
          <h2 className="nt-font-display text-white mb-5" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            Ready for your <em>adventure?</em>
          </h2>
          <p className="text-green-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Let's find the perfect trek. Expert planning, every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/packages" className="inline-flex items-center gap-2.5 bg-white text-green-900 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-xl">
              <GiHiking className="text-lg" />
              View Trekking Packages
            </a>
            <a href="/contact" className="inline-flex items-center gap-2.5 border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}