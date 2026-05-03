import ui from '@nuxt/ui/vue-plugin'
import enableMocking from '@shared/api-mocks'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'

import App from './App.vue'
import { router } from './router'
import '@app/assets/css/main.css'

async function bootstrap() {
  await enableMocking()

  const app = createApp(App)

  app.use(router)
  app.use(ui)
  app.use(VueQueryPlugin)

  app.config.errorHandler = (err, instance, info) => {
    console.error('Vue error:', err, 'in', instance, 'at', info)
  }

  app.mount('#app')
}

// Запускаем функцию и обрабатываем возможные ошибки старта
bootstrap().catch((err) => {
  console.error('Failed to start the app:', err)
})
