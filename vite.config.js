import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path";

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        three_app: resolve(root, 'three_app', 'index.html'),
        web_app: resolve(root, 'web_app', 'index.html'),
      }
    }
  }
})
