<div align="center">
  <h1 align="center">Our Memory Studio</h1>
  <p align="center">
    <strong>A highly interactive, beautifully designed, responsive web-based photo booth application.</strong>
    <br />
    <br />
    <a href="https://ourmemorystudio.vercel.app/"><strong>View Live Website</strong></a>
    ·
    <a href="https://github.com/itsankan16/Our-Memory-Studio/issues">Report Bug</a>
    ·
    <a href="https://github.com/itsankan16/Our-Memory-Studio/issues">Request Feature</a>
  </p>
</div>

<br />

---

## 📸 About The Project

**Our Memory Studio** is built to deliver a premium, fluid experience. With doodle-style aesthetics, grid selection, instant captures, and stunning "magazine-style" results, it brings the magic of a physical photo booth right to your browser. 

The interface scales seamlessly across all device sizes, ensuring a perfect layout whether on a small phone or a large landscape monitor.

<br />

## ✨ Key Features

* 📱 **Fluid & Responsive Design:** Masterfully crafted using modern CSS features (`clamp()`, Grid/Flexbox) for mathematically precise scaling.
* 🎨 **Doodle-Style UI:** Custom aesthetic buttons and interactive controls with rich tactile feedback built into the core components.
* 🎥 **Live Camera Feed:** Smooth, hardware-accelerated video rendering for instant capturing with zero lag.
* 🎞️ **Smart Result Generation:** Captures multiple sequential photos and automatically arranges them into curated, premium grid layouts.
* 🔊 **Audio Feedback:** Authentic physical booth experience powered by built-in countdown timers and shutter sounds.
* 💫 **Fluid Animations:** Micro-interactions and polished screen transitions that make the app feel alive.

<br />

## 🛠️ Built With

This project harnesses cutting-edge web development technologies to ensure maximum performance and a top-tier developer experience:

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) **React 19**
* ![TanStack Start](https://img.shields.io/badge/TanStack_Start-FF4154?style=for-the-badge&logo=react&logoColor=white) **TanStack Start & Router**
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) **Tailwind CSS v4**
* ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) **Supabase**
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) **Vite**
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) **TypeScript**
* 🐻 **Zustand** (State Management)
* 🧩 **Radix UI Primitives**

<br />

## 📂 Project Architecture

* `📁 /src/components` — Reusable React components and specialized UI fragments (Capture, Results, Landing).
* `📁 /src/hooks` — Custom React hooks managing device responsiveness and audio effects.
* `📁 /src/lib` — Utility functions, state management (`booth-store.ts`), and strip builders.
* `📁 /src/routes` — TanStack Router configurations handling fluid screen transitions.
* `📁 /supabase` — Backend configurations and schema.

<br />

## 💡 How It Works

1. 📖 **Landing:** Welcomes users with an artisanal, sketchbook aesthetic.
2. 🔲 **Selection:** Users personalize their session by picking a desired grid layout and frame style.
3. 📸 **Capture:** The app counts down with synchronized audio cues and captures sequential shots.
4. ✨ **Processing:** The final strip is generated, placed in a beautiful magazine layout, and rendered seamlessly.

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
</div>
