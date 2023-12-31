import type { AppProps } from "next/app";

import "@/styles/global.scss";
import "@/styles/reset.css";

import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
