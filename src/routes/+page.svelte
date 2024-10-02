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
    {#if screenWidth > 1000}
        <InteractiveMap villages={data.villages} />
    {:else}
        <ScheduleBlock villages={data.villages} selectedVillage={data.villages[0]} />
    {/if}

    <ContentBlock 
      title="Színházat mindenkinek!" 
      body="<p>Célunk, hogy a szegregációban élő fiatalok és felnőttek számára a művészeti javak segítsenek rátalálni azokra az utakra, amelyeken elindulva, ki-ki eséllyel hagyhatja maga mögött a szegénység korlátait, miközben mentális egészsége, társadalmi biztonságérzete, énereje, készségei és képességei fejlődnek. Munkánk célja az is, hogy a kortárs egyetemes és magyar roma kultúra alkotóinak támogatásával, műveik célba juttatásával hozzájáruljunk a legnagyobb velünk élő nép szellemi, művészeti és kulturális életének gazdagodásához.</p>
      <p>A TeatRom hátterében az Utcaszínházi Alkotóközösség közel húsz éves, Magyarország legszegényebb vidékére szabott művészet-pedagógiai, pszichológiai programja áll. Fesztiválunk a hosszú távú pedagógiai és közösségteremtő munka kiemelt eseménye.</p>"
    />

    <ContentBlock 
      title="Csatlakozz hozzánk Budapesten október 12-én" 
      body="
      <img src='/images/budapest_plakat_negyzet.jpg' alt='Budapest nap' style='float: right; margin-left: 8px; width: 40%'; aspect-ratio: 1 / 1;' />
      <p>A Józsefvárosi önkormányzat vendégszeretetének köszönhetően, történetében persze korántsem először, Borsod megyén kívül is bemutatkozik a fesztivál. A programok részletes leírását <a href='/schedule'>itt</a> találod.</p>
      <p>Mátyás tér</p>
      <ul>
        <li>13:00 – Műveszeti műhely gyerekeknek</li>
        <li>14:00 – Csörgőkezű, Vödörjáró, Dobhasú</li>
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
      background="url(/images/textures/tx-12.webp)"
      whiteText={true}
      textBoxBackground="#000"
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
