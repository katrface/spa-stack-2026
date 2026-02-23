import { mutationOptions } from '@shared/vue-query';
import { ProductDetailsPayload, productQueryKeys } from './product.queries';

export const archiveProductOptions = () => mutationOptions({
    mutationFn: async (payload: ProductDetailsPayload) => { console.log(payload.id) },
    meta: {
      successToast: (_data, variables) => ({
        title: `Товар ${variables.id} архивирован`
      }),
      errorToast: (_data, variables) => ({
        title: `Не удалось архивировать ${variables.id}`
      }),

      awaitInvalidates: (_data, varialbes) => [
        { queryKey: productQueryKeys.productDetails(varialbes)}
      ]
    }
  })
