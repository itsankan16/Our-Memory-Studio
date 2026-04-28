import { useBoothStore } from "../lib/booth-store";
import { LayoutTemplate, Camera, Palette, Download } from "lucide-react";

/* === SVG Components === */
export function BoothGraphic({ size = 240 }: { size?: number | string }) {
  return (
    <svg
      viewBox="0 0 240 280"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: "auto", maxWidth: "100%", display: "block" }}
      aria-hidden="true"
    >
      {/* Base Foundation */}
      <rect x="18" y="226" width="204" height="44" rx="6" fill="#C8A040" stroke="#5A3008" strokeWidth="3" />
      {/* Body */}
      <path d="M32 84 L26 226 L214 226 L208 84Z" fill="#D8B460" stroke="#5A3008" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Roof - Premium Striped Style */}
      <defs>
        <clipPath id="roofClip">
          <path d="M10 84 L120 42 L230 84 Z" />
        </clipPath>
      </defs>
      
      {/* Main Pitch */}
      <path d="M10 84 L120 42 L230 84 Z" fill="#B83870" />
      
      {/* Stripes */}
      <g clipPath="url(#roofClip)">
        <path d="M10 84 L120 42 L80 42 L-30 84 Z" fill="#D85890" opacity="0.3" />
        <path d="M160 84 L120 42 L160 42 L270 84 Z" fill="#D85890" opacity="0.3" />
        <path d="M80 84 L120 42 L120 42 L120 84 Z" fill="#7A1040" opacity="0.1" />
      </g>
      
      {/* Roof Outline & Peak Ball */}
      <path d="M10 84 L120 42 L230 84 Z" fill="none" stroke="#7A1040" strokeWidth="3.5" strokeLinejoin="round" />
      <circle cx="120" cy="42" r="4" fill="#C8A040" stroke="#5A3008" strokeWidth="1.5" />
      
      {/* Scalloped Valance with highlight */}
      <path d="M10 84 Q32 104 54 84 Q76 104 98 84 Q120 104 142 84 Q164 104 186 84 Q208 104 230 84" fill="#B83870" stroke="#7A1040" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M15 86 Q32 98 49 86 M59 86 Q76 98 93 86 M103 86 Q120 98 137 86 M147 86 Q164 98 181 86 M191 86 Q208 98 225 86" fill="none" stroke="#D85890" strokeWidth="2" opacity="0.4" />

      {/* Marquee sign - Enhanced */}
      <rect x="42" y="98" width="156" height="40" rx="9" fill="#FEFAD0" stroke="#C8A820" strokeWidth="2.5" />
      <rect x="46" y="102" width="148" height="32" rx="6" fill="none" stroke="#C8A820" strokeWidth="1" opacity="0.5" strokeDasharray="3,3" />
      <text x="120" y="117" textAnchor="middle" fontFamily="Caveat,cursive" fontSize="13" fontWeight="700" fill="#5A3008">Our Memory</text>
      <text x="120" y="131" textAnchor="middle" fontFamily="Caveat,cursive" fontSize="11" fill="#C06018">★ Studio ★</text>
      
      {/* Closed Doors (matches the closed state in EntryAnimation before they swing open) */}
      <path d="M72 142 Q76 164 74 194 Q72 216 76 226 L120 226 L120 142Z" fill="#C46018" stroke="#7A3800" strokeWidth="2" />
      <ellipse cx="85" cy="188" rx="8" ry="5" fill="#C8A820" stroke="#5A3008" strokeWidth="1.8" transform="rotate(-14,85,188)" />
      
      <path d="M168 142 Q164 164 166 194 Q168 216 164 226 L120 226 L120 142Z" fill="#C46018" stroke="#7A3800" strokeWidth="2" />
      <ellipse cx="155" cy="188" rx="8" ry="5" fill="#C8A820" stroke="#5A3008" strokeWidth="1.8" transform="rotate(14,155,188)" />
    </svg>
  );
}

