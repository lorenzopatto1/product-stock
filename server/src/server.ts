import express from "express";
import cors from "cors";
import { DatabasePostgres } from "./database-postgres";

interface RequestBody {
  name: string;
  quantity: number;
  price: number;
}

const app = express();

app.use(cors());
app.use(express.json());

const database = new DatabasePostgres();

app.post("/product", async (request, response) => {
  const { name, price, quantity } = request.body as RequestBody;
  await database.create({
    name,
    price,
    quantity,
  });

  return response.status(201).send();
});

app.put("/product/:id", async (request, response) => {
  const id = request.params.id;
  const { name, price, quantity } = request.body as RequestBody;
  await database.update(id, { name, price, quantity });

  return response.status(201).send();
});

app.delete("/product/:id", async (request, response) => {
  const id = request.params.id;
  await database.delete(id);
  response.send(204);
});

app.get("/", async (request, response) => {
  const products = await database.list();
  response.send(products);
});

app.listen(process.env.PORT || "3333", () => {
  console.log("listening on http://localhost:3333/");
});
