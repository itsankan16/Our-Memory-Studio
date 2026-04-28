import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const BoothApp = lazy(() => import("../components/BoothApp"));

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Our Memory Studio — Premium Artisanal Photo Booth" },
      {
        name: "description",
        content:
          "Snap, decorate, and share beautiful photo strips with anniversary & birthday modes",
      },
    ],
  }),
});

function Index() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            minHeight: "100dvh",
            alignItems: "center",
            justifyContent: "center",
            background: "#F4F1DE",
            fontFamily: "'Caveat', cursive",
            fontSize: "1.5rem",
            color: "#3D405B",
          }}
        >
          ✨ Loading Our Memory Studio...
        </div>
      }
    >
      <BoothApp />
    </Suspense>
  );
}
