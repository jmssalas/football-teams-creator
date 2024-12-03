// @ts-nocheck

const MAX_POINTS_DIFF = 2;

/**
 * @param {Player[]} players
 */
export function createTeams(players) {
    const shuffledPlayers = shuffle(players);
    const teams = {
        team1: {
            players: [],
            points: 0,
        },
        team2: {
            players: [],
            points: 0,
        },
    };

    teams.team1.players.push(shuffledPlayers.pop());
    teams.team2.players.push(shuffledPlayers.pop());
    teams.team1.points = teams.team1.players[0].points;
    teams.team2.points = teams.team2.players[0].points;

    let lastDiff = 0;
    for (const player of shuffledPlayers) {
        const diff = Math.abs(
            teams.team1.points + player.points - teams.team2.points
        );
        let team = undefined;

        if (diff === lastDiff) {
            team =
                teams.team1.players.length < teams.team2.players.length
                    ? "team1"
                    : "team2";
        } else {
            team = diff < MAX_POINTS_DIFF ? "team1" : "team2";
        }

        teams[team].players.push(player);
        teams[team].points += player.points;

        lastDiff = diff;
    }
    return teams;
}

const shuffle = (array) => {
    return array
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
};
