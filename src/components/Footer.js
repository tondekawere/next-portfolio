import React from 'react'
import Layout from './Layout'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base  ">
      <Layout
        className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8 py-8 flex items-center justify-between lg:flex-col lg:py-6"
      >
        <span>{new Date().getFullYear()}&copy; All Rigts Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build With{" "}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark ">
            &#9825;
          </span>{" "}
          by &nbsp;{" "}
          <Link
            href="/"
            className="underline underline-offset-2 "
            target={"_blank"}
          >
            Tonderai
          </Link>
        </div>
        <Link
          href="/"
          target={"_blank"}
          className="underline underline-offset-2 "
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
}

export default Footer
