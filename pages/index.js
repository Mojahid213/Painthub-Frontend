import AboutSection from "../components/layout/Home/aboutSection";
import HeroSection from "../components/layout/Home/heroSection";
import PaintingServices from "../components/layout/Home/paintingServices";
import Navbar from "../components/layout/navbar";

export default function Home({ services }) {
  return (
    <>
      <Navbar />
      {/* Hero-Banner Section */}
      <HeroSection />
      {/* About-Details Section */}
      <AboutSection />
      {/* Painting Sollutions Section */}
      <div className="mt-10 container px-8 mb-20">
        <div className="mb-10 text-white border-solid border-l-4 border-amber-500 px-1">
          <h1 className="text-5xl md:text-6xl font-bold font-Dosis">
            Painting Sollutions
          </h1>
          {/* <div className="h-2 mt-3 w-1/3 rounded-full bg-gradient-to-r from-red-300 to-red-600"></div> */}
        </div>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-5 gap-y-8 md:gap-10">
          {services.data.map((service) => {
            return (
              <div key={service.id}>
                <PaintingServices service={service} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// Calling painting services api
export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/painting-sollutions");
  const data = await res.json();
  return {
    props: {
      services: data,
    },
  };
}
