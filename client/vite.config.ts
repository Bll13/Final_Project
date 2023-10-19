import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
const SERVER_URL = 'http://localhost:3000';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '^/api/.*': {
        target: SERVER_URL,
        changeOrigin: true,
        secure: false,
      },
      '/img/': {
        target: SERVER_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
