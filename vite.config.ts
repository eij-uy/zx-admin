import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig(() => {
  const ROOT = process.cwd()
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": resolve(ROOT, './src')
      }
    }
  }
})
