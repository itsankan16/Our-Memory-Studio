import { useState } from "react";
import { useBoothStore } from "../lib/booth-store";
import type { LayoutType, BoothMode, FrameStyleId } from "../lib/strip-builder";

const layouts: { id: LayoutType; label: string; sub: string; photos: number }[] = [
  { id: "classic",  label: "Classic Strip",   sub: "4 tall portrait shots",       photos: 4 },
  { id: "square",   label: "2×2 Grid",        sub: "4 photos in a square grid",   photos: 4 },
  { id: "wide",     label: "Panoramic",        sub: "2 wide cinematic shots",      photos: 2 },
  { id: "trio",     label: "Triple Stack",     sub: "3 portrait shots stacked",    photos: 3 },
  { id: "duo",      label: "Side by Side",     sub: "2 portraits next to each other", photos: 2 },
  { id: "big-one",  label: "Solo Close-Up",    sub: "1 large statement shot",      photos: 1 },
  { id: "grid6",    label: "Full Grid",        sub: "6 shots in a 2×3 grid",       photos: 6 },
];

/* Mini preview SVGs of the actual layouts */
function LayoutPreview({ id }: { id: LayoutType }) {
  const stroke = "#5A3008";
  const fill = "#FCF6E5";
  const photo = "#C8B080";
  const photoStroke = "#7A5818";

  if (id === "classic") {
    return (
      <svg viewBox="0 0 60 100" width="52" height="86" aria-hidden="true">
        <rect x="2" y="2" width="56" height="96" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text x="30" y="10" textAnchor="middle" fontSize="5" fontFamily="Caveat" fill={stroke}>✿ Studio ✿</text>
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="7" y={14 + i * 19} width="46" height="16" rx="1.5"
            fill={photo} stroke={photoStroke} strokeWidth="0.7" />
        ))}
        <text x="30" y="96" textAnchor="middle" fontSize="3.5" fontFamily="Caveat" fill={stroke}>♥ date ♥</text>
      </svg>
    );
  }
  if (id === "square") {
    return (
      <svg viewBox="0 0 80 80" width="68" height="68" aria-hidden="true">
        <rect x="2" y="2" width="76" height="76" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text x="40" y="10" textAnchor="middle" fontSize="5" fontFamily="Caveat" fill={stroke}>✿ Studio ✿</text>
        {[[0, 0],[1, 0],[0, 1],[1, 1]].map(([c, r], i) => (
          <rect key={i} x={6 + c * 35} y={14 + r * 30} width="32" height="27" rx="1.5"
            fill={photo} stroke={photoStroke} strokeWidth="0.7" />
        ))}
        <text x="40" y="76" textAnchor="middle" fontSize="3.5" fontFamily="Caveat" fill={stroke}>♥ date ♥</text>
      </svg>
    );
  }
  if (id === "wide") {
    return (
      <svg viewBox="0 0 80 60" width="78" height="58" aria-hidden="true">
        <rect x="2" y="2" width="76" height="56" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text x="40" y="9" textAnchor="middle" fontSize="4.5" fontFamily="Caveat" fill={stroke}>✿ Studio ✿</text>
        <rect x="6" y="13" width="68" height="17" rx="1.5" fill={photo} stroke={photoStroke} strokeWidth="0.7" />
        <rect x="6" y="32" width="68" height="17" rx="1.5" fill={photo} stroke={photoStroke} strokeWidth="0.7" />
        <text x="40" y="56" textAnchor="middle" fontSize="3.5" fontFamily="Caveat" fill={stroke}>♥ date ♥</text>
      </svg>
    );
  }
  if (id === "trio") {
    return (
      <svg viewBox="0 0 60 80" width="52" height="70" aria-hidden="true">
        <rect x="2" y="2" width="56" height="76" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text x="30" y="10" textAnchor="middle" fontSize="5" fontFamily="Caveat" fill={stroke}>✿ Studio ✿</text>
        {[0, 1, 2].map((i) => (
          <rect key={i} x="7" y={14 + i * 19} width="46" height="16" rx="1.5"
            fill={photo} stroke={photoStroke} strokeWidth="0.7" />
        ))}
        <text x="30" y="76" textAnchor="middle" fontSize="3.5" fontFamily="Caveat" fill={stroke}>♥ date ♥</text>
      </svg>
    );
  }
  if (id === "duo") {
    return (
      <svg viewBox="0 0 80 56" width="72" height="50" aria-hidden="true">
        <rect x="2" y="2" width="76" height="52" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text x="40" y="9" textAnchor="middle" fontSize="4.5" fontFamily="Caveat" fill={stroke}>✿ Studio ✿</text>
        <rect x="6"  y="13" width="32" height="30" rx="1.5" fill={photo} stroke={photoStroke} strokeWidth="0.7" />
        <rect x="42" y="13" width="32" height="30" rx="1.5" fill={photo} stroke={photoStroke} strokeWidth="0.7" />
        <text x="40" y="52" textAnchor="middle" fontSize="3.5" fontFamily="Caveat" fill={stroke}>♥ date ♥</text>
      </svg>
    );
  }
  if (id === "big-one") {
    return (
      <svg viewBox="0 0 70 74" width="62" height="66" aria-hidden="true">
        <rect x="2" y="2" width="66" height="70" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text x="35" y="10" textAnchor="middle" fontSize="5" fontFamily="Caveat" fill={stroke}>✿ Studio ✿</text>
        <rect x="7" y="14" width="56" height="48" rx="2" fill={photo} stroke={photoStroke} strokeWidth="0.7" />
        <text x="35" y="70" textAnchor="middle" fontSize="3.5" fontFamily="Caveat" fill={stroke}>♥ date ♥</text>
      </svg>
    );
  }
  // grid6
  return (
    <svg viewBox="0 0 80 90" width="68" height="76" aria-hidden="true">
      <rect x="2" y="2" width="76" height="86" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text x="40" y="10" textAnchor="middle" fontSize="5" fontFamily="Caveat" fill={stroke}>✿ Studio ✿</text>
      {[[0,0],[1,0],[0,1],[1,1],[0,2],[1,2]].map(([c, r], i) => (
        <rect key={i} x={6 + c * 36} y={13 + r * 22} width="33" height="19" rx="1.5"
          fill={photo} stroke={photoStroke} strokeWidth="0.7" />
      ))}
      <text x="40" y="86" textAnchor="middle" fontSize="3.5" fontFamily="Caveat" fill={stroke}>♥ date ♥</text>
    </svg>
  );
}

