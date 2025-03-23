import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  animation: {
    marquee: "marquee 15s linear infinite",
  },
  keyframes: {
    marquee: {
      from: { transform: "translateX(100%)" },
      to: { transform: "translateX(-100%)" },
    },
  },
  plugins: [react(),tailwindcss()],
})
