export type BoothMode = "ord" | "ann" | "bday";
export type LayoutType = "classic" | "square" | "wide" | "trio" | "duo" | "big-one" | "grid6" | "custom";

/* === Frame style catalog ===
   12 styles per vibe — a mix of 90's flavour, aesthetic minimalism, and gen-z energy.
   Each style is an additive overlay drawn over the base vibe frame. */
export type FrameStyleId =
  // Normal (ord) — paper / sunflower / 90's scrapbook / aesthetic
  | "ord-classic"
  | "ord-washi"
  | "ord-polaroid"
  | "ord-grunge90"
  | "ord-aesthetic"
  | "ord-stickerz"
  | "ord-doodle"
  | "ord-zine"
  | "ord-coffee"
  | "ord-pastel"
  | "ord-newspaper"
  | "ord-y2k"
  // Romance (ann)
  | "ann-classic"
  | "ann-fingerprint"
  | "ann-lace"
  | "ann-loveletter"
  | "ann-rosegold"
  | "ann-pixelhearts"
  | "ann-cinema"
  | "ann-vintage"
  | "ann-sticker"
  | "ann-poetic"
  | "ann-petals"
  | "ann-cottagecore"
  // Birthday (bday)
  | "bday-classic"
  | "bday-balloons"
  | "bday-confetti"
  | "bday-disco"
  | "bday-neon"
  | "bday-cake"
  | "bday-streamers"
  | "bday-pixel"
  | "bday-holographic"
  | "bday-popart"
  | "bday-sprinkles"
  | "bday-stars";

export interface FrameStyleMeta {
  id: FrameStyleId;
  mode: BoothMode;
  label: string;
  era: "90s" | "aesthetic" | "gen-z" | "classic";
  desc: string;
}

export const FRAME_STYLES: FrameStyleMeta[] = [
  // ord
  {
    id: "ord-classic",
    mode: "ord",
    label: "Sunflower Paper",
    era: "classic",
    desc: "Cream paper + sunflower corners",
  },
  {
    id: "ord-washi",
    mode: "ord",
    label: "Washi Tape",
    era: "aesthetic",
    desc: "Pastel washi strips on every edge",
  },
  {
    id: "ord-polaroid",
    mode: "ord",
    label: "Polaroid Stack",
    era: "90s",
    desc: "Big white photo border + scribbles",
  },
  {
    id: "ord-grunge90",
    mode: "ord",
    label: "90s Grunge",
    era: "90s",
    desc: "Halftone dots & marker scrawls",
  },
  {
    id: "ord-aesthetic",
    mode: "ord",
    label: "Aesthetic Beige",
    era: "aesthetic",
    desc: "Minimal beige, thin serifs",
  },
  {
    id: "ord-stickerz",
    mode: "ord",
    label: "Sticker Pack",
    era: "gen-z",
    desc: "Smileys, stars, peace stickers",
  },
  {
    id: "ord-doodle",
    mode: "ord",
    label: "Crayon Doodle",
    era: "gen-z",
    desc: "Hand-drawn crayon scribbles",
  },
  { id: "ord-zine", mode: "ord", label: "Cut-out Zine", era: "90s", desc: "Ransom-letter cutouts" },
  {
    id: "ord-coffee",
    mode: "ord",
    label: "Coffee Stain",
    era: "aesthetic",
    desc: "Coffee rings & dried petals",
  },
  {
    id: "ord-pastel",
    mode: "ord",
    label: "Pastel Cloud",
    era: "gen-z",
    desc: "Cotton-candy clouds + sparkles",
  },
  {
    id: "ord-newspaper",
    mode: "ord",
    label: "Newsprint",
    era: "90s",
    desc: "Halftone strip with headlines",
  },
  {
    id: "ord-y2k",
    mode: "ord",
    label: "Y2K Chrome",
    era: "gen-z",
    desc: "Chrome bubbles & sparkle stars",
  },
  // ann
  {
    id: "ann-classic",
    mode: "ann",
    label: "Fingerprint Hearts",
    era: "classic",
    desc: "Two thumbprints form each heart",
  },
  {
    id: "ann-fingerprint",
    mode: "ann",
    label: "Inked Promise",
    era: "aesthetic",
    desc: "Inkblot fingerprints + vines",
  },
  {
    id: "ann-lace",
    mode: "ann",
    label: "Antique Lace",
    era: "classic",
    desc: "Scalloped lace doily border",
  },
  {
    id: "ann-loveletter",
    mode: "ann",
    label: "Love Letter",
    era: "classic",
    desc: "Wax seals & calligraphy curls",
  },
  {
    id: "ann-rosegold",
    mode: "ann",
    label: "Rose Gold Foil",
    era: "aesthetic",
    desc: "Foil shimmer + tiny roses",
  },
  {
    id: "ann-pixelhearts",
    mode: "ann",
    label: "Pixel Hearts",
    era: "90s",
    desc: "8-bit pixel hearts marquee",
  },
  {
    id: "ann-cinema",
    mode: "ann",
    label: "Old Cinema",
    era: "90s",
    desc: "Film perforation strip + ticket",
  },
  {
    id: "ann-vintage",
    mode: "ann",
    label: "Vintage Sepia",
    era: "aesthetic",
    desc: "Faded sepia & ornate corners",
  },
  {
    id: "ann-sticker",
    mode: "ann",
    label: "Y2K Love",
    era: "gen-z",
    desc: "Chrome hearts + bling sparkle",
  },
  {
    id: "ann-poetic",
    mode: "ann",
    label: "Pressed Flowers",
    era: "aesthetic",
    desc: "Dried roses & cursive lines",
  },
  {
    id: "ann-petals",
    mode: "ann",
    label: "Falling Petals",
    era: "gen-z",
    desc: "Soft pink petals raining down",
  },
  {
    id: "ann-cottagecore",
    mode: "ann",
    label: "Cottagecore",
    era: "aesthetic",
    desc: "Wildflower vines & ribbons",
  },
  // bday
  {
    id: "bday-classic",
    mode: "bday",
    label: "Balloons & Stars",
    era: "classic",
    desc: "Original balloon & confetti mix",
  },
  {
    id: "bday-balloons",
    mode: "bday",
    label: "Balloon Arch",
    era: "classic",
    desc: "Big balloon arch on top",
  },
  {
    id: "bday-confetti",
    mode: "bday",
    label: "Confetti Storm",
    era: "gen-z",
    desc: "Dense confetti everywhere",
  },
  {
    id: "bday-disco",
    mode: "bday",
    label: "Disco Mirror",
    era: "90s",
    desc: "Mirror-ball facets + dots",
  },
  {
    id: "bday-neon",
    mode: "bday",
    label: "Neon Sign",
    era: "90s",
    desc: 'Glowing neon "Happy Bday"',
  },
  {
    id: "bday-cake",
    mode: "bday",
    label: "Cake & Candles",
    era: "classic",
    desc: "Tiered cake + candle row",
  },
  {
    id: "bday-streamers",
    mode: "bday",
    label: "Streamer Party",
    era: "90s",
    desc: "Crepe-paper streamers",
  },
  {
    id: "bday-pixel",
    mode: "bday",
    label: "Arcade 8-bit",
    era: "90s",
    desc: "Pixel cake & retro coins",
  },
  {
    id: "bday-holographic",
    mode: "bday",
    label: "Holographic",
    era: "gen-z",
    desc: "Iridescent foil bursts",
  },
  {
    id: "bday-popart",
    mode: "bday",
    label: "Pop Art",
    era: "90s",
    desc: "Comic dots & burst speech",
  },
  {
    id: "bday-sprinkles",
    mode: "bday",
    label: "Sprinkle Bomb",
    era: "gen-z",
    desc: "Rainbow sprinkles galaxy",
  },
  {
    id: "bday-stars",
    mode: "bday",
    label: "Starry Night",
    era: "aesthetic",
    desc: "Soft midnight + tiny stars",
  },
];

export function getFrameStylesFor(mode: BoothMode): FrameStyleMeta[] {
  return FRAME_STYLES.filter((f) => f.mode === mode);
}

