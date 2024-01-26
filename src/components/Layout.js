import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light xl:p-24 lg:p-16 mb:p-12 sm:p-8 dark:bg-dark px-32 ${className}`}>
      {children}
    </div>
  );
}

export default Layout