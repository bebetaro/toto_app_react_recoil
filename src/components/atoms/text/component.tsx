import React from "react";
import classnames from "classnames";
import style from "./style.css";

export type Props = {
  size: "small" | "medium" | "big";
  color: "white" | "black" | "red";
};

/**
 * Text Component
 */
export const Text: React.FC<Props> = React.memo(function Font(props) {
  return (
    <span
      className={classnames({
        [style.root]: true,
        [style.small]: props.size === "small",
        [style.medium]: props.size === "medium",
        [style.big]: props.size === "big",
        [style.white]: props.color === "white",
        [style.black]: props.color === "black",
        [style.red]: props.color === "red",
      })}
    >
      {props.children}
    </span>
  );
});
