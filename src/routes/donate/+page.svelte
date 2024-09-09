<script lang="ts">
    import ContentBlock from "../../components/ContentBlock.svelte";
    import DonateBlock from "../../components/DonateBlock.svelte";
    import HeaderBlock from "../../components/HeaderBlock.svelte";
</script>

<section>
    <HeaderBlock title="Támogatás" />
    <ContentBlock
        title="Csak rád számíthatunk"
        body="<p>Ezért és azért is nagyon rossz nekünk, senki - de konkrétan senki - nem ad semmit, szóval csak rád számíthatunk. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p>"
        mini={true}
    />
    <ContentBlock
        title="Már ezt és ezt elértük"
        body="<p>Már csomó eredménye van ennek a dolognak, nagyon jó. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p><p>[GALÉRIA?]</p>"
        background="url(/images/figures-5.webp)"
    />
    <DonateBlock />
</section>