import Image from "next/image";
import { NavHeaderBar } from "./components/nav-bar";
import { HeroContent } from "./components/hero-content";
import { AboutContent } from "./components/about";
import { ContactContent } from "./components/contact";
import { ResumeSection } from "./components/resume";
import { ProjectSection } from "./components/project";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavHeaderBar />
      <main className="p-8 sm:p-20">
      <HeroContent/>
      <AboutContent/>
      <ContactContent/>
      <ResumeSection/>
      <ProjectSection/>
      </main>
    </div>
  );
}
