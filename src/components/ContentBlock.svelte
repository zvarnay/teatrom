<script lang="ts">
    export let title;
    export let body;
    export let image = null as string | null;
    export let style = "";
    export let background = "";
    export let whiteText = false;
    export let mini = false;
</script>

<section
    style="background: {background}; background-size: cover; background-position: center;"
    class:mini={mini}
    class:whiteText={whiteText}
>
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

<style lang="scss">
    section {
        min-height: 90vh;
        display: flex;
        align-items: center;
        margin: 0 -1rem;
        padding: 3rem 1rem;
        background-image: linear-gradient(90deg, #f5f1cd, #eda87b);
        background-size: cover;
        
        position: relative;
        z-index: 2;
        
        &.mini {
            padding: 6rem 1rem;
            min-height: 0;
        }
    }

    :global(section.whiteText :is(h2, p)) {
        color: #fff;
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
        margin-top: 1.5rem;
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
