// @ts-nocheck

import { db } from "$lib/server/db/index.js";
import { players } from "$lib/server/db/schema.js";
import { json } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

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
