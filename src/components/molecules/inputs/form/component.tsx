import React from "react";
import { COLOR, SIZE } from "../../../../constants";
import { InputForm } from "../../../atoms/inputs/input-form";
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
      <InputForm atomKey={props.atomKey} type={props.type} />
    </label>
  );
});

Form.defaultProps = {};
