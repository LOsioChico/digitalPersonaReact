import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["src/modules/WebSdk/index.js"],
  },
  resolve: {
    alias: {
      WebSdk: path.resolve(dirname(""), "./src/modules/WebSdk/index.js"),
    },
  },
});
