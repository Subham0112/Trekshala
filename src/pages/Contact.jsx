// src/pages/Contact.jsx
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';
import { GiHiking } from 'react-icons/gi';
import { BsArrowUpRight } from 'react-icons/bs';
import { HiOutlineClock } from 'react-icons/hi';
import '../assets/css/theme.css';

export default function Contact() {
  const [formData, setFormData]     = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setSubmitting] = useState(false);
  const [showModal, setShowModal]   = useState(false);
  const [errors, setErrors]         = useState({});
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

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = 'Name is required';
    if (!formData.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email';
    if (!formData.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowModal(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactItems = [
    {
      icon: <FaEnvelope size={20} />,
      title: 'Email Us',
      sub: 'For inquiries, support, and bookings.',
      value: 'info@nepaltreks.com',
      href: 'mailto:info@nepaltreks.com',
      color: '#0ea5e9',
    },
    {
      icon: <FaPhoneAlt size={20} />,
      title: 'Call Us',
      sub: 'Speak directly with our friendly team.',
      value: '+977 9747433572',
      href: 'tel:+9779747433572',
      color: '#06b6d4',
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: 'Visit Us',
      sub: 'Belbari, Morang, Nepal',
      value: null,
      href: null,
      color: '#0284c7',
    },
    {
      icon: <HiOutlineClock size={22} />,
      title: 'Office Hours',
      sub: 'Sun–Fri, 9:00 AM – 6:00 PM',
      value: null,
      href: null,
      color: '#0369a1',
    },
  ];

  return (
    <div className="ts-page overflow-x-hidden">

      {/* ══ HERO ══ */}
      <header className="relative flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          minHeight: '62vh',
          backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1740&q=80')`,
          backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '68px'
        }}>
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(12,26,58,0.35) 0%, rgba(14,165,233,0.22) 50%, rgba(12,26,58,0.90) 100%)' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.16), transparent 65%)', filter: 'blur(50px)' }} />
        <div className="ts-noise absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-sky-400/50" />
            <p className="ts-eyebrow text-sky-300">We'd Love to Hear From You</p>
            <div className="h-px w-8 bg-sky-400/50" />
          </div>
          <h1 className="ts-display ts-hero-text ts-anim-2"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.08 }}>
            Get <em>In Touch</em>
          </h1>
          <p className="ts-anim-3 text-slate-200/75 mt-4 text-sm leading-relaxed max-w-md mx-auto">
            Plan your unforgettable Himalayan adventure with us. Our team is ready to help.
          </p>
          <a href="#contact-form"
            className="ts-btn-p ts-anim-4 mt-8 inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-xl">
            <FaEnvelope size={15} /> Send a Message
          </a>
        </div>
      </header>

      {/* ══ CONTACT SECTION ══ */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg,#f0f9ff 0%,#e0f2fe 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Info cards */}
          <div ref={addRef} className="ts-reveal-left order-2 lg:order-1">
            <p className="ts-eyebrow mb-3">Contact Information</p>
            <div className="ts-divider mb-5" />
            <h2 className="ts-display text-slate-900 mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, lineHeight: 1.2 }}>
              Connect <em className="ts-accent-text">With Us</em>
            </h2>
            <p className="text-slate-500 text-sm leading-loose mb-8 max-w-sm">
              Questions about packages, custom itineraries, or just want to say hello? We're here to help.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactItems.map(item => (
                <div key={item.title} className="ts-contact-card rounded-2xl p-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
                    style={{ background: `linear-gradient(135deg,${item.color},${item.color}99)` }}>
                    {item.icon}
                  </div>
                  <h3 className="ts-display text-slate-800 font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs mb-1 leading-relaxed">{item.sub}</p>
                  {item.href ? (
                    <a href={item.href}
                      className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-semibold text-sm transition-colors mt-1">
                      {item.value} <BsArrowUpRight size={12} />
                    </a>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="mt-8 p-5 rounded-2xl border border-sky-100 bg-white">
              <p className="ts-display text-slate-800 font-bold text-lg mb-3">Quick Links</p>
              <div className="flex flex-wrap gap-2">
                {['Everest Base Camp', 'Annapurna Circuit', 'Langtang Valley', 'Gokyo Lakes'].map(trek => (
                  <a key={trek} href="/packages"
                    className="text-xs px-3 py-1.5 rounded-full border border-sky-200 text-sky-700 bg-sky-50 hover:bg-sky-100 transition-colors font-medium">
                    {trek}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div id="contact-form" ref={addRef} className="ts-reveal-right order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-xl border border-sky-100 p-7 sm:p-9"
              style={{ boxShadow: '0 8px 48px rgba(14,165,233,0.13)' }}>
              <p className="ts-eyebrow mb-2">Send a Message</p>
              <div className="ts-divider mb-5" />
              <h2 className="ts-display text-slate-900 mb-6"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700 }}>
                We'll get back to you <em className="ts-accent-text">soon.</em>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name"
                      className={`ts-input w-full px-4 py-3 rounded-xl text-sm ${errors.name ? 'border-red-400' : ''}`} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com"
                      className={`ts-input w-full px-4 py-3 rounded-xl text-sm ${errors.email ? 'border-red-400' : ''}`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Regarding your trek…"
                    className="ts-input w-full px-4 py-3 rounded-xl text-sm" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">Message *</label>
                  <textarea name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us about your adventure plans…"
                    className={`ts-input w-full px-4 py-3 rounded-xl text-sm resize-none ${errors.message ? 'border-red-400' : ''}`} />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting}
                  className={`ts-btn-p w-full flex items-center justify-center gap-2.5 text-white font-semibold py-3.5 rounded-xl text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  style={{ marginTop: '8px' }}>
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MAP ══ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center mb-10">
            <p className="ts-eyebrow mb-3">Find Us</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2 className="ts-display text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700 }}>
              Find Us on the <em className="ts-accent-text">Map</em>
            </h2>
          </div>
          <div className="rounded-3xl overflow-hidden border border-sky-100 shadow-lg"
            style={{ boxShadow: '0 8px 40px rgba(14,165,233,0.12)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109522.94328700451!2d87.34927577876773!3d26.6307242661531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef65ca2e795c05%3A0xae018d58e323458a!2sBelbari%2056600!5e1!3m2!1sen!2snp!4v1750388510241!5m2!1sen!2snp"
              width="100%" height="420" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Nepal Treks Location" />
          </div>
        </div>
      </section>

      {/* ══ SUCCESS MODAL ══ */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}>
          <div className="ts-modal bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl border border-sky-100"
            onClick={e => e.stopPropagation()}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: 'linear-gradient(135deg,#e0f2fe,#bae6fd)' }}>
              <FaCheck size={24} className="text-sky-500" />
            </div>
            <h2 className="ts-display text-slate-900 font-bold text-2xl mb-3">Message Sent!</h2>
            <p className="text-slate-500 text-sm mb-7 leading-relaxed">
              Your message has been submitted successfully. We'll get back to you as soon as possible.
            </p>
            <button onClick={() => setShowModal(false)}
              className="ts-btn-p w-full py-3 rounded-xl text-white font-semibold text-sm">
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}