import { createQueryClient } from "@shared/vue-query";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/vue-query";

export const pimQueryClient = createQueryClient();

export const pimBaseQueryKeys = ["pim"] as const;

/* eslint-disable @typescript-eslint/no-explicit-any */
export const usePimQuery: typeof useQuery = (options: any) => useQuery(options, pimQueryClient);
export const usePimInfiniteQuery: typeof useInfiniteQuery = (options: any) =>
  useInfiniteQuery(options, pimQueryClient);
export const usePimMutation: typeof useMutation = (options: any) =>
  useMutation(options, pimQueryClient);
