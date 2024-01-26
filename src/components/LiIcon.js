import React from 'react'
import { motion, useScroll } from 'framer-motion';



const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light ">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          style={{
            pathLength: scrollYProgress,
          }}
          class="stroke-primary   dark:stroke-primaryDark stroke-[5px] fill-none "
        ></motion.circle>
        <circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          class="fill-light dark:fill-dark stroke-[5px] "
          stroke-dashoffset="0px"
          stroke-dasharray="0.7987804878048781px 1px"
        ></circle>
        <circle
          cx="75"
          cy="50"
          r="10"
          pathLength="1"
          class="animate-pulse stroke-1 dark:fill-primaryDark fill-primary "
        ></circle>
      </svg>
    </figure>
  );
};

export default LiIcon