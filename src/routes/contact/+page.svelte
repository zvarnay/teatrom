<script lang="ts">
    import ContentBlock from "../../components/ContentBlock.svelte";
    import HeaderBlock from "../../components/HeaderBlock.svelte";
</script>

<section>
    <HeaderBlock title="Kapcsolat" />
    <ContentBlock 
        title="[közösségi média]"
        body=""
        background="#000"
        whiteText={true}
        mini={true}
    />
    <ContentBlock 
        title="Kapcsolat"
        body="
            <p><strong>A szervezet munkatársai</strong><br>
                Balázs Simon – művészeti vezető, a társulat tagja, színházrendező – 70/369-3724<br>
                Molnár Keresztyén Gabriella – színházrendező – 20/288-4805</p>
            <p><strong>Címünk</strong><br>
                Irodánk címe – Budapest, XIV. ker. Erzsébet királyné útja 18. (földszint)<br>
                Postai cím – 1142 Budapest, Dorozsmai u. 13/b.</p>"
        background="#000"
        whiteText={true}
        mini={true}
    />
</section>