import DomeGallery from "@/components/DomeGallery";
import PillNav from "@/components/PillNav";

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
              { label: "Memories", href: "/about" },
              { label: "Group Photos", href: "/services" },
              { label: "Upload", href: "/contact" },
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
    </div>
  );
}
