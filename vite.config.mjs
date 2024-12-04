import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/nolan-portfolio-1/', // Comment this out if you want to test locally
});