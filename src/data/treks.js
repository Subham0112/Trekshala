// src/data/treks.js
import langtangImg from '../assets/img/langtang.webp';
import annapurnaImg from '../assets/img/annapurna.jpg';
import everestImg from '../assets/img/everest.jpg';
import gokyoImg from '../assets/img/gokyo_Lake.webp';
import manasluImg from '../assets/img/manaslu.jpeg';
import poonhillImg from '../assets/img/poonhill.webp';


export const treks = [
  {
    name: "Everest Base Camp",
    category: "challenging",
    location: "Khumbu Region",
    duration: 14,
    description:
      "Follow the footsteps of legends to the base of the world's highest peak through Sherpa villages and breathtaking landscapes.",
    image: everestImg,
    featured: true,
    // ── Detail fields ──
    maxAltitude: "5,364 m",
    bestSeason: "March–May & Sep–Nov",
    groupSize: "2–16 people",
    difficultyNote: "Requires good fitness and acclimatization days at altitude.",
    highlights: [
      "Namche Bazaar — the Sherpa capital",
      "Tengboche Monastery at 3,867 m",
      "Views of Khumbu Icefall & Lhotse Face",
      "Kala Patthar sunrise (5,545 m)",
    ],
    includes: [
      "Experienced licensed guide",
      "Porter (1 per 2 trekkers)",
      "Teahouse accommodation",
      "All meals on trail",
      "TIMS card & national park permits",
    ],
  },
  {
    name: "Annapurna Circuit",
    category: "moderate",
    location: "Annapurna Region",
    duration: 14,
    description:
      "A classic trek offering diverse landscapes, from lush forests to arid high deserts, with spectacular mountain vistas.",
    image: annapurnaImg,
    featured: true,
    maxAltitude: "5,416 m",
    bestSeason: "Oct–Nov & Mar–Apr",
    groupSize: "2–14 people",
    difficultyNote: "Suitable for fit trekkers with some altitude experience.",
    highlights: [
      "Thorong La Pass crossing at 5,416 m",
      "Sacred Muktinath Temple",
      "Poon Hill sunrise panorama",
      "Traditional Gurung & Magar villages",
    ],
    includes: [
      "Licensed guide",
      "Porter service",
      "Tea house & lodge accommodation",
      "Breakfast & dinner daily",
      "ACAP & TIMS permits",
    ],
  },
  {
    name: "Langtang Valley",
    category: "moderate",
    location: "Langtang Region",
    duration: 8,
    description:
      'A peaceful, less-crowded trail with stunning views and rich Tamang culture, often called "the valley of glaciers".',
    image: langtangImg,
    featured: true,
    maxAltitude: "4,984 m",
    bestSeason: "Mar–May & Sep–Dec",
    groupSize: "2–12 people",
    difficultyNote: "Accessible for beginners with basic fitness level.",
    highlights: [
      "Langtang National Park wildlife",
      "Kyanjin Gompa monastery & cheese factory",
      "Tserko Ri viewpoint at 4,984 m",
      "Authentic Tamang village homestays",
    ],
    includes: [
      "Local expert guide",
      "Porter (1 per 2 trekkers)",
      "Teahouse stays",
      "Meals throughout the trek",
      "Langtang National Park permit",
    ],
  },
  {
    name: "Gokyo Lakes Trek",
    category: "challenging",
    location: "Khumbu Region",
    duration: 13,
    description:
      "Discover emerald-green glacial lakes and panoramic views of four 8,000m peaks in this spectacular alternative to EBC.",
    image: gokyoImg,
    featured: false,
    maxAltitude: "5,357 m",
    bestSeason: "Mar–May & Sep–Nov",
    groupSize: "2–14 people",
    difficultyNote: "High altitude with demanding terrain — strong fitness required.",
    highlights: [
      "Five sacred turquoise Gokyo Lakes",
      "Gokyo Ri summit (5,357 m) panorama",
      "Ngozumpa — Nepal's longest glacier",
      "Views of Everest, Lhotse, Makalu & Cho Oyu",
    ],
    includes: [
      "Certified high-altitude guide",
      "Porter service",
      "Teahouse accommodation",
      "All meals on trail",
      "Sagarmatha National Park permits",
    ],
  },
  {
    name: "Manaslu Circuit",
    category: "challenging",
    location: "Manaslu Region",
    duration: 16,
    description:
      "A culturally rich trek around the world's eighth highest mountain with fewer crowds and pristine landscapes.",
    image: manasluImg,
    featured: false,
    maxAltitude: "5,160 m",
    bestSeason: "Sep–Nov & Mar–May",
    groupSize: "2–10 people",
    difficultyNote: "Remote & high-altitude — experienced trekkers recommended.",
    highlights: [
      "Larkya La Pass at 5,160 m",
      "Remote Restricted Area trekking zone",
      "Ancient Nubri valley Tibetan culture",
      "Untouched wilderness & pristine trails",
    ],
    includes: [
      "Experienced guide with restricted area knowledge",
      "Porter service",
      "Teahouse & camping accommodation",
      "All meals",
      "Restricted Area Permit & MCAP permit",
    ],
  },
  {
    name: "Poon Hill Trek",
    category: "moderate",
    location: "Annapurna Region",
    duration: 5,
    description:
      "A short trek perfect for breathtaking sunrise views over the Annapurna range, ideal for those with limited time.",
    image: poonhillImg,
    featured: false,
    maxAltitude: "3,210 m",
    bestSeason: "Year-round (best Oct–Apr)",
    groupSize: "2–16 people",
    difficultyNote: "Great for beginners and families — no prior experience needed.",
    highlights: [
      "Poon Hill sunrise over Annapurna & Dhaulagiri",
      "Colourful rhododendron forests in bloom",
      "Ghorepani Gurung village culture",
      "360° Himalayan panorama from 3,210 m",
    ],
    includes: [
      "Local guide",
      "Porter service",
      "Teahouse accommodation",
      "Breakfast & dinner daily",
      "ACAP entry permit",
    ],
  },
];