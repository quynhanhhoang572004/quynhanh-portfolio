import Image from "next/image";
import { NavHeaderBar } from "./components/nav-bar";
import { HeroContent } from "./components/hero-content";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavHeaderBar />
      <main className="p-8 sm:p-20">
      <HeroContent/>
      </main>
    </div>
  );
}
