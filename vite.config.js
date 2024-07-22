import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
// import prefixer from 'postcss-prefix-selector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    vue()
  ],
  css: {
    postcss: {
      plugins: [
        tailwind(),
        autoprefixer(),
        // prefixer({ prefix: '.soundboardjs' })
      ],
    },
  },
});
