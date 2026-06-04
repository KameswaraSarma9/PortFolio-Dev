# Kameswara Sarma — Portfolio

A futuristic, animated portfolio website built with React + Vite.

## Tech Stack
- **React 18** + **Vite 5**
- **Framer Motion** for animations
- **CSS Variables** for theming
- **Canvas API** for animated grid background
- **Google Fonts** — Orbitron, Syne, JetBrains Mono

## Project Structure
```
portfolio/
├── public/
│   ├── profile.jpg        ← Your photo
│   ├── resume.pdf         ← Your resume (downloadable)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Hackathons.jsx / .css
│   │   ├── Certifications.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── GridBackground.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

## Local Development

```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this project to GitHub
2. Go to https://vercel.com → New Project
3. Import your GitHub repo
4. Framework: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click Deploy ✓

## Updating Content
- **Resume**: Replace `public/resume.pdf`
- **Photo**: Replace `public/profile.jpg`
- **Projects**: Edit `src/components/Projects.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Contact info**: Edit `src/components/Contact.jsx`
