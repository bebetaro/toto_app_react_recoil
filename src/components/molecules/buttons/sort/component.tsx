import React, { useCallback } from "react";
import classnames from "classnames";
import { useRecoilState } from "recoil";
import * as Atoms from "../../../../atoms";
import { Button } from "../../../atoms/button";
import { Text } from "../../../atoms/text";

import style from "./style.css";
import { COLOR, SIZE, SORT } from "../../../../constants";

/**
 * Sort Component
 */
export const Sort: React.FC = React.memo(function Sort() {
  const [sort, setSort] = useRecoilState(Atoms.sortState);
  console.log(sort);
  const onClickName = useCallback(() => {
    setSort(SORT.NAME);
  }, []);
  const onClickDeadLine = useCallback(() => {
    setSort(SORT.DEADLINE);
  }, []);

  return (
    <div className={style.root}>
      <div
        className={classnames({
          [style.name]: true,
          [style.select]: sort === SORT.NAME,
        })}
      >
        <Button onClick={onClickName}>
          <Text size={SIZE.SMALL} color={COLOR.WHITE}>
            {"名前順"}
          </Text>
        </Button>
      </div>
      <div
        className={classnames({
          [style.date]: true,
          [style.select]: sort === SORT.DEADLINE,
        })}
      >
        <Button onClick={onClickDeadLine}>
          <Text size={SIZE.SMALL} color={COLOR.WHITE}>
            {"日付順"}
          </Text>
        </Button>
      </div>
    </div>
  );
});
