<script lang="ts">
    export let title;
    export let body;
    export let image = null as string | null;
    export let style = "";
    export let background = "";
    export let coverPage = false;
</script>

<section style="background: {background}" class:coverPage={coverPage}>
    <div class="contentWrapper">
        <div class="grid">
            {#if image}
                <img src={image} alt="" />
            {/if}
            <div>
                <h2>{title}</h2>
                <div class="textContainer {style}">{@html body}</div>
            </div>
        </div>
    </div>
</section>

<style lang="scss" background="{background}">
    section {
        min-height: 60vh;
        display: flex;
        align-items: center;
        margin: 0 -1rem;
        padding: 3rem 1rem;
        z-index: 2;
        background-image: linear-gradient(90deg, #f5f1cd, #eda87b);

        &.coverPage {
            min-height: 100vh;
        }
    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 52rem;
        width: 100%;
    }

    .grid {
        display: flex;
    }

    .grid :global(img) {
        width: 50%;
        max-width: 24rem;
        margin-right: 2rem;
        height: fit-content;
    }

    h2 {
        font-size: 2rem;
        font-weight: 600;
    }

    section :global(p) {
        margin-top: 1rem;
        font-size: 1.25rem;
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
</style>
