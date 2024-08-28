import { createClassNames } from "../src/util";

export const AlgorithmBox: (props: {
  className?: string;
  delayed?: boolean;
  children?: React.ReactNode;
}) => JSX.Element = ({ className, delayed, children }) => {
  return (
    <div
      className={createClassNames(
        [
          "shadow-lg bg-sky-100 p-4 rounded-md border border-sky-300",
          className,
        ],
        delayed
      )}
    >
      {children}
    </div>
  );
};
