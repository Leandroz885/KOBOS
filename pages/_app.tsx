import type { AppProps } from "next/app";
import "../styles/globals.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "reveal.js/plugin/highlight/monokai.css";
import "../styles/reveal.css";

import { Inconsolata } from "@next/font/google";

const inconsolata = Inconsolata({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <style jsx global>{`html {
    --font-mono: ${inconsolata.style.fontFamily};
  }`}</style>
  <Component {...pageProps} />
  </>
}

export default MyApp;
