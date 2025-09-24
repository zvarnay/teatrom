<script lang="ts">
    export let contents;
    console.log(contents[0]);
    
</script>

<section>
    <div class="contentWrapper">
        <div class="grid">
            {#each contents as workshop}
                {#if !!workshop?.title}
                    <article>
                        <h2>{workshop.title}</h2>
                        <div class="imgContainer">
                            <img src={workshop.image.url} alt="">
                            {#if workshop.logo}
                                <img src={workshop.logo.url} alt="" class="logo">
                            {/if}
                        </div>
                        <p>{workshop.body.map((block) => block.content[0].value).join('')}</p>
                    </article>
                {/if}
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    section {
        min-height: 90vh;
        display: flex;
        align-items: center;
        margin: 0 -1rem;
        padding: 3rem 2rem;
        background: #d2c570;
        
        position: relative;
        z-index: 2;
    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 68rem;
        width: 100%;

        h1 {
            width: 100%;
            margin-top: -3rem;
            margin-bottom: 3rem;
            text-align: center;

            font-weight: 500;
            color: var(--color-theme-2);
            padding-top: 6px;
            padding-bottom: 6px;
            border-top: 2px solid var(--color-theme-2);
            border-bottom: 2px solid var(--color-theme-2);
        }
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;

        article {
            position: relative;

            h2 {
                font-weight: 600;
            }

            .imgContainer {
                width: 100%;
                aspect-ratio: 16/9;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 1rem 0;
                gap: 1rem;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }


                .logo {
                    position: absolute;
                    top: 6px;
                    left: 6px;
                    min-width: 25%;
                    width: 100px;
                    height: auto;
                    margin: 0;
                }
            }

            p {
                margin-bottom: 1rem;
                font-size: var(--font-size-body);
                line-height: 1.5;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>
