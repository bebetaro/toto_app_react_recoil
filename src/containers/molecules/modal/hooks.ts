import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import * as Atoms from "../../../atoms";
import { Task } from "../../../atoms/types";
import { Modal } from "../../../components/molecules/modal/modal";
import { storage } from "../../../storage";

export const useLaunchModal = () => {
  const id = useRecoilValue(Atoms.deleteIdState);
  const [task, setTask] = useState<Task>({
    id: Infinity,
    taskName: "",
    deadline: "",
    done: false,
  });

  useEffect(() => {
    storage.get(id).then((task) => setTask(task));
  }, [id]);

  return task.taskName;
};
