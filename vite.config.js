import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0', // Expose server to the network
    port: 5173,      // Optional: Ensure the port is consistent
    strictPort: true, // Prevents the server from trying a different port
  },
});