export function getDefaultFrameStyle(mode: BoothMode): FrameStyleId {
  return mode === "ann" ? "ann-classic" : mode === "bday" ? "bday-classic" : "ord-classic";
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SW = 360,
  HDR = 54,
  PAD = 18,
  GAP = 8;
const NOTE_H = 92,
  DATE_H = 34,
  B_PAD = 14;
const PH_CL = 248;
const PH_SQ = Math.floor((SW - PAD * 2 - GAP) / 2);
const PH_W = 180;

function getLayoutInfo(layout: LayoutType, hasNote: boolean, shotCount = 4) {
  const note = hasNote ? NOTE_H : 0;
  const n = Math.max(1, Math.min(10, shotCount)); // Use user's chosen count for all layouts!

  switch (layout) {
    case "classic":
    case "trio": {
      // Stacked strip: scale photo height so n photos fit reasonably
      const photoH = Math.min(PH_CL, Math.floor((SW * 2.8) / Math.max(n, 1)));
      return {
        total: HDR + n * (photoH + GAP) + note + DATE_H + B_PAD,
        photoH,
        numPhotos: n,
      };
    }
    case "wide": {
      // Landscape shots stacked
      const photoH = Math.min(PH_W, Math.floor((SW * 1.6) / Math.max(n, 1)));
      return {
        total: HDR + n * (photoH + GAP) + note + DATE_H + B_PAD,
        photoH,
        numPhotos: n,
      };
    }
    case "square": {
      // 2-column grid: rows = ceil(n/2)
      const rows = Math.ceil(n / 2);
      return {
        total: HDR + rows * (PH_SQ + GAP) + note + DATE_H + B_PAD,
        photoH: PH_SQ,
        numPhotos: n,
      };
    }
    case "duo": {
      const duoH = Math.floor((SW - PAD * 2 - GAP) * 1.1);
      return { total: HDR + duoH + note + DATE_H + B_PAD, photoH: duoH, numPhotos: Math.min(n, 2) };
    }
    case "big-one": {
      const bigH = SW - PAD * 2;
      return { total: HDR + bigH + note + DATE_H + B_PAD, photoH: bigH, numPhotos: 1 };
    }
    case "grid6": {
      // 2-column grid, rows = ceil(n/2)
      const rows = Math.ceil(n / 2);
      const g6H = Math.floor((SW - PAD * 2 - GAP) / 2 * 0.8);
      return {
        total: HDR + rows * (g6H + GAP) + note + DATE_H + B_PAD,
        photoH: g6H,
        numPhotos: n,
      };
    }
    case "custom": {
      const photoH = Math.min(PH_CL, Math.floor((SW * 2.8) / Math.max(n, 1)));
      return {
        total: HDR + n * (photoH + GAP) + note + DATE_H + B_PAD,
        photoH,
        numPhotos: n,
      };
    }
  }
}

export function getNumPhotos(layout: LayoutType, shotCount = 4): number {
  return getLayoutInfo(layout, false, shotCount).numPhotos;
}

function rrClip(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
  ctx.clip();
}

function rrFill(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
  ctx.fill();
}

async function loadImage(url: string): Promise<HTMLImageElement | null> {
  return new Promise((res) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = () => res(null);
    img.src = url;
  });
}

