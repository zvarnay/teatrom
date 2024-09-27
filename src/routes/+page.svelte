<script lang="ts">
    import { onMount } from "svelte";
    import ContentBlock from "../components/ContentBlock.svelte";

    import DonateBlock from "../components/DonateBlock.svelte";
    import InteractiveMap from "../components/InteractiveMap.svelte";
    import ScheduleBlock from "../components/ScheduleBlock.svelte";

    export let data: { villages: any[] };
    let screenWidth = 0;
    
    onMount(() => {
        screenWidth = window.innerWidth;

        window.addEventListener("resize", () => {
            screenWidth = window.innerWidth;
        });
    });
</script>

<section id="page">
    <ContentBlock 
      title="TeatRom" 
      body="<p>Célunk, hogy a művészeti javakhoz való hozzáférés a szegregációban élő fiatalok és felnőttek számára segítsen rátalálni azokra az utakra, amelyeken elindulva, ki-ki eséllyel hagyhatja maga mögött a szegénység reá rótta korlátokat, miközben mentális egészsége, társadalmi biztonságérzete, énereje, készségei és képességei fejlődnek. Munkánk célja az is, hogy a kortárs egyetemes és magyar roma kultúra alkotóinak támogatásával, műveik célba juttatásával hozzájáruljunk a legnagyobb velünk élő nép szellemi, művészeti és kulturális életének gazdagításához.</p>"
      style="twoColumn"
      image="/images/2.png"
    />

    {#if screenWidth > 1000}
        <InteractiveMap villages={data.villages} />
    {:else}
        <ScheduleBlock villages={data.villages} selectedVillage={data.villages[0]} />
    {/if}

    <ContentBlock 
      title="Budapest nap október 12-én" 
      body="
      <p>A Józsefvárosi önkormányzat vendégszeretetének köszönhetően, történetében persze korántsem először, Borsod megyén kívül is bemutatkozik a fesztivál. A programok részletes leírását <a href='/schedule'>itt</a> találod.</p>
      <p>Mátyás tér</p>
      <ul>
        <li>12:00 – Műveszeti műhely gyerekeknek</li>
        <li>15:00 – a Made in Gypsystan! gálaműsora</li>
      </ul>
      <p>Dankó udvar</p>
      <ul>
        <li>16:00 – Marianna Mehr élete, az RS9 színház előadása</li>
      </ul>
      <p>Kálvária tér</p>
      <ul>
        <li>18:00 – Hamu, a frankfurti Antagon Theater előadása</li>
      </ul>
      "
      background="url(/images/textures/tx-10.webp)"
      whiteText={true}
    />

    <DonateBlock />
</section>

<style lang="scss">
    section#page {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>
