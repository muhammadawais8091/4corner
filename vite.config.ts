import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: '**/*.tsx'
    }),
    // checker({ typescript: true })
  ],
  base: '/portal/',
  define: {
    'process.env': process.env
  },
  server: {
    watch: {
      usePolling: true
    },
    port: 3001,
    strictPort: true,
    host: true
  }
});
