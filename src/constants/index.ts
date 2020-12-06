export const SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  BIG: "big",
} as const;

export const COLOR = {
  WHITE: "white",
  BLACK: "black",
  RED: "red",
} as const;

export const PAGE = {
  LIST: "list",
  ADD: "add",
  UPDATE: "update",
} as const;

export const WORDS = {
  TASK_NAME: "タスク名",
  DEADLINE: "期限",
  TEXT: "text",
  DATE: "date",
  ADD: "作成",
  UPDATE: "更新",
  EDIT: "編集",
  DELETE: "削除",
};

export const ATOMS_FAMILY = {
  TASK_NAME: "taskName",
  DEAD_LINE: "date",
};

export const ORDER = {
  ASC: "asc",
  DESC: "desc",
} as const;

export const SORT = {
  NAME: "taskName",
  DEADLINE: "deadline",
} as const;
