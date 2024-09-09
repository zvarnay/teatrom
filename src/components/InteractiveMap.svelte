<script lang="ts">
    import VillageInfo from "../components/VillageInfo.svelte";
    import Map from "../components/Map.svelte";

    export let villages: any[] = [];

    let selectedVillage = villages[0];

    function handleVillageHover(event: CustomEvent) {        
        selectedVillage = event.detail.village;
    }
</script>

<header>
    <h1>Interaktív térkép:</h1>
</header>
<div class="mapPanel">
    <aside>
        <VillageInfo village={selectedVillage} />
    </aside>
    <section class="mapContainer">
        <Map villages={villages} on:villageHover={handleVillageHover} />
    </section>
</div>

<style lang="scss">
    header {
        width: calc(100% + 2rem);
        height: 5rem;
        padding-top: 1rem;
        margin: 0 -1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--color-theme-2);
        color: var(--color-theme-1);

        position: relative;
        z-index: 2;

        h1 {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
    .mapPanel {
        height: calc(100vh - 5rem - 2rem);
        margin-top: 1rem;
        margin-bottom: 2rem;
        margin-left: 1rem;
        margin-right: auto;

        display: grid;
        grid-template-columns: 350px minmax(200px, 800px);
        gap: 5rem;

        aside {
            z-index: 2;
        }
    }
</style>