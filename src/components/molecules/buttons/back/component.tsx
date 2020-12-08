import React from "react";
import { useSetRecoilState } from "recoil";
import { Button } from "../../../atoms/button";
import style from "./style.css";
import { pageState } from "../../../../atoms";
import { PAGE } from "../../../../constants";

/**
 * Back Component
 */
export const Back: React.FC = React.memo(function Back() {
  const setPage = useSetRecoilState(pageState);
  const onClick = React.useCallback(() => {
    setPage(PAGE.LIST);
  }, []);
  return (
    <div className={style.root}>
      <Button onClick={onClick} />
    </div>
  );
});
