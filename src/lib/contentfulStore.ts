import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Check localStorage or default to 'en'
const initialLanguage = browser ? localStorage.getItem('language') || 'en' : 'en';

export const language = writable(initialLanguage);

// Sync store with localStorage when the language changes
language.subscribe((value) => {
  if (browser) {
    localStorage.setItem('language', value);
  }
});