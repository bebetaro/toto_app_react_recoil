import React from "react";
import { ValuesOf } from "../../../atoms/types";
import { COLOR, PAGE, SIZE } from "../../../constants";
import { Text } from "../../atoms/text";
import { Back } from "../buttons/back";

import style from "./style.css";

export type Props = {
  title: string;
  page: ValuesOf<typeof PAGE>;
};

/**
 * Header Component
 */
export const Header: React.FC<Props> = React.memo(function Header(props) {
  return (
    <h2 className={style.root}>
      {props.page !== PAGE.LIST && <Back />}
      <Text size={SIZE.BIG} color={COLOR.WHITE}>
        {props.title}
      </Text>
    </h2>
  );
});
