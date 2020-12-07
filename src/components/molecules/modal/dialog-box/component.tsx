import React from "react";
import { COLOR, SIZE } from "../../../../constants";
import * as Button from "../../buttons";
import { Text } from "../../../atoms/text";
import style from "./style.css";

export type Props = {
  taskName: string;
  onDelete: () => void;
  onReturnTaskInfo: () => void;
};

/**
 * DialogBox Component
 */
export const DialogBox: React.FC<Props> = React.memo(function DialogBox(props) {
  return (
    <div className={style.root}>
      <Text size={SIZE.MEDIUM} color={COLOR.WHITE}>
        {`${props.taskName}
        を削除してもよろしいですか？`}
      </Text>
      <div>
        <Button.Secondary onClick={props.onReturnTaskInfo}>
          いいえ
        </Button.Secondary>
        <Button.Primary onClick={props.onDelete}>はい</Button.Primary>
      </div>
    </div>
  );
});
