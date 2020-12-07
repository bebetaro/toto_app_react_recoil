import React from "react";
import { useRecoilValue } from "recoil";
import * as Atoms from "../../../atoms";
import { TaskInfo } from "../../../components/molecules/modal/task-info";
import { useGetOneTask } from "../../organisms/form/hooks";
import { useTaskButtonBuilder } from "./hooks";

export const TaskInfoContainer = () => {
  const id = useRecoilValue(Atoms.selectIdState);
  const { taskName, deadline } = useGetOneTask();
  const { onDelete, onEdit } = useTaskButtonBuilder();
  return (
    <TaskInfo
      taskName={taskName}
      deadline={deadline}
      onDelete={onDelete(id)}
      onEdit={onEdit(id)}
    />
  );
};
