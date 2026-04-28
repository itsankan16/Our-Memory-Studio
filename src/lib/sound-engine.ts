let _actx: AudioContext | null = null;

function getActx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!_actx) {
    try {
      _actx = new (
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      )();
    } catch {
      /* ignore */
    }
  }
  if (_actx && _actx.state === "suspended") _actx.resume().catch(() => {});
  return _actx;
}

/* Master gain so callers can hear it clearly. */
function masterGain(ctx: AudioContext, vol: number): GainNode {
  const g = ctx.createGain();
  g.gain.value = vol;
  g.connect(ctx.destination);
  return g;
}

/* === Mechanical clock "tik-tok" — alternates higher (tik) and lower (tok) === */
let _tickToggle = false;
export function playTick(isLast: boolean) {
  const ctx = getActx();
  if (!ctx) return;
  const sr = ctx.sampleRate;
  const now = ctx.currentTime;

  // Alternate tik (high) / tok (low). Final tick: louder, brighter "ding"-flavoured tok.
  const isTik = !_tickToggle;
  _tickToggle = !_tickToggle;

  const vol = isLast ? 1.4 : 1.0;
  const out = masterGain(ctx, vol);

  // 1. Sharp transient click (escapement pallet hitting the tooth)
  const clickLen = Math.floor(sr * 0.018);
  const cBuf = ctx.createBuffer(1, clickLen, sr);
  const cd = cBuf.getChannelData(0);
  for (let i = 0; i < clickLen; i++) {
    cd[i] = (Math.random() * 2 - 1) * Math.exp(-i / (sr * 0.0022));
  }
  const cSrc = ctx.createBufferSource();
  cSrc.buffer = cBuf;
  const cHp = ctx.createBiquadFilter();
  cHp.type = "highpass";
  cHp.frequency.value = isTik ? 2200 : 1400;
  const cBp = ctx.createBiquadFilter();
  cBp.type = "bandpass";
  cBp.frequency.value = isTik ? 4200 : 2600;
  cBp.Q.value = 5;
  const cG = ctx.createGain();
  cG.gain.setValueAtTime(0.9, now);
  cG.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
  cSrc.connect(cHp);
  cHp.connect(cBp);
  cBp.connect(cG);
  cG.connect(out);
  cSrc.start(now);

  // 2. Wood/metal body resonance — short damped sine
  const o = ctx.createOscillator();
  const og = ctx.createGain();
  o.type = isTik ? "triangle" : "sine";
  const baseFreq = isTik ? 880 : 520;
  o.frequency.setValueAtTime(baseFreq * 1.4, now);
  o.frequency.exponentialRampToValueAtTime(baseFreq, now + 0.012);
  og.gain.setValueAtTime(0.0001, now);
  og.gain.exponentialRampToValueAtTime(0.85, now + 0.004);
  og.gain.exponentialRampToValueAtTime(0.0001, now + (isLast ? 0.22 : 0.13));
  o.connect(og);
  og.connect(out);
  o.start(now);
  o.stop(now + 0.25);

  // 3. Final tick: small brass "ding" overlay so the user knows it's go-time.
  if (isLast) {
    const ding = ctx.createOscillator();
    const dg = ctx.createGain();
    ding.type = "sine";
    ding.frequency.setValueAtTime(1760, now + 0.02);
    dg.gain.setValueAtTime(0.0001, now + 0.02);
    dg.gain.exponentialRampToValueAtTime(0.7, now + 0.025);
    dg.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    ding.connect(dg);
    dg.connect(out);
    ding.start(now + 0.02);
    ding.stop(now + 0.5);
  }
}