function Cloud({ scale = 1 }: { scale?: number | string }) {
  const w = typeof scale === "number" ? 80 * scale : scale;
  return (
    <svg viewBox="0 0 80 40" style={{ width: w, height: "auto", display: "block" }} aria-hidden="true">
      <ellipse cx="18" cy="24" rx="14" ry="10" fill="#fff" stroke="#5A3008" strokeWidth="2.5" />
      <ellipse cx="38" cy="18" rx="18" ry="13" fill="#fff" stroke="#5A3008" strokeWidth="2.5" />
      <ellipse cx="58" cy="24" rx="14" ry="10" fill="#fff" stroke="#5A3008" strokeWidth="2.5" />
      {/* Hide inner intersecting lines */}
      <ellipse cx="18" cy="24" rx="12" ry="8" fill="#fff" />
      <ellipse cx="38" cy="18" rx="16" ry="11" fill="#fff" />
      <ellipse cx="58" cy="24" rx="12" ry="8" fill="#fff" />
    </svg>
  );
}

function Sun({ size = 90 }: { size?: number | string }) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: size, display: "block", overflow: "visible" }} aria-hidden="true">
      <g style={{ transformOrigin: "50px 50px", animation: "sunSpin 28s linear infinite" }}>
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const isLong = i % 2 === 0;
          return (
            <line
              key={i}
              x1={50 + Math.cos(a) * 28}
              y1={50 + Math.sin(a) * 28}
              x2={50 + Math.cos(a) * (isLong ? 46 : 38)}
              y2={50 + Math.sin(a) * (isLong ? 46 : 38)}
              stroke="#F0A018"
              strokeWidth="4"
              strokeLinecap="round"
            />
          );
        })}
      </g>
      <circle cx="50" cy="50" r="26" fill="#F8C840" stroke="#5A3008" strokeWidth="2" />
      <circle cx="42" cy="46" r="2.5" fill="#5A3008" />
      <circle cx="58" cy="46" r="2.5" fill="#5A3008" />
      <path d="M42 56 Q50 64 58 56" stroke="#5A3008" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Rainbow({ size = 180 }: { size?: number | string }) {
  const arcs: Array<[string, number]> = [
    ["#E04060", 74],
    ["#F8C840", 62],
    ["#7AB840", 50],
    ["#48A8E0", 38],
  ];
  return (
    // viewBox expanded: left/right padding so end clouds aren't clipped
    <svg viewBox="-20 -10 220 120" style={{ width: size, height: "auto", display: "block", overflow: "visible" }} aria-hidden="true">
      <g>
        {arcs.map(([c, r], i) => (
          <path key={i} d={`M${90 - r} 90 A${r} ${r} 0 0 1 ${90 + r} 90`} fill="none" stroke={c} strokeWidth="12" strokeLinecap="round" />
        ))}
        {/* Left Cloud base – fully visible */}
        <ellipse cx="14" cy="92" rx="16" ry="11" fill="#fff" stroke="#5A3008" strokeWidth="2.5" />
        <ellipse cx="34" cy="82" rx="20" ry="15" fill="#fff" stroke="#5A3008" strokeWidth="2.5" />
        <ellipse cx="56" cy="90" rx="16" ry="11" fill="#fff" stroke="#5A3008" strokeWidth="2.5" />
        <ellipse cx="14" cy="92" rx="14" ry="9" fill="#fff" />
        <ellipse cx="34" cy="82" rx="18" ry="13" fill="#fff" />
        <ellipse cx="56" cy="90" rx="14" ry="9" fill="#fff" />

        {/* Right Cloud base – fully visible */}
        <ellipse cx="124" cy="92" rx="16" ry="11" fill="#fff" stroke="#5A3008" strokeWidth="2.5" />
        <ellipse cx="146" cy="82" rx="20" ry="15" fill="#fff" stroke="#5A3008" strokeWidth="2.5" />
        <ellipse cx="166" cy="90" rx="16" ry="11" fill="#fff" stroke="#5A3008" strokeWidth="2.5" />
        <ellipse cx="124" cy="92" rx="14" ry="9" fill="#fff" />
        <ellipse cx="146" cy="82" rx="18" ry="13" fill="#fff" />
        <ellipse cx="166" cy="90" rx="14" ry="9" fill="#fff" />

        {/* Birds */}
        <path d="M 60 40 Q 65 30 70 40 Q 75 30 80 40" fill="none" stroke="#5A3008" strokeWidth="2" strokeLinecap="round" />
        <path d="M 90 50 Q 95 40 100 50 Q 105 40 110 50" fill="none" stroke="#5A3008" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function Sunflower({ size = 70 }: { size?: number | string }) {
  return (
    <svg viewBox="0 0 80 120" style={{ width: size, height: "auto", display: "block", overflow: "visible" }} aria-hidden="true">
      <line x1="40" y1="40" x2="40" y2="120" stroke="#3A6818" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 80 Q 55 65 65 80 Q 55 95 40 80Z" fill="#7AB840" stroke="#3A6818" strokeWidth="2" />
      <g style={{ transformOrigin: "40px 40px" }}>
        {Array.from({ length: 12 }).map((_, k) => {
          const a = (k / 12) * Math.PI * 2;
          const px = 40 + Math.cos(a) * 16;
          const py = 40 + Math.sin(a) * 16;
          return (
            <ellipse key={k} cx={px} cy={py} rx="12" ry="6" fill="#F8C840" stroke="#5A3008" strokeWidth="1.5" transform={`rotate(${((a * 180) / Math.PI).toFixed(0)} ${px} ${py})`} />
          );
        })}
      </g>
      <circle cx="40" cy="40" r="12" fill="#5A3008" />
    </svg>
  );
}

function Fence({ size = "100%" }: { size?: number | string }) {
  return (
    <svg viewBox="0 0 400 120" style={{ width: size, height: "auto", display: "block" }} aria-hidden="true">
      <rect x="0" y="50" width="400" height="8" fill="#D8B460" stroke="#5A3008" strokeWidth="2" />
      <rect x="0" y="80" width="400" height="8" fill="#D8B460" stroke="#5A3008" strokeWidth="2" />
      {Array.from({ length: 18 }).map((_, i) => (
        <path key={i} d={`M${i * 22 + 4} 30 L${i * 22 + 12} 15 L${i * 22 + 20} 30 L${i * 22 + 20} 110 L${i * 22 + 4} 110Z`} fill="#E6D3A8" stroke="#5A3008" strokeWidth="2" strokeLinejoin="round" />
      ))}
    </svg>
  );
}

function Road({ size = "100%" }: { size?: number | string }) {
  return (
    <svg viewBox="0 0 300 200" style={{ width: size, height: "auto", display: "block" }} aria-hidden="true">
      <path d="M100 20 L40 200 L260 200 L200 20Z" fill="#D4C4A8" stroke="#5A3008" strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="150" cy="110" rx="36" ry="12" fill="rgba(90, 48, 8, 0.15)" />
    </svg>
  );
}

const VIBE_FEATURES = [
  {
    id: "ord",
    icon: "📷",
    title: "Normal",
    desc: "Cream paper strip framed in sunflowers — perfect for everyday hangouts.",
    bg: "linear-gradient(135deg, #F8F1DC, #EFE3C2)",
    accent: "#A6741A",
  },
  {
    id: "ann",
    icon: "❤️",
    title: "Romance",
    desc: "Strip framed by fingerprint-hearts — for anniversaries and quiet love.",
    bg: "linear-gradient(135deg, #FFEDF1, #FFD5DD)",
    accent: "#9A2A4A",
  },
  {
    id: "bday",
    icon: "🎉",
    title: "Birthday",
    desc: "Balloons, confetti & stars dancing around your photos.",
    bg: "linear-gradient(135deg, #E8FBFD, #D8F0F5)",
    accent: "#1F4868",
  },
] as const;

function Moon({ size = 90 }: { size?: number | string }) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: "auto", display: "block", overflow: "visible" }} aria-hidden="true">
      {/* Full Moon */}
      <circle cx="50" cy="50" r="36" fill="#F8E880" stroke="#5A3008" strokeWidth="2.5" />
      {/* Face */}
      <circle cx="42" cy="46" r="2.5" fill="#5A3008" />
      <circle cx="58" cy="46" r="2.5" fill="#5A3008" />
      <path d="M42 56 Q50 64 58 56" stroke="#5A3008" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Stars() {
  const stars = [
    { cx: 30, cy: 18, r: 5,  delay: "0s"   },
    { cx: 72, cy: 10, r: 3.5, delay: "0.6s" },
    { cx: 58, cy: 30, r: 4,  delay: "1.2s" },
    { cx: 18, cy: 38, r: 3,  delay: "0.3s" },
    { cx: 84, cy: 40, r: 2.5, delay: "1.6s" },
    { cx: 46, cy: 8,  r: 2.5, delay: "0.9s" },
  ];
  return (
    <svg viewBox="0 0 100 60" style={{ width: "100%", height: "auto", display: "block", overflow: "visible", position: "absolute", top: 0, left: 0 }} aria-hidden="true">
      {stars.map((s, i) => (
        <g key={i} style={{ animation: `starTwinkle 2.4s ease-in-out infinite ${s.delay}` }}>
          {/* 4-point star shape */}
          <polygon
            points={`${s.cx},${s.cy - s.r} ${s.cx + s.r * 0.35},${s.cy - s.r * 0.35} ${s.cx + s.r},${s.cy} ${s.cx + s.r * 0.35},${s.cy + s.r * 0.35} ${s.cx},${s.cy + s.r} ${s.cx - s.r * 0.35},${s.cy + s.r * 0.35} ${s.cx - s.r},${s.cy} ${s.cx - s.r * 0.35},${s.cy - s.r * 0.35}`}
            fill="#F8E040" stroke="#C8A000" strokeWidth="0.6"
          />
        </g>
      ))}
    </svg>
  );
}

