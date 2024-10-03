<script lang="ts">
    export let villages;
    export let selectedVillage: any;
</script>

<section id="detailedSchedules">
    <div class="contentWrapper">
        <h1>Program</h1>
        <div class="grid">
            <aside class="menu">
                {#each villages as village}
                <div class="imageContainer" class:active={village.name == selectedVillage.name} on:click={() => selectedVillage = village}>
                    <img src="/images/{village.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}.svg" alt="">
                </div>
                {/each}
            </aside>
            <article>
                <div class="villageInfo">
                    <h2>{selectedVillage.name} – {(new Date(selectedVillage.date)).toLocaleDateString('hu-HU', {year: 'numeric', month: 'short', day: 'numeric'})}</h2>
                </div>
                <div class="eventGrid">
                    {#each selectedVillage.schedule.items as schedule}
                    <article>
                        <div class="time">{schedule.time}</div>
                        <h3>{schedule.event.title}</h3>
                        {#if schedule.event.image}
                            <img src={schedule.event.image.url} alt="">
                        {/if}
                        {#if schedule.event.description}
                            <p>{schedule.event.description}</p>
                        {/if}
                    </article>
                    {/each}
                </div>
            </article>
        </div>
    </div>
</section>

<style lang="scss">
    h1 {
        position: relative;
        width: fit-content;
        width: 100%;
        text-align: center;
        margin-top: -1.5rem;
        margin-bottom: 2rem;
        padding: 0.5rem 1.5rem;
        text-align: center;

        font-weight: 500;
        color: var(--color-theme-2);
        padding-top: 6px;
        padding-bottom: 6px;
        border-top: 2px solid var(--color-theme-2);
        border-bottom: 2px solid var(--color-theme-2);
    }
    
    section {
        min-height: 90vh;
        display: flex;
        align-items: center;
        margin: 0 -1rem;
        padding: 3rem 2rem;
        background-image: url(/images/textures/tx-1.webp);
        background-size: cover;
        
        position: relative;
        z-index: 2;
    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 68rem;
        width: 100%;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        
        aside {
            display: flex;
            justify-content: center;
            gap: 0.5rem;

            height: fit-content;
            padding: 6px;
            border-radius: 10rem;
            border: 2px solid #E2007A;

            .imageContainer {
                width: 45px;
                aspect-ratio: 1 / 1;
                border-radius: 50%;
                overflow: hidden;
                padding: 5px;

                &.active {
                    background-color: #E2007A;

                    img {
                        filter: brightness(10);
                    }
                }

                &:hover:not(.active) img {
                    transform: scale(1.1);
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }

        article {
            .villageInfo {
                h2 {
                    font-size: var(--font-size-header);
                    font-weight: 600;
                    color: var(--color-theme-2);
                    margin-bottom: 0.5rem;
                    margin-top: 1rem;
                }

                p {
                    color: var(--color-theme-2);
                    margin-top: 0.5rem;
                }
            }

            .eventGrid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                border-top: 2px solid var(--color-theme-2);
                border-left: 2px solid var(--color-theme-2);
                
                article {
                    padding: 6px 12px;
                    border-bottom: 2px solid var(--color-theme-2);
                    border-right: 2px solid var(--color-theme-2);
                    padding-bottom: 4rem;

                    h3 {
                        font-size: var(--font-size-body);
                        font-weight: 400;
                        color: var(--color-theme-2);
                        margin-top: 0.5rem;
                    }

                    img {
                        width: 100%;
                        aspect-ratio: 16 / 9;
                        object-fit: cover;
                        margin-top: 0.5rem;
                    }

                    p {
                        margin-top: 0.5rem;
                        font-size: 14px;

                        white-space: pre-wrap;
                    }
                }
            }
        }
    }

    @media (min-width: 420px) {
        .grid aside .imageContainer {
            width: 60px;
        }
    }
    
    @media (min-width: 680px) {
        .grid {
            grid-template-columns: calc(74px + 12px) 1fr;
            gap: 2rem;

            article .villageInfo h2 {
                margin-top: 0;
            }

            aside {
                flex-direction: column;
                gap: 2rem;

                .imageContainer {
                    width: 70px;
                    height: 70px;
                }
            }
        }
    }
</style>
