import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import obfuscator from 'rollup-plugin-obfuscator';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    obfuscator({
      options: {
        compact: true,
        controlFlowFlattening: true,
        deadCodeInjection: true,
        minify: true,
        stringArray: true,
        stringArrayThreshold: 0.75
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_variables.scss";`
      }
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssMinify: true
  }
});