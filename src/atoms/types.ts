export type Todos = {
  [id: string]: {
    taskName: string;
    deadline: string;
  };
};

export type ValuesOf<T> = T[keyof T];

export type Order = "asc" | "desc";

export type Sort = "taskName" | "deadline";
