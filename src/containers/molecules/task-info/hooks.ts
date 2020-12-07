import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import * as Atoms from "../../../atoms";
import { MODAL, PAGE } from "../../../constants";

export const useTaskButtonBuilder = () => {
  const setSelectedId = useSetRecoilState(Atoms.selectIdState);
  const setDeleteId = useSetRecoilState(Atoms.deleteIdState);
  const setPage = useSetRecoilState(Atoms.pageState);
  const setModal = useSetRecoilState(Atoms.openState);
  const setModalType = useSetRecoilState(Atoms.modalState);

  const onEdit = useCallback(
    (id: number) => () => {
      setSelectedId(id);
      setPage(PAGE.UPDATE);
      setModal(false);
    },
    []
  );

  const onDelete = useCallback(
    (id: number) => () => {
      setDeleteId(id);
      setModalType(MODAL.DELETE);
    },
    []
  );

  return { onEdit, onDelete };
};
