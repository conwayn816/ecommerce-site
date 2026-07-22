import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    // Allow JSX in .js files (needed for CRA migration — source files use .js not .jsx)
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
            },
            '/uploads': {
                target: 'http://localhost:5000',
                changeOrigin: true,
            },
        },
    },
});
