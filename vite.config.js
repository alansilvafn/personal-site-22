import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { splitVendorChunkPlugin } from 'vite'
import analyze from 'rollup-plugin-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    // splitVendorChunkPlugin()
  ],
  build: {
    rollupOptions: {
      plugins: [analyze({
        summaryOnly: true
      })],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          deps: ['bootstrap', 'react-bootstrap'],
        },
      },
    },
  },
})