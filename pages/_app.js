import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { StoreProvider } from "../components/Context";

export const Orders = React.createContext();

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
