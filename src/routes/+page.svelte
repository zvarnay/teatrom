<script lang="ts">
    import { onMount } from "svelte";

    // Define the shape of the expected data
    type Event = {
        fields: {
            title: string;
            description: string;
        };
    };

    type ScheduleEntry = {
        fields: {
            time: string;
            event: Event;
        };
    };

    type Village = {
        schedule: ScheduleEntry[];
    };

    export let villages: Village[] = [];

    // Fetch data on mount
    onMount(() => {
        fetchData();
    });

    async function fetchData() {
        try {
            const response = await fetch("/api/villages");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();

            // Make sure to reassign a new array to trigger reactivity
            villages = [...data];
        } catch (error) {
            console.error("Error fetching villages:", error);
        }
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
