import HeroSection from "../components/layout/Home/heroSection";
import Navbar from "../components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <h1 className="text-4xl text-white">Hello</h1>
    </>
  );
}
