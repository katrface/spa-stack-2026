import type {
  ProductDetailsPayload,
  ProductListInfinitePayload,
} from './product.keys'
import { isValid } from '@shared/arktype-utils'
import { infiniteQueryOptions, queryOptions } from '@tanstack/vue-query'
import { toValue } from 'vue'
import { getProductDetails } from './product.endpoints'
import {
  productQueryKeys,
} from './product.keys'
import { VProductDetailsPayload } from './product.validators'

// объеденины под queryOptions/infiniteQueryOptions, чтобы переиспользовать в useQuery/prefetchQuery и кастомизации options для конкретного случая
export function productListInfiniteOptions() {
  return ({ filter }: ProductListInfinitePayload) =>
    infiniteQueryOptions({
      queryKey: productQueryKeys.productListInfinite({ filter }),
      queryFn: async ({ pageParam }): Promise<{ nextCursor?: string }> => {
        console.log(pageParam)
        return {}
      },
      initialPageParam: undefined as string | undefined,
      getNextPageParam: lastPage => lastPage.nextCursor ?? undefined,
    })
}

// для tree shaking  каждая query в отдельной переменной
export function productDetailsOptions(payload: ProductDetailsPayload) {
  return queryOptions({
    queryKey: productQueryKeys.productDetails(payload),
    queryFn: async () => {
      const validatedPayload = VProductDetailsPayload.assert(toValue(payload))
      return getProductDetails(validatedPayload)
    },
    enabled: () => isValid(VProductDetailsPayload, toValue(payload)),
  })
}
