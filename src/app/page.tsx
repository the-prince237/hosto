'use client'
import { Card, Hero, InfiniteMovingCards } from "@/ui";
import './globals.css'
import Gallery from "@/ui/Gallery";
import { gallery, guests } from "@/assets/gallery";
import Image from "next/image";
import { grid } from "@/assets";
import { CanvasRevealEffect } from "@/ui/CanvasRevealEffect";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="-translate-y-10 relative lg:-translate-y-40 w-full">
        <Gallery items={gallery} />
        <div className="absolute bottom-0 h-32 z-20 w-full bg-gradient-to-t from-[#121212] to-transparent" />
        <div className="absolute top-0 right-[-50px] rounded-full shrink-0 bg-[#3c82de] opacity-[0.5] mix-blend-lighten blur-footer size-96" />
        <div className="absolute bottom-[-50px] right-[-50px] rounded-full shrink-0 bg-[#3c82de] opacity-[0.5] mix-blend-lighten blur-footer size-96" />
      </div>

      <div className="flex flex-col relative items-center gap-40">
        <section className="flex flex-col items-center gap-10">
          <h1 className="text-4xl lg:text-6xl text-center">EXPERTS. INVITÉS</h1>

          <InfiniteMovingCards items={guests} />

          <Image src={grid} alt="grid" className="absolute w-screen -z-10 bottom-0" width={400} height={400} />
        </section>

      </div>
    </div>
  );
}
