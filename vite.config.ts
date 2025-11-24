import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import legacy from "@vitejs/plugin-legacy";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from 'rollup-plugin-visualizer';


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
    visualizer({ filename: 'bundle-stats.html', })
  ],
  build: {
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor_react': ['react', 'react-dom', 'react-router-dom', 'axios'],
          'vendor_style': ['tailwind-merge', 'class-variance-authority', 'clsx'],
          'vendor_highlighter': ['react-syntax-highlighter']
        }
      }
    }
  }
});
