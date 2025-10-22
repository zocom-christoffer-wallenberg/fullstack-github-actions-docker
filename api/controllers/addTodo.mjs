import { insertTodo } from "../models/todo.mjs";

export async function addTodo(req, res) {
  const { todo } = request.body;

  const result = await insertTodo(todo);

  res.send({ success: true, todo: result });
}
