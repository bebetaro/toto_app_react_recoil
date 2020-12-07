import React from "react";
import classnames from "classnames";
import { COLOR, SIZE } from "../../../../constants";
import { Button } from "../../../atoms/button";
import { Text } from "../../../atoms/text";
import { Checkbox } from "../../inputs/checkbox";
import { Warning } from "../../text/warning";
import style from "./style.css";

export type Props = {
  id: number;
  isDone: boolean;
  taskName: string;
  deadline: string;
  onClick: () => void;
};

/**
 * Row Component
 */
export const Row: React.FC<Props> = React.memo(function Row(props) {
  return (
    <div
      className={classnames({
        [style.root]: true,
        [style.done]: props.isDone,
      })}
    >
      <Checkbox id={props.id} isDone={props.isDone} />
      <Button onClick={props.onClick} isDisabled={props.isDone}>
        <Text size={SIZE.MEDIUM} color={COLOR.BLACK}>
          {props.taskName}
        </Text>
      </Button>
      {props.isDone ? (
        <Text size={SIZE.SMALL} color={COLOR.BLACK}>
          このタスクは完了しました
        </Text>
      ) : (
        <Warning deadline={props.deadline} />
      )}
    </div>
  );
});

Row.defaultProps = {};
