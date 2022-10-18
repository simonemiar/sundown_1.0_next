import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { StoreProvider } from "../components/Context";
import { AnimatePresence, motion } from "framer-motion";

export const Orders = React.createContext();
const myAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.7,
  },
};
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <AnimatePresence>
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={myAnimation}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
