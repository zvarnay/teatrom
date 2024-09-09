<script lang="ts">
    import { onMount } from "svelte";
    import ContentBlock from "../../components/ContentBlock.svelte";
    import HeaderBlock from "../../components/HeaderBlock.svelte";
    import InteractiveMap from "../../components/InteractiveMap.svelte";
    import ScheduleBlock from "../../components/ScheduleBlock.svelte";
    import WorkshopBlock from "../../components/WorkshopBlock.svelte";

    export let data: { villages: any[] };
    let selectedVillage: any;

    onMount(() => {
        selectedVillage = data.villages[0];
        console.log(selectedVillage);
    });

    function handleVillageMenuClick(village: any) {
        const detailedSchedule = document.getElementById("detailedSchedule");
        if (detailedSchedule) {
            detailedSchedule.scrollIntoView({ behavior: "smooth" });
        }
        return () => {
            selectedVillage = village;
        };
    }

</script>

<section>
    <HeaderBlock title="Programok" />
    <section id="villages">
        <div class="grid">
            {#each data.villages as village}
                <article on:click={handleVillageMenuClick(village)}>
                    <div class="imgContainer">
                        <img src="/images/{village.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}.png" alt="">
                    </div>
                    <h3>{village.name}</h3>
                </article>
            {/each}
        </div>
    </section>
    <ContentBlock
        title="A színház a fókuszban"
        body="<p>Idén is rengeteg érdekes programmal várunk mindenkit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p>"
        mini={true}
    />
    <ContentBlock
        title="Antagon Theater"
        body="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque aspernatur explicabo numquam assumenda nisi, fuga, ea autem nihil, quas cupiditate. Nulla minus sequi deleniti unde molestias, ipsum fugit porro.</p>"
        background="url(/images/ashes-1.webp)"
        whiteText={true}
    />
    <WorkshopBlock />
    {#if selectedVillage}
        <div id="detailedSchedule">
            <ScheduleBlock  villages={data.villages} selectedVillage={selectedVillage} />
        </div>
    {/if}
    <InteractiveMap villages={data.villages} showHeader={true} />
</section>

<style lang="scss">
    #villages {
        position: relative;
        margin: -3.5rem 0;
        height: 7rem;
        z-index: 3;

        .grid {
            background: var(--color-theme-1);
            width: max-content;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(5, minmax(50px, 60px));
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border-radius: 5rem;

            article {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0;

                &:hover {
                    h3 {
                        opacity: 1;
                    }
                    img {
                        transform: scale(1.1);
                    }
                }

                .imgContainer {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    padding: 0;
                    border-radius: 50%;
                    border: 2px solid var(--color-theme-1);
                    
                    img {
                        width: 100%;
                        height: 100%;
                        aspect-ratio: 1 / 1;
                        object-fit: contain;
                        border-radius: 50%;   
                    }
                }


                h3 {
                    opacity: 0;
                    font-size: 0.5rem;
                    text-align: center;
                    color: #c700c7;
                }
            }
        }
    }
</style>