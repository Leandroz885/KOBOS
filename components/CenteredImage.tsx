import Image, { ImageProps } from "next/image";
import { createClassNames } from "../src/util";

export const CenteredImage = (props: {
  src: ImageProps["src"]
  width?: number;
  delayed?: boolean;
  className?: string;
  alt?: string;
}) => {
  return (
    <Image
      className={createClassNames(["!mx-auto", props.className], props.delayed)}
      src={props.src}
      width={props.width}
      alt={props.alt ?? ""}
    />
  );
};
