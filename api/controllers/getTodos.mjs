import { getTodos } from "../models/todo.mjs";

export async function getTodos(req, res) {
  const todos = await getTodos();

  res.json({ success: true, todos });
}
