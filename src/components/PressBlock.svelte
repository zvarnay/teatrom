<script lang="ts">
    export let title;
    export let body = "";
    export let links: { title: string; year: string; url: string; image: string }[] = [];
</script>

<section class="pressBlock">
    <div class="contentWrapper">
        <h2>{title}</h2>
        {#if !!body}
            <p>{@html body}</p>
        {/if}
        <div class="grid">
            {#each links as link}
                <article>
                    <a href={link.url} target="_blank">
                        <img src={link.image} alt="">
                        <h3>{link.title}</h3>
                        <p>{link.year}</p>
                    </a>
                </article>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        align-items: center;
        margin: 0 -1rem;
        padding: 3rem 2rem;
        background: #000;
        
        position: relative;
        z-index: 2;

        .grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            margin: 0 auto;

            article {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                padding: 1rem;
                background: var(--color-theme-2);
                box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

                a {
                    color: #fff;
                }

                img {
                    margin-top: 1rem;
                    width: 100%;
                }

                h3 {
                    margin-top: 1rem;
                    font-size: var(--font-size-subheader);
                    font-weight: 600;
                    color: #fff;
                }

                p {
                    margin-top: 0rem;
                    font-size: var(--font-size-caption);
                    color: #fff;
                }
            }
        }
    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 0 auto;
        max-width: 52rem;
        width: 100%;
    }

    h2 {
        font-size: var(--font-size-header);
        font-weight: 600;
        color: #fff;
    }

    section :global(p) {
        margin-top: 1.5rem;
        font-size: var(--font-size-body);
        line-height: 1.5;
    }

    @media (min-width: 680px) {
        section {
            min-height: 90vh;

            .grid {
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 2rem;
            }
        }
    }
</style>
