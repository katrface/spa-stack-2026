import { type } from 'arktype'

export const VProduct = type({
  internalId: 'string.uuid',
  externalId: 'string',
  title: 'string',
  shortDescription: 'string',
  description: 'string',
})

export const VProductDetailsPayload = VProduct.pick('internalId')

export type TProduct = typeof VProduct.infer
export type TProductDetailsPayload = typeof VProductDetailsPayload.infer
