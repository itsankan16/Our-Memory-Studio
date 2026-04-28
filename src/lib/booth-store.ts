import { create } from "zustand";
import type { BoothMode, LayoutType, FrameStyleId } from "./strip-builder";

export type ScreenType =
  | "landing"
  | "entry-animation"
  | "grid-select"
  | "capture"
  | "frame-select"
  | "printer-animation"
  | "result";

interface BoothStore {
  screen: ScreenType;
  mode: BoothMode;
  layout: LayoutType;
  shotCount: number;
  frameStyle: FrameStyleId;
  filter: "color" | "bw";
  frames: string[];
  dataURL: string | null;
  modeLocked: boolean;
  nightMode: boolean;

  setScreen: (s: ScreenType) => void;
  setMode: (m: BoothMode) => void;
  setLayout: (l: LayoutType) => void;
  setShotCount: (n: number) => void;
  setFrameStyle: (f: FrameStyleId) => void;
  setFilter: (f: "color" | "bw") => void;
  addFrame: (f: string) => void;
  resetFrames: () => void;
  setDataURL: (d: string) => void;
  lockMode: () => void;
  unlockMode: () => void;
  setNightMode: (v: boolean) => void;
}

const isInitialNight = () => {
  const hour = new Date().getHours();
  return hour < 6 || hour >= 19;
};

export const useBoothStore = create<BoothStore>((set) => ({
  screen: "landing",
  mode: "ord",
  layout: "classic",
  shotCount: 4,
  frameStyle: "ord-classic",
  filter: "color",
  frames: [],
  dataURL: null,
  modeLocked: false,
  nightMode: isInitialNight(),

  setScreen: (screen) => set({ screen }),
  setMode: (mode) => set({ mode }),
  setLayout: (layout) => set({ layout }),
  setShotCount: (shotCount) => set({ shotCount }),
  setFrameStyle: (frameStyle) => set({ frameStyle }),
  setFilter: (filter) => set({ filter }),
  addFrame: (f) => set((s) => ({ frames: [...s.frames, f] })),
  resetFrames: () => set({ frames: [], dataURL: null, modeLocked: false }),
  setDataURL: (dataURL) => set({ dataURL }),
  lockMode: () => set({ modeLocked: true }),
  unlockMode: () => set({ modeLocked: false }),
  setNightMode: (nightMode) => set({ nightMode }),
}));
