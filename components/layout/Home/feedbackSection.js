import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function FeedbackSection({ feedback }) {
  const { name, description, image } = feedback.attributes;
  return (
    <div className="p-5 bg-slate-100 text-black rounded-xl">
      <FontAwesomeIcon className="md:text-xl" icon={faQuoteLeft} />
      <div className="mt-2 md:mt-3 mb-2 md:mb-5 max-h-32 md:max-h-36 h-full overflow-y-auto">
        <p className="font-Dosis md:text-lg leading-6">{description}</p>
      </div>
      <div className="flex justify-start items-center gap-2 md:gap-3">
        <div className="avatar">
          <div className="w-10 md:w-14 rounded-full">
            <Image src={image} height={150} width={150}></Image>
          </div>
        </div>
        <div className="leading-4">
          <h1 className="font-Roboto-Slab md:text-xl">{name}</h1>
          <p className="font-Roboto-Slab text-xs md:text-sm">profession</p>
        </div>
      </div>
    </div>
  );
}
