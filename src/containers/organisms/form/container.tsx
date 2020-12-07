import React from "react";
import { useRecoilValue } from "recoil";
import { Form } from "../../../components/organisms/form";
import * as Atoms from "../../../atoms";
import { ATOMS_FAMILY } from "../../../constants";
import { useGetOneTask, useOnClick } from "./hooks";

export const FormContainer = (): JSX.Element => {
  const page = useRecoilValue(Atoms.pageState);
  const { taskName, deadline } = useGetOneTask();
  const onClick = useOnClick(page);

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
