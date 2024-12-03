// @ts-nocheck

import { db } from "$lib/server/db/index.js";
import { players } from "$lib/server/db/schema.js";
import { json } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

const WIN_POINTS = 3;

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { players } = await request.json();
    await win(players);
    return json(true);
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
    await db.update(players).set({ points: 0 });
    return json(true);
}

/**
 * @param {Player[]} wPlayers
 */
async function win(wPlayers) {
    for (const player of wPlayers) {
        player.points += WIN_POINTS;
        await db.update(players).set(player).where(eq(players.id, player.id));
    }
}
