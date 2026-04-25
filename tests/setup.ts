import ui from '@nuxt/ui/vue-plugin'
import { worker } from '@shared/api-mocks/browser'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { config } from 'vitest-browser-vue'
import '@app/assets/css/main.css'

config.global.plugins = [ui]

beforeAll(async () => {
  await worker.start({
    quiet: true,
    onUnhandledRequest: 'error',
  })
})

afterEach(() => {
  worker.resetHandlers()
})

afterAll(() => {
  worker.stop()
})
