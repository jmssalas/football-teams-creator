<script>
    // @ts-nocheck

    import { invalidateAll } from "$app/navigation";
    import {
        Button,
        Content,
        DataTable,
        Modal,
        Toolbar,
        TextInput,
        Grid,
        Row,
        Column,
        Select,
        SelectItem,
        NumberInput,
    } from "carbon-components-svelte";
    import { Checkbox, TrashCan } from "carbon-icons-svelte";
    import { createTeams } from "./createTeams.js";

    /** @type {import('./$types').PageProps} */
    let { data } = $props();

    let openPlayer = $state(false);
    let playerToDelete = $state(undefined);
    let playerName = $state("");
    let teamsArray = $state(data.teams);
    let selectedPlayerIds = $state(
        data.teams
            .map((teams) => teams.teamA.concat(teams.teamB))
            .flat()
            .map((player) => player.id)
    );
    let numberOfTeams = $state(data.teams.length * 2 || 2);

    const rows = $derived(data.players);
    const players = $derived(
        data.players.filter((player) => selectedPlayerIds.includes(player.id))
    );

    $effect(() => {
        fetch("/", {
            method: "POST",
            body: JSON.stringify({ teams: teamsArray }),
            headers: {
                "content-type": "application/json",
            },
        });
    });

    /**
     * @param {Player[]} players
     * @param {boolean} tie
     */
    async function createMatch(teamArrayIndex) {
        const matchResult = teamsArray[teamArrayIndex];
        const teamA = matchResult.teamA.map((player) => player.id);
        const teamB = matchResult.teamB.map((player) => player.id);
        const teamAScore = matchResult.teamAScore;
        const teamBScore = matchResult.teamBScore;
        await fetch("/api/matches", {
            method: "POST",
            body: JSON.stringify({ teamA, teamB, teamAScore, teamBScore }),
            headers: {
                "content-type": "application/json",
            },
        });
        teamsArray.splice(teamArrayIndex, 1);
        invalidateAll();
    }

    /**
     * @param {{ name: string }} data
     */
    async function createPlayer(data) {
        await fetch("/api/players", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "apsplication/json",
            },
        });
        openPlayer = false;
        invalidateAll();
    }

    /**
     * @param {number} playerId
     */
    async function deletePlayer(playerId) {
        await fetch("/api/players", {
            method: "DELETE",
            body: JSON.stringify({ id: playerId }),
            headers: {
                "content-type": "application/json",
            },
        });
        playerToDelete = undefined;
        invalidateAll();
    }

    function updateSelectedPlayerIds(playerId) {
        if (selectedPlayerIds.includes(playerId)) {
            selectedPlayerIds = selectedPlayerIds.filter(
                (id) => id !== playerId
            );
        } else {
            selectedPlayerIds = [...selectedPlayerIds, playerId];
        }
    }
</script>

