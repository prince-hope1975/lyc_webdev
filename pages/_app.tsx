import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppProvider } from "../context";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
export default MyApp;
