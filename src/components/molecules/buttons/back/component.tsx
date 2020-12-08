import React from "react";
import { useSetRecoilState } from "recoil";
import { Button } from "../../../atoms/button";
import backImage from "../../../../assets/images/icon-24-back.svg";
import style from "./style.css";
import { pageState } from "../../../../atoms";
import { PAGE } from "../../../../constants";
import { Image } from "../../../atoms/image";

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
      <Button onClick={onClick}>
        <Image src={backImage} alt={"Back Button"} height={24} width={24} />
      </Button>
    </div>
  );
});
