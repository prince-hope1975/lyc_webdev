import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppProvider } from "../context";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chewy&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
