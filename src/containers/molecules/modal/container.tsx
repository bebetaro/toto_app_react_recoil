import React from "react";
import { useRecoilState, useRecoilCallback } from "recoil";
import * as Atoms from "../../../atoms";
import { DialogBox } from "../../../components/molecules/modal/dialog-box";
import { Modal } from "../../../components/molecules/modal/modal";
import { MODAL } from "../../../constants";
import { storage } from "../../../storage";
import { TaskInfoContainer } from "../task-info";
import { useLaunchModal } from "./hooks";

export const ModalContainer = (): JSX.Element => {
  const [isOpen, setModal] = useRecoilState(Atoms.openState);
  const [modalType, setModalType] = useRecoilState(Atoms.modalState);
  const onCloseModal = React.useCallback(() => {
    setModal(false);
  }, []);
  const onReturnTaskInfo = React.useCallback(() => {
    setModalType(MODAL.TASK_INFO);
  }, []);
  const onDelete = useRecoilCallback(
    ({ snapshot, set }) => async () => {
      const id = await snapshot.getPromise(Atoms.deleteIdState);
      await storage.delete(id);
      const todos = await storage.getAll();
      set(Atoms.todoState, todos);
      set(Atoms.openState, false);
    },
    []
  );

  const taskName = useLaunchModal();

  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      {modalType === "delete" ? (
        <DialogBox
          taskName={taskName}
          onReturnTaskInfo={onReturnTaskInfo}
          onDelete={onDelete}
        />
      ) : (
        <TaskInfoContainer />
      )}
    </Modal>
  );
};
