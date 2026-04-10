import { infiniteQueryOptions, queryOptions } from "@tanstack/vue-query";
import { toValue } from "vue";
import {
  ProductDetailsPayload,
  ProductListInfinitePayload,
  productQueryKeys,
} from "./product.keys";
import { getProductDetails } from "./product.endpoints";
import { VProductDetailsPayload } from "./product.validators";
import { isValid } from "@shared/arktype-utils";

// объеденины под queryOptions/infiniteQueryOptions, чтобы переиспользовать в useQuery/prefetchQuery и кастомизации options для конкретного случая
export const productListInfiniteOptions =
  () =>
  ({ filter }: ProductListInfinitePayload) =>
    infiniteQueryOptions({
      queryKey: productQueryKeys.productListInfinite({ filter }),
      queryFn: async ({ pageParam }): Promise<{ nextCursor?: string }> => {
        console.log(pageParam);
        return {};
      },
      initialPageParam: undefined as string | undefined,
      getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    });

// для tree shaking  каждая query в отдельной переменной
export const productDetailsOptions = (payload: ProductDetailsPayload) =>
  queryOptions({
    queryKey: productQueryKeys.productDetails(payload),
    queryFn: () => {
      const validatedPayload = VProductDetailsPayload.assert(toValue(payload));
      return getProductDetails(validatedPayload);
    },
    enabled: () => isValid(VProductDetailsPayload, toValue(payload)),
  });
