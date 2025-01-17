import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This makes the app accessible from the network
    port: 5173,      // Optional: Set the port (use any available port if needed)
  },
});
