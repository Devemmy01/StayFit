import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_RAPID_API_KEY: process.env.VITE_RAPID_API_KEY,
    },
  },
})
