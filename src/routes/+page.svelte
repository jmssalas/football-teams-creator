<script>
    // @ts-nocheck

    import "carbon-components-svelte/css/white.css";
    import {
        Button,
        Content,
        DataTable,
        Toolbar,
        ToolbarContent,
    } from "carbon-components-svelte";
    import { Add } from "carbon-icons-svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    let rows = data.users;
    let open = false;
</script>

<Content>
    <DataTable
        headers={[
            { key: "name", value: "Name" },
            { key: "points", value: "Points" },
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
    </DataTable>
</Content>
