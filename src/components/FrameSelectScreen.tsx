import { useState, useEffect, useRef, useCallback } from "react";
import { useBoothStore } from "../lib/booth-store";
import {
  getFrameStylesFor,
  getDefaultFrameStyle,
  buildStrip,
} from "../lib/strip-builder";
import type { FrameStyleId, BoothMode } from "../lib/strip-builder";
import { ChevronLeft, ChevronRight, Check, RotateCcw, ImageIcon, Sparkles } from "lucide-react";

/* ── Shared style constants (mirrors GridSelectScreen) ─────────────────── */
const ERA_STYLE: Record<string, { bg: string; border: string; label: string; ink: string }> = {
  "90s": {
    bg: "linear-gradient(135deg,#FFE8C0,#FFC8A0)",
    border: "#C8500C",
    label: "90s",
    ink: "#7A2808",
  },
  aesthetic: {
    bg: "linear-gradient(135deg,#F4ECE0,#E8D8C0)",
    border: "#8A6840",
    label: "aesthetic",
    ink: "#5A3818",
  },
  "gen-z": {
    bg: "linear-gradient(135deg,#FCE0F8,#D8E8FC)",
    border: "#A040C8",
    label: "gen-z",
    ink: "#5A1878",
  },
  classic: {
    bg: "linear-gradient(135deg,#F8F1DC,#EFE3C2)",
    border: "#5A3008",
    label: "classic",
    ink: "#5A3008",
  },
};

/* ── Small frame thumbnail SVG ─────────────────────────────────────────── */
function FrameThumb({ id, mode }: { id: FrameStyleId; mode: BoothMode }) {
  let bg = mode === "ann" ? "#FFEDF1" : mode === "bday" ? "#E8FBFD" : "#F8F1DC";
  
  if (id === "ord-polaroid") bg = "#FFFFFF";
  else if (id === "ord-newspaper") bg = "#E0E0E0";
  else if (id === "ord-y2k") bg = "#D4E8FC";
  else if (id === "ord-zine") bg = "#F2F2F2";
  else if (id === "ann-cinema") bg = "#222222";
  else if (id === "ann-vintage") bg = "#E2D1B0";
  else if (id === "bday-disco") bg = "#E0E0F0";
  else if (id === "bday-pixel") bg = "#333333";
  else if (id === "ord-grunge90") bg = "#E8D8B0";
  else if (id === "ord-coffee") bg = "#F2E8D5";

  let photo = mode === "ann" ? "#F4C0CC" : mode === "bday" ? "#C0E0E8" : "#D8C088";
  let ink   = mode === "ann" ? "#9A2A4A" : mode === "bday" ? "#1F4868" : "#5A3008";

  // Visual adjustments for dark modes
  if (id === "ann-cinema" || id === "bday-pixel") {
    photo = "#4A4A4A";
    ink   = "#FFFFFF";
  }
  return (
    <svg viewBox="0 0 60 80" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden>
      <rect x="2" y="2" width="56" height="76" rx="3" fill={bg} stroke={ink} strokeWidth=".7" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x="8" y={10 + i * 22} width="44" height="18" rx="1" fill={photo} stroke={ink} strokeWidth=".4" />
      ))}
      <FrameThumbAccent id={id} ink={ink} />
    </svg>
  );
}

