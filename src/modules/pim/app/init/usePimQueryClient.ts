import type { QueryKey } from '@tanstack/vue-query';

import { VUE_QUERY_CLIENT } from '@tanstack/vue-query';
import { provide } from 'vue';


import { applyQueryPolicy, createQueryClient } from '@shared/vue-query';
import type { QueryPolicyName } from '@shared/vue-query';

import { pimBaseQueryKeys } from '@pim/pages/product-list/api';

export const pimQueryClient = createQueryClient();

export const usePimQueryClient = () => {
  provide(VUE_QUERY_CLIENT, pimQueryClient);

  // window.__TANSTACK_QUERY_CLIENT__ = queryClient;

  applyQueryPolicy(
    pimQueryClient,
    new Map<QueryKey, QueryPolicyName>([
      [pimBaseQueryKeys, 'dynamic'],
    ]),
  );
};
