import { orderBy } from "lodash-es";
import { selector, selectorFamily } from "recoil";
import {
  todoState,
  sortState,
  orderState,
  deleteIdState,
  selectIdState,
} from "./state";

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const items = Object.keys(todos).map((key) => ({
      id: key,
      ...todos[key],
    }));
    const sort = get(sortState);
    const order = get(orderState);
    return orderBy(items, sort, order);
  },
});

export const taskSelector = selectorFamily({
  key: "taskSelectorFamily",
  get: (param) => ({ get }) => {
    const id = param === "modal" ? get(deleteIdState) : get(selectIdState);
    const todos = get(todoState);
    return todos[id];
  },
});
