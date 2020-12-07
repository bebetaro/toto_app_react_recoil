import React from "react";
import { Task } from "../../../atoms/types";
import { Row } from "../../molecules/table/row";

import style from "./style.css";

export type Props = {
  data: Array<Task>;
  onOpenModal: (id: number) => () => void;
};

/**
 * List Component
 */
export const List: React.FC<Props> = React.memo(function List(props) {
  return (
    <section className={style.root}>
      {props.data.map((task) => (
        <Row
          key={task.id}
          {...task}
          isDone={task.done}
          onClick={props.onOpenModal(task.id)}
        />
      ))}
    </section>
  );
});

List.defaultProps = {};
