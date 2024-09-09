<script lang="ts">
    export let title;
</script>

<section>
    <div class="contentWrapper">
        <div class="headerContainer">
            <h1>{title}</h1>
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
        background-image: url('/images/teatrom-27.jpg');
        background-position: 50% 30%;
    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        max-width: 52rem;
        width: 100%;
    }

    h1 {
        font-family: 'UniversLtStd-BlackEx';
        color: #fff;
        color: var(--color-theme-1);
        font-size: 6rem;
        text-align: center;
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
