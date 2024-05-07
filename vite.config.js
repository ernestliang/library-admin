import { defineConfig } from 'vite'
// import {VitePWA} from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "bootstrap": path.resolve(__dirname, "node_modules/bootstrap")
        }
    }
})
