"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseMemory = void 0;
const node_crypto_1 = require("node:crypto");
class DatabaseMemory {
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
    create(product) {
        const productId = (0, node_crypto_1.randomUUID)();
        this.#products.set(productId, product);
    }
    update(id, product) {
        this.#products.set(id, product);
    }
    delete(id) {
        this.#products.delete(id);
    }
}
exports.DatabaseMemory = DatabaseMemory;
