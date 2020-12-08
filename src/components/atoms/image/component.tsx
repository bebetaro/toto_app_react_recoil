import React from "react";
import style from "./style.css";

export type Props = {
  src: string;
  alt: string;
  height: number;
  width: number;
};

/**
 * Image Component
 */
export const Image: React.FC<Props> = React.memo(function Image(props) {
  return (
    <img
      className={style.root}
      src={props.src}
      alt={props.alt}
      height={props.height}
      width={props.width}
    />
  );
});
