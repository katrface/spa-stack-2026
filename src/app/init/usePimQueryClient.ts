import type { QueryKey } from '@tanstack/vue-query';

import { VUE_QUERY_CLIENT } from '@tanstack/vue-query';
import { provide } from 'vue';


import { applyQueryPolicy, createQueryClient } from '@shared/vue-query';
import type { QueryPolicyName } from '@shared/vue-query';

import { pimBaseQueryKeys } from '@pages/product-list/api/product.queries';

export const usePimQueryClient = () => {
  const queryClient = createQueryClient();

  provide(VUE_QUERY_CLIENT, queryClient);

  // window.__TANSTACK_QUERY_CLIENT__ = queryClient;

  applyQueryPolicy(
    queryClient,
    new Map<QueryKey, QueryPolicyName>([
      [pimBaseQueryKeys, 'dynamic'],
    ]),
  );
};
