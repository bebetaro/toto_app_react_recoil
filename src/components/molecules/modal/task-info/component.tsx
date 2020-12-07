import React from "react";
import { COLOR, SIZE } from "../../../../constants";
import { Text } from "../../../atoms/text";
import { Normal } from "../../buttons";

import style from "./style.css";

export type Props = {
  taskName: string;
  deadline: string;
  onEdit: () => void;
  onDelete: () => void;
};

/**
 * TaskInfo Component
 */
export const TaskInfo: React.FC<Props> = React.memo(function TaskInfo(props) {
  return (
    <div className={style.root}>
      <Text size={SIZE.SMALL} color={COLOR.WHITE}>
        タスク名
      </Text>
      <p>
        <Text size={SIZE.MEDIUM} color={COLOR.WHITE}>
          {props.taskName}
        </Text>
      </p>
      <Text size={SIZE.SMALL} color={COLOR.WHITE}>
        期限
      </Text>
      <p>
        <Text size={SIZE.MEDIUM} color={COLOR.WHITE}>
          {props.deadline}
        </Text>
      </p>
      <div className={style.buttons}>
        <Normal onClick={props.onDelete}>削除</Normal>
        <Normal onClick={props.onEdit}>編集</Normal>
      </div>
    </div>
  );
});
