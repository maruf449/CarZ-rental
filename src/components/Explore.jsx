import styles from "@/contants/styles";
import React from "react";
import TitleText from "./TitleText";
import { exploreWorlds } from "@/contants/appdata";
import ExploreCard from "./ExploreCard";

const Explore = () => {
  return (
    <section className="px-6 py-10 bg-gray-950">
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TitleText
          title={
            <span className="text-white font-extrabold">
              Why Ride With Us?
            </span>
          }
        />
        <div className="my-9 flex lg:flex-row flex-col min-h-[50vh] gap-8 lg:mx-32">
          {exploreWorlds?.map((world, index) => (
            <ExploreCard key={index} world={world} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
