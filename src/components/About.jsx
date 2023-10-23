import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {" "}
            {title}{" "}
          </h3>{" "}
        </div>{" "}
      </motion.div>{" "}
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>{" "}
        <h2 className={styles.sectionHeadText}> Overview. </h2>{" "}
      </motion.div>{" "}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        With a solid foundation in web development and a grasp of Machine
        Learning using Python, my expertise lies in crafting dynamic
        applications using various technologies.This includes proficiency in the
        MERN stack for web applications, SwiftUI combined with Firebase for iOS
        development, and experience in cross - platform development through
        React Native.Additionally, I am well - versed in Next.js, a prominent
        framework in modern web development.Keeping pace with the latest
        technological trends, I am eager to contribute my skills to innovative
        projects and serve as a valuable asset to any team.{" "}
      </motion.p>{" "}
      <div className="mt-20 flex flex-wrap gap-10">
        {" "}
        {services.map(({ title, icon }, index) => (
          <ServiceCard key={title} index={index} title={title} icon={icon} />
        ))}{" "}
      </div>{" "}
    </>
  );
};

export default SectionWrapper(About, "about");
