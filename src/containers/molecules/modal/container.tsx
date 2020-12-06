import React from "react";
import { useRecoilValue, useRecoilState, useRecoilCallback } from "recoil";
import * as Atoms from "../../../atoms";
import { Modal } from "../../../components/molecules/modal/modal";

export const ModalContainer = (): JSX.Element => {
  const task = useRecoilValue(Atoms.taskSelector("modal"));
  const [isOpen, setModal] = useRecoilState(Atoms.modalState);
  const onCloseModal = React.useCallback(() => {
    setModal(false);
  }, []);
  const onDelete = useRecoilCallback(
    ({ snapshot, set }) => async () => {
      const todos = await snapshot.getPromise(Atoms.todoState);
      const id = await snapshot.getPromise(Atoms.deleteIdState);
      const { [id]: _, ...rest } = todos;
      set(Atoms.todoState, rest);
      set(Atoms.modalState, false);
    },
    []
  );
  return (
    <Modal
      isOpen={isOpen}
      taskName={task.taskName}
      onDelete={onDelete}
      onCloseModal={onCloseModal}
    />
  );
};
