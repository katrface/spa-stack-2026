import type { Nullable } from '@shared/type-utils/index'
import type { MaybeRefOrGetter } from 'vue'
import type { TProductDetailsPayload } from './product.validators'
import { pimBaseQueryKeys } from '@pim/shared/vue-query'

export interface ProductListInfinitePayload {
  filter: MaybeRefOrGetter<string>
}

export type ProductDetailsPayload = MaybeRefOrGetter<Nullable<TProductDetailsPayload>>

// для центролизованного управления ключами
export const productQueryKeys = {
  all: () => [...pimBaseQueryKeys, 'products'] as const,
  allProductInfinityLists: () => [...productQueryKeys.all(), 'list', 'infinite'] as const,
  allDetails: () => [...productQueryKeys.all(), 'details'] as const,

  productListInfinite: (payload: ProductListInfinitePayload) =>
    [...productQueryKeys.allProductInfinityLists(), payload] as const,
  productDetails: (payload: ProductDetailsPayload) =>
    [...productQueryKeys.allDetails(), payload] as const,
}
