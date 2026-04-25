import type { TProduct, TProductDetailsPayload } from './product.validators'
import { ofetch } from 'ofetch'
import { VProduct } from './product.validators'

const baseURL = 'https://pim.mm.ru'

export const productEndpoints = {
  getProductDetails: async (marketId: TProduct['internalId']) =>
    ofetch(`/api/products/${marketId}`, {
      baseURL,
      onResponseError: () => {},
    }),
}

export async function getProductDetails(payload: TProductDetailsPayload) {
  return Promise.resolve(
    VProduct.assert({
      internalId: payload.internalId,
      sellerId: 'string',
      title: 'string',
      shortDescription: 'string',
      description: 'string',
    }),
  )
}

// export const getProductDetails = (marketId: TProduct['mmId']) => ofetch<TProduct>(`/api/products/${marketId}`, {
//     baseURL,
//     parseResponse: (data) => VProduct(data),
//     onResponseError: () => {
//     }
//   });
