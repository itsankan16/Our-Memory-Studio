import { useEffect, useState, useRef } from "react";
import { useBoothStore } from "../lib/booth-store";
import { playPrinterSound } from "../lib/sound-engine";
import { buildStrip } from "../lib/strip-builder";

export function PrinterAnimation() {
  const { setScreen, nightMode: isNight, frames, mode, layout, shotCount, frameStyle } = useBoothStore();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"warmup" | "printing" | "done">("warmup");
  const [stripImg, setStripImg] = useState<string | null>(null);
  const hiddenCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Generate the real strip for the animation
    if (hiddenCanvasRef.current && frames.length > 0) {
      buildStrip(frames, layout, mode, hiddenCanvasRef.current, "", frameStyle, shotCount).then(
        (res) => setStripImg(res.dataURL)
      );
    }
    playPrinterSound();

    const t1 = setTimeout(() => setPhase("printing"), 600);

    // Progress animation
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 80);

    const t2 = setTimeout(() => {
      setPhase("done");
    }, 4500);

    const t3 = setTimeout(() => {
      setScreen("result");
    }, 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
    };
  }, [setScreen]);

  return (
    <div
      className="screen"
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: "var(--paper)",
      }}
    >
      <div
        className="animate-fade-in"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(1rem, 3vw, 2rem)",
        }}
      >
        {/* Printer SVG */}
        <div style={{ position: "relative", width: "min(70vw, 300px)", height: "auto", marginBottom: "140px" }}>
          <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
            {/* Printer body */}
            <rect
              x="30"
              y="60"
              width="240"
              height="100"
              rx="12"
              fill="#D8B460"
              stroke="#5A3008"
              strokeWidth="3"
            />
            <rect
              x="50"
              y="40"
              width="200"
              height="30"
              rx="8"
              fill="#C8A040"
              stroke="#5A3008"
              strokeWidth="2.5"
            />
            {/* Paper slot */}
            <rect
              x="70"
              y="150"
              width="160"
              height="8"
              rx="2"
              fill="#3D405B"
              stroke="#2A2A3A"
              strokeWidth="1.5"
            />
            {/* Buttons */}
            <circle cx="240" cy="95" r="8" fill="#81B29A" stroke="#3D405B" strokeWidth="2" />
            <circle cx="240" cy="120" r="8" fill="#E07A5F" stroke="#3D405B" strokeWidth="2" />
            {/* LED */}
            <circle
              cx="70"
              cy="80"
              r="4"
              fill={phase === "printing" ? "#4CAF50" : "#F2CC8F"}
              stroke="#3D405B"
              strokeWidth="1.5"
            >
              {phase === "printing" && (
                <animate
                  attributeName="opacity"
                  values="1;0.3;1"
                  dur="0.5s"
                  repeatCount="indefinite"
                />
              )}
            </circle>
            {/* Printer head */}
            {phase === "printing" && (
              <rect
                x="80"
                y="105"
                width="40"
                height="8"
                rx="2"
                fill="#3D405B"
                stroke="#2A2A3A"
                strokeWidth="1"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0;100,0;0,0"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </rect>
            )}
          </svg>

          {/* Paper coming out of the slot, downward */}
          <div
            style={{
              position: "absolute",
              top: "78%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "53%",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "100%",
                height: `${shotCount > 4 ? Math.min(progress * 4, 140) : Math.min(progress * 1.4, 140)}px`,
                transition: "height 0.1s linear",
                boxShadow: "0 8px 16px rgba(0,0,0,.18)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Mini strip preview */}
              {stripImg ? (
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <img 
                    src={stripImg} 
                    alt="Printing..." 
                    style={{ 
                      width: "100%", 
                      height: "auto", 
                      display: "block",
                      transform: shotCount > 4 && progress > 30 ? `translateY(calc((-100% + 140px) * ${(progress - 30) / 70}))` : "none",
                      transition: "transform 0.1s linear"
                    }} 
                  />
                  {/* 2D Roll graphic at the bottom */}
                  {shotCount > 4 && progress > 30 && (
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: "1%",
                      width: "98%",
                      height: "16px",
                      background: "linear-gradient(to bottom, #F4ECD8 0%, #D8D0BA 50%, #A8A088 100%)",
                      borderRadius: "8px",
                      boxShadow: "0 -3px 8px rgba(0,0,0,0.3), 0 5px 10px rgba(0,0,0,0.5)",
                      zIndex: 10
                    }}>
                      {/* Spiral end (right side) */}
                      <div style={{
                        position: "absolute",
                        right: "-4px",
                        top: "1px",
                        width: "12px",
                        height: "14px",
                        borderRadius: "50%",
                        background: "repeating-radial-gradient(circle at center, #F4ECD8 0, #F4ECD8 2px, #A8A088 3px)",
                        border: "1px solid #7A7058",
                      }} />
                      {/* Spiral end (left side) */}
                      <div style={{
                        position: "absolute",
                        left: "-4px",
                        top: "1px",
                        width: "12px",
                        height: "14px",
                        borderRadius: "50%",
                        background: "repeating-radial-gradient(circle at center, #F4ECD8 0, #F4ECD8 2px, #A8A088 3px)",
                        border: "1px solid #7A7058",
                      }} />
                    </div>
                  )}
                </div>
              ) : (
                <div
                  style={{
                    padding: "6px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  {[0, 1, 2].map((i) => {
                    const bgUrl = frames[i] ? frames[i] : (frames.length > 0 ? frames[0] : null);
                    return (
                      <div
                        key={i}
                        style={{
                          height: 18,
                          background: bgUrl ? `url("${bgUrl}") center/cover` : "#C8B8A4",
                          borderRadius: 2,
                          opacity: progress > 25 + i * 20 ? 1 : 0,
                          transition: "opacity 0.3s",
                          border: "1px solid rgba(0,0,0,0.1)",
                        }}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Hidden canvas for building the real strip */}
        <canvas ref={hiddenCanvasRef} style={{ display: "none" }} />

        {/* Status text */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--fd)",
              fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              fontWeight: 700,
              color: "var(--ink)",
              animation: "filmPulse 1.8s ease-in-out infinite",
            }}
          >
            {phase === "warmup"
              ? "🖨️ Warming up the printer..."
              : phase === "printing"
                ? "✏️ Printing your memories..."
                : "✨ Almost ready!"}
          </p>
          <p
            style={{
              fontFamily: "var(--fb)",
              fontSize: "clamp(.75rem, 2vw, .95rem)",
              color: "var(--ink-soft)",
              opacity: 0.7,
              marginTop: ".5rem",
            }}
          >
            {phase === "printing" ? "The old printer is doing its magic ✨" : ""}
          </p>
        </div>

        {/* Progress bar */}
        <div
          style={{
            width: "min(60vw, 250px)",
            height: 8,
            background: "var(--paper2)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "var(--btn-bg)",
              borderRadius: 4,
              transition: "width 0.1s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
