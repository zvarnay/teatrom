<script lang="ts">
    import { language } from "$lib/contentfulStore";
    import { get } from "svelte/store";

    const headerText = get(language) == 'hu' ? 'Kövess minket' : 'Follow us';
</script>

<section class="pressBlock">
    <div class="contentWrapper">
        <div class="grid">
            <h2>{headerText}</h2>
            <article>
                <a href="https://www.instagram.com/teatrom_festival/" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="">
                </a>
            </article>
            <article>
                <a href="https://www.facebook.com/events/913781894132574/" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="">
                </a>
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
        background: var(--color-theme-2);
        
        position: relative;
        z-index: 2;

        .grid {
            width: 100%;
            display: flex;
            grid-template-columns: 1fr;
            align-items: center;
            gap: 1rem;
            margin: 0 auto;

            h2 {
                flex-grow: 1;
            }

            article img {
                width: 60px;
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
            .grid {
                h2 {
                    flex-grow: 1;
                }
            }
        }
    }
</style>
