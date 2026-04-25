import type { MaybeGetterOnError, MaybeGetterOnSuccess } from './shared'
import { useToast } from '@nuxt/ui/composables'
import { toValueOnError, toValueOnSuccess } from './shared'

export interface Toast {
  color?: 'success' | 'error'
  title: string
  description?: string
}

export type ToastManager = ReturnType<typeof useToast>

export interface ToastMeta<TData, TError, TVariables> {
  successToast?: MaybeGetterOnSuccess<Toast, TData, TVariables>
  errorToast?: MaybeGetterOnError<Toast, TError, TVariables>
}

export interface WeekToastMeta {
  successToast?: MaybeGetterOnSuccess<Toast>
  errorToast?: MaybeGetterOnError<Toast>
}

interface OnSuccessToastParam {
  meta: WeekToastMeta | undefined
  data: unknown
  variables: unknown
}

interface OnErrorToastParam {
  meta: WeekToastMeta | undefined
  error: unknown
  variables: unknown
}

export function useToastByMeta() {
  const onSuccessToast = ({ meta, data, variables }: OnSuccessToastParam) => {
    const toast = useToast()

    const successToast = meta?.successToast

    if (!successToast) {
      return
    }

    toast.add({
      color: 'success',
      icon: 'i-lucide-check',
      ...toValueOnSuccess(successToast, data, variables),
    })
  }

  const onErrorToast = ({ meta, error, variables }: OnErrorToastParam) => {
    const toast = useToast()

    const errorToast = meta?.errorToast

    if (!errorToast) {
      return
    }

    toast.add({
      color: 'error',
      icon: 'i-lucide-circle-x',
      ...toValueOnError(errorToast, error, variables),
    })
  }

  return {
    onSuccessToast,
    onErrorToast,
  }
}
