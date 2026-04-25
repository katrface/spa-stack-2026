import type { InfiniteData } from '@tanstack/vue-query'
import { listFilter } from '@shared/vue-query'
import { useQueryClient } from '@tanstack/vue-query'
import { productQueryKeys } from './product.keys'

interface Product { productId: string }

interface ProductListResponse {
  list: Product[]
  nextCursor: string | null
}

export function useProductListFilter() {
  const queryClient = useQueryClient()

  const filterProductList = (predicate: (product: Product) => boolean) => {
    queryClient.setQueriesData<InfiniteData<ProductListResponse>>(
      { queryKey: productQueryKeys.allProductInfinityLists() },
      oldData => listFilter(oldData, predicate),
    )
  }

  return {
    filterProductList,
  }
}
