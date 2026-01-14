// @ts-nocheck

import fs from "node:fs";

const TEAMS_FILEPATH = "./teams.json";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    /** @type {{ teamA: Player[], teamB: Player[]}[]} */
    let teams = [];
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
        teams,
    };
}
