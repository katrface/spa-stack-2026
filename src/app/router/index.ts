import { pimQueryClient } from '@app/init/usePimQueryClient';
import { productDetailsOptions } from '@pages/product-list';
import { PAGE_NAME } from '@shared/config/pages';
import { createRouter, createWebHistory } from 'vue-router';


export const router = createRouter({
  routes: [
    { name: PAGE_NAME.HOME, path: '/', component: () => import('@pages/index.vue') },
    {
      name: PAGE_NAME.PRODUCTS.INDEX,
      path: '/products',
      component: () => import('@pages/product-list/Index.vue'),
      beforeEnter:() => {
        pimQueryClient.prefetchQuery(productDetailsOptions({ id: 'foo' }))
      }
    },
    { name: PAGE_NAME.WIP, path: '/:pathMatch(.*)*', component: () => import('@pages/stub-page/Index.vue') }
  ],
  history: createWebHistory()
})
