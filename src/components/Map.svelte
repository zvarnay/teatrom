<script lang="ts">
    import { createD3Map, handleMouseMove, highlightSelectedVillage } from "$lib/helpers/d3Helpers";
    import { createEventDispatcher, onMount } from "svelte";

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
            href="/images/roads-settlements-cyan-2.webp"
            width="100%"
            style="object-fit:cover"
        />
    </svg>
</section>

<style lang="scss">
    .mapContainer {
		height: calc(100vh - 4rem - 2rem);
		aspect-ratio: 4 / 3;
        transform: scale(1.1);
        margin-left: -8rem;

        svg image {
            z-index: -1;
        }
	}
</style>