import React, { useCallback, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import * as Atoms from "../../../atoms";
import { List } from "../../../components/organisms/list";
import { MODAL } from "../../../constants";
import { storage } from "../../../storage";
import { useSortItems } from "./hooks";

export const ListContainer = (): JSX.Element => {
  const setItems = useSetRecoilState(Atoms.todoState);
  const setOpen = useSetRecoilState(Atoms.openState);
  const setModalType = useSetRecoilState(Atoms.modalState);
  const setSelectedId = useSetRecoilState(Atoms.selectIdState);

  useEffect(() => {
    storage.getAll().then((items) => {
      setItems(items);
    });
  }, []);

  const data = useSortItems();
  const onOpenModal = useCallback(
    (id: number) => () => {
      setSelectedId(id);
      setOpen(true);
      setModalType(MODAL.TASK_INFO);
    },
    []
  );

  return <List data={data} onOpenModal={onOpenModal} />;
};
