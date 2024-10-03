<script lang="ts">
    import { language } from "$lib/contentfulStore";
    import { headerOptions } from "$lib/headerOptions";
    import { onMount } from "svelte";
    import { get } from "svelte/store";

    export let title = "";

    onMount(() => {
        if (title) return;
        const pageName = window.location.pathname.split("/").pop();
        title = headerOptions[pageName][get(language)];
    });
</script>

<section>
    <div class="contentWrapper">
        <div class="headerContainer">
            <h1>{title}</h1>
        </div>
    </div>
</section>

<style lang="scss" background="{background}">
    section {
        min-height: 20vh;
        display: flex;
        align-items: center;
        margin: 0 -1rem;
        margin-top: -5rem;
        padding: 3rem 1rem;
        padding-top: 8rem;
        z-index: 2;
        background-image: url('/images/textures/tx-11.webp');
        background-position: 50% 30%;
        background-size: 150vw;
    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        max-width: 52rem;
        width: 100%;
    }

    h1 {
        color: #fff;
        font-weight: 900;
        font-size: var(--font-size-page-header);
        text-align: center;
    }

    section :global(p) {
        margin-top: 1rem;
        font-size: var(--font-size-body);
        line-height: 1.5;
    }

    .textContainer {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0 2rem;

        &.twoColumn {
            grid-template-columns: 1fr 1fr;
        }
        &.threeColumn {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media (min-width: 680px) {
        section {
            min-height: 40vh;
            background-size: 100vw;
        }
    }
</style>
