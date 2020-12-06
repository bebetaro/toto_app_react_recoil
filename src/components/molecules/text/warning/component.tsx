import React from "react";
import { COLOR, SIZE } from "../../../../constants";
import { Text } from "../../../atoms/text";
import { getRestDate } from "./utils";

export type Props = {
  deadline: string;
};

/**
 * Warning Component
 */
export const Warning: React.FC<Props> = React.memo(function Warning(props) {
  const rest = getRestDate(props.deadline);
  if (rest < 0) {
    return (
      <Text size={SIZE.SMALL} color={COLOR.RED}>
        このタスクは既に期限切れです
      </Text>
    );
  } else if (rest >= 0 && 8 > rest) {
    return (
      <Text
        size={SIZE.SMALL}
        color={COLOR.RED}
      >{`このタスクは${rest}日後に期限を迎えます`}</Text>
    );
  }
  return <div />;
});
