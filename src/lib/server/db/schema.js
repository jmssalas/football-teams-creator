import { sql } from "drizzle-orm";
import {
    sqliteTable,
    text,
    integer,
    primaryKey,
    index,
} from "drizzle-orm/sqlite-core";

export const players = sqliteTable("players", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
});

export const matches = sqliteTable(
    "matches",
    {
        id: integer("id", { mode: "number" }).primaryKey({
            autoIncrement: true,
        }),
        timestamp: integer("timestamp", { mode: "timestamp_ms" }).default(
            sql`(unixepoch()*1000)`
        ),
        teamAScore: integer("team_a_score").notNull(),
        teamBScore: integer("team_b_score").notNull(),
    },
    (table) => ({
        idx_timestamp: index("idx_timestamp").on(table.timestamp),
    })
);

export const matchParticipants = sqliteTable(
    "match_participants",
    {
        matchId: integer("match_id")
            .notNull()
            .references(() => matches.id, { onDelete: "cascade" }),
        playerId: integer("player_id")
            .notNull()
            .references(() => players.id, { onDelete: "cascade" }),
        team: text("team").notNull(), // "A" = Team A, "B" = Team B
    },
    (table) => ({
        pk: primaryKey({ columns: [table.matchId, table.playerId] }),
        idx_match: index("idx_match").on(table.matchId),
        idx_player: index("idx_player").on(table.playerId),
    })
);
