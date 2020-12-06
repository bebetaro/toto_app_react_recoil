import React from "react";
import { COLOR, SIZE } from "../../../../constants";
import { Button } from "../../../atoms/button";
import { Text } from "../../../atoms/text";
import style from "./style.css";

export type Props = {
  onClick: () => void;
};

/**
 * Normal Component
 */
export const Normal: React.FC<Props> = React.memo(function Normal(props) {
  return (
    <div className={style.root}>
      <Button onClick={props.onClick}>
        <Text size={SIZE.SMALL} color={COLOR.WHITE}>
          {props.children}
        </Text>
      </Button>
    </div>
  );
});
