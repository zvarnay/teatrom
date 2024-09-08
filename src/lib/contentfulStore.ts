import { writable } from 'svelte/store';
import type { Entry } from 'contentful';

export const villagesStore = writable<Entry<any>[]>([]);