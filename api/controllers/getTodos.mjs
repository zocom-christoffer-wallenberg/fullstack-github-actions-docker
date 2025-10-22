export async function getTodos(req, res) {
  const response = await fetch(process.env.DATABASE);
  const data = await response.json();

  res.json({ success: true, todos: data });
}
