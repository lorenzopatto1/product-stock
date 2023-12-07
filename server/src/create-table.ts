import { sql } from "./db/db";

// sql`DROP TABLE IF EXISTS stock`.then(() => {
//   console.log("tabela apagada");
// });

sql`
  CREATE TABLE stock (
    id          TEXT PRIMARY KEY,
    name        TEXT NOT NULL,
    price       DECIMAL NOT NULL,
    quantity    INTEGER NOT NULL 
  );
`.then(() => {
  console.log("Tabela criada");
});
