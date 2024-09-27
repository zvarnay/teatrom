<script lang="ts">
    export let title;
    export let body;
    export let pdf_url;
    export let style = "";
    export let background = "";
    export let whiteText = false;
    export let mini = false;
</script>

<section
    style="background: {background}; background-size: cover; background-position: center;"
    class="contentBlock"
>
    <div class="grid">
        <div class="textContainer">
            {#if title}
            <h2>{title}</h2>
            <div class="textContainer">{@html body}</div>
            {/if}
        </div>
        <div class="pdfContainer">
            <embed src={pdf_url} type="application/pdf" width="400px" height="100%" />
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
        
        position: relative;
        z-index: 2;

        .grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            margin: 0 auto;
        }
    }

    h2 {
        font-size: var(--font-size-header);
        font-weight: 600;
    }

    section :global(p) {
        margin-top: 1.5rem;
        font-size: var(--font-size-body);
        line-height: 1.5;
    }

    .pdfContainer {
        display: flex;
        width: 100%;
        height: 90vh;
        overflow: auto;
        padding: 0;

        embed {
            width: 100%;
            margin: 0 auto;
        }
    }

    @media (min-width: 680px) {
        section {
            min-height: 90vh;

            .grid {
                grid-template-columns: minmax(200px, 1fr) minmax(300px, 700px);
                gap: 2rem;
            }
        }
    }
</style>
