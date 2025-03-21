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
    let { data } = $props();

    let open = $state(false);
    let openPoints = $state(false);
    let openGoals = $state(false);
    let player = $state(undefined);
    let action = $state();
    let buttonText = $state();
    let kind = $state();
    let teams = $state(data.teams);
    let selectedRowIds = $state([]);

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
            body: JSON.stringify({ teams }),
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
        teams = {};
        invalidateAll();
    }

    async function refreshPoints() {
        await fetch("/", { method: "DELETE" });
        teams = {};
        invalidateAll();
    }
</script>

<Content>
    <Button
        disabled={players.length === 0}
        on:click={async () => {
            teams = createTeams(players);
        }}>Crear equipos</Button
    >
    <Button
        kind="ghost"
        icon={TrashCan}
        iconDescription="Borrar equipos"
        on:click={() => {
            teams = {};
        }}
    />

    <br />
    <br />
    <br />

    {#if teams?.team1}
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
