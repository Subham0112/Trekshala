# Trekking Nepal: Himalayan Adventures Web App

![Trekking Nepal](https://img.shields.io/badge/React-19.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.3.1-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.1-cyan)

A stunning, modern web application built with React and Vite, designed to inspire and guide adventurers through the breathtaking trekking routes of Nepal. Discover iconic trails like Everest Base Camp, Annapurna Circuit, and Langtang Valley, with detailed itineraries, cultural insights, and booking information.

## 🌄 About the Website

Trekking Nepal is your gateway to the Himalayas. Whether you're a seasoned mountaineer or a first-time trekker, our platform offers comprehensive information on Nepal's most spectacular routes. From the world's highest peaks to serene valleys, we provide authentic experiences guided by local experts who live and breathe the mountains.

Our website features immersive visuals, interactive maps, and expert tips to help you plan your dream trek. Learn about seasonal weather, difficulty levels, cultural highlights, and sustainable practices that ensure your journey respects both the environment and local communities.

## ✨ Key Features

### 🏠 Home Page
- **Hero Section**: Cinematic hero with gradient overlays and call-to-action buttons
- **Featured Treks**: Highlighted popular routes like Everest Base Camp, Annapurna Circuit, and Langtang Valley
- **Seasonal Guide**: Interactive cards for Spring, Summer, Autumn, and Winter trekking seasons with weather details, pros/cons, and best activities
- **Difficulty Levels**: Easy, Moderate, Challenging, and Extreme trek classifications with detailed descriptions
- **Trekking Tips**: Essential advice on acclimatization, packing, photography, cultural respect, and permits
- **FAQs**: Comprehensive answers to common questions about experience requirements, permits, best seasons, fitness levels, and altitude sickness
- **Why Nepal?**: Statistics and highlights showcasing Nepal's unique trekking heritage

### 🥾 Treks Page
- **Trek Listings**: Grid view of all available trekking packages with images, locations, durations, and prices
- **Advanced Filtering**: Filter by difficulty (Moderate, Challenging) or view all treks
- **Search Functionality**: Real-time search by trek name, location, description, or duration
- **Sorting Options**: Sort by price (low to high/high to low) or duration (short to long/long to short)
- **Pagination**: Efficient loading with 6 treks per page and navigation controls
- **Trek Details Modal**: In-depth information including highlights, inclusions, difficulty, best season, max altitude, and group size
- **Responsive Cards**: Beautiful card designs with hover effects, badges, and key stats

### 📖 About Page
- **Company Story**: Milestones from founding in 2010 to celebrating the 1,000th trekker
- **Team Profiles**: Meet the expert guides and staff, including Dorje Sherpa (Founder), Pema Lama (Operations), and Rinzin Gurung (Cultural Guide)
- **Photo Gallery**: Stunning images from various treks and cultural sites
- **Core Values**: Authenticity, Safety, Sustainability, and Passion pillars of the company

### 📞 Contact Page
- Contact form for inquiries
- Company information and location details

### 🖼️ Gallery Page
- Visual showcase of trekking experiences and landscapes
- Organized photo collections from different routes

### 🎨 Design & UX
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Intersection Observer-powered reveal animations for engaging scroll experiences
- **Modern UI**: Clean typography with custom fonts, gradients, and professional color schemes
- **Accessibility**: Semantic HTML, keyboard navigation, and screen reader friendly
- **Performance**: Optimized images, lazy loading, and efficient React rendering

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.0 with modern hooks and functional components
- **Build Tool**: Vite 7.3.1 for lightning-fast development and optimized production builds
- **Styling**: Tailwind CSS 4.2.1 for utility-first, responsive design
- **Routing**: React Router DOM 7.13.1 for client-side navigation
- **Icons**: Lucide React and React Icons for consistent, scalable iconography
- **Animations**: Motion library for smooth, performant animations
- **Pagination**: React Paginate for efficient data pagination
- **Linting**: ESLint with React-specific rules for code quality
- **Development**: Hot module replacement, fast refresh, and modern ES modules

## 📁 Project Structure

```
trekking_web/
├── public/
│   ├── img/
│   │   ├── img5.avif
│   │   └── img6.avif
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── home.css
│   │   │   ├── package.css
│   │   │   └── theme.css
│   │   └── img/
│   │       ├── about.avif
│   │       ├── about1.avif
│   │       ├── gallery.avif
│   │       ├── home.avif
│   │       ├── everest.jpg
│   │       ├── annapurna.jpg
│   │       └── langtang.webp
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── TrekModal.jsx
│   ├── data/
│   │   ├── galleryData.js
│   │   └── treks.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Treks.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Gallery.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
├── index.html
└── README.md
```

## 🚀 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/trekking-nepal.git
   cd trekking-nepal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

6. **Lint the code**:
   ```bash
   npm run lint
   ```

## 📊 Data Structure

### Treks Data (`src/data/treks.js`)
Contains detailed information for each trekking package:
- Name, location, duration, price
- Category (moderate/challenging)
- Featured status
- Image paths
- Descriptions

### Gallery Data (`src/data/galleryData.js`)
Photo collections for the gallery page with captions and image paths.

## 🎯 Usage

- **Navigation**: Use the navbar to explore different sections
- **Filtering Treks**: On the Treks page, use filters and search to find your ideal route
- **Trek Details**: Click "Details" on any trek card to view comprehensive information
- **Responsive**: The site adapts beautifully to any screen size

## 🙏 Acknowledgments

- Images sourced from Unsplash and local assets
- Icons from React Icons and Lucide React
- Inspired by the majestic Himalayas and the spirit of adventure

---

**Ready to conquer the peaks?** Start planning your Himalayan journey today! 🏔️
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd trekking_web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📊 Data Structure

The application uses static data files for trekking packages and gallery images:

- **treks.js**: Contains an array of trek objects with details like name, category, location, duration, price, description, and image
- **galleryData.js**: Contains gallery images for showcasing trekking experiences

## 🎨 Styling & Design

- **Fonts**: Playfair Display for headings, DM Sans for body text
- **Color Scheme**: Nature-inspired greens and earth tones
- **Animations**: Smooth hover effects, scroll reveals, and transitions
- **Responsive**: Optimized for mobile, tablet, and desktop views
