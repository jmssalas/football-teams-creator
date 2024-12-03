<script>
    // @ts-nocheck

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
    } from "carbon-components-svelte";
    import { Add, TrashCan } from "carbon-icons-svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    let rows = data.users;
    let open = false;
    let player = undefined;
    let action;
    let buttonText;
    let kind;

    $: {
        action = player ? "?/delete" : "?/create";
        buttonText = player ? "Eliminar jugador" : "Añadir jugador";
        kind = player ? "danger" : "primary";
    }
</script>

<Content>
    <DataTable
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
