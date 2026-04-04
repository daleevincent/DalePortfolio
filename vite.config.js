import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // change to '/' if not deploying to GitHub Pages subfolder
})