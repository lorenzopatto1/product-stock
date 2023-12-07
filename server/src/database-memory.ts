import { randomUUID } from "node:crypto";

interface ProductProps {
  name: string;
  quantity: number;
  price: number;
}

export class DatabaseMemory {
  #products = new Map();

  list() {
    return Array.from(this.#products.entries()).map((productsArray) => {
      const id = productsArray[0];
      const data = productsArray[1];

      return {
        id,
        ...data,
      };
    });
  }

  create(product: ProductProps) {
    const productId = randomUUID();

    this.#products.set(productId, product);
  }

  update(id: string, product: ProductProps) {
    this.#products.set(id, product);
  }

  delete(id: string) {
    this.#products.delete(id);
  }
}
