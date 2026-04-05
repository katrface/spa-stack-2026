import { HttpResponse } from 'msw'

export const throwNotFound = () => {
  throw HttpResponse.json({ error: 'Not found' }, { status: 404 })
}