const vibes: {
  id: BoothMode;
  label: string;
  icon: string;
  desc: string;
  bg: string;
  accent: string;
}[] = [
  {
    id: "ord",
    label: "Normal",
    icon: "📷",
    desc: "Sunflower paper frame",
    bg: "linear-gradient(135deg,#F8F1DC,#EFE3C2)",
    accent: "#A6741A",
  },
  {
    id: "ann",
    label: "Romance",
    icon: "❤️",
    desc: "Fingerprint heart frame",
    bg: "linear-gradient(135deg,#FFEDF1,#FFD5DD)",
    accent: "#9A2A4A",
  },
  {
    id: "bday",
    label: "Birthday",
    icon: "🎉",
    desc: "Balloons & confetti",
    bg: "linear-gradient(135deg,#E8FBFD,#D8F0F5)",
    accent: "#1F4868",
  },
];


type StepKey = "layout" | "shots" | "vibe";

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

export function GridSelectScreen() {
  const { setLayout, setMode, setScreen, mode, layout, shotCount, setShotCount, nightMode: isNight } =
    useBoothStore();
  const [step, setStep] = useState<StepKey>("layout");
  const [pickedLayout, setPickedLayout] = useState<LayoutType>(layout);
  const [pickedVibe, setPickedVibe] = useState<BoothMode>(mode);
  const [customShots, setCustomShots] = useState(shotCount ?? 4);

  // When a layout is chosen, seed localShots from that layout's default count
  const chooseLayout = (id: LayoutType) => {
    const def = layouts.find((l) => l.id === id)?.photos ?? shotCount ?? 4;
    setPickedLayout(id);
    setLayout(id);
    setCustomShots(def);
    setShotCount(def);
    setStep("shots");
  };

  const chooseVibe = (id: BoothMode) => {
    setPickedVibe(id);
    setMode(id);
    document.body.classList.remove("ann", "bday");
    if (id === "ann") document.body.classList.add("ann");
    if (id === "bday") document.body.classList.add("bday");
  };

  const startSession = () => {
    setScreen("capture");
  };

  return (
    <div
      className="screen"
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        padding:
          "clamp(.75rem, 3vw, 2rem) clamp(.5rem, 2vw, 1.5rem) calc(env(safe-area-inset-bottom, 0px) + clamp(1rem, 3vh, 2rem))",
      }}
    >
      <div
        className="animate-fade-in-up"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(.85rem, 2vw, 1.5rem)",
          maxWidth: 820,
          width: "100%",
        }}
      >
        {/* Step indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".4rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Step n={1} active={step === "layout"} done={step === "shots" || step === "vibe"} label="Layout" />
          <Bar />
          <Step n={2} active={step === "shots"} done={step === "vibe"} label="Shots" />
          <Bar />
          <Step n={3} active={step === "vibe"} done={false} label="Vibe" />
        </div>

        {step === "layout" && (
          <>
            <h2 style={titleSx}>📐 Pick Your Layout</h2>
            <div style={gridSx}>
              {layouts.map((l) => (
                <button
                  key={l.id}
                  onClick={() => chooseLayout(l.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: ".6rem",
                    padding: "1rem .9rem",
                    background:
                      pickedLayout === l.id
                        ? isNight ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,.85)"
                        : isNight ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,.5)",
                    border:
                      pickedLayout === l.id ? "3px solid var(--btn-bg)" : "3px solid var(--ink)",
                    borderRadius: 18,
                    cursor: "pointer",
                    fontFamily: "var(--fd)",
                    transition: "all .2s var(--ease)",
                    boxShadow: "3px 5px 0 var(--shadow-color)",
                    transform: pickedLayout === l.id ? "translateY(-2px)" : "none",
                  }}
                >
                  <div
                    style={{
                      background: isNight ? "rgba(255,255,255,0.08)" : "#fff",
                      padding: ".5rem",
                      borderRadius: 8,
                      border: "2px solid var(--ink-soft)",
                      boxShadow: "2px 3px 0 var(--shadow-color)",
                    }}
                  >
                    <LayoutPreview id={l.id} />
                  </div>
                  <strong style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--ink)" }}>
                    {l.label}
                  </strong>
                  <span
                    style={{
                      fontSize: ".8rem",
                      color: "var(--ink-soft)",
                      textAlign: "center",
                      fontFamily: "var(--fb)",
                    }}
                  >
                    {l.sub} • {l.photos} {l.photos === 1 ? "shot" : "shots"}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {step === "shots" && (
          <>
            <h2 style={titleSx}>📸 How Many Shots?</h2>
            <p style={subTxt}>Default for this layout is shown — adjust freely.</p>

            {/* Big immersive shot picker */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              background: isNight ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.7)",
              borderRadius: 24,
              padding: "2rem 2.5rem",
              border: "3px solid var(--ink)",
              boxShadow: "4px 6px 0 var(--shadow-color)",
              width: "100%",
              maxWidth: 400,
            }}>
              {/* Shot count display */}
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <button
                  onClick={() => {
                    const next = Math.max(1, customShots - 1);
                    setCustomShots(next);
                    setShotCount(next);
                  }}
                  style={{
                    width: 56, height: 56, borderRadius: "50%",
                    border: "3px solid var(--ink)",
                    background: isNight ? "rgba(255,255,255,0.1)" : "#fff",
                    fontFamily: "var(--fd)", fontSize: "1.8rem", fontWeight: 700,
                    color: "var(--ink)", cursor: "pointer",
                    boxShadow: "3px 4px 0 var(--shadow-color)",
                    transition: "all .15s",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >−</button>

                <div style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "var(--fd)",
                    fontSize: "clamp(4rem, 15vw, 6rem)",
                    fontWeight: 800,
                    color: "var(--ink)",
                    lineHeight: 1,
                  }}>
                    {customShots}
                  </div>
                  <div style={{
                    fontFamily: "var(--fb)",
                    fontSize: ".85rem",
                    color: "var(--ink-soft)",
                    marginTop: ".25rem",
                  }}>
                    {customShots === 1 ? "photo" : "photos"}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const next = Math.min(10, customShots + 1);
                    setCustomShots(next);
                    setShotCount(next);
                  }}
                  style={{
                    width: 56, height: 56, borderRadius: "50%",
                    border: "3px solid var(--ink)",
                    background: isNight ? "rgba(255,255,255,0.1)" : "#fff",
                    fontFamily: "var(--fd)", fontSize: "1.8rem", fontWeight: 700,
                    color: "var(--ink)", cursor: "pointer",
                    boxShadow: "3px 4px 0 var(--shadow-color)",
                    transition: "all .15s",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >+</button>
              </div>

              {/* Quick-pick pills */}
              <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", justifyContent: "center" }}>
                {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                  <button
                    key={n}
                    onClick={() => { setCustomShots(n); setShotCount(n); }}
                    style={{
                      padding: ".3rem .9rem",
                      borderRadius: 50,
                      border: customShots === n ? "2.5px solid var(--btn-bg)" : "2px solid var(--ink-soft)",
                      background: customShots === n ? "var(--btn-bg)" : isNight ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.6)",
                      color: customShots === n ? "#fff" : "var(--ink)",
                      fontFamily: "var(--fd)",
                      fontSize: ".9rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all .15s",
                    }}
                  >{n}</button>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div style={navSx}>
              <button style={ghostBtn} onClick={() => setStep("layout")}>← Back</button>
              <button
                style={primaryBtn}
                onClick={() => { setShotCount(customShots); setStep("vibe"); }}
              >
                Next: Pick Vibe →
              </button>
            </div>
          </>
        )}

        {step === "vibe" && (
          <>
            <h2 style={titleSx}>✨ Pick Your Vibe</h2>
            <p style={subTxt}>This sets the base frame family.</p>
            <div style={gridSx}>
              {vibes.map((v) => {
                const sel = pickedVibe === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => chooseVibe(v.id)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: ".4rem",
                      padding: "1rem .8rem",
                      background: isNight
                        ? "rgba(255,255,255,0.07)"
                        : v.bg,
                      border: `3px solid ${sel ? v.accent : isNight ? "rgba(240,234,214,0.3)" : "var(--ink)"}`,
                      borderRadius: 18,
                      cursor: "pointer",
                      fontFamily: "var(--fd)",
                      transition: "all .2s var(--ease)",
                      boxShadow: sel ? `4px 6px 0 ${v.accent}` : "3px 5px 0 var(--shadow-color)",
                      transform: sel ? "translateY(-3px)" : "none",
                      outline: sel ? `2px dashed ${v.accent}` : "none",
                      outlineOffset: 2,
                      backdropFilter: isNight ? "blur(8px)" : "none",
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>{v.icon}</span>
                    <strong style={{ fontSize: "1.25rem", color: isNight ? "#F8E040" : v.accent, fontWeight: 700 }}>
                      {v.label}
                    </strong>
                    <span
                      style={{
                        fontSize: ".85rem",
                        color: isNight ? "#C8BFAE" : "var(--ink)",
                        textAlign: "center",
                        fontFamily: "var(--fb)",
                        opacity: isNight ? 1 : 0.85,
                      }}
                    >
                      {v.desc}
                    </span>
                  </button>
                );
              })}
            </div>
            <div style={navSx}>
              <button onClick={() => setStep("shots")} style={ghostBtn}>
                ← Back
              </button>
              <button onClick={startSession} style={primaryBtn}>
                📷 Start Snapping →
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

const titleSx: React.CSSProperties = {
  fontFamily: "var(--fd)",
  fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
  fontWeight: 700,
  color: "var(--ink)",
  textAlign: "center",
  transform: "rotate(-1deg)",
  margin: 0,
};
const subTxt: React.CSSProperties = {
  fontFamily: "var(--fb)",
  fontSize: "clamp(.85rem, 1.8vw, 1rem)",
  color: "var(--ink-soft)",
  textAlign: "center",
  margin: 0,
  maxWidth: 540,
};
const gridSx: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "1rem",
  width: "100%",
};
const navSx: React.CSSProperties = {
  display: "flex",
  gap: ".75rem",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: ".5rem",
  width: "100%",
};
const ghostBtn: React.CSSProperties = {
  fontFamily: "var(--fd)",
  fontSize: "clamp(.95rem, 2vw, 1.1rem)",
  fontWeight: 700,
  padding: ".6rem 1.4rem",
  border: "2.5px solid var(--ink)",
  borderRadius: 50,
  background: "transparent",
  color: "var(--ink)",
  cursor: "pointer",
};
const primaryBtn: React.CSSProperties = {
  fontFamily: "var(--fd)",
  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
  fontWeight: 700,
  padding: ".7rem 2rem",
  border: "3px solid var(--btn-border)",
  borderRadius: 50,
  background: "var(--btn-bg)",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "0 5px 0 var(--btn-border)",
};

