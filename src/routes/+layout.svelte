<script>
    // @ts-nocheck
    import {
        Header,
        HeaderUtilities,
        HeaderGlobalAction,
        SkipToContent,
        Content,
        Theme,
    } from "carbon-components-svelte";
    import { BrightnessContrast } from "carbon-icons-svelte";
    import "carbon-components-svelte/css/all.css";

    let theme = $state("g90");
    let { children } = $props();
</script>

<Theme bind:theme persist />

<Header company="Peña de Fútbol" platformName="Sierra del Pozo" expand>
    <svelte:fragment slot="skip-to-content">
        <SkipToContent />
    </svelte:fragment>
    <HeaderUtilities>
        <HeaderGlobalAction
            iconDescription={theme === "white" ? "Dark" : "Bright"}
            aria-label="Theme"
            icon={BrightnessContrast}
            on:click={(e) => (theme = theme === "white" ? "g90" : "white")}
        />
    </HeaderUtilities>
</Header>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }

    :global(.bx--content) {
        padding: 1rem;
    }

    @media (max-width: 768px) {
        :global(.bx--content) {
            padding: 0.75rem;
        }
    }
</style>

{@render children()}
