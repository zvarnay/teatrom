<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let villages: any[];
    export let selectedVillage: any;
    
    let hoveredVillage: any;
    
    const dispatch = createEventDispatcher();

    function handleVillageMenuClick(village: any) {
        const detailedSchedule = document.getElementById("detailedSchedule");
        if (detailedSchedule) {
            detailedSchedule.scrollIntoView({ behavior: "smooth" });
        }

        dispatch("villageSelected", { village });

        return () => {
            selectedVillage = village;
        };
    }

    function setHoveredVillage(village: any) {
        hoveredVillage = village;
    }

    function clearHoveredVillage() {
        hoveredVillage = null;
    }

</script>

<section id="villages">
    <div class="grid">
        {#each villages as village}
            <article
                on:click={handleVillageMenuClick(village)}
                on:mouseenter={setHoveredVillage(village)}
                on:mouseleave={clearHoveredVillage(village)}
            >
                <div class="imgContainer">
                    <img src="/images/{village.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}.png" alt="">
                </div>
            </article>
        {/each}
    </div>
    {#if hoveredVillage}
        <div class="selectedVillage">
            <h2>{hoveredVillage.name}</h2>
        </div>
    {/if}
</section>

<style lang="scss">
    #villages {
        height: 6rem;
        position: relative;
        margin: -3rem 0;
        z-index: 3;

        .grid {
            background: var(--color-theme-1);
            width: max-content;
            height: 100%;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(5, minmax(50px, 60px));
            align-items: center;
            gap: 1rem;
            padding: 0.5rem 1rem;
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

        .selectedVillage {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 3;
            background-color: var(--color-theme-1);
            border: 1px solid #f0f;
            padding: 6px 12px;
            border-radius: 5rem;

            h2 {
                font-size: 1rem;
                color: #f0f;
                text-align: center;
            }
        }
    }
</style>