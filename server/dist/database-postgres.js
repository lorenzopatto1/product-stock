"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabasePostgres = void 0;
const node_crypto_1 = require("node:crypto");
const db_1 = require("./db/db");
class DatabasePostgres {
    async list() {
        const products = await (0, db_1.sql) `select * from stock`;
        return products;
    }
    async create(product) {
        const productId = (0, node_crypto_1.randomUUID)();
        const { name, price, quantity } = product;
        await (0, db_1.sql) `insert into stock (id, name, price, quantity) VALUES (${productId}, ${name}, ${price}, ${quantity})`;
    }
    async update(id, product) {
        const { name, price, quantity } = product;
        await (0, db_1.sql) `update stock set name = ${name}, price = ${price}, quantity = ${quantity} where id = ${id}`;
    }
    async delete(id) {
        await (0, db_1.sql) `delete from stock where id = ${id}`;
    }
}
exports.DatabasePostgres = DatabasePostgres;
