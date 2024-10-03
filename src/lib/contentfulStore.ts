import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const language = writable('en');

// Sync store with localStorage when the language changes
language.subscribe((value) => {
  if (browser) {
    localStorage.setItem('language', value);
  }
});