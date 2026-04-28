import { useEffect, useRef, useState, useCallback } from "react";
import { useBoothStore } from "../lib/booth-store";
import { buildStrip, pickRandomPoem } from "../lib/strip-builder";

export function ResultScreen() {
  const {
    mode,
    layout,
    shotCount,
    frameStyle,
    frames,
    dataURL,
    setDataURL,
    resetFrames,
    setScreen,
    unlockMode,
    nightMode: isNight,
  } = useBoothStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stripRef = useRef<HTMLCanvasElement>(null);
  const [note, setNote] = useState("");
  const [building, setBuilding] = useState(false);

  const rebuild = useCallback(
    async (noteText: string) => {
      if (!canvasRef.current || !stripRef.current || frames.length === 0) return;
      setBuilding(true);
      const { dataURL: d } = await buildStrip(
        frames,
        layout,
        mode,
        canvasRef.current,
        noteText,
        frameStyle,
        shotCount,
      );
      setDataURL(d);
      const ctx = stripRef.current.getContext("2d")!;
      stripRef.current.width = canvasRef.current.width;
      stripRef.current.height = canvasRef.current.height;
      ctx.drawImage(canvasRef.current, 0, 0);
      setBuilding(false);
    },
    [frames, layout, mode, frameStyle, shotCount, setDataURL],
  );

  // Initial build
  useEffect(() => {
    rebuild("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applyNote = useCallback(() => {
    rebuild(note);
  }, [note, rebuild]);

  const clearNote = useCallback(() => {
    setNote("");
    rebuild("");
  }, [rebuild]);

  const autoPoem = useCallback(() => {
    const text = pickRandomPoem(mode);
    setNote(text);
    rebuild(text);
  }, [mode, rebuild]);

  const saveStrip = useCallback(() => {
    if (!dataURL) return;
    const a = document.createElement("a");
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    const sfx = mode === "ann" ? "-anniversary" : mode === "bday" ? "-birthday" : "";
    a.download = `memory-studio-${months[new Date().getMonth()]}${sfx}.png`;
    a.href = dataURL;
    a.click();
  }, [dataURL, mode]);

  const shareStrip = useCallback(async () => {
    if (!dataURL) return;
    const info = {
      title: "Our Memory Studio",
      text: "A beautiful photo strip from Our Memory Studio",
    };
    try {
      const [h, d] = dataURL.split(",");
      const mime = h.match(/:(.*?);/)![1];
      const bin = atob(d);
      const arr = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
      const blob = new Blob([arr], { type: mime });
      const file = new File([blob], "memory-studio.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ ...info, files: [file] });
        return;
      }
      if (navigator.share) {
        await navigator.share(info);
        return;
      }
    } catch (e: unknown) {
      if ((e as { name?: string })?.name === "AbortError") return;
    }
    saveStrip();
  }, [dataURL, saveStrip]);

  const retake = useCallback(() => {
    resetFrames();
    unlockMode();
    setNote("");
    setScreen("grid-select");
  }, [resetFrames, unlockMode, setScreen]);

  return (
    <div
      className="screen"
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: "clamp(0.5rem, 2vw, 1.5rem)",
        overflow: "auto",
      }}
    >
      <canvas ref={canvasRef} style={{ display: "none" }} />

      <div
        className="animate-fade-in-up result-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(220px, 360px) minmax(260px, 360px)",
          gap: "clamp(1.5rem, 3vw, 3rem)",
          justifyContent: "center",
          alignItems: "start",
          width: "100%",
          maxWidth: 900,
          padding: "0 clamp(.5rem, 2vw, 1.5rem)",
        }}
      >
        {/* Left: Photo strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            maxHeight: "85dvh",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              background: isNight ? "#1e1e3e" : "#fff",
              padding: "clamp(8px, 2vw, 14px) clamp(8px, 2vw, 14px) clamp(20px, 3vw, 32px)",
              border: isNight ? "4px solid rgba(240,234,214,0.15)" : "4px solid #fff",
              borderRadius: 4,
              boxShadow: isNight
                ? "4px 10px 22px rgba(0,0,0,.6), 0 0 0 1px rgba(240,234,214,0.08)"
                : "4px 10px 22px rgba(42,24,0,.18)",
              transform: "rotate(-1.5deg)",
              transition: "transform .3s ease",
              width: "min(320px, 100%)",
            }}
          >
            <canvas
              ref={stripRef}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                background: "var(--paper)",
                opacity: building ? 0.55 : 1,
                transition: "opacity .2s",
              }}
            />
          </div>
        </div>

        {/* Right: Controls */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(.6rem, 1.5vw, 1rem)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--fd)",
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              color: "var(--ink)",
              transform: "rotate(-1deg)",
              margin: 0,
              textShadow: isNight ? "0 0 12px rgba(248,224,64,0.15)" : "1px 1px 0 rgba(255,255,255,.6)",
            }}
          >
            🎉 Your Memory Strip!
          </h2>

          {/* Note Studio */}
          <div
            style={{
              background: isNight
                ? "rgba(255,255,255,0.05)"
                : "linear-gradient(135deg, rgba(255,255,255,.75), rgba(255,255,255,.45))",
              border: "2px solid var(--ink)",
              borderRadius: 18,
              padding: "clamp(.85rem, 2vw, 1.1rem)",
              boxShadow: "3px 5px 0 var(--shadow-color)",
              display: "flex",
              flexDirection: "column",
              gap: ".7rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1.5px dashed var(--ink-soft)",
                paddingBottom: ".4rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--fd)",
                  fontSize: "clamp(1.05rem, 2.4vw, 1.3rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                }}
              >
                ✏️ Note Studio
              </span>
              <span
                style={{
                  fontFamily: "var(--fb)",
                  fontSize: ".7rem",
                  background: "var(--ink)",
                  color: "var(--paper)",
                  padding: ".18rem .55rem",
                  borderRadius: 10,
                  fontWeight: 700,
                  letterSpacing: ".05em",
                }}
              >
                OPTIONAL
              </span>
            </div>

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              maxLength={220}
              rows={3}
              placeholder="Write a handwritten note for your strip — or skip it and your strip stays clean."
              style={{
                fontFamily: "var(--fh)",
                fontSize: "clamp(.9rem, 2vw, 1.05rem)",
                color: "var(--ink)",
                background: isNight ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,.65)",
                border: "2px solid var(--ink)",
                borderRadius: 10,
                padding: ".6rem .75rem",
                resize: "none",
                outline: "none",
                width: "100%",
                lineHeight: 1.45,
                boxSizing: "border-box",
              }}
            />

            <div style={{ display: "flex", gap: ".45rem", flexWrap: "wrap" }}>
              <button
                onClick={applyNote}
                disabled={building || !note.trim()}
                style={{
                  fontFamily: "var(--fd)",
                  fontSize: "clamp(.9rem, 2vw, 1.05rem)",
                  fontWeight: 700,
                  padding: ".45rem 1rem",
                  border: "2px solid var(--btn-border)",
                  borderRadius: 999,
                  background: "var(--btn-bg)",
                  color: "#fff",
                  cursor: !note.trim() || building ? "not-allowed" : "pointer",
                  opacity: !note.trim() || building ? 0.55 : 1,
                  transition: "all .15s var(--ease)",
                }}
              >
                ✓ Apply Note
              </button>

              <button
                onClick={autoPoem}
                disabled={building}
                style={{
                  fontFamily: "var(--fd)",
                  fontSize: "clamp(.9rem, 2vw, 1.05rem)",
                  fontWeight: 700,
                  padding: ".45rem 1rem",
                  border: "2px solid var(--ink)",
                  borderRadius: 999,
                  background: isNight ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,.65)",
                  color: "var(--ink)",
                  cursor: building ? "wait" : "pointer",
                  opacity: building ? 0.6 : 1,
                }}
              >
                🎲 Random Poem
              </button>

              <button
                onClick={clearNote}
                disabled={building}
                style={{
                  fontFamily: "var(--fd)",
                  fontSize: "clamp(.9rem, 2vw, 1.05rem)",
                  fontWeight: 700,
                  padding: ".45rem .9rem",
                  border: "2px dashed var(--ink-soft)",
                  borderRadius: 999,
                  background: "transparent",
                  color: "var(--ink-soft)",
                  cursor: building ? "wait" : "pointer",
                }}
              >
                ✕ Clear
              </button>

              <span
                style={{
                  fontFamily: "var(--fd)",
                  fontSize: ".85rem",
                  color: "var(--ink)",
                  opacity: 0.65,
                  marginLeft: "auto",
                  alignSelf: "center",
                }}
              >
                {note.length}/220
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontFamily: "var(--fb)",
                fontSize: ".8rem",
                color: "var(--ink-soft)",
                opacity: 0.8,
                lineHeight: 1.4,
              }}
            >
              💡 Random poem picks one of 20 handcrafted verses for your{" "}
              <strong>
                {mode === "ann" ? "romance" : mode === "bday" ? "birthday" : "everyday"}
              </strong>{" "}
              theme. If you skip the note, the strip stays clean — no empty space.
            </p>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: ".55rem" }}>
            <button
              onClick={saveStrip}
              style={actionBtn("var(--btn-bg)", "#fff", "var(--btn-border)")}
            >
              💾 Save to Device
            </button>
            <button onClick={shareStrip} style={actionBtn("#B83870", "#fff", "#7A1040")}>
              📤 Share to Social
            </button>
            <button onClick={retake} style={actionBtn("transparent", "var(--ink)", "var(--ink)")}>
              🔄 Retake Photos
            </button>
          </div>

          <p
            style={{
              fontFamily: "var(--fd)",
              fontSize: "clamp(.75rem, 1.8vw, .95rem)",
              color: "var(--ink)",
              opacity: 0.6,
              textAlign: "center",
              margin: 0,
            }}
          >
            💡 Share via Instagram, WhatsApp, or any app!
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .result-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function actionBtn(bg: string, color: string, border: string): React.CSSProperties {
  return {
    fontFamily: "var(--fd)",
    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
    fontWeight: 700,
    padding: ".6rem 1rem",
    border: `3px solid ${border}`,
    borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
    background: bg,
    color,
    cursor: "pointer",
    width: "100%",
    minHeight: 48,
    transition: "all .2s var(--ease)",
  };
}
