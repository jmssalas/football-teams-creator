// @ts-nocheck

import { db } from "$lib/server/db/index.js";
import { players } from "$lib/server/db/schema.js";
import { json } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import fs from "node:fs";

const TEAMS_FILEPATH = "./teams.json";

const WIN_POINTS = 3;
const TIE_POINTS = 1;

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { players, tie, setTeams, teams } = await request.json();
    if (players) {
        const points = tie ? TIE_POINTS : WIN_POINTS;
        await win(players, points);
    } else if (teams) {
        fs.writeFileSync(TEAMS_FILEPATH, JSON.stringify(teams), {
            encoding: "utf-8",
        });
    }

    return json(true);
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
    await db.update(players).set({ points: 0 });
    return json(true);
}

/**
 * @param {Player[]} wPlayers
 * @param {number} points
 */
async function win(wPlayers, points) {
    for (const player of wPlayers) {
        player.points += points;
        await db.update(players).set(player).where(eq(players.id, player.id));
    }
}
