<script lang="ts">
    export let village = null;
</script>

{#if village}
    <a class="wrapper" href="/schedule"><div class="villageInfo">
        <div class="horizontalSplit">
            <img src="/images/{village.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}.svg" alt={village.name} />
            <div>
                <h2>{village.name}</h2>
                <p class="date">{(new Date(village.date)).toLocaleDateString('hu-HU')}</p>
                <!-- <p class="location">{village.location}</p> -->
            </div>
        </div>

        <h3>Program</h3>
        <ul class="events">
            {#each Object.entries(village.schedule.items) as [index, { time, event }]}
                <li>
                    <div class="date">{time}</div>
                    <div>
                        {#if event.eventType === 'theatre'}
                            <img
                                src={event.image.url}
                                alt={event.title}
                            />
                        {/if}
                        {event.title}
                    </div>
                </li>
            {/each}
        </ul>
    </div></a>
{/if}

<style lang="scss">
    a.wrapper {
        text-decoration: none;
        color: inherit;

        &:hover .villageInfo {
            outline: 2px solid var(--color-theme-2);
        }
    }

    .villageInfo {
        max-width: 500px;
		display: flex;
		flex-direction: column;
		padding: 1rem 2rem;
		border-radius: 4px;
		background: var(--color-theme-1);

        .horizontalSplit {
            display: flex;
            gap: 1rem;

            img {
                width: 3rem;
                height: 3rem;
                object-fit: contain;
                transform: scale(1.3);
            }

            h2 {
		        font-weight: 600;
            }
        }

        h3 {
            font-size: 1rem;
            font-weight: 400;
            margin-top: 1rem;
            padding-bottom: 5px;
            border-bottom: 1px solid #000;
        }
	}
	.events {
		list-style: none;
		margin: 16px 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.events li {
		display: flex;
		gap: 1rem;
		line-height: 1.3;
		max-width: 300px;
	}

	.events li div.date {
		min-width: 3.3rem;
		font-size: var(--font-size-body);
		font-weight: 300;
	}

	.events li img {
		width: 100%;
		height: auto;
	}

    @media (min-width: 1200px) {
        .villageInfo {

        }
    }
</style>