import type { InvalidateMeta, WeekInvalidateMeta } from './plugins/invalidateQueries'

import type { ToastMeta, WeekToastMeta } from './plugins/toast'
import '@tanstack/vue-query'

export type MutationMeta<TData, TError, TVariables> = ToastMeta<TData, TError, TVariables>
  & InvalidateMeta<TData, TVariables>

export type WeekMutationMeta = WeekToastMeta & WeekInvalidateMeta

declare module '@tanstack/vue-query' {
  interface Register {
    defaultError: Error
    mutationMeta: WeekMutationMeta
  }
}
