import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import * as Atoms from "../../../atoms";
import { List } from "../../../components/organisms/list";
import { storage } from "../../../storage";
import { useListButtonBuilder, useSortItems } from "./hooks";

export const ListContainer = (): JSX.Element => {
  const setItems = useSetRecoilState(Atoms.todoState);
  useEffect(() => {
    storage.getAll().then((items) => {
      setItems(items);
    });
  }, []);

  const data = useSortItems();
  const { onDelete, onEdit } = useListButtonBuilder();

  return <List data={data} onEdit={onEdit} onDelete={onDelete} />;
};
