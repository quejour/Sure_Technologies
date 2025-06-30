import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Sure_Technologies/",   // ← repo name for GitHub Pages
  plugins: [react()],
});