export function LandingScreen() {
  const { setScreen, nightMode: isNight } = useBoothStore();
  const enter = () => setScreen("entry-animation");

  // The 'night' class on body handles most variables now
  const nightBorder  = isNight ? "rgba(240,234,214,0.18)" : "rgba(90,48,8,0.15)";
  const nightCardBg  = isNight ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.35)";

  return (
    <div className="screen" style={{ justifyContent: "flex-start" }}>
      



      {/* ── Background: 3 rising classic photo strips ── */}
      {[
        { left: "8%",  rot: "-7deg",  dur: "18s", delay: "0s"   },
        { left: "50%", rot: "3deg",   dur: "22s", delay: "-8s"  },
        { left: "82%", rot: "-4deg",  dur: "16s", delay: "-14s" },
      ].map((strip, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: "fixed",
            bottom: 0,
            left: strip.left,
            width: "clamp(56px, 7vw, 96px)",
            pointerEvents: "none",
            zIndex: 0,
            // CSS custom property drives the rotate inside the keyframe
            ["--strip-rot" as string]: strip.rot,
            animation: `stripRise ${strip.dur} linear infinite ${strip.delay}`,
          }}
        >
          {/* Classic 3-frame photo strip SVG */}
          <svg
            viewBox="0 0 60 200"
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            {/* Strip body */}
            <rect x="2" y="2" width="56" height="196" rx="3" fill="#FFFDF6" stroke="#D4C8A8" strokeWidth="1.5"/>
            {/* Film perforations — left */}
            {[14, 44, 74, 104, 134, 164].map((y, k) => (
              <rect key={k} x="5" y={y} width="6" height="10" rx="2" fill="#D4C8A8"/>
            ))}
            {/* Film perforations — right */}
            {[14, 44, 74, 104, 134, 164].map((y, k) => (
              <rect key={k} x="49" y={y} width="6" height="10" rx="2" fill="#D4C8A8"/>
            ))}
            {/* Photo frame 1 */}
            <rect x="13" y="10" width="34" height="40" rx="2" fill="#E8DFC8" stroke="#C4B898" strokeWidth="1"/>
            <ellipse cx="30" cy="26" rx="9" ry="10" fill="#D4C4A0"/>
            <rect x="18" y="38" width="24" height="10" rx="1" fill="#D4C4A0"/>
            {/* Photo frame 2 */}
            <rect x="13" y="80" width="34" height="40" rx="2" fill="#D8EAD8" stroke="#A8C8A0" strokeWidth="1"/>
            <ellipse cx="30" cy="95" rx="8" ry="9" fill="#B8D4B0"/>
            <rect x="18" y="106" width="24" height="12" rx="1" fill="#B8D4B0"/>
            {/* Photo frame 3 */}
            <rect x="13" y="148" width="34" height="40" rx="2" fill="#EAD8D8" stroke="#C8A8A0" strokeWidth="1"/>
            <ellipse cx="30" cy="163" rx="8" ry="9" fill="#D4B0B0"/>
            <rect x="18" y="174" width="24" height="12" rx="1" fill="#D4B0B0"/>
          </svg>
        </div>
      ))}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 1200,
          padding:
            "clamp(1rem, 3vw, 3rem) clamp(.75rem, 4vw, 3rem) calc(env(safe-area-inset-bottom, 0px) + clamp(1.5rem, 4vw, 3rem))",
          gap: "clamp(1rem, 2.5vw, 1.8rem)",
        }}
      >
        {/* Hero */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(2rem, 6vw, 4rem)",
            alignItems: "center",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {/* Day: Rainbow / Night: nothing (stars are inside scene) */}
          {!isNight && (
            <div
              style={{
                position: "absolute",
                top: "0%",
                left: "-5%",
                width: "clamp(220px, 60%, 380px)",
                transformOrigin: "bottom right",
                animation: "rainbowSway 7s ease-in-out infinite, rainbowShine 4s ease-in-out infinite",
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <Rainbow size="100%" />
            </div>
          )}

          {/* === Booth + floating decorations === */}
          <div className="hero-graphics">
            {/* Day: Sun / Night: Moon + Stars */}
            {isNight ? (
              <>
                {/* Moon — top right */}
                <div style={{ position: "absolute", top: "-4%", right: "-2%", width: "clamp(80px, 22%, 130px)", animation: "float 8s ease-in-out infinite", zIndex: 1 }}>
                  <Moon size="100%" />
                </div>
                {/* Twinkling stars scattered across upper scene */}
                <div style={{ position: "absolute", top: "-10%", left: "0", width: "100%", height: "60%", zIndex: 1, pointerEvents: "none" }}>
                  <Stars />
                </div>
              </>
            ) : (
              <>
                {/* Sun — top right, static (rays spin on their own) */}
                <div style={{ position: "absolute", top: "-6%", right: "-4%", width: "clamp(90px, 25%, 160px)", zIndex: 1 }}>
                  <Sun size="100%" />
                </div>
                {/* Left cloud near rainbow arch */}
                <div style={{ position: "absolute", top: "14%", left: "4%", width: "clamp(80px, 24%, 140px)", animation: "cloudDrift 9s ease-in-out infinite", zIndex: 1 }}>
                  <Cloud scale="100%" />
                </div>
                {/* Small cloud right side */}
                <div style={{ position: "absolute", top: "28%", right: "2%", width: "clamp(60px, 18%, 100px)", animation: "cloudDriftAlt 11s ease-in-out infinite .8s", zIndex: 1 }}>
                  <Cloud scale="100%" />
                </div>
              </>
            )}

            {/* Fence - background grounding */}
            <div
              style={{
                position: "absolute",
                bottom: "18%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "115%",
                zIndex: 2,
              }}
            >
              <Fence size="100%" />
            </div>

            {/* Road - coming towards front */}
            <div
              style={{
                position: "absolute",
                bottom: "-8%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                zIndex: 3,
              }}
            >
              <Road size="100%" />
            </div>

            {/* Booth — centred, fills scene nicely */}
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "72%",
                maxWidth: 360,
                zIndex: 4,
              }}
            >
              <BoothGraphic size="100%" />
            </div>

            {/* Sunflowers planted along the fence line and road */}
            {/* Far Left */}
            <div
              style={{
                position: "absolute",
                bottom: "18%",
                left: "-12%",
                width: "clamp(60px, 26%, 150px)",
                transformOrigin: "bottom center",
                animation: "flowerSway 4.5s ease-in-out infinite",
                zIndex: 4,
              }}
            >
              <Sunflower size="100%" />
            </div>
            {/* Front Left */}
            <div
              style={{
                position: "absolute",
                bottom: "-2%",
                left: "-2%",
                width: "clamp(45px, 20%, 115px)",
                transformOrigin: "bottom center",
                animation: "flowerSwayAlt 5.2s ease-in-out infinite .4s",
                zIndex: 5,
              }}
            >
              <Sunflower size="100%" />
            </div>
            {/* Far Right */}
            <div
              style={{
                position: "absolute",
                bottom: "18%",
                right: "-12%",
                width: "clamp(60px, 26%, 150px)",
                transformOrigin: "bottom center",
                animation: "flowerSwayAlt 4.8s ease-in-out infinite .2s",
                zIndex: 4,
              }}
            >
              <Sunflower size="100%" />
            </div>
            {/* Front Right */}
            <div
              style={{
                position: "absolute",
                bottom: "-2%",
                right: "-2%",
                width: "clamp(45px, 20%, 115px)",
                transformOrigin: "bottom center",
                animation: "flowerSway 5.6s ease-in-out infinite .6s",
                zIndex: 5,
              }}
            >
              <Sunflower size="100%" />
            </div>
          </div>

          {/* Studio Board (Right Column) */}
          <div
            style={{
              position: "relative",
              border: `1.5px solid ${nightBorder}`,
              borderRadius: "6px",
              padding: "clamp(1.5rem, 5vw, 3.5rem) clamp(1rem, 4vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(1rem, 2.5vw, 1.8rem)",
              background: nightCardBg,
              boxShadow: isNight ? "0 8px 32px rgba(0,0,0,0.4)" : "0 8px 32px rgba(0,0,0,0.02)",
              marginTop: "clamp(0px, 2vw, 20px)",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "100%",
            }}
          >
            {/* Top Star Decoration */}
            <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", background: "var(--paper)", padding: "0 12px" }}>
              <span style={{ fontSize: "24px", color: isNight ? "#F8E040" : "#C0B4A4" }}>★</span>
            </div>
            {/* Corner Sunburst SVGs */}
            <svg style={{ position: "absolute", top: 4, left: 4 }} width="40" height="40" viewBox="0 0 40 40">
              <path d="M0 0 L20 8 M0 0 L15 15 M0 0 L8 20" stroke={isNight ? "rgba(248,224,64,0.25)" : "rgba(90, 48, 8, 0.2)"} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <svg style={{ position: "absolute", top: 4, right: 4 }} width="40" height="40" viewBox="0 0 40 40">
              <path d="M40 0 L20 8 M40 0 L25 15 M40 0 L32 20" stroke={isNight ? "rgba(248,224,64,0.25)" : "rgba(90, 48, 8, 0.2)"} strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            {/* Decorative Board Wrapper */}
            <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h1
                style={{
                  fontFamily: "var(--fd)",
                  fontSize: "clamp(2rem, 8vw, 4rem)",
                  lineHeight: 1,
                  fontWeight: 700,
                  color: "var(--ink)",
                  textAlign: "center",
                  margin: "0 0 0.5rem 0",
                  transform: "rotate(-1.5deg)",
                  textShadow: isNight ? "0 0 15px rgba(248, 224, 64, 0.2)" : "none",
                }}
              >
                Our Memory
                <br />
                <em style={{ 
                  fontStyle: "normal", 
                  display: "inline-block", 
                  fontSize: ".6em", 
                  color: isNight ? "#F8E040" : "#C06018",
                  borderTop: `1.5px solid ${isNight ? "rgba(248, 224, 64, 0.4)" : "rgba(192, 96, 24, 0.4)"}`,
                  paddingTop: "4px",
                  marginTop: "6px",
                  letterSpacing: "2px"
                }}>
                  ★ STUDIO ★
                </em>
              </h1>
              {/* Decorative flourish */}
              <svg width="120" height="20" viewBox="0 0 120 20" style={{ opacity: 0.6, marginBottom: "0.5rem" }}>
                <path d="M10 10 Q30 0 60 10 Q90 20 110 10" fill="none" stroke={"var(--ink)"} strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="60" cy="10" r="2" fill={"var(--ink)"} />
              </svg>
            </div>

            <p
              style={{
                fontFamily: "var(--fb)",
                fontSize: "clamp(.95rem, 2vw, 1.15rem)",
                color: "var(--ink)",
                textAlign: "center",
                margin: 0,
                lineHeight: 1.5,
                maxWidth: 420,
              }}
            >
              Step into the booth, pick your layout, snap your moments — and we'll print you a beautiful
              handcrafted memory strip you can save or share.
            </p>

            <button
              onClick={enter}
              style={{
                padding: "clamp(.7rem, 2vw, 1.1rem) clamp(2rem, 6vw, 3.5rem)",
                fontSize: "clamp(1.15rem, 3vw, 1.5rem)",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #E27B73, #D66A62)",
                color: "#FFF",
                fontFamily: "var(--fd)",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                transition: "transform .12s ease, box-shadow .12s ease",
                boxShadow: "0 6px 16px rgba(226, 123, 115, 0.35)",
                marginTop: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              🌿 Enter Booth
            </button>

            {/* Steps List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(1rem, 2vw, 1.2rem)",
                width: "100%",
                maxWidth: 440,
                position: "relative",
                paddingBottom: "clamp(1rem, 3vw, 2rem)",
                boxSizing: "border-box"
              }}
            >
              {[
                {
                  Icon: LayoutTemplate,
                  color: "#E27B73",
                  title: "Pick a layout",
                  desc: "Classic 4-Strip • Square 2x2 Grid • Epic Panoramic.",
                },
                {
                  Icon: Camera,
                  color: "#6DB2AA",
                  title: "Snap your poses",
                  desc: "Live mirror camera with intelligent countdown.",
                },
                {
                  Icon: Palette,
                  color: "#EBB15B",
                  title: "Pick a vibe",
                  desc: "Choose Normal, Romance, or Birthday — frame matches your mood.",
                },
                {
                  Icon: Download,
                  color: "#8870A8",
                  title: "Save & share",
                  desc: "Download high-res or share instantly.",
                },
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      border: `1.5px solid ${step.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        border: `1px solid ${step.color}`,
                        opacity: 0.4,
                      }}
                    />
                    <step.Icon size={22} color={step.color} strokeWidth={2} />
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--fb)",
                      fontSize: "clamp(.85rem, 1.8vw, .95rem)",
                      color: "var(--ink)",
                      lineHeight: 1.4,
                    }}
                  >
                    <strong
                      style={{
                        fontFamily: "var(--fd)",
                        fontSize: "clamp(1rem, 2vw, 1.25rem)",
                        fontWeight: 700,
                        display: "block",
                        marginBottom: "0.1rem",
                        color: "var(--ink)",
                      }}
                    >
                      {step.title}
                    </strong>
                    {step.desc}
                  </div>
                </div>
              ))}
              
              {/* Built-in little polaroid stack */}
              <div style={{ 
                position: "absolute", 
                bottom: "clamp(-20px, -4vw, -40px)", 
                right: "clamp(-15px, -3vw, -30px)", 
                opacity: isNight ? 0.5 : 0.9, 
                zIndex: 10,
                pointerEvents: "none"
              }}>
                <svg viewBox="0 0 100 80" fill="none" style={{ width: "clamp(70px, 18vw, 100px)", height: "auto", display: "block" }}>
                  <g transform="translate(45, 10) rotate(15)">
                    <rect width="36" height="46" rx="2" fill={isNight ? "#2d2d5a" : "#E8DCCC"} stroke={isNight ? "rgba(240,234,214,0.3)" : "#5A3008"} strokeWidth="1" />
                    <rect x="4" y="4" width="28" height="28" fill={isNight ? "#3d3d6a" : "#C8B8A4"} stroke={isNight ? "rgba(240,234,214,0.2)" : "#5A3008"} strokeWidth="1" />
                    <circle cx="18" cy="18" r="8" fill={isNight ? "#F8E040" : "#5A3008"} opacity="0.4" />
                  </g>
                  <g transform="translate(10, 15) rotate(-10)">
                    <rect width="38" height="48" rx="2" fill={isNight ? "#24244a" : "#F4EADB"} stroke={isNight ? "rgba(240,234,214,0.35)" : "#5A3008"} strokeWidth="1.5" />
                    <rect x="4" y="4" width="30" height="30" fill={isNight ? "#2d2d5a" : "#D8C8B4"} stroke={isNight ? "rgba(240,234,214,0.2)" : "#5A3008"} strokeWidth="1" />
                    <circle cx="19" cy="19" r="9" fill={isNight ? "#F8E040" : "#5A3008"} opacity="0.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Vibes showcase */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: ".75rem",
            marginTop: ".5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--fd)",
              fontSize: "clamp(1.3rem, 3.5vw, 2.2rem)",
              color: "var(--ink)",
              textAlign: "center",
              margin: 0,
              transform: "rotate(-.5deg)",
            }}
          >
            ✨ Three Vibes To Choose From
          </h2>
          <p
            style={{
              fontFamily: "var(--fb)",
              fontSize: "clamp(.85rem, 1.8vw, 1rem)",
              color: "var(--ink-soft)",
              textAlign: "center",
              margin: 0,
            }}
          >
            You'll pick your vibe right after choosing a layout.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginTop: ".5rem",
            }}
          >
            {VIBE_FEATURES.map((v) => (
              <div
                key={v.id}
                style={{
                  background: isNight
                    ? "rgba(255,255,255,0.07)"
                    : v.bg,
                  border: isNight
                    ? `2.5px solid rgba(240,234,214,0.25)`
                    : `2.5px solid ${v.accent}`,
                  borderRadius: 18,
                  padding: "1rem 1.1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                  boxShadow: isNight
                    ? "4px 6px 0 rgba(0,0,0,0.35)"
                    : "4px 6px 0 var(--shadow-color)",
                  transform: `rotate(${v.id === "ord" ? -0.6 : v.id === "ann" ? 0.8 : -0.4}deg)`,
                  backdropFilter: isNight ? "blur(8px)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
                  <span style={{ fontSize: "1.8rem" }}>{v.icon}</span>
                  <strong
                    style={{
                      fontFamily: "var(--fd)",
                      fontSize: "1.4rem",
                      color: isNight ? "#F8E040" : v.accent,
                      fontWeight: 700,
                    }}
                  >
                    {v.title}
                  </strong>
                </div>
                <p
                  style={{
                    fontFamily: "var(--fb)",
                    fontSize: ".92rem",
                    color: isNight ? "#C8BFAE" : v.accent,
                    margin: 0,
                    lineHeight: 1.45,
                    opacity: isNight ? 1 : 0.85,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: "clamp(1rem, 3vw, 1.5rem)",
            width: "100%",
            borderTop: isNight
              ? "2px dashed rgba(240,234,214,0.25)"
              : "2px dashed var(--shadow-color)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: ".75rem",
            paddingBottom: "clamp(1rem, 2vw, 2rem)",
          }}
        >
          <div
            style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}
          >
            {[
              "🎞️ Retro Film Vibes",
              "✂️ Paper-Cut Borders",
              "🌻 Handmade Textures",
              "💌 Love Letters",
            ].map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--fd)",
                  fontSize: "clamp(.85rem, 1.8vw, 1.1rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  opacity: 0.75,
                  animation: `float 4s ease-in-out infinite ${i * 0.5}s`,
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--fh)",
              fontSize: "clamp(.7rem, 1.5vw, .9rem)",
              color: "var(--ink-soft)",
              opacity: isNight ? 0.8 : 0.55,
              textAlign: "center",
              margin: 0,
            }}
          >
            ✨ Crafted with love — Where 90's nostalgia meets Gen Z aesthetics ✨
          </p>
          <p
            style={{
              fontFamily: "var(--fh)",
              fontSize: "clamp(.6rem, 1.2vw, .8rem)",
              color: "var(--ink-soft)",
              opacity: isNight ? 0.6 : 0.45,
              textAlign: "center",
              margin: "6px 0 0 0",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            📸 Capturing and preserving your beautiful memories since 1st May 2026 📸
          </p>
        </div>
      </div>
    </div>
  );
}
