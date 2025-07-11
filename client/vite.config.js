import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ['@babel/plugin-transform-react-jsx']
    }
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});