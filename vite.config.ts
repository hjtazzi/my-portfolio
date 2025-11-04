import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import legacy from "@vitejs/plugin-legacy";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    legacy({
      targets: ["last 2 versions", "not dead", "> 0.2%"],
      polyfills: true,
      modernPolyfills: true,
      renderLegacyChunks: true,
      renderModernChunks: true,
    }),
    tailwindcss(),
  ],
  build: {}
});
