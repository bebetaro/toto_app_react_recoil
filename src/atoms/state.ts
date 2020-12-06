import { atom, atomFamily } from "recoil";
import { PAGE } from "../constants";
import { Order, Sort, Todos, ValuesOf } from "./types";

// app state
export const pageState = atom<ValuesOf<typeof PAGE>>({
  key: "pageState",
  default: "list",
});

export const selectIdState = atom<string>({
  key: "selectIdState",
  default: "",
});

export const deleteIdState = atom<string>({
  key: "deleteIdState",
  default: "",
});

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});

// data state
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

export const todoState = atom<Todos>({
  key: "todoState",
  default: {},
});
