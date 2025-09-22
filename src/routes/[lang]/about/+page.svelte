<script lang="ts">
    import ContentBlock from "../../../components/ContentBlock.svelte";
    import DonateBlock from "../../../components/DonateBlock.svelte";
    import HeaderBlock from "../../../components/HeaderBlock.svelte";

    export let data: { contentBlocks: any[] };
</script>

<section>
    <HeaderBlock />
    <ContentBlock
        content={data.contentBlocks.find((block) => block.sys.id === "HxtE7ByriYqeXn8y04qrZ")}
        hideTitle
    />
    <ContentBlock content={data.contentBlocks.find((block) => block.sys.id === "8dCLi3yzeZGWxF0VRS10z")} 
        mini
        background="url(/images/textures/tx-12.webp)"
        whiteText
        textBoxBackground="#000"
     />
</section>