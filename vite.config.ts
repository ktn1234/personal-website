import { ConfigEnv, defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const isProduction = mode === "production";
  return {
    plugins: [react(), VitePWA()],
    publicDir: "public",
    build: {
      sourcemap: !isProduction,
      outDir: "dist",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
