// @ts-nocheck

/**
 * @param {Player[]} players
 * @param {number} numberOfTeams
 * @returns {{ teamA: Player[], teamB: Player[]}[] }
 */
export function createTeams(players, numberOfTeams) {
    // Randomize players using Fisher-Yates
    const shuffled = [...players];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const numPairs = numberOfTeams / 2;
    const teams = [];

    if (numPairs === 1) {
        // 2 teams: balance all players into 2 teams
        const { teamA, teamB } = balanceTwoTeams(shuffled);
        teams.push({ teamA, teamB });
    } else if (numPairs === 2) {
        // 4 teams: create 2 balanced pairs
        const { teamA: group1, teamB: group2 } = balanceTwoTeams(shuffled);

        // Balance each group into 2 sub-teams
        const { teamA: t1a, teamB: t1b } = balanceTwoTeams(group1);
        const { teamA: t2a, teamB: t2b } = balanceTwoTeams(group2);

        teams.push({ teamA: t1a, teamB: t1b });
        teams.push({ teamA: t2a, teamB: t2b });
    } else if (numPairs === 3) {
        // 6 teams: create 3 globally balanced groups
        const {
            team1: group1,
            team2: group2,
            team3: group3,
        } = balanceThreeTeams(shuffled);

        // Divide each group into 2 sub-teams
        const { teamA: t1a, teamB: t1b } = balanceTwoTeams(group1);
        const { teamA: t2a, teamB: t2b } = balanceTwoTeams(group2);
        const { teamA: t3a, teamB: t3b } = balanceTwoTeams(group3);

        teams.push({ teamA: t1a, teamB: t1b });
        teams.push({ teamA: t2a, teamB: t2b });
        teams.push({ teamA: t3a, teamB: t3b });
    }

    return teams;
}

/**
 * Balancear jugadores en N equipos usando backtracking
 * @param {Player[]} players
 * @param {number} numTeams
 * @returns {Object} Objeto con teamA, teamB, team3, etc.
 */
function balanceTeams(players, numTeams) {
    if (numTeams === 2) {
        return balanceTwoTeams(players);
    }

    if (numTeams === 3) {
        return balanceThreeTeams(players);
    }

    return { teamA: players, teamB: [] };
}

/**
 * Balancear 2 equipos
 * @param {Player[]} players
 * @returns {{ teamA: Player[], teamB: Player[] }}
 */
function balanceTwoTeams(players) {
    let bestDivision = { teamA: [], teamB: [] };
    let minDifference = Infinity;

    function backtrack(index, teamA, teamB, vicPercA, vicPercB) {
        // Restrict size difference between teams to maximum 1 player
        if (Math.abs(teamA.length - teamB.length) > 1) return;

        // If we have processed all players
        if (index >= players.length) {
            const percentageA = vicPercA / teamA.length || 0;
            const percentageB = vicPercB / teamB.length || 0;
            const difference = Math.abs(percentageA - percentageB);
            if (difference < minDifference) {
                minDifference = difference;
                bestDivision = { teamA: [...teamA], teamB: [...teamB] };
            }
            return;
        }

        const player = players[index];

        teamA.push(player);
        backtrack(
            index + 1,
            teamA,
            teamB,
            vicPercA + (player.victoryPercentage || 0),
            vicPercB
        );
        teamA.pop();

        teamB.push(player);
        backtrack(
            index + 1,
            teamA,
            teamB,
            vicPercA,
            vicPercB + (player.victoryPercentage || 0)
        );
        teamB.pop();
    }

    backtrack(0, [], [], 0, 0);
    return bestDivision;
}

/**
 * Balancear 3 equipos
 * @param {Player[]} players
 * @returns {{ team1: Player[], team2: Player[], team3: Player[] }}
 */
function balanceThreeTeams(players) {
    let bestDivision = { team1: [], team2: [], team3: [] };
    let minDifference = Infinity;

    function backtrack(
        index,
        team1,
        team2,
        team3,
        vicPerc1,
        vicPerc2,
        vicPerc3
    ) {
        // Restrict size difference between teams to maximum 1 player
        if (
            Math.abs(team1.length - team2.length) > 1 ||
            Math.abs(team2.length - team3.length) > 1 ||
            Math.abs(team1.length - team3.length) > 1
        ) {
            return;
        }

        // If we have processed all players
        if (index >= players.length) {
            const maxVic = Math.max(vicPerc1, vicPerc2, vicPerc3);
            const minVic = Math.min(vicPerc1, vicPerc2, vicPerc3);
            const difference = maxVic - minVic;

            if (difference < minDifference) {
                minDifference = difference;
                bestDivision = {
                    team1: [...team1],
                    team2: [...team2],
                    team3: [...team3],
                };
            }
            return;
        }

        const player = players[index];
        const vicPerc = player.victoryPercentage || 0;

        team1.push(player);
        backtrack(
            index + 1,
            team1,
            team2,
            team3,
            vicPerc1 + vicPerc,
            vicPerc2,
            vicPerc3
        );
        team1.pop();

        team2.push(player);
        backtrack(
            index + 1,
            team1,
            team2,
            team3,
            vicPerc1,
            vicPerc2 + vicPerc,
            vicPerc3
        );
        team2.pop();

        team3.push(player);
        backtrack(
            index + 1,
            team1,
            team2,
            team3,
            vicPerc1,
            vicPerc2,
            vicPerc3 + vicPerc
        );
        team3.pop();
    }

    backtrack(0, [], [], [], 0, 0, 0);
    return bestDivision;
}
