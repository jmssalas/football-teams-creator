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
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BWadIIvy.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.BmKYukst.js","_app/immutable/chunks/disclose-version.CtQfRNkA.js","_app/immutable/chunks/runtime.B5iW8Zo5.js","_app/immutable/chunks/legacy.CNmd39ch.js","_app/immutable/chunks/store.D6VYYOxz.js","_app/immutable/chunks/utils.DIs2teQl.js","_app/immutable/chunks/index-client.CXIdME2p.js","_app/immutable/chunks/entry.Cn42m_73.js"];
const stylesheets = ["_app/immutable/assets/2.Bbb2UmtC.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-DYwBpAIr.js.map
