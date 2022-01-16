import Image from "next/image";
import Tilt from "react-tilt";

export default function HeroSection() {
  return (
    <>
      <div className="container text-white">
        <div className="md:flex justify-center items-center mt-10 gap-x-10">
          {/* Hero Text */}
          <div className="flex-1 px-2 md:px-0">
            <h1 className="text-center md:text-left text-7xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl md:ml-5  xl:ml-0 font-Dosis font-bold">
              We will make your life{" "}
              <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">
                colorful
              </span>
            </h1>
          </div>
          {/* Hero Background */}
          <div className="flex-1">
            <Tilt options={{ max: 15, transition: true, scale: 1 }}>
              <Image src="/paint_brush.svg" height={1050} width={1050}></Image>
            </Tilt>
          </div>
        </div>
      </div>
    </>
  );
}
