import Image from "next/image";
import { NavHeaderBar } from "./components/nav-bar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavHeaderBar />
      <main className="p-8 sm:p-20">
        {/* Your main content will go here */}
      </main>
    </div>
  );
}
