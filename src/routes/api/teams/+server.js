// @ts-nocheck

import { json } from "@sveltejs/kit";
import fs from "node:fs";

const TEAMS_FILEPATH = "./teams.json";

/** @type {import('../../$types').RequestHandler} */
export async function POST({ request }) {
    const { teams } = await request.json();
    if (teams) {
        fs.writeFileSync(TEAMS_FILEPATH, JSON.stringify(teams), {
            encoding: "utf-8",
        });
    }

    return json(true);
}
