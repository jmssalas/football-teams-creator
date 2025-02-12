import 'dotenv/config';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
const client = new Database(process.env.DATABASE_URL);
const db = drizzle(client);
const players = sqliteTable("players", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  points: integer("points").notNull().default(0),
  goals: integer("goals").default(0)
});

export { db as d, players as p };
//# sourceMappingURL=schema-D_e2E3M_.js.map
