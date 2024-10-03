<script lang="ts">
    import ContentBlock from "../../../components/ContentBlock.svelte";
    import DonateBlock from "../../../components/DonateBlock.svelte";
    import HeaderBlock from "../../../components/HeaderBlock.svelte";

    export let data: { contentBlocks: any[] };
</script>

<section>
    <HeaderBlock title="Rólunk" />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "HxtE7ByriYqeXn8y04qrZ")}
        hideTitle
    />
    <DonateBlock contentBlocks={data.contentBlocks} />
</section>