export function playShutter() {
  const ctx = getActx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const out = masterGain(ctx, 1.8);

  // A real compact camera "chi-chik" is very fast (around 45ms total duration) and sharp.
  // 1. "Chi" - Pre-click (Leaf Shutter Opening / Actuator snapping)
  const chi = ctx.createOscillator();
  const chiG = ctx.createGain();
  chi.type = "square";
  chi.frequency.setValueAtTime(4500, now);
  chi.frequency.exponentialRampToValueAtTime(1000, now + 0.015);
  chiG.gain.setValueAtTime(0.8, now);
  chiG.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);
  
  // Very high noise burst for the click transient
  const nzLen = Math.floor(ctx.sampleRate * 0.02);
  const nzBuf = ctx.createBuffer(1, nzLen, ctx.sampleRate);
  const nzD = nzBuf.getChannelData(0);
  for (let i = 0; i < nzLen; i++) nzD[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.005));
  const nzSrc = ctx.createBufferSource();
  nzSrc.buffer = nzBuf;
  const nzHp = ctx.createBiquadFilter();
  nzHp.type = "highpass";
  nzHp.frequency.value = 6000;
  
  chi.connect(chiG);
  chiG.connect(out);
  nzSrc.connect(nzHp);
  nzHp.connect(out);
  
  chi.start(now);
  chi.stop(now + 0.025);
  nzSrc.start(now);

  // 2. "Chik" - Shutter Closing Snap (Heavier, highly resonant metallic strike)
  const chikT = now + 0.05; // 50ms gap between open and close
  
  // Metallic impact body
  const snap = ctx.createOscillator();
  const snapG = ctx.createGain();
  snap.type = "triangle";
  snap.frequency.setValueAtTime(2500, chikT);
  snap.frequency.exponentialRampToValueAtTime(250, chikT + 0.02); // rapid pitch dive
  snapG.gain.setValueAtTime(1.5, chikT);
  snapG.gain.exponentialRampToValueAtTime(0.0001, chikT + 0.05);
  
  // Dense burst of mid-frequency noise for the mechanical weight
  const nz2Len = Math.floor(ctx.sampleRate * 0.05);
  const nz2Buf = ctx.createBuffer(1, nz2Len, ctx.sampleRate);
  const nz2D = nz2Buf.getChannelData(0);
  for (let i = 0; i < nz2Len; i++) nz2D[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.008));
  const nz2Src = ctx.createBufferSource();
  nz2Src.buffer = nz2Buf;
  const nz2Bp = ctx.createBiquadFilter();
  nz2Bp.type = "bandpass";
  nz2Bp.frequency.value = 2800; // Bright snap layer
  nz2Bp.Q.value = 1.2;
  const nz2G = ctx.createGain();
  nz2G.gain.setValueAtTime(1.8, chikT);
  nz2G.gain.exponentialRampToValueAtTime(0.0001, chikT + 0.05);

  snap.connect(snapG);
  snapG.connect(out);
  nz2Src.connect(nz2Bp);
  nz2Bp.connect(nz2G);
  nz2G.connect(out);
  
  snap.start(chikT);
  snap.stop(chikT + 0.06);
  nz2Src.start(chikT);

  // 3. Very faint, fast mechanical film wind (wzip!)
  const whirT = chikT + 0.03;
  const whirLen = Math.floor(ctx.sampleRate * 0.2);
  const wBuf = ctx.createBuffer(1, whirLen, ctx.sampleRate);
  const wD = wBuf.getChannelData(0);
  for (let i = 0; i < whirLen; i++) {
    const env = 1 - (i / whirLen);
    // Gear tooth simulation
    const gear = 0.5 + 0.5 * Math.sin(i / ctx.sampleRate * Math.PI * 2 * 120);
    wD[i] = (Math.random() * 2 - 1) * env * gear;
  }
  const wSrc = ctx.createBufferSource();
  wSrc.buffer = wBuf;
  const wBp = ctx.createBiquadFilter();
  wBp.type = "bandpass";
  wBp.frequency.setValueAtTime(1200, whirT);
  wBp.frequency.linearRampToValueAtTime(1600, whirT + 0.2); // Winding speeds up slightly
  wBp.Q.value = 3.5;
  const wG = ctx.createGain();
  wG.gain.setValueAtTime(0.0001, whirT);
  wG.gain.linearRampToValueAtTime(0.15, whirT + 0.02);
  wG.gain.linearRampToValueAtTime(0.0001, whirT + 0.2);

  wSrc.connect(wBp);
  wBp.connect(wG);
  wG.connect(out);
  wSrc.start(whirT);
}

export function playPrinterSound() {
  const ctx = getActx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const totalDur = 4.0;
  const burstCount = 28;
  for (let i = 0; i < burstCount; i++) {
    const t = now + (i / burstCount) * totalDur;
    const len = Math.floor(ctx.sampleRate * 0.06);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let j = 0; j < len; j++)
      d[j] = (Math.random() * 2 - 1) * Math.exp(-j / (ctx.sampleRate * 0.018));
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 800 + Math.random() * 600;
    bp.Q.value = 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(1.4, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.055);
    src.connect(bp);
    bp.connect(g);
    g.connect(ctx.destination);
    src.start(t);
    if (i % 3 === 0) {
      const o = ctx.createOscillator();
      const og = ctx.createGain();
      o.type = "sawtooth";
      o.frequency.value = 120 + Math.random() * 80;
      og.gain.setValueAtTime(0.08, t);
      og.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
      o.connect(og);
      og.connect(ctx.destination);
      o.start(t);
      o.stop(t + 0.12);
    }
  }
  const rlen = Math.floor(ctx.sampleRate * totalDur);
  const rbuf = ctx.createBuffer(1, rlen, ctx.sampleRate);
  const rd = rbuf.getChannelData(0);
  for (let i = 0; i < rlen; i++)
    rd[i] = (Math.random() * 2 - 1) * 0.06 * Math.exp(-i / (ctx.sampleRate * 1.2));
  const rsrc = ctx.createBufferSource();
  rsrc.buffer = rbuf;
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 400;
  const rg = ctx.createGain();
  rg.gain.value = 0.5;
  rsrc.connect(lp);
  lp.connect(rg);
  rg.connect(ctx.destination);
  rsrc.start(now);
}

