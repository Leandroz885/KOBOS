import { createClassNames } from "../src/util";

export const TwoColumns: (props: {
  className?: string;
  delayed?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
}) => JSX.Element = ({ className, delayed, left, right }) => {
  return (
    <div className={createClassNames(["grid grid-cols-2 gap-x-2 items-center", className], delayed)}>
      {left}
      {right}
    </div>
  );
};
