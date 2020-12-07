import Dexie from "dexie";

export interface ITodos {
  id: number;
  taskName: string;
  deadline: string;
  done: boolean;
}

export class TodoDatabase extends Dexie {
  todos: Dexie.Table<ITodos, number>;
  constructor() {
    super("TodoDatabase");
    this.version(1).stores({
      todos: "++id,name,deadline,done",
    });
    this.todos = this.table("todos");
  }
}

const db = new TodoDatabase();

export { db };
