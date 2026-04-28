import { useEffect, useRef, useState, useCallback } from "react";
import { useBoothStore } from "../lib/booth-store";
import { playTick, playShutter } from "../lib/sound-engine";

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function CaptureScreen() {
  const { mode, layout, shotCount, filter, setFilter, setScreen, addFrame, frames, lockMode, modeLocked } =
    useBoothStore();
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [permDenied, setPermDenied] = useState(false);
  const [ready, setReady] = useState(false);
  const [capturing, setCapturing] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [flash, setFlash] = useState(false);
  const [status, setStatus] = useState("Ready when you are!");
  // Always use shotCount — so any layout honours the user's chosen number of shots
  const numPhotos = shotCount;
  const takenCount = frames.length;

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "user" }, width: { ideal: 1280 }, height: { ideal: 960 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await new Promise<void>((r) => {
          videoRef.current!.onloadedmetadata = () => r();
          setTimeout(r, 3200);
        });
        videoRef.current.play().catch(() => {});
      }
      setPermDenied(false);
      setReady(true);
      setStatus("Ready when you are!");
    } catch {
      setPermDenied(true);
      setReady(false);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
  }, []);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, [startCamera, stopCamera]);

  const snapFrame = useCallback(() => {
    const v = videoRef.current;
    if (!v) return "";
    const w = v.videoWidth || 640,
      h = v.videoHeight || 480;
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d")!;
    ctx.save();
    ctx.translate(w, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(v, 0, 0, w, h);
    ctx.restore();
    if (filter === "bw") {
      const d = ctx.getImageData(0, 0, w, h),
        px = d.data;
      for (let i = 0; i < px.length; i += 4) {
        const g = 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2];
        px[i] = px[i + 1] = px[i + 2] = g;
      }
      ctx.putImageData(d, 0, 0);
    }
    return c.toDataURL("image/jpeg", 0.92);
  }, [filter]);

  const runCapture = useCallback(async () => {
    if (capturing) return;
    setCapturing(true);
    lockMode(); // Lock mode during capture

    const remaining = numPhotos - takenCount;
    for (let i = 0; i < remaining; i++) {
      setStatus(`Picture ${takenCount + i + 1} of ${numPhotos} — smile!`);
      for (let n = 3; n >= 1; n--) {
        setCountdown(n);
        playTick(n === 1);
        await wait(1000);
      }
      setCountdown(null);
      playShutter();
      setFlash(true);
      await wait(300);
      setFlash(false);
      await wait(500);
      const frame = snapFrame();
      if (frame) addFrame(frame);
      if (navigator.vibrate) navigator.vibrate([40, 100, 40]);
      if (i < remaining - 1) {
        setStatus("Got it! Next one...");
        await wait(1500);
      }
    }
    setStatus("Done! Pick your frame style...");
    await wait(500);
    stopCamera();
    setScreen("frame-select");
    setCapturing(false);
  }, [capturing, numPhotos, takenCount, snapFrame, addFrame, lockMode, stopCamera, setScreen]);

  return (
    <div
      className="screen"
      style={{
        overflow: "hidden",
        maxWidth: 600,
        width: "100%",
        margin: "0 auto",
        padding: "clamp(0.3rem, 1.5vh, 1rem) clamp(0.5rem, 2vw, 1rem)",
        justifyContent: "flex-start",
      }}
    >
      {/* Header */}
      <h2
        style={{
          fontFamily: "var(--fd)",
          fontSize: "clamp(1.1rem, 3vh, 2rem)",
          color: "var(--ink)",
          textAlign: "center",
          margin: "0 0 .3rem",
          transform: "rotate(-1.5deg)",
          flexShrink: 0,
        }}
      >
        ✏ Our Memory Studio
      </h2>

      {/* Camera stage */}
      <div
        style={{
          position: "relative",
          width: "100%",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 0,
        }}
      >
        {permDenied ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              textAlign: "center",
            }}
          >
            <p style={{ fontFamily: "var(--fd)", color: "var(--ink)" }}>
              📷 Camera needed!
              <br />
              <small>Allow camera access in browser settings, then tap Retry.</small>
            </p>
            <button
              onClick={startCamera}
              style={{
                fontFamily: "var(--fd)",
                padding: ".5rem 1.5rem",
                border: "2px solid var(--ink)",
                borderRadius: 50,
                background: "var(--paper)",
                cursor: "pointer",
              }}
            >
              🔄 Retry
            </button>
          </div>
        ) : (
          <div
            style={{
              height: "100%",
              maxWidth: "100%",
              aspectRatio: "4/3",
              background: "#000",
              border: "clamp(4px, 1.5vh, 12px) solid #FFF",
              borderRadius: 6,
              boxShadow: "0 10px 25px rgba(0,0,0,.15), 0 0 0 4px var(--ink)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "scaleX(-1)",
                display: "block",
                filter: filter === "bw" ? "grayscale(100%)" : "none",
              }}
            />
            {/* Flash */}
            {flash && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#fff",
                  zIndex: 10,
                  borderRadius: "inherit",
                  animation: "fadeIn 0.07s forwards",
                }}
              />
            )}
            {/* Countdown */}
            {countdown !== null && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  fontFamily: "var(--fd)",
                  fontSize: "clamp(2.5rem, 10vh, 5rem)",
                  fontWeight: 700,
                  color: "rgba(255,255,255,.95)",
                  textShadow: "2px 4px 14px rgba(0,0,0,.65)",
                  zIndex: 8,
                }}
              >
                {countdown}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Command center */}
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(0.2rem, .8vh, .8rem)",
          width: "100%",
          marginTop: "clamp(0.2rem, .6vh, .6rem)",
          paddingBottom: "env(safe-area-inset-bottom, 0.5rem)",
        }}
      >
        {/* Dots */}
        <div style={{ display: "flex", gap: "clamp(.3rem, 1.5vw, .7rem)" }}>
          {Array.from({ length: numPhotos }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "clamp(12px, 3vw, 20px)",
                height: "clamp(12px, 3vw, 20px)",
                borderRadius: "50%",
                border: "2.5px solid var(--shadow-color)",
                background: i < takenCount ? "var(--a2)" : "var(--paper2)",
                transition: "background .2s, transform .15s",
                transform: i === takenCount - 1 ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
        <p
          style={{
            fontFamily: "var(--fh)",
            fontSize: "clamp(.85rem, 2.5vw, 1.2rem)",
            color: "var(--ink)",
            textAlign: "center",
          }}
        >
          {status}
        </p>

        {/* Filter buttons */}
        <div style={{ display: "flex", gap: ".4rem" }}>
          <button
            onClick={() => setFilter("color")}
            disabled={capturing}
            style={{
              fontFamily: "var(--fd)",
              fontSize: "clamp(.85rem, 2.5vw, 1.1rem)",
              fontWeight: 700,
              padding: ".3rem .8rem",
              border: "2px solid var(--ink)",
              borderRadius: 24,
              cursor: "pointer",
              background: filter === "color" ? "var(--ink)" : "transparent",
              color: filter === "color" ? "var(--paper)" : "var(--ink)",
              transition: "all .15s",
            }}
          >
            🎨 Color
          </button>
          <button
            onClick={() => setFilter("bw")}
            disabled={capturing}
            style={{
              fontFamily: "var(--fd)",
              fontSize: "clamp(.85rem, 2.5vw, 1.1rem)",
              fontWeight: 700,
              padding: ".3rem .8rem",
              border: "2px solid var(--ink)",
              borderRadius: 24,
              cursor: "pointer",
              background: filter === "bw" ? "var(--ink)" : "transparent",
              color: filter === "bw" ? "var(--paper)" : "var(--ink)",
              transition: "all .15s",
            }}
          >
            ⬛ B&W
          </button>
        </div>

        {/* Snap button */}
        <button
          onClick={runCapture}
          disabled={!ready || capturing}
          style={{
            padding: "clamp(.6rem, 2vw, 1rem) clamp(1.5rem, 5vw, 3rem)",
            fontSize: "clamp(1.1rem, 3.5vw, 1.6rem)",
            fontFamily: "var(--fd)",
            fontWeight: 700,
            color: "var(--btn-text)",
            background: "var(--btn-bg)",
            border: "3px solid var(--btn-border)",
            borderRadius: 50,
            cursor: ready && !capturing ? "pointer" : "not-allowed",
            boxShadow: "0 6px 0 var(--btn-border)",
            opacity: ready && !capturing ? 1 : 0.5,
            transition: "transform .1s, box-shadow .1s",
          }}
        >
          📷 Snap Photo
        </button>
      </div>
    </div>
  );
}
