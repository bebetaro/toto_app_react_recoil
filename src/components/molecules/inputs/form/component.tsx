import React from "react";
import { COLOR, SIZE } from "../../../../constants";
import { Input } from "../../../atoms/input";
import { Text } from "../../../atoms/text";
import style from "./style.css";

export type Props = {
  label: string;
  type: string;
  atomKey: string;
};

/**
 * Form Component
 */
export const Form: React.FC<Props> = React.memo(function Form(props) {
  return (
    <label className={style.root}>
      <Text size={SIZE.SMALL} color={COLOR.BLACK}>
        {props.label}
      </Text>
      <Input atomKey={props.atomKey} type={props.type} />
    </label>
  );
});

Form.defaultProps = {};
