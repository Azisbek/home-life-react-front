import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.resolve(__dirname, "./src");

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: false,
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    host: true,
    port: 3000,
    open: false,
    proxy: {
      "/api": {
        target: "https://homelifee.onrender.com/api/",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ""),
      },
    },
    resolve: {
      alias: {
        app: path.resolve(__dirname, "src/app"),
        assets: path.resolve(srcPath, "src/assets"),
        components: path.resolve(srcPath, "src/components"),
        constants: path.resolve(srcPath, "src/constants"),
        lib: path.resolve(srcPath, "src/lib"),
        page: path.resolve(srcPath, "src/page"),
        styles: path.resolve(srcPath, "src/styles"),
        widgets: path.resolve(srcPath, "src/widgets"),
      },
    },
  },
});
