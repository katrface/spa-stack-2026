import type { RouteRecordRaw } from 'vue-router'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { render } from 'vitest-browser-vue'
import { createRouter, createWebHistory } from 'vue-router'

export async function renderApp<T>(
  component: T,
  options: Parameters<typeof render<T>>[1] & { routes?: RouteRecordRaw[] } = {},
) {
  const { routes = [], global = {}, ...restOptions } = options

  const pinia = createPinia()

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: 0 },
    },
  })

  const router = createRouter({
    history: createWebHistory(),
    routes: routes.length ? routes : [{ path: '/', component: { render: () => null } }],
  })

  const result = await render(component, {
    ...restOptions,
    global: {
      ...global,
      plugins: [[VueQueryPlugin, { queryClient }], pinia, router, ...(global.plugins || [])],
    },
  })

  return {
    ...result,
    pinia,
    router,
    queryClient,
  }
}
