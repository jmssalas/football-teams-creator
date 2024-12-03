// @ts-nocheck

import { db } from "$lib/server/db/index.js";
import { players } from "$lib/server/db/schema.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const users = await db.select().from(players);
    return {
        users,
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        // @TODO
    },
};
