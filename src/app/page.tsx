'use client'
import { Hero } from "@/ui";
import './globals.css'
import Gallery from "@/ui/Gallery";
import { gallery } from "@/assets/gallery";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="-translate-y-96 w-full">
        <Gallery items={gallery} />
      </div>
    </div>
  );
}
