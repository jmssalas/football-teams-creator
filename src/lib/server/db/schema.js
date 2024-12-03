import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const players = sqliteTable("players", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    points: integer("points").notNull().default(0),
});
