import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/happyskewer/",
  plugins: [react()],
});
