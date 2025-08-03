import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      // Add custom rollup options here if needed
    }
  },
  server: {
    open: true,
    // For React Router SPA fallback
    historyApiFallback: true,
  },
});