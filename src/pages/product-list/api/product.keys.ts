import { MaybeRefOrGetter } from "vue";
import { TProductDetailsPayload } from "./product.validators";
import { Nullable } from '@shared/type-utils/index';

export type ProductListInfinitePayload = {
  filter: MaybeRefOrGetter<string>;
}

export const pimBaseQueryKeys = ['fbs'] as const;

export type ProductDetailsPayload = MaybeRefOrGetter<Nullable<TProductDetailsPayload>>

// для центролизованного управления ключами
export const productQueryKeys = {
  all: () => [...pimBaseQueryKeys, 'products'] as const,
  allProductInfinityLists: () => [...productQueryKeys.all(), 'list', 'infinite'] as const,
  allDetails: () => [...productQueryKeys.all(), 'details'] as const,

  productListInfinite: (payload: ProductListInfinitePayload) => [...productQueryKeys.allProductInfinityLists(), payload] as const,
  productDetails: (payload: ProductDetailsPayload) => [...productQueryKeys.allDetails(), payload] as const,
}
