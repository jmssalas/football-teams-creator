// @ts-nocheck

import { db } from "$lib/server/db/index.js";
import { players, matches, matchParticipants } from "$lib/server/db/schema.js";
import { json } from "@sveltejs/kit";
import { eq, sql } from "drizzle-orm";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const player = await request.json();
    await db.insert(players).values(player);
    return json({ success: true });
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
    const { id } = await request.json();
    await db.delete(players).where(eq(players.id, id));
    return json({ success: true });
}

export async function GET() {
    const sq = db
        .select({
            id: players.id,
            name: players.name,
            matchesWon: sql`SUM(
                CASE
                    WHEN (${matchParticipants.team} = 'A' AND ${matches.teamAScore} > ${matches.teamBScore}) OR
                         (${matchParticipants.team} = 'B' AND ${matches.teamBScore} > ${matches.teamAScore})
                    THEN 1
                    ELSE 0
                END
            )`.as("matchesWon"),
            matchesDrawn: sql`SUM(
                CASE
                    WHEN ${matches.teamAScore} = ${matches.teamBScore} THEN 1
                    ELSE 0
                END
            )`.as("matchesDrawn"),
            matchesLost: sql`SUM(
                CASE
                    WHEN (${matchParticipants.team} = 'A' AND ${matches.teamAScore} < ${matches.teamBScore}) OR
                         (${matchParticipants.team} = 'B' AND ${matches.teamBScore} < ${matches.teamAScore})
                    THEN 1
                    ELSE 0
                END
            )`.as("matchesLost"),
            goalsFor: sql`SUM(
                CASE
                    WHEN ${matchParticipants.team} = 'A' THEN ${matches.teamAScore}
                    WHEN ${matchParticipants.team} = 'B' THEN ${matches.teamBScore}
                    ELSE 0
                END
            )`.as("goalsFor"),
            goalsAgainst: sql`SUM(
                CASE
                    WHEN ${matchParticipants.team} = 'A' THEN ${matches.teamBScore}
                    WHEN ${matchParticipants.team} = 'B' THEN ${matches.teamAScore}
                    ELSE 0
                END
            )`.as("goalsAgainst"),
        })
        .from(players)
        .leftJoin(matchParticipants, eq(players.id, matchParticipants.playerId))
        .leftJoin(matches, eq(matches.id, matchParticipants.matchId))
        .groupBy(players.id)
        .orderBy(players.name)
        .as("sq");

    const allPlayers = await db
        .select({
            id: sq.id,
            name: sq.name,
            matchesWon: sq.matchesWon,
            matchesDrawn: sq.matchesDrawn,
            matchesLost: sq.matchesLost,
            goalsScored: sq.goalsScored,
            goalsConceded: sq.goalsConceded,
            totalMatches:
                sql`${sq.matchesWon} + ${sq.matchesDrawn} + ${sq.matchesLost}`.as(
                    "totalMatches"
                ),
            victoryPercentage: sql`CASE
                WHEN (${sq.matchesWon} + ${sq.matchesDrawn} + ${sq.matchesLost}) = 0 THEN 0
                ELSE ROUND((${sq.matchesWon} * 100.0) / (${sq.matchesWon} + ${sq.matchesDrawn} + ${sq.matchesLost}), 2)
            END`.as("victoryPercentage"),
        })
        .from(sq)
        .orderBy(sq.name);
    return json(allPlayers);
}
