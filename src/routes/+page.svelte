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
    import { Add, Checkbox, TrashCan } from "carbon-icons-svelte";
    import { createTeams } from "./createTeams.js";

    /** @type {import('./$types').PageProps} */
    let { data } = $props();

    let openPlayer = $state(false);
    let playerToDelete = $state(undefined);
    let playerName = $state("");
    let teamsArray = $state(data.teams);
    let selectedRowIds = $state([]);
    let numberOfTeams = $state(2);

    const rows = $derived(data.players);
    const players = $derived(
        data.players.filter((player) => selectedRowIds.includes(player.id))
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
</script>

<Content>
    <Select
        labelText="¿Cuántos equipos sois?"
        on:change={(e) => (numberOfTeams = parseInt(e.target.value))}
    >
        <SelectItem value="2" />
        <SelectItem value="4" />
        <SelectItem value="6" />
    </Select>

    <Button
        disabled={players.length === 0}
        on:click={async () => {
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

    <br />
    <br />
    <br />

    {#if teamsArray.length > 0}
        <Grid>
            {#each Object.entries(teamsArray) as [index, teams]}
                <Row>
                    <Column>
                        <h2>Equipo A</h2>
                        {#each teams.teamA as player}
                            <p>{player.name}</p>
                        {/each}
                        <br />
                        <br />
                        <p>
                            <strong>
                                Porcentaje de Victorias: {parseInt(
                                    teams.teamA.reduce(
                                        (acc, curr) =>
                                            acc + curr.victoryPercentage,
                                        0
                                    )
                                ) / teams.teamA.length} %
                            </strong>
                        </p>
                    </Column>

                    <Column>
                        <h2>Equipo B</h2>
                        {#each teams.teamB as player}
                            <p>{player.name}</p>
                        {/each}
                        <br />
                        <br />
                        <p>
                            <strong>
                                Porcentaje de Victorias: {parseInt(
                                    teams.teamB.reduce(
                                        (acc, curr) =>
                                            acc + curr.victoryPercentage,
                                        0
                                    )
                                ) / teams.teamB.length} %
                            </strong>
                        </p>
                    </Column>
                </Row>

                <br />
                <br />
                <Row>
                    <Column>
                        <NumberInput
                            label="Goles Equipo A"
                            min={0}
                            on:change={(e) =>
                                (teams.teamAScore = parseInt(e.detail))}
                        />
                    </Column>
                    <Column>
                        <NumberInput
                            label="Goles Equipo B"
                            min={0}
                            on:change={(e) =>
                                (teams.teamBScore = parseInt(e.detail))}
                        />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button
                            disabled={teams.teamAScore === undefined ||
                                teams.teamBScore === undefined}
                            on:click={() => createMatch(index)}
                        >
                            Registrar resultado
                        </Button>
                    </Column>
                </Row>
                <hr />
            {/each}
        </Grid>
    {/if}

    <br />
    <br />
    <br />

    <DataTable
        sortable
        selectable
        batchSelection
        bind:selectedRowIds
        size="compact"
        headers={[
            { key: "name", value: "Nombre" },
            { key: "matchesWon", value: "Partidos ganados" },
            { key: "matchesDrawn", value: "Partidos empatados" },
            { key: "matchesLost", value: "Partidos perdidos" },
            { key: "goalsFor", value: "Goles a favor" },
            { key: "goalsAgainst", value: "Goles en contra" },
            { key: "totalMatches", value: "Total partidos" },
            { key: "victoryPercentage", value: "Porcentaje victorias" },
            { key: "buttons", value: "" },
        ]}
        {rows}
    >
        <Toolbar size="sm">
            <span>
                <Button
                    icon={Add}
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
                {cell.value ? `${parseInt(cell.value)} %` : "0 %"}
            {:else}
                {cell.value ?? ""}
            {/if}
        </svelte:fragment>
    </DataTable>
</Content>

<!-- Modal for adding a new player -->
<Modal
    bind:open={openPlayer}
    primaryButtonText="Añadir jugador"
    primaryButtonDisabled={playerName.trim() === ""}
    on:click:button--primary={() => {
        createPlayer({ name: playerName });
    }}
>
    <TextInput
        labelText="Nombre del jugador"
        placeholder="Introduce el nombre del jugador..."
        bind:value={playerName}
    />
</Modal>
