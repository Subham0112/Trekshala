
import React, { useEffect, useRef } from "react";
import {
  FaLeaf,
  FaFire,
  FaQuoteLeft,
  FaMountain,
  FaUsers,
  FaGlobeAsia,
  FaCheckCircle,
  FaRoute,
  FaCamera,
  FaBookOpen,
  FaHiking,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";
import {
  GiMountainRoad,
  GiHiking,
  GiCompass,
  GiPathDistance,
  GiCampingTent,
} from "react-icons/gi";
import {
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineGlobe,
} from "react-icons/hi";
import { MdOutlineExplore, MdNaturePeople, MdVerified } from "react-icons/md";
import { BsArrowRight, BsBookHalf, BsMap } from "react-icons/bs";
import heroImg from "../assets/img/about.avif";
import about1Img from "../assets/img/about1.avif";
import everestImg from "../assets/img/everest.jpg";
import annapurnaImg from "../assets/img/annapurna.jpg";
import langtangImg from "../assets/img/langtang.webp";
import "../assets/css/theme.css";

export default function About() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 },
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  /* DATA */

  const nepalFacts = [
    {
      icon: <FaMountain size={20} />,
      stat: "8 of 14",
      label: "Eight-Thousanders",
      desc: "Nepal contains 8 of the world's 14 mountains above 8,000m — more than any other country on earth.",
    },
    {
      icon: <GiPathDistance size={22} />,
      stat: "1,000+ km",
      label: "Marked Trails",
      desc: "From the teahouse trails of Everest to the remote Dolpo — a lifetime of routes to explore.",
    },
    {
      icon: <FaGlobeAsia size={20} />,
      stat: "100+",
      label: "Ethnic Groups",
      desc: "Sherpas, Gurungs, Tamangs, Rais — Nepal's trail culture is as rich as its mountain scenery.",
    },
    {
      icon: <FaUsers size={20} />,
      stat: "150,000+",
      label: "Trekkers Yearly",
      desc: "Every year, adventurers from every corner of the globe come to walk Nepal's legendary trails.",
    },
  ];

  const whatWeCover = [
    {
      icon: <BsMap size={20} />,
      title: "Trek Route Profiles",
      desc: "Detailed breakdowns of every major route — distances, elevation profiles, daily itineraries, teahouse stops, and key decision points along the way.",
      color: "#0ea5e9",
    },
    {
      icon: <GiCampingTent size={20} />,
      title: "Accommodation & Food",
      desc: "Real, up-to-date guidance on teahouses, guesthouses, and camping along each trail. What to expect, what to pay, what to eat at altitude.",
      color: "#06b6d4",
    },
    {
      icon: <FaShieldAlt size={18} />,
      title: "Safety & Health",
      desc: "Altitude sickness, emergency protocols, travel insurance, rescue services, and health preparation guides — because safety is never optional.",
      color: "#0284c7",
    },
    {
      icon: <MdNaturePeople size={22} />,
      title: "Culture & Etiquette",
      desc: "How to interact respectfully with Sherpa, Tamang, and Gurung communities — customs, dress, photography rules, and local traditions.",
      color: "#0369a1",
    },
    {
      icon: <FaLeaf size={18} />,
      title: "Sustainable Trekking",
      desc: "Leave-no-trace principles, how to support local economies, waste management in the Himalayas, and porter welfare standards.",
      color: "#0ea5e9",
    },
    {
      icon: <HiOutlineLightBulb size={22} />,
      title: "Permits & Logistics",
      desc: "Exactly which permits you need, where to get them, how much they cost, and how regulations change for restricted areas.",
      color: "#06b6d4",
    },
  ];

  const editorialValues = [
    {
      icon: <MdVerified size={22} />,
      title: "Locally Verified",
      desc: "Every route description and teahouse recommendation is verified by guides, porters, and trekkers with first-hand experience on the trail.",
      color: "#0ea5e9",
      bg: "#e0f2fe",
    },
    {
      icon: <HiOutlineShieldCheck size={22} />,
      title: "Safety-First Approach",
      desc: "We never downplay altitude risks, difficult terrain, or permit requirements. Honest information protects trekkers — we treat it seriously.",
      color: "#0284c7",
      bg: "#dbeafe",
    },
    {
      icon: <FaLeaf size={20} />,
      title: "Environmentally Conscious",
      desc: "We actively promote responsible trekking. Every guide we publish encourages minimal environmental impact and respect for protected areas.",
      color: "#06b6d4",
      bg: "#cffafe",
    },
    {
      icon: <HiOutlineGlobe size={22} />,
      title: "Culturally Respectful",
      desc: "Nepal's trails pass through living communities with deep traditions. Our content always reflects cultural sensitivity and local knowledge.",
      color: "#0369a1",
      bg: "#e0f2fe",
    },
  ];

  const gallery = [
    { caption: "Sunrise at Everest Base Camp", img: everestImg, span: false },
    { caption: "Annapurna Circuit Highlands", img: annapurnaImg, span: false },
    { caption: "Langtang Valley Culture", img: langtangImg, span: false },
  ];

  const trailTypes = [
    {
      name: "Teahouse Treks",
      icon: <GiCampingTent size={22} />,
      desc: "Stay in mountain lodges along well-established routes like Everest and Annapurna. Meals and beds included.",
      color: "#0ea5e9",
    },
    {
      name: "Camping Treks",
      icon: <FaHiking size={20} />,
      desc: "Venture into remote, restricted zones with full camping equipment, cook crews, and specialist guides.",
      color: "#06b6d4",
    },
    {
      name: "Day Hikes",
      icon: <GiHiking size={22} />,
      desc: "Short walks from Pokhara, Kathmandu, or trailheads for those with limited time but maximum curiosity.",
      color: "#0284c7",
    },
  ];

  return (
    <div className="ts-page overflow-x-hidden">
      {/* HERO */}
      <header
        className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          paddingTop: "68px",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(0, 0, 0, 0.29) 0%,rgba(0, 0, 0, 0.26) 40%,rgba(0, 0, 0, 0.53) 80%,rgba(7, 7, 7, 0.77) 100%)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse,rgba(6,182,212,0.14),transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div className="ts-noise absolute inset-0 pointer-events-none" />

        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <div
            className="ts-anim-1 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(14,165,233,0.20)",
              border: "1px solid rgba(147,219,250,0.28)",
              backdropFilter: "blur(10px)",
            }}
          >
            <BsBookHalf className="text-cyan-300 text-sm" />
            <span className="ts-hero-eyebrow">
              Your Independent Nepal Trekking Guide
            </span>
          </div>

          <h1
            className="ts-display ts-hero-text ts-anim-2"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
            }}
          >
            About <em>TrekShala</em>
          </h1>

          <p className="ts-anim-3 text-slate-200/80 mt-5 text-base leading-relaxed max-w-xl mx-auto">
            We exist for one reason — to help trekkers like you discover Nepal's
            Himalayan trails with confidence, clarity, and genuine respect for
            the land and its people.
          </p>

          <div className="ts-anim-4 mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="#mission"
              className="ts-btn-p inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-xl"
            >
              <MdOutlineExplore size={18} /> Our Mission
            </a>
            <a
              href="#covers"
              className="ts-btn-ghost inline-flex items-center gap-2 text-white font-medium px-7 py-3.5 rounded-full text-sm"
            >
              What We Cover <BsArrowRight size={13} />
            </a>
          </div>
        </div>
      </header>

      {/* MISSION — two column editorial */}
      <section id="mission" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div ref={addRef} className="ts-reveal-left order-2 lg:order-1">
            <p className="ts-eyebrow mb-3">Who We Are</p>
            <div className="ts-divider mb-5" />
            <h2
              className="ts-display text-slate-900 mb-6"
              style={{
                fontSize: "clamp(1.8rem,3vw,2.8rem)",
                fontWeight: 700,
                lineHeight: 1.18,
              }}
            >
              A Guide Built by
              <br />
              <em className="ts-accent-text">Himalayan Enthusiasts</em>
            </h2>

            <p className="text-slate-600 text-base leading-loose mb-4">
              TrekShala was created by a group of passionate trekkers, local
              guides, and mountain researchers who saw a gap — most trekking
              resources were either promotional material or outdated forum
              posts.
            </p>
            <p className="text-slate-600 text-base leading-loose mb-7">
              We set out to build something different: a{" "}
              <strong className="text-sky-700">
                genuinely independent, locally-verified, and constantly updated
              </strong>{" "}
              resource for everyone from first-time day hikers to seasoned
              high-altitude veterans.
            </p>

            {/* Quote block */}
            <div className="ts-quote-block flex items-start gap-4 p-5 rounded-2xl">
              <FaQuoteLeft className="text-sky-300 text-2xl flex-shrink-0 mt-1" />
              <p className="ts-display text-sky-900 italic text-base leading-relaxed">
                "Nepal's mountains deserve to be understood, not just visited.
                That's why we write for the curious, not just the adventurous."
              </p>
            </div>
          </div>

          <div
            ref={addRef}
            className="ts-reveal-right order-1 lg:order-2 relative"
          >
            <img
              src={about1Img}
              alt="Trekking in Himalayas"
              className="rounded-3xl shadow-2xl w-full object-cover border border-sky-100"
              style={{ aspectRatio: "4/3" }}
              loading="lazy"
            />
            {/* Decorative accent */}
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl pointer-events-none hidden lg:block"
              style={{
                background: "linear-gradient(135deg,#bae6fd,#e0f2fe)",
                opacity: 0.65,
              }}
            />
            {/* Stat chip */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-sky-100">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-sky-600 text-xl"
                style={{
                  background: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
                }}
              >
                <FaBookOpen />
              </div>
              <div>
                <p className="ts-display font-bold text-slate-900 text-lg leading-none">
                  Free
                </p>
                <p className="text-slate-500 text-xs mt-0.5">
                  Always & forever
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  NEPAL BY THE NUMBERS */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(180deg,#f0f9ff 0%,#e0f2fe 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={addRef}
            className="ts-reveal text-center max-w-2xl mx-auto mb-14"
          >
            <p className="ts-eyebrow mb-3">Why Nepal?</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2
              className="ts-display text-slate-900"
              style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700 }}
            >
              Nepal in <em className="ts-accent-text">Numbers</em>
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              Understanding the scale of Nepal's trekking landscape helps you
              appreciate why it draws adventurers from across the globe — year
              after year.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {nepalFacts.map((f, i) => (
              <div
                key={f.label}
                ref={addRef}
                className="ts-reveal ts-feat-card p-7 rounded-2xl cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="ts-feat-icon w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <p
                  className="ts-display text-sky-700 font-bold mb-0.5"
                  style={{ fontSize: "1.5rem" }}
                >
                  {f.stat}
                </p>
                <p className="text-slate-800 font-semibold text-sm mb-2">
                  {f.label}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section id="covers" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={addRef}
            className="ts-reveal text-center max-w-2xl mx-auto mb-14"
          >
            <p className="ts-eyebrow mb-3">Our Content</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2
              className="ts-display text-slate-900"
              style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700 }}
            >
              What <em className="ts-accent-text">TrekShala</em> Covers
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              We aim to be the only resource you need from your first Google
              search to the moment you step back onto the plane home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeCover.map((item, i) => (
              <div
                key={item.title}
                ref={addRef}
                className="ts-reveal ts-feat-card p-7 rounded-2xl cursor-default group"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div
                  className="ts-feat-icon w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="ts-display font-bold text-slate-900 text-[1.15rem] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAIL TYPES EXPLAINER */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(180deg,#f0f9ff,#e0f2fe)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={addRef}
            className="ts-reveal text-center max-w-2xl mx-auto mb-14"
          >
            <p className="ts-eyebrow mb-3">Types of Trekking</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2
              className="ts-display text-slate-900"
              style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700 }}
            >
              Three Ways to <em className="ts-accent-text">Trek Nepal</em>
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              Nepal's trails aren't one-size-fits-all. Understanding the three
              core trekking styles helps you choose what's right for your
              experience level and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trailTypes.map((t, i) => (
              <div
                key={t.name}
                ref={addRef}
                className="ts-reveal bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-sm hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Top accent line */}
                <div
                  className="h-1.5"
                  style={{
                    background: `linear-gradient(90deg,${t.color},${t.color}60)`,
                  }}
                />
                <div className="p-7">
                  <div
                    className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white"
                    style={{
                      background: `linear-gradient(135deg,${t.color},${t.color}99)`,
                    }}
                  >
                    {t.icon}
                  </div>
                  <h3 className="ts-display font-bold text-slate-900 text-xl mb-3">
                    {t.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {t.desc}
                  </p>
                  <a
                    href="/treks"
                    className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm mt-5 hover:gap-4 transition-all duration-300"
                  >
                    View routes <BsArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  PHOTO GALLERY  (visual break) */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={addRef} className="ts-reveal text-center mb-12">
            <p className="ts-eyebrow mb-3">The Trails We Write About</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2
              className="ts-display text-slate-900"
              style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700 }}
            >
              Nepal through <em className="ts-accent-text">Our Lens</em>
            </h2>
            <p className="mt-2 text-slate-500 text-sm max-w-lg mx-auto">
              Every image in our guide is taken on the actual trail by people
              who walked the same paths you're about to explore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {gallery.map((item, i) => (
              <div
                key={item.caption}
                ref={addRef}
                className="ts-reveal ts-gallery-item relative cursor-pointer group"
                style={{ aspectRatio: "4/3", transitionDelay: `${i * 90}ms` }}
              >
                <img
                  src={item.img}
                  alt={item.caption}
                  className="ts-gallery-img w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex items-end p-5"
                  style={{
                    background:
                      "linear-gradient(0deg,rgba(12,26,58,0.78) 0%,transparent 60%)",
                  }}
                >
                  <div>
                    <p className="text-white font-semibold text-base leading-snug">
                      {item.caption}
                    </p>
                    <p className="text-sky-300 text-xs mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaCamera size={10} /> Field photography
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  EDITORIAL VALUES */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(180deg,#f0f9ff,#e0f2fe)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={addRef}
            className="ts-reveal text-center max-w-2xl mx-auto mb-14"
          >
            <p className="ts-eyebrow mb-3">Our Standards</p>
            <div className="ts-divider mx-auto mb-5" />
            <h2
              className="ts-display text-slate-900"
              style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700 }}
            >
              Our Editorial <em className="ts-accent-text">Values</em>
            </h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              We hold ourselves to a strict standard. Here's what every piece of
              content on TrekShala is built on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {editorialValues.map((v, i) => (
              <div
                key={v.title}
                ref={addRef}
                className="ts-reveal ts-value-card p-7 rounded-2xl text-center cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="ts-value-icon inline-flex items-center justify-center h-14 w-14 rounded-2xl mx-auto mb-5"
                  style={{ background: v.bg, color: v.color }}
                >
                  {v.icon}
                </div>
                <h3 className="ts-display text-slate-800 font-bold text-xl mb-2">
                  {v.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE  —  immersive dark break */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#0c1a3a 0%,#0c4a6e 55%,#0c1a3a 100%)",
        }}
      >
        <div className="ts-noise absolute inset-0 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-10"
          style={{
            background: "radial-gradient(circle,#38bdf8,transparent 65%)",
            transform: "translate(30%,-30%)",
            filter: "blur(30px)",
          }}
        />
        <div
          className="absolute left-6 top-4 text-white/4 ts-display pointer-events-none select-none"
          style={{ fontSize: "11rem", lineHeight: 0.8, fontWeight: 700 }}
        >
          "
        </div>

        <div
          ref={addRef}
          className="ts-reveal relative z-10 max-w-2xl mx-auto px-8 text-center"
        >
          <FaQuoteLeft className="text-cyan-700 text-2xl mb-5 mx-auto" />
          <blockquote
            className="ts-display text-white italic leading-relaxed"
            style={{ fontSize: "clamp(1.2rem,2.2vw,1.9rem)", fontWeight: 500 }}
          >
            "The Himalayas are not just mountains. They are a school and the
            curriculum is humility."
          </blockquote>
          <p className="text-sky-300 font-semibold text-xs mt-5 tracking-widest uppercase">
            — Reinhold Messner, mountaineer
          </p>

          {/* Quick facts row */}
          <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
            {[
              ["2010", "Year Nepal opened\nto trekkers"],
              ["Nrs 2000–70000", "Permit cost\nrange per route"],
              ["Oct–Nov", "Peak trekking\nseason"],
            ].map(([val, lbl]) => (
              <div key={val} className="text-center">
                <p
                  className="ts-display text-sky-300 font-bold"
                  style={{ fontSize: "1.4rem" }}
                >
                  {val}
                </p>
                <p className="text-sky-100/50 text-xs mt-1.5 leading-snug whitespace-pre-line">
                  {lbl}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE TREKKING  —  editorial section*/}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div ref={addRef} className="ts-reveal-right">
            <img
              src={annapurnaImg}
              alt="Annapurna Circuit"
              loading="lazy"
              className="rounded-3xl shadow-2xl w-full object-cover border border-sky-100"
              style={{ aspectRatio: "4/3" }}
            />
          </div>

          <div ref={addRef} className="ts-reveal-left">
            <p className="ts-eyebrow mb-3">Responsible Trekking</p>
            <div className="ts-divider mb-5" />
            <h2
              className="ts-display text-slate-900 mb-6"
              style={{
                fontSize: "clamp(1.8rem,3vw,2.6rem)",
                fontWeight: 700,
                lineHeight: 1.18,
              }}
            >
              Trekking That <em className="ts-accent-text">Gives Back</em>
            </h2>
            <p className="text-slate-600 text-base leading-loose mb-5">
              Nepal's mountains are among the world's most fragile ecosystems.
              Plastic waste, over-trekking, and irresponsible tourism have
              placed real pressure on the trails and communities that line them.
            </p>
            <p className="text-slate-600 text-base leading-loose mb-7">
              Every guide we publish includes a section on sustainable practices
               from properly disposing of waste to hiring local porters at fair
              wages and choosing eco-conscious teahouses.
            </p>

            <div className="space-y-3">
              {[
                "Use refillable water bottles and iodine tablets",
                "Hire licensed, insured local guides and porters",
                "Never buy single-use plastics at teahouses",
                "Stay on marked paths — don't create new shortcuts",
                "Respect restricted area boundaries and permit rules",
              ].map((pt) => (
                <div
                  key={pt}
                  className="flex items-center gap-3 text-sm text-slate-600 py-2.5 px-4 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg,#f0f9ff,white)",
                    border: "1px solid #e0f2fe",
                  }}
                >
                  <FaCheckCircle
                    size={12}
                    className="text-sky-500 flex-shrink-0"
                  />
                  {pt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* CTA */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#0ea5e9 0%,#0284c7 40%,#0c4a6e 100%)",
        }}
      >
        <div className="ts-noise absolute inset-0 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-14"
          style={{
            background: "radial-gradient(circle,#bae6fd,transparent 65%)",
            transform: "translate(25%,-25%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-10"
          style={{
            background: "radial-gradient(circle,#38bdf8,transparent 65%)",
            transform: "translate(-25%,25%)",
          }}
        />
        {/* Decorative glyph */}
        <div
          className="absolute right-10 top-1/2 -translate-y-1/2 text-white/4 pointer-events-none select-none hidden lg:block ts-display"
          style={{ fontSize: "13rem", fontWeight: 700, lineHeight: 1 }}
        >
          ✦
        </div>

        <div
          ref={addRef}
          className="ts-reveal relative z-10 max-w-2xl mx-auto text-center px-6"
        >
          <p className="ts-eyebrow text-sky-100 mb-4">Start Exploring</p>
          <h2
            className="ts-display text-white leading-tight mb-5"
            style={{ fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 700 }}
          >
            Ready to find your
            <br />
            <em>perfect trail?</em>
          </h2>
          <p className="text-sky-100/75 text-sm leading-loose mb-9 max-w-md mx-auto">
            Browse our full library of trek profiles, seasonal guides, safety
            advice, and permit information; everything you need in one place.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="/treks"
              className="inline-flex items-center gap-2 bg-white text-sky-800 font-bold px-8 py-3.5 rounded-full text-sm shadow-2xl hover:bg-sky-50 transition-all hover:scale-105 duration-300"
            >
              <GiCompass size={17} /> Explore Trek Guides
            </a>
            <a
              href="/contact"
              className="ts-btn-ghost inline-flex items-center gap-2 text-white font-medium px-8 py-3.5 rounded-full text-sm"
            >
              Ask a Question <BsArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
