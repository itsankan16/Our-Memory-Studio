import { useEffect, useState } from "react";
import { useBoothStore } from "../lib/booth-store";
import { BoothGraphic } from "./LandingScreen";
import { playShutter } from "../lib/sound-engine";

export function EntryAnimation() {
  const { setScreen } = useBoothStore();
  const [phase, setPhase] = useState<"zoom" | "doors" | "camera-zoom" | "flash">("zoom");

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase("doors");
    }, 1200);
    const t2 = setTimeout(() => setPhase("camera-zoom"), 2800);
    const t3 = setTimeout(() => {
      setPhase("flash");
      playShutter();
    }, 3600);
    const t4 = setTimeout(() => setScreen("grid-select"), 3800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [setScreen]);

  return (
    <div
      className="screen"
      style={{
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          animation: phase === "zoom" ? "boothZoom 1.2s ease-out forwards" : undefined,
          transform: phase !== "zoom" ? "scale(1)" : undefined,
        }}
      >
        {/* Booth SVG with animated doors */}
        <svg
          viewBox="0 0 240 278"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "min(60vw, 300px)", height: "auto" }}
          aria-hidden="true"
        >
          <defs>
            <g id="camera-model">
              {/* Shutter button */}
              <rect x="100" y="169" width="6" height="3" rx="1" fill="#E0E0E0" />
              {/* Camera Body */}
              <rect x="94" y="172" width="52" height="32" rx="4" fill="#282828" stroke="#101010" strokeWidth="1.5" />
              {/* Top Silver Plate */}
              <path d="M94 176 Q94 172 98 172 L142 172 Q146 172 146 176 L146 180 L94 180 Z" fill="#E8E8E8" stroke="#101010" strokeWidth="1.5" />
              {/* Viewfinder window */}
              <rect x="100" y="174" width="8" height="4" rx="1" fill="#111" />
              {/* Viewfinder secondary window */}
              <rect x="112" y="174" width="4" height="4" rx="1" fill="#111" />
              {/* Flash element */}
              <circle cx="138" cy="176" r="2.5" fill="#FFF8D0" stroke="#A09050" strokeWidth="1" />
              {/* Lens Base */}
              <circle cx="120" cy="188" r="14" fill="#3A3A3A" stroke="#101010" strokeWidth="1.5" />
              {/* Lens Silver Ring */}
              <circle cx="120" cy="188" r="12" fill="#E8E8E8" stroke="#999" strokeWidth="1" />
              {/* Lens Inner */}
              <circle cx="120" cy="188" r="9" fill="#111" />
              {/* Glass */}
              <circle cx="120" cy="188" r="6" fill="#1A2860" />
              <circle cx="122" cy="185" r="2" fill="#ffffff" opacity="0.7" />
              <circle cx="118" cy="190" r="1" fill="#ffffff" opacity="0.4" />
            </g>
          </defs>
          <rect
            x="18"
            y="226"
            width="204"
            height="44"
            rx="6"
            fill="#C8A040"
            stroke="#5A3008"
            strokeWidth="3"
          />
          <path
            d="M32 84 L26 226 L214 226 L208 84Z"
            fill="#D8B460"
            stroke="#5A3008"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Roof - Premium Striped Style */}
          <defs>
            <clipPath id="roofClipAnim">
              <path d="M10 84 L120 42 L230 84 Z" />
            </clipPath>
          </defs>
          <path d="M10 84 L120 42 L230 84 Z" fill="#B83870" />
          <g clipPath="url(#roofClipAnim)">
            <path d="M10 84 L120 42 L80 42 L-30 84 Z" fill="#D85890" opacity="0.3" />
            <path d="M160 84 L120 42 L160 42 L270 84 Z" fill="#D85890" opacity="0.3" />
            <path d="M80 84 L120 42 L120 42 L120 84 Z" fill="#7A1040" opacity="0.1" />
          </g>
          <path d="M10 84 L120 42 L230 84 Z" fill="none" stroke="#7A1040" strokeWidth="3.5" strokeLinejoin="round" />
          <circle cx="120" cy="42" r="4" fill="#C8A040" stroke="#5A3008" strokeWidth="1.5" />
          
          <path d="M10 84 Q32 104 54 84 Q76 104 98 84 Q120 104 142 84 Q164 104 186 84 Q208 104 230 84" fill="#B83870" stroke="#7A1040" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M15 86 Q32 98 49 86 M59 86 Q76 98 93 86 M103 86 Q120 98 137 86 M147 86 Q164 98 181 86 M191 86 Q208 98 225 86" fill="none" stroke="#D85890" strokeWidth="2" opacity="0.4" />

          {/* Marquee sign - Enhanced */}
          <rect x="42" y="98" width="156" height="40" rx="9" fill="#FEFAD0" stroke="#C8A820" strokeWidth="2.5" />
          <rect x="46" y="102" width="148" height="32" rx="6" fill="none" stroke="#C8A820" strokeWidth="1" opacity="0.5" strokeDasharray="3,3" />
          <text x="120" y="117" textAnchor="middle" fontFamily="Caveat,cursive" fontSize="13" fontWeight="700" fill="#5A3008">Our Memory</text>
          <text x="120" y="131" textAnchor="middle" fontFamily="Caveat,cursive" fontSize="11" fill="#C06018">★ Studio ★</text>
          {/* Background Camera (Sits behind closed doors) */}
          <use 
            href="#camera-model" 
            style={{
              opacity: phase === "camera-zoom" || phase === "flash" ? 0 : 1,
              transition: "opacity 0.05s",
            }} 
          />
          {/* Left door */}
          <g
            style={{
              transformOrigin: "72px 184px",
              animation:
                phase === "doors" || phase === "camera-zoom" || phase === "flash"
                  ? "doorOpenLeft 1.5s ease-in-out forwards"
                  : undefined,
            }}
          >
            <path
              d="M72 142 Q76 164 74 194 Q72 216 76 226 L120 226 L120 142Z"
              fill="#C46018"
              stroke="#7A3800"
              strokeWidth="2"
            />
            <ellipse
              cx="85"
              cy="188"
              rx="8"
              ry="5"
              fill="#C8A820"
              stroke="#5A3008"
              strokeWidth="1.8"
              transform="rotate(-14,85,188)"
            />
          </g>
          {/* Right door */}
          <g
            style={{
              transformOrigin: "168px 184px",
              animation:
                phase === "doors" || phase === "camera-zoom" || phase === "flash"
                  ? "doorOpenRight 1.5s ease-in-out forwards"
                  : undefined,
            }}
          >
            <path
              d="M168 142 Q164 164 166 194 Q168 216 164 226 L120 226 L120 142Z"
              fill="#C46018"
              stroke="#7A3800"
              strokeWidth="2"
            />
            <ellipse
              cx="155"
              cy="188"
              rx="8"
              ry="5"
              fill="#C8A820"
              stroke="#5A3008"
              strokeWidth="1.8"
              transform="rotate(14,155,188)"
            />
          </g>
          {/* Foreground Camera (Scales up IN FRONT of the open doors without hitting the house roof) */}
          <use 
            href="#camera-model" 
            style={{
              opacity: phase === "camera-zoom" || phase === "flash" ? 1 : 0,
              transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.05s",
              transformOrigin: "120px 188px",
              transform: phase === "camera-zoom" || phase === "flash" ? "scale(1.8) translateY(12px)" : "scale(1)",
            }} 
          />
          {/* Flowers */}
          <line
            x1="28"
            y1="226"
            x2="28"
            y2="208"
            stroke="#2A7840"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="28" cy="196" r="5" fill="#D4A820" stroke="#A87018" strokeWidth="1.5" />
          <line
            x1="212"
            y1="226"
            x2="212"
            y2="211"
            stroke="#2A7840"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="212" cy="199" r="4.5" fill="#D4A820" stroke="#A87018" strokeWidth="1.5" />
        </svg>
      </div>
      <p
        className="animate-blink"
        style={{
          fontFamily: "var(--fd)",
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          color: "var(--ink)",
          marginTop: "1.5rem",
          opacity: phase === "camera-zoom" || phase === "flash" ? 0 : 1, // fade out when zooming
          transition: "opacity 0.2s",
        }}
      >
        ✨ Stepping into the booth...
      </p>

      {/* Full screen flash overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#fff",
          opacity: phase === "flash" ? 1 : 0,
          pointerEvents: "none",
          transition: phase === "flash" ? "opacity 0.05s ease-out" : "opacity 0.8s ease-in",
          zIndex: 9999,
        }}
      />
    </div>
  );
}
