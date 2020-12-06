import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Form } from "../../../components/organisms/form";
import * as Atoms from "../../../atoms";
import { ATOMS_FAMILY } from "../../../constants";
import { useOnClick } from "./hooks";

export const FormContainer = (): JSX.Element => {
  const page = useRecoilValue(Atoms.pageState);
  const task = useRecoilValue(Atoms.taskSelector("edit"));
  const [taskName, setTaskName] = useRecoilState(
    Atoms.inputAtomFamily(ATOMS_FAMILY.TASK_NAME)
  );
  const [deadline, setDeadline] = useRecoilState(
    Atoms.inputAtomFamily(ATOMS_FAMILY.DEAD_LINE)
  );

  const onClick = useOnClick(page);

  // set initial value
  useEffect(() => {
    if (page === "update") {
      setTaskName(task.taskName);
      setDeadline(task.deadline);
    }
    return () => {
      setTaskName("");
      setDeadline("");
    };
  }, []);

  return (
    <Form
      pages={page}
      onClick={onClick}
      taskKey={ATOMS_FAMILY.TASK_NAME}
      dateKey={ATOMS_FAMILY.DEAD_LINE}
      isDisabled={taskName === "" || deadline === ""}
    />
  );
};
