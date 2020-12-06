import React from "react";
import { Form as InputBox } from "../../molecules/inputs/form";
import { Primary } from "../../molecules/buttons";
import { PAGE, WORDS } from "../../../constants";
import style from "./style.css";
import { ValuesOf } from "../../../atoms/types";

export type Props = {
  taskKey: string;
  dateKey: string;
  pages: ValuesOf<typeof PAGE>;
  isDisabled: boolean;
  onClick: () => void;
};

/**
 * Form Component
 */
export const Form: React.FC<Props> = React.memo(function Form(props) {
  return (
    <form className={style.root}>
      <InputBox
        atomKey={props.taskKey}
        label={WORDS.TASK_NAME}
        type={WORDS.TEXT}
      />
      <InputBox
        atomKey={props.dateKey}
        label={WORDS.DEADLINE}
        type={WORDS.DATE}
      />
      <Primary isDisabled={props.isDisabled} onClick={props.onClick}>
        {props.pages === "add" ? WORDS.ADD : WORDS.UPDATE}
      </Primary>
    </form>
  );
});
