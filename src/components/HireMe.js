import React from 'react'
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 md:right-4 md:top-2 md:left-auto md:bottom-auto md:absolute flex flex-col items-center 
    justify-center   overflow-hidden ">
      <div className="w-48 md:w-24 h-auto flex items-center justify-center relative">
        <CircularText
          className={
            "w-full h-auto fill-dark dark:fill-light  animate-spin-slow duration-200"
          }
        />
        <Link
          href="mailto:tondekawere@gmail.com"
          className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md border border-solid bg-dark rounded-full text-white w-20 h-20 font-semibold hover:bg-light hover:border-dark hover:text-dark 
          dark:bg-light dark:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light  md:w-12 md:h-12 md:text-[10px] "
        >
          HireMe
        </Link>
      </div>
    </div>
  );
}

export default HireMe
