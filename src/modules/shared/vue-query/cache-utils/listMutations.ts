import type { InfiniteData } from '@tanstack/vue-query'

interface TList<TItem> { list: TItem[] }

export function listFilter<
  TItem,
  TStructure extends TList<TItem>,
  TData extends TStructure | InfiniteData<TStructure>,
>(oldData: TData | undefined, predicate: (item: TItem) => boolean): TData | undefined {
  if (!oldData)
    return undefined

  if ('pages' in oldData) {
    return {
      ...oldData,
      pages: oldData.pages.map(page => ({
        ...page,
        list: page.list.filter(predicate),
      })),
    }
  }

  if ('list' in oldData) {
    return {
      ...oldData,
      list: (oldData as TStructure).list.filter(predicate),
    }
  }

  return oldData
}

export function listMap<
  TItem,
  TStructure extends TList<TItem>,
  TData extends TStructure | InfiniteData<TStructure>,
>(oldData: TData | undefined, callbackFn: (item: TItem) => TItem): TData | undefined {
  if (!oldData)
    return undefined

  if ('pages' in oldData) {
    return {
      ...oldData,
      pages: oldData.pages.map(page => ({
        ...page,
        list: page.list.map(callbackFn),
      })),
    }
  }

  if ('list' in oldData) {
    return {
      ...oldData,
      list: (oldData as TStructure).list.map(callbackFn),
    }
  }

  return oldData
}
