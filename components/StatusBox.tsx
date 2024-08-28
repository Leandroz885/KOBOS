export const StatusBox: (props: {
  variant: "info" | "remember" | "edu";
  className?: string;
  delayed?: boolean;
  children?: React.ReactNode;
}) => JSX.Element = ({ variant, className, delayed, children }) => {
  const variantData = {
    backgroundColor: "",
    icon: "",
  };
  if (variant === "info") {
    variantData.backgroundColor = "bg-blue-200";
    variantData.icon = "ℹ️";
  }
  if (variant === "remember") {
    variantData.backgroundColor = "bg-amber-200";
    variantData.icon = "💡";
  }
  if (variant === "edu") {
    variantData.backgroundColor = "bg-lime-200";
    variantData.icon = "🎓";
  }
  return (
    <div
      className={[
        " rounded-md my-4 p-6 flex items-center justify-center gap-8",
        variantData.backgroundColor,
        className,
        delayed ? "fragment" : "",
      ].join(" ")}
    >
      <div className="text-5xl">{variantData.icon}</div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};
