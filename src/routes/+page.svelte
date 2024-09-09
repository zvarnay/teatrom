<script lang="ts">
    import ContentBlock from "../components/ContentBlock.svelte";

    import DonateBlock from "../components/DonateBlock.svelte";
    import InteractiveMap from "../components/InteractiveMap.svelte";

    export let data: { villages: any[] };
</script>

<section id="page">
    <InteractiveMap villages={data.villages} />

    <ContentBlock 
      title="TeatRom" 
      body="<p>A TeatRom Magyarország legszegényebb térségében megjelenő roma összművészeti fesztivál.</p><p></p><p> Munkánk hozzájárul a borsodi szegregátumokban élő szociálisan és egészségileg hátrányos helyzetű fiatalok és felnőttek mentális egészségi állapotának, életmódjának és esélyegyenlőségének javításához. A magas színvonalú, kortárs egyetemes és magyar roma kultúra alkotóinak támogatásával, alkotásaik roma közösségekhez való eljuttatásával szeretnénk hozzájárulni hazánk szellemi-, művészeti-, kulturális életének fejlesztéséhez.</p><p> A fesztivál lehetővé teszi, hogy a szegregátumok közössége a művészeti alkotásokon keresztül is találkozzon a kultúra legjobbjaival, és felfokozottan éljék át az egyetemes roma kultúra különleges értékeit, egyedi létjogosultságát, európa kultúráinak sorában.</p>"
      style="twoColumn"
      image="/images/2.png"/>

    <ContentBlock 
      title="Ilyen volt tavaly" 
      body="<p>[KÉPEK TAVALYRÓL]</p>"
      background="url(/images/textures/tx-10.webp)"/>

    <DonateBlock />
</section>

<style lang="scss">
    section#page {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>
