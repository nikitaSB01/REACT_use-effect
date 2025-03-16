import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/REACT_use-effect/", // 🔥 путь на GitHub Pages
  plugins: [react()],
});
