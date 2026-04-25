import type { QueryClient, QueryKey } from '@tanstack/vue-query'

import type { QueryPolicyName } from './policies'
import { queryPolicies } from './policies'

export function applyQueryPolicy(queryClient: QueryClient, mapping: Map<QueryKey, QueryPolicyName>) {
  mapping.forEach((policyName, key) => {
    if (!(policyName in queryPolicies)) {
      console.warn(
        `[applyQueryPolicy] Unknown policy "${policyName}" for key: ${JSON.stringify(key)}`,
      )

      return
    }

    const policy = queryPolicies[policyName]

    queryClient.setQueryDefaults(key, policy)
  })
}
