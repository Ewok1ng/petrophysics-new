import path from 'node:path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), 'src/shared/assets/icons')],
			symbolId: 'icon-[dir]-[name]'
		}),
		react()
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				additionalData:
					'@use "@app/styles/variables.scss" as *;@use "@app/styles/common.scss" as *;'
			}
		}
	},
	resolve: {
		alias: {
			'@app': path.resolve(__dirname, './src/app'),
			'@entities': path.resolve(__dirname, './src/entities'),
			'@features': path.resolve(__dirname, './src/features'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@widgets': path.resolve(__dirname, './src/widgets'),
			'@': path.resolve(__dirname, './src')
		}
	}
});
