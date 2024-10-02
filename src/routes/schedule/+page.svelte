<script lang="ts">
    import { onMount } from "svelte";
    import ContentBlock from "../../components/ContentBlock.svelte";
    import HeaderBlock from "../../components/HeaderBlock.svelte";
    import InteractiveMap from "../../components/InteractiveMap.svelte";
    import ScheduleBlock from "../../components/ScheduleBlock.svelte";
    import WorkshopBlock from "../../components/WorkshopBlock.svelte";
    import VillageMenu from "../../components/VillageMenu.svelte";
    import DonateBlock from "../../components/DonateBlock.svelte";

    export let data: { villages: any[] };
    let selectedVillage: any;

    onMount(() => {
        selectedVillage = data.villages[0];
    });

    const onVillageSelected = ((event) => {
        selectedVillage = event.detail.village;
    });

</script>

<section>
    <HeaderBlock title="Programok" />
    <!-- <VillageMenu villages={data.villages} selectedVillage={selectedVillage} on:villageSelected={onVillageSelected} /> -->
    <ContentBlock
        title="Érdekes helyzet…"
        body="<p>A fesztivál, amely idén  semmilyen állami forrásból nem kapott támogatást, az utóbbi évek egyik legerősebb programjával rukkol elő. Két Európai program segítségével különleges művek és előadók jutnak el a Cserehát művészetszerető kis településeire. Az öt település idén; Alsóvadász (10.04), Homrogd (10.06), Borsodbóta (10.09), Szendrőlád (10.10) és Sajókaza (10.11).</p><p>A Józsefvárosi önkormányzat vendégszeretetének köszönhetően, történetében persze korántsem először, Borsod megyén kívül is bemutatkozik a fesztivál.</p>"
        mini={true}
    />
    {#if selectedVillage}
        <div id="detailedSchedule">
            <ScheduleBlock  villages={data.villages} selectedVillage={selectedVillage} />
        </div>
        <ContentBlock 
            title="Csatlakozz hozzánk Budapesten október 12-én" 
            body="
            <img src='/images/budapest_plakat_negyzet.jpg' alt='Budapest nap' style='float: right; margin-left: 8px; width: 40%'; aspect-ratio: 1 / 1;' />
            <p>A Józsefvárosi önkormányzat vendégszeretetének köszönhetően, történetében persze korántsem először, Borsod megyén kívül is bemutatkozik a fesztivál. A programok részletes leírását <a href='/schedule'>itt</a> találod.</p>
            <p>Mátyás tér</p>
            <ul>
                <li>13:00 – Műveszeti műhely gyerekeknek</li>
                <li>14:00 – Csörgőkezű, Vödörjáró, Dobhasú</li>
                <li>15:00 – a Made in Gypsystan! gálaműsora</li>
            </ul>
            <p>Dankó udvar</p>
            <ul>
                <li>16:00 – Marianna Mehr élete, az RS9 színház előadása</li>
            </ul>
            <p>Kálvária tér</p>
            <ul>
                <li>18:00 – Hamu, a frankfurti Antagon Theater előadása</li>
            </ul>
            "
            background="url(/images/textures/tx-12.webp)"
            whiteText={true}
            textBoxBackground="#000"
        />
    {/if}
    <ContentBlock
        title="Antagon Theater: Ashes"
        body="
            <p>A Kálvária téren 18 órától igazán különleges utcaszínházi látványosságra kerül sor. A Frankfurti Antagon Theater Aktion évek óta vesz részt különböző partnerprogramokban a fesztiválszervező Utcaszínházi Alkotóközösséggel, egy kisebb előadásukkal két évvel ezelőtt már bemutatkoztak Gagybátorban és Alsóvadászon. Most a társulat régi terve valósul meg azzal, hogy az Ashes című előadásukkal és a teljes társulattal 10 napot töltenek a borsodi települések közösségeivel a Perform Europe és a Goethe Intézet segítségével.</p>
            <p>Látványos szabadtéri színházi élmény élő zenével, tánccal, kórussal, gólyalábazással és óriásbábokkal. A műsorban 16 előadóművész és zenész lép fel. Az előadás zenei palettája a népdaloktól a modern hangzású atmoszférazenékig terjed, a hangszerek a világ minden tájáról származó autentikus hangszerek és újrahasznosított tárgyak.</p>
            <p>Az ASHES egy fontos üzenetet közvetít: a világunk változik, a jövő bizonytalan és egyre inkább ráébredünk, hogy a régi, “nagyobb, jobb, gyorsabb” életmód már nem működik. A klímaváltozás és a háborúk valósága arra késztet minket, hogy újragondoljuk, mi igazán fontos az életben. A darab azt kérdezi: amikor minden hamuvá válik, mi marad meg a kultúránkból? Minden vég egy új kezdetet hoz. Vajon melyik Főnixmadár fog feltámadni a hamvainkból? Az ASHES arra ösztönöz, hogy nézzünk vissza a múltunkra, és találjuk meg azokat a kulturális értékeket, amelyek összekötnek minket. Milyen elfeledett dalok, táncok vagy rituálék segíthetnek újraépíteni a közösségeinket és hidakat építeni a különböző kultúrák között?</p>
            <p>Biztosak vagyunk abban, hogy a Kálvária téri programok nemcsak a környék lakóinak, hanem a budapesti közönség számára is a hétvége legvonzóbb eseményei lehetnek!</p>"
        background="#000"
        whiteText={true}
    />
    <ContentBlock
        title="„Made in Gypsystan” tehetségkutató gálaműsorok"
        body="
            <p>A „Made in Gypsystan gála” egykor a táborzárás rituáléja volt, hatalmas közösségi élmény a több településről érkező fiatalok számára. Ma minden fajta kiszámítható forrás híján, se táborról, se hosszú távú jelenlétről nem lehet szó. Balogh Veronika önkéntes munkájának köszönhetően egyetlen előadás keletkezett ebben az évben, amelynek címe Cigány VS Magyar és az alsóvadászi program keretében mutatja be azt a Ritmus a Színházban csoport. Annak érdekében, hogy a többi településen is a roma amatőrök játékát helyezhessük a figyelem középpontjába újabb fogást kellett kiötlenünk. Egy régi-új formáját ajánlottunk.</p>
            <p>A településeken, egyszerűen „Ki mit tud?!”-nak nevezett színpadi verseny-sorozaton, kis csoportok és egyéni produkciók indulhatnak. Az öt településen helyezést elért 3-3 produkció hivatalos Budapestre, ahol október tizenkettedikén, a Józsefváros egy központi terében a legjobb produkciók mutatkoznak be.</p>
            <p>A Made in Gypsistan gálára a Kálvária téren, az Antagon színház által felállított színpadon október 12-én 17 órakor kerül sor. A gála tehát mindenki számára tartogat még meglepetéseket! A fellépésre való felkészülés az a fejlesztő folyamat, amely igazából a program legfontosabb célja.</p>"
        background="#fff5b2"
    />
    <ContentBlock
        title="Marianna Mehr élete"
        body="
            <p>Kifejezetten nagy örömmel felelünk meg az idősebbek igényeinek, amikor egy komoly, mondhatni nehezen emészthető ételt is kínálunk a budapesti fesztivál menüjében, a Marianna Mehr svájci irónő visszaemlékezései nyomán készült, a roma sorsot a svájci társadalom tökéletes díszletei között bemutató megrázó előadást, a Marianna Mehr életét. Az elnyomott kisebbségek és kívülállók helyzetét feltáró Mariella Mehr jenis volt. A jeniseket a cigány nép harmadik legnagyobb európában élő törzseként tartották számon és biológiai népirtás áldozataivá váltak Svájcban. Ez a tragédia 1926-ban kezdődött és csak 1975-ben ért véget. Az egy személyes előadás címszereplője Rácz Magdi, Mehr művét színpadra alkalmazta és rendezte Lábán Katalin.</p>"
    />
    <ContentBlock
        title="Családi előadások a fesztivál programjában"
        body="
            <p>Nagyon fontos tudni, hogy az egyes állomásokat ez alkalommal egy helyi szervezőkből álló csapat készíti elő, akiket a SPARCE elnevezésű Kreatív Európa projekt és magyarországi partnereik segítenek a feladatokban. Így a program egyedi filozófiája szerint már ők választották egy menűből azokat az előadásokat, amelyek a fesztiválnap délutáni programjának nyitányai lesznek. Két településén a Cinka Panna színház jön, Szécsi Magda Csörgőkezű, Vödörjáró, Dobhasú című meséjével, a másik három településen Méhes Csaba pantomimjátékát várják - ezek lesznek tehát a színházi délutánok bevezetői a egyes települések számára. Szécsi Magda: Csörgőkezű, Vödörjáró, Dobhasú – zenés mesejáték. A Cigányszínház előadása Budapesten a Kesztyűgyárban is látható lesz.</p>"
        background="#000"
        whiteText={true}
    />
    <ContentBlock
        title="Csörgőkezű, Vödörjáró, Dobhasú"
        body="
            <p>Szécsi Magda mesedarabja egyszerre szól mindenkihez, akit mássága miatt méltatlan bántások érnek. Mivel a gyerekek különösen kegyetlenek tudnak lenni egymással, így az egymásra utaltság láttatása, a kölcsönös elfogadás szükségességének felismertetése körükben, valóságos küldetéssel ér fel. „Félek tőled, mert nem tudom, ki vagy!” – jelenti ki Dobhasú az előadás legelején, majd a szereplők megismerkednek egymással, s kiderül, hogy közös gondjaikon együtt, egymást támogatva, megszeretve, segítve lehetnek úrrá.</p>
            <p>A szeretet nélküliség világában még a Nap is eltűnik szégyenében, nem világít, nem ragyog, sötétségbe borítja a Földet, mert az emberek nem méltóak a Nap fényére.</p>
            <p>A három szereplő, aki három különböző országból érkezik, három különböző kultúrából, elhatározza, hogy legyűrik lelkükben az egymástól való félelmet, lenézést. Elhatározzák, hogy meg akarják ismerni a másik hazáját, szokásait, zenéjét, táncát, kultúráját.</p>
            <p>Az ismerkedés közepette csodák csodája egyre jobban megkedvelik, megszeretik a másikat annak furcsaságaival, külső másságaival együtt, aminek következtében a Nap újra derengeni kezd!</p>
            <p>Rájönnek, hogy csakis az egy más iránt érzett szeretet hozhatja vissza a Nap fényét a Földre!</p>
            <p>A játékmesterrel a gyerekeket is bevonjuk a játékba, ők is segítenek visszahozni a melegség, a szeretet fényét a Földre: táncolnak, énekelnek a szereplőkkel, hogy újra ragyogjon a Nap az égen!</p>"
        background="#fff5b2"
    />
    <ContentBlock
        title="PANTOMIX"
        body="
            <p>Egész estét betöltő, felhőtlen szórakozást ígérő, vidám pantomim műsor. A könnyű humorú jelenetek, a komikum klasszikus alaphelyzeteire építkeznek, és a klasszikus Decroux-i pantomimtechnika eszközeit vonultatják fel. A néző mindjárt a program legelején különböző közönségjátékok, improvizációk révén résztvevőjévé, aktív szereplőjévé válik a cselekménynek. A műsor vidám etűdjei között helyet kaphatnak mélyebb tartalmat hordozó, groteszk humorú, ugyanakkor közérthető jelenetek is. Az egész program középpontjában az ember, az emberi viselkedésformák, a karakterek, jellemek különbözőségéből adódó – egy kívülálló számára sokszor humoros – helyzetek, konfliktusok állnak. Méhes Csaba a magyar mime és bohóc társadalom egyik legnagyobb mestere, ujja köré tekeri, bevonja, rabul ejti, szüntelenül nevetteti, majd egy-egy pillanatra könnyekre fakasztja mindenkori közönségét!</p>"
        background="#000"
        whiteText={true}
    />
    <WorkshopBlock />
    <DonateBlock />
</section>

<style lang="scss">
    #detailedSchedule {
        scroll-margin-top: 4rem;
    }
</style>