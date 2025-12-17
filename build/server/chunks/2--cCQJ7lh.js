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
const component = async () => component_cache ??= (await import('./_page.svelte-CXCppiFU.js')).default;
const universal_id = "src/routes/+page.js";
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.BWzW7Ghn.js","_app/immutable/chunks/mNhXAasa.js","_app/immutable/chunks/Dzd4HRd2.js","_app/immutable/chunks/DIQ9jnIP.js","_app/immutable/chunks/DT4lj36f.js","_app/immutable/chunks/JeVp_L7T.js","_app/immutable/chunks/YYtkNPTQ.js","_app/immutable/chunks/JT74ICdB.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=2--cCQJ7lh.js.map
