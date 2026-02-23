import {
  infiniteQueryOptions,
  queryOptions,
} from '@tanstack/vue-query';
import { MaybeRefOrGetter, toValue } from 'vue';


export const pimBaseQueryKeys = ['fbs'];

type ProductListInfinitePayload = {
  filter: MaybeRefOrGetter<string>;
}

type ProductDetailsPayload = {
  id: MaybeRefOrGetter<string | null>;
};

// для центролизованного управления ключами
export const productQueryKeys = {
  all: () => [...pimBaseQueryKeys, 'products'],
  allProductInfinityLists: () => [...productQueryKeys.all(), 'list', 'infinite'],
  allDetails: () => [...productQueryKeys.all(), 'details'],

  productListInfinite: (payload: ProductListInfinitePayload) => [...productQueryKeys.allProductInfinityLists(), payload],
  productDetails: (payload: ProductDetailsPayload) => [...productQueryKeys.allDetails(), payload],
}

// объеденины под queryOptions/infiniteQueryOptions, чтобы переиспользовать в useQuery/prefetchQuery и кастомизации options для конкретного случая
export const productListInfiniteOptions = () => ({ filter }: ProductListInfinitePayload) =>
  infiniteQueryOptions({
    queryKey: productQueryKeys.productListInfinite({ filter }),
    queryFn: async ({ pageParam }): Promise<{ nextCursor?: string }> => {
      console.log(pageParam)
      return {};
    },
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  })

// для tree shaking  каждая query в отдельной переменной
export const productDetailsOptions = ({ id }: ProductDetailsPayload) =>
  queryOptions({
      queryKey: productQueryKeys.productDetails({ id }),
      queryFn: async () => {},
      enabled: () => !!toValue(id)
    })
