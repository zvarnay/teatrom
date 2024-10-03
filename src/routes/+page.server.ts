import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './[lang]/archive/[year]/$types';

export const load: PageServerLoad = async ({ request, cookies }) => {
    // Check the user's language preference in cookies or headers
    let langCode = cookies.get('language');

    if (!langCode) {
        // Fallback to browser's Accept-Language header
        const acceptLanguage = request.headers.get('accept-language') || '';
        langCode = acceptLanguage.startsWith('hu') ? 'hu' : 'en'; // Simple check
        // Optionally, set a cookie to remember the user's preference
        cookies.set('language', langCode, { path: '/' });
    }

    langCode = 'hu'; // Force Hungarian for now

    // Redirect to the preferred language
    throw redirect(308, `/${langCode}`);
};