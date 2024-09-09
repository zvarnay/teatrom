<script lang="ts">
    import ContentBlock from "../../../components/ContentBlock.svelte";
    import HeaderBlock from "../../../components/HeaderBlock.svelte";

    export let data;
</script>

<section>
    <HeaderBlock title="Archívum {data.year}" />
    <ContentBlock
        title="Fejlesztés alatt"
        body="<p>Erre még várni kell egy kicsit, a TeatRom archívuma fejlesztés alatt van.</p>"
    />
</section>