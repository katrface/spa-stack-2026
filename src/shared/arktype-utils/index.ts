import { type, type Type } from "arktype"

export const isValid = <T>(validator: Type<T>, data: unknown): data is T => {
  return !(validator(data) instanceof type.errors)
}
