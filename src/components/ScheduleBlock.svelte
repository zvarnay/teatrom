<script lang="ts">
    export let villages;
    export let selectedVillage: any;
</script>

<section id="detailedSchedules">
    <div class="contentWrapper">
        <div class="grid">
            <aside class="menu">
                {#each villages as village}
                <div class="imageContainer" class:active={village.name == selectedVillage.name} on:click={() => selectedVillage = village}>
                    <img src="/images/{village.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}.png" alt="">
                </div>
                {/each}
            </aside>
            <article>
                <div class="villageInfo">
                    <h2>{selectedVillage.name}</h2>
                    <p>{selectedVillage.date}</p>
                </div>
                <div class="eventGrid">
                    {#each selectedVillage.schedule as schedule}
                    <article>
                        <div class="time">{schedule.fields.time}</div>
                        <h3>{schedule.fields.event.fields.title}</h3>
                        {#if schedule.fields.event.fields.image}
                            <img src={schedule.fields.event.fields.image.fields.file.url} alt="">
                        {/if}
                        {#if schedule.fields.event.fields.description}
                            <p>{schedule.fields.event.fields.description}</p>
                        {/if}
                    </article>
                    {/each}
                </div>
            </article>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        min-height: 90vh;
        display: flex;
        align-items: center;
        margin: 0 -1rem;
        padding: 3rem 1rem;
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
        grid-template-columns: calc(70px + 1rem) 1fr;
        gap: 2rem;

        
        aside {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            height: fit-content;
            background-color: var(--color-theme-1);
            padding: 0.5rem;
            border-radius: 10rem;

            .imageContainer {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                overflow: hidden;
                padding: 6px;
                background-color: var(--color-theme-1);

                &.active {
                    background-color: #f0f;
                    border: 2px solid #f0f;

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
                    font-size: 2rem;
                    font-weight: 600;
                    color: var(--color-theme-2);
                    margin-top: 0.5rem;
                }

                p {
                    color: var(--color-theme-2);
                    margin-top: 0.5rem;
                }
            }

            .eventGrid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                border-bottom: 2px solid var(--color-theme-2);
                border-right: 2px solid var(--color-theme-2);

                article {
                    padding: 6px 12px;
                    border-top: 2px solid var(--color-theme-2);
                    border-left: 2px solid var(--color-theme-2);
                    min-height: 60vh;

                    h3 {
                        font-size: 1.25rem;
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
</style>
