import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/social-media-dashboard/",
  plugins: [react()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  }
});
