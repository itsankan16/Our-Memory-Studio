<div align="center">

  <img src="https://img.shields.io/badge/Our%20Memory%20Studio-📸-ff6b6b?style=for-the-badge&labelColor=1a1a2e" alt="Our Memory Studio" />

  <h1 align="center">Our Memory Studio</h1>

  <p align="center">
    <strong>A highly interactive, beautifully designed, responsive web-based photo booth application.</strong>
    <br />
    <br />
    <a href="https://ourmemorystudio.vercel.app/"><strong>🌐 View Live Website</strong></a>
    &nbsp;·&nbsp;
    <a href="https://github.com/itsankan16/Our-Memory-Studio/issues">🐛 Report Bug</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/itsankan16/Our-Memory-Studio/issues">💡 Request Feature</a>
  </p>

  <br />

  ![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=flat-square&logo=vercel&logoColor=white)
  ![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
  ![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

</div>

<br />

---

## 📸 About The Project

**Our Memory Studio** is built to deliver a premium, fluid experience. With doodle-style aesthetics, grid selection, instant captures, and stunning "magazine-style" results, it brings the magic of a physical photo booth right to your browser.

The interface scales seamlessly across all device sizes, ensuring a perfect layout whether on a small phone or a large landscape monitor.

<br />

## ✨ Key Features

| Feature | Description |
|---|---|
| 📱 **Fluid & Responsive Design** | Mathematically precise scaling via `clamp()`, Grid & Flexbox across all viewports |
| 🎨 **Doodle-Style UI** | Custom tactile-feel buttons with rich interactive feedback |
| 🎥 **Live Camera Feed** | Hardware-accelerated video rendering for instant, lag-free captures |
| 🎞️ **Smart Result Generation** | Multi-shot capture auto-arranged into premium curated grid layouts |
| 🔊 **Audio Feedback** | Authentic countdown timers and shutter sounds for a real-booth feel |
| 💫 **Fluid Animations** | Polished micro-interactions and seamless screen transitions |
| 🌙 **Dark-Mode Ready** | Designed with a rich dark palette that looks stunning out of the box |
| 🔒 **Supabase Backend** | Persistent gallery storage with secure, real-time data sync |

<br />

## 🚀 Getting Started

Follow these steps to run the project locally in under 2 minutes.

### Prerequisites

Make sure you have the following installed:

- **Node.js** `v18+` — [Download](https://nodejs.org/)
- **npm** or **bun** — included with Node.js / [Bun Install](https://bun.sh/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/itsankan16/Our-Memory-Studio.git

# 2. Navigate into the project directory
cd Our-Memory-Studio

# 3. Install dependencies
npm install
# or with bun (faster)
bun install
```

### Environment Setup

Create a `.env` file in the root directory and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **Note:** You can get these values from your [Supabase Dashboard](https://app.supabase.com/) under **Project Settings → API**.

### Running Locally

```bash
npm run dev
# or
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The app supports **Hot Module Replacement (HMR)** — changes reflect instantly.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

<br />

## 🛠️ Built With

This project harnesses cutting-edge web development technologies to ensure maximum performance and a top-tier developer experience:

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) **React 19**
* ![TanStack](https://img.shields.io/badge/TanStack_Router-FF4154?style=for-the-badge&logo=react&logoColor=white) **TanStack Router & Query**
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) **Tailwind CSS v4**
* ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) **Supabase**
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) **Vite**
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) **TypeScript**
* 🐻 **Zustand** (State Management)
* 🧩 **Radix UI Primitives** (Accessible components)
* 📋 **React Hook Form + Zod** (Form validation)

<br />

## 📂 Project Architecture

```
Our-Memory-Studio/
├── 📁 src/
│   ├── 📁 components/     # Reusable UI fragments (Capture, Results, Landing)
│   ├── 📁 hooks/          # Custom hooks for device responsiveness & audio
│   ├── 📁 lib/            # Utilities, booth-store.ts (Zustand), strip builders
│   └── 📁 routes/         # TanStack Router screen transition configs
├── 📁 supabase/           # Backend schema & edge function configs
├── 📁 api/                # Serverless API route handlers
├── 📄 vite.config.ts      # Vite build configuration
└── 📄 vercel.json         # Vercel deployment & SPA routing rules
```

<br />

## 💡 How It Works

```
🏠 Landing  ──►  🔲 Grid Selection  ──►  📸 Capture  ──►  ✨ Processing  ──►  🖼️ Result
```

1. 📖 **Landing** — Welcomes users with an artisanal, sketchbook aesthetic.
2. 🔲 **Selection** — Users personalize their session by picking a grid layout and frame style.
3. 📸 **Capture** — Counts down with synchronized audio cues and takes sequential shots.
4. ✨ **Processing** — Final strip is generated and placed in a premium magazine layout.
5. 💾 **Save & Share** — Download your photo strip or save it to the Supabase-powered gallery.

<br />

## ⚡ Performance

Our Memory Studio is engineered for speed and visual smoothness:

- **Canvas API** for hardware-accelerated photo compositing — no render-blocking libraries.
- **Lazy-loaded routes** via TanStack Router for minimal initial bundle size.
- **Zustand** for ultra-lightweight global state with zero unnecessary re-renders.
- **Vite's ESBuild** pipeline ensures sub-second cold starts in development.
- Fully optimized Vercel deployment with edge caching and SPA fallback routing.

<br />

## 🗺️ Roadmap

Here's what's planned for future versions:

- [x] 🎥 Live camera capture with countdown audio
- [x] 🎞️ Multi-photo grid strip generation
- [x] 📱 Responsive mobile-first layout
- [x] ☁️ Supabase gallery storage
- [ ] 🖌️ Custom frame overlays & color filters
- [ ] 👥 Multi-person shared session (real-time co-shooting)
- [ ] 🎭 AR stickers and face-filter support
- [ ] 📤 Direct social share to Instagram / Twitter
- [ ] 🌐 Localization & i18n support

> Have an idea? [Open a feature request](https://github.com/itsankan16/Our-Memory-Studio/issues) — contributions are always welcome!

<br />

## ❓ FAQ

<details>
<summary><strong>Do I need a webcam to use this?</strong></summary>
<br />
Yes — Our Memory Studio uses your device's camera via the browser's <code>MediaDevices</code> API. Make sure to grant camera permission when prompted. Mobile front cameras work perfectly too!
</details>

<details>
<summary><strong>Are my photos stored anywhere?</strong></summary>
<br />
Photos are stored in your configured Supabase bucket. If you're running locally without a Supabase setup, photos remain entirely in-browser and are never uploaded.
</details>

<details>
<summary><strong>Which browsers are supported?</strong></summary>
<br />
All modern browsers: Chrome, Firefox, Safari, and Edge. For the best camera experience, Chrome or Edge is recommended.
</details>

<details>
<summary><strong>Can I deploy my own instance?</strong></summary>
<br />
Absolutely! Fork the repo, add your own <code>.env</code> with Supabase keys, and deploy to Vercel with one click. The <code>vercel.json</code> SPA config is already included.
</details>

<br />

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br />

---

<div align="center">
  <p><i>Made with ❤️ for beautiful memories.</i></p>
  <br />
  <a href="https://ourmemorystudio.vercel.app/">
    <img src="https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Now-ff6b6b?style=for-the-badge" alt="Live Demo" />
  </a>
  &nbsp;
  <a href="https://github.com/itsankan16/Our-Memory-Studio/stargazers">
    <img src="https://img.shields.io/github/stars/itsankan16/Our-Memory-Studio?style=for-the-badge&color=ffd700" alt="Stars" />
  </a>
</div>
