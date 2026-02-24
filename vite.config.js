import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          // Firebase chunk
          if (id.includes("firebase")) {
            return "firebase";
          }

          // Animation
          if (id.includes("framer-motion")) {
            return "motion";
          }

          // Charts
          if (id.includes("recharts")) {
            return "charts";
          }

          // Export tools
          if (id.includes("html2canvas") || id.includes("jspdf")) {
            return "exportTools";
          }

          // React core
          if (
            id.includes("react") ||
            id.includes("react-dom") ||
            id.includes("react-router-dom")
          ) {
            return "react";
          }

          // باقي المكتبات
          return "vendor";
        },
      },
    },
  },
});