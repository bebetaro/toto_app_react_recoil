import React from "react";
import classnames from "classnames";
import { COLOR, SIZE } from "../../../../constants";
import { Button } from "../../../atoms/button";
import { Text } from "../../../atoms/text";
import style from "./style.css";

export type Props = {
  isDisabled?: boolean;
  onClick: () => void;
};

/**
 * Primary Component
 */
export const Primary: React.FC<Props> = React.memo(function Primary(props) {
  return (
    <div
      className={classnames({
        [style.root]: true,
        [style.active]: !props.isDisabled,
        [style.disabled]: props.isDisabled,
      })}
    >
      <Button onClick={props.onClick} isDisabled={props.isDisabled}>
        <Text size={SIZE.MEDIUM} color={COLOR.WHITE}>
          {props.children}
        </Text>
      </Button>
    </div>
  );
});