<Content>
    <div class="controls">
        <Select
            selected={numberOfTeams.toString()}
            labelText="¿Cuántos equipos sois?"
            on:change={(e) => (numberOfTeams = parseInt(e.target.value))}
        >
            <SelectItem value="2" />
            <SelectItem value="4" />
            <SelectItem value="6" />
        </Select>

        Jugadores seleccionados: {selectedPlayerIds.length}
        <div class="button-group">
            <Button
                disabled={players.length === 0}
                on:click={() => {
                    teamsArray = createTeams(players, numberOfTeams);
                }}>Crear equipos</Button
            >
            <Button
                kind="ghost"
                icon={TrashCan}
                iconDescription="Borrar equipos"
                on:click={() => {
                    teamsArray = [];
                }}
            />
        </div>
    </div>

    {#if teamsArray.length > 0}
        <div class="teams-container">
            {#each Object.entries(teamsArray) as [index, teams]}
                <div class="team-match">
                    <div class="teams-grid">
                        <div class="team">
                            <h3>Equipo A (Jugadores: {teams.teamA.length})</h3>
                            <div class="players-list">
                                {#each teams.teamA as player}
                                    <p class="player-name">{player.name}</p>
                                {/each}
                            </div>
                            <div class="stats">
                                <p class="stat-label">
                                    Victorias:
                                    <strong>
                                        {parseInt(
                                            teams.teamA.reduce(
                                                (acc, curr) =>
                                                    acc +
                                                    curr.victoryPercentage,
                                                0
                                            ) / teams.teamA.length
                                        )}%
                                    </strong>
                                </p>
                            </div>
                        </div>

                        <div class="team">
                            <h3>Equipo B (Jugadores: {teams.teamB.length})</h3>
                            <div class="players-list">
                                {#each teams.teamB as player}
                                    <p class="player-name">{player.name}</p>
                                {/each}
                            </div>
                            <div class="stats">
                                <p class="stat-label">
                                    Victorias:
                                    <strong>
                                        {parseInt(
                                            teams.teamB.reduce(
                                                (acc, curr) =>
                                                    acc +
                                                    curr.victoryPercentage,
                                                0
                                            ) / teams.teamB.length
                                        )}%
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="score-section">
                        <div class="score-inputs">
                            <NumberInput
                                label="Goles A"
                                value={teams.teamAScore}
                                min={0}
                                on:change={(e) =>
                                    (teams.teamAScore = parseInt(e.detail))}
                            />
                            <NumberInput
                                label="Goles B"
                                value={teams.teamBScore}
                                min={0}
                                on:change={(e) =>
                                    (teams.teamBScore = parseInt(e.detail))}
                            />
                        </div>
                        <div class="score-button">
                            <Button
                                disabled={teams.teamAScore === undefined ||
                                    teams.teamBScore === undefined}
                                on:click={() => createMatch(index)}
                            >
                                Registrar
                            </Button>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}

    <div class="table-section">
        <!-- Vista Desktop: Tabla -->
        <div class="desktop-view">
            <DataTable
                sortable
                selectable
                batchSelection
                bind:selectedRowIds={selectedPlayerIds}
                size="compact"
                headers={[
                    { key: "name", value: "Nombre" },
                    { key: "matchesWon", value: "Ganados" },
                    { key: "matchesDrawn", value: "Empatados" },
                    { key: "matchesLost", value: "Perdidos" },
                    { key: "totalMatches", value: "Total" },
                    { key: "victoryPercentage", value: "Victoria %" },
                    { key: "goalsFor", value: "GF" },
                    { key: "goalsAgainst", value: "GC" },
                    { key: "buttons", value: "" },
                ]}
                {rows}
            >
                <Toolbar size="sm">
                    <span>
                        <Button
                            iconDescription="Añadir jugador"
                            on:click={() => {
                                openPlayer = true;
                            }}>Añadir jugador</Button
                        >
                    </span>
                </Toolbar>

                <svelte:fragment slot="cell" let:row let:cell>
                    {#if cell.key === "buttons"}
                        {#if playerToDelete?.id === row.id}
                            <Button
                                tooltipPosition="right"
                                tooltipAlignment="end"
                                kind="danger-ghost"
                                iconDescription="¿Seguro?"
                                icon={Checkbox}
                                size="small"
                                on:click={() => {
                                    deletePlayer(row.id);
                                }}
                            />
                        {:else}
                            <Button
                                tooltipPosition="right"
                                tooltipAlignment="end"
                                kind="danger-ghost"
                                iconDescription="Eliminar jugador"
                                icon={TrashCan}
                                size="small"
                                on:click={() => {
                                    playerToDelete = row;
                                }}
                            />
                        {/if}
                    {:else if cell.key === "victoryPercentage"}
                        {cell.value ? `${parseInt(cell.value)}%` : "0%"}
                    {:else}
                        {cell.value ?? ""}
                    {/if}
                </svelte:fragment>
            </DataTable>
        </div>

        <!-- Vista Mobile: Cards -->
        <div class="mobile-view">
            <div class="mobile-header">
                <h3>Jugadores</h3>
                <Button
                    iconDescription="Añadir jugador"
                    on:click={() => {
                        openPlayer = true;
                    }}>Añadir</Button
                >
            </div>

            <div class="cards-container">
                {#each rows as player (player.id)}
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <div
                        role="button"
                        tabindex={player.id}
                        class="player-card"
                        class:selected={selectedPlayerIds.includes(player.id)}
                        onclick={() => updateSelectedPlayerIds(player.id)}
                    >
                        <div class="card-header">
                            <div class="player-info">
                                <h4>{player.name}</h4>
                                <p class="victory-stat">
                                    {player.victoryPercentage
                                        ? `${parseInt(player.victoryPercentage)}%`
                                        : "0%"} victorias
                                </p>
                            </div>
                            <div class="card-actions">
                                {#if playerToDelete?.id === player.id}
                                    <Button
                                        kind="danger-ghost"
                                        icon={Checkbox}
                                        iconDescription="Confirmar"
                                        size="small"
                                        on:click={() => {
                                            deletePlayer(player.id);
                                        }}
                                    />
                                {:else}
                                    <Button
                                        kind="danger-ghost"
                                        icon={TrashCan}
                                        iconDescription="Eliminar"
                                        size="small"
                                        on:click={() => {
                                            playerToDelete = player;
                                        }}
                                    />
                                {/if}
                            </div>
                        </div>

                        <div class="card-stats">
                            <div class="stat">
                                <span class="stat-label">Ganados</span>
                                <span class="stat-value"
                                    >{player.matchesWon}</span
                                >
                            </div>
                            <div class="stat">
                                <span class="stat-label">Empatados</span>
                                <span class="stat-value"
                                    >{player.matchesDrawn}</span
                                >
                            </div>
                            <div class="stat">
                                <span class="stat-label">Perdidos</span>
                                <span class="stat-value"
                                    >{player.matchesLost}</span
                                >
                            </div>
                            <div class="stat">
                                <span class="stat-label">Total</span>
                                <span class="stat-value"
                                    >{player.totalMatches}</span
                                >
                            </div>
                        </div>

                        <div class="card-footer">
                            <div class="goals">
                                <span>⚽ {player.goalsFor}</span>
                                <span>-</span>
                                <span>{player.goalsAgainst}</span>
                            </div>
                            <div class="checkbox">
                                <input
                                    type="checkbox"
                                    checked={selectedPlayerIds.includes(
                                        player.id
                                    )}
                                    readonly
                                />
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</Content>

<!-- Modal for adding a new player -->
<Modal
    bind:open={openPlayer}
    primaryButtonText="Añadir jugador"
    primaryButtonDisabled={playerName.trim() === ""}
    selectorPrimaryFocus="#player-name"
    on:click:button--primary={() => {
        createPlayer({ name: playerName });
        playerName = "";
    }}
>
    <TextInput
        id="player-name"
        labelText="Nombre del jugador"
        placeholder="Introduce el nombre del jugador..."
        bind:value={playerName}
    />
</Modal>

<style>
    :global(.bx--content) {
        max-width: 100%;
    }

    .controls {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .button-group {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .teams-container {
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .team-match {
        border: 1px solid var(--cds-border-subtle-01);
        border-radius: 0.25rem;
        padding: 1rem;
    }

    .teams-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .team {
        display: flex;
        flex-direction: column;
    }

    .team h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.125rem;
    }

    .players-list {
        flex: 1;
        margin-bottom: 1rem;
    }

    .player-name {
        margin: 0.25rem 0;
        font-size: 0.875rem;
    }

    .stats {
        padding-top: 0.75rem;
        border-top: 1px solid var(--cds-border-subtle-01);
    }

    .stat-label {
        margin: 0.25rem 0;
        font-size: 0.875rem;
    }

    .score-section {
        display: flex;
        gap: 1rem;
        align-items: flex-end;
    }

    .score-inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        flex: 1;
    }

    .score-button {
        display: flex;
        align-items: flex-end;
        height: 100%;
    }

    .table-section {
        margin-top: 3rem;
        margin-bottom: 2rem;
        overflow-x: auto;
    }

    /* Desktop view */
    .desktop-view {
        display: block;
    }

    .mobile-view {
        display: none;
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
        .controls {
            gap: 0.75rem;
            margin-bottom: 1.5rem;
        }

        .team-match {
            padding: 0.75rem;
        }

        .teams-grid {
            gap: 0.75rem;
            margin-bottom: 1rem;
        }

        .team h3 {
            font-size: 1rem;
        }

        .player-name {
            font-size: 0.8125rem;
        }

        .stat-label {
            font-size: 0.75rem;
        }

        .score-section {
            flex-direction: column;
            gap: 0.75rem;
        }

        .score-inputs {
            width: 100%;
        }

        .score-button {
            width: 100%;
            display: flex;
            justify-content: flex-start;
        }

        .table-section {
            margin-top: 2rem;
            margin-bottom: 2rem;
        }

        .desktop-view {
            display: none;
        }

        .mobile-view {
            display: block;
        }

        .mobile-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .mobile-header h3 {
            margin: 0;
            font-size: 1.125rem;
        }

        .cards-container {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .player-card {
            border: 1px solid var(--cds-border-subtle-01);
            border-radius: 0.25rem;
            padding: 1rem;
            background: var(--cds-ui-01);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
        }

        .player-card:active {
            background: var(--cds-hover-ui-light);
        }

        .player-card.selected {
            border-color: var(--cds-interactive-01);
            border-width: 2px;
            padding: calc(1rem - 1px);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 0.75rem;
        }

        .player-info {
            flex: 1;
        }

        .player-info h4 {
            margin: 0 0 0.25rem 0;
            font-size: 1rem;
            font-weight: 600;
        }

        .victory-stat {
            margin: 0;
            font-size: 0.875rem;
            color: var(--cds-text-02);
        }

        .card-actions {
            display: flex;
            gap: 0.5rem;
        }

        .card-stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0.5rem;
            margin-bottom: 0.75rem;
            padding: 0.75rem 0;
            border-top: 1px solid var(--cds-border-subtle-01);
            border-bottom: 1px solid var(--cds-border-subtle-01);
        }

        .stat {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .stat-label {
            font-size: 0.625rem;
            text-transform: uppercase;
            color: var(--cds-text-02);
            margin-bottom: 0.25rem;
        }

        .stat-value {
            font-size: 1.125rem;
            font-weight: 600;
        }

        .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .goals {
            display: flex;
            gap: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
        }

        .checkbox {
            display: flex;
        }

        .checkbox input[type="checkbox"] {
            width: 1.25rem;
            height: 1.25rem;
            cursor: pointer;
            accent-color: var(--cds-interactive-01);
        }

        :global(.bx--data-table__header-row) {
            font-size: 0.7rem;
        }

        :global(.bx--data-table__cell) {
            padding: 0.5rem;
            font-size: 0.75rem;
        }
    }

    @media (max-width: 480px) {
        .teams-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
        }

        .team h3 {
            font-size: 0.9375rem;
        }

        .player-name {
            font-size: 0.75rem;
        }

        .stat-label {
            font-size: 0.6875rem;
        }

        .button-group {
            gap: 0.25rem;
        }

        :global(.bx--btn) {
            min-height: 2rem;
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
        }

        :global(.bx--data-table__header-row) {
            font-size: 0.65rem;
        }

        :global(.bx--data-table__cell) {
            padding: 0.25rem;
            font-size: 0.65rem;
        }

        .mobile-header {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start;
        }

        .mobile-header h3 {
            font-size: 1rem;
        }

        .card-stats {
            gap: 0.25rem;
        }

        .stat-label {
            font-size: 0.5625rem;
        }

        .stat-value {
            font-size: 1rem;
        }

        .player-info h4 {
            font-size: 0.9375rem;
        }

        .victory-stat {
            font-size: 0.75rem;
        }
    }
</style>
