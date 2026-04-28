import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { useButtonFX } from "@/hooks/use-button-fx";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Our Memory Studio — Premium Photo Booth" },
      {
        name: "description",
        content:
          "Our Memory Studio — premium artisanal photo booth with anniversary & birthday modes",
      },
      { name: "author", content: "Our Memory Studio" },
      { property: "og:title", content: "Our Memory Studio — Premium Photo Booth" },
      { property: "og:description", content: "Snap, decorate, and share beautiful photo strips" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Architects+Daughter&family=Nunito:wght@400;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { useEffect } from "react";
import { useBoothStore } from "../lib/booth-store";

function RootComponent() {
  useButtonFX();
  const nightMode = useBoothStore((s) => s.nightMode);

  useEffect(() => {
    if (nightMode) {
      document.body.classList.add("night");
    } else {
      document.body.classList.remove("night");
    }
  }, [nightMode]);

  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}
