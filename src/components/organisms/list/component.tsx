import React from "react";
import { Row } from "../../molecules/table/row";

import style from "./style.css";
type Task = {
  id: string;
  taskName: string;
  deadline: string;
};
export type Props = {
  data: Array<Task>;
  onEdit: (id: string) => () => void;
  onDelete: (id: string) => () => void;
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
          onEdit={props.onEdit(task.id)}
          onDelete={props.onDelete(task.id)}
        />
      ))}
    </section>
  );
});

List.defaultProps = {};
