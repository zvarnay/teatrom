<script lang="ts">
    import { language } from "$lib/contentfulStore";
    import { get } from "svelte/store";
    import DonateBlock from "../../../components/DonateBlock.svelte";
    import HeaderBlock from "../../../components/HeaderBlock.svelte";
    import PressBlock from "../../../components/PressBlock.svelte";

    export let data: { contentBlocks: any[], pressMentions: any[] };
    let title;

    $: title = get(language) == 'hu' ? 'Rólunk írták' : 'Written about us';
</script>

<section>
    <HeaderBlock />
    <PressBlock
        title="{title}"
        pressMentions={data.pressMentions}
    />
    <DonateBlock contentBlocks={data.contentBlocks} />
</section>

