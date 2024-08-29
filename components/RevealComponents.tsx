import useReveal from "../src/useReveal";
import { createClassNames } from "../src/util";

export const RVPresentation: (props: {
  children?: React.ReactNode;
}) => JSX.Element = ({ children }) => {
  useReveal();
  const stylePresentation = {
    "--r-main-font-size": "30px",
    "--r-link-color": "rgb(190 18 60)",
    backgroundImage:
      "url(https://secundair.kobos.be/wp-content/uploads/2023/01/logotransparant.png)",
  } as React.CSSProperties;
  const styleSlides = {
    textAlign: "left",
  } as React.CSSProperties;
  return (
    <div
      className="reveal bg-no-repeat bg-[left_1rem_bottom_1rem] bg-[length:10%]"
      style={stylePresentation}
    >
      <div className="slides" style={styleSlides}>
        {children}
      </div>
    </div>
  );
};

export const RVSlide: (props: {
  id?: string;
  children?: React.ReactNode;
  otherProps?: Record<string, any>;
}) => JSX.Element = ({ id, children, otherProps }) => {
  return (
    <section id={id} {...otherProps}>
      {children}
    </section>
  );
};

export const IFrameSlide: (props: {
  src: string;
  interactive?: boolean;
  children?: React.ReactNode;
}) => JSX.Element = ({ src, interactive = true, children }) => {
  return (
    <section
      data-background-iframe={src}
      data-background-interactive={interactive}
    >
      {children}
    </section>
  );
};

export const Code: (props: {
  className?: string;
  children?: React.ReactNode;
  otherProps?: Record<string, any>;
}) => JSX.Element = ({ className, children, otherProps }) => {
  return (
    <code
      className={`px-0.5 py-0.5 bg-orange-200 !font-mono ${className ?? ""}`}
      {...otherProps}
    >
      {children}
    </code>
  );
};

export const CodeBlock: (props: {
  className?: string;
  language?: string;
  delayed?: boolean;
  allowMaxHeight?: boolean;
  children?: React.ReactNode;
  otherProps?: Record<string, any>;
}) => JSX.Element = ({
  className,
  language = "Python",
  delayed = false,
  allowMaxHeight = true,
  children,
  otherProps,
}) => {
  return (
    <div
      className={createClassNames([
        "relative my-5",
        delayed ? "fragment" : "",
        allowMaxHeight ? "!max-h-max" : "",
      ])}
    >
      <div className="absolute right-0 bg-white text-neutral-900 text-xl p-1 rounded-bl-lg z-10">
        {language}
      </div>
      <pre
        className={`!w-full !my-0 ${language ? "language-" + language : ""}`}
      >
        <code
          data-noescape
          typeof="text/template"
          className={createClassNames([
            "!p-4 text-2xl",
            allowMaxHeight ? "!max-h-max" : "",
            className ?? "",
          ])}
          {...otherProps}
        >
          {children}
        </code>
      </pre>
    </div>
  );
};

export const Quiz: (props: {
  answers: { label: string; correct: boolean }[];
  smallFormat?: boolean;
  grid?: 1 | 2 | 3;
}) => JSX.Element = ({ grid = 2, answers, smallFormat = false }) => {
  const containerClasses =
    grid === 1 ? "grid-cols-1" : grid === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <div className={`grid ${containerClasses} gap-4`}>
      {answers.map((answer) => {
        return (
          <div
            className={`text-center bg-neutral-300 rounded-md ${
              smallFormat ? "h-12 " : "h-20"
            } flex justify-center items-center ${
              answer.correct ? "hover:bg-emerald-400" : "hover:bg-red-500"
            }`}
            key={answer.label}
          >
            {answer.label}
          </div>
        );
      })}
    </div>
  );
};

export const createQuizAnswer = (label: string, correct: boolean = false) => {
  return { label, correct };
};

export const Quote: (props: {
  quotee?: string;
  className?: string;
  children?: React.ReactNode;
  otherProps?: Record<string, any>;
}) => JSX.Element = ({ quotee, className, children, otherProps }) => {
  return (
    <div
      className="bg-neutral-200 text-rose-700 rounded-md !px-8 py-2"
      {...otherProps}
    >
      <p
        className={`italic !leading-loose font-serif text-3xl before:content-['"'] after:content-['"'] before:text-5xl after:text-5xl ${
          className ?? ""
        }`}
      >
        {children}
      </p>
      {quotee && <p>{`— ${quotee}`}</p>}
    </div>
  );
};

export const InfoBox: (props: {
  className?: string;
  delayed?: boolean;
  children?: React.ReactNode;
}) => JSX.Element = ({ className, delayed, children }) => {
  return (
    <div
      className={[
        "bg-blue-200 rounded-md p-6 flex items-center justify-center gap-8",
        className,
        delayed ? "fragment" : "",
      ].join(" ")}
    >
      <div className="text-5xl">ℹ️</div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export const RememberBox: (props: {
  className?: string;
  delayed?: boolean;
  children?: React.ReactNode;
}) => JSX.Element = ({ className, delayed, children }) => {
  return (
    <div
      className={[
        "bg-amber-200 rounded-md my-4 p-6 flex items-center justify-center gap-8",
        className,
        delayed ? "fragment" : "",
      ].join(" ")}
    >
      <div className="text-5xl">💡</div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};
