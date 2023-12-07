import { randomUUID } from "node:crypto";
import { sql } from "./db/db";

interface ProductProps {
  name: string;
  quantity: number;
  price: number;
}

export class DatabasePostgres {
  async list() {
    const products = await sql`select * from stock`;
    return products;
  }

  async create(product: ProductProps) {
    const productId = randomUUID();

    const { name, price, quantity } = product;

    await sql`insert into stock (id, name, price, quantity) VALUES (${productId}, ${name}, ${price}, ${quantity})`;
  }

  async update(id: string, product: ProductProps) {
    const { name, price, quantity } = product;

    await sql`update stock set name = ${name}, price = ${price}, quantity = ${quantity} where id = ${id}`;
  }

  async delete(id: string) {
    await sql`delete from stock where id = ${id}`;
  }
}
