<script lang="ts">
    import HeaderBlock from "../../../../components/HeaderBlock.svelte";
    import DonateBlock from "../../../../components/DonateBlock.svelte";
    import { onMount } from "svelte";
    import GalleryBlock from "../../../../components/GalleryBlock.svelte";
    import { page } from "$app/stores";

    export let data: { yearGalleries: any[], year: string, contentBlocks: any[] };
    let images, headerTitle, currentAsOrEs;

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

    let currentRoute = '';
    page.subscribe(($page) => {
        currentRoute = $page.url.pathname;  // Get the current path
    });

    $: currentAsOrEs = asOrEs[String(data.year).slice(-1)];
    $: headerText = currentRoute.startsWith('/hu') 
        ? `A ${data.year}-${currentAsOrEs} TeatRom plakátjai`
        : currentRoute.startsWith('/en') 
        ? 'Posters from ' + data.year
        : 'TeatRom';

    $: images = data.yearGalleries.find((gallery) => gallery.year === data.year).imagesCollection.items;

    onMount(() => {
        console.log(String(data.year).slice(-1));
    });
</script>

<section>
    <HeaderBlock title="{headerText}" />
    <GalleryBlock images={images} />
    <DonateBlock contentBlocks={data.contentBlocks} />
</section>

<style lang="scss">
    
</style>