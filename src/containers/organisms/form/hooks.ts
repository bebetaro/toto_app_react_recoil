import { useEffect } from "react";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import * as Atoms from "../../../atoms";
import { ValuesOf } from "../../../atoms/types";
import { ATOMS_FAMILY, PAGE } from "../../../constants";
import { storage } from "../../../storage";

export const useOnClick = (page: ValuesOf<typeof PAGE>) => {
  const onCreate = useRecoilCallback(({ snapshot, set }) => async () => {
    const id = Date.now();
    const taskName = await snapshot.getPromise(
      Atoms.inputAtomFamily(ATOMS_FAMILY.TASK_NAME)
    );
    const deadline = await snapshot.getPromise(
      Atoms.inputAtomFamily(ATOMS_FAMILY.DEAD_LINE)
    );
    await storage.save({ id, taskName, deadline, done: false });
    set(Atoms.pageState, PAGE.LIST);
  });

  const onUpdate = useRecoilCallback(({ snapshot, set }) => async () => {
    const taskName = await snapshot.getPromise(
      Atoms.inputAtomFamily(ATOMS_FAMILY.TASK_NAME)
    );
    const deadline = await snapshot.getPromise(
      Atoms.inputAtomFamily(ATOMS_FAMILY.DEAD_LINE)
    );
    const id = await snapshot.getPromise(Atoms.selectIdState);
    await storage.save({ taskName, deadline, done: false, id });
    set(Atoms.pageState, PAGE.LIST);
  });

  return page === "add" ? onCreate : onUpdate;
};

export const useGetOneTask = () => {
  const id = useRecoilValue(Atoms.selectIdState);
  const page = useRecoilValue(Atoms.pageState);
  const [taskName, setTaskName] = useRecoilState(
    Atoms.inputAtomFamily(ATOMS_FAMILY.TASK_NAME)
  );
  const [deadline, setDeadline] = useRecoilState(
    Atoms.inputAtomFamily(ATOMS_FAMILY.DEAD_LINE)
  );

  // set initial value
  useEffect(() => {
    if (page !== "add") {
      storage.get(id).then((task) => {
        setTaskName(task.taskName);
        setDeadline(task.deadline);
      });
    }
    return () => {
      setTaskName("");
      setDeadline("");
    };
  }, [id]);

  return { taskName, deadline };
};
