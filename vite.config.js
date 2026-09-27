import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages ではサブディレクトリ配下に置かれるので、相対パスで読み込ませる
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
