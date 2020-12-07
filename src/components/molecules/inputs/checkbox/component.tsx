import React from "react";
import { useRecoilCallback } from "recoil";
import classnames from "classnames";
import { storage } from "../../../../storage";
import * as Atoms from "../../../../atoms";
import { InputCheckBox } from "../../../atoms/inputs/input-checkbox";

import style from "./style.css";

export type Props = {
  id: number;
  isDone: boolean;
};

/**
 * Checkbox Component
 */
export const Checkbox: React.FC<Props> = React.memo(function Checkbox(props) {
  const onChange = useRecoilCallback(
    ({ set }) => async (event: React.ChangeEvent<HTMLInputElement>) => {
      await storage.update(props.id, "done", event.target.checked);
      const todos = await storage.getAll();
      set(Atoms.todoState, todos);
    },
    [props.id]
  );
  return (
    <label
      className={classnames({
        [style.root]: true,
        [style.checked]: props.isDone,
      })}
    >
      <InputCheckBox isChecked={props.isDone} onChange={onChange} />
    </label>
  );
});

Checkbox.defaultProps = {};
