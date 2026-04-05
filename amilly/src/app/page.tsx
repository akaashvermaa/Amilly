import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewArrivals from "@/components/NewArrivals";
import AboutStory from "@/components/AboutStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <NewArrivals />
      <AboutStory />
      <Footer />
    </main>
  );
}
