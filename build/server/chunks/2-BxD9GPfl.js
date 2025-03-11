import { d as db, p as players } from './schema-D_e2E3M_.js';
import { eq } from 'drizzle-orm';
import fs from 'node:fs';
import 'dotenv/config';
import 'drizzle-orm/better-sqlite3';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';

const TEAMS_FILEPATH = "./teams.json";
async function load({ params }) {
  let teams = void 0;
  try {
    teams = JSON.parse(
      fs.readFileSync(TEAMS_FILEPATH, {
        encoding: "utf-8"
      })
    );
  } catch (e) {
  }
  return {
    players: await db.select().from(players),
    teams
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
  },
  addGoals: async ({ request }) => {
    const data = await request.formData();
    const playersToUpdate = JSON.parse(data.get("players"));
    const goals = Number.parseInt(data.get("goals"));
    return Promise.all(
      playersToUpdate.map(
        async (player) => db.update(players).set({ goals: player.goals + goals }).where(eq(players.id, player.id))
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
const component = async () => component_cache ??= (await import('./_page.svelte-D9YxeloZ.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.DbPc-lJ3.js","_app/immutable/chunks/disclose-version.BtVxORtl.js","_app/immutable/chunks/utils.BK9Us6OE.js","_app/immutable/chunks/index-client.Bi3ZiDwv.js","_app/immutable/chunks/navStore.C-SFR8O_.js","_app/immutable/chunks/legacy.Cm91Z9E3.js","_app/immutable/chunks/index.C6AkZlzq.js","_app/immutable/chunks/entry.CDRMqQzP.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-BxD9GPfl.js.map
