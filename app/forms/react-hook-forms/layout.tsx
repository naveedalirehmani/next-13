import React from 'react'

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      {children}
    </div>
  )
};


export default Layout