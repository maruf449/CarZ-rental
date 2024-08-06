import React from "react";
import TitleText from "./TitleText";
import { homeCards } from "@/contants/appdata";
import Image from "next/image";

const OurObjective = () => {
  return (
    <div className=" pt-12 mb-10 bg-gray-950">
      <TitleText
        title={
          <span className="text-white font-extrabold">Our Objective</span>
        }
      />
      <div className="mx-10 md:mx-[10%] mt-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
          {homeCards?.map((car, index) => (
            <div key={index} className="rounded shadow-lg bg0-white">
              <div className="w-full relative">
                <Image src={car.img} alt="" className="w-full object-cover" />
              </div>
              <div className="font-bold text-xl mb-2 text-third-color p-2">
                {car.title}
              </div>
              <p className="text-gray-500 text-base p-2">{car.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurObjective;