function Bar() {
  return <div style={{ width: 16, height: 2, background: "var(--ink-soft)", opacity: 0.5 }} />;
}

/* Quick visual thumbnail of the frame style — lightweight SVG hint, not the full canvas. */
function FrameThumb({ id, mode }: { id: FrameStyleId; mode: BoothMode }) {
  const bg = mode === "ann" ? "#FFEDF1" : mode === "bday" ? "#E8FBFD" : "#F8F1DC";
  const photo = mode === "ann" ? "#F4C0CC" : mode === "bday" ? "#C0E0E8" : "#D8C088";
  const ink = mode === "ann" ? "#9A2A4A" : mode === "bday" ? "#1F4868" : "#5A3008";
  return (
    <svg
      viewBox="0 0 60 80"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <rect x="2" y="2" width="56" height="76" rx="3" fill={bg} stroke={ink} strokeWidth=".7" />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="8"
          y={10 + i * 22}
          width="44"
          height="18"
          rx="1"
          fill={photo}
          stroke={ink}
          strokeWidth=".4"
        />
      ))}
      <FrameThumbAccent id={id} ink={ink} />
    </svg>
  );
}

/* Minimal style accent so each thumbnail looks distinct without being heavy. */
function FrameThumbAccent({ id, ink }: { id: FrameStyleId; ink: string }) {
  switch (id) {
    case "ord-classic":
    case "ord-aesthetic":
      return (
        <>
          <circle cx="6" cy="6" r="2.5" fill="#F2C04A" stroke={ink} strokeWidth=".4" />
          <circle cx="54" cy="6" r="2.5" fill="#F2C04A" stroke={ink} strokeWidth=".4" />
          <circle cx="6" cy="74" r="2.5" fill="#F2C04A" stroke={ink} strokeWidth=".4" />
          <circle cx="54" cy="74" r="2.5" fill="#F2C04A" stroke={ink} strokeWidth=".4" />
        </>
      );
    case "ord-washi":
      return (
        <>
          <rect x="0" y="3" width="22" height="4" fill="#F4B6C8" transform="rotate(-6 0 3)" />
          <rect x="38" y="73" width="22" height="4" fill="#A8D8E8" transform="rotate(4 38 73)" />
        </>
      );
    case "ord-polaroid":
      return (
        <rect x="3" y="9" width="54" height="62" fill="none" stroke="#fff" strokeWidth="2.4" />
      );
    case "ord-grunge90":
      return (
        <>
          {Array.from({ length: 18 }).map((_, i) => (
            <circle
              key={i}
              cx={5 + ((i * 7) % 50)}
              cy={5 + ((i * 13) % 70)}
              r=".6"
              fill={ink}
              opacity=".5"
            />
          ))}
        </>
      );
    case "ord-stickerz":
      return (
        <>
          <text x="6" y="9" fontSize="6" fill="#E04878">
            ★
          </text>
          <text x="50" y="9" fontSize="6" fill="#48A8C8">
            ☺
          </text>
          <text x="6" y="76" fontSize="6" fill="#7AC840">
            ✿
          </text>
          <text x="50" y="76" fontSize="6" fill="#F4B43C">
            ♥
          </text>
        </>
      );
    case "ord-doodle":
      return (
        <rect
          x="3"
          y="3"
          width="54"
          height="74"
          fill="none"
          stroke={ink}
          strokeWidth=".8"
          strokeDasharray="2 1"
        />
      );
    case "ord-zine":
      return (
        <>
          <rect x="2" y="2" width="6" height="6" fill="#F0E040" stroke={ink} strokeWidth=".3" />
          <rect x="52" y="72" width="6" height="6" fill="#F08070" stroke={ink} strokeWidth=".3" />
        </>
      );
    case "ord-coffee":
      return (
        <>
          <circle cx="9" cy="9" r="4" fill="none" stroke={ink} strokeWidth=".5" opacity=".5" />
          <circle cx="51" cy="71" r="5" fill="none" stroke={ink} strokeWidth=".5" opacity=".5" />
        </>
      );
    case "ord-pastel":
      return (
        <>
          <circle cx="8" cy="6" r="3" fill="#fff" />
          <circle cx="13" cy="6" r="2.5" fill="#fff" />
          <circle cx="50" cy="74" r="3" fill="#fff" />
          <circle cx="55" cy="74" r="2.5" fill="#fff" />
        </>
      );
    case "ord-newspaper":
      return (
        <>
          <rect x="2" y="2" width="56" height="5" fill="#1A1A1A" />
          <rect x="2" y="73" width="56" height="5" fill="#1A1A1A" />
        </>
      );
    case "ord-y2k":
      return (
        <>
          <circle cx="8" cy="8" r="3" fill="#A8E0F8" />
          <circle cx="7" cy="7" r="1" fill="#fff" />
          <circle cx="52" cy="72" r="3" fill="#F8B0E0" />
          <circle cx="51" cy="71" r="1" fill="#fff" />
        </>
      );
    case "ann-classic":
    case "ann-fingerprint":
      return (
        <>
          <text x="3" y="9" fontSize="6" fill="#C43860">
            ♥
          </text>
          <text x="51" y="9" fontSize="6" fill="#C43860">
            ♥
          </text>
          <text x="3" y="76" fontSize="6" fill="#C43860">
            ♥
          </text>
          <text x="51" y="76" fontSize="6" fill="#C43860">
            ♥
          </text>
        </>
      );
    case "ann-lace":
      return (
        <path
          d="M0 3 Q4 6 8 3 T16 3 T24 3 T32 3 T40 3 T48 3 T56 3 T60 3"
          fill="none"
          stroke="#9A2A4A"
          strokeWidth=".5"
        />
      );
    case "ann-loveletter":
      return (
        <>
          <circle cx="8" cy="8" r="3" fill="#A02038" />
          <circle cx="52" cy="8" r="3" fill="#A02038" />
        </>
      );
    case "ann-rosegold":
      return (
        <rect
          x="2"
          y="2"
          width="56"
          height="76"
          rx="3"
          fill="none"
          stroke="#C88068"
          strokeWidth=".8"
        />
      );
    case "ann-pixelhearts":
      return (
        <>
          {[6, 18, 30, 42, 54].map((x) => (
            <rect key={x} x={x - 2} y="3" width="4" height="3" fill="#E04878" />
          ))}
          {[6, 18, 30, 42, 54].map((x) => (
            <rect key={x} x={x - 2} y="74" width="4" height="3" fill="#E04878" />
          ))}
        </>
      );
    case "ann-cinema":
      return (
        <>
          <rect x="0" y="0" width="4" height="80" fill="#1A1A1A" />
          <rect x="56" y="0" width="4" height="80" fill="#1A1A1A" />
        </>
      );
    case "ann-vintage":
      return <rect x="0" y="0" width="60" height="80" fill="#8A5828" opacity=".18" />;
    case "ann-sticker":
      return (
        <text x="6" y="10" fontSize="6" fill="#E04878">
          ✦
        </text>
      );
    case "ann-poetic":
    case "ann-cottagecore":
      return (
        <>
          <circle cx="8" cy="6" r="2.4" fill="#C46888" />
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
          <ellipse cx="8" cy="6" rx="2.4" ry="3" fill="#E04060" />
          <ellipse cx="52" cy="6" rx="2.4" ry="3" fill="#48A8E0" />
        </>
      );
    case "bday-confetti":
    case "bday-sprinkles":
      return (
        <>
          {["#E04060", "#48A8E0", "#F0A040", "#7048C8", "#48C880"].map((c, i) => (
            <rect key={i} x={5 + i * 11} y={3} width="3" height="1.5" fill={c} />
          ))}
          {["#E04060", "#48A8E0", "#F0A040", "#7048C8", "#48C880"].map((c, i) => (
            <rect key={`b${i}`} x={5 + i * 11} y={75} width="3" height="1.5" fill={c} />
          ))}
        </>
      );
    case "bday-disco":
      return <circle cx="30" cy="6" r="3" fill="#3A3A4A" />;
    case "bday-neon":
      return (
        <text x="10" y="9" fontSize="6" fill="#F060B8" fontFamily="cursive">
          Bday
        </text>
      );
    case "bday-cake":
      return (
        <>
          <rect x="22" y="70" width="16" height="6" fill="#F8C8D8" />
          <rect x="26" y="65" width="8" height="5" fill="#FCE8B8" />
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
      return (
        <rect
          x="2"
          y="2"
          width="56"
          height="76"
          rx="3"
          fill="none"
          stroke="#A8E0F8"
          strokeWidth="1.4"
          opacity=".8"
        />
      );
    case "bday-popart":
      return (
        <>
          <polygon
            points="30,2 33,6 38,5 35,9 38,12 33,11 30,15 27,11 22,12 25,9 22,5 27,6"
            fill="#E04060"
          />
        </>
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

function Step({
  n,
  active,
  done,
  label,
}: {
  n: number;
  active: boolean;
  done: boolean;
  label: string;
}) {
  const color = active ? "var(--btn-bg)" : done ? "#5A8A40" : "var(--ink-soft)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: active || done ? color : "transparent",
          border: `2.5px solid ${color}`,
          color: active || done ? "#fff" : color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--fd)",
          fontWeight: 700,
          fontSize: ".9rem",
        }}
      >
        {done ? "✓" : n}
      </div>
      <span
        style={{
          fontFamily: "var(--fd)",
          fontSize: ".95rem",
          fontWeight: 700,
          color: active ? "var(--ink)" : "var(--ink-soft)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
