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
    } from "carbon-components-svelte";
    import {
        Add,
        CircleFilled,
        FaceActivatedAdd,
        Renew,
        TrashCan,
    } from "carbon-icons-svelte";
    import { createTeams } from "./createTeams.js";

    /** @type {import('./$types').PageData} */
    export let data;

    let rows;
    let open = false;
    let openPoints = false;
    let openGoals = false;
    let player = undefined;
    let action;
    let buttonText;
    let kind;
    let teams;
    let selectedRowIds = [];

    $: rows = data.players;
    $: players = data.players.filter((player) =>
        selectedRowIds.includes(player.id)
    );
    $: {
        action = player ? "?/delete" : "?/create";
        buttonText = player ? "Eliminar jugador" : "Añadir jugador";
        kind = player ? "danger" : "primary";
    }

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
        teams = undefined;
        invalidateAll();
    }

    async function refreshPoints() {
        await fetch("/", { method: "DELETE" });
        teams = undefined;
        invalidateAll();
    }
</script>

<Content>
    <Button
        disabled={players.length === 0}
        on:click={() => (teams = createTeams(players))}>Crear equipos</Button
    >

    <br />
    <br />
    <br />

    {#if teams}
        <Grid>
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
                        open = true;
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
                <Button
                    tooltipPosition="right"
                    tooltipAlignment="end"
                    kind="danger-ghost"
                    iconDescription="Eliminar jugador"
                    icon={TrashCan}
                    on:click={() => {
                        player = row;
                        open = true;
                    }}
                />
            {:else}
                {cell.value ?? ""}
            {/if}
        </svelte:fragment>
    </DataTable>

    <br />
    <br />
    <br />

    <!--
    <Button
        kind="danger"
        size="small"
        icon={Renew}
        on:click={() => {
            refreshPoints();
        }}>Reinicializar puntuación</Button
    > -->
</Content>

<Modal
    bind:open
    passiveModal
    on:close={() => {
        player = undefined;
    }}
>
    <Form method="POST" {action} on:submit>
        <input hidden name="player-id" value={player?.id} />
        <TextInput
            required
            readonly={player !== undefined}
            type
            name="player-name"
            labelText="Nombre del jugador"
            placeholder="Introduce el nombre del jugador..."
            value={player?.name}
        />
        <Button {kind} type="submit">{buttonText}</Button>
    </Form>
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