export function playDoorOpen() {
  const ctx = getActx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const out = masterGain(ctx, 1.8); // Add some volume for the scare

  // 1. The screeching hinge (high-pitched groan)
  // A sawtooth wave with pitch slowly bending up, wobbling, then down
  const groan = ctx.createOscillator();
  groan.type = "sawtooth";
  groan.frequency.setValueAtTime(150, now);
  groan.frequency.exponentialRampToValueAtTime(320, now + 0.5); // pitches up
  // Add some eerie pitch wobble
  groan.frequency.linearRampToValueAtTime(290, now + 0.8);
  groan.frequency.linearRampToValueAtTime(350, now + 1.2);
  groan.frequency.exponentialRampToValueAtTime(120, now + 1.8);

  // Deep resonance filter to give it that "hollow wooden mass" feel
  const groanFilter = ctx.createBiquadFilter();
  groanFilter.type = "bandpass";
  groanFilter.frequency.setValueAtTime(600, now);
  groanFilter.frequency.linearRampToValueAtTime(1500, now + 0.8);
  groanFilter.frequency.linearRampToValueAtTime(500, now + 1.8);
  groanFilter.Q.value = 10; // Extremely high resonance for rusty screechiness

  const groanEnv = ctx.createGain();
  groanEnv.gain.setValueAtTime(0.0001, now);
  groanEnv.gain.linearRampToValueAtTime(1.0, now + 0.4);
  groanEnv.gain.linearRampToValueAtTime(0.6, now + 1.2);
  groanEnv.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

  groan.connect(groanFilter);
  groanFilter.connect(groanEnv);
  groanEnv.connect(out);
  groan.start(now);
  groan.stop(now + 2.0);

  // 2. The high-pitched rusty scraping (the "horror" squeal)
  // Very high pitch, slowly dropping like tortured metal
  const screech = ctx.createOscillator();
  screech.type = "triangle";
  screech.frequency.setValueAtTime(2200, now);
  screech.frequency.exponentialRampToValueAtTime(1600, now + 1.0);
  screech.frequency.exponentialRampToValueAtTime(800, now + 1.7);
  
  const srEnv = ctx.createGain();
  srEnv.gain.setValueAtTime(0.0001, now);
  srEnv.gain.linearRampToValueAtTime(0.4, now + 0.5);
  srEnv.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

  screech.connect(srEnv);
  srEnv.connect(out);
  screech.start(now + 0.1); // starts slightly after the initial movement
  screech.stop(now + 1.9);

  // 3. The low-frequency wood knocking (stick-slip friction)
  const stutter = ctx.createOscillator();
  stutter.type = "sawtooth";
  // The frequency is so low it acts as rapid clicking/knocking
  stutter.frequency.setValueAtTime(3, now); 
  stutter.frequency.exponentialRampToValueAtTime(14, now + 0.6);
  stutter.frequency.exponentialRampToValueAtTime(2, now + 1.6);

  const stuttFilter = ctx.createBiquadFilter();
  stuttFilter.type = "lowpass";
  stuttFilter.frequency.value = 350; // Keep it bassy and knocking like heavy wood

  const stEnv = ctx.createGain();
  stEnv.gain.setValueAtTime(0.0001, now);
  stEnv.gain.linearRampToValueAtTime(3.0, now + 0.4); // Pump the knocking volume
  stEnv.gain.exponentialRampToValueAtTime(0.0001, now + 1.7);

  stutter.connect(stuttFilter);
  stuttFilter.connect(stEnv);
  stEnv.connect(out);
  stutter.start(now);
  stutter.stop(now + 1.8);

  // 4. Ghostly white noise friction scraping
  const sr = ctx.sampleRate;
  const nLen = Math.floor(sr * 1.8);
  const nBuf = ctx.createBuffer(1, nLen, sr);
  const nD = nBuf.getChannelData(0);
  for (let i = 0; i < nLen; i++) {
      // Adds a rumbling amplitude modulation
      const chatter = Math.sin((i / sr) * Math.PI * 2 * 12); 
      nD[i] = (Math.random() * 2 - 1) * chatter;
  }
  const nSrc = ctx.createBufferSource();
  nSrc.buffer = nBuf;
  
  const nBp = ctx.createBiquadFilter();
  nBp.type = "bandpass";
  nBp.frequency.value = 1200;
  nBp.Q.value = 1;
  
  const nEnv = ctx.createGain();
  nEnv.gain.setValueAtTime(0.0001, now);
  nEnv.gain.linearRampToValueAtTime(0.3, now + 0.6);
  nEnv.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

  nSrc.connect(nBp);
  nBp.connect(nEnv);
  nEnv.connect(out);
  nSrc.start(now);
}
