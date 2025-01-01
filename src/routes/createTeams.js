// @ts-nocheck

const MAX_POINTS_DIFF = 2;

/**
 * @param {Player[]} players
 * @returns {{ team1: Player[], team2: Player[]}}
 */
export function createTeams(players) {
    // Randomize players
    players.sort(() => Math.random() - 0.5);

    let bestDivision = null;
    let minDifference = Infinity;

    function backtrack(index, team1, team2, pointsA, pointsB) {
        // Restringir la diferencia de tamaño entre los equipos a máximo 1 jugador
        if (Math.abs(team1.length - team2.length) > 1) {
            return;
        }

        // Si hemos procesado todos los jugadores
        if (index >= players.length) {
            const difference = Math.abs(pointsA - pointsB);
            if (difference < minDifference) {
                minDifference = difference;
                bestDivision = { team1: [...team1], team2: [...team2] };
            }
            return;
        }

        const player = players[index];

        // Intentar agregar al equipo A
        team1.push(player);
        backtrack(index + 1, team1, team2, pointsA + player.points, pointsB);
        team1.pop();

        // Intentar agregar al equipo B
        team2.push(player);
        backtrack(index + 1, team1, team2, pointsA, pointsB + player.points);
        team2.pop();
    }

    // Inicializar backtracking
    backtrack(0, [], [], 0, 0);

    return bestDivision;
}
