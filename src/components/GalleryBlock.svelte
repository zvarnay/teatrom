<script lang="ts">
   export let images = [];
</script>

<section class="contentBlock">
    <div class="grid">
        {#each images as image}
            <img src={image.url} />
        {/each}
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
            // a nice grid for the images, which can handle all sorts of sizes
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
            margin: 0 auto;

            img {
                max-width: 100%;
                max-height: 100%;
                object-fit: cover;
            }
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

    @media (min-width: 680px) {
        section {
            min-height: 90vh;
        }
    }
</style>
