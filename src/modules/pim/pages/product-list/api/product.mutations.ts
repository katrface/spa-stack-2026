import type { TProductDetailsPayload } from './product.validators'
import { mutationOptions } from '@shared/vue-query'
import { productQueryKeys } from './product.keys'
import { VProductDetailsPayload } from './product.validators'

export function archiveProductOptions() {
  return mutationOptions({
    mutationFn: async (payload: TProductDetailsPayload) => {
      const validatedPayload = VProductDetailsPayload.assert(payload)
      // eslint-disable-next-line no-console
      console.log(validatedPayload)
    },
    meta: {
      successToast: (_data, variables) => ({
        title: `Товар ${variables.internalId} архивирован`,
      }),
      errorToast: (_data, variables) => ({
        title: `Не удалось архивировать ${variables.internalId}`,
      }),

      awaitInvalidates: (_data, varialbes) => [
        { queryKey: productQueryKeys.productDetails(varialbes) },
      ],
    },
  })
}
