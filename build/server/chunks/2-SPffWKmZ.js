import { d as db, p as players } from './schema-BqeKa_aq.js';
import { eq } from 'drizzle-orm';
import 'dotenv/config';
import 'drizzle-orm/better-sqlite3';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';

async function load({ params }) {
  return {
    players: await db.select().from(players)
  };
}
const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    return db.insert(players).values({
      name: data.get("player-name")
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
      playersToUpdate.map(
        async (player) => db.update(players).set({ points: player.points + points }).where(eq(players.id, player.id))
      )
    );
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C-S7NJZI.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.DL97nkdk.js","_app/immutable/chunks/disclose-version.Cm9j5ayf.js","_app/immutable/chunks/utils.7i9iy7nq.js","_app/immutable/chunks/legacy.C6W3YWW6.js","_app/immutable/chunks/index-client.DnYikTZg.js","_app/immutable/chunks/Content.Th1glZoJ.js","_app/immutable/chunks/index.CTOTKQwF.js","_app/immutable/chunks/entry.C9hezmhj.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-SPffWKmZ.js.map
