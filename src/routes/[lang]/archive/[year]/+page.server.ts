import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if ( ['2020', '2021', '2022', '2023', '2024', '2025'].find(v => v === params.year) ) {
        return {
            year: Number(params.year),
        };
    }
	error(404, 'Not found');
}