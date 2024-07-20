import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dotenv from 'dotenv'

// .env ファイルの読み込み
dotenv.config()

export default defineConfig({
  root: 'front',
  base: '/portfolio-v2/',
  envDir: '../',
  publicDir: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,

    rollupOptions: {
      output: {
        entryFileNames: 'public/js/[name].js',
        chunkFileNames: 'public/js/[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    target: 'esnext',
    minify: 'esbuild',
    // lib: {
    //   entry: path.resolve(new URL('.', import.meta.url).pathname, 'src/main.tsx'),
    //   formats: ['es'],
    // },
    sourcemap: true,
  },
  plugins: [
    react(),
    tsconfigPaths({
      root: '../',
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(new URL('.', import.meta.url).pathname, 'src'),
  //   },
  // },
});
