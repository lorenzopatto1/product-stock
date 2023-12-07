"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db/db");
// sql`DROP TABLE IF EXISTS stock`.then(() => {
//   console.log("tabela apagada");
// });
(0, db_1.sql) `
  CREATE TABLE stock (
    id          TEXT PRIMARY KEY,
    name        TEXT NOT NULL,
    price       DECIMAL NOT NULL,
    quantity    INTEGER NOT NULL 
  );
`.then(() => {
    console.log("Tabela criada");
});
