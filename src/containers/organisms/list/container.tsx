import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import * as Atoms from "../../../atoms";
import { List } from "../../../components/organisms/list";
import { PAGE } from "../../../constants";

export const ListContainer = (): JSX.Element => {
  const data = useRecoilValue(Atoms.todoSelector);
  const setSelectedId = useSetRecoilState(Atoms.selectIdState);
  const setDeleteId = useSetRecoilState(Atoms.deleteIdState);
  const setPage = useSetRecoilState(Atoms.pageState);
  const setModal = useSetRecoilState(Atoms.modalState);

  const onEdit = React.useCallback(
    (id: string) => () => {
      setSelectedId(id);
      setPage(PAGE.UPDATE);
    },
    []
  );

  const onDelete = React.useCallback(
    (id: string) => () => {
      setDeleteId(id);
      setModal(true);
    },
    []
  );

  return <List data={data} onEdit={onEdit} onDelete={onDelete} />;
};
