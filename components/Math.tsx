import { createClassNames } from "../src/util";

export const Math: (props: {
  className?: string;
  italic?: boolean;
  children?: React.ReactNode;
}) => JSX.Element = ({ className, italic = true, children }) => {
  return (
    <span
      className={createClassNames([
        "font-serif bg-slate-200 p-1",
        italic ? "italic" : "",
        className,
      ])}
    >
      {children}
    </span>
  );
};
