import React from "react";
import { useSetRecoilState } from "recoil";
import { Button } from "../../../atoms/button";
import style from "./style.css";
import { pageState } from "../../../../atoms";
import { PAGE } from "../../../../constants";

/**
 * Add Component
 */
export const Add: React.FC = function Add() {
  const setPage = useSetRecoilState(pageState);
  const onClick = React.useCallback(() => {
    setPage(PAGE.ADD);
  }, []);
  return (
    <div className={style.root}>
      <Button onClick={onClick} />
    </div>
  );
};
