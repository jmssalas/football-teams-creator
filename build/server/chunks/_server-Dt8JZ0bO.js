import { d as db, p as players } from './schema-D_e2E3M_.js';
import { j as json } from './index2-BIAFQWR9.js';
import { eq } from 'drizzle-orm';
import 'dotenv/config';
import 'drizzle-orm/better-sqlite3';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';

const WIN_POINTS = 3;
const TIE_POINTS = 1;
async function POST({ request }) {
  const { players: players2, tie } = await request.json();
  const points = tie ? TIE_POINTS : WIN_POINTS;
  await win(players2, points);
  return json(true);
}
async function DELETE({ request }) {
  await db.update(players).set({ points: 0 });
  return json(true);
}
async function win(wPlayers, points) {
  for (const player of wPlayers) {
    player.points += points;
    await db.update(players).set(player).where(eq(players.id, player.id));
  }
}

export { DELETE, POST };
//# sourceMappingURL=_server-Dt8JZ0bO.js.map
