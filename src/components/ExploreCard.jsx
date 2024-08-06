import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExploreCard = ({ world }) => {
  return (
    <div className="text-center w-full sm:mx-auto mt-16 shadow-xl text-gray-900 px-10 py-6 gradient-05 sm:p-8 rounded-lg border-third-color border-2 relative  hover:shadow-third-color">
      <div className="mx-auto w-32 h-32 relative -mt-[85px] border-4 border-white rounded-full overflow-hidden">
        <img
          src={world.imgUrl}
          alt=""
          className="object-cover object-center h-32"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-third-color">{world.title}</h2>
        <p className="text-gray-500 mt-6">{world.description}</p>
        
      
        <Link
          href="/booking?index=1"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-7"
        >

        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#009dff_0%,#393BB2_50%,#009dff_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
            Book A Car
          </span>
        
        </Link>


      </div>
    </div>
  );
};

export default ExploreCard;
