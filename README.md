# Abhay Bajpai's Portfolio

A modern, responsive personal portfolio website that showcases professional projects, skills, and personal brand through interactive and engaging web technologies.

## Features

- Modern and responsive design
- Interactive elements and animations
- Project showcase with filtering capabilities
- Skills and education sections
- Contact form with validation
- GitHub Pages deployment integration

## Tech Stack

- React.js
- Tailwind CSS
- Framer Motion for animations
- React Type Animation for typewriter effects
- TSParticles for background particle animations
- React Parallax Tilt for interactive 3D elements

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open your browser and navigate to `http://localhost:5173`

## Deployment

This project is configured for easy deployment to GitHub Pages using the `gh-pages` package:

```bash
npm run build
npm run deploy
```

## Structure

The project follows a clean, organized structure:

```
abhays-portfolio/
├── public/                 # Static files (e.g., favicon, robots.txt, assets)
├── src/                    # All source code
│   ├── assets/             # Images, icons, illustrations
│   ├── components/         # Reusable UI components
│   ├── sections/           # Individual page sections
│   ├── styles/             # Global Tailwind styles
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
└── ...                     # Configuration files
```

## License

MIT