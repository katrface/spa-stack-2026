import type { QueryKey } from "@tanstack/vue-query";

import { applyQueryPolicy } from "@shared/vue-query";
import type { QueryPolicyName } from "@shared/vue-query";

import { pimBaseQueryKeys, pimQueryClient } from "@pim/shared/vue-query";

export const usePimQueryClient = () => {
  applyQueryPolicy(
    pimQueryClient,
    new Map<QueryKey, QueryPolicyName>([[pimBaseQueryKeys, "dynamic"]]),
  );

  return pimQueryClient;
};
