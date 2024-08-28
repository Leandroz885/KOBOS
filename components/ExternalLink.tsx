import { HTMLAttributeAnchorTarget } from "react";
import { createClassNames } from "../src/util";
import openIcon from "../public/open_in_new_FILL0_wght400_GRAD0_opsz24.svg";

export const ExternalLink: (props: {
  href: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  children?: React.ReactNode;
}) => JSX.Element = ({ href, className, target = "_blank", children }) => {
  return (
    <a
      href={href}
      className={createClassNames([
        "hover:!text-rose-500 hover:underline underline-offset-4 text-center",
        className,
      ])}
      target={target}
    >
      {children}
      <svg
        className="inline-block"
        xmlns="http://www.w3.org/2000/svg"
        height={"100%"}
        viewBox="0 -960 960 960"
        width={"0.7em"}
        fill="rgb(190, 18, 60)"
      >
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200zm188-212l-56-56 372-372H560v-80h280v280h-80v-144L388-332z" />
      </svg>
    </a>
  );
};
