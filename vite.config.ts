import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    base: env.VITE_BASE_PATH,
    plugins: [
      react({
        babel: {
          plugins: ["styled-components"],
        },
      }),
      tailwindcss(),
    ],
  };
});
