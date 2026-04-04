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
      beforeEnter: async () => {
        pimQueryClient.prefetchQuery(productDetailsOptions({ internalId: 'fc22db77-f649-478a-83a6-caa21e53d646' }))
        const foo = await pimQueryClient.fetchQuery(productDetailsOptions({ internalId: 'fc22db77-f649-478a-83a6-caa21e53d646' }))
        console.log(foo);
      }
    },
    { name: PAGE_NAME.WIP, path: '/:pathMatch(.*)*', component: () => import('@pages/stub-page/Index.vue') }
  ],
  history: createWebHistory()
})
