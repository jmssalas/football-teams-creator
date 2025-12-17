// @ts-nocheck

import { db } from "$lib/server/db/index.js";
import { matches, matchParticipants } from "$lib/server/db/schema.js";
import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const data = await request.json();
    console.log(data);
    const { teamA, teamB, teamAScore, teamBScore } = data;

    const matchInsert = await db
        .insert(matches)
        .values({
            teamAScore,
            teamBScore,
        })
        .returning({ id: matches.id });

    const matchId = matchInsert[0].id;
    const participants = [
        ...teamA.map((playerId) => ({ matchId, playerId, team: "A" })),
        ...teamB.map((playerId) => ({ matchId, playerId, team: "B" })),
    ];

    await db.insert(matchParticipants).values(participants);
    return json({ success: true });
}
