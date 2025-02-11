import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Asegúrate de que sea el puerto correcto en desarrollo
    host: true,
  },
  build: {
    outDir: "dist",
  },
});
