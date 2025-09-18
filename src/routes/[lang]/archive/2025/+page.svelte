<script lang="ts">
    import { onMount } from "svelte";
    import InteractiveMap from "../../../../components/InteractiveMap.svelte";
    import ScheduleBlock from "../../../../components/ScheduleBlock.svelte";
    import ContentBlock from "../../../../components/ContentBlock.svelte";
    import DonateBlock from "../../../../components/DonateBlock.svelte";


    export let data: { villages: any[], contentBlocks: any[] };
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
        <ScheduleBlock villages={data.villages} selectedVillage={data.villages[Math.random() * data.villages.length | 0]} />
    {/if}

    <ContentBlock content={data.contentBlocks.find((block) => block.sys.id === "7cIZOX6xOa1HH4DntUpDbd")} />

    <ContentBlock
      content={data.contentBlocks.find((block) => block.sys.id === "7vgOkZkF55McJFocaLDsdQ")}
      background="url(/images/textures/tx-12.webp)"
      whiteText
      textBoxBackground="#000"
    />

    <DonateBlock contentBlocks={data.contentBlocks} />
</section>

<style lang="scss">
    section#page {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>
