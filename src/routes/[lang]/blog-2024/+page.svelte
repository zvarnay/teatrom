<script lang="ts">
    import { onMount } from "svelte";
    import ContentBlock from "../../../components/ContentBlock.svelte";
    import DonateBlock from "../../../components/DonateBlock.svelte";
    import HeaderBlock from "../../../components/HeaderBlock.svelte";

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
    <HeaderBlock />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "aSwPrl59tEpVLttlxBccu")}
        background="#fff5b2"
        hideTitle
    />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "4pTrstxXCxfSEs56XnJ4DK")}
        background="#000"
        whiteText
    />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "4hsAlX6W74PfcGsd51k7Jk")}
        background="#fff5b2"
    />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "4pEguJXzc1edGzLxnjxac8")}
        background="#000"
        whiteText
    />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "6f25lY6xvrb6i6HJKHxbga")}
        background="#fff5b2"
    />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "1l1rbUwpFk7IDAJacWBBlY")}
        background="#000"
        whiteText
    />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "4dYjEUItSuud5hHcovSN93")}
        background="#fff5b2"
    />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "2kHFHr2cW3dL5tnUk4HYwS")}
        background="#000"
        whiteText
    />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "VWLSAIDxet54VSQ9QgYem")}
        hideTitle
    />

    <!-- <ContentBlock
      content={data.contentBlocks.find((block) => block.sys.id === "7vgOkZkF55McJFocaLDsdQ")}
      background="url(/images/textures/tx-12.webp)"
      whiteText
      textBoxBackground="#000"
    /> -->

    <DonateBlock contentBlocks={data.contentBlocks} />
</section>

<style lang="scss">
    section#page {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>
