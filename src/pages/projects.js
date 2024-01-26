import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/mweya.png";
import project2 from "../../public/images/projects/jump.png";
import project3 from "../../public/images/projects/dylan.png";
import project4 from "../../public/images/projects/uncommon.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border border-solid
     border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col  lg:p-8 xs:rounded-2xl 
      xs:rounded-br-3xl xs:p-4   "
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  
      xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-dark dark:text-light text-3xl font-bold  sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-10  text-dark dark:text-light"
          >
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold
            sm:px-4 sm:text-base
            "
          >
            {" "}
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ title, type, img, link, github }) => {
    return (
      <article
        className="relative flex flex-col w-full items-center justify-center rounded-2xl  rounded-br-2xl  border 
       border-solid  border-dark bg-light dark:bg-dark dark:border-light p-6  xs:p-4 "
      >
        <div
          className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light 
         md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]  "
        />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4 ">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left  text-dark dark:text-light text-2xl font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className=" font-semibold underline md:text-base  text-dark dark:text-light"
            >
              {" "}
              Visit
            </Link>
            <Link
              href={github}
              target="_blank"
              className="w-10  text-dark dark:text-light"
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    );
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Tonde | Projects Page</title>
        <meta name="description" content="Tonderai kawere's first portfolio" />
      </Head>
      <TransitionEffect/>
      <main className="flex mb-16  w-full flex-col  pt-16 xl:pt-0 items-center justify-center ">
        <Layout className="m-50">
          <AnimatedText
            text="My Featured Projects"
            className="inline-block text-dark dark:text-light font-bold w-full capitalize  mb-16 !text-7xl !leading-tight 
            lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl xl:text-6xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className=" col-span-12 ">
              <FeaturedProjects
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Projects
                title="Crypto Screener Application"
                img={project2}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Web Design"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Projects
                title="Crypto Screener Application"
                img={project3}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Digital Marketing"
              />
            </div>
            <div className=" col-span-12 ">
              <FeaturedProjects
                title="Crypto Screener Application"
                img={project4}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Projects
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Web Design"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Projects
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Digital Marketing"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
