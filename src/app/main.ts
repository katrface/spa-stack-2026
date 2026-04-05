import '@app/assets/css/main.css'

import { createApp } from 'vue'
import ui from '@nuxt/ui/vue-plugin'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import { router } from './router'
import enableMocking from '@shared/api-mocks'

await enableMocking()

const app = createApp(App)

app.use(router)

app.use(ui)

app.use(VueQueryPlugin)

// Глобальные обработчики ошибок
app.config.errorHandler = (err, instance, info) => {
  console.error('Vue error:', err, 'in', instance, 'at', info)
  // Здесь можно интегрировать с сервисом мониторинга (Sentry, etc.)
}

app.mount('#app')
