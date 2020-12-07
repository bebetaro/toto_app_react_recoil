import { useCallback } from "react";
import { orderBy } from "lodash-es";
import { useRecoilValue, useSetRecoilState } from "recoil";
import * as Atoms from "../../../atoms";
import { Task } from "../../../atoms/types";
import { PAGE } from "../../../constants";

export const useSortItems = (): Task[] => {
  const items = useRecoilValue(Atoms.todoState);
  const sort = useRecoilValue(Atoms.sortState);
  const order = useRecoilValue(Atoms.orderState);
  return orderBy(items, sort, order);
};

export const useListButtonBuilder = () => {
  const setSelectedId = useSetRecoilState(Atoms.selectIdState);
  const setDeleteId = useSetRecoilState(Atoms.deleteIdState);
  const setPage = useSetRecoilState(Atoms.pageState);
  const setModal = useSetRecoilState(Atoms.openState);

  const onEdit = useCallback(
    (id: number) => () => {
      setSelectedId(id);
      setPage(PAGE.UPDATE);
    },
    []
  );

  const onDelete = useCallback(
    (id: number) => () => {
      setDeleteId(id);
      setModal(true);
    },
    []
  );

  return { onEdit, onDelete };
};
