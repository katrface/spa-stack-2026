import type { Type } from 'arktype'
import { type } from 'arktype'

export function isValid<T>(validator: Type<T>, data: unknown): data is T {
  return !(validator(data) instanceof type.errors)
}
