import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

export default defineConfig({
  appType: "custom",
  plugins: [vanillaExtractPlugin(), react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "folds",
      fileName: "index",
      formats: ["es"],
    },
    minify: false,
    outDir: "dist",
    sourcemap: true,
    copyPublicDir: false,
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies), "react/jsx-runtime"],
    },
  },
});
