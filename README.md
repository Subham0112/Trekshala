# Trekking Web App

A modern, responsive web application built with React and Vite for showcasing and booking trekking adventures in Nepal. This project provides an interactive platform for users to explore popular trekking routes, view galleries, learn about the company, and get in touch for inquiries.

## 🌟 Features

- **Home Page**: Engaging landing page with hero section, featured treks, and key highlights
- **About Page**: Information about the trekking company and its mission
- **Packages Page**: Detailed listing of available trekking packages with filtering and pagination
- **Contact Page**: Contact form and information for inquiries
- **Gallery Page**: Visual showcase of trekking experiences (currently commented out in routing)
- **Responsive Design**: Mobile-first approach with Tailwind CSS for seamless experience across devices
- **Smooth Animations**: Powered by Motion library for enhanced user interactions
- **Modern UI**: Clean, professional design with custom fonts and gradients

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM
- **Icons**: Lucide React & React Icons
- **Animations**: Motion
- **Pagination**: React Paginate
- **Linting**: ESLint with React plugins

## 📁 Project Structure

```
trekking_web/
├── public/
│   └── img/                 # Static images
├── src/
│   ├── assets/
│   │   └── img/             # Component-specific images
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation component
│   │   └── Footer.jsx       # Footer component
│   ├── data/
│   │   ├── galleryData.js   # Gallery images data
│   │   └── treks.js         # Trekking packages data
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # About page
│   │   ├── Packages.jsx     # Trek packages listing
│   │   ├── Contact.jsx      # Contact page
│   │   └── Gallery.jsx      # Gallery page (commented out)
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
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

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

For inquiries about trekking packages or the website, please visit the Contact page or reach out through the provided contact form.

---

Built with ❤️ for adventure seekers exploring the Himalayas.
