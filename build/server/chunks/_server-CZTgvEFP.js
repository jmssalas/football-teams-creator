import { d as db, m as matches, a as matchParticipants } from './schema-C8ENu7Sj.js';
import { j as json } from './index-CoD1IJuy.js';
import 'dotenv/config';
import 'drizzle-orm/better-sqlite3';
import 'better-sqlite3';
import 'drizzle-orm';
import 'drizzle-orm/sqlite-core';

async function POST({ request }) {
  const data = await request.json();
  console.log(data);
  const { teamA, teamB, teamAScore, teamBScore } = data;
  const matchInsert = await db.insert(matches).values({
    teamAScore,
    teamBScore
  }).returning({ id: matches.id });
  const matchId = matchInsert[0].id;
  const participants = [
    ...teamA.map((playerId) => ({ matchId, playerId, team: "A" })),
    ...teamB.map((playerId) => ({ matchId, playerId, team: "B" }))
  ];
  await db.insert(matchParticipants).values(participants);
  return json({ success: true });
}

export { POST };
//# sourceMappingURL=_server-CZTgvEFP.js.map
