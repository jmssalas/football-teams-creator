import { j as json } from './index-CoD1IJuy.js';
import fs from 'node:fs';

const TEAMS_FILEPATH = "./teams.json";
async function POST({ request }) {
  const { teams } = await request.json();
  if (teams) {
    fs.writeFileSync(TEAMS_FILEPATH, JSON.stringify(teams), {
      encoding: "utf-8"
    });
  }
  return json(true);
}

export { POST };
//# sourceMappingURL=_server-DiYturr6.js.map
