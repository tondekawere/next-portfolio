import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import { useMotionValue, useSpring, useInView } from 'framer-motion';
import Skills from '@/components/Skills';
import Expirience from '@/components/Expirience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';


const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref);

    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);

    useEffect(() => {
      springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
      })
    }, [springValue, value]);
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Tonde | About Page</title>
        <meta name="description" content="Tonderai kawere's first portfolio" />
      </Head>
      <TransitionEffect/>
      <main className="flex  w-full flex-col  pt-16 items-center justify-center dark:text-light ">
        <Layout className="m-50">
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="mb-20 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start md:order-2 justify-start xl:col-span-4  md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium ">
                Hi, I'm Tonderai Kawere, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 1 year of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty - it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium ">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="relative col-span-3 md:order-1 xl:col-span-4 md:col-span-8 h-max rounded-2xl border-2 border-solid border-dark dark:bg-dark dark:border-light bg-light p-8">
              <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="image"
                className="rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex  xl:col-span-8  xl:flex-row  xl:items-center md:order-3 flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className='"mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex  flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className='"mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className='"mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Years Of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Expirience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about