function FrameThumbAccent({ id, ink }: { id: FrameStyleId; ink: string }) {
  switch (id) {
    case "ord-classic":
    case "ord-aesthetic":
      return (
        <>
          <circle cx="6"  cy="6"  r="2.5" fill="#F2C04A" stroke={ink} strokeWidth=".4" />
          <circle cx="54" cy="6"  r="2.5" fill="#F2C04A" stroke={ink} strokeWidth=".4" />
          <circle cx="6"  cy="74" r="2.5" fill="#F2C04A" stroke={ink} strokeWidth=".4" />
          <circle cx="54" cy="74" r="2.5" fill="#F2C04A" stroke={ink} strokeWidth=".4" />
        </>
      );
    case "ord-washi":
      return (
        <>
          <rect x="0"  y="3"  width="22" height="4" fill="#F4B6C8" transform="rotate(-6 0 3)" />
          <rect x="38" y="73" width="22" height="4" fill="#A8D8E8" transform="rotate(4 38 73)" />
        </>
      );
    case "ord-polaroid":
      return <rect x="3" y="9" width="54" height="62" fill="none" stroke="#fff" strokeWidth="2.4" />;
    case "ord-grunge90":
      return (
        <>
          {Array.from({ length: 18 }).map((_, i) => (
            <circle key={i} cx={5 + ((i * 7) % 50)} cy={5 + ((i * 13) % 70)} r=".6" fill={ink} opacity=".5" />
          ))}
        </>
      );
    case "ord-stickerz":
      return (
        <>
          <text x="6"  y="9"  fontSize="6" fill="#E04878">★</text>
          <text x="50" y="9"  fontSize="6" fill="#48A8C8">☺</text>
          <text x="6"  y="76" fontSize="6" fill="#7AC840">✿</text>
          <text x="50" y="76" fontSize="6" fill="#F4B43C">♥</text>
        </>
      );
    case "ord-doodle":
      return <rect x="3" y="3" width="54" height="74" fill="none" stroke={ink} strokeWidth=".8" strokeDasharray="2 1" />;
    case "ord-zine":
      return (
        <>
          <rect x="2"  y="2"  width="6" height="6" fill="#F0E040" stroke={ink} strokeWidth=".3" />
          <rect x="52" y="72" width="6" height="6" fill="#F08070" stroke={ink} strokeWidth=".3" />
        </>
      );
    case "ord-coffee":
      return (
        <>
          <circle cx="9"  cy="9"  r="4" fill="none" stroke={ink} strokeWidth=".5" opacity=".5" />
          <circle cx="51" cy="71" r="5" fill="none" stroke={ink} strokeWidth=".5" opacity=".5" />
        </>
      );
    case "ord-pastel":
      return (
        <>
          <circle cx="8"  cy="6"  r="3"   fill="#fff" />
          <circle cx="13" cy="6"  r="2.5" fill="#fff" />
          <circle cx="50" cy="74" r="3"   fill="#fff" />
          <circle cx="55" cy="74" r="2.5" fill="#fff" />
        </>
      );
    case "ord-newspaper":
      return (
        <>
          <rect x="2" y="2"  width="56" height="5" fill="#1A1A1A" />
          <rect x="2" y="73" width="56" height="5" fill="#1A1A1A" />
        </>
      );
    case "ord-y2k":
      return (
        <>
          <circle cx="8"  cy="8"  r="3" fill="#A8E0F8" />
          <circle cx="7"  cy="7"  r="1" fill="#fff" />
          <circle cx="52" cy="72" r="3" fill="#F8B0E0" />
          <circle cx="51" cy="71" r="1" fill="#fff" />
        </>
      );
    case "ann-classic":
    case "ann-fingerprint":
      return (
        <>
          <text x="3"  y="9"  fontSize="6" fill="#C43860">♥</text>
          <text x="51" y="9"  fontSize="6" fill="#C43860">♥</text>
          <text x="3"  y="76" fontSize="6" fill="#C43860">♥</text>
          <text x="51" y="76" fontSize="6" fill="#C43860">♥</text>
        </>
      );
    case "ann-lace":
      return <path d="M0 3 Q4 6 8 3 T16 3 T24 3 T32 3 T40 3 T48 3 T56 3 T60 3" fill="none" stroke="#9A2A4A" strokeWidth=".5" />;
    case "ann-loveletter":
      return (
        <>
          <circle cx="8"  cy="8" r="3" fill="#A02038" />
          <circle cx="52" cy="8" r="3" fill="#A02038" />
        </>
      );
    case "ann-rosegold":
      return <rect x="2" y="2" width="56" height="76" rx="3" fill="none" stroke="#C88068" strokeWidth=".8" />;
    case "ann-pixelhearts":
      return (
        <>
          {[6, 18, 30, 42, 54].map((x) => <rect key={x}       x={x - 2} y="3"  width="4" height="3" fill="#E04878" />)}
          {[6, 18, 30, 42, 54].map((x) => <rect key={`b${x}`} x={x - 2} y="74" width="4" height="3" fill="#E04878" />)}
        </>
      );
    case "ann-cinema":
      return (
        <>
          <rect x="0"  y="0" width="4" height="80" fill="#1A1A1A" />
          <rect x="56" y="0" width="4" height="80" fill="#1A1A1A" />
        </>
      );
    case "ann-vintage":
      return <rect x="0" y="0" width="60" height="80" fill="#8A5828" opacity=".18" />;
    case "ann-sticker":
      return <text x="6" y="10" fontSize="6" fill="#E04878">✦</text>;
    case "ann-poetic":
    case "ann-cottagecore":
      return (
        <>
          <circle cx="8"  cy="6"  r="2.4" fill="#C46888" />
          <circle cx="52" cy="74" r="2.4" fill="#C46888" />
        </>
      );
    case "ann-petals":
      return (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse key={i} cx={5 + i * 7} cy={4 + (i % 2) * 70} rx="1.5" ry=".6" fill="#F4B0C8" />
          ))}
        </>
      );
    case "bday-classic":
    case "bday-balloons":
      return (
        <>
          <ellipse cx="8"  cy="6" rx="2.4" ry="3" fill="#E04060" />
          <ellipse cx="52" cy="6" rx="2.4" ry="3" fill="#48A8E0" />
        </>
      );
    case "bday-confetti":
    case "bday-sprinkles":
      return (
        <>
          {["#E04060","#48A8E0","#F0A040","#7048C8","#48C880"].map((c, i) => (
            <rect key={i}       x={5 + i * 11} y={3}  width="3" height="1.5" fill={c} />
          ))}
          {["#E04060","#48A8E0","#F0A040","#7048C8","#48C880"].map((c, i) => (
            <rect key={`b${i}`} x={5 + i * 11} y={75} width="3" height="1.5" fill={c} />
          ))}
        </>
      );
    case "bday-disco":
      return <circle cx="30" cy="6" r="3" fill="#3A3A4A" />;
    case "bday-neon":
      return <text x="10" y="9" fontSize="6" fill="#F060B8" fontFamily="cursive">Bday</text>;
    case "bday-cake":
      return (
        <>
          <rect x="22" y="70" width="16" height="6" fill="#F8C8D8" />
          <rect x="26" y="65" width="8"  height="5" fill="#FCE8B8" />
        </>
      );
    case "bday-streamers":
      return (
        <>
          <path d="M10 2 q-4 20 0 40 t0 36" fill="none" stroke="#E04060" strokeWidth=".7" />
          <path d="M50 2 q-4 20 0 40 t0 36" fill="none" stroke="#48A8E0" strokeWidth=".7" />
        </>
      );
    case "bday-pixel":
      return (
        <>
          <rect x="26" y="70" width="8" height="6" fill="#F4D880" />
          <rect x="28" y="68" width="4" height="2" fill="#E04060" />
        </>
      );
    case "bday-holographic":
      return <rect x="2" y="2" width="56" height="76" rx="3" fill="none" stroke="#A8E0F8" strokeWidth="1.4" opacity=".8" />;
    case "bday-popart":
      return (
        <polygon points="30,2 33,6 38,5 35,9 38,12 33,11 30,15 27,11 22,12 25,9 22,5 27,6" fill="#E04060" />
      );
    case "bday-stars":
      return (
        <>
          <circle cx="50" cy="6" r="2.5" fill="#FCE8A8" />
          {Array.from({ length: 6 }).map((_, i) => (
            <circle key={i} cx={5 + i * 10} cy={4 + (i % 2) * 72} r=".6" fill="#FCE8A8" />
          ))}
        </>
      );
    default:
      return null;
  }
}

