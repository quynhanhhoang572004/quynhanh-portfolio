import Image from "next/image";
import { NavHeaderBar } from "./components/nav-bar";
import { HeroContent } from "./components/hero-content";
import { AboutContent } from "./components/about";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavHeaderBar />
      <main className="p-8 sm:p-20">
      <HeroContent/>
      <AboutContent/>
      </main>
    </div>
  );
}
