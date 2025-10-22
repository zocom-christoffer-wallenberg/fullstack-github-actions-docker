import express, { json } from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import cors from "cors";
import "dotenv/config";

import todoRouter from "./routes/todo.mjs";

app.use(json());
app.use(cors());

app.use("/api/todo", todoRouter);

app.listen(PORT, () => {
  console.log("Server started");
});
