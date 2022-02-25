import AboutSection from "../components/layout/Home/aboutSection";
import HeroSection from "../components/layout/Home/heroSection";
import PaintingServices from "../components/layout/Home/paintingServices";
import Navbar from "../components/layout/navbar";
import FeedbackSection from "../components/layout/Home/feedbackSection";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper";
// Import Swiper styles
import "swiper/css";
import FooterSection from "../components/layout/footer";

export default function Home({ services, feedbacks }) {
  return (
    <>
      <Navbar />

      {/* Hero-Banner Section */}
      <HeroSection />

      {/* About-Details Section */}
      <AboutSection />

      {/* Painting Sollutions Section */}
      <div className="mt-10 container px-8">
        <div className="mb-10 md:mb-12 text-white border-solid border-l-4 border-cyan-500 px-1">
          <h1 className="text-5xl md:text-6xl font-bold font-Dosis">
            Painting Sollutions
          </h1>
          {/* <div className="h-2 mt-3 w-1/3 rounded-full bg-gradient-to-r from-red-300 to-red-600"></div> */}
        </div>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-8 md:gap-10">
          {services.data.map((service) => {
            return (
              <div key={service.id}>
                <PaintingServices service={service} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Customers feedback section */}
      <div className="mt-14 md:mt-16 container px-8">
        <div className="text-white border-solid border-l-4 border-red-500 px-1">
          <h1 className="text-5xl md:text-6xl font-bold font-Dosis">
            Customers feedback
          </h1>
        </div>
        {/* feedback slider */}
        <Swiper
          className="mt-7 md:mt-10"
          direction="horizontal"
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          mousewheel={true}
          autoplay={{
            delay: 2000,
          }}
          speed={800}
          modules={[Autoplay, Mousewheel]}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {feedbacks.data.map((feedback) => {
            return (
              <SwiperSlide key={feedback.id}>
                <FeedbackSection feedback={feedback} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* FAQ section */}
      <div className="mt-10 px-8 container">
        <div className="text-white border-solid border-l-4 border-amber-500 px-1">
          <h1 className="text-5xl md:text-6xl font-bold font-Dosis">
            Frequently asked
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-8">
          {/* FAQ section Image */}
          <div className="flex-1">
            <Image
              src="/static/images/woman_thinking.svg"
              height={550}
              width={550}
            ></Image>
          </div>
          {/* FAQ section Questions */}
          <div className="flex-1 text-white">
            <div
              tabIndex={0}
              className="collapse md:my-5 collapse-arrow border border-amber-200 rounded-xl"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-Roboto-Slab font-bold">
                <p>Painthub service policy?</p>
              </div>
              <div className="collapse-content font-Dosis text-lg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  fugiat reiciendis est voluptatibus cum vero suscipit error
                  atque sapiente expedita.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse my-5 collapse-arrow border border-amber-200 rounded-xl"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-Roboto-Slab font-bold">
                <p>Warranty and Guarantee policy?</p>
              </div>
              <div className="collapse-content font-Dosis text-lg">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  quidem amet soluta excepturi odit vero ab non ea fugiat
                  mollitia aspernatur voluptatum quam dolorem, praesentium
                  inventore architecto. Dolorum, dignissimos illo.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse my-5 collapse-arrow border border-amber-200 rounded-xl"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-Roboto-Slab font-bold">
                <p>Common charges?</p>
              </div>
              <div className="collapse-content font-Dosis text-lg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  neque reiciendis maiores, repellat optio quisquam.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse my-5 collapse-arrow border border-amber-200 rounded-xl"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-Roboto-Slab font-bold">
                <p>Return policy?</p>
              </div>
              <div className="collapse-content font-Dosis text-lg">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aspernatur laboriosam eaque praesentium maiores officiis,
                  inventore repellat ipsa dolores. Reprehenderit pariatur
                  officia cumque nisi aperiam autem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <FooterSection />
    </>
  );
}

// // Calling painting services api
// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:1337/api/painting-sollutions");
//   const data = await res.json();
//   return {
//     props: {
//       services: data,
//     },
//   };
// }
// // Calling customers feedback api
// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:1337/api/customers-feedbacks");
//   const data = await res.json();
//   return {
//     props: {
//       feedbacks: data,
//     },
//   };
// }

export async function getServerSideProps() {
  const [serviceRes, feedbackRes] = await Promise.all([
    fetch(`http://localhost:1337/api/painting-sollutions`),
    fetch(`http://localhost:1337/api/customers-feedbacks`),
  ]);
  const [services, feedbacks] = await Promise.all([
    serviceRes.json(),
    feedbackRes.json(),
  ]);
  return { props: { services, feedbacks } };
}
