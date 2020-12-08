import React from "react";
import { useRecoilState } from "recoil";
import ascImage from "../../../../assets/images/icon-24-arrow-up.svg";
import descImage from "../../../../assets/images/icon-24-arrow-down.svg";
import * as Atoms from "../../../../atoms";
import { COLOR, ORDER, SIZE } from "../../../../constants";
import { Button } from "../../../atoms/button";
import { Image } from "../../../atoms/image";
import style from "./style.css";
import { Text } from "../../../atoms/text";

/**
 * Order Component
 */
export const Order: React.FC = React.memo(function Order() {
  const [order, setOrder] = useRecoilState(Atoms.orderState);
  const onClick = React.useCallback(() => {
    setOrder((prevOrder) => (prevOrder === ORDER.ASC ? ORDER.DESC : ORDER.ASC));
  }, []);
  return (
    <div className={style.root}>
      <Button onClick={onClick}>
        <div className={style.inside}>
          <Image
            src={order === ORDER.ASC ? ascImage : descImage}
            alt={"order image"}
            height={24}
            width={24}
          />
          <Text size={SIZE.SMALL} color={COLOR.BLACK}>
            {order === ORDER.ASC ? "昇順" : "降順"}
          </Text>
        </div>
      </Button>
    </div>
  );
});