async function drawSlot(
  ctx: CanvasRenderingContext2D,
  url: string,
  x: number,
  y: number,
  w: number,
  h: number,
  num: number,
  bC: string,
) {
  const img = await loadImage(url);
  if (!img) return;
  ctx.save();
  rrClip(ctx, x, y, w, h, 6);
  const ia = img.width / img.height,
    sa = w / h;
  let sx: number, sy: number, sw: number, sh: number;
  if (ia > sa) {
    sh = img.height;
    sw = sh * sa;
    sx = (img.width - sw) / 2;
    sy = 0;
  } else {
    sw = img.width;
    sh = sw / sa;
    sx = 0;
    sy = (img.height - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
  ctx.restore();
  // thin inner border
  ctx.save();
  ctx.strokeStyle = "rgba(0,0,0,.18)";
  ctx.lineWidth = 1;
  ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
  ctx.restore();
  // tiny corner number badge
  ctx.save();
  ctx.fillStyle = "rgba(255,255,255,.85)";
  ctx.beginPath();
  ctx.arc(x + w - 12, y + 12, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = bC;
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.fillStyle = bC;
  ctx.font = "bold 12px Caveat,cursive";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(String(num), x + w - 12, y + 12);
  ctx.restore();
}

/* === Photo "tape" corners (for ord paper-glued look) === */
function drawTape(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  angle: number,
) {
  ctx.save();
  ctx.translate(x + w / 2, y + h / 2);
  ctx.rotate(angle);
  ctx.fillStyle = "rgba(245,225,150,.7)";
  ctx.strokeStyle = "rgba(160,130,40,.4)";
  ctx.lineWidth = 0.8;
  ctx.fillRect(-w / 2, -h / 2, w, h);
  ctx.strokeRect(-w / 2, -h / 2, w, h);
  ctx.restore();
}

/* === Sunflower SVG (detailed) === */
function sunflowerSVG(cx: number, cy: number, r: number) {
  const petals = 12;
  let p = "";
  for (let i = 0; i < petals; i++) {
    const a = (i / petals) * Math.PI * 2;
    const px = cx + Math.cos(a) * r * 0.55;
    const py = cy + Math.sin(a) * r * 0.55;
    p += `<ellipse cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" rx="${(r * 0.42).toFixed(1)}" ry="${(r * 0.22).toFixed(1)}" fill="#F2C04A" stroke="#A6741A" stroke-width="1" transform="rotate(${((a * 180) / Math.PI).toFixed(1)} ${px.toFixed(1)} ${py.toFixed(1)})" opacity=".95"/>`;
  }
  // inner brown disk with seeds pattern
  p += `<circle cx="${cx}" cy="${cy}" r="${(r * 0.32).toFixed(1)}" fill="#5A3008" stroke="#2A1404" stroke-width="1.2"/>`;
  for (let i = 0; i < 8; i++) {
    const sa = (i / 8) * Math.PI * 2;
    const sx = cx + Math.cos(sa) * r * 0.18;
    const sy = cy + Math.sin(sa) * r * 0.18;
    p += `<circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="1.4" fill="#3A1804"/>`;
  }
  return p;
}

function leafSVG(cx: number, cy: number, r: number, rot: number) {
  return `<g transform="translate(${cx} ${cy}) rotate(${rot})"><path d="M0 0 Q${r * 0.6} ${-r * 0.4} ${r} 0 Q${r * 0.6} ${r * 0.4} 0 0Z" fill="#5A8A40" stroke="#2A5418" stroke-width="1"/><path d="M${r * 0.15} 0 L${r * 0.85} 0" stroke="#2A5418" stroke-width=".8" fill="none"/></g>`;
}

/* Ord: paper texture + sunflower border */
function ordFrameSVG(sw: number, total: number) {
  let o = "";
  // four big sunflowers in corners
  const corners: [number, number, number][] = [
    [18, 22, 16],
    [sw - 18, 22, 16],
    [18, total - 22, 16],
    [sw - 18, total - 22, 16],
  ];
  corners.forEach(([x, y, r]) => {
    o += leafSVG(x - 8, y + 6, 14, 30);
    o += leafSVG(x + 8, y - 4, 12, -45);
    o += sunflowerSVG(x, y, r);
  });
  // medium sunflowers mid edges
  const mids: [number, number, number][] = [
    [sw / 2, 18, 11],
    [18, total / 2, 10],
    [sw - 18, total / 2, 10],
    [sw / 2, total - 18, 11],
  ];
  mids.forEach(([x, y, r]) => (o += sunflowerSVG(x, y, r)));
  // small buds along edges
  const buds: [number, number][] = [
    [sw * 0.25, 14],
    [sw * 0.75, 14],
    [sw * 0.25, total - 14],
    [sw * 0.75, total - 14],
    [10, total * 0.3],
    [sw - 10, total * 0.3],
    [10, total * 0.7],
    [sw - 10, total * 0.7],
  ];
  buds.forEach(([x, y]) => {
    o += `<circle cx="${x}" cy="${y}" r="3" fill="#F2C04A" stroke="#A6741A" stroke-width=".8"/>`;
    o += `<circle cx="${x}" cy="${y}" r="1.2" fill="#5A3008"/>`;
  });
  return o;
}

/* Ann: heart made of two fingerprint halves */
function annFrameSVG(sw: number, total: number) {
  // we draw decorative fingerprint hearts at corners + as edge motifs
  const fingerprint = (cx: number, cy: number, r: number, color: string, side: 1 | -1) => {
    // half-heart fingerprint = concentric arcs forming fingerprint loops on a heart half
    let g = `<g transform="translate(${cx} ${cy})">`;
    // heart half outline (mirror via side)
    const x = side > 0 ? "" : " scale(-1 1)";
    g += `<g transform="${x}">`;
    // outer half-heart
    g += `<path d="M0 ${r * 0.8} Q${-r} ${r * 0.2} ${-r} ${-r * 0.25} Q${-r} ${-r * 0.85} ${-r * 0.45} ${-r * 0.85} Q${-r * 0.12} ${-r * 0.85} 0 ${-r * 0.35}Z" fill="${color}" stroke="#5A0A1A" stroke-width="1.2" opacity=".92"/>`;
    // fingerprint loops (white lines)
    for (let i = 1; i <= 4; i++) {
      const k = i / 5;
      g += `<path d="M${-r * 0.15 * k} ${r * 0.55 * k} Q${-r * 0.85 * k} ${r * 0.1 * k} ${-r * 0.85 * k} ${-r * 0.25 * k} Q${-r * 0.85 * k} ${-r * 0.75 * k} ${-r * 0.4 * k} ${-r * 0.75 * k} Q${-r * 0.12 * k} ${-r * 0.75 * k} 0 ${-r * 0.3 * k}" fill="none" stroke="rgba(255,255,255,.55)" stroke-width=".9" stroke-linecap="round"/>`;
    }
    g += "</g></g>";
    return g;
  };
  const pairHeart = (cx: number, cy: number, r: number, c1: string, c2: string) => {
    return fingerprint(cx, cy, r, c1, 1) + fingerprint(cx, cy, r, c2, -1);
  };

  let o = "";
  // corners — large fingerprint hearts
  const corners: [number, number][] = [
    [20, 24],
    [sw - 20, 24],
    [20, total - 24],
    [sw - 20, total - 24],
  ];
  corners.forEach(([x, y]) => (o += pairHeart(x, y, 16, "#C43860", "#9A2A4A")));
  // mid edges
  o += pairHeart(sw / 2, 18, 12, "#E04878", "#B82A56");
  o += pairHeart(sw / 2, total - 18, 12, "#E04878", "#B82A56");
  o += pairHeart(12, total / 2, 11, "#D8487A", "#A8285C");
  o += pairHeart(sw - 12, total / 2, 11, "#D8487A", "#A8285C");
  // tiny scattered hearts
  const tiny: [number, number][] = [
    [sw * 0.25, 12],
    [sw * 0.75, 12],
    [sw * 0.25, total - 12],
    [sw * 0.75, total - 12],
    [10, total * 0.3],
    [sw - 10, total * 0.3],
    [10, total * 0.7],
    [sw - 10, total * 0.7],
  ];
  tiny.forEach(([x, y]) => (o += pairHeart(x, y, 6, "#F06898", "#C84878")));
  // dashed romantic vine
  o += `<path d="M30 ${total * 0.15} Q${sw / 2} ${total * 0.1} ${sw - 30} ${total * 0.15}" fill="none" stroke="#9A2A4A" stroke-width="1" stroke-dasharray="3 3" opacity=".5"/>`;
  o += `<path d="M30 ${total * 0.85} Q${sw / 2} ${total * 0.9} ${sw - 30} ${total * 0.85}" fill="none" stroke="#9A2A4A" stroke-width="1" stroke-dasharray="3 3" opacity=".5"/>`;
  return o;
}

/* Bday: balloons + confetti */
function bdayFrameSVG(sw: number, total: number) {
  let o = "";
  const balloon = (cx: number, cy: number, r: number, f: string, s: string) =>
    `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r * 1.25}" fill="${f}" stroke="${s}" stroke-width="1.5" opacity=".95"/>` +
    `<path d="M${cx} ${cy + r * 1.25} Q${cx + 3} ${cy + r * 1.6} ${cx} ${cy + r * 2}" fill="none" stroke="${s}" stroke-width="1.2"/>` +
    `<ellipse cx="${cx - r * 0.3}" cy="${cy - r * 0.4}" rx="${r * 0.15}" ry="${r * 0.25}" fill="rgba(255,255,255,.5)"/>`;
  const palette: [string, string][] = [
    ["#C43060", "#7A1030"],
    ["#2A78A0", "#0A3878"],
    ["#7038A8", "#3818A8"],
    ["#D04070", "#8A1040"],
    ["#C07018", "#7A3800"],
    ["#E0A828", "#A87018"],
  ];
  const corners: [number, number][] = [
    [20, 28],
    [sw - 20, 28],
    [20, total - 28],
    [sw - 20, total - 28],
  ];
  corners.forEach(([x, y], i) => {
    const [f, s] = palette[i % palette.length];
    o += balloon(x, y, 13, f, s);
  });
  // top arc balloons
  for (let i = 0; i < 5; i++) {
    const x = 50 + (i * (sw - 100)) / 4;
    const y = 18 + Math.sin(i * 0.9) * 6;
    const [f, s] = palette[(i + 2) % palette.length];
    o += balloon(x, y, 9, f, s);
  }
  // confetti
  for (let i = 0; i < 18; i++) {
    const x = 10 + Math.random() * (sw - 20);
    const y = 60 + Math.random() * (total - 120);
    const [f] = palette[i % palette.length];
    const rot = Math.floor(Math.random() * 80 - 40);
    o += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="6" height="3" rx="1" fill="${f}" opacity=".7" transform="rotate(${rot} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
  }
  // stars
  const starPts = (cx: number, cy: number, r: number) => {
    const pts: string[] = [];
    for (let i = 0; i < 5; i++) {
      const a = (i * Math.PI * 2) / 5 - Math.PI / 2;
      pts.push(`${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`);
      const b = a + Math.PI / 5;
      pts.push(`${cx + Math.cos(b) * r * 0.4},${cy + Math.sin(b) * r * 0.4}`);
    }
    return pts.join(" ");
  };
  [
    [sw * 0.15, total - 22],
    [sw * 0.85, total - 22],
    [sw / 2, total - 22],
  ].forEach(
    ([x, y]) =>
      (o += `<polygon points="${starPts(x, y, 7)}" fill="#F0D040" stroke="#A88018" stroke-width="1"/>`),
  );
  return o;
}

async function drawFrameDecoration(
  ctx: CanvasRenderingContext2D,
  sw: number,
  total: number,
  mode: BoothMode,
  style?: FrameStyleId,
) {
  let svgInner = "";
  
  // Decide whether to show base mode decoration based on style
  const showBase = !style || style.includes("-classic") || style === "ord-polaroid" || style === "ann-vintage" || style === "bday-balloons";
  
  if (showBase) {
    if (mode === "ann") svgInner = annFrameSVG(sw, total);
    else if (mode === "bday") svgInner = bdayFrameSVG(sw, total);
    else svgInner = ordFrameSVG(sw, total);
  }
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${sw}" height="${total}" viewBox="0 0 ${sw} ${total}">${svgInner}</svg>`;
  const blob = new Blob([svgStr], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const img = await loadImage(url);
  if (img) ctx.drawImage(img, 0, 0, sw, total);
  URL.revokeObjectURL(url);
}

/* ====================== STYLE OVERLAYS ====================== */
/* Each overlay returns the inner SVG markup for the style on top of the base vibe frame. */

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

function styleOverlaySVG(style: FrameStyleId, sw: number, total: number): string {
  const r = rng(style.length * 31 + sw + total);
  let o = "";

  /* ---------- ORD STYLES ---------- */
  if (style === "ord-classic") return "";

  if (style === "ord-washi") {
    const tape = (
      x: number,
      y: number,
      w: number,
      h: number,
      rot: number,
      c1: string,
      c2: string,
    ) =>
      `<g transform="translate(${x} ${y}) rotate(${rot})"><rect x="0" y="0" width="${w}" height="${h}" fill="${c1}" opacity=".82"/><rect x="0" y="0" width="${w}" height="${h}" fill="url(#wp${Math.floor(rot)})"/><rect x="0" y="0" width="${w}" height="${h}" fill="none" stroke="${c2}" stroke-width=".6" opacity=".5"/></g>`;
    o += `<defs><pattern id="wp1" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1" fill="#fff" opacity=".4"/></pattern></defs>`;
    o += tape(8, 6, 70, 14, -8, "#F4B6C8", "#A24868");
    o += tape(sw - 78, 4, 76, 14, 6, "#A8D8E8", "#3878A0");
    o += tape(-6, total - 22, 90, 14, 4, "#F4D480", "#A86810");
    o += tape(sw - 80, total - 24, 86, 16, -7, "#C8E0A8", "#5A8838");
    return o;
  }

  if (style === "ord-polaroid") {
    // big white border vibe — draw white inner padding rectangles around photo region as scribbled marker
    o += `<rect x="6" y="42" width="${sw - 12}" height="${total - 84}" fill="none" stroke="#fff" stroke-width="6" opacity=".55"/>`;
    o += `<text x="${sw / 2}" y="${total - 6}" text-anchor="middle" font-family="Caveat,cursive" font-size="14" fill="#5A3008" opacity=".7">~ memories ~</text>`;
    return o;
  }

  if (style === "ord-grunge90") {
    // halftone dots and marker scrawls
    for (let i = 0; i < 280; i++) {
      const x = r() * sw,
        y = r() * total;
      const rad = 0.6 + r() * 1.6;
      o += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${rad.toFixed(1)}" fill="#5A3008" opacity=".25"/>`;
    }
    o += `<path d="M10 30 Q${sw / 2} 18 ${sw - 10} 30" fill="none" stroke="#C43020" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>`;
    o += `<text x="14" y="${total - 24}" font-family="Permanent Marker,Caveat,cursive" font-size="18" fill="#1A1A1A" opacity=".7" transform="rotate(-4 14 ${total - 24})">RAD ✶</text>`;
    return o;
  }

  if (style === "ord-aesthetic") {
    o += `<rect x="10" y="10" width="${sw - 20}" height="${total - 20}" fill="none" stroke="#8A6840" stroke-width=".8" opacity=".55"/>`;
    o += `<rect x="14" y="14" width="${sw - 28}" height="${total - 28}" fill="none" stroke="#8A6840" stroke-width=".4" opacity=".4"/>`;
    o += `<text x="${sw / 2}" y="${total - 4}" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#6A4818" letter-spacing="3" opacity=".7">M E M O I R</text>`;
    return o;
  }

  if (style === "ord-stickerz") {
    const stickers = ["☺", "★", "✿", "♥", "✌", "☀", "✧"];
    const colors = ["#F4B43C", "#E04878", "#48A8C8", "#7AC840", "#C870D8", "#F0903C"];
    for (let i = 0; i < 14; i++) {
      const x = 10 + r() * (sw - 20),
        y = 10 + r() * (total - 20);
      const rot = (r() - 0.5) * 40;
      const c = colors[Math.floor(r() * colors.length)];
      o += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(1)})"><circle r="9" fill="#fff" stroke="${c}" stroke-width="1.5"/><text text-anchor="middle" dominant-baseline="middle" font-size="10" fill="${c}" font-weight="700">${stickers[Math.floor(r() * stickers.length)]}</text></g>`;
    }
    return o;
  }

  if (style === "ord-doodle") {
    const colors = ["#C43020", "#F4A030", "#48A848", "#3878C8", "#A848B0"];
    for (let i = 0; i < 18; i++) {
      const x = r() * sw,
        y = r() * total;
      const c = colors[i % colors.length];
      const len = 8 + r() * 14;
      const a = r() * Math.PI;
      o += `<path d="M${x.toFixed(1)} ${y.toFixed(1)} q${(Math.cos(a) * len * 0.5).toFixed(1)} ${(-len * 0.3).toFixed(1)} ${(Math.cos(a) * len).toFixed(1)} 0" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".7"/>`;
    }
    // hand-drawn frame
    o += `<rect x="6" y="6" width="${sw - 12}" height="${total - 12}" fill="none" stroke="#5A3008" stroke-width="2.5" stroke-dasharray="6 3" opacity=".55"/>`;
    return o;
  }

  if (style === "ord-zine") {
    const letters = ["B", "L", "I", "S", "S", "!", "X", "O"];
    for (let i = 0; i < letters.length; i++) {
      const x = 14 + i * ((sw - 28) / letters.length);
      const y = i % 2 === 0 ? 26 : total - 22;
      const rot = (r() - 0.5) * 30;
      const bg = ["#F0E040", "#F08070", "#80C8E8", "#C0E090", "#E0A0F0"][i % 5];
      o += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(1)})"><rect x="-9" y="-10" width="18" height="20" fill="${bg}" stroke="#1A1A1A" stroke-width="1"/><text text-anchor="middle" dominant-baseline="middle" font-family="Times,serif" font-weight="900" font-size="16" fill="#1A1A1A">${letters[i]}</text></g>`;
    }
    return o;
  }

  if (style === "ord-coffee") {
    // coffee rings
    [
      [24, 32, 16],
      [sw - 24, total - 30, 18],
      [sw - 30, 38, 12],
      [22, total - 26, 14],
    ].forEach(([cx, cy, rd]) => {
      o += `<circle cx="${cx}" cy="${cy}" r="${rd}" fill="none" stroke="#5A3008" stroke-width="2.5" opacity=".25"/>`;
      o += `<circle cx="${cx}" cy="${cy}" r="${(rd as number) - 1.5}" fill="none" stroke="#5A3008" stroke-width="1" opacity=".18"/>`;
    });
    // dried petals
    for (let i = 0; i < 5; i++) {
      const x = 12 + r() * (sw - 24),
        y = 12 + r() * (total - 24);
      const rot = r() * 360;
      o += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(0)})"><ellipse rx="6" ry="2.5" fill="#C46838" opacity=".5"/></g>`;
    }
    return o;
  }

  if (style === "ord-pastel") {
    // cloud puffs
    const cloud = (cx: number, cy: number, sc: number) =>
      `<g transform="translate(${cx} ${cy}) scale(${sc})"><circle cx="-8" cy="0" r="6" fill="#fff" opacity=".85"/><circle cx="0" cy="-3" r="8" fill="#fff" opacity=".9"/><circle cx="8" cy="0" r="6" fill="#fff" opacity=".85"/><circle cx="0" cy="3" r="6" fill="#fff" opacity=".85"/></g>`;
    o +=
      cloud(28, 30, 1.1) +
      cloud(sw - 28, 30, 0.9) +
      cloud(20, total - 30, 0.8) +
      cloud(sw - 22, total - 32, 1);
    for (let i = 0; i < 14; i++) {
      const x = r() * sw,
        y = r() * total;
      o += `<path d="M${x} ${y} l2 -2 l2 2 l-2 2 z" fill="#F8C8E0" opacity=".7"/>`;
    }
    return o;
  }

  if (style === "ord-newspaper") {
    o += `<rect x="0" y="0" width="${sw}" height="22" fill="#1A1A1A"/>`;
    o += `<text x="${sw / 2}" y="15" text-anchor="middle" font-family="Times,serif" font-weight="900" font-size="13" fill="#fff" letter-spacing="1">★ THE DAILY MOMENT ★</text>`;
    o += `<rect x="0" y="${total - 18}" width="${sw}" height="18" fill="#1A1A1A"/>`;
    o += `<text x="${sw / 2}" y="${total - 6}" text-anchor="middle" font-family="Times,serif" font-size="9" fill="#fff" letter-spacing="2">— EXTRA EDITION —</text>`;
    // halftone dots column
    for (let i = 0; i < 100; i++) {
      const x = r() * sw,
        y = 24 + r() * (total - 46);
      o += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r=".7" fill="#1A1A1A" opacity=".25"/>`;
    }
    return o;
  }

  if (style === "ord-y2k") {
    const colors = ["#A8E0F8", "#F8B0E0", "#C8B0F8", "#F8D880"];
    for (let i = 0; i < 22; i++) {
      const x = r() * sw,
        y = r() * total;
      const rd = 3 + r() * 7;
      const c = colors[i % colors.length];
      o += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${rd.toFixed(1)}" fill="${c}" opacity=".55"/>`;
      o += `<circle cx="${(x - rd / 3).toFixed(1)}" cy="${(y - rd / 3).toFixed(1)}" r="${(rd / 3).toFixed(1)}" fill="#fff" opacity=".7"/>`;
    }
    // sparkle stars
    [
      [18, 16],
      [sw - 18, 16],
      [18, total - 16],
      [sw - 18, total - 16],
    ].forEach(([x, y]) => {
      o += `<path d="M${x} ${y - 6} L${x + 1.5} ${y - 1.5} L${x + 6} ${y} L${x + 1.5} ${y + 1.5} L${x} ${y + 6} L${x - 1.5} ${y + 1.5} L${x - 6} ${y} L${x - 1.5} ${y - 1.5} Z" fill="#fff" stroke="#C8B0F8" stroke-width="1"/>`;
    });
    return o;
  }

  /* ---------- ANN STYLES ---------- */
  if (style === "ann-classic") return "";

  if (style === "ann-fingerprint") {
    // ink blot fingerprints with vines
    for (let i = 0; i < 6; i++) {
      const x = 18 + r() * (sw - 36),
        y = 18 + r() * (total - 36);
      o += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})">`;
      for (let k = 1; k <= 5; k++) {
        o += `<ellipse rx="${k * 1.6}" ry="${k * 2}" fill="none" stroke="#5A0820" stroke-width=".8" opacity=".55"/>`;
      }
      o += `</g>`;
    }
    o += `<path d="M10 ${total / 2} q40 -30 ${sw - 20} 0" fill="none" stroke="#7A1A38" stroke-width="1" stroke-dasharray="2 3" opacity=".5"/>`;
    return o;
  }

  if (style === "ann-lace") {
    // scalloped lace edges
    const scallop = (y: number, dir: 1 | -1) => {
      let p = `M0 ${y} `;
      const n = 24;
      for (let i = 0; i <= n; i++) {
        const x = (i / n) * sw;
        p += `L${x.toFixed(1)} ${y} `;
        if (i < n) {
          const cx = x + sw / n / 2;
          const cy = y + dir * 5;
          p += `Q${cx.toFixed(1)} ${cy.toFixed(1)} ${(x + sw / n).toFixed(1)} ${y} `;
        }
      }
      return `<path d="${p}" fill="none" stroke="#9A2A4A" stroke-width="1.2" opacity=".7"/>`;
    };
    o += scallop(8, 1) + scallop(total - 8, -1);
    // tiny loops
    for (let i = 0; i < sw; i += 12) {
      o += `<circle cx="${i}" cy="14" r="1.4" fill="#9A2A4A" opacity=".5"/>`;
      o += `<circle cx="${i}" cy="${total - 14}" r="1.4" fill="#9A2A4A" opacity=".5"/>`;
    }
    return o;
  }

  if (style === "ann-loveletter") {
    // wax seals at corners
    const wax = (cx: number, cy: number) =>
      `<circle cx="${cx}" cy="${cy}" r="11" fill="#A02038" stroke="#5A0818" stroke-width="1.5"/>` +
      `<text x="${cx}" y="${cy + 3.5}" text-anchor="middle" font-family="Georgia,serif" font-weight="900" font-size="11" fill="#fff">♥</text>`;
    [
      [18, 22],
      [sw - 18, 22],
      [18, total - 22],
      [sw - 18, total - 22],
    ].forEach(([x, y]) => (o += wax(x, y)));
    o += `<text x="${sw / 2}" y="${total - 4}" text-anchor="middle" font-family="Caveat,cursive" font-style="italic" font-size="11" fill="#7A1A38" opacity=".75">~ to my dearest ~</text>`;
    return o;
  }

  if (style === "ann-rosegold") {
    // foil shimmer + tiny roses
    for (let i = 0; i < 18; i++) {
      const x = r() * sw,
        y = r() * total;
      o += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})"><circle r="3" fill="#E8B098" stroke="#A85838" stroke-width=".6"/><circle r="1.4" fill="#A03048"/></g>`;
    }
    o += `<rect x="3" y="3" width="${sw - 6}" height="${total - 6}" fill="none" stroke="#C88068" stroke-width="1" opacity=".7"/>`;
    return o;
  }

  if (style === "ann-pixelhearts") {
    // marquee of pixel hearts
    const px = (cx: number, cy: number, c: string) =>
      `<g transform="translate(${cx - 6} ${cy - 5})">` +
      `<rect x="0" y="2" width="2" height="2" fill="${c}"/><rect x="2" y="0" width="2" height="2" fill="${c}"/><rect x="4" y="2" width="2" height="2" fill="${c}"/><rect x="6" y="0" width="2" height="2" fill="${c}"/><rect x="8" y="2" width="2" height="2" fill="${c}"/>` +
      `<rect x="0" y="4" width="10" height="2" fill="${c}"/>` +
      `<rect x="2" y="6" width="6" height="2" fill="${c}"/>` +
      `<rect x="4" y="8" width="2" height="2" fill="${c}"/>` +
      `</g>`;
    const cs = ["#E04878", "#F0A0C0", "#A82858"];
    for (let i = 0; i < 24; i++) {
      const x = 10 + (i % 12) * ((sw - 20) / 11);
      const y = i < 12 ? 12 : total - 12;
      o += px(x, y, cs[i % cs.length]);
    }
    return o;
  }

  if (style === "ann-cinema") {
    // film perforation strips along sides
    o += `<rect x="0" y="0" width="14" height="${total}" fill="#1A1A1A" opacity=".88"/>`;
    o += `<rect x="${sw - 14}" y="0" width="14" height="${total}" fill="#1A1A1A" opacity=".88"/>`;
    for (let y = 8; y < total - 6; y += 12) {
      o += `<rect x="3" y="${y}" width="8" height="6" rx="1" fill="#FCEBEF"/>`;
      o += `<rect x="${sw - 11}" y="${y}" width="8" height="6" rx="1" fill="#FCEBEF"/>`;
    }
    o += `<text x="${sw / 2}" y="${total - 4}" text-anchor="middle" font-family="Courier,monospace" font-size="10" fill="#9A2A4A" letter-spacing="2">SCENE 01 — TAKE ∞</text>`;
    return o;
  }

  if (style === "ann-vintage") {
    // sepia overlay + ornate corners
    o += `<rect x="0" y="0" width="${sw}" height="${total}" fill="#8A5828" opacity=".12"/>`;
    const corner = (x: number, y: number, sx: number, sy: number) =>
      `<g transform="translate(${x} ${y}) scale(${sx} ${sy})"><path d="M0 0 q14 0 14 14 M0 0 q0 14 14 14" fill="none" stroke="#7A1A38" stroke-width="1.4"/><circle cx="3" cy="3" r="1.5" fill="#7A1A38"/></g>`;
    o +=
      corner(8, 8, 1, 1) +
      corner(sw - 8, 8, -1, 1) +
      corner(8, total - 8, 1, -1) +
      corner(sw - 8, total - 8, -1, -1);
    return o;
  }

  if (style === "ann-sticker") {
    // chrome y2k hearts
    for (let i = 0; i < 9; i++) {
      const x = 14 + r() * (sw - 28),
        y = 14 + r() * (total - 28);
      const rot = (r() - 0.5) * 30;
      o += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(1)})">`;
      o += `<defs><radialGradient id="ch${i}"><stop offset="0%" stop-color="#FCD8E8"/><stop offset="60%" stop-color="#E04878"/><stop offset="100%" stop-color="#7A1838"/></radialGradient></defs>`;
      o += `<path d="M0 4 q-7 -8 -7 -2 q0 -7 7 -7 q7 0 7 7 q0 -6 -7 2 z" fill="url(#ch${i})" stroke="#3A0818" stroke-width=".8"/>`;
      o += `</g>`;
    }
    return o;
  }

  if (style === "ann-poetic") {
    // pressed flowers
    for (let i = 0; i < 7; i++) {
      const x = 16 + r() * (sw - 32),
        y = 16 + r() * (total - 32);
      const rot = r() * 360;
      o += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(0)})">`;
      for (let k = 0; k < 5; k++) {
        const a = (k / 5) * Math.PI * 2;
        o += `<ellipse cx="${(Math.cos(a) * 3).toFixed(1)}" cy="${(Math.sin(a) * 3).toFixed(1)}" rx="3" ry="1.5" fill="#C46888" opacity=".75" transform="rotate(${((a * 180) / Math.PI).toFixed(0)})"/>`;
      }
      o += `<circle r="1.5" fill="#7A2840"/></g>`;
    }
    o += `<path d="M10 ${total / 2 + 6} q${sw / 2} -10 ${sw - 20} 0" fill="none" stroke="#9A2A4A" stroke-width=".8" opacity=".4"/>`;
    return o;
  }

  if (style === "ann-petals") {
    for (let i = 0; i < 26; i++) {
      const x = r() * sw,
        y = r() * total;
      const rot = r() * 360;
      o += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(0)})"><path d="M0 0 q3 -4 0 -8 q-3 4 0 8z" fill="#F4B0C8" opacity=".75"/></g>`;
    }
    return o;
  }

  if (style === "ann-cottagecore") {
    // wildflower vine
    o += `<path d="M6 ${total / 2} q${sw / 4} -${total / 4} ${sw / 2} 0 t${sw / 2} 0" fill="none" stroke="#5A8838" stroke-width="1.4" opacity=".7"/>`;
    for (let i = 0; i < 9; i++) {
      const t = i / 8;
      const x = 6 + t * (sw - 12);
      const y = total / 2 + (Math.sin(t * Math.PI * 2) * total) / 8;
      o += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="#F4B0C8" stroke="#9A2A4A" stroke-width=".6"/>`;
      o += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1" fill="#F4D880"/>`;
    }
    o += `<path d="M${sw / 2 - 8} 4 q8 4 16 0 q-2 8 -8 8 q-6 0 -8 -8z" fill="#C43868" opacity=".75"/>`;
    return o;
  }

  /* ---------- BDAY STYLES ---------- */
  if (style === "bday-classic") return "";

  if (style === "bday-balloons") {
    const balloon = (cx: number, cy: number, rad: number, c: string) =>
      `<ellipse cx="${cx}" cy="${cy}" rx="${rad}" ry="${rad * 1.25}" fill="${c}" stroke="#1A1A1A" stroke-width=".8"/><line x1="${cx}" y1="${cy + rad * 1.25}" x2="${cx}" y2="${cy + rad * 2.5}" stroke="#1A1A1A" stroke-width=".7"/>`;
    const cs = ["#E04060", "#48A8E0", "#F0A040", "#7048C8", "#48C880"];
    for (let i = 0; i < 9; i++) {
      const x = 12 + i * ((sw - 24) / 8);
      const y = 12 + Math.sin(i) * 4;
      o += balloon(x, y, 7 + (i % 2) * 2, cs[i % cs.length]);
    }
    return o;
  }

  if (style === "bday-confetti") {
    const cs = ["#E04060", "#48A8E0", "#F0A040", "#7048C8", "#48C880", "#F0D040"];
    for (let i = 0; i < 60; i++) {
      const x = r() * sw,
        y = r() * total;
      const rot = r() * 90;
      const c = cs[i % cs.length];
      const shape = i % 3;
      if (shape === 0)
        o += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="5" height="2.5" fill="${c}" transform="rotate(${rot.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
      else if (shape === 1)
        o += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.5" fill="${c}"/>`;
      else o += `<path d="M${x.toFixed(1)} ${y.toFixed(1)} l3 0 l-1.5 3 z" fill="${c}"/>`;
    }
    return o;
  }

  if (style === "bday-disco") {
    // mirror facets
    for (let i = 0; i < 28; i++) {
      const x = r() * sw,
        y = r() * total;
      const sz = 4 + r() * 5;
      const shade = Math.floor(120 + r() * 120);
      o += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${sz.toFixed(1)}" height="${sz.toFixed(1)}" fill="rgb(${shade},${shade},${shade + 30})" opacity=".7"/>`;
    }
    o += `<circle cx="${sw / 2}" cy="20" r="14" fill="#3A3A4A" stroke="#1A1A2A" stroke-width="1"/>`;
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      o += `<rect x="${(sw / 2 + Math.cos(a) * 7 - 2).toFixed(1)}" y="${(20 + Math.sin(a) * 7 - 2).toFixed(1)}" width="4" height="4" fill="#fff" opacity=".7"/>`;
    }
    return o;
  }

  if (style === "bday-neon") {
    // neon glow text
    o += `<defs><filter id="ng" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2"/></filter></defs>`;
    o += `<text x="${sw / 2}" y="22" text-anchor="middle" font-family="Caveat,cursive" font-weight="900" font-size="22" fill="#F060B8" filter="url(#ng)">Happy Bday</text>`;
    o += `<text x="${sw / 2}" y="22" text-anchor="middle" font-family="Caveat,cursive" font-weight="900" font-size="22" fill="#fff">Happy Bday</text>`;
    o += `<text x="${sw / 2}" y="${total - 6}" text-anchor="middle" font-family="Caveat,cursive" font-weight="900" font-size="14" fill="#48E8F0" filter="url(#ng)">★ shine on ★</text>`;
    return o;
  }

  if (style === "bday-cake") {
    // tiered cake at bottom
    const cx = sw / 2,
      by = total - 30;
    o += `<rect x="${cx - 30}" y="${by}" width="60" height="14" fill="#F8C8D8" stroke="#7A1A38" stroke-width="1"/>`;
    o += `<rect x="${cx - 22}" y="${by - 12}" width="44" height="12" fill="#FCE8B8" stroke="#7A4818" stroke-width="1"/>`;
    o += `<rect x="${cx - 14}" y="${by - 22}" width="28" height="10" fill="#F8B0C0" stroke="#7A1A38" stroke-width="1"/>`;
    for (let i = 0; i < 3; i++) {
      const x = cx - 8 + i * 8;
      o += `<rect x="${x - 1}" y="${by - 30}" width="2" height="8" fill="#F0A040"/>`;
      o += `<path d="M${x} ${by - 32} q-1.5 -3 0 -5 q1.5 2 0 5z" fill="#F0D040"/>`;
    }
    return o;
  }

  if (style === "bday-streamers") {
    const cs = ["#E04060", "#48A8E0", "#F0A040", "#7048C8"];
    for (let i = 0; i < 6; i++) {
      const c = cs[i % cs.length];
      const x = (i + 1) * (sw / 7);
      o += `<path d="M${x} 6 q-12 ${total / 4} 0 ${total / 2} t0 ${total / 2 - 6}" fill="none" stroke="${c}" stroke-width="2.5" stroke-dasharray="6 3" opacity=".7"/>`;
    }
    return o;
  }

  if (style === "bday-pixel") {
    // pixel cake
    const cake = (cx: number, cy: number) => {
      let p = "";
      const grid = ["  fffff  ", " frrrrrf ", "fcccccccf", "fffffffff", "fyyyyyyyf", "fffffffff"];
      const map: Record<string, string> = {
        f: "#F4D880",
        r: "#E04060",
        c: "#FCE8B8",
        y: "#F0A040",
      };
      for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
          const ch = grid[y][x];
          if (map[ch])
            p += `<rect x="${cx + x * 3 - 13}" y="${cy + y * 3 - 9}" width="3" height="3" fill="${map[ch]}"/>`;
        }
      }
      return p;
    };
    o += cake(sw / 2, total - 24);
    // pixel coins
    for (let i = 0; i < 6; i++) {
      const x = 16 + i * ((sw - 32) / 5);
      o += `<rect x="${x - 3}" y="14" width="6" height="6" fill="#F0D040"/><rect x="${x - 2}" y="15" width="4" height="4" fill="#FCE890"/><rect x="${x - 1}" y="16" width="2" height="2" fill="#A87018"/>`;
    }
    return o;
  }

  if (style === "bday-holographic") {
    o += `<defs><linearGradient id="ho" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F8C8E8"/><stop offset=".33" stop-color="#A8E0F8"/><stop offset=".66" stop-color="#C8F8C8"/><stop offset="1" stop-color="#F8E8A8"/></linearGradient></defs>`;
    for (let i = 0; i < 10; i++) {
      const x = r() * sw,
        y = r() * total;
      const rad = 4 + r() * 9;
      o += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${rad.toFixed(1)}" fill="url(#ho)" opacity=".7"/>`;
    }
    o += `<rect x="3" y="3" width="${sw - 6}" height="${total - 6}" fill="none" stroke="url(#ho)" stroke-width="3" opacity=".8"/>`;
    return o;
  }

  if (style === "bday-popart") {
    // halftone burst dots
    for (let i = 0; i < 200; i++) {
      const x = r() * sw,
        y = r() * total;
      o += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.2" fill="#F4D040" opacity=".5"/>`;
    }
    // POW! burst
    const burst = `<g transform="translate(${sw / 2} 22)"><polygon points="0,-14 4,-5 14,-7 7,1 14,9 4,7 0,16 -4,7 -14,9 -7,1 -14,-7 -4,-5" fill="#E04060" stroke="#1A1A1A" stroke-width="1.4"/><text text-anchor="middle" dominant-baseline="middle" font-family="Impact,Arial Black" font-weight="900" font-size="11" fill="#fff">POW!</text></g>`;
    o += burst;
    return o;
  }

  if (style === "bday-sprinkles") {
    const cs = ["#E04060", "#48A8E0", "#F0A040", "#7048C8", "#48C880", "#F0D040", "#E848C8"];
    for (let i = 0; i < 80; i++) {
      const x = r() * sw,
        y = r() * total;
      const rot = r() * 180;
      o += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="3.5" height="1.5" rx=".75" fill="${cs[i % cs.length]}" transform="rotate(${rot.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
    }
    return o;
  }

  if (style === "bday-stars") {
    o += `<rect x="0" y="0" width="${sw}" height="${total}" fill="#1A1840" opacity=".18"/>`;
    for (let i = 0; i < 60; i++) {
      const x = r() * sw,
        y = r() * total;
      const rd = r() < 0.85 ? 0.8 : 2;
      o += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${rd}" fill="#FCE8A8" opacity=".85"/>`;
    }
    // crescent moon
    o += `<circle cx="${sw - 22}" cy="22" r="9" fill="#FCE8A8"/><circle cx="${sw - 18}" cy="20" r="8" fill="#FCFAE0" opacity="1"/><circle cx="${sw - 18}" cy="20" r="8" fill="#1A1840" opacity=".18"/>`;
    return o;
  }

  return o;
}

