import {Navbar} from "@/components/NavBar";
import {HeroSection} from "@/components/HeroSection";
import {AchievementsSection} from "@/components/AchivementsSection";
import {AboutSection} from "@/components/AboutSection";
import {BeatsSection} from "@/components/BeatsSection";
import {Footer} from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <BeatsSection />
      </div>
      <Footer />
    </main>
  )
}
