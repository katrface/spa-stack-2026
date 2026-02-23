import '@app/assets/css/main.css'

import { createApp } from 'vue'
import ui from '@nuxt/ui/vue-plugin'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import { router } from './router'

const app = createApp(App)

app.use(router)

app.use(ui)

app.use(VueQueryPlugin)

app.mount('#app')
