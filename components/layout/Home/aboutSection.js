import Image from "next/image";

export default function AboutSection() {
  return (
    <div>
      <div className="container p-5 text-white min-h-screen">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-Dosis font-bold tracking-tight text-center">
          <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-600">
            Best
          </span>{" "}
          paints and painting service you{" "}
          <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-600">
            can get
          </span>
        </h1>
        <div className="container md:px-16 lg:px-20 mt-10 md:mt-12 text-center">
          <p className="text-sm sm:text-base md:text-lg font-Dosis normal-case">
            In PaintHub, we have all kinds of paints and do all kinds of
            painting work that a person can expect. You can buy any type of
            paint you needed including car paint, house paint, furniture paint,
            etc. Besides painting, you can also buy our special painting service
            where our experienced painter will do the job for you
          </p>
        </div>
        {/* ----- Shipping detail section ----- */}
        <div className="mt-20">
          <div className="block md:flex justify-center items-center gap-x-10 xl:gap-x-16">
            <div className="flex-1 flex justify-center items-center px-5 md:px-0">
              <Image
                src="/static/images/earth.svg"
                height={500}
                width={500}
                className="hover:animate-spin-slow"
              ></Image>
            </div>
            <div className="flex-1">
              <h1 className="text-center text-6xl md:text-left md:text-7xl lg:text-8xl font-Dosis font-bold">
                Delivery and services are available{" "}
                <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-600">
                  worldwide
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
