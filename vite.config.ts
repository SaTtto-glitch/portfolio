import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";

// .env ファイルの読み込み
dotenv.config();

export default defineConfig({
  root: "front",
  envDir: "../",
  publicDir: "public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "assets/js/[name].js",
        chunkFileNames: "assets/js/[name].js",
        assetFileNames: "assets/[ext]/[name].[ext]",
      },
    },
    target: "esnext",
    minify: "esbuild",
    sourcemap: true,
  },
  plugins: [
    react(),
    tsconfigPaths({
      root: "../",
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
});
