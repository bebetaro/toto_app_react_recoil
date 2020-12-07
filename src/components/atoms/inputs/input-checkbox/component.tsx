import React from "react";

export type Props = {
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * InputCheckBox Component
 */
export const InputCheckBox: React.FC<Props> = React.memo(function InputCheckBox(
  props
) {
  return (
    <input
      type={"checkbox"}
      onChange={props.onChange}
      checked={props.isChecked}
    />
  );
});
