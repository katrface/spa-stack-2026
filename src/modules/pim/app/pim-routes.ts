import type { RouteRecordRaw } from 'vue-router'
import { productDetailsOptions } from '@pim/pages/product-list'
import { PIM_PAGE_NAME } from '@pim/shared/configs/pages'
import { pimQueryClient } from '@pim/shared/vue-query'

export const PIM_ROUTES: RouteRecordRaw[] = [
  {
    name: PIM_PAGE_NAME.HOME,
    path: '/pim',
    redirect: { name: PIM_PAGE_NAME.PRODUCTS.INDEX },
    component: async () => import('@pim/app/PimApp.vue'),
    children: [
      {
        name: PIM_PAGE_NAME.PRODUCTS.INDEX,
        path: 'products',
        component: async () => import('@pim/pages/product-list/Index.vue'),
        beforeEnter: async () => {
          void pimQueryClient.prefetchQuery(
            productDetailsOptions({ internalId: 'fc22db77-f649-478a-83a6-caa21e53d646' }),
          )
        },
      },
    ],
  },
]
