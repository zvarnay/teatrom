<script lang="ts">
    import ContentBlock from "../../../components/ContentBlock.svelte";
    import DonateBlock from "../../../components/DonateBlock.svelte";
    import HeaderBlock from "../../../components/HeaderBlock.svelte";

    export let data: { contentBlocks: any[] };
</script>

<section>
    <HeaderBlock />
    <ContentBlock content={data.contentBlocks.find((block) => block.sys.id === "8dCLi3yzeZGWxF0VRS10z")} mini />
        <!-- title="Filléres gondok!"
        body="
            <p>Az elmúlt évtized során egyre világosabbá vált, hogy munkánk finanszírozását nem várhatjuk a magyar államtól. A fesztivál fennmaradását idén is magánszemélyeknek és európai partnerprogramoknak köszönhetjük, amelyek előadásokkal és önkéntes munkával támogatják kezdeményezésünket. Ez természetesen nem elég, a fesztivál lebonyolításához számos olyan szolgáltatás szükséges, amely csak piaci áron beszerezhető. Ebben az évben a fesztivál megrendezésének járulékos költségeire, közelítőleg négy és fél millió forintra közösségi gyűjtést szervezünk.</p>
            <p>Előre is köszönjük minden támogatónknak még a legkisebb adományt is, amellyel hozzájárul ahhoz, hogy az előkészítéshez szükséges művészi, pedagógiai, szociális és szervezői munka, valamint a fesztivál idején a programok lebonyolítása megfelelő színvonalon zajlódhasson.</p>
        "
        background="#d2c570" -->
    <DonateBlock contentBlocks={data.contentBlocks} />
</section>