/// <reference types="@peeky/test"/>

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],

  build: {
    lib: {
      entry: 'src/index.ts',
      formats: [
        'es',
      ],
      fileName: 'index',
    },

    rollupOptions: {
      external: [
        'vue',
      ],
    },
  },

  histoire: {
    setupFile: '/src/histoire-setup.ts',
    vite: (config) => {
      config.build.lib = false
      config.build.rollupOptions.external = []
    },
  },

  test: {
    runtimeEnv: 'dom',
    previewSetupFiles: [
      'src/peeky-preview.ts',
    ],
  },
})
