/**
 * useButtonFX
 * -----------
 * Attaches to the document via a single delegated pointer-down listener.
 * Every <button> click gets:
 *  1. A soft synthesized "click" sound via Web Audio API (no files needed)
 *  2. A CSS ripple burst animation centred at the cursor position
 */
import { useEffect } from "react";

/* ── Ripple styles injected once ──────────────────────────────────────────── */
const RIPPLE_CSS = `
@keyframes btn-ripple {
  0%   { transform: scale(0); opacity: 0.55; }
  70%  { transform: scale(2.8); opacity: 0.18; }
  100% { transform: scale(3.6); opacity: 0; }
}
.btn-ripple-host {
  position: relative;
  overflow: hidden;
}
.btn-ripple-dot {
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  margin-top: -20px;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.7);
  animation: btn-ripple 0.55s ease-out forwards;
}
button:active {
  transform: scale(0.95);
  transition: transform 0.08s ease;
}
button {
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
button:hover {
  filter: brightness(1.06);
}
`;

let styleInjected = false;

function injectStyles() {
  if (styleInjected) return;
  styleInjected = true;
  const el = document.createElement("style");
  el.textContent = RIPPLE_CSS;
  document.head.appendChild(el);
}

/* ── Lightweight synth click sound ───────────────────────────────────────── */
let audioCtx: AudioContext | null = null;

function playClick() {
  try {
    if (!audioCtx) audioCtx = new AudioContext();
    const ctx = audioCtx;

    // Short decaying tone — sounds like a soft mechanical click
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.14);
  } catch {
    // Silently ignore — AudioContext may be unavailable (e.g. SSR)
  }
}

/* ── Ripple spawner ───────────────────────────────────────────────────────── */
function spawnRipple(btn: HTMLButtonElement, x: number, y: number) {
  btn.classList.add("btn-ripple-host");

  const rect = btn.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "btn-ripple-dot";
  dot.style.left = `${x - rect.left}px`;
  dot.style.top = `${y - rect.top}px`;

  btn.appendChild(dot);
  dot.addEventListener("animationend", () => dot.remove(), { once: true });
}

/* ── Hook ─────────────────────────────────────────────────────────────────── */
export function useButtonFX() {
  useEffect(() => {
    injectStyles();

    function handlePointerDown(e: PointerEvent) {
      const btn = (e.target as Element).closest("button") as HTMLButtonElement | null;
      if (!btn || btn.disabled) return;

      playClick();
      spawnRipple(btn, e.clientX, e.clientY);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);
}
