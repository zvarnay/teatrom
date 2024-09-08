<script lang="ts">
    import ContentBlock from "../../components/ContentBlock.svelte";
    import DonateBlock from "../../components/DonateBlock.svelte";

    import ticketBg from "$lib/images/textures/tx-1.webp";
</script>

<section>
    <ContentBlock 
        title="Jegyek"
        body="<p>A belépés in­gye­nes. Fenn­tar­tási költ­sé­ge­ink fe­de­zé­sére azonban meg­ké­rünk minden olyan lá­to­ga­tót, akinek le­he­tő­sé­gé­ben áll, hogy tá­mo­gas­son minket aján­lott összegű ado­mánnyal (3500 Ft egy nap, 6000 Ft két nap). Fi­ze­tésre a hely­szí­nen, kész­pénz­zel lesz le­he­tő­ség!</p>"
        background="url({ticketBg})"
    />
    <DonateBlock />
</section>