import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        hmr: { host: 'localhost', protocol: 'ws', clientPort: 5173 },
        watch: { usePolling: true, interval: 300 }, // 重要: ポーリング監視
    },
});
