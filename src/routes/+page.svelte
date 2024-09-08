<script lang="ts">    
    import { onMount } from 'svelte';

    let villages = [];

    onMount(() => {
        fetchData();
    });

    async function fetchData() {
        const response = await fetch('/api/villages');
        const data = await response.json();
        villages = data;
    }
    
</script>

<ul class="events">
    {#if villages.length !== 0}
        {#each villages[0].schedule as scheduleEntry}
            <li>
                <div class="date">{scheduleEntry.fields.time}</div>
                <div class="event-details">
                <h4>{scheduleEntry.fields.event.fields.title}</h4>
                <p>{scheduleEntry.fields.event.fields.description}</p>
                </div>
            </li>
        {/each}
    {/if}
  </ul>