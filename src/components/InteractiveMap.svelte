<script lang="ts">
    import VillageInfo from "../components/VillageInfo.svelte";
    import Map from "../components/Map.svelte";

    export let villages: any[] = [];
    export let showHeader = false;

    let selectedVillage = villages[0];

    function handleVillageHover(event: CustomEvent) {        
        selectedVillage = event.detail.village;
    }
</script>

{#if showHeader}
<header>
    <h1>Interaktív térkép:</h1>
</header>
{/if}
<div class="mapPanel">
    <section class="mapContainer">
        <Map villages={villages} on:villageHover={handleVillageHover} />
    </section>
    <aside>
        <VillageInfo village={selectedVillage} />
    </aside>
</div>

<style lang="scss">
    header {
        width: calc(100% + 2rem);
        height: 5rem;
        padding: 0.5rem 0;
        margin: 0 -1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--color-theme-2);
        color: var(--color-theme-1);

        position: relative;
        z-index: 2;

        h1 {
            font-size: var(--font-size-header);
            font-weight: 500;
        }
    }
    .mapPanel {
        height: calc(100vh - 5rem - 2rem);
        margin-top: 1rem;
        margin-bottom: 2rem;
        margin-right: 1rem;
        margin-left: auto;

        max-width: 100%;

        display: grid;
        grid-template-columns: minmax(200px, 800px) 350px;
        gap: 5rem;

        aside {
            z-index: 2;
        }
    }
</style>