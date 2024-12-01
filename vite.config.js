import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      WebSdk: path.resolve(dirname(""), "./src/modules/WebSdk/index.js"),
    },
  },
  build: {
    rollupOptions: {
      external: ["/WebSdk.js"],
    },
  },
});
