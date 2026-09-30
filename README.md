# OCATECH DIGITAL SOLUTION — Portfolio Website

Professional portfolio website for **Oluegwu Chigozie**, Full-Stack Developer & Software Solutions Developer, under the brand **OCATECH DIGITAL SOLUTION**.

## Tech Stack

- **Frontend:** React 18 + Vite 5
- **Routing:** react-router-dom 6
- **Styling:** Plain CSS with CSS custom properties (dark/light themes)
- **Icons:** Inline SVG components

## Features

- 5 pages: Home, About, Services, Projects, Contact
- Dark/light mode with localStorage persistence
- Fully responsive (mobile-first)
- SEO optimized (meta tags, Open Graph, Twitter cards)
- Floating WhatsApp CTA
- Contact form (frontend-only, ready for backend integration)
- Accessible (semantic HTML, ARIA labels, reduced-motion support)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the dev server at `http://localhost:5173`.

### Build

```bash
npm run build
```

Outputs production build to `dist/`.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Vercel auto-detects Vite — no config needed
4. Deploy

Or use the CLI:

```bash
npm i -g vercel
vercel
```

### Netlify

1. Push your code to GitHub
2. Import the repo in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

Or use the CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod
```

## Project Structure

```
├── index.html              # HTML entry with SEO meta tags
├── package.json
├── vite.config.js
├── public/                 # Static assets (images)
│   ├── ocatech logo.png
│   └── oluegwuc.png
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Router + layout
│   ├── index.css           # Design system (CSS variables, all styles)
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactForm.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── Icon.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/              # Route pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── ContactPage.jsx
│   ├── data/               # Content data
│   │   ├── services.js
│   │   ├── technologies.js
│   │   └── projects.js
│   └── hooks/
│       └── useTheme.js
└── dist/                   # Production build output
```

## Updating Content

### Add a Project

Edit `src/data/projects.js` and add an object:

```js
{
  id: 1,
  title: 'My Project',
  description: 'A brief description',
  category: 'Web Applications',
  technologies: ['React', 'Node.js'],
  image: '/path/to/image.png',
  features: ['Feature 1', 'Feature 2'],
  liveUrl: 'https://...',
  githubUrl: 'https://...',
  status: 'completed',
}
```

### Add Social Links

Edit the relevant component (Footer, Contact page) and add your real links. Remove or hide any placeholders.

### Update Contact Info

Search for `08165321429` and `ocatestemail@gmail.com` across `src/` and replace with your updated details.

### Change Branding

Replace `public/ocatech logo.png` and `public/oluegwuc.png` with your assets. Update the brand name in `src/components/Navbar.jsx` and `src/components/Footer.jsx`.

## Environment Variables

No environment variables are required for the current frontend-only setup. When adding a backend, create a `.env` file:

```
VITE_API_URL=https://your-api.com
```

## License

© 2026 Oluegwu Chigozie. All rights reserved.
