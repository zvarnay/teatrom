<script lang="ts">
    import ContentBlock from "../../../components/ContentBlock.svelte";
    import HeaderBlock from "../../../components/HeaderBlock.svelte";
</script>

<section>
    <HeaderBlock />
    <ContentBlock
        title="Archívum"
        body='
            <p>Itt találod a korábbi fesztiváljaink programjait, képeit és egyéb dokumentumait.</p>
            <section class="years">
                <article>
                    <a href="/archive/2020">
                        <button>2020</button>
                    </a>
                </article>
                <article>
                    <a href="/archive/2021">
                        <button>2021</button>
                    </a>
                </article>
                <article>
                    <a href="/archive/2022">
                        <button>2022</button>
                    </a>
                </article>
                <article>
                    <a href="/archive/2023">
                        <button>2023</button>
                    </a>
                </article>
            </section>
        '
        background="url(/images/figures-4.webp)"
    />
</section>

<style lang="scss">
    :global(.years) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2rem;
    }

    :global(.years article) {
        display: flex;
        justify-content: center;
        overflow: hidden;
    }

    :global(.years button) {
        padding: 6px 12px;
        background: var(--color-theme-1);
        color: var(--color-theme-2);
        font-size: var(--font-size-small-header);
        border: 3px solid var(--color-theme-2);
        border-radius: 0.5rem;
        cursor: pointer;
    }

</style>