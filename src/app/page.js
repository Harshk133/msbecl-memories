import DomeGallery from "@/components/DomeGallery";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <DomeGallery
        fit={0.85}
        minRadius={850}
        maxVerticalRotationDeg={0}
        segments={32}
        dragDampening={2}
        grayscale={false}
      />
    </div>
  );
}
