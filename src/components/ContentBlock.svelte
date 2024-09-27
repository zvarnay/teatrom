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
    class="contentBlock"
    class:mini={mini}
    class:whiteText={whiteText}
>
    <div class="contentWrapper {style}">
        <div class="grid">
            {#if image}
                <img src={image} alt="" />
            {/if}
            <div>
                {#if title}
                    <h2>{title}</h2>
                {/if}
                <div class="textContainer">{@html body}</div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        align-items: center;
        margin: 0 -1rem;
        padding: 3rem 2rem;
        background-image: linear-gradient(90deg, #f5f1cd, #eda87b);
        background-size: cover;
        min-height: 90vh;
        
        position: relative;
        z-index: 2;
        
        &.mini {
            padding: 3rem 2rem;
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

        &.twoColumn {
            max-width: 64rem;
        }
    }

    .grid {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .grid :global(img) {
        width: 100%;
        height: fit-content;
        max-width: 16rem;
        height: intrinsic;
    }

    h2 {
        font-size: var(--font-size-header);
        font-weight: 600;
    }

    :global(.contentBlock ul) {
        padding: 0;
    }

    :global(.contentBlock ul li) {
        margin: 0;
        padding: 4px 0;
        margin-left: 1rem;
        color: #fff;
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
    }

    @media (min-width: 500px) {
        section {
            min-height: 90vh;

            .grid {
                flex-direction: row;
            }

            .grid :global(img) {
                width: 33%;
                margin-right: 2rem;
            }

            &.mini {
                padding: 6rem 2rem;
            }
        }
    }
</style>
