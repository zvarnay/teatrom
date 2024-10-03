<script lang="ts">
    import ContentBlock from "../../../components/ContentBlock.svelte";
    import HeaderBlock from "../../../components/HeaderBlock.svelte";
</script>

<section>
    <HeaderBlock />
    <section class="years">
        <a href='/archive/2020'>
            2020
        </a>
        <a href='/archive/2021'>
            2021
        </a>
        <a href='/archive/2022'>
            2022
        </a>
        <a href='/archive/2023'>
            2023
        </a>
    </section>
</section>

<style lang="scss">
    .years {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0;
        justify-content: center;
        margin: 0 -1rem;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200px;
            background-color: var(--color-theme-2);
            border-radius: 10px;
            transition: background-color 0.3s;
        }
    }

</style>