import { beforeAll, afterEach, afterAll } from 'vitest'
import { worker } from '@shared/api-mocks/browser'

beforeAll(async () => {
  await worker.start({
    quiet: true,
    onUnhandledRequest(request, print) {
      // Ignore any requests containing "cdn.com" in their URL.
      const url = new URL(request.url)
      if (!url.pathname.startsWith('/api')) {
        return
      }

      // Otherwise, print an unhandled request warning.
      print.warning()
    },
  })
})
afterEach(() => worker.resetHandlers())
afterAll(() => worker.stop())

import { config } from 'vitest-browser-vue'
import ui from '@nuxt/ui/vue-plugin'
import { VueQueryPlugin } from '@tanstack/vue-query'
import '@app/assets/css/main.css'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

config.global.plugins = [
  ui,
  VueQueryPlugin,
  router,
]
