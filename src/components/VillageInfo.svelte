<script lang="ts">
    export let village = null;
</script>

{#if village}
    <div class="villageInfo">
        <div class="horizontalSplit">
            <img src={village.silhouetteImage.fields.file.url} alt={village.name} />
            <div>
                <h2>{village.name}</h2>
                <p class="date">{(new Date(village.date)).toLocaleDateString('hu-HU')}</p>
                <!-- <p class="location">{village.location}</p> -->
            </div>
        </div>

        <h3>Program</h3>
        <ul class="events">
            {#each Object.entries(village.schedule.map(scheduleItem => scheduleItem.fields)) as [index, { event, time }]}
                <li>
                    <div class="date">{time}</div>
                    <div>
                        {#if event.fields.eventType === 'theatre'}
                            <img
                                src={event.fields.image.fields.file.url}
                                alt={event.fields.title}
                            />
                        {/if}
                        {event.fields.title}
                    </div>
                </li>
            {/each}
        </ul>
    </div>
{/if}

<style lang="scss">
    .villageInfo {
        max-width: 500px;
		display: flex;
		flex-direction: column;
		padding: 1rem 2rem;
		background: url('/images/tx-2.webp');
		border-radius: 4px;
		background: var(--color-theme-1);

        .horizontalSplit {
            display: flex;
            gap: 1rem;

            img {
                width: 5rem;
                height: 4rem;
                object-fit: contain;
            }

            h2 {
                font-size: 2rem;
		        font-weight: 900;
            }
        }

        h3 {
            margin-top: 2rem;
            padding-bottom: 5px;
            border-bottom: 1px solid #000;
        }
	}

	@keyframes scaleUp {
		from {
			transform: scale(0.8);
		}
		to {
			transform: scale(1);
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
		font-size: 1.2rem;
		font-weight: 300;
	}

	.events li img {
		width: 100%;
		height: auto;
	}
</style>