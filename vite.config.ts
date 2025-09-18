import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import dotenv from 'dotenv';

dotenv.config()

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import 'src/styles/variables.scss';`,
				prependData: `@import 'src/styles/global.scss';`
			}
		}
	}
});