async function drawStyleOverlay(
  ctx: CanvasRenderingContext2D,
  sw: number,
  total: number,
  style: FrameStyleId,
) {
  const inner = styleOverlaySVG(style, sw, total);
  if (!inner) return;
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${sw}" height="${total}" viewBox="0 0 ${sw} ${total}">${inner}</svg>`;
  const blob = new Blob([svgStr], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const img = await loadImage(url);
  if (img) ctx.drawImage(img, 0, 0, sw, total);
  URL.revokeObjectURL(url);
}

function wrapTextToLines(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  if (!text) return [];
  text = text.replace(/&&/g, "").replace(/undefined/gi, "");
  const out: string[] = [];
  for (const para of text.split("\n")) {
    if (!para.trim()) {
      continue;
    }
    const words = para.split(" ");
    let cur = "";
    for (const w of words) {
      if (!w) continue;
      const test = cur ? cur + " " + w : w;
      if (ctx.measureText(test).width > maxW && cur) {
        out.push(cur);
        cur = w;
      } else cur = test;
    }
    if (cur) out.push(cur);
  }
  return out;
}

/* Background paper texture for ord = warm cream w/ fibers */
function paintBackground(
  ctx: CanvasRenderingContext2D,
  mode: BoothMode,
  sw: number,
  total: number,
  style?: FrameStyleId,
) {
  // Default mode-based gradients
  let fill: string | CanvasGradient = "#F8F1DC";
  
  // Style-specific overrides
  if (style === "ord-polaroid") fill = "#FFFFFF";
  else if (style === "ord-newspaper") fill = "#E0E0E0";
  else if (style === "ord-y2k") fill = "#D4E8FC";
  else if (style === "ord-zine") fill = "#F2F2F2";
  else if (style === "ann-cinema") fill = "#222222";
  else if (style === "ann-vintage") fill = "#E2D1B0";
  else if (style === "bday-disco") fill = "#E0E0F0";
  else if (style === "bday-pixel") fill = "#333333";
  else if (style === "ord-grunge90") fill = "#E8D8B0";
  else if (style === "ord-coffee") fill = "#F2E8D5";
  else {
    // Mode defaults
    if (mode === "ann") {
      const grad = ctx.createLinearGradient(0, 0, 0, total);
      grad.addColorStop(0, "#FFEDF1");
      grad.addColorStop(1, "#FFD5DD");
      fill = grad;
    } else if (mode === "bday") {
      const grad = ctx.createLinearGradient(0, 0, 0, total);
      grad.addColorStop(0, "#E8FBFD");
      grad.addColorStop(1, "#D8F0F5");
      fill = grad;
    } else {
      const grad = ctx.createLinearGradient(0, 0, 0, total);
      grad.addColorStop(0, "#F8F1DC");
      grad.addColorStop(1, "#EFE3C2");
      fill = grad;
    }
  }

  ctx.fillStyle = fill;
  ctx.fillRect(0, 0, sw, total);

  // Grain - subtle noise
  ctx.save();
  ctx.globalAlpha = mode === "ord" ? 0.07 : 0.04;
  if (style === "ord-newspaper" || style === "ann-cinema") ctx.globalAlpha = 0.12;
  
  for (let i = 0; i < 2400; i++) {
    const gx = Math.random() * sw,
      gy = Math.random() * total;
    const gv = 60 + Math.floor(Math.random() * 80);
    ctx.fillStyle = `rgb(${gv},${gv - 10},${gv - 22})`;
    ctx.fillRect(gx, gy, 1, 1);
  }
  ctx.restore();

  // Special textures
  if (style === "ord-newspaper") {
    // newsprint lines
    ctx.save();
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = "#000";
    for (let i = 0; i < total; i += 4) {
      ctx.fillRect(0, i, sw, 1);
    }
    ctx.restore();
  }

  // ord paper fibers
  if (mode === "ord" && style !== "ord-polaroid" && style !== "ord-newspaper") {
    ctx.save();
    ctx.globalAlpha = 0.08;
    ctx.strokeStyle = "#A6741A";
    ctx.lineWidth = 0.6;
    for (let i = 0; i < 70; i++) {
      const x1 = Math.random() * sw,
        y1 = Math.random() * total;
      const len = 8 + Math.random() * 22;
      const ang = Math.random() * Math.PI;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1 + Math.cos(ang) * len, y1 + Math.sin(ang) * len);
      ctx.stroke();
    }
    ctx.restore();
    // torn paper edge shadow
    ctx.save();
    ctx.fillStyle = "rgba(120,80,20,.08)";
    ctx.fillRect(0, 0, sw, 6);
    ctx.fillRect(0, total - 6, sw, 6);
    ctx.restore();
  }
}

