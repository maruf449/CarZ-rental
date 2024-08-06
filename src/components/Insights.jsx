"use client";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/contants/motion";
import styles from "@/contants/styles";
import TitleText from "./TitleText";
import { insights } from "@/contants/appdata";
import InsightCard from "./InsightCard";

const Insights = ({ isForm, form }) => {
  return (
    <motion.div
      variants={!isForm && staggerContainer}
      initial={!isForm && "hidden"}
      whileInView={!isForm && "show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {!isForm && <TitleText title={<>Our Fleet</>} />}

      <div className="mt-12 flex flex-col gap-9">
      <Suspense fallback={<div>Loading...</div>}>

        {insights?.map((insight, index) => (
          <InsightCard
            key={index}
            {...insight}
            index={index}
            isForm={isForm}
            form={form}
          />
        ))}

        </Suspense>

      </div>
    </motion.div>
  );
};

export default Insights;
