import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function PaintingServices({ service }) {
  const { title, description, img } = service.attributes;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="relative p-5 rounded-xl h-full overflow-hidden bg-indigo-500"
    >
      <div className="h-full text-center">
        <Image src={img} height={150} width={150}></Image>
        <div className="mt-3">
          <h1 className="text-3xl font-Roboto-Slab capitalize">{title}</h1>
          <p className="font-Dosis text-justify text-lg mt-5">{description}</p>
        </div>
      </div>
      <div
        className={
          hovered
            ? "mt-5 h-full w-full flex justify-center items-center bg-gradient-to-tr from-indigo-400 to-indigo-700 absolute text-center left-0 right-0 -translate-y-full transition duration-700 ease-in-out"
            : "mt-5 h-full w-full flex justify-center items-center bg-gradient-to-tr from-indigo-400 to-indigo-700 absolute text-center left-0 right-0 translate-y-6 transition duration-700 ease-in-out"
        }
      >
        <button className="px-6 py-4 text-xl text-white focus:text-black font-Roboto font-bold flex justify-center items-center gap-2 bg-black focus:bg-transparent border-2 border-transparent focus:border-black transition duration-200 ease-out rounded-full">
          Explore <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
