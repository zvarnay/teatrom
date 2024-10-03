
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './[lang]/archive/[year]/$types';
import { goto } from '$app/navigation';

export const load: PageServerLoad = async ({ cookies }) => {
    // Check if a language is stored in the cookies (from previous sessions)
    const langCode = cookies.get('language') || 'hu'; // Default to 'en'

    // Redirect to the language-specific home page
    goto(`/${langCode}`);
};