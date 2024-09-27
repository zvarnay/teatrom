<script lang="ts">
    import ContentBlock from "../../components/ContentBlock.svelte";
    import DonateBlock from "../../components/DonateBlock.svelte";
    import HeaderBlock from "../../components/HeaderBlock.svelte";
</script>

<section>
    <HeaderBlock title="Támogatás" />
    <ContentBlock
        title="Támogass minket!"
        body="
            <p>A fesztivál lehetőséget ad arra, hogy a közösségek magas színvonalú művekel és kiemelkedő a művészekkel találkozzanak, és átéljék az egyetemes és a roma kultúra különleges értékeit, egyedi létjogosultságát Európa kultúráinak sorában. Ebben az értelemben a TeatRom program a romaság színház-kultúrájának európai fejlődését is szolgálja.</p>
            <p>Előre is köszönjük minden támogatónknak, még a legkisebb adományt is, amellyel  hozzájárul ahhoz, hogy az aktuális fesztivál előkészítéséhez szükséges művészi, pedagógiai, szociális és szervezői munka, valamint a fesztivál idején a programok lebonyolítása megfelelő színvonalon zajlódhassanak.</p>
        "
        background="url(/images/figures-5.webp)"
    />
    <DonateBlock />
</section>