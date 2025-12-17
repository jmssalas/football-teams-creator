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
