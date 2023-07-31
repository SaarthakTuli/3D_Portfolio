import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const TechCard = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({ name, icon }, index) => (
        <div className="w-28 h-28 flex flex-col items-center" key={`${index}_${name}`}>
          <BallCanvas icon={icon} />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What technologies I have learnt</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <TechCard />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
