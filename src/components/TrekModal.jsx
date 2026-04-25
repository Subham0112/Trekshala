// src/components/TrekModal.jsx
import React from 'react';
import {
  FaTimes, FaMapMarkerAlt, FaClock, FaRupeeSign,
  FaUsers, FaCheckCircle, FaStar,
} from 'react-icons/fa';
import { GiHiking, GiCampingTent, GiPathDistance } from 'react-icons/gi';

const DIFFICULTY = {
  moderate:    { bg: 'bg-blue-50',  text: 'text-blue-700',  border: 'border-blue-100',  label: 'Moderate'    },
  challenging: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100', label: 'Challenging' },
};

const TrekModal = ({ trek, details = {}, onClose }) => {
  const diff = DIFFICULTY[trek.category];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(15,23,42,0.65)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="ts-modal bg-white rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl flex flex-col"
        style={{ maxHeight: '90vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Hero image strip ── */}
        <div className="relative flex-shrink-0" style={{ height: '220px' }}>
          <img src={trek.image} alt={trek.name} className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg,rgba(15,23,42,.1) 0%,rgba(15,23,42,.65) 100%)' }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <FaTimes size={14} />
          </button>

          {/* Featured badge */}
          {trek.featured && (
            <span className="absolute top-4 left-4 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
              ★ Featured Trek
            </span>
          )}

          {/* Title over image */}
          <div className="absolute bottom-4 left-5 right-16">
            <h2 className="ts-display text-white font-bold text-2xl leading-tight">{trek.name}</h2>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              <span className="flex items-center gap-1 text-blue-200 text-xs">
                <FaMapMarkerAlt size={10} /> {trek.location}, Nepal
              </span>
              {diff && (
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${diff.bg} ${diff.text} ${diff.border}`}>
                  {diff.label}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Scrollable content ── */}
        <div className="overflow-y-auto flex-1 p-6">

          {/* Quick stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { icon: <FaClock size={14} className="text-blue-500" />,        label: 'Duration',     value: `${trek.duration} Days`             },
              { icon: <FaRupeeSign size={14} className="text-blue-500" />,    label: 'From',         value: `Rs. ${trek.price.toLocaleString()}` },
              { icon: <GiPathDistance size={16} className="text-blue-500" />, label: 'Max Altitude', value: details.maxAltitude || '—'          },
              { icon: <FaUsers size={14} className="text-blue-500" />,        label: 'Group Size',   value: details.groupSize   || '2–16 people' },
            ].map(s => (
              <div key={s.label} className="bg-blue-50 rounded-xl p-3 border border-blue-100 text-center">
                <div className="flex justify-center mb-1">{s.icon}</div>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">{s.label}</p>
                <p className="ts-display text-slate-900 font-bold text-sm leading-snug mt-0.5">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-5">
            <h4 className="ts-display font-bold text-slate-800 text-base mb-2">About This Trek</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{trek.description}</p>
          </div>

          {/* Best Season + Difficulty */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            <div className="bg-sky-50 border border-sky-100 rounded-xl p-3.5">
              <p className="text-[10px] text-sky-600 font-semibold uppercase tracking-wide mb-1">Best Season</p>
              <p className="text-slate-700 text-sm font-medium">{details.bestSeason || 'Year-round'}</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3.5">
              <p className="text-[10px] text-amber-600 font-semibold uppercase tracking-wide mb-1">Difficulty</p>
              <p className="text-slate-700 text-sm">{details.difficulty || '—'}</p>
            </div>
          </div>

          {/* Highlights */}
          {details.highlights && (
            <div className="mb-5">
              <h4 className="ts-display font-bold text-slate-800 text-base mb-3">Trek Highlights</h4>
              <ul className="space-y-2">
                {details.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={13} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Includes */}
          {details.includes && (
            <div className="mb-6">
              <h4 className="ts-display font-bold text-slate-800 text-base mb-3">What's Included</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {details.includes.map(inc => (
                  <div key={inc} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <GiCampingTent className="text-blue-500 flex-shrink-0" size={14} />
                    {inc}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6 p-3.5 bg-amber-50 border border-amber-100 rounded-xl">
            {[1,2,3,4,5].map(s => <FaStar key={s} size={13} className="text-amber-400" />)}
            <span className="text-slate-700 text-sm font-semibold ml-1">4.9</span>
            <span className="text-slate-500 text-xs">— Rated by our trekkers</span>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3">
            <a href="/contact"
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-sm transition-colors">
              <GiHiking size={16} /> Book This Trek
            </a>
            <button onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 rounded-xl text-sm transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekModal;