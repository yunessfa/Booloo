import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodePolyfills from "rollup-plugin-polyfill-node";
const production = false;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    !production &&
      nodePolyfills({
        include: ["node_modules/**/*.js", new RegExp("node_modules/.vite/.*js")]
      })
  ],
  build: {
    rollupOptions: {
      plugins: [
        // ↓ Needed for build
        nodePolyfills()
      ]
    },
    // ↓ Needed for build if using WalletConnect and other providers
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
