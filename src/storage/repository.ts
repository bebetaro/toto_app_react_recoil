import { db, ITodos } from "./interface";

export class TodoRepository {
  async getAll(): Promise<Array<ITodos>> {
    return await db.todos.toArray();
  }

  async get(id: number): Promise<ITodos> {
    const result = await db.todos.get(id);
    if (result) {
      return result;
    }
    return {
      id: Infinity,
      taskName: "",
      deadline: "",
      done: false,
    };
  }

  async save(data: ITodos): Promise<void> {
    await db.todos.put(data, data.id);
  }

  async delete(id: number): Promise<void> {
    await db.todos.delete(id);
  }

  async update(
    id: number,
    property: string,
    newVal: string | boolean
  ): Promise<void> {
    await db.todos.update(id, { [property]: newVal });
  }
}
