import React from "react";
import { useSetRecoilState } from "recoil";
import { Button } from "../../../atoms/button";
import add from "../../../../assets/images/icon-24-expansion.svg";
import style from "./style.css";
import { pageState } from "../../../../atoms";
import { PAGE } from "../../../../constants";
import { Image } from "../../../atoms/image";

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
      <Button onClick={onClick}>
        <Image src={add} alt={"Add Button"} height={32} width={32} />
      </Button>
    </div>
  );
};
