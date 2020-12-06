import React from "react";
import style from "./style.css";

export type Props = {
  isDisabled?: boolean;
  onClick: () => void;
};

/**
 * Button Component
 */
export const Button: React.FC<Props> = React.memo(function Button(props) {
  const onClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      props.onClick();
    },
    []
  );
  return (
    <button
      className={style.root}
      disabled={props.isDisabled}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
});
