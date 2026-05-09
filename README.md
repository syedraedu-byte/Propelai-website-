# Propel AI — Elite AI Automation Agency Website

> **"Automate Growth. Eliminate Repetition."**

A fully production-ready, visually premium AI automation agency website built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion v11 |
| Icons | Lucide React |
| Fonts | Sora + Manrope (Google Fonts) |
| UI Primitives | Headless UI |
| Deploy | Vercel / Netlify / GitHub Pages |

---

## 📁 Project Structure

```
propel-ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout, metadata, fonts
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles, CSS variables
│   │   ├── not-found.tsx        # 404 page
│   │   ├── services/
│   │   │   ├── page.tsx         # Services page
│   │   │   ├── ServicesHero.tsx
│   │   │   └── ServiceDetail.tsx
│   │   ├── about/
│   │   │   ├── page.tsx         # About page
│   │   │   ├── AboutHero.tsx
│   │   │   ├── Mission.tsx
│   │   │   ├── Timeline.tsx
│   │   │   └── TeamSection.tsx
│   │   └── contact/
│   │       ├── page.tsx         # Contact page
│   │       ├── ContactHero.tsx
│   │       └── ContactContent.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky glass navbar + mobile drawer
│   │   │   └── Footer.tsx       # Full-featured footer
│   │   ├── ui/
│   │   │   ├── Button.tsx       # Multi-variant button with glow
│   │   │   ├── Badge.tsx        # Color badge with animated dot
│   │   │   ├── GlowCard.tsx     # Mouse-follow glow card
│   │   │   └── AnimatedCounter.tsx  # Scroll-triggered number counter
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Animated hero with floating metrics
│   │   │   ├── LogoMarquee.tsx  # Infinite scrolling logo strip
│   │   │   ├── Stats.tsx        # Animated stats counters
│   │   │   ├── Features.tsx     # Bento grid features
│   │   │   ├── Services.tsx     # Service cards grid
│   │   │   ├── Process.tsx      # 4-step timeline
│   │   │   ├── Testimonials.tsx # Auto-advancing carousel
│   │   │   ├── Pricing.tsx      # Monthly/annual pricing toggle
│   │   │   ├── FAQ.tsx          # Animated accordion
│   │   │   └── CTA.tsx          # Final call-to-action
│   │   └── effects/
│   │       ├── GridBackground.tsx  # Dot/line grid + glow orbs
│   │       └── ScrollProgress.tsx  # Top scroll progress bar
│   └── lib/
│       ├── animations.ts        # Framer Motion variant library
│       └── utils.ts             # cn(), formatNumber(), debounce()
├── public/                      # Static assets
├── tailwind.config.ts           # Custom tokens, animations, colors
├── next.config.js               # Static export config
├── tsconfig.json
└── package.json
```

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/propel-ai.git
cd propel-ai
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Deploy to Vercel (Recommended)

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

### Option B — GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Framework: **Next.js** (auto-detected)
5. Build Command: `npm run build`
6. Output Directory: `out`
7. Click **Deploy**

---

## 🌐 Deploy to Netlify

### Option A — Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=out
```

### Option B — Netlify UI

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → New Site from Git
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy

Add a `netlify.toml` at root for automatic config:

```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 📄 Deploy to GitHub Pages

1. In `next.config.js`, set `basePath` if deploying to a subpath:

```js
const nextConfig = {
  output: 'export',
  basePath: '/propel-ai', // only if deploying to username.github.io/propel-ai
  trailingSlash: true,
  images: { unoptimized: true },
}
```

2. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
      - uses: actions/deploy-pages@v4
```

3. In GitHub repo Settings → Pages → Source: **GitHub Actions**

---

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` → `theme.extend.colors`:

```ts
colors: {
  background: '#050508',    // main bg — change to your dark base
  'bg-secondary': '#0a0a14',
  blue: { 500: '#3b82f6' },  // primary accent
  purple: { 500: '#8b5cf6' }, // secondary accent
}
```

### Agency Name / Tagline

- `src/app/layout.tsx` — update `metadata` (title, description, OpenGraph)
- `src/components/layout/Navbar.tsx` — update logo text
- `src/components/layout/Footer.tsx` — update brand block
- `src/components/sections/Hero.tsx` — update `headline1`, `headline2`

### Contact Details

Edit `src/app/contact/ContactContent.tsx` → `contactInfo` array.

### Services

Edit `src/components/sections/Services.tsx` → `services` array.
Edit `src/app/services/ServiceDetail.tsx` → `serviceDetails` array.

### Team Members

Edit `src/app/about/TeamSection.tsx` → `team` array.

### Testimonials

Edit `src/components/sections/Testimonials.tsx` → `testimonials` array.

### Pricing

Edit `src/components/sections/Pricing.tsx` → `plans` array.

---

## ⚡ Performance

- **Static export** — no server required, CDN-ready
- **Font optimization** — Google Fonts loaded via `next/font` (zero layout shift)
- **Image optimization** — `unoptimized: true` for static hosting compatibility
- **Code splitting** — automatic per-page by Next.js
- **Framer Motion** — `useInView` ensures animations only run when visible
- **CSS animations** — GPU-accelerated `transform` and `opacity` only

---

## ♿ Accessibility

- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- `aria-label` on all icon-only buttons
- `aria-expanded` on mobile menu toggle
- `focus-visible` ring styles in `globals.css`
- Sufficient color contrast ratios (WCAG AA)
- Keyboard-navigable navbar and FAQ accordion

---

## 📜 License

MIT — free for personal and commercial use.

---

## 🤝 Built by Propel AI

Have questions about deployment? Email: **hello@propelai.agency**
