import { useBoothStore } from "../lib/booth-store";
import { LandingScreen } from "./LandingScreen";
import { EntryAnimation } from "./EntryAnimation";
import { GridSelectScreen } from "./GridSelectScreen";
import { CaptureScreen } from "./CaptureScreen";
import { FrameSelectScreen } from "./FrameSelectScreen";
import { PrinterAnimation } from "./PrinterAnimation";
import { ResultScreen } from "./ResultScreen";

export default function BoothApp() {
  const screen = useBoothStore((s) => s.screen);

  switch (screen) {
    case "landing":
      return <LandingScreen />;
    case "entry-animation":
      return <EntryAnimation />;
    case "grid-select":
      return <GridSelectScreen />;
    case "capture":
      return <CaptureScreen />;
    case "frame-select":
      return <FrameSelectScreen />;
    case "printer-animation":
      return <PrinterAnimation />;
    case "result":
      return <ResultScreen />;
    default:
      return <LandingScreen />;
  }
}
