import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            {live_site_link && (
              <div
                onClick={() => window.open(live_site_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={live}
                  alt="live"
                  className="w-1/2 h-1/2 object-contain invert"
                />
              </div>
            )}
          </div>{" "}
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]"> {name} </h3>{" "}
          <p className="mt-2 text-secondary text-[14px]"> {description} </p>{" "}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {" "}
          {tags.map(({ name, color }) => (
            <p key={name} className={`text-[14px] ${color}`}>
              {" "}
              #{name}{" "}
            </p>
          ))}{" "}
        </div>{" "}
      </Tilt>{" "}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> My Projects </p>{" "}
        <h2 className={styles.sectionHeadText}> Projects. </h2>{" "}
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I have three diverse and impactful projects in my portfolio.The first
          is a Next.js e - commerce application specialized in boat products,
          seamlessly integrated with Sanity for content management and Stripe
          for secure payments.The second project showcases a React.js
          application leveraging Syncfusion components to create an intuitive
          dashboard interface.Lastly, I 've developed a Next.js application
          highlighting the potential of React Motion animations, emphasizing the
          dynamic and interactive nature of modern web applications.{" "}
        </motion.p>{" "}
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {" "}
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}{" "}
      </div>{" "}
    </>
  );
};

export default SectionWrapper(Works, "");
