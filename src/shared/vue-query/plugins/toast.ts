import { toValueOnError, toValueOnSuccess } from './shared';
import type { MaybeGetterOnError, MaybeGetterOnSuccess } from './shared';

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
  const toast = useToast();

  const onSuccessToast = ({ meta, data, variables }: OnSuccessToastParam) => {
    const successToast = meta?.successToast;

    if (!successToast) {
      return;
    }

    toast.add({
      color: 'success',
      ...toValueOnSuccess(successToast, data, variables),
    });
  };

  const onErrorToast = ({ meta, error, variables }: OnErrorToastParam) => {
    const errorToast = meta?.errorToast;

    if (!errorToast) {
      return;
    }

    toast.add({
      color: 'error',
      ...toValueOnError(errorToast, error, variables),
    });
  };

  return {
    onSuccessToast,
    onErrorToast,
  };
};
