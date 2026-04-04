import { toValueOnError, toValueOnSuccess } from './shared';
import type { MaybeGetterOnError, MaybeGetterOnSuccess } from './shared';
import { useToast } from '@nuxt/ui/composables';

export type Toast = {
  color?: 'success' | 'error';
  title: string;
  description?: string;
};

export type ToastManager = ReturnType<typeof useToast>;

export type ToastMeta<TData, TError, TVariables> = {
  successToast?: MaybeGetterOnSuccess<Toast, TData, TVariables>;
  errorToast?: MaybeGetterOnError<Toast, TError, TVariables>;
};

export type WeekToastMeta = {
  successToast?: MaybeGetterOnSuccess<Toast>;
  errorToast?: MaybeGetterOnError<Toast>;
};

type OnSuccessToastParam = {
  meta: WeekToastMeta | undefined;
  data: unknown;
  variables: unknown;
};

type OnErrorToastParam = {
  meta: WeekToastMeta | undefined;
  error: unknown;
  variables: unknown;
};

export const useToastByMeta = () => {
  const onSuccessToast = ({ meta, data, variables }: OnSuccessToastParam) => {
    const toast = useToast();

    const successToast = meta?.successToast;

    if (!successToast) {
      return;
    }

    toast.add({
      color: 'success',
      icon: 'i-lucide-check',
      ...toValueOnSuccess(successToast, data, variables),
    });
  };

  const onErrorToast = ({ meta, error, variables }: OnErrorToastParam) => {
    const toast = useToast();

    const errorToast = meta?.errorToast;

    if (!errorToast) {
      return;
    }

    toast.add({
      color: 'error',
      icon: 'i-lucide-circle-x',
      ...toValueOnError(errorToast, error, variables),
    });
  };

  return {
    onSuccessToast,
    onErrorToast,
  };
};
