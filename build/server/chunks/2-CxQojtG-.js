import fs from 'node:fs';

async function load$1({ fetch, data }) {
  const res = await fetch("/api/players");
  const players = await res.json();
  return { ...data, players };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

const TEAMS_FILEPATH = "./teams.json";
async function load({ params }) {
  let teams = [];
  try {
    teams = JSON.parse(
      fs.readFileSync(TEAMS_FILEPATH, {
        encoding: "utf-8"
      })
    );
  } catch (e) {
  }
  return {
    teams
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BY9LdQvK.js')).default;
const universal_id = "src/routes/+page.js";
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.ya2h5VY8.js","_app/immutable/chunks/CVzWLPMS.js","_app/immutable/chunks/D5u2eZmz.js","_app/immutable/chunks/Cej3kk_0.js","_app/immutable/chunks/D0l-fn7B.js","_app/immutable/chunks/CTPv7BAY.js","_app/immutable/chunks/BalwrVC8.js","_app/immutable/chunks/Dtd5vZtN.js"];
const stylesheets = ["_app/immutable/assets/2.Ce7uiZM2.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=2-CxQojtG-.js.map
