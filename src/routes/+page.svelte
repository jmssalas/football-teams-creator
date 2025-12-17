<script>
    // @ts-nocheck

    import { invalidateAll } from "$app/navigation";
    import {
        Button,
        Content,
        DataTable,
        Modal,
        Toolbar,
        ToolbarContent,
        Form,
        TextInput,
        Grid,
        Row,
        Column,
        NumberInput,
        Select,
        SelectItem,
    } from "carbon-components-svelte";
    import {
        Add,
        Checkbox,
        CircleFilled,
        FaceActivatedAdd,
        Renew,
        TrashCan,
    } from "carbon-icons-svelte";
    import { createTeams } from "./createTeams.js";

    /** @type {import('./$types').PageData} */
    let { data } = $props();

    let openPlayer = $state(false);
    let openPoints = $state(false);
    let openGoals = $state(false);
    let player = $state(undefined);
    let playerToDelete = $state(undefined);
    let playerName = $state("");
    let action = $state();
    let buttonText = $state();
    let kind = $state();
    let teamsArray = $state(data.teams);
    let selectedRowIds = $state([]);
    let numberOfTeams = $state(2);

    const rows = $derived(data.players);
    const players = $derived(
        data.players.filter((player) => selectedRowIds.includes(player.id))
    );

    $effect(() => {
        action = player ? "?/delete" : "?/create";
        buttonText = player ? "Eliminar jugador" : "Añadir jugador";
        kind = player ? "danger" : "primary";
    });

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
    async function win(players, tie = false) {
        await fetch("/", {
            method: "POST",
            body: JSON.stringify({ players, tie }),
            headers: {
                "content-type": "application/json",
            },
        });
        teamsArray = [];
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
            {#each teamsArray as teams}
                <Row>
                    <Column>
                        <h2>Equipo 1</h2>
                        {#each teams.team1 as player}
                            <p>{player.name}</p>
                        {/each}
                        <br />
                        <br />
                        <p>
                            <strong>
                                Puntos totales: {teams.team1.reduce(
                                    (acc, curr) => acc + curr.points,
                                    0
                                )}
                            </strong>
                        </p>

                        <Button on:click={() => win(teams.team1)}>
                            Gana equipo 1
                        </Button>
                    </Column>

                    <Column>
                        <h2>Equipo 2</h2>
                        {#each teams.team2 as player}
                            <p>{player.name}</p>
                        {/each}
                        <br />
                        <br />
                        <p>
                            <strong>
                                Puntos totales: {teams.team2.reduce(
                                    (acc, curr) => acc + curr.points,
                                    0
                                )}
                            </strong>
                        </p>

                        <Button on:click={() => win(teams.team2)}>
                            Gana equipo 2
                        </Button>
                    </Column>
                </Row>

                <br />
                <br />
                <Row>
                    <Column>
                        <Button
                            on:click={() =>
                                win([...teams.team1, ...teams.team2], true)}
                            >Empate</Button
                        >
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
            { key: "points", value: "Puntos" },
            { key: "goals", value: "Goles" },
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
                <Button
                    disabled={players.length === 0}
                    icon={FaceActivatedAdd}
                    iconDescription="Añadir puntos"
                    on:click={() => {
                        openPoints = true;
                    }}>Añadir puntos</Button
                >
                <Button
                    disabled={players.length === 0}
                    icon={CircleFilled}
                    iconDescription="Añadir goles"
                    on:click={() => {
                        openGoals = true;
                    }}>Añadir goles</Button
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

<Modal bind:open={openPoints} passiveModal>
    <Form method="POST" action="?/addPoints" on:submit>
        <input hidden name="players" value={JSON.stringify(players)} />
        <NumberInput required name="points" label="Puntos" value={0} />
        <Button type="submit">Añadir puntos</Button>
    </Form>
</Modal>

<Modal bind:open={openGoals} passiveModal>
    <Form method="POST" action="?/addGoals" on:submit>
        <input hidden name="players" value={JSON.stringify(players)} />
        <NumberInput required name="goals" label="Goles" value={0} />
        <Button type="submit">Añadir goles</Button>
    </Form>
</Modal>
