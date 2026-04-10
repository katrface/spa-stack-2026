import { InfiniteData, useQueryClient } from "@tanstack/vue-query";
import { productQueryKeys } from "./product.keys";
import { listFilter } from "@shared/vue-query";

type Product = { productId: string };

type ProductListResponse = {
  list: Product[];
  nextCursor: string | null;
};

export const useProductListFilter = () => {
  const queryClient = useQueryClient();

  const filterProductList = (predicate: (product: Product) => boolean) => {
    queryClient.setQueriesData<InfiniteData<ProductListResponse>>(
      { queryKey: productQueryKeys.allProductInfinityLists() },
      (oldData) => listFilter(oldData, predicate),
    );
  };

  return {
    filterProductList,
  };
};
