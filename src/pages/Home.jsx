// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { FaMountain, FaLeaf, FaStar } from 'react-icons/fa';
import { GiMountainRoad, GiHiking, GiBackpack } from 'react-icons/gi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

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

  .nt-trek-card {
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease;
  }
  .nt-trek-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px rgba(0,0,0,0.15);
  }
  .nt-trek-card:hover .nt-img-zoom {
    transform: scale(1.07);
  }
  .nt-img-zoom {
    transition: transform 0.6s ease;
  }

  .nt-feature-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .nt-feature-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.1);
  }

  .nt-scroll-reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }
  .nt-scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .nt-btn-primary {
    background: linear-gradient(135deg, #15803d, #166534);
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: white;
    padding: 14px 28px;
    border-radius: 100px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    white-space: nowrap;
  }
  .nt-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(21,128,61,0.4);
  }

  .nt-btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: white;
    padding: 14px 28px;
    border-radius: 100px;
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
    border: 1.5px solid rgba(255,255,255,0.35);
    transition: all 0.3s ease;
    white-space: nowrap;
    backdrop-filter: blur(4px);
  }
  .nt-btn-secondary:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.6);
  }

  .nt-badge {
    background: linear-gradient(135deg, #d97706, #f59e0b);
    color: white;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 100px;
  }

  @keyframes floatUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .nt-anim-1 { animation: floatUp 0.8s ease forwards; }
  .nt-anim-2 { animation: floatUp 0.8s 0.15s ease both; }
  .nt-anim-3 { animation: floatUp 0.8s 0.3s ease both; }
  .nt-anim-4 { animation: floatUp 0.8s 0.45s ease both; }

  @media (max-width: 768px) {
    .nt-hero-btns { flex-direction: column; align-items: center; }
    .nt-hero-btns a { width: 100%; max-width: 280px; justify-content: center; }
    .nt-stats-bar { gap: 20px !important; }
    .nt-features-grid { grid-template-columns: 1fr 1fr !important; }
    .nt-treks-grid { grid-template-columns: 1fr !important; }
    .nt-reviews-grid { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 480px) {
    .nt-features-grid { grid-template-columns: 1fr !important; }
  }
`;

export default function Home() {
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

  const features = [
    { icon: <GiMountainRoad size={24} />, title: 'Expert Guides', desc: 'Certified local masters with deep Himalayan knowledge and high-altitude safety training.' },
    { icon: <GiBackpack size={24} />, title: 'Authentic Stays', desc: 'Curated homestays and teahouses for genuine cultural immersion.' },
    { icon: <HiOutlineShieldCheck size={24} />, title: 'Safety First', desc: 'Top-tier gear, emergency protocols, and comprehensive insurance coverage.' },
    { icon: <FaLeaf size={24} />, title: 'Eco-Conscious', desc: 'Leave-no-trace policies and community-first sustainable practices.' },
  ];

  const treks = [
    {
      img: 'src/assets/img/everest.jpg',
      alt: 'Everest Base Camp',
      badge: 'Most Popular',
      title: 'Everest Base Camp',
      duration: '14 Days',
      level: 'Challenging',
      desc: "Follow the footsteps of legends to the base of the world's highest peak through Sherpa villages.",
      price: 'Rs. 1,85,000',
    },
    {
      img: 'src/assets/img/annapurna.jpg',
      alt: 'Annapurna Circuit',
      badge: 'Scenic Route',
      title: 'Annapurna Circuit',
      duration: '14 Days',
      level: 'Moderate',
      desc: 'Diverse landscapes from lush subtropical forests to arid high-altitude deserts with stunning vistas.',
      price: 'Rs. 1,60,000',
    },
    {
      img: 'src/assets/img/langtang.webp',
      alt: 'Langtang Valley',
      badge: 'Hidden Gem',
      title: 'Langtang Valley',
      duration: '8 Days',
      level: 'Moderate',
      desc: 'A peaceful, less-crowded trail with stunning glacial views and rich Tamang cultural heritage.',
      price: 'Rs. 1,20,000',
    },
  ];

  const reviews = [
    { name: 'Sarah M.', country: 'UK', text: 'Absolutely life-changing. The guides were exceptional and made every moment special.', stars: 5 },
    { name: 'Kenji T.', country: 'Japan', text: 'Perfect organization, breathtaking views, and memories that will last a lifetime.', stars: 5 },
    { name: 'Ana R.', country: 'Brazil', text: 'Nepal Treks made my dream trek a reality. Every detail was handled flawlessly.', stars: 5 },
  ];

  return (
    <div className="nt-font-body" style={{ overflowX: 'hidden' }}>
      <style>{FONTS}{STYLES}</style>

      {/* ── HERO ── */}
      <header
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          overflow: 'hidden',
          backgroundImage: `url('src/assets/img/home.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '68px', /* navbar height */
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 50%, rgba(5,46,22,0.88) 100%)',
        }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '60px 24px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
          <div className="nt-anim-1">
            <span className="nt-badge">
              <FaMountain size={10} />
              Nepal's Premier Trek Operator Since 2010
            </span>
          </div>

          <h1
            className="nt-font-display nt-hero-text nt-anim-2"
            style={{
              fontSize: 'clamp(2.4rem, 7vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginTop: '20px',
              marginBottom: '0',
            }}
          >
            Discover the<br />
            <em style={{ fontStyle: 'italic' }}>Heart</em> of the Himalayas
          </h1>

          <p
            className="nt-anim-3"
            style={{
              marginTop: '20px',
              color: 'rgba(255,255,255,0.8)',
              fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '20px auto 0',
            }}
          >
            Embark on a transformative journey with Nepal Treks — where ancient peaks meet timeless culture.
          </p>

          <div
            className="nt-hero-btns nt-anim-4"
            style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}
          >
            <a href="#treks" className="nt-btn-primary">
              <GiHiking size={20} />
              Explore Treks
              <BsArrowRight />
            </a>
            <a href="/about" className="nt-btn-secondary">
              Our Story
            </a>
          </div>

          {/* Stats */}
          <div
            className="nt-stats-bar nt-anim-4"
            style={{
              marginTop: '56px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '40px',
            }}
          >
            {[['1,000+', 'Happy Trekkers'], ['15+', 'Trek Routes'], ['14', 'Years Experience'], ['4.9★', 'Avg Rating']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div className="nt-font-display" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#86efac' }}>{val}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: '2px', letterSpacing: '0.5px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '1px',
        }}>
          <span>SCROLL</span>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }} />
        </div>
      </header>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div ref={addRef} className="nt-scroll-reveal" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 56px' }}>
            <p style={{ color: '#15803d', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              WHY US
            </p>
            <h2 className="nt-font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#0f172a', lineHeight: 1.2, margin: 0 }}>
              Crafted for the <em>Discerning</em> Adventurer
            </h2>
            <p style={{ marginTop: '14px', color: '#64748b', fontSize: '16px', lineHeight: 1.7 }}>
              Every detail of your journey, thoughtfully arranged.
            </p>
          </div>

          <div
            className="nt-features-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                ref={addRef}
                className="nt-scroll-reveal nt-feature-card"
                style={{
                  padding: '32px 24px',
                  borderRadius: '20px',
                  background: 'linear-gradient(160deg, #f0fdf4, #ffffff)',
                  border: '1px solid #e2e8f0',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: '#dcfce7', color: '#15803d',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  {f.icon}
                </div>
                <h3 className="nt-font-display" style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '10px', margin: '0 0 10px' }}>
                  {f.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED TREKS ── */}
      <section id="treks" style={{ padding: '80px 24px', background: 'linear-gradient(180deg, #f8fafc 0%, #f0fdf4 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            ref={addRef}
            className="nt-scroll-reveal"
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginBottom: '48px' }}
          >
            <div>
              <p style={{ color: '#15803d', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px', margin: '0 0 8px' }}>
                HANDPICKED ROUTES
              </p>
              <h2 className="nt-font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#0f172a', lineHeight: 1.2, margin: 0 }}>
                Featured <em>Treks</em>
              </h2>
            </div>
            <a href="/packages" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#15803d', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>
              View all treks <BsArrowRight />
            </a>
          </div>

          <div className="nt-treks-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {treks.map((t, i) => (
              <div
                key={t.title}
                ref={addRef}
                className="nt-scroll-reveal nt-trek-card"
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                  border: '1px solid #f1f5f9',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
                  <img src={t.img} alt={t.alt} className="nt-img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />
                  <span style={{
                    position: 'absolute', top: '14px', left: '14px',
                    background: 'linear-gradient(135deg, #d97706, #f59e0b)',
                    color: 'white', fontSize: '10px', fontWeight: 700,
                    padding: '5px 12px', borderRadius: '100px',
                    letterSpacing: '0.5px', textTransform: 'uppercase',
                  }}>{t.badge}</span>
                  <span style={{
                    position: 'absolute', top: '14px', right: '14px',
                    background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
                    color: 'white', fontSize: '12px', padding: '5px 12px', borderRadius: '100px',
                  }}>{t.duration}</span>
                </div>

                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <h3 className="nt-font-display" style={{ fontSize: '19px', fontWeight: 700, color: '#0f172a', margin: 0 }}>{t.title}</h3>
                    <span style={{
                      fontSize: '11px', fontWeight: 600,
                      background: t.level === 'Challenging' ? '#fef3c7' : '#dcfce7',
                      color: t.level === 'Challenging' ? '#92400e' : '#15803d',
                      padding: '4px 10px', borderRadius: '100px',
                      whiteSpace: 'nowrap', marginLeft: '8px',
                    }}>{t.level}</span>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.65, margin: '0 0 20px' }}>{t.desc}</p>

                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ fontSize: '11px', color: '#94a3b8', margin: '0 0 2px' }}>From</p>
                      <p className="nt-font-display" style={{ fontSize: '20px', fontWeight: 700, color: '#15803d', margin: 0 }}>{t.price}</p>
                    </div>
                    <a href="/packages" className="nt-btn-primary" style={{ padding: '10px 18px', fontSize: '13px', borderRadius: '12px' }}>
                      Book Now <BsArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '80px 24px', background: '#052e16' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div ref={addRef} className="nt-scroll-reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#4ade80', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              TREKKER STORIES
            </p>
            <h2 className="nt-font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: 'white', margin: 0 }}>
              Voices from the <em>Trail</em>
            </h2>
          </div>

          <div className="nt-reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {reviews.map((r, i) => (
              <div
                key={r.name}
                ref={addRef}
                className="nt-scroll-reveal"
                style={{
                  padding: '32px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(167,243,208,0.12)',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <FaStar key={j} size={14} color="#f59e0b" />
                  ))}
                </div>
                <p className="nt-font-display" style={{ color: 'white', fontSize: '17px', lineHeight: 1.65, fontStyle: 'italic', margin: '0 0 24px' }}>
                  "{r.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: '#14532d', color: '#86efac',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '16px',
                  }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <p style={{ color: 'white', fontWeight: 600, fontSize: '14px', margin: 0 }}>{r.name}</p>
                    <p style={{ color: '#4ade80', fontSize: '12px', margin: 0 }}>{r.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #14532d 0%, #052e16 60%, #0f3d22 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(74,222,128,0.12), transparent 70%)',
          transform: 'translate(30%, -30%)',
          pointerEvents: 'none',
        }} />
        <div ref={addRef} className="nt-scroll-reveal" style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#4ade80', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
            START YOUR JOURNEY
          </p>
          <h2 className="nt-font-display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, color: 'white', lineHeight: 1.15, margin: '0 0 16px' }}>
            Your next great <em>adventure</em><br />begins here.
          </h2>
          <p style={{ color: 'rgba(167,243,208,0.85)', fontSize: '16px', lineHeight: 1.7, margin: '0 auto 36px', maxWidth: '480px' }}>
            Let's craft the perfect Himalayan experience together. Expert planning, every step of the way.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            <a href="/packages" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'white', color: '#166534',
              padding: '14px 28px', borderRadius: '100px',
              fontWeight: 700, fontSize: '15px', textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
            }}>
              <GiHiking size={18} />
              Browse Packages
            </a>
            <a href="/contact" className="nt-btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}