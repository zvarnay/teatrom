<script lang="ts">
    import { language } from "$lib/contentfulStore";
    import { get } from "svelte/store";

    const headerText = get(language) == 'hu' ? 'Támogatóink' : 'Sponsors';
</script>

<section class="pressBlock">
    <div class="contentWrapper">
        <h3>{headerText}</h3>
        <div class="grid">
            <article>
                <img src="/images/sparse.png" alt="">
            </article>
            <article>
                <img src="/images/eu.png" alt="">
            </article>
            <article>
                <img src="/images/ceu.png" alt="">
            </article>
            <article>
                <img src="/images/goethe.png" alt="">
            </article>
            <article>
                <img src="/images/magyar_szinhazakert.png" alt="">
            </article>
            <article>
                <img src="/images/antagon.png" alt="">
            </article>
            <article>
                <img src="/images/manzart-logo.png" alt="">
            </article>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        align-items: center;
        margin: 0 -1rem;
        padding: 3rem 2rem;
        background: var(--color-theme-1);
        
        position: relative;
        z-index: 2;

        .grid {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
            align-items: center;
            gap: 1.5rem;

            article {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60px;
                width: 100%;
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

        }
    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 52rem;
        width: 100%;
    }

    h3 {
        font-size: var(--font-size-small-header);
        font-weight: 600;
        color: #fff;
        margin-bottom: 1rem;
    }

    section :global(p) {
        margin-top: 1.5rem;
        font-size: var(--font-size-body);
        line-height: 1.5;
    }
</style>
