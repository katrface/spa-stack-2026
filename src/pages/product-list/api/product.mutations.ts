import { mutationOptions } from '@shared/vue-query';

export const archiveProductOptions = () => mutationOptions({
    mutationFn: async (productId: string) => { console.log(productId) },
    meta: {
      successToast: (_data, variables) => ({
        title: `Товар ${variables} архивирован`
      }),
      errorToast: (_data, variables) => ({
        title: `Не удалось архивировать ${variables}`
      }),
    }
  })
