'use client'
import { Hero } from "@/ui";
import './globals.css'
import Gallery from "@/ui/Gallery";
import { gallery } from "@/assets/gallery";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="-translate-y-10 relative lg:-translate-y-40 w-full">
        <Gallery items={gallery} />
        <div className="absolute bottom-10 h-32 w-full bg-gradient-to-t from-[#121212] to-transparent" />
        <div className="absolute bottom-[-50px] right-[-50px] rounded-full shrink-0 bg-[#3c82de] opacity-[0.5] mix-blend-lighten blur-footer size-96" />
      </div>
      <h1>DR. INVITÉS</h1>
    </div>
  );
}
