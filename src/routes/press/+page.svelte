<script lang="ts">
    import ContentBlock from "../../components/ContentBlock.svelte";
    import DonateBlock from "../../components/DonateBlock.svelte";
    import HeaderBlock from "../../components/HeaderBlock.svelte";
    import PressBlock from "../../components/PressBlock.svelte";
</script>

<section>
    <HeaderBlock title="Sajtó" />
    <PressBlock
        title="Rádióinterjúk"
        links="{[
            {
                title: 'Ötös – Beszélgetés Simon Balázzsal',
                year: '2024',
                url: 'https://www.klubradio.hu/archivum/otos-muranyi-tundevel-es-kalid-arturral-2024-januar-19-pentek-1005-38450',
                image: 'https://ipi.media/wp-content/uploads/2021/06/IPI-Hungary-Klubradio-EU-Statement-09-06-2021.jpg'
            },
            {
                title: 'Bari Judit és Éva Mélyinterjúja Simon Balázzsal',
                year: '2023',
                url: 'https://tilos.hu/episode/cekla/2023/11/05',
                image: 'https://ipi.media/wp-content/uploads/2022/05/IPI-Hungary-Tilos-Radio-MFRR-statement-12-05-2022-1.jpg'
            },
        ]}"
    />
    <DonateBlock />
</section>

