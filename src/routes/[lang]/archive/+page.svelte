<script lang="ts">
    import { get } from "svelte/store";
    import ContentBlock from "../../../components/ContentBlock.svelte";
    import HeaderBlock from "../../../components/HeaderBlock.svelte";
    import { language } from "$lib/contentfulStore";

    export let data: { contentBlocks: any[] };

    let lang;
    $: lang = get(language);
</script>

<section>
    <HeaderBlock />
    {#each [
        [2020, '2fY5QoXHIXV9D9IHHZIXyu', null],
        [2021, '3ZU4B960dvQs6ncq1rI6Ix', '#fff5b2'],
        [2022, '7nBuXC4ONBgT1TL7RtSa72', null],
        [2023, 'ckZr18dQ91iLDZZF7GO0N', '#fff5b2'],
        [2024, '5rzi1MoZURLYau1auj6ByI', null],
    ] as [year, id, bg]}
        <a href={`/${lang}/archive/${year}`}>
            <ContentBlock content={data.contentBlocks.find((block) => block.sys.id === id)} mini background={bg} />
        </a>
    {/each}
</section>

<style lang="scss">
    .years {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0;
        justify-content: center;
        margin: 0 -1rem;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200px;
            background-color: var(--color-theme-2);
            border-radius: 10px;
            transition: background-color 0.3s;
        }
    }

</style>