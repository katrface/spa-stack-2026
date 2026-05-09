import type { InvalidateQueryFilters, QueryClient } from '@tanstack/vue-query'

import type { MaybeGetterOnSuccess } from './shared'
import { toValueOnSuccess } from './shared'

// TODO подумать над исключением пересечений queryKey в invalidates и awaitInvalidates
export interface InvalidateMeta<
  TData,
  TVariables,
  TInvalidates extends InvalidateQueryFilters[] = InvalidateQueryFilters[],
  TAwaitInvalidates extends InvalidateQueryFilters[] = InvalidateQueryFilters[],
> {
  invalidates?: MaybeGetterOnSuccess<TInvalidates, TData, TVariables>
  awaitInvalidates?: MaybeGetterOnSuccess<TAwaitInvalidates, TData, TVariables>
}

interface WeekInvalidatesMeta {
  invalidates?: MaybeGetterOnSuccess<InvalidateQueryFilters[]>
  awaitInvalidates?: never
}

interface WeekAwaitInvalidatesMeta {
  invalidates?: never
  awaitInvalidates?: MaybeGetterOnSuccess<InvalidateQueryFilters[]>
}

export type WeekInvalidateMeta = WeekInvalidatesMeta | WeekAwaitInvalidatesMeta

interface OnSuccessInvalidateParam {
  queryClient: QueryClient
  meta: WeekInvalidateMeta | undefined
  data: unknown
  variables: unknown
}

export function useInvalidateQueriesByMeta() {
  const invalidateQueries = async ({
    queryClient,
    meta,
    data,
    variables,
  }: OnSuccessInvalidateParam) => {
    if (!meta) {
      return
    }

    if (meta.invalidates) {
      const invalidates = toValueOnSuccess(meta.invalidates, data, variables)

      invalidates.forEach((invalidateFilter) => {
        void queryClient.invalidateQueries(invalidateFilter)
      })
    }

    if (meta.awaitInvalidates) {
      const awaitInvalidates = toValueOnSuccess(meta.awaitInvalidates, data, variables)

      await Promise.all(
        awaitInvalidates.map(async invalidateFilter => queryClient.invalidateQueries(invalidateFilter)),
      )
    }
  }

  return { invalidateQueries }
}
