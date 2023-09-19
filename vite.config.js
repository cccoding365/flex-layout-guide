import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": join(__dirname, 'src'),
    },
    extensions: ['.js', '.css', 'less', '.vue']
  },
  plugins: [vue()],
})
