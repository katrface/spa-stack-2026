import { ofetch } from "ofetch";
import { VProduct, TProduct, TProductDetailsPayload } from "./product.validators";

const baseURL = "https://pim.mm.ru";

export const productEndpoints = {
  getProductDetails: (marketId: TProduct["internalId"]) =>
    ofetch(`/api/products/${marketId}`, {
      baseURL,
      onResponseError: () => {},
    }),
};

export const getProductDetails = (payload: TProductDetailsPayload) =>
  Promise.resolve(
    VProduct.assert({
      internalId: payload.internalId,
      sellerId: "string",
      title: "string",
      shortDescription: "string",
      description: "string",
    }),
  );

// export const getProductDetails = (marketId: TProduct['mmId']) => ofetch<TProduct>(`/api/products/${marketId}`, {
//     baseURL,
//     parseResponse: (data) => VProduct(data),
//     onResponseError: () => {
//     }
//   });
