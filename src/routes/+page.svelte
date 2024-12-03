<script>
    // @ts-nocheck

    import { invalidateAll } from "$app/navigation";
    import "carbon-components-svelte/css/white.css";
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
    } from "carbon-components-svelte";
    import { Add, TrashCan } from "carbon-icons-svelte";
    import { createTeams } from "./createTeams.js";

    /** @type {import('./$types').PageData} */
    export let data;

    let rows;
    let open = false;
    let player = undefined;
    let action;
    let buttonText;
    let kind;
    let teams;

    $: rows = data.players;
    $: {
        action = player ? "?/delete" : "?/create";
        buttonText = player ? "Eliminar jugador" : "Añadir jugador";
        kind = player ? "danger" : "primary";
    }

    async function win(players) {
        await fetch("/", {
            method: "POST",
            body: JSON.stringify({ players }),
            headers: {
                "content-type": "application/json",
            },
        });
        teams = undefined;
        invalidateAll();
    }
</script>

<Content>
    <DataTable
        size="compact"
        headers={[
            { key: "name", value: "Nombre" },
            { key: "points", value: "Puntos" },
            { key: "buttons", value: "" },
        ]}
        {rows}
    >
        <Toolbar>
            <ToolbarContent>
                <Button
                    icon={Add}
                    iconDescription="Añadir jugador"
                    on:click={() => {
                        open = true;
                    }}
                />
            </ToolbarContent>
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

    <Button on:click={() => (teams = createTeams(rows))}>Crear equipos</Button>

    <br />
    <br />
    <br />

    {#if teams}
        <Grid>
            <Row>
                <Column>
                    <h2>Equipo 1</h2>
                    {#each teams.team1.players as player}
                        <p>{player.name}</p>
                    {/each}

                    <Button on:click={() => win(teams.team1.players)}>
                        Gana equipo 1
                    </Button>
                </Column>

                <Column>
                    <h2>Equipo 2</h2>
                    {#each teams.team2.players as player}
                        <p>{player.name}</p>
                    {/each}

                    <Button on:click={() => win(teams.team2.players)}>
                        Gana equipo 2
                    </Button>
                </Column>
            </Row>
        </Grid>
    {/if}
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
