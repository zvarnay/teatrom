<script lang="ts">
    import { createD3Map, handleMouseMove, highlightSelectedVillage } from "$lib/helpers/d3Helpers";
    import { createEventDispatcher, onMount } from "svelte";

    import mapFgImage from "$lib/images/roads-settlements-cyan.webp";

    export let villages = [];

    let svg: SVGElement;

    const dispatch = createEventDispatcher();

    onMount(() => {
        createD3Map(svg, villages);
        highlightSelectedVillage(villages[0]);
    });

    function onMouseMove(event) {
        const closestVillage = handleMouseMove(event, villages);
        if (closestVillage) {
            highlightSelectedVillage(closestVillage);
            dispatch('villageHover', {village: closestVillage});
        }
    }
</script>


<section class="mapContainer" on:mousemove={onMouseMove} role="img">
    <svg
        bind:this={svg}
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
    >
        <image
            href="{mapFgImage}"
            width="100%"
            style="object-fit:cover"
        />
    </svg>
</section>

<style lang="scss">
    .mapContainer {
		max-height: calc(100vh - 5rem - 2rem);
		aspect-ratio: 1 / 1;
        transform: scale(1.2);

        svg image {
            z-index: -1;
        }
	}
</style>