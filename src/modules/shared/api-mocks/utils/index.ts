import { HttpResponse } from 'msw'

export function throwNotFound() {
  throw HttpResponse.json({ error: 'Not found' }, { status: 404 })
}
