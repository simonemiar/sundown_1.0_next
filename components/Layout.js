import Nav from "./Nav";
import Meta from "./Meta";
import React from "react";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const myAnimation = {
    initial: {
      opacity: 0,
      top: "100vh",
      scale: 0.4,
    },
    animate: {
      opacity: 1,
      top: "0vh",
      scale: 1,
    },
    exit: {
      opacity: 0,
      top: "100vh",
      scale: 0.4,
    },
    transition: {
      duration: 0.7,
    },
  };
  return (
    <>
      <Meta />
      <div className="flex">
        <Nav />
        {/* <motion.div
          initial="initial"
          animate="animate"
          transition={myAnimation.transition}
          variants={myAnimation}
        > */}
        <main className="flex-1 w-screen h-screen bg-white md:pl-28">
          {children}
        </main>
        {/* </motion.div> */}
      </div>
    </>
  );
};

export default Layout;
