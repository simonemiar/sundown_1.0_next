import Head from "next/head";
const Meta = (title, keywors, description) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="{keywords}" />
      <meta name="description" content="{description}" />
      <meta charSet="uft-8" content="width=device-width, initial-scale=1" />
      <title>Sundown Boulevard</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};

Meta.defaultProps = {
  keywords: "sundown boulevard",
  description: "sundown boulevard",
};

export default Meta;
