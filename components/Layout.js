import Nav from "./Nav";
import Meta from "./Meta";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="flex">
        <Nav />
        <main className="flex-1 w-screen h-screen bg-white md:pl-28">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
