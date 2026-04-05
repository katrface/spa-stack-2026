/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'
import { analyzer } from 'vite-bundle-analyzer'
import { playwright } from '@vitest/browser-playwright'
import path from 'node:path'

export default defineConfig({
  plugins: [
    vue(),
    ui({
      // отключаем autoimport компонентов проекта
      components: {
        dirs: []
      },
      autoImport: {
        dts: false,
      },
      ui: {
        colors: {
          primary: 'green',
          neutral: 'zinc'
        }
      }
    }),
    analyzer()
  ],
  resolve: {
    alias: {
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),

      '@shared': fileURLToPath(new URL('./src/modules/shared', import.meta.url)),
      '@pim': fileURLToPath(new URL('./src/modules/pim', import.meta.url)),
    }
  },
  build: {
    rolldownOptions: {
      output: {
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.facadeModuleId) {
            const relativePath = path.relative(
              path.resolve(import.meta.dirname, 'src'),
              path.dirname(chunkInfo.facadeModuleId)
            );

            const dir = relativePath === '.' ? '' : `${relativePath.replaceAll('\\', '/')}/`;
            return `chunk/${dir}[name].js`;
          }
          return 'chunk/[name].js';
        },
        entryFileNames: 'entry/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  test: {
    coverage: { provider: 'v8' },

    include: [
      '**/__tests__/**/*.unit.spec.ts',
      '**/__tests__/**/*.visual.spec.ts',
    ],
    browser: {
      provider: playwright(),
      enabled: true,
      headless: true,
      instances: [
        {
          browser: 'chromium',
          viewport: { width: 1280, height: 720 },
        },
      ],
    },

    setupFiles: ['./tests/setup.ts'],
  }
})
