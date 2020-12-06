import React from "react";
import style from "./style.css";

export type Props = {
  src: string;
  alt: string;
};

/**
 * Image Component
 */
export const Image: React.FC<Props> = React.memo(function Image(props) {
  return <img className={style.root} src={props.src} alt={props.alt} />;
});
