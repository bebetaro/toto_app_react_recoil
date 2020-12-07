import { atom, atomFamily } from "recoil";
import { PAGE } from "../constants";
import { Order, Sort, Task, ValuesOf } from "./types";

// app state
export const pageState = atom<ValuesOf<typeof PAGE>>({
  key: "pageState",
  default: "list",
});

export const selectIdState = atom<number>({
  key: "selectIdState",
  default: Infinity,
});

export const deleteIdState = atom<number>({
  key: "deleteIdState",
  default: Infinity,
});

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});

// data state
export const todoState = atom<Task[]>({
  key: "todoState",
  default: [],
});

export const orderState = atom<Order>({
  key: "orderState",
  default: "asc",
});

export const sortState = atom<Sort>({
  key: "sortState",
  default: "taskName",
});

export const inputAtomFamily = atomFamily({
  key: "inputAtomFamily",
  default: "",
});
