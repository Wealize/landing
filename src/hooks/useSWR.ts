/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import swr, { ConfigInterface } from 'swr'

export function useSWR<A> (
  key: string,
  fetcher: any,
  config?: ConfigInterface<A, Error, any>
) {
  const {
    data,
    error,
    isValidating,
    mutate,
    revalidate
  } = swr<A, Error>(key, fetcher, config)

  return { data, error, isValidating, mutate, revalidate }
}
