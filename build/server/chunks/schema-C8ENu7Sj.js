import 'dotenv/config';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text, index, primaryKey } from 'drizzle-orm/sqlite-core';

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
const client = new Database(process.env.DATABASE_URL);
const db = drizzle(client);
const players = sqliteTable("players", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull()
});
const matches = sqliteTable(
  "matches",
  {
    id: integer("id", { mode: "number" }).primaryKey({
      autoIncrement: true
    }),
    timestamp: integer("timestamp", { mode: "timestamp_ms" }).default(
      sql`(unixepoch()*1000)`
    ),
    teamAScore: integer("team_a_score").notNull(),
    teamBScore: integer("team_b_score").notNull()
  },
  (table) => ({
    idx_timestamp: index("idx_timestamp").on(table.timestamp)
  })
);
const matchParticipants = sqliteTable(
  "match_participants",
  {
    matchId: integer("match_id").notNull().references(() => matches.id),
    playerId: integer("player_id").notNull().references(() => players.id),
    team: text("team").notNull()
    // "A" = Team A, "B" = Team B
  },
  (table) => ({
    pk: primaryKey({ columns: [table.matchId, table.playerId] }),
    idx_match: index("idx_match").on(table.matchId),
    idx_player: index("idx_player").on(table.playerId)
  })
);

export { matchParticipants as a, db as d, matches as m, players as p };
//# sourceMappingURL=schema-C8ENu7Sj.js.map
