import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  build: {
    target: 'node18',
    outDir: 'dist',
    lib: {
      entry: 'index.js',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: [
        'express',
        'stremio-addon-sdk',
        'axios',
        'node-cache',
        'socks-proxy-agent',
        'http-proxy-agent'
      ]
    }
  },
  optimizeDeps: {
    exclude: [
      'express',
      'stremio-addon-sdk',
      'axios',
      'node-cache',
      'socks-proxy-agent',
      'http-proxy-agent'
    ]
  }
}); 