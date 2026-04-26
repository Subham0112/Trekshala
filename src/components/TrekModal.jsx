// src/components/TrekModal.jsx
import React from 'react';
import {
  FaTimes, FaMapMarkerAlt, FaClock, FaMountain,
  FaUsers, FaCheckCircle, FaSun, FaLeaf,
} from 'react-icons/fa';
import { GiHiking, GiCampingTent, GiPathDistance, GiMountainRoad } from 'react-icons/gi';
import { BsCalendar3 } from 'react-icons/bs';

const DIFFICULTY = {
  moderate:    { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100', dot: 'bg-emerald-400', label: 'Moderate',    bar: 'w-2/5'  },
  challenging: { bg: 'bg-rose-50',    text: 'text-rose-700',    border: 'border-rose-100',    dot: 'bg-rose-400',    label: 'Challenging', bar: 'w-4/5'  },
};

const TrekModal = ({ trek, onClose }) => {
  const diff = DIFFICULTY[trek.category] || {
    bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-200',
    dot: 'bg-slate-400', label: trek.category, bar: 'w-1/2',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
      style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="ts-modal bg-white w-full sm:max-w-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col rounded-t-3xl"
        style={{ maxHeight: '92vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Hero image ── */}
        <div className="relative flex-shrink-0" style={{ height: '230px' }}>
          <img src={trek.image} alt={trek.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg,rgba(15,23,42,0.08) 0%,rgba(15,23,42,0.7) 100%)' }} />

          {/* Close */}
          <button onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors">
            <FaTimes size={14} />
          </button>

          {trek.featured && (
            <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">
              ★ Featured Trek
            </span>
          )}

          {/* Title block */}
          <div className="absolute bottom-5 left-5 right-16">
            <h2 className="ts-display text-white font-bold leading-tight mb-1.5"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)' }}>
              {trek.name}
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="flex items-center gap-1 text-blue-200 text-xs">
                <FaMapMarkerAlt size={10} /> {trek.location}, Nepal
              </span>
              <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${diff.bg} ${diff.text} ${diff.border}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${diff.dot}`} /> {diff.label}
              </span>
            </div>
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-5">

          {/* Quick stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: <FaClock size={15} className="text-blue-500" />,        label: 'Duration',     value: `${trek.duration} Days`  },
              { icon: <GiPathDistance size={17} className="text-blue-500" />, label: 'Max Altitude', value: trek.maxAltitude || '—'   },
              { icon: <FaUsers size={14} className="text-blue-500" />,        label: 'Group Size',   value: trek.groupSize   || '—'   },
              { icon: <BsCalendar3 size={14} className="text-blue-500" />,    label: 'Best Season',  value: trek.bestSeason?.split(' ')[0] || 'Year-round' },
            ].map(s => (
              <div key={s.label} className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-center">
                <div className="flex justify-center mb-1">{s.icon}</div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">{s.label}</p>
                <p className="ts-display text-slate-800 font-bold text-sm mt-0.5 leading-snug">{s.value}</p>
              </div>
            ))}
          </div>

          {/* About */}
          <div>
            <h4 className="ts-display font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
              <GiMountainRoad className="text-blue-500" size={16} /> About This Trek
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">{trek.description}</p>
          </div>

          {/* Difficulty meter */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="ts-display font-bold text-slate-800 text-sm flex items-center gap-2">
                <FaMountain className="text-blue-500" size={13} /> Difficulty Level
              </h4>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${diff.bg} ${diff.text}`}>{diff.label}</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
              <div className={`h-2 rounded-full ${trek.category === 'challenging' ? 'bg-rose-400' : 'bg-emerald-400'} ${diff.bar} transition-all`} />
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">{trek.difficultyNote}</p>
          </div>

          {/* Season + Altitude row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-sky-50 border border-sky-100 rounded-xl p-3.5 flex gap-3 items-start">
              <FaSun className="text-sky-500 flex-shrink-0 mt-0.5" size={15} />
              <div>
                <p className="text-[10px] text-sky-600 font-semibold uppercase tracking-wide mb-0.5">Best Season</p>
                <p className="text-slate-700 text-sm font-medium">{trek.bestSeason || 'Year-round'}</p>
              </div>
            </div>
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3.5 flex gap-3 items-start">
              <GiPathDistance className="text-indigo-500 flex-shrink-0 mt-0.5" size={17} />
              <div>
                <p className="text-[10px] text-indigo-600 font-semibold uppercase tracking-wide mb-0.5">Maximum Altitude</p>
                <p className="text-slate-700 text-sm font-medium">{trek.maxAltitude || '—'}</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          {trek.highlights?.length > 0 && (
            <div>
              <h4 className="ts-display font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                <FaLeaf className="text-blue-500" size={14} /> Trek Highlights
              </h4>
              <ul className="space-y-2">
                {trek.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={13} />
                    <span className="text-slate-600 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Includes */}
          {trek.includes?.length > 0 && (
            <div>
              <h4 className="ts-display font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                <GiCampingTent className="text-blue-500" size={16} /> What's Included
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {trek.includes.map(inc => (
                  <div key={inc} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{inc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Group size info */}
          <div className="flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
            <FaUsers className="text-amber-500 flex-shrink-0" size={18} />
            <div>
              <p className="text-amber-700 font-semibold text-sm">Group Size: {trek.groupSize || '2–16 people'}</p>
              <p className="text-slate-500 text-xs mt-0.5">Private & group departure options available. Contact us for details.</p>
            </div>
          </div>

          {/* Close button only — no booking */}
          <button
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl text-sm transition-colors"
          >
            <FaTimes size={13} /> Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrekModal;