<script lang="ts">
    import ContentBlock from "../../components/ContentBlock.svelte";
    import HeaderBlock from "../../components/HeaderBlock.svelte";
    import InteractiveMap from "../../components/InteractiveMap.svelte";

    export let data: { villages: any[] };
</script>

<section>
    <HeaderBlock title="Programok" />
    <ContentBlock
        title="Csodálatos programokkal készülünk!"
        body="<p>Idén is rengeteg érdekes programmal várunk mindenkit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p>"
        mini={true}
    />
    <ContentBlock
        title="Antagon Theater"
        body="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p>"
        background="url(/images/ashes-1.webp)"
        whiteText={true}
    />
    <InteractiveMap villages={data.villages} />
</section>