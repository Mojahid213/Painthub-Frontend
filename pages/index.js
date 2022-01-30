import AboutSection from "../components/layout/Home/aboutSection";
import HeroSection from "../components/layout/Home/heroSection";
import Navbar from "../components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </>
  );
}
