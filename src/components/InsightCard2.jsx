import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/contants/motion";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const InsightCard2 = ({ imgUrl, title, subtitle, index, isForm, form }) => {
  const searchParams = useSearchParams();
  const option = searchParams.get("option");
  const router = useRouter();
  return (
    <motion.div
      variants={fadeIn("up", "string", index * 0.5, 1)}
      className="flex justify-center md:flex-row flex-col gap-4"
    >
      <img
        src={imgUrl}
        className="md:w-[350px] w-full h-[250px] rounded-[32px] object-cover"
        alt=""
      />
      <div>
        <div className="flex justify-between">
          <h4 className="font-extrabold text-slate-500 lg:text-[42px] text-[26px]">
            {title}
          </h4>
        
          <Link
          href="/booking?index=1"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-7 mr-7"
        >

        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#009dff_0%,#393BB2_50%,#009dff_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
            Book A Uber
          </span>
        
        </Link>

        </div>
        <p className="mt-4 font-normal lg:text-lg text-sm text-slate-400">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default InsightCard2;
