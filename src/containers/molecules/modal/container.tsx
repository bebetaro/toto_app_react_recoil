import React from "react";
import { useRecoilState, useRecoilCallback } from "recoil";
import * as Atoms from "../../../atoms";
import { Modal } from "../../../components/molecules/modal/modal";
import { storage } from "../../../storage";
import { useLaunchModal } from "./hooks";

export const ModalContainer = (): JSX.Element => {
  const [isOpen, setModal] = useRecoilState(Atoms.modalState);
  const onCloseModal = React.useCallback(() => {
    setModal(false);
  }, []);
  const onDelete = useRecoilCallback(
    ({ snapshot, set }) => async () => {
      const id = await snapshot.getPromise(Atoms.deleteIdState);
      await storage.delete(id);
      const todos = await storage.getAll();
      set(Atoms.todoState, todos);
      set(Atoms.modalState, false);
    },
    []
  );

  const taskName = useLaunchModal();

  return (
    <Modal
      isOpen={isOpen}
      taskName={taskName}
      onDelete={onDelete}
      onCloseModal={onCloseModal}
    />
  );
};
