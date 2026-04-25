// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

  .nt-nav-link {
    position: relative;
    font-family: 'DM Sans', system-ui, sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #374151;
    text-decoration: none;
    transition: color 0.25s ease;
    padding: 4px 0;
  }
  .nt-nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #15807b, #21d3d3);
    border-radius: 2px;
    transition: width 0.3s ease;
  }
  .nt-nav-link:hover { color: #158065; }
  .nt-nav-link:hover::after,
  .nt-nav-link.active::after { width: 100%; }
  .nt-nav-link.active { color: #15806e; font-weight: 600; }

  .nt-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(4px);
    z-index: 49;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
  }
  .nt-overlay.open {
    opacity: 1;
    pointer-events: all;
  }

  .nt-sidenav {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 280px;
    background: white;
    z-index: 50;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: -20px 0 60px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow-y: auto;
  }
  .nt-sidenav.open { transform: translateX(0); }

  .nt-side-link {
    display: flex;
    align-items: center;
    padding: 14px 24px;
    font-family: 'DM Sans', system-ui, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #374151;
    text-decoration: none;
    border-radius: 12px;
    margin: 2px 12px;
    transition: all 0.2s ease;
  }
  .nt-side-link:hover { background: #f0fdf4; color: #15803d; }
  .nt-side-link.active { background: #f0fdf4; color: #15803d; font-weight: 600; }

  .nt-hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    cursor: pointer;
    background: none;
    border: none;
  }
  .nt-hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: #374151;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }
  .nt-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nt-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .nt-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close side nav on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  // Prevent body scroll when nav open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treks', path: '/treks' },
    // { name: 'Gallery', path: '/gallery' },
  ];

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <style>{STYLES}</style>

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.1)' : '0 1px 0 rgba(0,0,0,0.06)',
          fontFamily: 'DM Sans, system-ui, sans-serif',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <div>
                <div style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  letterSpacing: '-0.5px',
                  background: 'linear-gradient(135deg, #16b1a4, #15806e, #2ff5c3)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  lineHeight: 1.1,
                }}>TrekShala</div>
                <div style={{ fontSize: '9px', color: '#94a3b8', letterSpacing: '2.5px', fontWeight: 600, marginTop: '1px' }}>
                  EXPLORE NEPAL
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-nav">
              <style>{`
                @media (max-width: 768px) { .desktop-nav { display: none !important; } }
              `}</style>
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nt-nav-link ${isActive(item.path) ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                style={{
                  padding: '10px 24px',
                  borderRadius: '100px',
                  background: 'linear-gradient(135deg, #158080, #1f7c83)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(21,128,61,0.35)',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(21, 112, 128, 0.45)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(21, 112, 128, 0.35)';
                }}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`nt-hamburger ${mobileOpen ? 'open' : ''} mobile-only`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <style>{`
                @media (min-width: 769px) { .mobile-only { display: none !important; } }
              `}</style>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`nt-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Side Nav */}
      <div className={`nt-sidenav ${mobileOpen ? 'open' : ''}`}>
        {/* Side Nav Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #f1f5f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
            <div style={{
              fontSize: '18px',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #166561, #157980)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>TrekShala</div>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              width: '34px', height: '34px', borderRadius: '10px',
              background: '#f1f5f9', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', color: '#64748b',
            }}
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <div style={{ padding: '16px 0', flex: 1 }}>
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className={`nt-side-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Button at bottom */}
        <div style={{ padding: '20px 24px', borderTop: '1px solid #f1f5f9' }}>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '14px 24px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #15803d, #166534)',
              color: 'white',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(21,128,61,0.3)',
            }}
          >
            Contact Us
          </Link>
          <p style={{ textAlign: 'center', fontSize: '11px', color: '#94a3b8', marginTop: '12px', letterSpacing: '1px' }}>
            EXPLORE NEPAL
          </p>
        </div>
      </div>
    </>
  );
}