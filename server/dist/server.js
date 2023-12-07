"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_postgres_1 = require("./database-postgres");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const database = new database_postgres_1.DatabasePostgres();
app.post("/product", async (request, response) => {
    const { name, price, quantity } = request.body;
    await database.create({
        name,
        price,
        quantity,
    });
    return response.status(201).send();
});
app.put("/product/:id", async (request, response) => {
    const id = request.params.id;
    const { name, price, quantity } = request.body;
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
