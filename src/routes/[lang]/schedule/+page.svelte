<script lang="ts">
    import { onMount } from "svelte";
    import ContentBlock from "../../../components/ContentBlock.svelte";
    import HeaderBlock from "../../../components/HeaderBlock.svelte";
    import ScheduleBlock from "../../../components/ScheduleBlock.svelte";
    import WorkshopBlock from "../../../components/WorkshopBlock.svelte";
    import DonateBlock from "../../../components/DonateBlock.svelte";

    export let data: { villages: any[], contentBlocks: any[] };
    let selectedVillage: any;

    onMount(() => {
        selectedVillage = data.villages[Math.random() * data.villages.length | 0];
    });

    const onVillageSelected = ((event) => {
        selectedVillage = event.detail.village;
    });

</script>

<section>
    <HeaderBlock />
    <!-- <VillageMenu villages={data.villages} selectedVillage={selectedVillage} on:villageSelected={onVillageSelected} /> -->
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "5dHojS2vnjZnZ21fuBNFZX")}
        mini={true}
    />
    {#if selectedVillage}
        <div id="detailedSchedule">
            <ScheduleBlock  villages={data.villages} selectedVillage={selectedVillage} />
        </div>
        <ContentBlock
            content={data.contentBlocks.find((block) => block.sys.id === "7vgOkZkF55McJFocaLDsdQ")}
            background="url(/images/textures/tx-12.webp)"
            whiteText
            textBoxBackground="#000"
        />
    {/if}
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "5RGfy3cF2IPmXxfUIdzIru")}
        background="#000"
        whiteText
    />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "2hU31IugGKv50am7YSHNJU")}
        background="#fff5b2"
    />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "1cGmq7dntTleN2zYBNsvzP")}
    />
    <ContentBlock
    content={data.contentBlocks.find((block) => block.sys.id === "3XhGTrky45FiIJpJS5mWck")}
    background="#000"
    whiteText
    />
    <ContentBlock
    content={data.contentBlocks.find((block) => block.sys.id === "6md6HIQkYHbzMrwXoGjLPK")}
    background="#fff5b2"
    />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "2xtWZRbuPGuXUfY1hOwHJN")}
    />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "2hMNrL3d4GEAMJpCbr1M6Y")}
        whiteText
        background="#000"
    />
    <WorkshopBlock contents={[
        data.contentBlocks.find((block) => block.sys.id === "5zDwyXFFoqo7xiKnuHhPTV"),
        data.contentBlocks.find((block) => block.sys.id === "6z222hRdAbONFwC50yQ9Cp"),
    ]} />
    <DonateBlock contentBlocks={data.contentBlocks} />
</section>

<style lang="scss">
    #detailedSchedule {
        scroll-margin-top: 4rem;
    }
</style>