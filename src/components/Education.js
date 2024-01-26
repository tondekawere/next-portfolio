import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] xs:w-[86%] sm:w-[100%] sm:mx-0 mx-auto  flex flex-col items-start justify-between "
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl xs:text-lg" >{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl lg:!text-7xl md:mb-16 sm:!text-6xl xs:!text-4xl mb-32 w-full text-center ">
        Education
      </h2>
      <div ref={ref} className="relative  w-[75%] mx-auto sm:m-0 sm:w-[100%] ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between sm:justify-start md:justify-start sm:ml-9 ml-4">
          <Details
            type="Frontend Web Developer"
            time="2023-Present"
            place="Free Code Camp"
            info="Relevant courses included Data
          Structures and Algorithms, Computer Systems Engineering, and
          Artificial Intelligence."
          />
          <Details
            type="Responsive Web Design"
            time="2023-Present"
            place="Free Code Camp"
            info="Relevant courses included Data
          Structures and Algorithms, Computer Systems Engineering, and
          Artificial Intelligence."
          />
          <Details
            type="Fundamentals of Digital Marketin"
            time="2023-Present"
            place="Google"
            info="Relevant courses included Data
          Structures and Algorithms, Computer Systems Engineering, and
          Artificial Intelligence."
          />
          <Details
            type="JavaScript Application Programming"
            time="2023-Present"
            place="Alison"
            info="Relevant courses included Data
          Structures and Algorithms, Computer Systems Engineering, and
          Artificial Intelligence."
          />
          <Details
            type="Web Development with HTML and CSS for Beginners"
            time="2023-Present"
            place="Alison"
            info="Relevant courses included Data
          Structures and Algorithms, Computer Systems Engineering, and
          Artificial Intelligence."
          />
          <Details
            type="HTML Quiz: Multiple Choice Questions"
            time="2023-Present"
            place="Alison"
            info="Relevant courses included Data
          Structures and Algorithms, Computer Systems Engineering, and
          Artificial Intelligence."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
