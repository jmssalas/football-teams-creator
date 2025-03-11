// @ts-nocheck

import { db } from "$lib/server/db/index.js";
import { players } from "$lib/server/db/schema.js";
import { eq } from "drizzle-orm";
import fs from "node:fs";

const TEAMS_FILEPATH = "./teams.json";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let teams = undefined;
    try {
        teams = JSON.parse(
            fs.readFileSync(TEAMS_FILEPATH, {
                encoding: "utf-8",
            })
        );
    } catch (e) {
        // Ignore
    }
    return {
        players: await db.select().from(players),
        teams,
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        return db.insert(players).values({
            name: data.get("player-name"),
        });
    },
    delete: async ({ request }) => {
        const data = await request.formData();
        return db.delete(players).where(eq(players.id, data.get("player-id")));
    },
    addPoints: async ({ request }) => {
        const data = await request.formData();
        const playersToUpdate = JSON.parse(data.get("players"));
        const points = Number.parseInt(data.get("points"));
        return Promise.all(
            playersToUpdate.map(async (player) =>
                db
                    .update(players)
                    .set({ points: player.points + points })
                    .where(eq(players.id, player.id))
            )
        );
    },
    addGoals: async ({ request }) => {
        const data = await request.formData();
        const playersToUpdate = JSON.parse(data.get("players"));
        const goals = Number.parseInt(data.get("goals"));
        return Promise.all(
            playersToUpdate.map(async (player) =>
                db
                    .update(players)
                    .set({ goals: player.goals + goals })
                    .where(eq(players.id, player.id))
            )
        );
    },
};
