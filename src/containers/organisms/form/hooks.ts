import { useRecoilCallback } from "recoil";
import * as Atoms from "../../../atoms";
import { ValuesOf } from "../../../atoms/types";
import { ATOMS_FAMILY, PAGE } from "../../../constants";

export const useOnClick = (page: ValuesOf<typeof PAGE>) => {
  const onCreate = useRecoilCallback(({ snapshot, set }) => async () => {
    const taskName = await snapshot.getPromise(
      Atoms.inputAtomFamily(ATOMS_FAMILY.TASK_NAME)
    );
    const deadline = await snapshot.getPromise(
      Atoms.inputAtomFamily(ATOMS_FAMILY.DEAD_LINE)
    );
    const id = Date.now().toString();
    set(Atoms.todoState, (prevState) => ({
      ...prevState,
      ...{ [id]: { taskName, deadline } },
    }));
    set(Atoms.pageState, PAGE.LIST);
  });

  const onUpdate = useRecoilCallback(({ snapshot, set }) => async () => {
    const newTask = await snapshot.getPromise(
      Atoms.inputAtomFamily(ATOMS_FAMILY.TASK_NAME)
    );
    const newDeadline = await snapshot.getPromise(
      Atoms.inputAtomFamily(ATOMS_FAMILY.DEAD_LINE)
    );
    const id = await snapshot.getPromise(Atoms.selectIdState);
    set(Atoms.todoState, (prevState) => ({
      ...prevState,
      ...{ [id]: { taskName: newTask, deadline: newDeadline } },
    }));
    set(Atoms.pageState, PAGE.LIST);
  });

  return page === "add" ? onCreate : onUpdate;
};
