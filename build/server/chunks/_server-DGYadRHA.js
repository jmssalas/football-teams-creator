import { d as db, p as players } from './schema-CW5pk65X.js';
import { j as json } from './index-CoD1IJuy.js';
import { eq } from 'drizzle-orm';
import fs from 'node:fs';
import 'dotenv/config';
import 'drizzle-orm/better-sqlite3';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';

const TEAMS_FILEPATH = "./teams.json";
const WIN_POINTS = 3;
const TIE_POINTS = 1;
async function POST({ request }) {
  const { players: players2, tie, setTeams, teams } = await request.json();
  if (players2) {
    const points = tie ? TIE_POINTS : WIN_POINTS;
    await win(players2, points);
  } else if (teams) {
    fs.writeFileSync(TEAMS_FILEPATH, JSON.stringify(teams), {
      encoding: "utf-8"
    });
  }
  return json(true);
}
async function win(wPlayers, points) {
  for (const player of wPlayers) {
    player.points += points;
    await db.update(players).set(player).where(eq(players.id, player.id));
  }
}

export { POST };
//# sourceMappingURL=_server-DGYadRHA.js.map
