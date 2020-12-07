export type Task = {
  id: number;
  taskName: string;
  deadline: string;
  done: boolean;
};

export type ValuesOf<T> = T[keyof T];

export type Order = "asc" | "desc";

export type Sort = "taskName" | "deadline";
