import DomeGallery from "@/components/DomeGallery";
import PillNav from "@/components/PillNav";
import Stack from "@/components/Stack";

const stackImages = [
  "/ganpati-1.jpeg",
  "/ganpati-2.jpeg",
  "/group-5.jpeg",
  "/group-6.jpeg",
  "/group-7.jpeg",
  "/group-8.jpeg",
  "/group-9.jpeg",
  "/group-10.jpeg",
  "/group-11.jpeg",
  "/group-12.jpeg",
  "/group-13.jpeg",
  "/group-14.jpeg",
  "/group-15.jpeg",
  "/single-1.jpeg",
  "/photo-1.jpeg",
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <header className="pointer-events-none absolute inset-x-0 top-0 z-[1000] flex justify-center px-4 pt-4 sm:pt-6">
        <div className="pointer-events-auto w-full max-w-6xl">
          <PillNav
            logo="/logo_msbecl.png"
            logoAlt="MSBECL Memories"
            items={[
              { label: "Home", href: "/" },
              { label: "Memories", href: "/memories" },
              { label: "Group Photos", href: "/services" },
              { label: "Upload", href: "/upload" },
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            initialLoadAnimation
            showThemeToggler
          />
        </div>
      </header>

      <main className="relative h-screen w-full">
        <DomeGallery
          fit={0.85}
          minRadius={850}
          maxVerticalRotationDeg={0}
          segments={32}
          dragDampening={2}
          grayscale={false}
        />
      </main>

      <section
        id="memories"
        aria-labelledby="memories-heading"
        className="relative w-full border-t border-border bg-muted/30 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Featured Collection
            </p>
            <h2
              id="memories-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Flip Through Our Memories
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A curated stack of moments from events, gatherings, and celebrations.
              Drag a card to browse, or tap on mobile to bring the next memory forward.
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <li className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">
                {stackImages.length} photos
              </li>
              <li className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">
                Drag or tap to explore
              </li>
            </ul>
          </div>

          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
              <div
                className="relative mx-auto aspect-[3/4] w-full rounded-3xl border border-border/60 bg-background/50 p-3 shadow-lg backdrop-blur-sm sm:p-4"
                aria-label="Interactive photo stack"
              >
                <Stack
                  randomRotation={false}
                  sensitivity={180}
                  sendToBackOnClick
                  mobileClickOnly
                  cards={stackImages.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Memory photo ${i + 1}`}
                      draggable={false}
                      className="pointer-events-none h-full w-full object-cover"
                    />
                  ))}
                  autoplay={false}
                  pauseOnHover
                />
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground sm:text-sm">
                Swipe or tap the top card to see more
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
