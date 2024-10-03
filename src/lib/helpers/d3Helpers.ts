import { goto } from '$app/navigation';
import { language } from '$lib/contentfulStore';
import * as d3 from 'd3';
import { get } from 'svelte/store';

export function createD3Map(svg, villages) {
    const circle = d3.select(svg).selectAll('circle');

    villages.forEach((village) => {
        circle
            .data([village.mapPosition])
            .enter()
            .append('circle')
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y)
            .attr('r', village.mapRadius * 1.2 || 10)
            .attr('fill', '#E2007A')
            .style('mix-blend-mode', 'saturation');

        circle
            .data([village.mapPosition])
            .enter()
            .append('circle')
            .attr('class', 'radius')
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y)
            .attr('r', village.mapRadius * 1.2 || 10)
            .attr('stroke', '#0ff')
            .attr('stroke-width', 0)
            .attr('fill', 'none');

        circle
            .data([village.mapPosition])
            .enter()
            .append('text')
            .attr('x', (d) => d.x)
            .attr('y', (d) => d.y)
            .attr('font-size', 14)
            .attr('font-weight', 600)
            .attr('fill', '#E2007A')
            .attr('text-anchor', 'start')
            .attr('alignment-baseline', 'central')
            .attr('stroke', '#ffa')
            .attr('stroke-width', 2)
            .attr('paint-order', 'stroke')
            .attr('dx', village.mapRadius * 1.6)
            .text((new Date(village.date)).toLocaleDateString('hu-HU', { month: 'short', day: '2-digit'}).toUpperCase());
    });

    d3.select(svg).selectAll('circle').on('click', async (event, d) => {
        await goto(`/${get(language)}/schedule`);
        const detailedSchedule = document.getElementById("detailedSchedule");
        if (detailedSchedule) {
            detailedSchedule.scrollIntoView({ behavior: "smooth" });
        }
    });
}

export function handleMouseMove(event, villages) {
    const svg = d3.select('svg');
    const svgBoundingRect = svg.node().getBoundingClientRect();
    const [mouseX, mouseY] = d3.pointer(event);
    const mouse = { x: mouseX, y: mouseY };

    const closestVillages = villages.map((village) => {
        const x = village.mapPosition.x;
        const y = village.mapPosition.y;
        const adjustedX = (x / 600) * svgBoundingRect.width;
        const adjustedY = (y / 600) * svgBoundingRect.height;

        const dx = mouse.x - adjustedX;
        const dy = mouse.y - adjustedY;

        return { village, distance: Math.sqrt(dx ** 2 + dy ** 2) };
    });

    closestVillages.sort((a, b) => a.distance - b.distance);

    if (closestVillages[0].distance > 150) return null;
    
    return closestVillages[0].village;
}

export function highlightSelectedVillage(village) {
    const circles = d3.select('svg').selectAll('circle.radius');

    circles.attr('stroke-width', 0);
    circles.filter(d => d.x === village.mapPosition.x && d.y === village.mapPosition.y).attr('stroke-width', 4);
}