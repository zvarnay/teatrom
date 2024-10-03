<script lang="ts">
    import ContentBlock from "../../../components/ContentBlock.svelte";
    import HeaderBlock from "../../../components/HeaderBlock.svelte";

    export let data: { contentBlocks: any[] };
</script>

<section>
    <HeaderBlock />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "7rZ1hyWdwSYwyrQ3zYEvrX")}
        background="#000"
        whiteText
        mini={true}
    />
</section>