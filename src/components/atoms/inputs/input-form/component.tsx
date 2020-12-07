import React from "react";
import { useRecoilState } from "recoil";
import { inputAtomFamily } from "../../../../atoms";
import style from "./style.css";

export type Props = {
  atomKey: string;
  type: string;
};

/**
 * InputForm Component
 */
export const InputForm: React.FC<Props> = React.memo(function InputForm(props) {
  const [value, setValue] = useRecoilState(inputAtomFamily(props.atomKey));
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    []
  );
  return (
    <input
      type={props.type}
      value={value}
      className={style.root}
      onChange={onChange}
    />
  );
});