/* ── Main component ─────────────────────────────────────────────────────── */
export function FrameSelectScreen() {
  const { mode, layout, shotCount, frameStyle, setFrameStyle, setScreen, resetFrames, frames, nightMode: isNight } = useBoothStore();
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewRef = useRef<HTMLCanvasElement>(null);
  const [rendering, setRendering] = useState(false);

  const framesOfMode = getFrameStylesFor(mode as BoothMode);
  const pickedFrame = frameStyle ?? getDefaultFrameStyle(mode as BoothMode);

  const updatePreview = useCallback(async () => {
    if (!canvasRef.current || !previewRef.current || frames.length === 0) return;
    setRendering(true);
    const { dataURL } = await buildStrip(
      frames,
      layout,
      mode as BoothMode,
      canvasRef.current,
      "", // No note yet
      pickedFrame,
      shotCount
    );
    
    const ctx = previewRef.current.getContext("2d");
    if (ctx) {
      previewRef.current.width = canvasRef.current.width;
      previewRef.current.height = canvasRef.current.height;
      ctx.drawImage(canvasRef.current, 0, 0);
    }
    setRendering(false);
  }, [frames, layout, mode, pickedFrame]);

  useEffect(() => {
    updatePreview();
  }, [pickedFrame, updatePreview]);

  const chooseFrame = (id: FrameStyleId) => {
    setFrameStyle(id);
  };

  const nextFrame = () => {
    const idx = framesOfMode.findIndex(f => f.id === pickedFrame);
    const nextIdx = (idx + 1) % framesOfMode.length;
    setFrameStyle(framesOfMode[nextIdx].id);
  };

  const prevFrame = () => {
    const idx = framesOfMode.findIndex(f => f.id === pickedFrame);
    const prevIdx = (idx - 1 + framesOfMode.length) % framesOfMode.length;
    setFrameStyle(framesOfMode[prevIdx].id);
  };

  const confirm = () => setScreen("printer-animation");

  const vibeLabel =
    mode === "ann" ? "Romance" : mode === "bday" ? "Birthday" : "Normal";

  const currentIdx = framesOfMode.findIndex(f => f.id === pickedFrame);
  const currentMeta = framesOfMode[currentIdx];
  const eraStyle = ERA_STYLE[currentMeta?.era ?? "classic"];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        width: "100%",
        overflow: "hidden",
        background: "var(--paper)",
        zIndex: 10,
      }}
    >
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes stripFadeIn {
          from { opacity: 0; transform: translateY(10px) rotate(-1.5deg); }
          to   { opacity: 1; transform: translateY(0px)  rotate(-1.5deg); }
        }
        .strip-wrapper {
          animation: stripFadeIn 0.35s var(--ease) forwards;
        }
        .frame-arrow {
          width: 52px; height: 52px; border-radius: 50%;
          background: #fff;
          border: 2px solid var(--ink);
          color: var(--ink);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.10);
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .frame-arrow:hover { transform: scale(1.1); box-shadow: 0 8px 20px rgba(0,0,0,0.16); }
        .frame-arrow:active { transform: scale(0.92); }
        .dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--ink);
          opacity: 0.18;
          transition: all 0.2s;
          cursor: pointer;
          border: none; padding: 0;
        }
        .dot.active { opacity: 1; transform: scale(1.4); }
        .confirm-btn {
          font-family: var(--fd); font-size: clamp(1rem, 2.5vw, 1.2rem); font-weight: 700;
          padding: clamp(0.6rem, 2vh, 0.85rem) clamp(1.5rem, 4vw, 2.5rem);
          border: 3px solid var(--btn-border); border-radius: 50px;
          background: var(--btn-bg); color: #fff; cursor: pointer;
          box-shadow: 0 6px 0 var(--btn-border);
          display: flex; align-items: center; gap: 0.6rem;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .confirm-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 0 var(--btn-border); }
        .confirm-btn:active { transform: translateY(4px); box-shadow: 0 2px 0 var(--btn-border); }
        .retake-btn {
          font-family: var(--fd); font-size: clamp(0.9rem, 2vw, 1rem); font-weight: 700;
          padding: clamp(0.55rem, 1.5vh, 0.7rem) clamp(1rem, 3vw, 1.6rem);
          border: 2px solid var(--ink); border-radius: 50px;
          background: transparent; color: var(--ink); cursor: pointer;
          display: flex; align-items: center; gap: 0.5rem;
          transition: background 0.15s;
        }
        .retake-btn:hover { background: rgba(0,0,0,0.04); }
        @media (max-width: 680px) {
          .frame-arrow { width: 36px; height: 36px; }
          .strip-preview-canvas { max-width: clamp(180px, 60vw, 280px) !important; max-height: 58vh !important; }
        }
        @media (max-width: 420px) {
          .frame-arrow { width: 32px; height: 32px; }
          .strip-preview-canvas { max-width: clamp(160px, 62vw, 240px) !important; }
        }
        @media (max-height: 600px) {
          .frame-arrow { width: 32px; height: 32px; }
          .dot { width: 6px; height: 6px; }
          .strip-preview-canvas { max-height: 50vh !important; }
        }
      `}</style>

      <canvas ref={canvasRef} style={{ display: "none" }} />

      {/* ── Top bar ────────────────────────────────────────────────── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "clamp(0.6rem, 2vh, 1.2rem) clamp(1rem, 4vw, 2rem)",
        borderBottom: `1px solid ${isNight ? "rgba(240,234,214,0.12)" : "rgba(0,0,0,0.06)"}`,
        background: isNight ? "rgba(15,15,45,0.75)" : "rgba(255,255,255,0.55)",
        backdropFilter: "blur(12px)",
        zIndex: 10,
        flexShrink: 0,
        position: "relative",
      }}>
        {/* Left: Step tag */}
        <div style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          fontFamily: "var(--fd)", fontSize: "1rem", color: "var(--ink-soft)",
        }}>
          <Sparkles size={18} />
          <span>Step 3 of 4</span>
        </div>

        {/* Center: Title */}
        <h2 style={{
          fontFamily: "var(--fd)",
          fontSize: "clamp(1.4rem, 4vw, 2rem)",
          fontWeight: 700,
          color: "var(--ink)",
          margin: 0,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}>
          Choose Your Frame
        </h2>

        {/* Right: Counter */}
        <span style={{
          fontFamily: "var(--fb)", fontWeight: 800,
          fontSize: "0.9rem", color: "var(--ink-soft)",
          letterSpacing: "0.1em",
        }}>
          {currentIdx + 1} / {framesOfMode.length}
        </span>
      </div>

      {/* ── Main area ──────────────────────────────────────────────── */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(0.5rem, 3vw, 2rem)",
        padding: "clamp(0.5rem, 2vh, 1.5rem) clamp(0.5rem, 2vw, 2rem)",
        minHeight: 0,
        overflow: "hidden",
      }}>

        {/* ← Arrow */}
        <button className="frame-arrow" onClick={prevFrame} aria-label="Previous frame">
          <ChevronLeft size={28} />
        </button>

        {/* ── Centre: floating polaroid preview ── */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(0.5rem, 1.5vh, 1rem)",
          minWidth: 0,
          flex: "0 1 auto",
          /* Height budget: viewport − top-bar − footer − labels − dots − gaps */
          maxHeight: "100%",
          height: "100%",
        }}>
          {/* Polaroid card with drop shadow */}
          <div
            key={pickedFrame}
            className="strip-wrapper"
            style={{
              position: "relative",
              background: "#fff",
              padding: "clamp(6px, 1.2vw, 12px) clamp(6px, 1.2vw, 12px) clamp(12px, 2.5vh, 24px)",
              borderRadius: 4,
              boxShadow: "0 16px 40px rgba(0,0,0,0.16), 0 3px 8px rgba(0,0,0,0.07)",
              /* Size to content — do NOT stretch to fill column height */
              flex: "0 0 auto",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <canvas
              ref={previewRef}
              className="strip-preview-canvas"
              style={{
                display: "block",
                /* Let the canvas keep its own aspect ratio.
                   Constrain by both max-height and max-width so it
                   never overflows the viewport in either dimension.
                   On mobile the arrows are narrow so we get ~55vw;
                   on desktop we cap at 300px. */
                maxHeight: "min(62vh, 560px)",
                maxWidth: "clamp(160px, 55vw, 300px)",
                width: "auto",
                height: "auto",
                opacity: rendering ? 0.5 : 1,
                transition: "opacity 0.25s",
              }}
            />
            {rendering && (
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: "50%",
                  border: "3px solid rgba(0,0,0,0.1)",
                  borderTopColor: "var(--ink)",
                  animation: "spin 0.8s linear infinite",
                }} />
              </div>
            )}
          </div>

          {/* Frame name + description */}
          <div style={{ textAlign: "center", maxWidth: 320, padding: "0 0.5rem", minWidth: 0 }}>
            <div style={{
              display: "inline-block",
              background: eraStyle.bg,
              border: `2px solid ${eraStyle.border}`,
              borderRadius: 50,
              padding: "0.2rem 1rem",
              fontFamily: "var(--fd)",
              fontSize: "0.9rem",
              color: eraStyle.ink,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.6rem",
            }}>
              {currentMeta?.era}
            </div>
            <h3 style={{
              fontFamily: "var(--fd)",
              fontSize: "clamp(1.1rem, 3.5vw, 1.8rem)",
              color: "var(--ink)",
              margin: "0 0 0.2rem",
              fontWeight: 700,
            }}>
              {currentMeta?.label}
            </h3>
            <p style={{
              fontFamily: "var(--fb)",
              fontSize: "0.92rem",
              color: "var(--ink-soft)",
              margin: 0,
              lineHeight: 1.5,
            }}>
              {currentMeta?.desc}
            </p>
          </div>

          {/* Progress dots */}
          <div style={{ display: "flex", gap: "0.45rem", alignItems: "center" }}>
            {framesOfMode.map((f, i) => (
              <button
                key={f.id}
                className={`dot${f.id === pickedFrame ? " active" : ""}`}
                onClick={() => setFrameStyle(f.id)}
                aria-label={f.label}
              />
            ))}
          </div>
        </div>

        {/* → Arrow */}
        <button className="frame-arrow" onClick={nextFrame} aria-label="Next frame">
          <ChevronRight size={28} />
        </button>
      </div>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "clamp(0.6rem, 2vh, 1.4rem) 1.5rem",
        borderTop: `1px solid ${isNight ? "rgba(240,234,214,0.12)" : "rgba(0,0,0,0.06)"}`,
        background: isNight ? "rgba(15,15,45,0.75)" : "rgba(255,255,255,0.55)",
        backdropFilter: "blur(12px)",
        flexShrink: 0,
        zIndex: 10,
      }}>
        <button
          className="retake-btn"
          onClick={() => { resetFrames(); setScreen("capture"); }}
        >
          <RotateCcw size={18} />
          Retake Photos
        </button>
        <button className="confirm-btn" onClick={confirm}>
          <Check size={22} />
          Use This Frame
        </button>
      </div>
    </div>
  );
}


