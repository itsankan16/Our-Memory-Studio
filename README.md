# 📸 Our Memory Studio

A highly interactive, beautifully designed, responsive web-based photo booth application. Built to deliver a premium, fluid experience with doodle-style aesthetics, grid selection, instant captures, and stunning "magazine-style" results.

---

## ✨ Features

- **Fluid & Responsive Design:** Uses modern CSS features to perfectly scale on small phones, tablets, and large landscape monitors.
- **Doodle-Style UI:** Custom aesthetic buttons, interactive controls, and tactile feedback built right into the components.
- **Live Camera Feed Integration:** Smooth hardware-accelerated video rendering for instant capturing.
- **Smart Result Generation:** Captures multiple photos, automatically arranges them into curated grid layouts, and presents them in a premium high-fidelity format.
- **Audio Feedback:** Built-in timer and click sounds to enhance the physical photo booth experience.
- **Animations & Transitions:** Micro-interactions and polished screen transitions that make the app feel alive and responsive.

## 🛠 Tech Stack

This project is built using cutting-edge web development practices:

- **Framework:** React 19 + TanStack Start (TypeScript)
- **Routing:** TanStack Router
- **Styling:** Tailwind CSS v4 + Radix UI Primitives
- **State Management:** Zustand
- **Backend & Auth:** Supabase
- **Build Tool:** Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- `npm` or `bun`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itsankan16/Our-Memory-Studio.git
   cd Our-Memory-Studio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## 📂 Project Structure

- `/src/components` - Reusable React components and UI fragments (Capture, Results, Landing).
- `/src/hooks` - Custom React hooks for device responsiveness and sound effects.
- `/src/lib` - Utility functions, strip builders, and Zustand store (`booth-store.ts`).
- `/src/routes` - TanStack Router definitions for screen transitions.
- `/supabase` - Supabase configurations and schema.

## 💡 How It Works

1. **Landing:** Welcomes users with an artisanal sketchbook aesthetic.
2. **Selection:** Users pick their desired grid layout and frame style.
3. **Capture:** The app counts down with audio cues and takes sequential shots.
4. **Processing & Result:** The final strip is generated, placed in a beautiful magazine layout, and rendered seamlessly.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check [issues page](https://github.com/itsankan16/Our-Memory-Studio/issues).

---

_Made with ❤️ for beautiful memories._
