import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Social-Media-Dashboard/",
  plugins: [react()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  }
});
