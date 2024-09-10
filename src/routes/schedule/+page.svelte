<script lang="ts">
    import { onMount } from "svelte";
    import ContentBlock from "../../components/ContentBlock.svelte";
    import HeaderBlock from "../../components/HeaderBlock.svelte";
    import InteractiveMap from "../../components/InteractiveMap.svelte";
    import ScheduleBlock from "../../components/ScheduleBlock.svelte";
    import WorkshopBlock from "../../components/WorkshopBlock.svelte";
    import VillageMenu from "../../components/VillageMenu.svelte";

    export let data: { villages: any[] };
    let selectedVillage: any;

    onMount(() => {
        selectedVillage = data.villages[0];
    });

    const onVillageSelected = ((event) => {
        selectedVillage = event.detail.village;
    });

</script>

<section>
    <HeaderBlock title="Programok" />
    <VillageMenu villages={data.villages} selectedVillage={selectedVillage} on:villageSelected={onVillageSelected} />
    <ContentBlock
        title="A színház a fókuszban"
        body="<p>Idén is rengeteg érdekes programmal várunk mindenkit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p>"
        mini={true}
    />
    <ContentBlock
        title="Antagon Theater"
        body="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p>"
        background="url(/images/ashes-1.webp)"
        whiteText={true}
    />
    <WorkshopBlock />
    {#if selectedVillage}
        <div id="detailedSchedule">
            <ScheduleBlock  villages={data.villages} selectedVillage={selectedVillage} />
        </div>
    {/if}
    <InteractiveMap villages={data.villages} showHeader={true} />
</section>

<style lang="scss">
    #detailedSchedule {
        scroll-margin-top: 4rem;
    }
</style>