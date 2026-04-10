import { mutationOptions } from "@shared/vue-query";
import { productQueryKeys } from "./product.keys";
import { TProductDetailsPayload, VProductDetailsPayload } from "./product.validators";

export const archiveProductOptions = () =>
  mutationOptions({
    mutationFn: async (payload: TProductDetailsPayload) => {
      const validatedPayload = VProductDetailsPayload.assert(payload);
      console.log(validatedPayload);
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
  });
