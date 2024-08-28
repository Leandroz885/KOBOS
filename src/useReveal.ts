import { useEffect, useState } from "react";
import Reveal from "reveal.js";

/**
 * A hook that adds the required JS imports to
 * make `reveal.js` work on the page.
 */
const useReveal = () => {
  useEffect(() => {
    // This will be executed in the browser (client-side).
    const clientSideInitialization = async () => {
      // load modules in browser
      const { default: Reveal } = await import("reveal.js");
      const { default: Markdown } = await import(
        //@ts-ignore
        "reveal.js/plugin/markdown/markdown.esm"
      );
      const { default: Highlight } = await import(
        //@ts-ignore
        "reveal.js/plugin/highlight/highlight.js"
      );
      const deck = new Reveal({
        highlight: {
          highlightOnLoad: true,
        },
        plugins: [Markdown, Highlight],
      });
      deck.initialize({
        width: 1024,
        height: 768,
        margin: 0.04,
      });
      deck.configure({ hash: true, slideNumber: "c/t" });
    };
    clientSideInitialization();
  });
};
export default useReveal;
