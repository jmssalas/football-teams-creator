// @ts-nocheck

const MAX_POINTS_DIFF = 2;

let bestDivision = null;
let minDifference = Infinity;

/**
 * @param {Player[]} players
 * @param {number} numberOfTeams
 * @returns {{ teamA: Player[], teamB: Player[]}[]}
 */
export function createTeams(players, numberOfTeams) {
    bestDivision = null;
    minDifference = Infinity;

    // Randomize players
    players.sort(() => Math.random() - 0.5);

    const teams = [];
    const division = numberOfTeams / 2;
    let half, half1, half2, half3;

    // I know that it is not the best way to do it, but for now it works.
    // Later we can improve it to support more teams.
    switch (division) {
        case 1:
            backtrack(0, players, [], [], 0, 0);
            teams.push(bestDivision);
            break;
        case 2:
            half = Math.ceil(players.length / division);
            half1 = players.slice(0, half);
            half2 = players.slice(half);

            backtrack(0, half1, [], [], 0, 0);
            teams.push(Object.assign({}, bestDivision));

            bestDivision = null;
            minDifference = Infinity;

            backtrack(0, half2, [], [], 0, 0);
            teams.push(Object.assign({}, bestDivision));
            break;
        case 3:
            half = Math.ceil(players.length / division);
            half1 = players.slice(0, half);
            half2 = players.slice(half, half * 2);
            half3 = players.slice(half * 2);

            backtrack(0, half1, [], [], 0, 0);
            teams.push(Object.assign({}, bestDivision));

            bestDivision = null;
            minDifference = Infinity;

            backtrack(0, half2, [], [], 0, 0);
            teams.push(Object.assign({}, bestDivision));

            bestDivision = null;
            minDifference = Infinity;

            backtrack(0, half3, [], [], 0, 0);
            teams.push(Object.assign({}, bestDivision));
            break;
    }

    return teams;
}

function backtrack(index, players, teamA, teamB, vicPercA, vicPercB) {
    // Restringir la diferencia de tamaño entre los equipos a máximo 1 jugador
    if (Math.abs(teamA.length - teamB.length) > 1) {
        return;
    }

    // Si hemos procesado todos los jugadores
    if (index >= players.length) {
        const difference = Math.abs(vicPercA - vicPercB);
        if (difference < minDifference) {
            minDifference = difference;
            bestDivision = { teamA: [...teamA], teamB: [...teamB] };
        }
        return;
    }

    const player = players[index];

    // Intentar agregar al equipo A
    teamA.push(player);
    backtrack(
        index + 1,
        players,
        teamA,
        teamB,
        vicPercA + player.victoryPercentage,
        vicPercB
    );
    teamA.pop();

    // Intentar agregar al equipo B
    teamB.push(player);
    backtrack(
        index + 1,
        players,
        teamA,
        teamB,
        vicPercA,
        vicPercB + player.victoryPercentage
    );
    teamB.pop();
}
