import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  base: '/dr-web-app/',
  build: {
    rollupOptions: {
      input: { index: './src/index.html' },
    },
    outDir: '../dist',
    emptyOutDir: true
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
