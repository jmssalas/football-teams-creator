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
</script>

<Theme bind:theme persist />

<Header company="Pozo Alcón" platformName="Peña de Fútbol">
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

<slot />