export async function buildStrip(
  frames: string[],
  layout: LayoutType,
  mode: BoothMode,
  canvas: HTMLCanvasElement,
  note: string = "",
  frameStyle?: FrameStyleId,
  shotCount = 4,
): Promise<{ dataURL: string }> {
  const trimmedNote = note.trim();
  const hasNote = !!trimmedNote;
  const info = getLayoutInfo(layout, hasNote, shotCount);
  const TOTAL = info.total;
  canvas.width = SW;
  canvas.height = TOTAL;
  const ctx = canvas.getContext("2d")!;
  const fs = frameStyle ?? getDefaultFrameStyle(mode);

  paintBackground(ctx, mode, SW, TOTAL, fs);

  /* outer border (base color for text/outlines) */
  let bC = mode === "ann" ? "#8A2828" : mode === "bday" ? "#1F4868" : "#5A3008";
  
  if (fs === "ord-newspaper") bC = "#1A1A1A";
  else if (fs === "ord-polaroid") bC = "#2A3A4A";
  else if (fs === "ord-y2k") bC = "#3A1A5A";
  else if (fs === "ord-grunge90") bC = "#111111";
  else if (fs === "ann-cinema") bC = "#9A2A4A";
  else if (fs === "bday-pixel") bC = "#F4D880";
  else if (fs === "bday-disco") bC = "#1A1A2A";

  ctx.save();
  ctx.strokeStyle = bC;
  ctx.lineWidth = 2;
  ctx.strokeRect(3, 3, SW - 6, TOTAL - 6);
  ctx.restore();

  /* header */
  const hdrChar = mode === "ann" ? "♥" : mode === "bday" ? "★" : "✿";
  ctx.save();
  ctx.fillStyle = bC;
  ctx.font = "bold 22px Caveat,cursive";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`${hdrChar} Our Memory Studio ${hdrChar}`, SW / 2, 38);
  ctx.restore();

  /* photos */
  const tapeOK = mode === "ord" && !fs.includes("polaroid") && !fs.includes("y2k") && !fs.includes("newspaper") && !fs.includes("aesthetic");

  const n = info.numPhotos;

  if (layout === "classic" || layout === "trio" || layout === "custom") {
    for (let i = 0; i < Math.min(frames.length, n); i++) {
      const py = HDR + i * (info.photoH + GAP) + GAP / 2;
      await drawSlot(ctx, frames[i], PAD, py, SW - PAD * 2, info.photoH, i + 1, bC);
      if (tapeOK) {
        drawTape(ctx, PAD + 4, py - 6, 28, 10, -0.3);
        drawTape(ctx, SW - PAD - 32, py - 6, 28, 10, 0.3);
      }
    }
  } else if (layout === "wide") {
    for (let i = 0; i < Math.min(frames.length, n); i++) {
      const py = HDR + i * (info.photoH + GAP) + GAP / 2;
      await drawSlot(ctx, frames[i], PAD, py, SW - PAD * 2, info.photoH, i + 1, bC);
      if (tapeOK) {
        drawTape(ctx, PAD + 6, py - 6, 32, 10, -0.25);
        drawTape(ctx, SW - PAD - 38, py - 6, 32, 10, 0.25);
      }
    }
  } else if (layout === "square" || layout === "grid6") {
    // 2-column grid
    const cellW = layout === "square" ? PH_SQ : Math.floor((SW - PAD * 2 - GAP) / 2);
    for (let i = 0; i < Math.min(frames.length, n); i++) {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const px = PAD + col * (cellW + GAP);
      const py = HDR + row * (info.photoH + GAP) + GAP / 2;
      await drawSlot(ctx, frames[i], px, py, cellW, info.photoH, i + 1, bC);
      if (tapeOK) drawTape(ctx, px + cellW / 2 - 12, py - 5, 26, 8, i % 2 ? 0.3 : -0.3);
    }
  } else if (layout === "duo") {
    const cellW = Math.floor((SW - PAD * 2 - GAP) / 2);
    for (let i = 0; i < Math.min(frames.length, n); i++) {
      const px = PAD + i * (cellW + GAP);
      const py = HDR + GAP / 2;
      await drawSlot(ctx, frames[i], px, py, cellW, info.photoH, i + 1, bC);
      if (tapeOK) drawTape(ctx, px + cellW / 2 - 14, py - 5, 28, 9, i % 2 ? 0.3 : -0.3);
    }
  } else if (layout === "big-one") {
    await drawSlot(ctx, frames[0] ?? "", PAD, HDR + GAP / 2, SW - PAD * 2, info.photoH, 1, bC);
    if (tapeOK) {
      drawTape(ctx, PAD + 10, HDR + GAP / 2 - 6, 36, 12, -0.3);
      drawTape(ctx, SW - PAD - 46, HDR + GAP / 2 - 6, 36, 12, 0.3);
    }
  }

  /* base vibe frame decoration overlay */
  await drawFrameDecoration(ctx, SW, TOTAL, mode, fs);

  /* per-style overlay on top */
  await drawStyleOverlay(ctx, SW, TOTAL, fs);

  /* note (only if present) */
  if (hasNote) {
    const info2 = getLayoutInfo(layout, false, shotCount);
    const nY = info2.total - DATE_H - B_PAD + 4;
    const cH = NOTE_H - 10;

    ctx.save();
    ctx.fillStyle =
      mode === "ann"
        ? "rgba(255,235,240,.92)"
        : mode === "bday"
          ? "rgba(248,253,255,.92)"
          : "rgba(252,244,218,.92)";
    rrFill(ctx, PAD, nY, SW - PAD * 2, cH, 8);
    ctx.strokeStyle = bC;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    rrFill(ctx, PAD, nY, SW - PAD * 2, cH, 8);
    ctx.fillStyle = mode === "ann" ? "#500818" : mode === "bday" ? "#0A2848" : "#3A1808";
    const maxW = SW - PAD * 2 - 18;
    let fontSize = 16;
    let lineHeight = fontSize * 1.25;
    ctx.font = `italic ${fontSize}px "Architects Daughter",cursive`;
    let lines = wrapTextToLines(ctx, trimmedNote, maxW);
    while (lines.length * lineHeight > cH - 14 && fontSize > 9) {
      fontSize -= 0.5;
      lineHeight = fontSize * 1.25;
      ctx.font = `italic ${fontSize}px "Architects Daughter",cursive`;
      lines = wrapTextToLines(ctx, trimmedNote, maxW);
    }
    const totalTextHeight = lines.length * lineHeight;
    const startY = nY + (cH - totalTextHeight) / 2 + 2;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    lines.forEach((l, i) => ctx.fillText(l.trim(), SW / 2, startY + i * lineHeight));
    ctx.restore();
  }

  /* date */
  const now = new Date();
  const dateChar = mode === "ann" ? "♥" : mode === "bday" ? "★" : "✿";
  const dateStr = `${MONTHS[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  const dateY = TOTAL - B_PAD - DATE_H / 2;
  ctx.save();
  ctx.fillStyle = bC;
  ctx.font = "bold 14px Caveat,cursive";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`${dateChar} ${dateStr} ${dateChar}`, SW / 2, dateY);
  ctx.restore();

  return { dataURL: canvas.toDataURL("image/png") };
}

/* === Built-in poems === */
export const POEMS_ORD: string[][] = [
  [
    "We laughed and posed, smiled so wide,",
    "Tiny frames with joy inside,",
    "A handcrafted strip to keep and share —",
    "Our perfect moment, beyond compare.",
  ],
  [
    "Today we gathered, had some fun,",
    "Silly snaps before day was done,",
    "The paper smells of craft and art —",
    "A doodle memory, close to heart.",
  ],
  [
    "Strike a pose and hold it tight,",
    "The lens caught laughter in the light,",
    "Little frames, one precious day —",
    "Forever keeping smiles at play.",
  ],
  [
    "Sunshine days and easy grins,",
    "A sparkle where the story begins,",
    "Catch the moment, press it small —",
    "A pocket sky to hold it all.",
  ],
  [
    "Tape and paper, ink and thread,",
    "A simple page where joy is read,",
    "Frame the noise into something kind —",
    "The brightest piece of every mind.",
  ],
  [
    "Coffee mornings, golden talks,",
    "Footprints made on familiar walks,",
    "We bottled it in tiny squares —",
    "A homemade hour, free of cares.",
  ],
  [
    "Friends, fries, and a polaroid sun,",
    "Silly faces — every one,",
    "We won this Tuesday, fair and square —",
    "A photo strip we love to wear.",
  ],
  [
    "Petals dropped on summer floors,",
    "Memories knocking at the door,",
    "We let them in, one by one —",
    "A little keepsake of the sun.",
  ],
  [
    "Crinkled smiles and tilted heads,",
    "A rainbow strung on golden threads,",
    "Snap by snap, the day grew bright —",
    "A handmade letter to the light.",
  ],
  [
    "Crooked grin and lemon light,",
    "Soft confetti, easy night,",
    "Held the moment, gentle, still —",
    "A homespun joy, a love-soaked thrill.",
  ],
  [
    "Ordinary magic, plain and true,",
    "A patchwork hour stitched in blue,",
    "Four small windows, four small skies —",
    "The look of love behind your eyes.",
  ],
  [
    "Saturday hum and porch-light glow,",
    "A little laugh, a little show,",
    "Four frames stacked like a paper kite —",
    "Lift it up and call it bright.",
  ],
  [
    "Sticker hearts and paperclip days,",
    "A sweet small set of golden ways,",
    "We paused the rush to press a smile —",
    "A handmade hour, worth our while.",
  ],
  [
    "Soft rain music, warm cocoa hands,",
    "Page by page, the album expands,",
    "Tiny windows of a happy week —",
    "Of all the joys, this is the peak.",
  ],
  [
    "No reason needed, no big plan,",
    "Just us, a camera, and a fan,",
    "We turned a Tuesday into gold —",
    "A keepsake worth a thousand told.",
  ],
  [
    "Quiet courage, common kind,",
    "A favourite hour kept in mind,",
    "Four little proofs that life is sweet —",
    "A strip we tape above the seat.",
  ],
  [
    "Dust in sunlight, dancing slow,",
    "A papered photo, gentle glow,",
    "Joy that stays when seasons fly —",
    "A little corner of the sky.",
  ],
  [
    "Friendship printed, frame by frame,",
    "A crooked heart, a chosen name,",
    "We made a day worth holding tight —",
    "A pocketful of yellow light.",
  ],
  [
    "Window light and easy chairs,",
    "Stories shared in honest pairs,",
    "Four small pieces, one big day —",
    "A keepsake love won't take away.",
  ],
  [
    "Hand in hand and grin to grin,",
    "A perfect crease where smiles begin,",
    "We caught the day before it flew —",
    "A printed promise, me and you.",
  ],
];

export const POEMS_ANN: string[][] = [
  [
    "Two hearts entwined through years gone by,",
    "Beneath the same moon, under one sky,",
    "Every memory a golden thread —",
    "Forever in love, forever ahead.",
  ],
  [
    "The years have turned like seasons do,",
    "But every dawn I still choose you,",
    "These little frames hold what words cannot:",
    "The love we share shall not be forgot.",
  ],
  [
    "Through laughter, tears, and quiet days,",
    "You walk with me a thousand ways,",
    "Each photograph a love-letter true —",
    "My favourite story starts with you.",
  ],
  [
    "A waltz of mornings, evenings slow,",
    "A garden only we can grow,",
    "Take my hand and hold it near —",
    "Another year, another year.",
  ],
  [
    "Soft as starlight, strong as stone,",
    "My favourite home is where you're known,",
    "Time may pass and seasons spin —",
    "I'd do it all, again, with him/her.",
  ],
  [
    "Letters folded, kisses sealed,",
    "A love no winter ever steeled,",
    "Frame by frame, the years align —",
    "Forever yours, forever mine.",
  ],
  [
    "Candle flicker, wedding rain,",
    "A vow renewed without restrain,",
    "Snap the moment, pin the year —",
    "The same heart drumming, loud and clear.",
  ],
  [
    "You are my ocean, you are shore,",
    "I find new reasons to adore,",
    "In every frame your smile remains —",
    "A thousand memories, no end refrains.",
  ],
  [
    "Two coffees, mornings, side by side,",
    "A quiet love no need to hide,",
    "A keepsake page of you and me —",
    "A picture of our company.",
  ],
  [
    "Roses, rings, and stolen looks,",
    "A library of love-soaked books,",
    "Each frame a chapter softly told —",
    "Our love still new, our story old.",
  ],
  [
    "Through every storm, through every spring,",
    "Your hand in mine — the only thing,",
    "Pictures hold what hearts already know:",
    "I love you more than words can show.",
  ],
  [
    "Slow dance kitchen, midnight hum,",
    "You are the why my heart beats from,",
    "Tiny windows of golden us —",
    "A love we keep, a love we trust.",
  ],
  [
    "Anniversary glow, a silver tune,",
    "A waltz beneath an honest moon,",
    "These small bright squares, our private art —",
    "A gallery hung inside the heart.",
  ],
  [
    "Champagne whispers, candle glow,",
    "A love that only we can know,",
    "Time moves on, but you're my still —",
    "My always-yes, my forever-will.",
  ],
  [
    "First date echoes, last kiss goodnight,",
    "A circle drawn in steady light,",
    "Through every page, through every year —",
    "I'm grateful most that you are here.",
  ],
  [
    "Vows we made on borrowed grass,",
    "Now keep their shape inside the glass,",
    "A scrapbook page of you and me —",
    "A little proof eternity.",
  ],
  [
    "I love you in the morning rain,",
    "I love you on the quiet train,",
    "I love you in these printed days —",
    "A thousand small, devoted ways.",
  ],
  [
    "You took my heart, and there it stays,",
    "A garden grown in countless ways,",
    "Our anniversary printed neat —",
    "A love that's soft, a love that's sweet.",
  ],
  [
    "Every wrinkle, every grace,",
    "A map of joy across your face,",
    "I love the proof of all our years —",
    "A million laughs, a few sweet tears.",
  ],
  [
    "Forever's long but not too long,",
    "When every day becomes a song,",
    "Frame us here, in cream and gold —",
    "A love that never will grow old.",
  ],
];

export const POEMS_BDAY: string[][] = [
  [
    "Another year of joy and cheer,",
    "We gathered close to celebrate here,",
    "Frames to mark this special day —",
    "Happy birthday in every way!",
  ],
  [
    "With hats and horns and birthday song,",
    "We made this moment all day long,",
    "Silly snaps, the best of you —",
    "Happy birthday — wishes come true!",
  ],
  [
    "Candles lit and cake on plates,",
    "A circle of your favourite mates,",
    "Click! we kept the laugh in place —",
    "A starlit smile across your face.",
  ],
  [
    "Confetti rained on golden hair,",
    "Wishes whispered in the air,",
    "Little frames of bright delight —",
    "Your year ahead is shining light.",
  ],
  [
    "Pop the cork, blow out the flame,",
    "Another chapter to your name,",
    "A keepsake page to look back through —",
    "A happy year for happier you.",
  ],
  [
    "Sparkler hands and ribbon shoes,",
    "A birthday made of golden hues,",
    "We trapped it in a paper square —",
    "A rainbow you can always wear.",
  ],
  [
    "Wish on cake, wish on stars,",
    "A year of love both near and far,",
    "We caught your laugh, we kept it close —",
    "A birthday hug in tiny dose.",
  ],
  [
    "Streamers, sparkles, surprise inside,",
    "A perfect joyful birthday ride,",
    "Frames to mark our favourite face —",
    "A year of love, a steady pace.",
  ],
  [
    "Make a wish — the crowd grows still,",
    "Catch your breath, the moment will,",
    "Snap! we kept a piece for you —",
    "A birthday memory, fresh as new.",
  ],
  [
    "Old friends, new friends, all aligned,",
    "A birthday of the gentlest kind,",
    "Pictures pinned across the year —",
    'A keepsake reading "you are dear".',
  ],
  [
    "Cake on cheek and laughter loud,",
    "A perfect, happy birthday crowd,",
    "Frames of joy in folded gold —",
    "A story never to grow old.",
  ],
  [
    "Balloons that bobble, banners high,",
    "A birthday bright as open sky,",
    "We pressed the day into a card —",
    "A small bright gift, a fond regard.",
  ],
  [
    "A circle round a candled glow,",
    "A silly song we love to know,",
    "Happy birthday, snap and smile —",
    "A keepsake worth a country mile.",
  ],
  [
    "Birthday brunch and morning shine,",
    "A toast, a wish, a paper sign,",
    "Frame by frame the joys appear —",
    "A scrap-booked love for one more year.",
  ],
  [
    "Pin the smile, blow the flame,",
    "A circle calling out your name,",
    "Print the day in cream and rose —",
    "A happy birthday only love knows.",
  ],
  [
    "New year written in sparkler ink,",
    "A birthday closer than you think,",
    "A strip of joy to hold and share —",
    "A year ahead beyond compare.",
  ],
  [
    "Sweet sixteen or sweet eighty-three,",
    "You're still the brightest face I see,",
    "Print the smile, frame the cheer —",
    "Wishing you a wonderful year.",
  ],
  [
    "Glitter dust on golden brow,",
    "A birthday wish — make one right now,",
    "Snap, snap, snap — the day is yours —",
    "A handmade memory for indoors.",
  ],
  [
    "Cake-smudged grin and party light,",
    "A birthday warm and birthday bright,",
    "A keepsake page of pure delight —",
    "A perfect day from morn to night.",
  ],
  [
    "Twirl, twirl, twirl, the year is here,",
    "A birthday filled with all you hold dear,",
    "Pictures pressed for years to come —",
    "Of all the days, the gladdest one.",
  ],
];

export function pickRandomPoem(mode: BoothMode): string {
  const pool = mode === "ann" ? POEMS_ANN : mode === "bday" ? POEMS_BDAY : POEMS_ORD;
  return pool[Math.floor(Math.random() * pool.length)].join("\n");
}
