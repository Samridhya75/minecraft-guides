import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname,'./src'),
    },
  },
  assetsInclude: ['**/*.md'],
  build: {
    outDir: 'dist',
    rollupOptions:{
      input: {
        main: resolve(__dirname,'index.html'),
      }
    }
  }
});
