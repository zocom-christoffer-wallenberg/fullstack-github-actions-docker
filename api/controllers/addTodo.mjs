export async function addTodo(req, res) {
  const { todo } = request.body;

  const response = await fetch(process.env.DATABASE, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todo: todo }),
  });
  const data = await response.json();

  res.send({ success: true, message: "Todo created" });
}
