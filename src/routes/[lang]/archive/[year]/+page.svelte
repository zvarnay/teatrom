<script lang="ts">
    import HeaderBlock from "../../../../components/HeaderBlock.svelte";
    import PdfBlock from "../../../../components/PDFBlock.svelte";
    import DonateBlock from "../../../../components/DonateBlock.svelte";
    import { onMount } from "svelte";

    export let data;

    const asOrEs = {
        1: "es",
        2: "es",
        3: "as",
        4: "es",
        5: "ös",
        6: "os",
        7: "es",
        8: "as",
        9: "es",
        0: "as", // because 2020
    };

    let pdf_url: string;
    $: pdf_url = `/pdf/${data.year}.pdf`;
</script>

<section>
    <HeaderBlock title="Archívum {data.year}" />
    <!-- {#if !!pdf_url}
    <PdfBlock
        pdf_url={pdf_url}
        title="A {data.year}-{asOrEs[String(data.year).slice(-1)]} fesztivál plakátjai"
        body="<p>Itt találhatóak a {data.year}-{asOrEs[String(data.year).slice(-1)]} helyszínek és programok.</p>"
    />
    {/if} -->
    <DonateBlock contentBlocks={data.contentBlocks} />
</section>

<style lang="scss">
    .pdfContainer {
        display: flex;
        width: 100%;
        height: 90vh;
        overflow: auto;
        padding: 1rem 2rem;

        embed {
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
        }
    }
</style>