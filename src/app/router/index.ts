import { PIM_PAGE_NAME, PIM_ROUTES } from '@pim'
import { PAGE_NAME } from '@shared/config/pages'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    { name: PAGE_NAME.HOME, path: '/', redirect: { name: PIM_PAGE_NAME.HOME } },
    ...PIM_ROUTES,
    {
      name: PAGE_NAME.WIP,
      path: '/:pathMatch(.*)*',
      component: async () => import('@pages/stub-page/Index.vue'),
    },
  ],
  history: createWebHistory(),
})
