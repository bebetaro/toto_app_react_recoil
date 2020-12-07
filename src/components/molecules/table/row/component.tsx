import React from "react";
import { COLOR, SIZE, WORDS } from "../../../../constants";
import { Text } from "../../../atoms/text";
import { Normal } from "../../buttons";
import { Warning } from "../../text/warning";
import style from "./style.css";

export type Props = {
  id: number;
  taskName: string;
  deadline: string;
  onEdit: () => void;
  onDelete: () => void;
};

/**
 * Row Component
 */
export const Row: React.FC<Props> = React.memo(function Row(props) {
  return (
    <div className={style.root}>
      <div className={style.taskInfo}>
        <p className={style.para}>
          <Text size={SIZE.MEDIUM} color={COLOR.BLACK}>
            {`${WORDS.TASK_NAME}: ${props.taskName}`}
          </Text>
        </p>
        <p className={style.para}>
          <Text size={SIZE.MEDIUM} color={COLOR.BLACK}>
            {`${WORDS.DEADLINE}: ${props.deadline}`}
          </Text>
        </p>
      </div>
      <div className={style.buttons}>
        <Normal onClick={props.onEdit}>{WORDS.EDIT}</Normal>
        <Normal onClick={props.onDelete}>{WORDS.DELETE}</Normal>
      </div>
      <Warning deadline={props.deadline} />
    </div>
  );
});

Row.defaultProps = {};
