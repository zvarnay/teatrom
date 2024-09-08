<script lang="ts">
    import VillageInfo from "../components/VillageInfo.svelte";
    import Map from "../components/Map.svelte";
    import ContentBlock from "../components/ContentBlock.svelte";

    import DonateBlock from "../components/DonateBlock.svelte";

    export let data: { villages: any[] };

    let selectedVillage = data.villages[0];

    function handleVillageHover(event: CustomEvent) {        
        selectedVillage = event.detail.village;
    }
</script>

<section id="page">
    <div class="mapPanel">
        <aside>
            <VillageInfo village={selectedVillage} />
        </aside>
        <section class="mapContainer">
            <Map villages={data.villages} on:villageHover={handleVillageHover} />
        </section>
    </div>

    <ContentBlock 
      title="TeatRom" 
      body="<p>A TeatRom Magyarország legszegényebb térségében megjelenő roma összművészeti fesztivál.</p><p></p><p> Munkánk hozzájárul a borsodi szegregátumokban élő szociálisan és egészségileg hátrányos helyzetű fiatalok és felnőttek mentális egészségi állapotának, életmódjának és esélyegyenlőségének javításához. A magas színvonalú, kortárs egyetemes és magyar roma kultúra alkotóinak támogatásával, alkotásaik roma közösségekhez való eljuttatásával szeretnénk hozzájárulni hazánk szellemi-, művészeti-, kulturális életének fejlesztéséhez.</p><p> A fesztivál lehetővé teszi, hogy a szegregátumok közössége a művészeti alkotásokon keresztül is találkozzon a kultúra legjobbjaival, és felfokozottan éljék át az egyetemes roma kultúra különleges értékeit, egyedi létjogosultságát, európa kultúráinak sorában.</p>"
      style="twoColumn"
      image="/images/2.png"/>

    <DonateBlock />
</section>

<style lang="scss">
    section#page {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .mapPanel {
        height: calc(100vh - 5rem - 2rem);
        margin-top: 1rem;
        margin-bottom: 2rem;
        margin-left: 1rem;
        margin-right: auto;

        display: grid;
        grid-template-columns: minmax(350px, 400px) minmax(200px, 800px);
        gap: 5rem;
    }
</style>
