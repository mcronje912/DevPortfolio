import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/DevPortfolio/', // Ensures correct path to assets
  build: {
    outDir: 'dist', // Make sure output is going to dist
    assetsDir: 'assets', // Keep assets in a separate directory
    sourcemap: false, // Disable sourcemaps for production
  },
});