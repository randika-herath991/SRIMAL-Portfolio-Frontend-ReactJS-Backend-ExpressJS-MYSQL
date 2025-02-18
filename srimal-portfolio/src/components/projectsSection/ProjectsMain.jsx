import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "ABC Bank System",
    year: "November2024",
    align: "right",
    image: "../../public/images/abc.png",
    link: "#",
  },
  {
    name: "SRIMAL Employee Manage System",
    year: "December2024",
    align: "left",
    image: "../../public/images/emp.png",
    link: "#",
  },
  {
    name: "Traffic Sign Classify Application",
    year: "January2025",
    align: "right",
    image: "../../public/images/traffic.jpg",
    link: "#",
  },
  {
    name: "Bluetooth Fan Controlling System",
    year: "February2025",
    align: "left",
    image: "../../public/images/bluetooth.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
