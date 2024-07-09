import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
// import prefixer from 'postcss-prefix-selector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),

    vue({
      template: { transformAssetUrls },
    }),

    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
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
